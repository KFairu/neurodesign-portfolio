import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { createPortal } from "react-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Copy } from "lucide-react";
import { getArticles, getInterfaceCopy, getRelatedArticles } from "./data/article.js";
import "./styles.css";

function ThreadsIcon(props) {
  return (
    <svg aria-label="Threads" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StaticIcon({ src, alt = "" }) {
  return <img className="social-image" src={src} alt={alt} aria-hidden={alt ? undefined : true} />;
}

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
}

function InlineText({ text, copyPrompts = {}, onCopyPrompt }) {
  const parts = text.split(
    /(\[[^\]]+\]\([^)]+\)|\{\{copy:[^|}]+\|[^}]+\}\}|\{\{anchor:[^|}]+\|[^}]+\}\}|\{\{target:[^}]+\}\}|\{\{info:[^}]+\}\}|\*\*[^*]+\*\*|\*[^*]+\*)/g
  );

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    const copyMatch = part.match(/^\{\{copy:([^|}]+)\|([^}]+)\}\}$/);
    const anchorMatch = part.match(/^\{\{anchor:([^|}]+)\|([^}]+)\}\}$/);
    const targetMatch = part.match(/^\{\{target:([^}]+)\}\}$/);
    const infoMatch = part.match(/^\{\{info:([^}]+)\}\}$/);
    const strongMatch = part.match(/^\*\*([^*]+)\*\*$/);
    const emphasisMatch = part.match(/^\*([^*]+)\*$/);

    if (copyMatch) {
      const [, promptKey, label] = copyMatch;

      return (
        <span
          className="copy-inline"
          role="button"
          tabIndex={0}
          key={`${promptKey}-${index}`}
          onClick={() => onCopyPrompt?.(copyPrompts[promptKey])}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onCopyPrompt?.(copyPrompts[promptKey]);
            }
          }}
        >
          {label}
        </span>
      );
    }

    if (anchorMatch) {
      return (
        <a href={`#${anchorMatch[1]}`} key={`anchor-${anchorMatch[1]}-${index}`}>
          {anchorMatch[2]}
        </a>
      );
    }

    if (targetMatch) {
      return <span id={targetMatch[1]} className="inline-target" key={`target-${targetMatch[1]}-${index}`} />;
    }

    if (infoMatch) {
      return <InfoTip key={`info-${index}`} text={infoMatch[1]} />;
    }

    if (!match) {
      if (strongMatch) {
        return <strong key={`strong-${index}`}>{strongMatch[1]}</strong>;
      }

      if (emphasisMatch) {
        return <em key={`emphasis-${index}`}>{emphasisMatch[1]}</em>;
      }

      return part;
    }

    return (
      <a href={match[2]} target="_blank" rel="noreferrer" key={`${match[1]}-${index}`}>
        {match[1]}
      </a>
    );
  });
}

function CopyToast({ visible, label = "Скопировано" }) {
  return (
    <div className={`copy-toast ${visible ? "visible" : ""}`} role="status" aria-live="polite">
      {label}
    </div>
  );
}

function InfoTip({ text }) {
  return (
    <Tooltip.Provider delayDuration={120}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className="info-tip" role="img" aria-label={text} tabIndex={0}>
            !
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="tooltip info-tooltip" sideOffset={8}>
            {text}
            <Tooltip.Arrow className="tooltip-arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

function CompareVisual({ before, after, label, position, setPosition, onOpen, expanded = false }) {
  const frameRef = useRef(null);

  const updateFromPointer = (clientX) => {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    const rect = frame.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromPointer(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    updateFromPointer(event.clientX);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    event.preventDefault();
    const direction = event.key === "ArrowLeft" ? -1 : 1;
    setPosition((current) => Math.min(100, Math.max(0, current + direction * 4)));
  };

  return (
    <div
      className={`compare-frame ${expanded ? "compare-frame--expanded" : ""}`}
      ref={frameRef}
      style={{ "--split": `${position}%` }}
      onClick={onOpen}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onKeyDown={(event) => {
        if (onOpen && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      <img className="compare-image compare-image-before" src={before} alt={`До: ${label}`} />
      <div className="compare-after" aria-hidden="true">
        <img className="compare-image" src={after} alt="" />
      </div>
      <div className="compare-divider" aria-hidden="true">
        <span className="compare-handle-arrows" aria-hidden="true">
          <span />
          <span />
        </span>
      </div>
      <span className="compare-badge compare-badge-before">После</span>
      <span className="compare-badge compare-badge-after">До</span>
      <button
        className="compare-handle"
        type="button"
        aria-label={`Двигать сравнение: ${label}`}
        onClick={(event) => event.stopPropagation()}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

function BeforeAfterSlider({ before, after, label }) {
  const [position, setPosition] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(0);

  const openModal = () => {
    window.clearTimeout(closeTimerRef.current);
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 240);
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isClosing, isOpen]);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  const modal = isOpen ? (
    <div
      className={`compare-modal ${isClosing ? "is-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={`Сравнение ${label}`}
      onClick={closeModal}
    >
      <div className="compare-modal-inner" onClick={(event) => event.stopPropagation()}>
        <CompareVisual before={before} after={after} label={label} position={position} setPosition={setPosition} expanded />
      </div>
    </div>
  ) : null;

  return (
    <>
      <figure className="compare-card">
        <CompareVisual
          before={before}
          after={after}
          label={label}
          position={position}
          setPosition={setPosition}
          onOpen={openModal}
        />
        <figcaption>{label}</figcaption>
      </figure>
      {modal && createPortal(modal, document.body)}
    </>
  );
}

function ComparisonBlock({ items = [], variant = "grid" }) {
  return (
    <div className={`comparison-block comparison-block--${variant}`}>
      {items.map((item, index) => (
        <BeforeAfterSlider key={`${item.label}-${index}`} before={item.before} after={item.after} label={item.label} />
      ))}
    </div>
  );
}

function MediaRow({ media = {}, items = media.items || [], variant = media.variant || "" }) {
  return (
    <figure className={`media-row media-row--${items.length} ${variant ? `media-row--${variant}` : ""}`}>
      <div className="media-row-grid">
        {items.map((item, index) => (
          <div className="media-row-item" key={`${item.src}-${index}`}>
            {item.type === "video" ? (
              <video src={item.src} autoPlay muted loop playsInline preload="auto" aria-label={item.alt || ""} />
            ) : (
              <img src={item.src} alt={item.alt || ""} />
            )}
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </div>
        ))}
      </div>
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}

function ResultMatrix({ matrix }) {
  const variantClasses = (matrix.variant || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((variant) => `result-matrix--${variant}`)
    .join(" ");

  return (
    <figure className={`result-matrix ${variantClasses}`}>
      <div className="result-matrix-grid">
        {matrix.items.map((item, index) => (
          <div className="result-matrix-item" key={`${item.src}-${index}`}>
            <img src={item.src} alt={item.alt || ""} />
            {item.label && <span>{item.label}</span>}
          </div>
        ))}
      </div>
      <div className="result-matrix-labels" aria-label="Подписи колонок">
        {matrix.columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
    </figure>
  );
}

function ImageGallery({ gallery }) {
  const [activeItem, setActiveItem] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(0);
  const variantClasses = (gallery.variant || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((variant) => `result-gallery--${variant}`)
    .join(" ");
  const showCaptionsBelow = (gallery.variant || "").split(/\s+/).includes("captions-below");

  const openItem = (item) => {
    window.clearTimeout(closeTimerRef.current);
    setIsClosing(false);
    setActiveItem(item);
  };

  const closeModal = () => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveItem(null);
      setIsClosing(false);
    }, 240);
  };

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, isClosing]);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  const modal = activeItem ? (
    <div className={`image-modal ${isClosing ? "is-closing" : ""}`} role="dialog" aria-modal="true" aria-label={activeItem.label} onClick={closeModal}>
      <figure className="image-modal-inner" onClick={(event) => event.stopPropagation()}>
        <img src={activeItem.src} alt={activeItem.alt} />
        <figcaption>{activeItem.label}</figcaption>
      </figure>
    </div>
  ) : null;

  return (
    <>
      <figure className={`result-gallery result-gallery--${gallery.items.length} ${variantClasses}`}>
        <div className="result-gallery-grid">
          {gallery.items.map((item, index) => (
            <figure className="result-gallery-unit" style={item.aspect ? { "--gallery-ratio": item.aspect } : undefined} key={`${item.src}-${index}`}>
              <button className="result-gallery-item" type="button" onClick={() => openItem(item)}>
                <img src={item.src} alt={item.alt} />
                {!showCaptionsBelow && item.label && <span>{item.label}</span>}
              </button>
              {showCaptionsBelow && item.label && <figcaption>{item.label}</figcaption>}
            </figure>
          ))}
        </div>
        {gallery.caption && <figcaption>{gallery.caption}</figcaption>}
      </figure>
      {modal && createPortal(modal, document.body)}
    </>
  );
}

function SocialIconLink({ href, label, children }) {
  return (
    <Tooltip.Provider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <a className="icon-link" href={href} aria-label={label} target="_blank" rel="noreferrer">
            {children}
          </a>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="tooltip" sideOffset={8}>
            {label}
            <Tooltip.Arrow className="tooltip-arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

function Header({ language, setLanguage, copy }) {
  const [hidden, setHidden] = useState(false);
  const hiddenRef = useRef(false);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame = 0;
    let isTicking = false;
    let hiddenState = false;

    const setHeaderHidden = (nextHidden) => {
      if (hiddenRef.current === nextHidden) {
        return;
      }

      hiddenRef.current = nextHidden;
      hiddenState = nextHidden;
      setHidden(nextHidden);
    };

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY < 24) {
        hiddenState = false;
        setHeaderHidden(false);
      } else if (delta > 2 && !hiddenState) {
        setHeaderHidden(true);
      } else if (delta < -2 && hiddenState) {
        setHeaderHidden(false);
      }

      lastScrollY = currentScrollY;
      isTicking = false;
    };

    const handleScroll = () => {
      if (isTicking) {
        return;
      }

      isTicking = true;
      frame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${hidden ? "is-hidden" : ""}`}>
      <a className="logo-lockup" href="/" aria-label="shot вайб-дизайн">
        <img src="/assets/Logo.svg" alt="shot вайб-дизайн" />
      </a>
      <nav className="header-nav" aria-label="Главная навигация">
        <a className="active" href="/">
          {copy.blog}
        </a>
      </nav>
      <div className="header-actions">
        <div className="language-toggle" aria-label="Выбор языка">
          {["ru", "en"].map((item) => (
            <button
              className={language === item ? "active" : ""}
              key={item}
              type="button"
              onClick={() => setLanguage(item)}
              aria-pressed={language === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function ArticleHero({ article }) {
  const videoRef = useRef(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const lastVideoTimeRef = useRef(-1);
  const heroTitle = article.title
    .replace("пространства и", "пространства\nи")
    .replace("Space and", "Space\nand")
    .replace(/(Часть\s+\d)\.?$/, "$1.")
    .replace(/(Part\s+\d)\.?$/, "$1.");
  const heroTitleLines = heroTitle.split("\n").map((line) => line.trim().split(/\s+/));
  let wordIndex = 0;

  useEffect(() => {
    let frame = 0;
    let scrubFrame = 0;

    const getScrollProgress = () => Math.min(1, Math.max(0, window.scrollY / 1200));

    const applyVisualTransform = (progress = getScrollProgress()) => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      const parallax = -110 + progress * 240;
      const zoom = article.heroScrub ? 1.08 + progress * 0.02 : 1;

      video.style.transform = `translate3d(0, ${parallax}px, 0) scale(${zoom})`;
    };

    const applyVideoTime = (progress) => {
      const video = videoRef.current;

      if (!video || !article.heroScrub || !video.duration || Number.isNaN(video.duration)) {
        return;
      }

      const frameDuration = 1 / 24;
      const nextTime = Math.min(video.duration - 0.04, Math.max(0, progress * video.duration));
      const snappedTime = Math.round(nextTime / frameDuration) * frameDuration;

      if (Math.abs(snappedTime - lastVideoTimeRef.current) < frameDuration) {
        return;
      }

      lastVideoTimeRef.current = snappedTime;
      video.currentTime = snappedTime;
    };

    const animateScrub = () => {
      scrubFrame = 0;

      const current = currentProgressRef.current;
      const target = targetProgressRef.current;
      const next = current + (target - current) * 0.18;

      currentProgressRef.current = Math.abs(target - next) < 0.001 ? target : next;
      applyVisualTransform(currentProgressRef.current);
      applyVideoTime(currentProgressRef.current);

      if (Math.abs(target - currentProgressRef.current) > 0.001) {
        scrubFrame = window.requestAnimationFrame(animateScrub);
      }
    };

    const updateTransform = () => {
      const progress = getScrollProgress();

      if (article.heroScrub) {
        targetProgressRef.current = progress;

        if (!scrubFrame) {
          scrubFrame = window.requestAnimationFrame(animateScrub);
        }

        return;
      }

      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        applyVisualTransform(progress);
      });
    };

    targetProgressRef.current = getScrollProgress();
    currentProgressRef.current = targetProgressRef.current;
    applyVisualTransform(currentProgressRef.current);
    applyVideoTime(currentProgressRef.current);
    window.addEventListener("scroll", updateTransform, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(scrubFrame);
      window.removeEventListener("scroll", updateTransform);
    };
  }, [article.heroScrub]);

  const syncHeroVideo = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const progress = Math.min(1, Math.max(0, window.scrollY / 1200));
    const parallax = -110 + progress * 240;
    const zoom = article.heroScrub ? 1.08 + progress * 0.02 : 1;

    video.style.transform = `translate3d(0, ${parallax}px, 0) scale(${zoom})`;

    if (article.heroScrub && video.duration && !Number.isNaN(video.duration)) {
      const nextTime = Math.min(video.duration - 0.04, Math.max(0, progress * video.duration));
      video.currentTime = nextTime;
      lastVideoTimeRef.current = nextTime;
      return;
    }

    video.play?.().catch(() => {});
  };

  return (
    <section className="article-hero">
      <div className="hero-copy">
        <h1>
          {heroTitleLines.map((lineWords, lineIndex) => (
            <span className="hero-title-line" key={`line-${lineIndex}`}>
              {lineWords.map((word, wordPosition) => {
                const delay = `${wordIndex * 0.06}s`;
                wordIndex += 1;

                return (
                  <React.Fragment key={`${word}-${wordIndex}`}>
                    <span className="word-mask">
                      <span className="hero-title-word" style={{ animationDelay: delay }}>
                        {word}
                      </span>
                    </span>
                    {wordPosition < lineWords.length - 1 ? " " : ""}
                  </React.Fragment>
                );
              })}
            </span>
          ))}
        </h1>
        <div className="hero-meta">
          <span className="tag">{article.tag}</span>
          <span className="date hero-date">{article.date}</span>
        </div>
      </div>
      <figure className={`hero-image ${article.heroPlaceholder ? "hero-image--placeholder" : ""}`}>
        {article.heroPlaceholder ? (
          <div className="hero-placeholder" role="img" aria-label={article.heroAlt} />
        ) : !article.heroVideo ? (
          <img
            key={`${article.path}-${article.title}-${article.heroImage}`}
            src={article.heroImage}
            alt={article.heroAlt}
          />
        ) : (
          <video
            key={`${article.path}-${article.title}-${article.heroVideo}-${article.heroImage}`}
            ref={videoRef}
            src={article.heroVideo}
            poster={article.heroImage}
            autoPlay={!article.heroScrub}
            loop={!article.heroScrub}
            muted
            playsInline
            preload="auto"
            aria-label={article.heroAlt}
            onLoadedMetadata={syncHeroVideo}
          />
        )}
      </figure>
    </section>
  );
}

function SideNav({ article, copy }) {
  const [activeId, setActiveId] = useState("");
  const navSections = useMemo(() => article.sections.filter((section) => section.title), [article.sections]);

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.scrollY + 140;
      const sectionElements = navSections
        .map((section) => document.getElementById(section.id))
        .filter(Boolean);
      const sectionTops = sectionElements.map((element) => ({
        element,
        top: element.getBoundingClientRect().top + window.scrollY,
      }));
      const firstSectionTop = sectionTops[0]?.top ?? 0;

      if (offset < firstSectionTop) {
        setActiveId("");
        return;
      }

      const current = sectionTops.reduce((active, item) => {
        return item.top <= offset ? item.element : active;
      }, sectionTops[0].element);

      setActiveId(current?.id || "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [navSections]);

  return (
    <aside className="side-nav" aria-label="Навигация по статье">
      <span className="side-label">{copy.articleNav}</span>
      {navSections.map((section) => (
        <a className={section.id === activeId ? "active" : ""} key={section.id} href={`#${section.id}`}>
          <span>{section.title}</span>
        </a>
      ))}
    </aside>
  );
}

function AuthorAside({ article }) {
  return (
    <aside className="author-aside">
      <div className="aside-brand">
        <img src="/assets/Logo.svg" alt="shot вайб-дизайн" />
      </div>
      <p>{article.asideText}</p>
      <div className="personal-socials" aria-label="Личные социальные сети">
        <a href="https://t.me/k_fay" target="_blank" rel="noreferrer" aria-label="Telegram">
          <StaticIcon src="/assets/social-telegram-svgrepo-com.svg" />
        </a>
        <a href="https://www.instagram.com/kari.fai" target="_blank" rel="noreferrer" aria-label="Instagram">
          <StaticIcon src="/assets/social-instagram-svgrepo-com.svg" />
        </a>
        <a href="https://www.linkedin.com/in/k-fay" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <StaticIcon src="/assets/social-linkedin-svgrepo-com.svg" />
        </a>
      </div>
    </aside>
  );
}

function PromptSnippet({ text, label = "Prompt" }) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 900);
  }

  return (
    <section className="prompt-snippet" aria-label={label}>
      <header>
        <span>{label}</span>
        <button type="button" onClick={copyPrompt} aria-label="Copy prompt" title="Copy prompt">
          <Copy size={18} />
        </button>
      </header>
      <p>{text}</p>
      <span className={`copy-state ${copied ? "visible" : ""}`}>Copied</span>
    </section>
  );
}

function DragCanvasEmbed({ src = "/drag-canvas/index.html", title = "Drag and drop workflow" }) {
  return (
    <section className="interactive-card" aria-label="Интерактивная схема image-to-image">
      <iframe title={title} src={src} />
    </section>
  );
}

function ParallaxBodyImage({ image }) {
  const frameRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const frameElement = frameRef.current;
      const imageElement = imageRef.current;

      if (!frameElement || !imageElement) {
        return;
      }

      const rect = frameElement.getBoundingClientRect();
      const start = window.innerHeight * 0.75;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / 800));
      const travel = Math.max(0, imageElement.offsetHeight - frameElement.clientHeight);
      const translate = -progress * travel;

      imageElement.style.transform = `translate3d(0, ${translate}px, 0)`;
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <figure className="body-image body-image--parallax">
      <div className="parallax-image-frame" ref={frameRef}>
        <img ref={imageRef} src={image.src} alt={image.alt} />
      </div>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

function CursorImageTrail({ images = [] }) {
  const [items, setItems] = useState([]);
  const lastMoveRef = useRef({ x: 0, y: 0, time: 0 });
  const lastSpawnRef = useRef(0);
  const imageIndexRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    if (!images.length) {
      return undefined;
    }

    const removeItem = (id) => {
      setItems((current) => current.filter((item) => item.id !== id));
    };

    const spawnItem = (event, speed, angle) => {
      const id = idRef.current + 1;
      idRef.current = id;

      const src = images[imageIndexRef.current % images.length];
      imageIndexRef.current += 1;

      const size = 50 + Math.random() * 20;
      const force = 38 + Math.min(speed * 34, 96);
      const jitter = (Math.random() - 0.5) * 1.4;
      const direction = angle + jitter;
      const tx = Math.cos(direction) * force + (Math.random() - 0.5) * 34;
      const ty = Math.sin(direction) * force + (Math.random() - 0.5) * 34;

      setItems((current) => [
        ...current.slice(-18),
        {
          id,
          src,
          x: event.clientX + (Math.random() - 0.5) * 18,
          y: event.clientY + (Math.random() - 0.5) * 18,
          size,
          tx,
          ty,
          rotate: (Math.random() - 0.5) * 18
        }
      ]);

      window.setTimeout(() => removeItem(id), 1500);
    };

    const handlePointerMove = (event) => {
      if (!event.target.closest(".cursor-trail-zone")) {
        return;
      }

      const now = performance.now();
      const last = lastMoveRef.current;
      const dx = event.clientX - last.x;
      const dy = event.clientY - last.y;
      const distance = Math.hypot(dx, dy);
      const elapsed = Math.max(now - last.time, 16);
      const speed = distance / elapsed;

      lastMoveRef.current = { x: event.clientX, y: event.clientY, time: now };

      if (!last.time) {
        return;
      }

      if (distance < 8 || now - lastSpawnRef.current < 42) {
        return;
      }

      lastSpawnRef.current = now;

      const count = speed > 1.7 ? 3 : speed > 0.8 ? 2 : 1;
      const angle = Math.atan2(dy || 1, dx || 1);

      for (let index = 0; index < count; index += 1) {
        spawnItem(event, speed, angle + index * 0.35);
      }
    };

    const handlePointerLeave = (event) => {
      if (!event.target.closest(".cursor-trail-zone")) {
        lastMoveRef.current = { x: 0, y: 0, time: 0 };
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerLeave);
    };
  }, [images]);

  if (!items.length) {
    return null;
  }

  return createPortal(
    <div className="cursor-trail-layer" aria-hidden="true">
      {items.map((item) => (
        <img
          className="cursor-trail-image"
          src={item.src}
          alt=""
          key={item.id}
          style={{
            left: item.x,
            top: item.y,
            width: item.size,
            "--trail-x": `${item.tx}px`,
            "--trail-y": `${item.ty}px`,
            "--trail-rotate": `${item.rotate}deg`
          }}
        />
      ))}
    </div>,
    document.body
  );
}

function ArticleBody({ article, onCopyPrompt, copy }) {
  return (
    <main className="article-grid">
      <SideNav article={article} copy={copy} />
      <article className="article-body">
        {article.sections.map((section) => (
          <section id={section.id} key={section.id}>
            {section.title && <h2>{section.title}</h2>}
            {section.paragraphs.map((paragraph, index) => {
              const embedAfter = section.embedsAfter?.[index];
              const imageAfter = section.imagesAfter?.[index];
              const galleryAfter = section.galleriesAfter?.[index];
              const comparisonAfter = section.comparisonsAfter?.[index];
              const promptsAfter = section.promptsAfter?.[index];
              const mediaAfter = section.mediaAfter?.[index];
              const matrixAfter = section.matricesAfter?.[index];

              return (
                <React.Fragment key={`${section.id}-${index}`}>
                  <p className={section.cursorTrailParagraphs?.includes(index) ? "cursor-trail-zone" : undefined}>
                    <InlineText text={paragraph} copyPrompts={article.copyPrompts} onCopyPrompt={onCopyPrompt} />
                  </p>
                  {imageAfter?.parallax ? (
                    <ParallaxBodyImage image={imageAfter} />
                  ) : imageAfter ? (
                    <figure
                      className={`body-image ${imageAfter.natural ? "body-image--natural" : ""} ${
                        imageAfter.narrow ? "body-image--narrow" : ""
                      } ${imageAfter.cursorTrail ? "cursor-trail-zone" : ""}`}
                    >
                      <img src={imageAfter.src} alt={imageAfter.alt} />
                      {imageAfter.caption && <figcaption>{imageAfter.caption}</figcaption>}
                    </figure>
                  ) : null}
                  {mediaAfter && <MediaRow media={mediaAfter} />}
                  {embedAfter && (
                    <>
                      <DragCanvasEmbed src={embedAfter.src} title={embedAfter.title} />
                      <p className="embed-caption">
                        <span>{embedAfter.step}</span>
                        {embedAfter.caption}
                      </p>
                    </>
                  )}
                  {galleryAfter && <ImageGallery gallery={galleryAfter} />}
                  {comparisonAfter && <ComparisonBlock items={comparisonAfter.items} variant={comparisonAfter.variant} />}
                  {promptsAfter?.map((promptBlock) => (
                    <PromptSnippet text={promptBlock.text} label={promptBlock.label} key={`${section.id}-${index}-${promptBlock.label}`} />
                  ))}
                  {matrixAfter && <ResultMatrix matrix={matrixAfter} />}
                </React.Fragment>
              );
            })}
            {section.prompt && <PromptSnippet text={section.prompt} label={section.promptLabel} />}
            {section.image && (
              <figure className="body-image">
                <img src={section.image.src} alt={section.image.alt} />
                <figcaption>
                  <span>{section.image.step}</span>
                  {section.image.caption}
                </figcaption>
              </figure>
            )}
            {section.embed === "drag-canvas" && (
              <>
                <DragCanvasEmbed />
                <p className="embed-caption">
                  <span>{section.embedStep}</span>
                  {section.embedCaption}
                </p>
              </>
            )}
          </section>
        ))}
      </article>
      <AuthorAside article={article} />
    </main>
  );
}

function RelatedArticles({ currentArticle, relatedArticles, copy }) {
  const visibleArticles = relatedArticles.filter((item) => item.href !== currentArticle.path);
  const [activeArticle, setActiveArticle] = useState(visibleArticles[0]);

  if (!visibleArticles.length) {
    return null;
  }

  const previewArticle = visibleArticles.includes(activeArticle) ? activeArticle : visibleArticles[0];
  const previewContent = previewArticle?.comingSoon ? (
    <div className="related-preview-placeholder" role="img" aria-label="Скоро">
      <span>{copy.comingSoon || "Скоро"}</span>
    </div>
  ) : (
    previewArticle?.image && <img src={previewArticle.image} alt={previewArticle.alt || previewArticle.title} />
  );

  return (
    <section className="related-section" aria-label="Другие статьи">
      <div className="section-heading">
        <h2>{copy.relatedTitle}</h2>
      </div>
      <div className="related-layout">
        <div className="related-list">
          {visibleArticles.map((item) => (
            <a
              className="related-row"
              href={item.href || "#footer"}
              key={item.title}
              onMouseEnter={() => setActiveArticle(item)}
              onFocus={() => setActiveArticle(item)}
            >
              <span className="related-date">{item.date || copy.comingSoon}</span>
              <span className="related-tag">{item.tag}</span>
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
        {previewContent && (
          <a className="related-preview" href={previewArticle.href || "#footer"} aria-label={previewArticle.title}>
            {previewContent}
          </a>
        )}
      </div>
    </section>
  );
}

function Footer({ copy }) {
  return (
    <footer className="site-footer" id="footer">
      <img className="footer-logo" src="/assets/Logo.svg" alt="shot вайб-дизайн" />
      <p>{copy.footerText}</p>
    </footer>
  );
}

function App() {
  const [language, setLanguage] = useState("ru");
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef(0);
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const copy = getInterfaceCopy(language);
  const articles = useMemo(() => getArticles(language), [language]);
  const relatedArticles = useMemo(() => getRelatedArticles(language), [language]);
  const currentArticle = articles.find((item) => item.path === pathname) || articles[0];

  const copyPromptFromText = async (prompt) => {
    if (!prompt) {
      return;
    }

    await writeClipboardText(prompt);
    window.clearTimeout(toastTimerRef.current);
    setToastVisible(true);
    toastTimerRef.current = window.setTimeout(() => setToastVisible(false), 1000);
  };

  useEffect(() => {
    return () => window.clearTimeout(toastTimerRef.current);
  }, []);

  useEffect(() => {
    const preventDefault = (event) => {
      event.preventDefault();
    };

    const protectedEvents = ["copy", "cut", "contextmenu", "dragstart", "selectstart"];

    protectedEvents.forEach((eventName) => {
      document.addEventListener(eventName, preventDefault);
    });

    return () => {
      protectedEvents.forEach((eventName) => {
        document.removeEventListener(eventName, preventDefault);
      });
    };
  }, []);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} copy={copy} />
      <ArticleHero article={currentArticle} />
      <ArticleBody article={currentArticle} onCopyPrompt={copyPromptFromText} copy={copy} />
      <CursorImageTrail images={currentArticle.cursorTrailImages} />
      <RelatedArticles currentArticle={currentArticle} relatedArticles={relatedArticles} copy={copy} />
      <Footer copy={copy} />
      <CopyToast visible={toastVisible} label={copy.copyToast} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
