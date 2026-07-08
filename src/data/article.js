const prepPrompt =
  "Ultra-realistic interior photo enhancement of a Barbie-themed pink bedroom. Preserve the exact room layout, furniture placement, decorations, wall art, bedding, carpet, neon Barbie sign, perspective, camera angle, and overall composition from the original image. Keep the room clearly recognizable as the same space.\n\nMain task: remove the heavy pink lighting/color cast and transform the scene into clean natural daytime lighting.\n\nLighting requirements: soft neutral daylight coming from the window, realistic white daylight balance, natural shadows, bright airy atmosphere, balanced exposure, high dynamic range, no magenta/pink light pollution on walls, furniture, ceiling, or skin tones, maintain subtle warm cozy tones while keeping colors realistic.\n\nColor correction: walls remain pastel pink, Barbie decor stays vibrant and stylish, preserve pink aesthetic without oversaturated neon wash, clean whites on bedding and furniture, accurate material colors, luxury interior editorial look.\n\nQuality enhancement: ultra-sharp details, high-resolution textures, professional real-estate photography quality, clean noise-free image, crisp fabric textures, realistic carpet fibers, improved depth and contrast, soft cinematic natural light, premium Pinterest-style interior photography.\n\nStyle: modern feminine Barbie aesthetic, minimalistic cozy decor, soft pastel palette, bright daylight room tour look, Instagram/Pinterest interior design photography, natural lens perspective, photorealistic rendering, high-end apartment showcase quality.\n\nNegative prompts: low quality, blurry, oversaturated pink lighting, neon color cast, distorted geometry, warped furniture, extra objects, messy room, dark exposure, artificial computer-generated look, fisheye distortion, grain, motion blur, plastic textures, cartoon style.";

const imagenColorPrompt =
  "Neutralize only the global color cast, not the local object colors. Preserve object-level color fidelity. Yellow objects must remain yellow, gold objects must remain gold, warm sunlight must remain warm, and skin undertones must remain natural.\n\nCorrect inaccurate white balance while maintaining realistic color temperature distribution throughout the scene. Remove only the uniform warm tint overlay affecting the entire image. Preserve natural color contrast between warm and cool regions.\n\nThe image should look color-calibrated and professionally graded, with accurate whites, neutral grays, realistic skin tones, and physically plausible lighting conditions. Avoid the common AI-generated warm beige/yellow overlay that uniformly affects shadows, highlights, skin, clothing, and background simultaneously.\n\nGently correct only the unwanted global warm/yellow color cast while keeping the image natural and unedited-looking. Do not increase contrast, clarity, saturation, sharpness, or dynamic range. Do not make the image look HDR, overly crisp, dramatic, or retouched.\n\nPreserve the original soft photographic mood, natural exposure, natural shadows, realistic highlights, and existing lighting atmosphere. Naturally warm materials such as wood, beige fabric, cream tones, skin undertones, flowers, food, and jewelry must keep their real color.\n\nRemove only the uniform AI-like yellow/beige overlay affecting the whole image. Keep colors balanced, calm, realistic, and close to the original photo. The result should feel like a real camera photo with slightly corrected white balance, not like an edited image.";

const roomDescription =
  "A rectangular Barbie-themed pink bedroom, approximately 3.5 meters wide and 4.5 meters long, with a ceiling height of about 2.5 meters. The ceiling is white textured popcorn plaster with a round flat flush-mount ceiling light in the center.\n\nHeadboard wall: the short wall behind the bed is covered with large-scale pastel pink and white checkerboard wallpaper, with squares around 15 cm. Centered above the bed headboard is a pink neon wall light shaped like the side-profile silhouette of Barbie's head with a long ponytail. The neon tube is thin and dusty pink.\n\nOpposite short wall / gallery wall: painted solid pink. It has three vertical framed artworks arranged in one horizontal row at eye level. Each artwork is in a wide white frame with white matting, approximately 50 x 70 cm.\n\nLong wall 1 / closet wall: painted pink. In the center there is a built-in wardrobe with two tall white paneled hinged doors and round nickel knobs. Closer to the gallery wall there is a white hinged door leading to the hallway; the hallway is pink with gray carpet.\n\nLong wall 2 / window wall: painted pink. In the center there is a window with a white PVC frame and floor-length powder-pink lightweight curtains on a thin black metal curtain rod with round finials. Closer to the gallery wall, on the same wall, there is a small square framed picture in a white frame. Beneath it is a low beige or cream cube ottoman.\n\nFurniture: a double bed stands against the headboard wall. The bed has a tall dusty-pink upholstered headboard with vertical channel tufting. On both sides of the bed are two matching light pink or cream mid-century modern nightstands with two drawers, slim tapered walnut-colored wooden legs, and small round brass knobs.\n\nOn each nightstand: a pink mushroom-shaped table lamp with a dome shade, Pixar-like silhouette; on the left nightstand, a small succulent in a white pot; on the right nightstand, white peonies in a vase; also a glass sphere decor object and a small pink accessory.\n\nBedding: white bedding including sheet, pillowcases, and duvet cover. A dusty-pink waffle blanket is folded across the foot of the bed, covering about one third of the bed length. Pillows at the headboard include two large white pillows, two powder-pink furry square pillows, one white textured pillow, one bright fuchsia square pillow with a large white Barbie script logo, and a flat decorative pillow shaped like a pink Converse sneaker with the word Barbie.\n\nFloor: gray low-pile carpet throughout the room. In front of the bed there is a large round fluffy faux-fur rug in dusty pink.\n\nCorner between the window and the gallery wall: a low beige cube ottoman with a bright fuchsia square pillow featuring a white Barbie logo, plus a folded pink towel or throw with a Barbie logo. Next to it on the right is a large green houseplant, palm or fern-like, in a cream planter.\n\nArtwork details, critically important: Artwork A, the small picture above the ottoman near the window, is a square picture approximately 30 x 30 cm with a thin white frame and white matting. In the center is a stylized pink side-profile silhouette of Barbie's head with a bun on top and a long ponytail falling down, the same silhouette as the neon sign above the headboard but as a flat pink graphic. Under the silhouette is the word Barbie in a large fuchsia script logo.\n\nGallery artwork, left: on a bright fuchsia pink background, a large portrait or face of Barbie doll or Margot Robbie as Barbie with long platinum blonde hair, wearing a pink cowboy hat or wide-brim pink hat. Part of the face is visible and the blonde hair falls along the neck. The style is a fashion poster inspired by the Barbie 2023 film.\n\nGallery artwork, center: on a white background, centered, there is a large Barbie wordmark in the official fuchsia script logo. Under the wordmark is a small pink object, such as a retro cassette player, cosmetic pouch, or small pink box. Minimal poster style.\n\nGallery artwork, right: on a pink background, a close-up portrait of a classic Barbie doll with long blonde hair, pink makeup, pink eyeshadow and pink lipstick, looking sideways or toward the camera. Fashion poster style.\n\nAdditional large Barbie World artwork visible near the entrance: a large rectangular artwork in a wide white frame, approximately 60 x 80 cm. On a pink background there is a large pink heart with a darker fuchsia outer contour and lighter pink fill. Inside the heart, white script text reads Barbie World. Below the heart there is a white horizontal label with a small dark three-line quote, not readable. At the bottom of the artwork there is a narrow bright pink stripe. This artwork is on the long closet wall between the entrance door and the wardrobe, or it may be treated as a fourth gallery artwork placed to the left of the three artworks described above.";

const panoramaPrompt =
  "Ultra-realistic 360° panoramic Barbie-themed bedroom interior, generated from the provided reference images. The camera viewpoint is positioned in the center of the bed at normal human eye height, as if a person is standing on the mattress and capturing a full immersive 360-degree room panorama.\n\nImportant: preserve the exact room identity, architecture, proportions, furniture style, decor placement, textures, and overall layout from the original photos.\n\nThe room is a stylish feminine Barbie-inspired bedroom with soft pastel pink aesthetics, realistic interior design, cozy luxury atmosphere, and modern Pinterest-style decor.\n\nScene requirements: full 360 panoramic room reconstruction, ultra-wide cinematic panorama composition, aspect ratio 21:9, natural spatial continuity between all walls, physically correct room geometry, realistic room depth and perspective, seamless panoramic stitching, camera centered above the bed area.\n\nLighting: soft natural daytime lighting from the window, neutral white daylight balance, bright airy atmosphere, no strong pink neon light cast, soft realistic shadows, cozy luxury interior mood, editorial interior photography quality.\n\nRoom details to preserve: pink walls, checkerboard Barbie accent wall, Barbie neon wall sign above the bed, white and pastel pink bedding, pink fluffy rug, pink curtains, Barbie pillows and decor, small bedside table with lamp, framed Barbie artwork, gray carpet flooring, white ceiling texture and ceiling lamp.\n\nAdditional reconstruction details: on the left side of the room there is a white paneled wardrobe or closet partially hidden in the original photos. The bedroom door is open. Outside the room is only a pink Barbie-style hallway corridor with soft pink walls and subtle ambient lighting. No extra furniture or objects in the hallway. Maintain realistic apartment continuity.\n\nStyle: ultra photorealistic, high-end real estate photography, Pinterest luxury Barbie bedroom aesthetic, modern feminine interior design, clean minimalistic decor, cozy soft pastel tones, Instagram-ready interior shot, sharp textures and realistic materials, premium architectural visualization quality.\n\nNegative prompts: fisheye distortion, warped walls, incorrect room geometry, duplicated furniture, low quality, computer-generated image artifacts, oversaturated neon pink lighting, dark exposure, messy room, blurry textures, extra windows, extra doors, unrealistic proportions, floating objects, deformed bed, plastic materials, cartoon rendering, people, mirrors with reflections, random furniture, clutter, compression artifacts.";

const topViewPrompt =
  "Ultra-realistic top-down view of a Barbie-themed pink bedroom, generated from the provided reference images. The camera is positioned directly above the room in a perfectly vertical bird's-eye perspective, capturing the entire space layout from the ceiling downward.\n\nImportant: preserve the exact room identity, furniture placement, proportions, decor, textures, and architecture from the original photos. The room must remain clearly recognizable as the same Barbie bedroom.\n\nComposition: full room visible from top-down perspective, aspect ratio 5:4, clean architectural interior layout, symmetrical realistic room proportions, wide overhead interior photography framing, camera centered above the room, entire bed, rug, walls, window, bedside furniture, and wardrobe visible.\n\nRoom details: pink pastel walls, checkerboard Barbie accent wall, Barbie neon wall sign above the bed, white and pink bed with decorative pillows, large fluffy pink rug beneath the bed, small bedside table with pink lamp, framed Barbie artwork on walls, white paneled wardrobe on the left side, open bedroom door, minimal pink hallway visible outside the room, gray carpet flooring, white textured ceiling edges partially visible around framing.\n\nLighting: soft natural daytime lighting, bright realistic daylight entering from the window, neutral white balance, cozy airy atmosphere, soft realistic shadows, no oversaturated pink light cast, high dynamic range interior photography.\n\nStyle: luxury Pinterest Barbie room aesthetic, modern feminine interior design, clean minimalistic decor, Architectural Digest style, high-end real estate photography, ultra photorealistic materials, soft pastel tones, crisp fabric and carpet textures, premium editorial interior render.\n\nNegative prompts: fisheye distortion, warped geometry, incorrect room proportions, duplicate furniture, extra windows, extra doors, messy room, low quality, computer-generated image artifacts, blurry textures, oversaturated neon lighting, dark exposure, plastic materials, floating objects, deformed bed, random decor, people, mirror reflections, cartoon style, unrealistic perspective, tilted camera, cropped furniture.";

const anglePrompt =
  `${roomDescription}\n\nCreate a realistic interior photograph of this pink Barbie-themed bedroom. The first and second reference images show the original room and should be treated as the primary references for color, texture, furniture, and spatial identity. The third reference image is the full room panorama and should be used to understand the overall layout. The fourth reference image is a top-down camera diagram: the camera is placed in the center of the bed, approximately above the pillow area at seated-person height, around 80 cm above the mattress, and points forward from the headboard toward the opposite short gallery wall.\n\nStrict composition: the lower third of the frame shows the edge of the bed in perspective, moving away from the viewer. Visible elements include slightly wrinkled white bedding, a folded dusty-pink waffle blanket at the foot of the bed, and behind it a round fluffy pink rug on gray carpet. The bed remains centered and symmetrical.\n\nCenter of the frame: the short pink gallery wall with three framed artworks in wide white frames arranged in one horizontal row. Left artwork: fuchsia background with a Barbie or Margot Robbie portrait in a pink cowboy hat and long blonde hair. Center artwork: white background with a large pink Barbie script logo and a small pink object below it. Right artwork: pink background with a close-up portrait of a classic Barbie doll with blonde hair and pink makeup.\n\nLeft side of the frame: the long window wall with a large central window, powder-pink floor-length curtains on a thin black metal curtain rod, and soft daylight coming from the window. Near the gallery wall, a small square framed Barbie silhouette artwork hangs above a low beige cube ottoman with a bright pink Barbie pillow and a folded pink Barbie towel. A large green houseplant in a cream planter stands next to it.\n\nRight side of the frame: the long closet wall with a built-in wardrobe, two white paneled hinged doors, and round nickel knobs. Near the gallery wall, a partially visible open white door leads to a pink hallway with gray carpet.\n\nTop of the frame: a narrow band of white popcorn-textured ceiling with a round flat flush-mount ceiling light centered in the composition.\n\nTechnical parameters: 24-28 mm equivalent wide-angle lens, symmetrical frontal composition from the center of the bed, slight vanishing-point perspective toward the gallery wall, natural soft daylight from the left window, rich but realistic pink tones, sharp details, high-quality real-estate or Airbnb photography, 4K resolution.`;

const fashionSidePrompt =
  "Ultra-realistic fashion editorial photo edit. Use the first reference image as the exact base image.\n\nDo not change the girl's pose, body position, facial expression, outfit, proportions, crouching pose, or composition from the original image.\n\nThe main task is to change only the camera position and environment perspective.\n\nThe camera is now positioned directly in front of the girl at eye-level or a slightly low fashion-editorial angle, instead of the previous side-angle perspective.\n\nThe girl is sitting inside a minimalistic geometric room with differently colored walls and a white floor. The spatial orientation is fixed: behind the girl there is a deep saturated red wall, in front of the girl there is a black wall, one side of the room is white, the opposite side is dark graphite, and the floor is pure white.\n\nOnly one wall must be visible in the final frame, exactly like the original fashion photo aesthetic. The room should feel physically correct and spatially consistent.\n\nSince the camera is positioned in front of the girl, the black wall is behind the camera, the red wall is visible behind the girl, and the side walls should only subtly influence lighting and reflections without dominating the frame.\n\nThe visual style is luxury minimalist fashion campaign, clean geometric architecture, Saint Laurent, Zara Studio and Vogue editorial aesthetic, seamless premium studio feeling, very subtle corners if any, soft cinematic shadows, glossy reflections on the leather jacket, and elegant negative space.\n\nThe lighting is soft diffused studio lighting with subtle ambient bounce from colored walls, premium editorial contrast, realistic skin tones, and ultra-clean white balance.\n\nThe camera is front-facing, with a 50mm high-fashion photography look, shallow depth of field, ultra-sharp focus on face and leather texture, and vertical composition.\n\nNegative prompt: side angle, overhead angle, top-down camera, changed pose, different body position, distorted anatomy, extra limbs, cluttered room, visible furniture, windows, doors, low quality, computer-generated image artifacts, cartoon style, warped proportions, blurry face, text, watermark.";

const fashionNineAnglesPrompt =
  "Use the first reference image as the exact base image. The girl must remain in the exact same pose in all nine frames. Do not change the pose, body orientation, silhouette, proportions, hairstyle, facial expression, outfit, hand position, leg position, spine angle, or head tilt.\n\nThe girl is completely static. Only the camera moves around her. The goal is to create a physically correct multi-camera study of the same girl inside one consistent architectural space.\n\nThis is not a zoom study, not a closer-or-further study, and not a set of different poses. It is nine different cameras placed around the same stationary girl.\n\nThe girl sits in the center of a very large empty geometric room. She is not near walls. There is large negative space around her. The room must feel spacious, cinematic, minimalistic, architectural, and physically believable.\n\nThe room has fixed wall colors and these colors never change location. Behind the girl there is a deep saturated red wall, in front of the girl there is a black wall, on the left side of the girl there is a white wall, on the right side of the girl there is a dark graphite wall, and the floor is pure white.\n\nThis spatial logic must remain mathematically correct in all nine frames. If the camera stands in front of the girl, the red wall behind her becomes visible. If the camera stands behind the girl, the black wall becomes visible. If the camera stands on the left side of the girl, the graphite wall becomes visible. If the camera stands on the right side of the girl, the white wall becomes visible.\n\nIf the camera stands front-left, the visible walls are red and graphite. If the camera stands front-right, the visible walls are red and white. If the camera stands back-left, the visible walls are black and graphite. If the camera stands back-right, the visible walls are black and white.\n\nThe visible walls must always match the physical camera position. The room geometry must feel architecturally correct, spatially consistent, physically realistic, cinematic, and seamless. Avoid random wall colors, impossible room orientation, and inconsistent backgrounds.\n\nCreate true multi-camera coverage in a three-by-three grid. The first row shows front cameras: a direct front camera with the red wall visible, a front-left camera with the red and graphite walls visible, and a front-right camera with the red and white walls visible. The second row shows side cameras: a left side profile with the graphite wall visible, a right side profile with the white wall visible, and a slight side-back angle with walls that logically depend on the side. The third row shows back cameras: a direct back camera with the black wall visible, a back-left camera with the black and graphite walls visible, and a back-right camera with the black and white walls visible.\n\nThe global visual style is Saint Laurent campaign aesthetic, Zara Studio editorial, luxury fashion photography, cinematic minimalism, premium architectural environment, elegant negative space, glossy leather reflections, ultra-realistic textures, clean geometric environment, dramatic simplicity, physically accurate perspective, cinematic shadows, realistic ambient color bounce from walls, and premium editorial color grading.\n\nThe camera style should use realistic lens compression, cinematic framing, natural perspective distortion, a 50mm or 85mm fashion photography feel, shallow depth of field where appropriate, and physically accurate camera placement.\n\nEvery frame must clearly feel like the exact same girl frozen in time while the photographer walks around her.\n\nNegative prompt: different pose, changing body orientation, changing silhouette, different hairstyle, different clothes, different girl, zoom-only changes, duplicated limbs, distorted anatomy, inconsistent wall colors, impossible room geometry, incorrect wall orientation, furniture, props, windows, clutter, cartoon style, computer-generated image artifacts, warped perspective, unrealistic shadows, low quality, blurry details, text, watermark.";

const picnicGridPrompt = `Use the FIRST reference image as the exact base image. Create a 3x3 cinematic commercial product contact sheet with 9 different camera angles of the SAME picnic scene. CRITICAL RULE: The entire picnic composition must remain the SAME in all 9 frames. DO NOT: * rearrange objects * change object positions * change spacing between objects * change the table layout * change the number of objects * change food placement * change carton placement * change chair placement * change basket placement * change lighting logic * change the picnic setting ONLY the CAMERA moves. The goal is to create 9 different product-commercial shots of the same picnic setup from different camera positions, while keeping the two plain white cartons as the main hero product in every frame. SCENE / ENVIRONMENT: A warm summer picnic in a green park. The setup is placed on fresh realistic grass with natural sunlight, tree shadows, soft leaf patterns, bushes and trees in the background. The atmosphere is bright, premium, peaceful, commercial, and lifestyle-oriented. In some wider angles, allow very soft blurred background hints of people or children in the distant park, but only as subtle bokeh silhouettes, never distracting. MAIN OBJECTS: * rectangular wooden picnic table with warm oak slats * two plain matte white cartons with caps, no text, no logos, no branding * glass with creamy walnut-colored drink * croissants on wooden board * fruit plate with sliced orange and green grapes * walnuts near the table edge * beige folding chair with a white rose on it * wicker basket on cream fringed blanket * in the basket: same plain white cartons * green grass, tree shadows, sunlight, park background PRODUCT PRIORITY: The two white cartons are always the main focus. They must be visible, clean, premium, sharp, and attract attention in every shot. Food, chair, basket, grass and park environment support the composition. GRID STRUCTURE — 9 UNIQUE CAMERA ANGLES ROW 1 — OVERHEAD AND TABLE-LEVEL PRODUCT ANGLES 1. TRUE TOP-DOWN OVERHEAD SHOT Camera directly above the picnic scene, 90-degree bird’s-eye view. The whole table is visible from above. The two white cartons sit at a slight angle relative to each other. Fruit plate is next to the cartons. Walnuts are near the fruit plate and one carton, close to the table edge. Hotdogs are behind the fruit plate. Chair with rose and wicker basket with white cartons are visible around the table. The park grass surrounds the entire picnic scene. 2. LOW TABLE CAMERA BETWEEN CROISSANTS AND FRUIT PLATE Camera placed directly on the wooden table between the croissants and fruit plate. Foreground includes blurred croissant edge and blurred fruit plate edge. Focus is sharp on the two white cartons in the middle distance. Background shows soft green park, trees, grass, sunlight and bokeh. Commercial product photography look, shallow depth of field. 3. CAMERA FROM THE CHAIR WITH ROSE Camera placed on or near the beige folding chair where the white rose lies. A few white rose petals and green stem appear blurred in the foreground. The table and two white cartons are visible beyond the rose, sharply focused. The chair fabric texture is visible. The picnic table remains in the same layout. ROW 2 — SIDE CAMERAS AROUND THE TABLE 4. LEFT SIDE OF TABLE Camera positioned low on the left side of the wooden table. The two white cartons remain the hero focus. The glass with creamy drink appears nearby. Croissants, fruit plate and walnuts remain in their original positions. Background shows green park grass and soft tree shadows. 5. RIGHT SIDE OF TABLE Camera positioned low on the right side of the table. Fruit plate and walnuts are closer to the camera, slightly soft in foreground. The two white cartons are sharp and central. Croissants and hotdogs remain visible behind them according to the table layout. 6. FRONT SIDE OF TABLE Camera positioned from the front edge of the table, slightly above table height. The walnuts near the edge appear in the foreground. The white cartons are centered and sharp. The basket and chair are visible in the background as park lifestyle context. ROW 3 — BACK AND DIAGONAL PARK CONTEXT ANGLES 7. BACK SIDE OF TABLE Camera positioned from the opposite side of the table, looking across the croissants and fruit plate toward the white cartons. The cartons remain the clean hero product. The wicker basket with additional white cartons is visible in the background. 8. DIAGONAL WIDE PARK SHOT Camera positioned diagonally above and slightly away from the table. The full picnic setup is visible: table, chair with rose, wicker basket on blanket, grass, tree shadows. The cartons remain clearly visible as the main product. The surrounding park feels spacious and summery. 9. CLOSE LOW HERO PRODUCT SHOT Camera very low near the table surface, close to the two white cartons. Cartons are large, sharp, premium and minimal. Foreground may include blurred glass rim, walnut shell or fruit edge. Background contains soft blurred croissants, green grass, basket and trees. Strong commercial advertising feel. GLOBAL STYLE: * ultra-realistic commercial product photography * premium summer picnic campaign * clean lifestyle advertising * warm natural sunlight * realistic tree shadows * rich green grass * shallow depth of field where appropriate * crisp carton texture * natural food textures * realistic wood grain * cinematic warm color grading * elegant composition * premium picnic aesthetic IMPORTANT: Every frame must clearly feel like the same picnic scene frozen in time while the photographer moves around it. Negative prompt: text, logo, branding, label, typography, barcode, UI elements, changed object placement, rearranged table, missing cartons, different cartons, crowded table, messy composition, artificial lighting, CGI, cartoon, distorted perspective, warped table, unrealistic food, duplicated objects, low quality, blur on cartons, watermark.`;

const picnicStoryboardPrompt = `SECOND IMAGE (Blender 3D scene with 9-frame grid layout) = STRICT LAYOUT REFERENCE FOR EACH FRAME Use ONLY for: which camera angle goes in which grid cell, object positions within each frame, object sizes, object proportions, spacing, which objects appear in which frame, and overall composition per cell.
FIRST IMAGE (real picnic photo) = STRICT VISUAL REFERENCE FOR MATERIALS Use ONLY for: how each object looks — material, texture, shape details, packaging design, surface finish, color, transparency, lighting mood, and atmosphere.
Both references are equally strict in their own domain. Do NOT mix their roles.
OUTPUT FORMAT — non-negotiable:
ONE single vertical 9:16 image composed of a 3×3 grid of nine separate photographs, each cell showing the SAME premium summer picnic scene from a DIFFERENT camera angle. All nine cells use IDENTICAL objects, IDENTICAL materials, IDENTICAL lighting conditions, and IDENTICAL park environment — only the camera position changes between cells.
Each cell is a complete, photorealistic commercial product photograph in its own right. The nine cells are arranged in a clean grid with thin uniform white gutters between cells. No text, no labels, no captions, no frame numbers, no annotations anywhere in the output.
THE NINE CAMERA ANGLES (read left-to-right, top-to-bottom):
Cell [Row 1, Col 1] — High overhead three-quarter view:
Camera looking down at the picnic from above and slightly to the side
LOWER-RIGHT of frame: the wooden picnic table seen from above, with two croissants on a wooden board, two white cartons, the patterned glass with cocoa, and part of the white plate with fruits visible
LEFT of frame: the folding chair with the white rose resting on its canvas seat — the rose bud points toward the table
UPPER part of frame: green grass with the cream fringed picnic blanket/rug and the wicker basket containing additional white cartons
This is the establishing "scene overview" shot
Cell [Row 1, Col 2] — Low table-level, between croissants and fruit plate, looking toward cartons:
Camera placed very low on the wooden table surface, between the croissants (right foreground, blurred) and the fruit plate (left foreground, blurred)
LEFT FOREGROUND (blurred): edge of the fruit plate, halved orange, checkered red-and-white napkin, edge of white ceramic plate, green grapes
RIGHT FOREGROUND (blurred): edge of one golden croissant, edge of the warm wooden serving board
MIDDLE GROUND (sharp focus): the two white cartons — hero product, fully readable, premium look
BEHIND CARTONS: the patterned glass with cocoa, partially visible
BACKGROUND (soft bokeh): green sunlit park with trees, dappled sunlight
Cell [Row 1, Col 3] — Low table-level, between walnut and fruit plate, looking toward cartons:
Camera placed very low on the table, between the walnut (left foreground, heavily blurred) and the fruit plate (right foreground, heavily blurred)
LEFT FOREGROUND (heavily blurred): one whole walnut in its brown ridged shell, only silhouette readable
RIGHT FOREGROUND (heavily blurred): corner of the red checkered napkin, edge of white plate, green grape
MIDDLE GROUND (sharp focus): the two white cartons — the larger one dominant in center-frame, the smaller one slightly behind and to the right
LEFT-MIDDLE BACKGROUND: the patterned glass with cocoa, partially cropped by left frame edge
BACKGROUND (soft bokeh): green sunlit park
Cell [Row 2, Col 1] — Camera on the chair seat, looking sideways across the table:
Camera sitting on the folding chair's canvas seat, very low, looking horizontally toward the table from the chair side
LOWER-LEFT FOREGROUND (heavily blurred): cream canvas chair seat fabric and warm honey-oak wooden chair frame legs (X-shaped crossed slats)
LOWER-RIGHT FOREGROUND (heavily blurred): the white rose resting on the chair canvas — only soft creamy-white silhouette readable
MIDDLE OF FRAME: the wooden picnic table seen edge-on from a low side angle, table edge running horizontally through mid-frame, X-shaped wooden folding leg structure visible below
ON TABLE (left-to-right from this camera POV, REVERSED relative to the first reference image): croissants on wooden board (far-left, partially cropped) → oranges on white plate with green grapes (left of center) → two white cartons (center-right, hero focus, taller one behind, smaller one in front-left) → patterned glass with cocoa (far-right, partially cropped). Walnut barely visible from this angle.
ABOVE TABLE: green sunlit park, soft bokeh
Cell [Row 2, Col 2] — Pulled-back wide overhead three-quarter view:
Same camera angle as Cell [1,1] but PULLED BACK FURTHER from the scene
Wider, more distant framing showing more of the surrounding grass, more of the picnic blanket, more of the chair, more of the basket area
Same objects in same positions, just smaller in frame
Establishes broader environmental context
Cell [Row 2, Col 3] — From the glass side, looking across the table:
Camera positioned on the table near the patterned glass with cocoa, looking across the table toward the rest of the scene
LOWER-LEFT FOREGROUND: the patterned glass with cocoa, slight near-focus, gold rim and floral pattern readable
From the glass, the view continues to reveal: one of the white cartons, then the walnut, then the white plate with fruits (oranges, grapes), then the park in the background
All foreground glass elements slightly soft, cartons and plate in sharp-to-medium focus, park in soft bokeh
Cell [Row 3, Col 1] — From the opposite side of the glass:
Camera on the table on the opposite side of the patterned glass relative to Cell [2,3]
LOWER-RIGHT FOREGROUND (slightly blurred): the patterned glass with cocoa, gold rim readable
Beyond the glass, visible across the table: the two white cartons (sharp focus, hero), the white plate with fruits, edge of one croissant on the wooden board
BACKGROUND: green sunlit park with soft bokeh
Cell [Row 3, Col 2] — From the croissants side, looking across the table:
Camera positioned near the croissants on their wooden cutting board, looking across the table
FOREGROUND: the wooden picnic table surface and the wooden board with the two golden croissants on it (near-sharp focus)
MIDDLE GROUND: the white plate with halved orange and green grapes on the checkered red napkin
RIGHT EDGE OF FRAME: a small portion of one of the white cartons visible
BACKGROUND: green sunlit park
Cell [Row 3, Col 3] — From the fruit plate side, looking across the table:
Camera positioned near the fruit plate, looking across the table toward the rest of the scene
FOREGROUND (sharp): the white ceramic plate with halved orange (showing juicy segmented pulp), green grapes, on the red checkered napkin
MIDDLE GROUND: the wooden table surface receding, the two white cartons (sharp focus, hero)
BACKGROUND: green sunlit park with soft bokeh
OBJECT APPEARANCE — strictly from the first reference image, IDENTICAL across all nine cells:
White cartons (HERO PRODUCT in every cell):
Tetra Pak-style aseptic carton with characteristic angled folded top corners forming a flat-topped peak
Small round white plastic screw cap on top
Matte white paper-based packaging — soft paper-like surface, NOT glossy plastic, NOT shiny
Subtle visible vertical seam down one side
Crisp diagonal folded creases at the top forming the Tetra Pak peak geometry
Completely blank surface — no text, no logos, no labels, no branding, no barcodes
Soft realistic contact shadow under each carton on the wooden table
Glass with cocoa:
Vintage-style pressed/patterned clear glass with decorative relief texture (ribbed/floral ornamental pattern)
Thin gold rim around the top edge
Filled with creamy beige cocoa-colored drink
Realistic refractions, highlights, light passing through showing the patterned glass detail
Croissants (two, on wooden board):
Golden-brown buttery pastry
Crisp flaky laminated layers, visible curl/spiral shape
Realistic baked crust with darker tips
Wooden cutting board:
Warm reddish-brown wood serving board with smooth surface, rounded edges, natural grain
Oranges:
One whole orange with glossy textured citrus skin, bright orange color
One halved orange showing juicy segmented pulp with visible membrane lines and glossy moist interior
White plate:
Clean glossy white ceramic, rounded shape, subtle rim highlight
Green grapes:
Glossy juicy green grapes with realistic translucent skin
Red checkered napkin:
Red-and-white checkered gingham pattern — small even squares of red and cream-white
Soft cotton fabric with visible weave, naturally rumpled folds
Walnut:
One whole walnut in natural brown ridged wrinkled shell, realistic organic texture
Wooden picnic table:
Warm honey-oak slatted table with parallel wooden planks and narrow gaps between them
Natural wood grain, satin finish
X-shaped wooden folding leg structure
Folding chair:
Cream/beige canvas fabric seat with soft natural folds and visible weave
Warm honey-oak wooden frame with rounded edges and dark plastic foot caps
White rose:
Single creamy-white rose with soft layered petals, slight ivory tint at the base, resting on the chair canvas
Wicker basket:
Natural light-tan woven wicker basket with visible weave pattern
Contains several upright white cartons (same Tetra Pak design as the hero cartons on the table) — in cells where the basket is visible, the cartons inside it are also completely blank with no branding
Picnic blanket/rug:
Cream-white fluffy rug with long fringed tassel edges
Soft textile texture, laid on the grass
Grass:
Fresh green grass with realistic blade texture, warm sunlit tone
Park background:
Green sunlit park with distant trees, bushes, warm summer light
Soft natural bokeh in all cells where it appears, dappled sunlight filtering through leaves
LIGHTING & ATMOSPHERE — IDENTICAL across all nine cells:
Warm natural outdoor sunlight, golden summer tone
Sun comes from the same direction in every cell
Soft dappled shadows from tree leaves on the wooden table, the grass, and the cartons in every cell
Consistent shadow direction across all objects within and between cells
Soft highlights on the matte white carton surfaces
Warm ambient bounce from grass and wood
Premium commercial outdoor lighting
Cozy, elegant, luxurious summer picnic mood
PERSPECTIVE — physically correct in every cell:
Each cell has its own coherent single vanishing point matching its camera angle
Park background horizon line is consistent with the camera height of each individual cell (low for cells with low cameras, higher for overhead cells)
Lens compression and depth-of-field falloff consistent within each cell
Light direction on the park background matches light direction on foreground/mid-ground objects in every cell
DEPTH OF FIELD per cell:
In every cell, the two white cartons are the sharpest focus (when in frame). Foreground objects close to camera are blurred as specified per cell. Park background is always softly blurred with natural bokeh. Smooth focus falloff, no harsh transitions.
VISUAL STYLE:
Ultra-realistic commercial product photography across all nine cells. Premium summer picnic campaign. Luxury lifestyle advertisement. Cinematic shallow depth of field. Editorial product photography. Photorealistic rendering. Clean white packaging mockup hero shots from nine different angles. Warm sunlit park aesthetic. All nine cells share the same color grading, same lighting, same atmosphere — they look like a single commercial campaign shot in one continuous session.
GRID LAYOUT:
3 columns × 3 rows
Each cell is a vertical (portrait) photograph
Thin uniform white gutters between cells (~10–15 pixels equivalent)
Clean white border around the entire grid
No text, no numbers, no labels, no captions, no annotations anywhere
Each cell rendered at high resolution, photorealistic quality
NEGATIVE PROMPT:
text, labels, captions, frame numbers, annotations, Russian text, English text, UI elements, Blender interface, gizmos, wireframes, axis indicators, glossy plastic carton, shiny carton, milk jug shape, rectangular brick carton, juice box with straw, generic packaging, wrong carton silhouette, solid red napkin, plain red cloth, non-checkered napkin, plain glass, smooth glass without pattern, glass without gold rim, branding on cartons, logos, barcodes, tilted horizon, warped perspective, mismatched vanishing point, distorted background, skewed park, unrealistic lens distortion, inconsistent lighting between cells, mismatched sun direction between cells, different time of day in different cells, different objects in different cells, missing cartons, blurry hero cartons, sharp foreground when foreground should be blurred, top-down view in low-angle cells, low-angle view in overhead cells, mixed art styles, illustration, cartoon, CGI look, duplicated cells with identical angles, low quality, watermark, signature.`;

const picnicReferenceDescription = `The main objects are two white aseptic cardboard cartons, Tetra Pak Classic or Tetra Brik type. Each carton has a rectangular base, a vertical body with a slight taper toward the top, and a characteristic folded roof with two diagonal folds meeting at a central ridge. The top is not a simple flat top; it has complex folded geometry with two side triangular flaps, a central horizontal seam, and diagonal crease lines running from the upper corners toward the center. Each carton has a small round white or cream plastic screw cap, slightly offset from the center of the top and closer to one side. The cap has a ribbed side texture for grip and its diameter is about fifteen to eighteen percent of the width of the visible carton face. A thin vertical sealing seam runs along one side edge from the base toward the top, and a subtle horizontal seam or small folded apron is visible near the bottom.

The cartons have a matte paper-cardboard surface, not glossy and not plastic. The color is clean white with a slightly cool tone in the shadows, not warm cream. The surface is slightly porous at close range, with a subtle paper texture. Illuminated faces are bright white, shadowed faces are soft cool gray, and transitions are smooth. Each carton has a clear contact shadow at the base on the wooden tabletop. Dappled leafy shadows pass diagonally across both cartons, which is critical for realism. Light comes from the upper right, so right-facing planes are brighter and left-facing planes are in softer shadow. The taller rear carton resembles a 250-330 ml pack and occupies about twenty-five percent of the frame height. The smaller front carton has the same form but is slightly lower and occupies about twenty percent of the frame height. The front carton is closer to the camera and slightly to the right of the rear carton, with a gap of about half a carton width between them.

There is a glass with cocoa. It is a classic lowball or rocks glass, wide at the base and almost cylindrical or slightly tapered toward the top. It has low, sturdy proportions, with height approximately equal to width, and thick glass walls around four to six millimeters. The glass is vintage-style pressed glass with raised ornament on the outer walls. The pattern includes an upper horizontal row of small oval beads or dots, vertical ribbed flutes below, and a larger botanical or arabesque relief lower down. The relief must be visible through reflections and refractions. A thin gold ring around the upper rim looks like metallic gilding or painted decoration, about two to three millimeters thick, and appears as a clear warm golden line along the glass edge. The drink is warm light beige-brown cocoa, chocolate milk, or latte. It is opaque and creamy-milky, not dark chocolate. The liquid level is around seventy to seventy-five percent of the glass height, and the surface is flat without foam. The glass is transparent and colorless, with a slight bluish tint in thicker areas. Refractions through the raised ornament create many small bright highlights, and there is a visible contact shadow on the table.

The wooden picnic table is a folding camping table or roll-top picnic table. Its surface is made of parallel wooden slats about three to four centimeters wide, with three to five millimeter gaps between them appearing as dark parallel lines. The slats run across the short side of the table, perpendicular to the long axis, and the edges are slightly rounded. The wood has a warm honey-amber light tone similar to bamboo, beech, or birch. Each slat has visible longitudinal grain and a satin semi-matte finish, not lacquered, not waxy, and not raw. Dappled tree shadows cover the tabletop, with long diagonal patches of light and shadow passing over all objects in one consistent direction.

There are two classic French croissants with a clear crescent shape, laminated dough, visible spiral layers, and an uneven, flaky, crisp surface. The exterior is dark golden with almost brown tips. Light yellow crumb is visible in broken areas. The surface is mostly matte, with little to no egg-wash gloss, and there are subtle buttery marks on the wooden board underneath. The croissants are placed on a wooden serving board in the upper-right area of the table, one behind the other and slightly overlapping. The serving board is rectangular with rounded corners, warm reddish-brown wood darker than the picnic table, a smooth surface with subtle fine grain, no handle, and it lies directly on the wooden table without a tablecloth.

There is a plate with oranges and grapes. The plate is glossy white ceramic, flat or shallow rather than deep, with rounded edges and a soft shadow under the rim. One whole orange is a bright glossy citrus fruit with visible peel texture and small pores, optionally with a small green stem mark at the base. One orange half has the cut side facing upward toward the camera, with juicy segments separated by white membranes, rich orange-yellow flesh with a wet shine, and white albedo around the inner edge of the peel. Three or four large round light green grapes are placed next to the orange, with strong glossy almost mirror-like highlights and slight translucency in the skin, so pale flesh is visible through it.

A red-and-white checkerboard napkin with a classic picnic gingham pattern lies under the plate and is visible around the edges. It has a soft cotton texture and light folds. A natural wicker basket in a warm light beige color is rectangular, has side handles, and shows tight woven structure with clearly visible interlaced reeds. There may be white cartons inside the basket, but branding and text are not needed in the generation prompt. A soft white fringed textile rug lies on the grass behind the table, with long tassel fringe along the edges and partial visibility under or behind the basket.

There is a folding director-style or camping chair. The seat and backrest are beige or cream canvas, the frame is warm honey-gold metal or wood, the legs have black plastic caps, and the folding support structure forms a visible x shape. A single fully opened white rose lies on the chair seat. The rose has cream-white petals with a subtle warm ivory tone near the base, and a stem with one or two leaves. Two walnuts lie on the table between the glass and the plate: one whole walnut with an irregular rounded shape and a ridged brown shell, and one cracked walnut half with a cream-beige kernel visible.

The background is dense bright green lawn grass, with individual blades visible at good resolution. Dappled sun patches create uneven light through tree leaves, and the overall outdoor tone is warm and sunny. The lighting is natural daytime summer sunlight, with color temperature around 5500-6000K in shadow and around 5000K in direct sun. The direction is from the left and slightly behind or above, with consistent highlights and shadows across most objects. Dappled tree shadows are mandatory on the table, cartons, and grass, because without them the scene will feel too studio-like. Warm green bounce light from the grass softly illuminates the lower parts of objects.

The shadows are soft contact shadows under every object, with a unified direction across the whole composition. Dappled shadows form long diagonal patches of light and shade across the frame at one consistent angle. The depth of field is centered on the two white cartons, the hero objects. Background elements such as the basket and distant grass have moderate bokeh. Foreground elements such as the glass and the lower edge of the table are slightly softer than the cartons, but still readable.

The dominant color is the warm amber wood of the table. Accent colors are white from the cartons, chair, and rose, bright green from the grass and grapes, orange from the citrus, and golden-brown from the croissants and basket. Shadows are warm gray-brown, with no cold blue cast. The atmosphere is a summer picnic in a sunny park, a lazy morning or brunch, casual-luxury mood, and a light breeze suggested by the rug fringe. The scene should feel real and outdoor, not sterile or studio-lit.`;

const hairRetouchPrompt =
  "Preserve the original image as much as possible without changing the composition, face, pose, clothing, background, or lighting. Carefully retouch only the hair: remove all kinks, breaks, broken sections, crimped artifacts, and AI deformations along the entire length of the hair. Make the hair smooth, natural, soft, and continuous in shape while preserving the original hairstyle, strand direction, volume, length, and curl structure. Do not change the hairstyle, do not add new details, and do not simplify the hair into a solid mass.";

const picnicSingleAnglePrompt = `TWO REFERENCE IMAGES — TWO DIFFERENT ROLES:

SECOND IMAGE (Blender 3D scene) = STRICT LAYOUT REFERENCE Use ONLY for: camera angle, object positions, object sizes, object proportions, spacing between objects, which objects appear in the frame, and overall composition.

FIRST IMAGE (real picnic photo) = STRICT VISUAL REFERENCE Use ONLY for: how each object looks — its material, texture, shape details, packaging design, surface finish, color, transparency, and the lighting/atmosphere of the scene.

Both references are equally strict in their own domain. Do NOT mix their roles.

LAYOUT — from Blender scene (second image), non-negotiable:

The final image must contain ONLY these objects in the exact positions, sizes, and proportions shown in the Blender scene:

Two white cartons — left one partially cropped by the left frame edge in the middle ground, right one fully visible standing in the middle-background

One glass with cocoa drink — positioned behind/between the cartons, partially occluded

One orange — large, left foreground

One white plate — under the orange

One red napkin — under the plate

One wooden serving board — right foreground

One croissant — on the wooden board, right foreground

Wooden table surface — fills the lower portion of the frame

Camera: low table-level, looking forward, vertical 9:16, matching the Blender perspective and framing 1:1.

Objects that must NOT appear (not in Blender scene): no walnuts, no second croissant, no grapes, no checkered napkin, no wicker basket, no folding chair, no white rose, no rug fringe, no extra props.

OBJECT APPEARANCE — strictly from the first reference image:

White cartons (HERO PRODUCT — match first image exactly):

Tetra Pak-style aseptic carton shape with angled folded top corners and a flat-topped peak

White screw cap on top — small, round, plain white plastic

Matte white paper-based packaging surface — slightly soft, paper-like, NOT glossy plastic, NOT shiny

Subtle visible vertical seam down one side

Crisp diagonal folded creases at the top forming the characteristic Tetra Pak peak geometry

Clean blank surface — no text, no logos, no labels, no branding

Soft realistic shadow under the cartons on the wood

Match the exact carton silhouette from the first image — NOT a generic milk box, NOT a rectangular brick, NOT a juice box with a straw — specifically the angled-peak Tetra Pak aseptic carton with screw cap as shown

Napkin (match first image exactly):

Red-and-white checkered pattern (gingham) — small even squares of red and white/cream

Soft cotton fabric texture with visible weave

Slightly rumpled natural folds at the edges

NOT solid red, NOT plain — must be the checkered gingham pattern from the first image

Wooden table:

Warm honey-oak slatted picnic table with visible parallel wooden planks and narrow gaps between them

Natural wood grain, satin finish

Sunlit warm tone matching the first image

Croissant:

Golden-brown buttery pastry

Crisp flaky laminated layers, visible spiral/curl shape

Realistic baked crust with darker tips

Match the croissant appearance from the first image

Orange:

Halved orange showing juicy segmented pulp with visible membrane lines and glossy moist interior

Bright orange flesh color

Realistic citrus texture

White plate:

Clean glossy white ceramic, simple round shape

Subtle highlight on the rim

Wooden serving board:

Warm reddish-brown wood cutting board with smooth surface and rounded edges

Natural grain visible

Glass with cocoa:

Vintage-style pressed/patterned clear glass with decorative relief texture (ribbed/floral pattern) and a thin gold rim at the top

Filled with creamy beige cocoa-colored drink

Realistic glass refractions, highlights, and slight transparency showing the patterned glass detail

Match the exact glass style from the first image

BACKGROUND & PERSPECTIVE — physically correct:

The park background must follow the SAME perspective and vanishing point as the table and objects in the Blender scene

Camera is low and roughly horizontal — therefore the horizon line of the park (where grass meets distant trees) must sit at a realistic eye-level for a low table-level camera, NOT tilted, NOT skewed

Grass plane recedes naturally into the distance with correct foreshortening, consistent with the table's perspective

Soft natural bokeh on the park background — trees, grass, dappled sunlight — with depth-of-field falloff that matches the focal plane on the cartons

Lens compression and perspective distortion must be consistent across the entire frame — no warped horizon, no mismatched vanishing points between foreground and background

Lighting direction on the background must match the lighting direction on the foreground objects (warm sunlight from the same angle)

DEPTH OF FIELD:

Two white cartons = sharpest focus, hero

Glass of cocoa = near-sharp, slightly softer

Foreground (orange, plate, napkin, board, croissant) = softly blurred

Park background = soft natural bokeh

LIGHTING & ATMOSPHERE (from first image):

Warm natural outdoor sunlight

Soft dappled shadows from tree leaves on the wooden table

Consistent shadow direction across all objects

Premium commercial outdoor lighting

Cozy summer picnic mood

VISUAL STYLE: Ultra-realistic commercial product photography, premium summer picnic campaign, luxury lifestyle advertisement, cinematic shallow depth of field, editorial product photography, photorealistic rendering.

NEGATIVE PROMPT: glossy plastic carton, shiny carton, milk jug shape, rectangular brick carton, juice box with straw, generic packaging, wrong carton silhouette, solid red napkin, plain red cloth, non-checkered napkin, plain glass, smooth glass without pattern, tilted horizon, warped perspective, mismatched vanishing point, distorted background, skewed park, unrealistic lens distortion, text, logos, labels, branding, barcodes, annotations, UI elements, Blender interface, gizmos, wireframes, walnuts, second croissant, grapes, wicker basket, folding chair, white rose, blanket fringe, added props, moved objects, resized objects, changed composition, missing cartons, blurry cartons, artificial lighting, inconsistent shadows, CGI look, cartoon, duplicated objects, low quality, watermark.`;

const picnicCartonRotationPrompt = `Use the first reference image as the exact base image. Use the second reference image only as the reference for the new rotation angle, visible side geometry, folded-top structure, and perspective of both white cartons.

Create one ultra-realistic commercial picnic product photo in vertical 9:16 format.

The main task is to keep the entire picnic scene from the first image unchanged. Only replace or adjust both white cartons so that they match the carton angle and 3D form shown in the second reference image.

There are two cartons in the second reference image. Both cartons must have their angle, side geometry, folded-top structure and perspective updated.

The black background from the second image must not appear in the final result. Ignore the black background completely. Only use the cartons themselves from the second image as the geometry, angle and perspective reference.

Everything from the first reference image must stay exactly the same: same camera framing, same vertical 9:16 composition, same wooden table, same glass with cocoa drink, same croissants, same wooden board, same fruit plate, same orange, same grapes, same napkin, same walnuts, same park background, same chair if visible, same basket if visible, same grass, same sunlight direction, same tree shadows, same depth of field, same object spacing, same object scale, and same atmosphere.

Do not move the table, glass, croissants, fruit plate, orange, grapes, walnuts, background objects, camera angle or composition. Do not add new objects, remove existing objects, add a black background, add text, labels, logos, branding or UI elements.

Only change the angle of both white cartons, the visible side geometry of both cartons, the folded-top structure of both cartons, and the realism of both carton materials if needed.

Replace both white cartons with cartons matching the second reference geometry. Both edited cartons must stay in the exact same positions on the table as in the first image, keep the same approximate scale and height relative to the surrounding objects, keep the same spacing between each other, keep realistic contact shadows under them, be rotated into the same three-quarter side angle shown in the second reference, show more visible side panels, show narrower front faces due to perspective, show the folded side geometry clearly, have the screw caps positioned and angled like in the second image, and feel physically integrated into the original picnic scene.

The front carton is the dominant hero carton in the foreground, larger in frame and in the strongest focus. It should use the same exact angle as the large carton in the second reference. The back carton is slightly smaller due to perspective, positioned behind the main carton, partially visible, and should use the same exact angle as the smaller rear carton in the second reference.

Both cartons should look like premium blank Tetra Pak-style drink cartons: matte white paper-based packaging, white plastic screw caps on top, realistic cap ridges, angled folded top corners, flat-topped peak structure, triangular folded side flaps visible near the top, crisp diagonal fold lines, subtle vertical seams, slightly softened paper edges, realistic paper surface texture, subtle paper wrinkles and crease shadows, clean blank surfaces, no text, no logo, no label, no barcode and no branding.

The new cartons should match the second image's angle and geometry, but the lighting, color temperature, shadows and material finish must match the first image.

Use the first image lighting exactly: warm natural sunlight, soft dappled shadows from trees, realistic shadow direction, soft highlights on the white caps, warm bounce light from the honey-oak wooden table, subtle shadows on the carton side panels, realistic ambient occlusion at the carton bases, no harsh studio lighting, no gray artificial shading and no pasted-object look.

The cartons must feel naturally integrated into the picnic photo: matte white paper surface, soft paper texture, natural outdoor highlights, realistic folded edges, realistic cap plastic material, correct perspective on all folds, correct shadows on the wooden table, correct reflection and ambient bounce from the warm table, no computer-generated image look and no floating objects.

The edited cartons must follow the original photo perspective: same table plane, same lens perspective, same vertical alignment, same vanishing direction, same scale relative to glass, croissant and fruit plate, no warped caps, no distorted cartons and no mismatch between the cartons and table surface.

Keep the original environment unchanged: green park background, trees and grass softly blurred, warm sunlight, cinematic natural bokeh, croissants on the right, glass with cocoa behind or near the cartons, fruit plate and orange in foreground, walnuts near the table edge, and cozy premium summer picnic atmosphere.

The visual style is ultra-realistic photo edit, premium commercial product photography, luxury summer picnic aesthetic, clean white packaging mockup, natural outdoor lighting, photorealistic integration, cinematic shallow depth of field, realistic food textures, realistic wood grain and high-end lifestyle advertisement.

The final image must look exactly like the first reference photo, except both white cartons are now rotated and shaped like the cartons shown in the second reference image.

Negative prompt: black background, gray background, pasted cartons, floating cartons, wrong shadows, mismatched lighting, changed composition, moved objects, rearranged objects, resized objects, changed camera angle, changed table layout, added objects, removed objects, extra cartons, text, logos, labels, branding, barcode, UI elements, annotations, distorted cartons, warped caps, wrong perspective, glossy plastic cartons, computer-generated image look, low quality, blurry main cartons, watermark.`;

const qwenEditMultiangleName = "Qwen Edit Multiangle";
const higgsfieldAnglesName = "Higgsfield Angles";

const articlePart1 = {
  path: "/",
  tag: "Туториал",
  date: "17 июня 2026",
  title: "Контролирование пространства и планировки. Часть 1",
  subtitle: "",
  heroImage: "/assets/hero-video-poster-kling-110509.jpg",
  heroVideo: "/assets/hero-cover-video-kling-110509-scrub.mp4",
  heroScrub: true,
  heroAlt: "Светлая Barbie-themed спальня после обработки",
  asideText:
    "AI-креатор с техническим и дизайнерским образованием. Работаю с генеративным контентом и создаю прикладные инструменты для дизайнеров. Консультации и проекты под конкретные задачи.",
  promptText: prepPrompt,
  copyPrompts: {
    prepPrompt,
    imagenColorPrompt,
    roomDescription,
    panoramaPrompt,
    topViewPrompt,
    anglePrompt,
    qwenEditMultiangleName,
    higgsfieldAnglesName
  },
  sections: [
    {
      id: "intro",
      nav: "Зачем это нужно",
      title: "",
      paragraphs: [
        "В статье описан рабочий пайплайн, который помогает контролировать пространство, планировку и объекты в комнате при генерации серии фото с разных ракурсов. Главная задача - сделать так, чтобы одна и та же комната выглядела узнаваемо в нескольких кадрах. Меняется только точка съемки, а интерьер, мебель, пропорции, материалы и логика пространства остаются максимально стабильными.",
        "Такой подход полезен в нескольких сценариях. В фото и видео с персонажем смена ракурса добавляет реалистичности: зрителю кажется, что персонаж действительно находится в одном пространстве, а не каждый раз в новой сгенерированной сцене. В предметном контенте можно показать один объект в одной среде с разных сторон и собрать более убедительную визуальную серию. В недвижимости и интерьерах этот прием помогает демонстрировать помещение с разных точек, объяснять расположение мебели и лучше передавать масштаб.",
        "При работе с интерьерами ИИ часто не просто меняет ракурс, а заново придумывает комнату: переставляет мебель, меняет стены, добавляет случайные предметы, искажает картины, теряет материалы и ухудшает качество. Чем меньше у модели информации о комнате, тем больше она додумывает.",
        "Общий порядок работы такой: подготовить исходные фото, убрать логотипы, лишние надписи и мелкие элементы, которые могут поплыть при генерации; описать комнату текстом; собрать панораму; создать вид сверху; обозначить будущие ракурсы; для каждого ракурса подобрать нужные исходные фото и точный промпт. Генерировать лучше по одному кадру, а не всю серию сразу.",
        "После генерации результат почти всегда нужно довести вручную: очистить ошибки, вернуть стабильные элементы, исправить мелкие детали и при необходимости подтянуть качество через дополнительную модель.",
        "В этом примере за основу взяты две исходные фотографии комнаты. На их базе собраны новые ракурсы того же пространства: планировка, мебель и общая логика интерьера сохраняются *(одна картина на стене намеренно удалена)*."
      ],
      galleriesAfter: {
        5: {
          caption: "Итоговая серия ракурсов",
          items: [
            { src: "/assets/itogo-gallery/1.jpg", alt: "Исходный кадр комнаты 1", label: "Исходники" },
            { src: "/assets/itogo-gallery/2.jpg", alt: "Исходный кадр комнаты 2", label: "Исходники" },
            { src: "/assets/itogo-gallery/3.png", alt: "Итоговый ракурс комнаты 1", label: "Результат" },
            { src: "/assets/itogo-gallery/4.png", alt: "Итоговый ракурс комнаты 2", label: "Результат" },
            { src: "/assets/itogo-gallery/5.png", alt: "Итоговый ракурс комнаты 3", label: "Результат" },
            { src: "/assets/itogo-gallery/6.png", alt: "Итоговый ракурс комнаты 4", label: "Результат" },
            { src: "/assets/itogo-gallery/7.png", alt: "Итоговый ракурс комнаты 5", label: "Результат" },
            { src: "/assets/itogo-gallery/8.png", alt: "Итоговый ракурс комнаты 6", label: "Результат" }
          ]
        }
      }
    },
    {
      id: "tools",
      nav: "Среда выполнения и модели",
      title: "Среда выполнения и модели",
      paragraphs: [
        "Для генерации изображений я использую [Weavy AI](https://weavy.ai/). Аналогично хорошо подойдет [Higgsfield](https://higgsfield.ai/): оба инструмента недорогие и закрывают основные задачи такого пайплайна. Дополнительный плюс Weavy AI - возможность подключать модели по API и собирать более автоматизированный процесс.",
        "Основной поток изображений я делаю в Nano Banana PRO {{info:информация актуальна на май 2026 года}}. Для повышения качества и восстановления деталей использую ChatGPT Imagen 2.0 {{info:информация актуальна на май 2026 года}}. Для подготовки промптов подходят ChatGPT 5.5 Pro и Claude Opus 4.7 {{info:информация актуальна на май 2026 года}}: в статье дальше я буду называть их обобщенно LLM. Финальная ручная доводка остается за Photoshop или другим редактором.",
        "Если вы работаете с Imagen 2.0, лучше выбирать качество high, когда нужен чистый финал, и medium, когда важнее быстро получить рабочий вариант. В конец промпта полезно добавлять {{copy:imagenColorPrompt|отдельный блок}} про коррекцию глобального цветового каста. Он помогает убрать желтизну, бежевую дымку и ощущение искусственной обработки, не разрушая реальные теплые оттенки объектов."
      ],
      prompt: imagenColorPrompt
    },
    {
      id: "preparation",
      nav: "Подготовка изображений",
      title: "Подготовка изображений",
      paragraphs: [
        "В примере используются два реальных кадра детской комнаты в стиле Барби. Задача - получить несколько новых фотографий этой же комнаты с разных точек. Исходники взяты из видео в Pinterest, поэтому на первом этапе я {{copy:prepPrompt|дополнительно улучшила освещение и сняла тяжелый розовый цветовой каст}}.",
        "Перед генерацией важно проверить техническую базу. Фото должны быть достаточно четкими, без сильного сжатия, смаза и заметной потери деталей. Свет должен выглядеть естественно и не конфликтовать между кадрами.",
        "С подушек, картин, упаковок и других предметов лучше заранее убрать логотипы, текст и мелкие элементы, которые могут деформироваться. На финальном этапе их можно вернуть вручную."
      ],
      embed: "drag-canvas",
      embedStep: "Этап 1",
      embedCaption: "Подготовка исходников: кадры комнаты очищаются, выравниваются по свету и передаются в модель вместе с фиксированным промптом.",
      prompt: prepPrompt
    },
    {
      id: "description",
      nav: "Детальное описание комнаты",
      title: "Детальное описание комнаты",
      paragraphs: [
        "После подготовки изображений нужно сделать детальное текстовое описание комнаты. Загрузите в LLM все фотографии, которые есть, и попросите описать интерьер максимально подробно: материалы, цвета, мебель, расположение объектов, свет, декор, картины, текстиль и мелкие детали.",
        "Такой текст становится опорой для следующих этапов. Когда модель получает не только фото, но и структурированное описание пространства, ей сложнее случайно переставить мебель, поменять стены или потерять важные элементы.",
        "Ниже {{copy:roomDescription|мой вариант описания комнаты}}. Его можно использовать как референс и вставлять в дальнейшие промпты, когда нужно удерживать одну и ту же комнату в разных ракурсах."
      ],
      promptLabel: "Описание",
      prompt: roomDescription
    },
    {
      id: "panorama",
      nav: "Панорама комнаты",
      title: "Панорама комнаты",
      paragraphs: [
        "Панорама нужна, чтобы дать модели более цельное представление о пространстве. По традиции панораму собирают как 360-градусный обзор, поэтому для этого лучше брать максимально вытянутые пропорции. В моем случае я ставила 21:9. По двум исходным фото ИИ должен понять, как выглядит комната не только в одном кадре, но и как продолжаются стены, пол, потолок и мебель за пределами видимой области.",
        "Если часть стены на исходниках не видна, есть два рабочих варианта: явно прописать словами, что должно находиться в невидимой зоне, или подгрузить дополнительный референс - похожую стену, мебель, окно, шкаф, цвет или декор. Чем меньше пустых зон в логике комнаты, тем устойчивее будет следующая генерация.",
        "На вход я подаю два исходных изображения и {{copy:panoramaPrompt|промпт для панорамы}}. На выходе выбираю тот вариант, где комната читается наиболее логично: без лишних дверей, с корректной геометрией, узнаваемой мебелью и продолжением стен. Панораму можно собрать и с одного ракурса, но несколько исходников обычно дают более надежный результат."
      ],
      embedsAfter: {
        1: {
          type: "drag-canvas",
          src: "/drag-canvas-panorama/index.html",
          title: "Panorama drag and drop workflow",
          step: "Этап 2",
          caption: "Схема связей: два исходных изображения и промпт подаются в Gemini-карточку для сборки панорамы комнаты."
        }
      },
      prompt: panoramaPrompt
    },
    {
      id: "top-view",
      nav: "Вид сверху",
      title: "Вид сверху",
      paragraphs: [
        "Вид сверху нужен, чтобы контролировать положение камеры и заранее понимать, что попадет в объектив. Это не финальный красивый кадр, а техническая схема: она помогает модели связать будущий ракурс с реальной планировкой комнаты.",
        "Модель часто плохо понимает запрос top-down view, если не дать ей пример. Поэтому полезно добавить дополнительный референс: план комнаты сверху, схему интерьера или любой близкий пример того, как должен выглядеть вид сверху. Обычно стоит заложить две-три попытки, потому что первая генерация может ошибиться в пропорциях, дверях, окне или расположении кровати.",
        "На вход подаются исходные фото, панорама и {{copy:topViewPrompt|промпт}}. Результат не обязан быть идеальным как самостоятельное изображение. Его задача - стать понятной картой для следующих ракурсов."
      ],
      embedsAfter: {
        2: {
          type: "drag-canvas",
          src: "/drag-canvas-topview/index.html",
          title: "Top-down drag and drop workflow",
          step: "Этап 3",
          caption: "Схема связей: два исходных изображения и промпт подаются в Gemini-карточку для создания вида сверху."
        }
      },
      prompt: topViewPrompt
    },
    {
      id: "angle-generation",
      nav: "Генерация нужного ракурса",
      title: "Генерация нужного ракурса",
      paragraphs: [
        "Когда есть вид сверху, на нем можно обозначить будущие ракурсы. Я делаю это во внешнем редакторе, чаще всего в Figma: рисую условные камеры и расставляю их по разным точкам комнаты. Если нужно четыре ракурса, значит дальше будет четыре отдельные генерации с разной постановкой камеры.",
        "Каждый новый ракурс - это отдельная задача. На вход подаются исходные фото комнаты, панорама, вид сверху с отмеченной камерой и текстовое описание комнаты. В промпте нужно четко указать, какой именно кадр нужен: откуда смотрит камера, на какой высоте она находится, в какую сторону направлена и какие зоны комнаты должны попасть в кадр.",
        "{{copy:anglePrompt|Структура промпта должна быть максимально операционной}}. Я подписываю, что на первом и втором изображении показана исходная комната, на третьем - панорама, на четвертом - вид сверху с будущим ракурсом. Затем описываю кадр по зонам: что находится слева, справа, в центре, сверху, снизу и на переднем плане. Чем точнее разложена композиция, тем меньше модель импровизирует."
      ],
      imagesAfter: {
        0: {
          src: "/assets/rakursy.png",
          alt: "Схема будущих ракурсов комнаты",
          caption: "Ракурсы",
          natural: true
        }
      },
      embedsAfter: {
        1: {
          type: "drag-canvas",
          src: "/drag-canvas-angle/index.html",
          title: "Angle generation drag and drop workflow",
          step: "Этап 4",
          caption:
            "Схема связей: исходные кадры, панорама, вид сверху и операционный промпт подаются в Gemini-карточку для генерации нужного ракурса."
        }
      },
      prompt: anglePrompt
    },
    {
      id: "quality-recovery",
      nav: "Восстановление качества",
      title: "Восстановление качества изображения",
      paragraphs: [
        "Итоговые ракурсы могут получаться недостаточно чистыми: замыленными, смазанными, с потерей материала и общей дымкой. Возникает эффект сгенерированного фото или кадра, снятого на камеру с очень низким числом мегапикселей. Если исходное фото уже некачественное, каждая следующая итерация может ухудшать результат.",
        "Модель не восстанавливает реальную детализацию, а часто усредняет ее: материалы становятся гладкими, фактура теряется, линии размазываются, а свет превращается в мягкую дымку. Когда ИИ создает фото с нуля по промпту, он нередко дает более чистое качество, потому что заново продумывает детали. Но если брать за основу плохой или замыленный исходник, модель тащит его проблемы дальше.",
        "Я пробовала классические апскейлы и энхансеры: [Topaz Photo AI](https://www.topazlabs.com/topaz-photo-ai), [Magnific](https://magnific.ai/) и [Krea Enhancer](https://www.krea.ai/). В моем кейсе они не дали нужного результата: даже после обработки оставался эффект сгенерированного фото.",
        "В Topaz я несколько раз повторяла обработку, но результат стабильно давал дефекты: на фото появлялись пятна, коврик оставался замыленным и терял пушистую фактуру, розетка заметно плавала, а вафельный плед становился слишком сглаженным. Magnific также не удержал ключевые проблемные зоны: коврик выглядел недостаточно пушистым, розетка оставалась нестабильной, а вафельная структура пледа читалась слабо. От Krea Enhancer я ожидала более чистого результата, но в этом кейсе он испортил вафельный плед, изменил розетку и не убрал общую дымку.",
        "Более надежный вариант - не спасать плохой исходник, а пересобрать его в хорошем качестве. Для этого можно использовать связку кастомного бота и GPT Imagen 2.0: бот анализирует изображение и готовит подробный промпт, затем в Imagen 2.0 загружается исходное фото и этот промпт. Для рабочего результата качества medium часто достаточно, а для более чистого финала можно переходить на high."
      ],
      comparisonsAfter: {
        2: {
          variant: "grid",
          items: [
            {
              label: "Topaz",
              before: "/assets/compare-original.png",
              after: "/assets/compare-topaz.png"
            },
            {
              label: "Magnific",
              before: "/assets/compare-original.png",
              after: "/assets/compare-magnific.png"
            },
            {
              label: "Krea",
              before: "/assets/compare-original.png",
              after: "/assets/compare-krea.png"
            }
          ]
        },
        4: {
          variant: "grid",
          items: [
            {
              label: "Imagen 2.0",
              before: "/assets/compare-original.png",
              after: "/assets/compare-imagen-final.png"
            },
            {
              label: "Imagen 2.0",
              before: "/assets/compare-original-2.png",
              after: "/assets/compare-imagen-final-2.png"
            },
            {
              label: "Imagen 2.0",
              before: "/assets/compare-original-3.png",
              after: "/assets/compare-imagen-final-3.png"
            }
          ]
        }
      }
    },
    {
      id: "manual-retouch",
      nav: "Ручная доводка результата",
      title: "Ручная доводка результата",
      paragraphs: [
        "После генерации почти всегда нужен Photoshop или другой редактор. ИИ может хорошо собрать общий ракурс, но мелкие детали часто требуют ручной доводки: розетки, выключатели, рисунки на картинах, текст на подушках, логотипы, мелкий декор и повторяющиеся элементы.",
        "В моем случае я отдельно правила розетки, потому что на разных генерациях они получались разными, и возвращала картины вручную. Такой подход проще контролировать, чем пытаться заставить модель безошибочно удерживать мелкую графику на всех кадрах.",
        "Ручная доводка - это не признак провала генерации, а нормальная часть пайплайна. Модель отвечает за общую сцену, перспективу и свет, а редактор закрывает точность деталей."
      ]
    },
    {
      id: "other-methods",
      nav: "Другие способы",
      title: "Другие способы",
      paragraphs: [
        "Выше описан детальный и достаточно кропотливый пайплайн. Если пройти его аккуратно - подготовить исходники, собрать описание, панораму, вид сверху и отдельные промпты под ракурсы, - результат обычно получается стабильнее. Но есть и более быстрые варианты. Их можно использовать, когда важнее скорость, а не максимальный контроль качества.",
        "Первый вариант - [Freepik Change Camera](https://www.freepik.com/ai/change-camera). Подробнее об инструменте есть в [Telegram](https://t.me/shot_neurodesign/186). Инструмент позволяет создать пространство и вручную выставлять ракурсы: двигать камеру вперед и назад, поворачивать ее и контролировать точку съемки. Плюс в том, что процесс становится более управляемым. Минусы - ожидание, стоимость и зависимость от количества исходных фото: если материалов мало, результат быстро становится слабее. Для максимального погружения нужно много референсов. {{info:информация актуальна на момент выхода этой функции, март 2026 года}}",
        "Второй вариант - {{copy:qwenEditMultiangleName|Qwen Edit Multiangle}}. Я использовала эту функцию в Weavy AI: она позволяет крутить камеру вверх, вниз, вправо и влево, при этом стоит недорого. Работает быстрее, чем полный пайплайн, и в целом может дать нормальный результат, но модель сама достраивает невидимые зоны, поэтому иногда добавляет ложные элементы в кадр.",
        "Третий вариант - {{copy:higgsfieldAnglesName|Higgsfield Angles}}. Инструмент быстро меняет ракурс по настройкам и может пригодиться как промежуточный драфт, но как финальное решение работает слабо: фото теряют четкость и детализацию, мелкие детали становятся плохо читаемыми, а сама модель пока недостаточно сильная. Если использовать этот вариант, то скорее для быстрого поиска нужного ракурса, а затем уже доделывать кадр другой моделью.",
        "Четвертый вариант - генерация через видео. В этом случае первый кадр загружается в модель для видео, например Kling или Seedance, а в промпте описывается нужное движение камеры. Плюс такого подхода в том, что существующий кадр обычно сохраняется достаточно стабильно: внутри видимой области редко появляется что-то неожиданное. Минусы - непредсказуемость и слабый контроль невидимых зон: все, чего нет в кадре, модель может додумать и изменить. Даже если получившийся кадр нравится, его почти всегда нужно дополнительно апскейлить."
      ]
    },
    {
      id: "next",
      nav: "Вывод",
      title: "Вывод",
      paragraphs: [
        "В этой части описан пайплайн, который помогает управлять комнатой и ракурсами на уровне визуальной логики. Он не заменяет строгий архитектурный контроль, но позволяет заметно снизить хаос в генерациях и получить серию кадров, где пространство остается узнаваемым.",
        "Если нужно обязательно сохранить точные пропорции, размеры и расположение объектов, потребуется более строгий подход: измерения, сетка, план, контроль перспективы и дополнительные проверки. Эту тему я разберу [во второй части](/kontrolirovanie-prostranstva-i-planirovki-chast-2)."
      ]
    }
  ]
};

const articlePart2 = {
  path: "/kontrolirovanie-prostranstva-i-planirovki-chast-2",
  tag: "Туториал",
  date: "30 июня 2026",
  title: "Контролирование пространства и планировки. Часть 2",
  subtitle: "",
  heroImage: "/assets/part2/cover-picnic.png",
  heroVideo: "",
  heroPlaceholder: false,
  heroAlt: "Пикниковая товарная сцена с белыми упаковками на деревянном столе",
  asideText:
    "AI-креатор с техническим и дизайнерским образованием. Работаю с генеративным контентом и создаю прикладные инструменты для дизайнеров. Консультации и проекты под конкретные задачи.",
  promptText: fashionSidePrompt,
  cursorTrailImages: [
    "/assets/part2/cursor/image 457.png",
    "/assets/part2/cursor/image 458.png",
    "/assets/part2/cursor/image 459.png",
    "/assets/part2/cursor/image 460.png",
    "/assets/part2/cursor/image 461.png",
    "/assets/part2/cursor/image 462.png",
    "/assets/part2/cursor/image 463.png",
    "/assets/part2/cursor/image 464.png",
    "/assets/part2/cursor/image 465.png",
    "/assets/part2/cursor/image 466.png",
    "/assets/part2/cursor/image 467.png",
    "/assets/part2/cursor/image 469.png"
  ],
  copyPrompts: {
    fashionSidePrompt,
    fashionNineAnglesPrompt,
    picnicReferenceDescription,
    picnicGridPrompt,
    picnicStoryboardPrompt,
    picnicSingleAnglePrompt,
    picnicCartonRotationPrompt,
    qwenEditMultiangleName,
    higgsfieldAnglesName
  },
  sections: [
    {
      id: "intro",
      nav: "Что разбираем",
      title: "",
      paragraphs: [
        "В [первой части](/) был описан пайплайн удержания пространства, планировки и ракурсов на примере комнаты: как сделать так, чтобы серия кадров выглядела как съемка одного и того же интерьера. В этой части задача другая: зафиксировать ключевой объект, а камеру двигать уже относительно него.",
        "У этой части две цели. Первая - сравнить, как с такой логикой справляются Nano Banana Pro и ChatGPT Imagen 2.0 High {{info:информация актуальна на май 2026 года}}. Вторая - разобрать способы получения кадров вокруг предмета или модели, когда сам объект должен оставаться стабильным, а меняется именно точка съемки и окружение.",
        "Чтобы лучше контролировать генерации с помощью ИИ, к пайплайну часто приходится подключать сторонние инструменты: схемы, 3D-референсы, видео-референсы и редакторы."
      ]
    },
    {
      id: "camera-vs-object",
      nav: "Задача смены ракурса",
      title: "Задача смены ракурса",
      paragraphs: [
        "Про разные ракурсы модели уже вышло много туториалов и гайдов: снизу, сбоку, со спины, крупнее или дальше. Но чаще всего в таких примерах крутится сама модель, а пространство остается почти фиксированным. Для предметной съемки, фэшн-кадров и интерьерных серий иногда важна другая логика: сохранить объект на своем месте и поменять именно точку съемки.",
        "В нормальной съемочной логике объект может оставаться неподвижным, а камера ходит вокруг него. Тогда меняется фон, перспектива, видимые стены, световой рисунок и глубина кадра. Именно это сложнее контролировать: генеративная модель должна не просто повернуть центральный объект, а пересобрать кадр так, будто фотограф действительно сменил позицию.",
        "Вторая сложность - стабильность ключевого объекта. При смене ракурса модель или предмет часто начинают жить отдельно: меняется поза, силуэт, одежда, упаковка, пропорции или мелкие детали. Если же жестко зафиксировать объект, фон может стать случайным и потерять связь с предыдущими кадрами."
      ]
    },
    {
      id: "models",
      nav: "Среда выполнения и генеративные модели",
      title: "Среда выполнения и генеративные модели",
      paragraphs: [
        "Основные генерации я сравнивала на Nano Banana Pro и ChatGPT Imagen 2.0 High {{info:информация актуальна на май 2026 года}}. Промпты для тестов готовила в [ChatGPT](https://chatgpt.com/) 5.5 Pro и [Claude](https://claude.ai/) Opus 4.7 {{info:информация актуальна на май 2026 года}}: ChatGPT хорошо собирает структурные инструкции, а Claude в сложных предметных сценах чаще точнее раскладывает композицию по зонам.",
        "Я использую [Weavy AI](https://weavy.ai/), потому что внутри можно работать с готовыми встроенными моделями и подключать сторонние через [fal](https://fal.ai/explore/search). То же самое можно собрать в [Higgsfield](https://higgsfield.ai/) или других агрегаторах, если там есть нужные модели, видео-инструменты и возможность работать с несколькими референсами. Для финальной ручной доводки нужен Photoshop или другой редактор."
      ]
    },
    {
      id: "fashion-test",
      nav: "Эксперимент 1",
      title: "Эксперимент 1: модель в студии",
      paragraphs: [
        "Простая геометричная сцена хорошо показывает проблему. Есть модель в студии и задача получить кадры с разных точек: поза, силуэт, одежда и направление взгляда не меняются, но камера перемещается относительно пространства. Комната специально сделана геометричной: стены разных цветов помогают проверить, понимает ли генеративная модель, где находится камера.",
        "Первый подход строится так же, как в [первой части](/): сначала делаем вид сверху и расставляем камеру в той точке, из которой хотим получить кадр. После этого на вход подаются три опоры: исходный ракурс модели, изображение того, под каким углом была выполнена исходная съемка, и схема комнаты с целевым положением камеры. В {{copy:fashionSidePrompt|промпте}} отдельно фиксируется, что нужен красный фон, камера стоит напротив девушки, поза и силуэт не меняются, а меняется только положение камеры относительно пространства.",
        "Nano Banana Pro справился хорошо и с первого, и со второго прогона: верно сделал красную стену и правильно расположил камеру относительно девушки. ChatGPT Imagen 2.0 стены выставил верно, но поменял положение головы девушки. После нескольких прогонов положение тела тоже начинало меняться, поэтому поза соблюдалась не полностью.",
        "{{target:fashion-body-fix}}Чтобы решить вопрос с положением головы и тела, я сделала короткое 3D-видео с поворотом модели через [Higgsfield](https://higgsfield.ai/): video / Higgsfield DoP / 3D Rotation. Аналогичный прием можно собрать и в [Weavy AI](https://weavy.ai/). Из такого видео выбирается нужный кадр и фиксируется. После этого на вход подается уже нужная поза на фото, а дальше можно смотреть, как генеративная модель перестраивает пространство вокруг нее.",
        "Ниже результаты по ракурсам без добавления целевого 3D-референса. Nano Banana Pro лучше держал ракурсы и в целом увереннее сохранял пространственную логику. ChatGPT Imagen 2.0 справился хуже по постановке камеры, зато его кадры получались менее замыленными: в них больше текстуры и меньше ощущения размытой генерации. Забавно, что в одном из кадров обе генеративные модели буквально загнали девушку в угол.",
        "Второй подход - попросить генеративную модель {{copy:fashionNineAnglesPrompt|сразу собрать сетку}} из девяти ракурсов в одном изображении. В конце выбранный кадр можно апскейлить или использовать как референс для отдельной генерации, чтобы получить нормальное качество. В целом этот вариант с Nano Banana Pro отработал хорошо: сетка помогает быстро выбрать нужный ракурс, а сама генеративная модель уверенно справляется с пространственной логикой и положением модели."
      ],
      mediaAfter: {
        0: {
          variant: "equal-height",
          caption: "Исходная поза модели и геометричная комната, на которой проверяется логика камеры.",
          items: [
            { type: "image", src: "/assets/part2/blank-1.png", alt: "Исходная фэшн-болванка" },
            { type: "image", src: "/assets/part2/blank-2.png", alt: "Геометричная студия для теста ракурса" }
          ]
        },
        3: {
          caption: "Короткое 3D-видео и выбранные кадры помогают зафиксировать позу, если генеративная модель начинает менять силуэт или ракурс тела.",
          items: [
            { type: "video", src: "/assets/part2/higgsfield-rotation.mp4", alt: "Зацикленное 3D-видео поворота модели" },
            { type: "image", src: "/assets/part2/rotation-frame-1.png", alt: "Выбранный кадр из 3D-видео" },
            { type: "image", src: "/assets/part2/rotation-frame-2.png", alt: "Дополнительный кадр из 3D-видео" }
          ]
        },
        5: {
          variant: "full-pair centered-captions",
          items: [
            { type: "image", src: "/assets/part2/nbp-upscale.png", alt: "Сетка ракурсов Nano Banana Pro", caption: "Nano Banana Pro" },
            { type: "image", src: "/assets/part2/chatgpt-upscale.png", alt: "Сетка ракурсов ChatGPT Imagen 2.0", caption: "ChatGPT Imagen 2.0" }
          ]
        }
      },
      embedsAfter: {
        1: {
          type: "drag-canvas",
          src: "/drag-canvas-fashion/index.html",
          title: "Fashion angle comparison workflow",
          step: "Этап 1",
          caption: "Схема связей: три изображения и один промпт подаются одновременно в Gemini 3 и ChatGPT Imagen 2.0 для сравнения результата."
        }
      },
      promptsAfter: {
        1: [
          {
            label: "Prompt",
            text: fashionSidePrompt
          }
        ],
        5: [
          {
            label: "Prompt",
            text: fashionNineAnglesPrompt
          }
        ]
      },
      matricesAfter: {
        4: {
          columns: ["Nano Banana Pro", "ChatGPT Imagen 2.0", "target"],
          items: [
            { src: "/assets/part2/1-nbp.png", alt: "Nano Banana Pro, ракурс 1", label: "Nano Banana Pro" },
            { src: "/assets/part2/1-chat.png", alt: "ChatGPT Imagen 2.0, ракурс 1", label: "ChatGPT Imagen 2.0" },
            { src: "/assets/part2/blank-4.png", alt: "Целевой ракурс 1" },
            { src: "/assets/part2/2-nbp.png", alt: "Nano Banana Pro, ракурс 2", label: "Nano Banana Pro" },
            { src: "/assets/part2/2-chat.png", alt: "ChatGPT Imagen 2.0, ракурс 2", label: "ChatGPT Imagen 2.0" },
            { src: "/assets/part2/blank-5.png", alt: "Целевой ракурс 2" },
            { src: "/assets/part2/3-nbp.png", alt: "Nano Banana Pro, ракурс 3", label: "Nano Banana Pro" },
            { src: "/assets/part2/3-chat.png", alt: "ChatGPT Imagen 2.0, ракурс 3", label: "ChatGPT Imagen 2.0" },
            { src: "/assets/part2/blank-6.png", alt: "Целевой ракурс 3" },
            { src: "/assets/part2/4-nbp.png", alt: "Nano Banana Pro, ракурс 4", label: "Nano Banana Pro" },
            { src: "/assets/part2/4-chat.png", alt: "ChatGPT Imagen 2.0, ракурс 4", label: "ChatGPT Imagen 2.0" },
            { src: "/assets/part2/blank-7.png", alt: "Целевой ракурс 4" }
          ]
        }
      }
    },
    {
      id: "product-test",
      nav: "Эксперимент 2",
      title: "Эксперимент 2: Сцена с большим количеством деталей",
      paragraphs: [
        "Второй пример более прикладной - работа с товарным фото и ключевым объектом. Здесь задача была сложнее: попробовать удержать не только главный объект, но и всю сцену вокруг него. Была взята сложная композиция в формате пикника: несколько объектов, разные материалы, упаковка, фон, посуда, еда, текстиль и мелкий декор. В обычной товарной съемке акцент чаще всего стоит на самом продукте, а посторонних деталей мало.",
        "Референс взят с Pinterest, а упаковка на первом этапе была убрана, потому что это не реклама конкретного продукта, а демонстрационный пример. Дополнительно так проще не тянуть нестабильную графику через генерации (при необходимости на финальном кадре исходную этикетку можно вернуть через генерацию или Photoshop).",
        "Перед такими генерациями важно сначала описать то, что уже есть в сцене: какие объекты находятся рядом, из каких материалов они сделаны, как падает свет, где тени, что является главным объектом, а что остается окружением. Этот {{copy:picnicReferenceDescription|reference description}} дальше можно вставлять во все промпты.",
        "В этой сцене переменных намного больше, чем в сцене с девушкой. Там были четыре стены и один центральный объект, а здесь нет четких границ пространства и много предметов, которые генеративная модель может случайно переставить. Если просто дать исходное фото и {{copy:picnicGridPrompt|попросить собрать несколько ракурсов в одном изображении}}, результат получается слабым и неправдоподобным, даже если подробно описывать каждый кадр: сцена начинает разваливаться, а связи между объектами теряются.",
        "Поэтому я сначала собрала сцену в Blender и выставила нужные ракурсы. Чтобы генеративная модель лучше понимала, что есть что, я дополнительно подписала объекты на фото {{info:Пробовала и неподписанные объекты: модели заметно хуже понимали, какие предметы находятся в сцене и как их удерживать между ракурсами.}}. После этого я попробовала повторить прием с девятью ракурсами в одном изображении, как в предыдущем примере. Сначала результат был слабым: ChatGPT 5.5 Pro плохо раскладывал задачу для такой плотной предметной сцены. Позже Claude написал {{copy:picnicStoryboardPrompt|промпт}} заметно лучше, но не идеально: белые коробки все равно поворачивались или расставлялись не так, часть мелких объектов терялась, а связи между предметами в разных кадрах оставались нестабильными.",
        "В этом случае {{copy:picnicSingleAnglePrompt|надежнее делать один ракурс за раз}}: давать генеративной модели конкретный референс, подробное описание сцены и точный промпт под нужный кадр. {{info:Лучше всего промпты для этой части получались в Claude Opus 4.7 medium.}} Тогда результат становится плюс-минус стабильным, а ошибки проще контролировать на ручной доводке.",
        "Готовое 3D-моделирование или заранее собранная 2D-композиция в Photoshop дают больше контроля над масштабом, размерами и пропорциями. В этом случае ИИ не придумывает с нуля, насколько большим должен быть объект и где он стоит относительно остальных элементов. Генеративная модель работает поверх уже заданного каркаса: меняет визуальную фактуру, свет и реалистичность сцены, но опирается на готовую геометрию. Да, результат все равно может немного расходиться с референсом, но такие отклонения обычно проще поправить, чем полностью пересобирать сломанную композицию."
      ],
      cursorTrailParagraphs: [0, 1],
      imagesAfter: {
        0: {
          src: "/assets/part2/picnic-source.png",
          alt: "Исходное фото пикниковой товарной сцены",
          caption: "Исходное фото",
          natural: true,
          narrow: true,
          cursorTrail: true
        }
      },
      promptsAfter: {
        2: [
          {
            label: "Reference description",
            text: picnicReferenceDescription
          }
        ],
        3: [
          {
            label: "Prompt",
            text: picnicGridPrompt
          }
        ],
        4: [
          {
            label: "Prompt",
            text: picnicStoryboardPrompt
          }
        ],
        5: [
          {
            label: "Prompt",
            text: picnicSingleAnglePrompt
          }
        ],
      },
      embedsAfter: {
        3: {
          type: "drag-canvas",
          src: "/drag-canvas-picnic-grid/index.html",
          title: "Picnic nine-angle grid workflow",
          step: "Этап 1",
          caption: "Схема связей: исходное изображение и промпт подаются в Gemini 3 и ChatGPT Imagen 2.0 для генерации сетки ракурсов."
        },
        4: {
          type: "drag-canvas",
          src: "/drag-canvas-picnic-storyboard/index.html",
          title: "Picnic storyboard nine-angle workflow",
          step: "Этап 2",
          caption: "Схема связей: реальное фото, Blender-сториборд и промпт подаются в Gemini 3 для проверки сетки из девяти ракурсов."
        },
        5: {
          type: "drag-canvas",
          src: "/drag-canvas-picnic/index.html",
          title: "Picnic product generation workflow",
          step: "Этап 3",
          caption: "Схема связей: реальное фото и Blender-ракурс вместе с промптом подаются в Gemini 3 для сборки одного управляемого товарного кадра."
        },
      },
      matricesAfter: {
        6: {
          variant: "natural",
          columns: ["Ракурсы", "Nano Banana Pro", "ChatGPT Imagen 2.0"],
          items: [
            { src: "/assets/part2/picnic-final-target-1.png", alt: "Технический ракурс пикниковой сцены 1", label: "Ракурсы" },
            { src: "/assets/part2/picnic-final-nbp-1.jpg", alt: "Nano Banana Pro, пикниковая сцена 1", label: "Nano Banana Pro" },
            { src: "/assets/part2/picnic-final-chatgpt-1.jpg", alt: "ChatGPT Imagen 2.0, пикниковая сцена 1", label: "ChatGPT Imagen 2.0" },
            { src: "/assets/part2/picnic-final-target-2.png", alt: "Технический ракурс пикниковой сцены 2", label: "Ракурсы" },
            { src: "/assets/part2/picnic-final-nbp-2.jpg", alt: "Nano Banana Pro, пикниковая сцена 2", label: "Nano Banana Pro" },
            { src: "/assets/part2/picnic-final-chatgpt-2.jpg", alt: "ChatGPT Imagen 2.0, пикниковая сцена 2", label: "ChatGPT Imagen 2.0" },
            { src: "/assets/part2/picnic-final-target-3.png", alt: "Технический ракурс пикниковой сцены 3", label: "Ракурсы" },
            { src: "/assets/part2/picnic-final-nbp-3.jpg", alt: "Nano Banana Pro, пикниковая сцена 3", label: "Nano Banana Pro" },
            { src: "/assets/part2/picnic-final-chatgpt-3.jpg", alt: "ChatGPT Imagen 2.0, пикниковая сцена 3", label: "ChatGPT Imagen 2.0" },
            { src: "/assets/part2/picnic-final-target-4.png", alt: "Технический ракурс пикниковой сцены 4", label: "Ракурсы" },
            { src: "/assets/part2/picnic-final-nbp-4.jpg", alt: "Nano Banana Pro, пикниковая сцена 4", label: "Nano Banana Pro" },
            { src: "/assets/part2/picnic-final-chatgpt-4.jpg", alt: "ChatGPT Imagen 2.0, пикниковая сцена 4", label: "ChatGPT Imagen 2.0" }
          ]
        }
      },
      galleriesAfter: {
        3: {
          variant: "full-width captions-below",
          items: [
            {
              src: "/assets/part2/picnic-grid-nbp.png",
              alt: "Сетка ракурсов пикниковой сцены, Nano Banana Pro",
              label: "Nano Banana Pro",
              aspect: 0.558
            },
            {
              src: "/assets/part2/picnic-grid-chatgpt.png",
              alt: "Сетка ракурсов пикниковой сцены, ChatGPT Imagen 2.0 High",
              label: "ChatGPT Imagen 2.0 High",
              aspect: 1
            }
          ]
        },
        4: {
          variant: "full-width hover-labels",
          caption:
            "Основные ошибки в обоих результатах были похожими: ключевые белые коробки поворачивались или расставлялись не так, как нужно, а большое количество объектов в одной сетке модели удержали не полностью. При этом общую дальность, близость ракурсов и понимание того, что должно попадать в кадр, они расставили достаточно логично.",
          items: [
            {
              src: "/assets/part2/picnic-blender-angles.png",
              alt: "Blender-сцена с выставленными ракурсами пикниковой композиции",
              label: "Выставленные ракурсы",
              aspect: 0.56
            },
            {
              src: "/assets/part2/picnic-blender-nbp.png",
              alt: "Результат пикниковой композиции через Nano Banana Pro",
              label: "Nano Banana Pro",
              aspect: 0.558
            },
            {
              src: "/assets/part2/picnic-blender-chatgpt.png",
              alt: "Результат пикниковой композиции через ChatGPT Imagen 2.0 High",
              label: "ChatGPT Imagen 2.0 High",
              aspect: 0.563
            }
          ]
        }
      }
    },
    {
      id: "processing",
      nav: "Обработка результата",
      title: "Обработка результата",
      paragraphs: [
        "Выше показаны уже отобранные и обработанные результаты, но до финального вида у сцены было два повторяющихся слабых места: белые коробки искажались, теряли структуру и материал, а часть кадров уходила в сильную желтизну и теряла четкость.",
        "Первую проблему я решала через дополнительные референсы по форме: отдельно задавала ракурс коробок через Higgsfield 3D Rotation ({{anchor:fashion-body-fix|как в случае с моделью в геометричной комнате}}), подставляла его в сцену и уже после этого генерировала кадр. Так генеративная модель не придумывала геометрию упаковки заново, а опиралась на более понятный объемный референс.",
        "Со второй проблемой помогал отдельный прогон на восстановление материалов и коррекцию желтого каста. На этом шаге важно не пересобирать композицию заново, а аккуратно вернуть бумажную фактуру упаковки, убрать лишнюю теплую дымку и сохранить естественный солнечный свет."
      ],
      promptsAfter: {
        1: [
          {
            label: "Prompt",
            text: picnicCartonRotationPrompt
          }
        ]
      },
      embedsAfter: {
        1: {
          type: "drag-canvas",
          src: "/drag-canvas-picnic-refinement/index.html",
          title: "Picnic carton refinement workflow",
          step: "Этап 4",
          caption: "Схема связей: исходный кадр, референс поворота упаковки и промпт подаются в Gemini 3 для уточнения формы коробок."
        }
      },
      comparisonsAfter: {
        2: {
          variant: "single",
          items: [
            {
              label: "Коррекция материалов и цвета",
              before: "/assets/part2/picnic-carton-refined.png",
              after: "/assets/part2/picnic-final-nbp-2.jpg"
            }
          ]
        }
      }
    },
    {
      id: "other-methods",
      nav: "Другие способы",
      title: "Другие способы",
      paragraphs: [
        "Есть и другие рабочие способы менять ракурс. Их можно использовать как быстрый драфт, чтобы проверить направление, или как финальный результат, если качество и стабильность сцены подходят под задачу.",
        "Первый вариант - [Freepik Change Camera](https://www.freepik.com/ai/change-camera). Подробнее об инструменте есть в [Telegram](https://t.me/shot_neurodesign/186). Инструмент позволяет создать пространство и вручную выставлять ракурсы: двигать камеру вперед и назад, поворачивать ее и контролировать точку съемки. Плюс в том, что процесс становится более управляемым. Минусы - ожидание, стоимость и зависимость от количества исходных фото: если материалов мало, результат быстро становится слабее. Для максимального погружения нужно много референсов. {{info:информация актуальна на момент выхода этой функции, март 2026 года}}",
        "Второй вариант - {{copy:qwenEditMultiangleName|Qwen Edit Multiangle}}. Я использовала эту функцию в Weavy AI: она позволяет крутить камеру вверх, вниз, вправо и влево, при этом стоит недорого. Работает быстрее, чем полный пайплайн, и в целом может дать нормальный результат, но модель сама достраивает невидимые зоны, поэтому иногда добавляет ложные элементы в кадр.",
        "Третий вариант - {{copy:higgsfieldAnglesName|Higgsfield Angles}}. Инструмент быстро меняет ракурс по настройкам и может пригодиться как промежуточный драфт, но как финальное решение работает слабо: фото теряют четкость и детализацию, мелкие детали становятся плохо читаемыми, а сама модель пока недостаточно сильная. Если использовать этот вариант, то скорее для быстрого поиска нужного ракурса, а затем уже доделывать кадр другой моделью.",
        "Четвертый вариант - генерация через видео. В этом случае первый кадр загружается в модель для видео, например Kling или Seedance, а в промпте описывается нужное движение камеры. Плюс такого подхода в том, что существующий кадр обычно сохраняется достаточно стабильно: внутри видимой области редко появляется что-то неожиданное. Минусы - непредсказуемость и слабый контроль невидимых зон: все, чего нет в кадре, модель может додумать и изменить. Даже если получившийся кадр нравится, его почти всегда нужно дополнительно апскейлить."
      ]
    },
    {
      id: "summary",
      nav: "Вывод",
      title: "Вывод",
      paragraphs: [
        "Смена ракурса - это не всегда поворот объекта. В более сложных задачах нужно разделять две операции: что делает камера и что делает сам объект. Если их не развести, генеративная модель почти всегда выбирает более простой путь и начинает вращать центральный объект вместо того, чтобы перестраивать пространство вокруг него.",
        "Для сложных сцен лучше заранее собрать 3D-схему, болванку, Blender-сцену или отдельные технические кадры под каждый ракурс. Так генеративная модель получает каркас и меньше придумывает масштаб, расположение и пропорции объектов с нуля."
      ]
    }
  ]
};

const articlePart3 = {
  path: "/artefakty-v-chatgpt-imagen-2-0",
  tag: "Эксперимент",
  date: "5 июля 2026",
  title: "Артефакты в ChatGPT\nImagen 2.0",
  heroImage: "/assets/artifacts/medium-0.png",
  heroVideo: "",
  heroAlt: "Портретная генерация с примером артефактов в волосах",
  asideText:
    "AI-креатор с техническим и дизайнерским образованием. Работаю с генеративным контентом и создаю прикладные инструменты для дизайнеров. Консультации и проекты под конкретные задачи.",
  copyPrompts: {
    hairRetouchPrompt
  },
  sections: [
    {
      id: "intro",
      title: "",
      paragraphs: [
        "В последнее время стало появляться много постов про заметные артефакты у ChatGPT Imagen 2.0. Сильнее всего я замечала их на волосах и в портретных генерациях: почти все примеры с AI-артефактами, которые попадались, были именно про людей. Иногда еще видно сетку или пятнистость на коже, но это обычно считывается только при очень внимательном просмотре.",
        "Не все знакомы с этой проблемой и не все вообще ее замечают. Поэтому идея этой заметки - показать, на что стоит обращать внимание в генерациях, чтобы не тащить такие ошибки в дальнейшие работы, и разобрать несколько способов, как их можно сгладить."
      ]
    },
    {
      id: "problem",
      nav: "В чем проблема",
      title: "В чем проблема",
      paragraphs: [
        "ChatGPT Imagen 2.0 - относительно новая генеративная модель. Она делает сильные фотореалистичные изображения, поэтому ее активно используют в проектах. У модели есть три режима качества: low, medium и high. В целом low нужен для быстрых черновиков и проверки идеи, medium чаще работает как баланс между скоростью, стоимостью и детализацией, а high стоит использовать для финальных изображений, где важны чистая фактура, меньше шума и меньше заметных технических дефектов.",
        "О чем речь: при генерации людей на волосах, а иногда и на коже, появляются характерные AI-артефакты, которые быстро выдают генеративную картинку. На волосах это выглядит как гофре, заломы или повторяющиеся волны по длине, хотя в промпте такой укладки нет. Кожа может уходить в пятна и становиться менее естественной. Похожие артефакты иногда встречаются и в Nano Banana Pro, но в этом эксперименте я смотрю именно на Imagen 2.0.",
        "**Читала теорию**, что после маркировки сгенерированного звука и видео могут появляться аналогичные невидимые водяные знаки для изображений. Возможно, в фотографиях это проявляется иначе, и я не утверждаю, что конкретно эти артефакты связаны с маркировкой."
      ],
      galleriesAfter: {
        1: {
          variant: "full-width pairs",
          items: [
            {
              src: "/assets/artifacts/recraft-artifact-example-1.png",
              alt: "Пример артефактов в генерации"
            },
            {
              src: "/assets/artifacts/recraft-artifact-detail-1.png",
              alt: "Крупный фрагмент артефактов"
            },
            {
              src: "/assets/artifacts/recraft-artifact-example-2.png",
              alt: "Второй пример артефактов в генерации"
            },
            {
              src: "/assets/artifacts/recraft-artifact-detail-2.png",
              alt: "Крупный фрагмент второго примера артефактов"
            },
            {
              src: "/assets/artifacts/recraft-artifact-example-3.png",
              alt: "Третий пример артефактов в генерации"
            },
            {
              src: "/assets/artifacts/recraft-artifact-detail-3.png",
              alt: "Крупный фрагмент третьего примера артефактов"
            }
          ]
        }
      }
    },
    {
      id: "experiment",
      nav: "Начало эксперимента",
      title: "Начало эксперимента",
      paragraphs: [
        "Я сравнила проблему в трех режимах качества. В режиме low артефакты заметны уже на первой итерации. В medium и high изображение выглядит значительно аккуратнее, но если начать всматриваться, паттерн все равно можно найти.",
        "Первый вывод: на первой итерации ChatGPT Imagen 2.0 обычно справляется хорошо. В режимах medium и high результат в целом можно использовать, если не увеличивать изображение и не искать дефекты специально.",
        "Но как только следующие генерации делаются уже поверх сгенерированного изображения, качество начинает проседать. Артефакты накапливаются, волосы ломаются сильнее, и эта деформация становится заметной уже без приближения."
      ],
      mediaAfter: {
        0: {
          caption: "Свободная генерация без дополнительных правок.",
          items: [
            {
              src: "/assets/artifacts/low-0.png",
              alt: "Генерация ChatGPT Imagen 2.0 в режиме low",
              caption: "Low"
            },
            {
              src: "/assets/artifacts/medium-0.png",
              alt: "Генерация ChatGPT Imagen 2.0 в режиме medium",
              caption: "Medium"
            },
            {
              src: "/assets/artifacts/high-0.png",
              alt: "Генерация ChatGPT Imagen 2.0 в режиме high",
              caption: "High"
            }
          ]
        },
        2: {
          caption: "Одна правка поверх уже сгенерированного изображения: смена цвета волос.",
          items: [
            {
              src: "/assets/artifacts/low-1.png",
              alt: "Повторная генерация ChatGPT Imagen 2.0 в режиме low",
              caption: "Low"
            },
            {
              src: "/assets/artifacts/medium-1.png",
              alt: "Повторная генерация ChatGPT Imagen 2.0 в режиме medium",
              caption: "Medium"
            },
            {
              src: "/assets/artifacts/high-1.png",
              alt: "Повторная генерация ChatGPT Imagen 2.0 в режиме high",
              caption: "High"
            }
          ]
        }
      }
    },
    {
      id: "fix",
      nav: "Как править",
      title: "Как править",
      paragraphs: [
        "Самый простой вариант - пробовать режим high. Он работает заметно лучше, но стоит дороже.",
        "Для исправления я взяла плохой результат на low и отправила его в Nano Banana Pro с {{copy:hairRetouchPrompt|соответствующим промптом}}. Задача была не пересобрать фото, а аккуратно отретушировать только волосы: убрать заломы, гофрированные участки и AI-деформации, не меняя лицо, позу, одежду, фон и свет. Еще один вариант - прогнать плохое фото через Imagen 2.0 в режиме high: он тоже может плюс-минус выровнять результат.",
        "В обоих случаях стало лучше. Еще один вариант - отправить изображение в [Enhancor](https://app.enhancor.ai/). Пока я заметила, что он лучше работает на оригинальном сайте, а не через API.",
        "По стоимости: просто использовать режим high - 37 звездочек, примерно $0.41 или около 35 рублей за фото. Связка low + Nano Banana Pro - 1 + 11 звездочек, примерно $0.12 или около 10 рублей за фото."
      ],
      comparisonsAfter: {
        1: {
          variant: "double",
          items: [
            {
              label: "Nano Banana Pro",
              before: "/assets/artifacts/bad-before.png",
              after: "/assets/artifacts/fixed-nano-banana.png"
            },
            {
              label: "Imagen 2.0 High",
              before: "/assets/artifacts/bad-before.png",
              after: "/assets/artifacts/fixed-imagen-high.png"
            }
          ]
        }
      }
    },
    {
      id: "summary",
      nav: "Вывод",
      title: "Вывод",
      paragraphs: [
        "Главный вывод: при генерации людей стоит отдельно проверять волосы и кожу. Волосы с гофрированными заломами очень быстро выдают AI-картинку, а кожа может уходить в пятна.",
        "Если изображение нужно использовать как реалистичное, лучше ловить эти дефекты на ранней итерации, а не чинить уже накопившуюся деградацию."
      ]
    }
  ]
};

export const articles = [articlePart1, articlePart2, articlePart3];

export const article = articlePart1;

export const relatedArticles = [
  {
    tag: "Туториал",
    date: "17 июня 2026",
    title: "Контролирование пространства и планировки. Часть 1",
    href: "/",
    image: "/assets/hero-video-poster-kling-110509.jpg",
    alt: "Светлая Barbie-themed спальня после обработки"
  },
  {
    tag: "Туториал",
    date: "30 июня 2026",
    title: "Контролирование пространства и планировки. Часть 2",
    href: "/kontrolirovanie-prostranstva-i-planirovki-chast-2",
    image: "/assets/part2/cover-picnic.png",
    alt: "Пикниковая товарная сцена"
  },
  {
    tag: "Эксперимент",
    date: "5 июля 2026",
    title: "Артефакты в ChatGPT Imagen 2.0",
    href: "/artefakty-v-chatgpt-imagen-2-0",
    image: "/assets/artifacts/medium-0.png",
    alt: "Портретная генерация с примером артефактов в волосах"
  },
  {
    tag: "Туториал",
    date: "",
    title: "Удаление желтизны с фото",
    href: "#footer",
    image: "",
    alt: "Скоро",
    comingSoon: true
  }
];

const interfaceTranslations = {
  ru: {
    blog: "Блог",
    articleNav: "В статье",
    relatedTitle: "Другие статьи",
    comingSoon: "Скоро",
    footerText: "Блог о нейродизайне, визуальных пайплайнах и практических туториалах.",
    copyToast: "Скопировано"
  },
  en: {
    blog: "Blog",
    articleNav: "In this article",
    relatedTitle: "More articles",
    comingSoon: "Soon",
    footerText: "A blog about neurodesign, visual pipelines, and practical tutorials.",
    copyToast: "Copied"
  }
};

const articleTranslations = {
  "/": {
    tag: "Tutorial",
    date: "June 17, 2026",
    title: "Controlling Space and Layout. Part 1",
    heroAlt: "A bright Barbie-themed bedroom after image enhancement",
    asideText:
      "AI creator with a technical and design background. I work with generative content and build practical tools for designers. Consultations and project work for specific tasks.",
    sections: [
      {
        title: "",
        paragraphs: [
          "This article describes a working pipeline that helps control the space, layout, and objects in a room when generating a photo series from different angles. The main goal is to make the same room remain recognizable across multiple frames. Only the camera position changes, while the interior, furniture, proportions, materials, and spatial logic stay as stable as possible.",
          "This approach is useful in several scenarios. In photos and videos with a character, changing the camera angle adds realism: the viewer feels that the character is truly inside one space, rather than appearing in a newly generated scene each time. In product content, it helps show the same object in one environment from several sides and build a more convincing visual series. In real estate and interiors, it helps demonstrate a room from different viewpoints, explain furniture placement, and communicate scale more clearly.",
          "When working with interiors, AI often does not simply change the camera angle. It starts reinventing the room: moving furniture, changing walls, adding random objects, distorting artwork, losing materials, and reducing quality. The less information the model has about the room, the more it starts to invent.",
          "The general workflow is this: prepare the source photos; remove logos, extra text, and small elements that may drift during generation; describe the room in text; build a panorama; create a top-down view; mark the future camera angles; and prepare the right source images plus an exact prompt for each angle. It is better to generate one frame at a time rather than the whole series at once.",
          "After generation, the result almost always needs manual refinement: cleaning errors, restoring stable elements, fixing small details, and, if needed, improving quality through an additional model.",
          "In this example, two original room photos were used as the base. New angles of the same space were generated from them: the layout, furniture, and overall interior logic stay consistent *(one wall artwork was intentionally removed)*."
        ],
        galleriesAfter: {
          5: {
            caption: "Final angle series",
            items: [
              { label: "Sources", alt: "Original room frame 1" },
              { label: "Sources", alt: "Original room frame 2" },
              { label: "Result", alt: "Generated room angle 1" },
              { label: "Result", alt: "Generated room angle 2" },
              { label: "Result", alt: "Generated room angle 3" },
              { label: "Result", alt: "Generated room angle 4" },
              { label: "Result", alt: "Generated room angle 5" },
              { label: "Result", alt: "Generated room angle 6" }
            ]
          }
        }
      },
      {
        title: "Tools and Models",
        paragraphs: [
          "For image generation, I use [Weavy AI](https://weavy.ai/). [Higgsfield](https://higgsfield.ai/) can work just as well: both tools are affordable and cover the main tasks in this pipeline. An extra advantage of Weavy AI is the ability to connect models through an API and build a more automated process.",
          "I run the main image flow in Nano Banana PRO {{info:information is current as of May 2026}}. For quality recovery and detail restoration, I use ChatGPT Imagen 2.0 {{info:information is current as of May 2026}}. ChatGPT 5.5 Pro and Claude Opus 4.7 {{info:information is current as of May 2026}} work well for preparing prompts; later in the article, I refer to them collectively as LLMs. Final manual cleanup is still done in Photoshop or another editor.",
          "If you work with Imagen 2.0, it is better to choose high quality when you need a clean final image, and medium when speed matters more than polish. At the end of the prompt, it is useful to add a separate {{copy:imagenColorPrompt|block}} about global color cast correction. It helps remove yellowness, beige haze, and the feeling of artificial processing without destroying the real warm tones of objects."
        ]
      },
      {
        title: "Image Preparation",
        embedStep: "Step 1",
        paragraphs: [
          "The example uses two real frames of a Barbie-style children's room. The task is to get several new photos of the same room from different viewpoints. The sources were taken from a Pinterest video, so at the first stage I {{copy:prepPrompt|improved the lighting and removed the heavy pink color cast}}.",
          "Before generation, it is important to check the technical base. The photos should be clear enough, without heavy compression, blur, or visible loss of detail. The lighting should look natural and should not conflict between frames.",
          "It is better to remove logos, text, and small elements from pillows, artwork, packaging, and other objects in advance if they may deform during generation. They can be restored manually at the final stage."
        ],
        embedCaption: "Preparing the source images: the room frames are cleaned, balanced for lighting, and passed to the model together with a fixed prompt."
      },
      {
        title: "Detailed Room Description",
        promptLabel: "Description",
        paragraphs: [
          "After preparing the images, you need to create a detailed text description of the room. Upload all available photos to an LLM and ask it to describe the interior as precisely as possible: materials, colors, furniture, object placement, lighting, decor, artwork, textiles, and small details.",
          "This text becomes a support layer for the next stages. When the model receives not only photos but also a structured description of the space, it is harder for it to randomly move furniture, change walls, or lose important elements.",
          "Below is {{copy:roomDescription|my version of the room description}}. It can be used as a reference and inserted into later prompts when the goal is to keep the same room stable across different angles."
        ]
      },
      {
        title: "Room Panorama",
        paragraphs: [
          "A panorama is needed to give the model a more complete understanding of the space. Traditionally, a panorama is built as a 360-degree view, so it is better to use very wide proportions. In my case, I used 21:9. From two source photos, AI needs to understand not only what the room looks like in one frame, but also how the walls, floor, ceiling, and furniture continue beyond the visible area.",
          "If part of a wall is not visible in the source images, there are two workable options: explicitly describe what should be in the hidden area, or add an extra reference - a similar wall, piece of furniture, window, closet, color, or decor. The fewer empty zones there are in the room logic, the more stable the next generation will be.",
          "As input, I provide two source images and a {{copy:panoramaPrompt|panorama prompt}}. As output, I choose the version where the room reads most logically: no extra doors, correct geometry, recognizable furniture, and a believable continuation of the walls. A panorama can be generated from one angle, but several source images usually produce a more reliable result."
        ],
        embedsAfter: {
          1: {
            step: "Step 2",
            caption: "Connection scheme: two source images and a prompt are passed into a Gemini card to assemble the room panorama."
          }
        }
      },
      {
        title: "Top-Down View",
        paragraphs: [
          "A top-down view is needed to control the camera position and understand in advance what will appear in the frame. It is not a final polished image, but a technical map: it helps the model connect the future angle with the real room layout.",
          "Models often struggle with the request top-down view unless you give them an example. That is why it is useful to add an extra reference: a room plan, an interior diagram, or any close example of what the top-down view should look like. Usually, it is worth expecting two or three attempts, because the first generation may get proportions, doors, the window, or the bed placement wrong.",
          "The input includes the source photos, the panorama, and the {{copy:topViewPrompt|prompt}}. The result does not need to be perfect as an image on its own. Its job is to become a clear map for the next angles."
        ],
        embedsAfter: {
          2: {
            step: "Step 3",
            caption: "Connection scheme: two source images and a prompt are passed into a Gemini card to create the top-down view."
          }
        }
      },
      {
        title: "Generating the Required Angle",
        paragraphs: [
          "Once there is a top-down view, you can mark the future camera angles on it. I usually do this in an external editor, most often in Figma: I draw conditional cameras and place them at different points in the room. If four angles are needed, then the next step is four separate generations with different camera positions.",
          "Each new angle is a separate task. The input includes the original room photos, the panorama, the top-down view with the marked camera, and the text description of the room. The prompt should clearly state what exact frame is needed: where the camera is looking from, how high it is, what direction it faces, and which room zones should appear in the frame.",
          "{{copy:anglePrompt|The prompt structure should be highly operational}}. I specify that the first and second images show the original room, the third is the panorama, and the fourth is the top-down view with the future camera angle. Then I describe the frame by zones: what is on the left, right, center, top, bottom, and foreground. The more precisely the composition is broken down, the less the model improvises."
        ],
        embedsAfter: {
          1: {
            step: "Step 4",
            caption: "Connection scheme: source frames, panorama, top-down view, and an operational prompt are passed into a Gemini card to generate the target angle."
          }
        },
        imagesAfter: {
          0: {
            alt: "Diagram of future room angles",
            caption: "Angles"
          }
        }
      },
      {
        title: "Image Quality Recovery",
        paragraphs: [
          "Final angles can come out insufficiently clean: blurry, smeared, with material loss and a general haze. The image starts to feel generated or like a frame shot on a very low-megapixel camera. If the source image is already low-quality, each next iteration can make the result worse.",
          "The model does not truly restore real detail; it often averages it out. Materials become smooth, texture is lost, lines smear, and light turns into a soft haze. When AI creates an image from scratch by prompt, it often gives cleaner quality because it rethinks the details. But when the base is a bad or blurry source, the model carries its problems forward.",
          "I tried classic upscalers and enhancers: [Topaz Photo AI](https://www.topazlabs.com/topaz-photo-ai), [Magnific](https://magnific.ai/), and [Krea Enhancer](https://www.krea.ai/). In my case, they did not give the result I needed: even after processing, the image still felt generated.",
          "In Topaz, I repeated the processing several times, but the result consistently produced defects: spots appeared in the image, the rug remained blurry and lost its fluffy texture, the outlet noticeably drifted, and the waffle blanket became too smoothed out. Magnific also failed to hold the key problem areas: the rug did not look fluffy enough, the outlet remained unstable, and the waffle structure of the blanket was weak. I expected a cleaner result from Krea Enhancer, but in this case it damaged the waffle blanket, changed the outlet, and did not remove the overall haze.",
          "A more reliable option is not to rescue a bad source, but to rebuild it in good quality. For this, you can use a combination of a custom bot and GPT Imagen 2.0: the bot analyzes the image and prepares a detailed prompt, then the original image and this prompt are uploaded to Imagen 2.0. Medium quality is often enough for a working result, while high quality can be used for a cleaner final."
        ],
        comparisonsAfter: {
          2: {
            items: [
              { label: "Topaz" },
              { label: "Magnific" },
              { label: "Krea" }
            ]
          },
          4: {
            items: [
              { label: "Imagen 2.0" },
              { label: "Imagen 2.0" },
              { label: "Imagen 2.0" }
            ]
          }
        }
      },
      {
        title: "Manual Result Refinement",
        paragraphs: [
          "After generation, Photoshop or another editor is almost always needed. AI can assemble the overall angle well, but small details often require manual refinement: outlets, switches, drawings on posters, text on pillows, logos, small decor, and repeated elements.",
          "In my case, I separately fixed the outlets because they came out differently across generations, and I manually returned the artwork. During preparation, I intentionally removed complex text and images from frames, then placed them back at the final stage through Photoshop. This approach is easier to control than trying to force the model to preserve small graphics perfectly across all frames.",
          "Manual refinement is not a sign that the generation failed; it is a normal part of the pipeline. The model is responsible for the overall scene, perspective, and light, while the editor closes the precision of details."
        ]
      },
      {
        title: "Other Methods",
        paragraphs: [
          "The workflow above is detailed and meticulous. If everything is prepared carefully, the result can be strong and controllable. But there are also faster options. They can work as a draft or sometimes as a final result, depending on the quality requirements.",
          "One option is [Freepik Change Camera](https://www.freepik.com/ai/change-camera). There is a short note about the tool in [Telegram](https://t.me/shot_neurodesign/186). It lets you create a space and manually set camera angles: move the camera forward and backward, rotate it, and control the viewpoint. The advantage is control. The drawbacks are waiting time, cost, and dependence on the number of source photos: with too few images, the output becomes weaker. For deeper spatial consistency, many references are needed. {{info:information is current as of the function release, March 2026}}",
          "Another option is {{copy:qwenEditMultiangleName|Qwen Edit Multiangle}}. I used it in Weavy AI: it lets you move the camera up, down, right, and left, and it is inexpensive. It is faster than the full pipeline and can produce a decent result, but the model reconstructs invisible areas on its own, so it may add false elements into the frame.",
          "A third option is {{copy:higgsfieldAnglesName|Higgsfield Angles}}. The tool quickly changes the camera angle according to settings and can be useful as an intermediate draft, but it is weak as a final solution: images lose sharpness and detail, small elements become hard to read, and the model itself is not strong enough yet. I would use it mainly to quickly find a needed angle and then finish the frame with another model.",
          "The fourth option is generation through video. In this case, the first frame is uploaded into a video model, for example Kling or Seedance, and the prompt describes the needed camera movement. The advantage is that the existing frame usually stays fairly stable: unexpected things rarely appear inside the visible area. The drawbacks are unpredictability and weak control over invisible zones: anything outside the frame can be invented or changed by the model. Even if the resulting frame looks good, it almost always needs additional upscaling."
        ]
      },
      {
        title: "What Comes Next",
        paragraphs: [
          "This approach already works for interiors, but the same logic applies to more complex tasks: a character in one space, a product in one environment, a model in a set, or a visual series where the camera moves while the key object remains stable.",
          "The next step is separating two ideas: when the camera moves around the object, and when the object itself rotates relative to the camera. I cover that topic in the [second part](/kontrolirovanie-prostranstva-i-planirovki-chast-2)."
        ]
      }
    ]
  },
  "/kontrolirovanie-prostranstva-i-planirovki-chast-2": {
    tag: "Tutorial",
    date: "June 30, 2026",
    title: "Controlling Space and Layout. Part 2",
    heroAlt: "Picnic product scene with white cartons",
    asideText:
      "AI creator with a technical and design background. I work with generative content and build practical tools for designers. Consultations and project work for specific tasks.",
    sections: [
      {
        title: "",
        paragraphs: [
          "In the [first part](/), I described a pipeline for preserving space, layout, and camera angles using a room as the example: how to make a series of frames feel like a shoot of the same interior. In this part, the task is different: keep the key object fixed while moving the camera relative to it.",
          "This part has two goals. The first is to compare how Nano Banana Pro and ChatGPT Imagen 2.0 High handle this logic {{info:information is current as of May 2026}}. The second is to break down ways of getting frames around an object or model when the object itself needs to remain stable while the camera position and environment change.",
          "To control AI generations more precisely, the pipeline often needs additional tools: diagrams, 3D references, video references, and editors."
        ]
      },
      {
        title: "The Angle-Change Problem",
        paragraphs: [
          "There are already many tutorials and guides about generating different angles of a model: from below, from the side, from the back, closer, or farther away. But in most of those examples, the model itself rotates while the space remains almost fixed. For product photography, fashion frames, and interior series, another logic is sometimes more important: keep the object in place and change the camera position.",
          "In a normal shooting setup, the object can stay still while the camera moves around it. Then the background, perspective, visible walls, lighting pattern, and frame depth change. This is harder to control: the generative model needs to rebuild the frame as if the photographer really changed position, instead of simply rotating the central object.",
          "The second challenge is the stability of the key object. When the camera angle changes, a model or product often starts drifting independently: pose, silhouette, clothes, packaging, proportions, or small details change. If the object is locked too aggressively, the background can become random and lose its connection to previous frames."
        ]
      },
      {
        title: "Tools and Generative Models",
        paragraphs: [
          "I compared the main generations in Nano Banana Pro and ChatGPT Imagen 2.0 High {{info:information is current as of May 2026}}. I prepared prompts for the tests in [ChatGPT](https://chatgpt.com/) 5.5 Pro and [Claude](https://claude.ai/) Opus 4.7 {{info:information is current as of May 2026}}: ChatGPT is good at assembling structural instructions, while Claude more often breaks down complex product scenes by zones more accurately.",
          "I use [Weavy AI](https://weavy.ai/) because it lets me work with built-in models and connect external ones through [fal](https://fal.ai/explore/search). The same setup can be built in [Higgsfield](https://higgsfield.ai/) or other aggregators if they provide the needed models, video tools, and support for multiple references. For final manual cleanup, Photoshop or another editor is still needed."
        ]
      },
      {
        title: "Experiment 1: Model in a Studio",
        paragraphs: [
          "A simple geometric scene shows the problem clearly. There is a model in a studio, and the task is to get frames from different points: the pose, silhouette, clothing, and gaze direction stay the same, but the camera moves relative to the space. The room is intentionally geometric: walls of different colors help check whether the generative model understands where the camera is.",
          "The first approach is built the same way as in the [first part](/): first, create a top-down view and place the camera at the point from which the final frame should be captured. Then three supports are provided as input: the original angle of the model, an image showing the angle from which the source shoot was made, and a room diagram with the target camera position. In the {{copy:fashionSidePrompt|prompt}}, I separately fix that the red background is needed, the camera stands in front of the girl, the pose and silhouette do not change, and only the camera position relative to the space changes.",
          "Nano Banana Pro performed well on both the first and second runs: it made the red wall correctly and placed the camera correctly relative to the girl. ChatGPT Imagen 2.0 placed the walls correctly, but changed the girl's head position. After several runs, the body position also started to drift, so the pose was not fully preserved.",
          "{{target:fashion-body-fix}}To solve the head and body position issue, I made a short 3D video with model rotation through [Higgsfield](https://higgsfield.ai/): video / Higgsfield DoP / 3D Rotation. A similar workflow can also be built in [Weavy AI](https://weavy.ai/). From that video, the needed frame is selected and fixed. After that, the needed pose is provided as an image input, and then you can check how the generative model rebuilds the space around it.",
          "Below are the angle results without adding a target 3D reference. Nano Banana Pro held the angles better and generally preserved spatial logic more confidently. ChatGPT Imagen 2.0 performed worse in camera placement, but its images were less blurry: they had more texture and less of a smeared generation feel. Interestingly, in one of the frames, both generative models literally pushed the girl into a corner.",
          "The second approach is to ask the generative model to {{copy:fashionNineAnglesPrompt|assemble the grid}} of nine angles in one image. At the end, the selected frame can be upscaled or used as a reference for a separate generation to get normal quality. Overall, this Nano Banana Pro workflow worked well: the grid helps quickly choose the needed angle, and the generative model handles spatial logic and model placement confidently."
        ],
        embedsAfter: {
          1: {
            step: "Step 1",
            caption: "Connection scheme: three images and one prompt are passed into Gemini 3 and ChatGPT Imagen 2.0 at the same time to compare the results."
          }
        },
        matricesAfter: {
          4: {
            columns: ["Nano Banana Pro", "ChatGPT Imagen 2.0", "target"],
            items: [
              { alt: "Nano Banana Pro, angle 1" },
              { alt: "ChatGPT Imagen 2.0, angle 1" },
              { alt: "Target angle 1" },
              { alt: "Nano Banana Pro, angle 2" },
              { alt: "ChatGPT Imagen 2.0, angle 2" },
              { alt: "Target angle 2" },
              { alt: "Nano Banana Pro, angle 3" },
              { alt: "ChatGPT Imagen 2.0, angle 3" },
              { alt: "Target angle 3" },
              { alt: "Nano Banana Pro, angle 4" },
              { alt: "ChatGPT Imagen 2.0, angle 4" },
              { alt: "Target angle 4" }
            ]
          }
        },
        mediaAfter: {
          0: {
            caption: "The original model pose and the geometric room used to test camera logic.",
            items: [
              { alt: "Original fashion test image" },
              { alt: "Geometric studio for the angle test" }
            ]
          },
          3: {
            caption: "A short 3D video and selected frames help lock the pose when the generative model starts changing the silhouette or body angle.",
            items: [
              { alt: "Looped 3D rotation video of the model" },
              { alt: "Selected frame from the 3D video" },
              { alt: "Additional frame from the 3D video" }
            ]
          },
          5: {
            items: [
              { caption: "Nano Banana Pro", alt: "Nano Banana Pro angle grid" },
              { caption: "ChatGPT Imagen 2.0", alt: "ChatGPT Imagen 2.0 angle grid" }
            ]
          }
        }
      },
      {
        title: "Experiment 2: Scene with Many Details",
        paragraphs: [
          "The second example is more applied: working with a product photo and a key object. Here the task was harder: to preserve not only the main object, but the entire scene around it. I used a complex picnic composition: several objects, different materials, packaging, background, dishes, food, textiles, and small decor. In regular product photography, the focus is usually on the product itself, with very few extra details.",
          "The reference was taken from Pinterest, and the packaging was removed at the first stage because this is not an advertisement for a specific product, but a demo example. It also makes it easier not to carry unstable graphics through all generations (if needed, the original label can be restored in the final frame through generation or Photoshop).",
          "Before this kind of generation, it is important to first describe what already exists in the scene: which objects are next to each other, what materials they are made of, how the light falls, where the shadows are, what is the main object, and what remains part of the environment. This {{copy:picnicReferenceDescription|reference description}} can then be inserted into all prompts.",
          "There are many more variables in this scene than in the scene with the girl. There, there were four walls and one central object; here, there are no clear boundaries of the space and many objects that the generative model can randomly move. If you simply provide the source photo and {{copy:picnicGridPrompt|ask it to assemble several angles in one image}}, the result becomes weak and implausible, even if each frame is described in detail: the scene starts falling apart and object relationships are lost.",
          "So I first built the scene in Blender and set the needed angles. To help the generative model understand what each object is, I additionally labeled the objects in the image {{info:I also tried unlabeled objects: the models understood the scene noticeably worse and struggled more to preserve the objects between angles.}}. After that, I tried to repeat the nine-angle-in-one-image method from the previous example. At first, the result was weak: ChatGPT 5.5 Pro did not structure the task well for such a dense product scene. Later, Claude wrote a much better {{copy:picnicStoryboardPrompt|prompt}}, but still not a perfect one: the white cartons were still rotated or placed incorrectly, some small objects disappeared, and relationships between objects across frames remained unstable.",
          "In this case, it is {{copy:picnicSingleAnglePrompt|more reliable to make one angle at a time}}: give the generative model a specific reference, a detailed scene description, and an exact prompt for the needed frame. {{info:The best prompts for this part came from Claude Opus 4.7 medium.}} Then the result becomes reasonably stable, and errors are easier to control during manual refinement.",
          "Ready-made 3D modeling or a pre-built 2D composition in Photoshop gives more control over scale, size, and proportions. In this case, AI does not invent from scratch how large an object should be or where it stands in relation to other elements. The generative model works on top of an existing structure: it changes the visual texture, light, and realism of the scene, but relies on the prepared geometry. Yes, the result may still differ slightly from the reference, but those deviations are usually easier to fix than a broken composition."
        ],
        imagesAfter: {
          0: {
            alt: "Original picnic product scene",
            caption: "Original photo"
          }
        },
        galleriesAfter: {
          3: {
            items: [
              { label: "Nano Banana Pro", alt: "Picnic scene angle grid, Nano Banana Pro" },
              { label: "ChatGPT Imagen 2.0 High", alt: "Picnic scene angle grid, ChatGPT Imagen 2.0 High" }
            ]
          },
          4: {
            caption:
              "The main errors in both results were similar: the key white cartons rotated or moved incorrectly, and the models did not fully preserve the large number of objects in one grid. At the same time, they placed the overall distance, closeness of angles, and what should appear in the frame fairly logically.",
            items: [
              { label: "Set angles", alt: "Blender scene with selected picnic composition angles" },
              { label: "Nano Banana Pro", alt: "Picnic composition result through Nano Banana Pro" },
              { label: "ChatGPT Imagen 2.0 High", alt: "Picnic composition result through ChatGPT Imagen 2.0 High" }
            ]
          }
        },
        matricesAfter: {
          6: {
            columns: ["Angles", "Nano Banana Pro", "ChatGPT Imagen 2.0"],
            items: [
              { label: "Angles", alt: "Technical angle of picnic scene 1" },
              { label: "Nano Banana Pro", alt: "Nano Banana Pro, picnic scene 1" },
              { label: "ChatGPT Imagen 2.0", alt: "ChatGPT Imagen 2.0, picnic scene 1" },
              { label: "Angles", alt: "Technical angle of picnic scene 2" },
              { label: "Nano Banana Pro", alt: "Nano Banana Pro, picnic scene 2" },
              { label: "ChatGPT Imagen 2.0", alt: "ChatGPT Imagen 2.0, picnic scene 2" },
              { label: "Angles", alt: "Technical angle of picnic scene 3" },
              { label: "Nano Banana Pro", alt: "Nano Banana Pro, picnic scene 3" },
              { label: "ChatGPT Imagen 2.0", alt: "ChatGPT Imagen 2.0, picnic scene 3" },
              { label: "Angles", alt: "Technical angle of picnic scene 4" },
              { label: "Nano Banana Pro", alt: "Nano Banana Pro, picnic scene 4" },
              { label: "ChatGPT Imagen 2.0", alt: "ChatGPT Imagen 2.0, picnic scene 4" }
            ]
          }
        },
        embedsAfter: {
          3: {
            step: "Step 1",
            caption: "Connection scheme: the source image and prompt are passed into Gemini 3 and ChatGPT Imagen 2.0 to generate an angle grid."
          },
          4: {
            step: "Step 2",
            caption: "Connection scheme: the real photo, Blender storyboard, and prompt are passed into Gemini 3 to test a nine-angle grid."
          },
          5: {
            step: "Step 3",
            caption: "Connection scheme: the real photo and Blender angle, together with the prompt, are passed into Gemini 3 to assemble one controlled product frame."
          }
        }
      },
      {
        title: "Result Processing",
        paragraphs: [
          "The results above are already selected and processed, but before the final look the scene had two recurring weak points: the white cartons distorted, lost structure and material, and some frames became strongly yellow and lost sharpness.",
          "I solved the first problem through additional shape references: I separately set the carton angle through Higgsfield 3D Rotation ({{anchor:fashion-body-fix|as in the case with the model in the geometric room}}), inserted it into the scene, and only then generated the frame. This way, the generative model did not invent the package geometry from scratch, but relied on a clearer volumetric reference.",
          "The second problem was handled by a separate pass for material recovery and yellow-cast correction. At this step, it is important not to rebuild the composition again, but to carefully restore the paper texture of the packaging, remove the excessive warm haze, and keep the natural sunlight."
        ],
        embedsAfter: {
          1: {
            step: "Step 4",
            caption: "Connection scheme: the source frame, packaging rotation reference, and prompt are passed into Gemini 3 to refine the carton shape."
          }
        },
        comparisonsAfter: {
          2: {
            items: [{ label: "Material and color correction" }]
          }
        }
      },
      {
        title: "Other Methods",
        paragraphs: [
          "There are other workable ways to change the camera angle. They can be used as a quick draft to test direction, or even as a final result if the quality and scene stability are good enough for the task.",
          "The first option is [Freepik Change Camera](https://www.freepik.com/ai/change-camera). There is a short note about the tool in [Telegram](https://t.me/shot_neurodesign/186). The tool lets you create a space and manually set camera angles: move the camera forward and backward, rotate it, and control the shooting point. The advantage is that the process becomes more controllable. The drawbacks are waiting time, cost, and dependence on the number of source photos: if there are too few materials, the result becomes weaker quickly. For maximum immersion, many references are needed. {{info:information is current as of the function release, March 2026}}",
          "The second option is {{copy:qwenEditMultiangleName|Qwen Edit Multiangle}}. I used this function in Weavy AI: it lets you rotate the camera up, down, right, and left, and it is inexpensive. It is faster than a full pipeline and can produce a decent result, but the model reconstructs hidden areas on its own, so it can sometimes add false elements into the frame.",
          "The third option is {{copy:higgsfieldAnglesName|Higgsfield Angles}}. The tool quickly changes the angle according to settings and can be useful as an intermediate draft, but as a final solution it is weak: images lose clarity and detail, small elements become hard to read, and the model itself is still not strong enough. If you use this option, it is better for quickly finding the desired angle and then finishing the frame with another model.",
          "The fourth option is generation through video. In this case, the first frame is uploaded to a video generation model, such as Kling or Seedance, and the prompt describes the desired camera movement. The advantage of this approach is that the existing frame usually stays fairly stable: inside the visible area, unexpected things rarely appear. The drawbacks are unpredictability and weak control over invisible zones: anything outside the frame can be invented and changed by the model. Even if the resulting frame looks good, it almost always needs additional upscaling."
        ]
      },
      {
        title: "Takeaway",
        paragraphs: [
          "Changing the camera angle is not always the same as rotating the object. In more complex tasks, it is important to separate two operations: what the camera does and what the object does. If they are not separated, the generative model almost always chooses the simpler path and starts rotating the central object instead of rebuilding the space around it.",
          "For complex scenes, it is better to prepare a 3D diagram, a rough mockup, a Blender scene, or separate technical frames for each angle in advance. This gives the generative model a structure and makes it invent less about scale, placement, and object proportions."
        ]
      }
    ]
  }
};

function mergeByIndex(items = [], overrides = []) {
  return items.map((item, index) => ({
    ...item,
    ...(overrides[index] || {})
  }));
}

function mergeIndexedBlocks(blocks, overrides) {
  if (!blocks || !overrides) {
    return blocks;
  }

  return Object.fromEntries(
    Object.entries(blocks).map(([key, block]) => {
      const override = overrides[key] || {};
      return [
        key,
        {
          ...block,
          ...override,
          items: block.items ? mergeByIndex(block.items, override.items) : block.items
        }
      ];
    })
  );
}

const sectionNavTranslations = {
  "/": [
    "Why it matters",
    "Tools and Models",
    "Image Preparation",
    "Detailed Room Description",
    "Room Panorama",
    "Top-Down View",
    "Generating the Required Angle",
    "Image Quality Recovery",
    "Manual Result Refinement",
    "Other Methods",
    "What Comes Next"
  ],
  "/kontrolirovanie-prostranstva-i-planirovki-chast-2": [
    "What this part covers",
    "The Angle-Change Problem",
    "Tools and Generative Models",
    "Experiment 1",
    "Experiment 2",
    "Result Processing",
    "Other Methods",
    "Takeaway"
  ]
};

function translateArticle(article, language = "ru") {
  if (language === "ru") {
    return article;
  }

  const translation = articleTranslations[article.path];

  if (!translation) {
    return article;
  }

  return {
    ...article,
    ...translation,
    sections: article.sections.map((section, index) => {
      const sectionTranslation = translation.sections?.[index] || {};

      return {
        ...section,
        ...sectionTranslation,
        nav: sectionTranslation.nav || sectionNavTranslations[article.path]?.[index] || section.nav,
        paragraphs: sectionTranslation.paragraphs || section.paragraphs,
        imagesAfter: mergeIndexedBlocks(section.imagesAfter, sectionTranslation.imagesAfter),
        galleriesAfter: mergeIndexedBlocks(section.galleriesAfter, sectionTranslation.galleriesAfter),
        comparisonsAfter: mergeIndexedBlocks(section.comparisonsAfter, sectionTranslation.comparisonsAfter),
        embedsAfter: mergeIndexedBlocks(section.embedsAfter, sectionTranslation.embedsAfter),
        matricesAfter: mergeIndexedBlocks(section.matricesAfter, sectionTranslation.matricesAfter),
        mediaAfter: mergeIndexedBlocks(section.mediaAfter, sectionTranslation.mediaAfter)
      };
    })
  };
}

export function getArticles(language = "ru") {
  return articles.map((item) => translateArticle(item, language));
}

export function getRelatedArticles(language = "ru") {
  if (language === "ru") {
    return relatedArticles;
  }

  return relatedArticles.map((item) => {
    const translations = {
      "/": {
        tag: "Tutorial",
        date: "June 17, 2026",
        title: "Controlling Space and Layout. Part 1",
        alt: "A bright Barbie-themed bedroom after image enhancement"
      },
      "/kontrolirovanie-prostranstva-i-planirovki-chast-2": {
        tag: "Tutorial",
        date: "June 30, 2026",
        title: "Controlling Space and Layout. Part 2",
        alt: "Picnic product scene"
      },
      "Артефакты в ChatGPT Imagen 2.0": {
        tag: "Experiment",
        date: "",
        title: "Artifacts in ChatGPT Imagen 2.0",
        alt: "Example of artifacts in ChatGPT Imagen 2.0 generation"
      },
      "Удаление желтизны с фото": {
        tag: "Tutorial",
        date: "",
        title: "Removing Yellow Cast From a Photo",
        alt: "Photo after yellow color cast correction"
      }
    };
    const translation = translations[item.href] || translations[item.title] || {};

    return {
      ...item,
      ...translation
    };
  });
}

export function getInterfaceCopy(language = "ru") {
  return interfaceTranslations[language] || interfaceTranslations.ru;
}
