/* ==========================================================================
   data/data.js - GENERATED file:// bootstrap. DO NOT HAND-EDIT.

   Regenerate from the seed JSON with:
       node tools/generate-data-js.js

   Assigns window.__SENECA_DATA, which the data loader falls back to when
   same-origin fetch() of data/*.json is blocked (the file:// / double-click
   case). Keep the keys in sync with getData(name) in js/core/data-loader.js.
   ========================================================================== */

window.__SENECA_DATA = {
  course: {
  "id": "seneca-3d-integration-fall-2026",
  "title": "3D Integration in Visual Development",
  "institution": "Seneca College",
  "semester": "Fall 2026, Semester 3",
  "classDay": "Fridays, 3-hour classes",
  "termStart": "2026-09-11",
  "termEnd": "2026-12-11",
  "studyWeek": {
    "start": "2026-10-26",
    "end": "2026-10-30",
    "label": "Study Week",
    "noGate": true
  },
  "partialWeek": {
    "start": "2026-12-14",
    "end": "2026-12-16",
    "label": "Partial week"
  },
  "graceWeek": {
    "week": 13,
    "label": "Grace week (Dec 4)",
    "noGate": true
  },
  "oneIdea": "3D makes a good idea fast, not a weak idea good.",
  "gradingTilt": "~60% thinking (design thinking + iteration evidence) / ~40% render",
  "threeLines": "The design is the goal, 3D is the accelerator, and the process is the grade.",
  "houseRules": [
    "Blender 5.x all term; EEVEE daily, Cycles-class for hero passes only",
    "Grease Pencil not taught; 2D-over-3D is a paintover in your own app",
    "Tools are available, never a hard dependency; every tool has a manual fallback",
    "The grade is the thinking, not the render"
  ],
  "projects": [
    {
      "id": "a",
      "name": "Environment / world study",
      "weeks": [
        2,
        3,
        4
      ],
      "weeksLabel": "Wk 2, 3, 4",
      "delivery": {
        "week": 4,
        "date": "2026-10-02"
      },
      "project": "a",
      "order": 1
    },
    {
      "id": "b",
      "name": "Character or prop funpacks",
      "weeks": [
        5,
        6,
        7
      ],
      "weeksLabel": "Wk 5, 6, 7",
      "delivery": {
        "week": 9,
        "date": null,
        "crit": "midterm"
      },
      "project": "b",
      "order": 2
    },
    {
      "id": "c",
      "name": "Scene / previs blockout",
      "weeks": [
        10,
        11,
        12,
        13,
        14
      ],
      "weeksLabel": "Wk 10, 11, 12, 13, 14",
      "delivery": {
        "week": 14,
        "date": null,
        "crit": "final"
      },
      "project": "c",
      "order": 3
    }
  ],
  "weeks": [
    {
      "week": 1,
      "date": "2026-09-11",
      "project": null,
      "title": "Setup and orientation",
      "checkpoint": null,
      "lessonId": "wk-01"
    },
    {
      "week": 2,
      "date": "2026-09-18",
      "project": null,
      "title": "Blocking our environment",
      "checkpoint": "A1",
      "lessonId": "wk-02"
    },
    {
      "week": 3,
      "date": "2026-09-25",
      "project": null,
      "title": "Week 3: Lighting, materials, and skyboxes",
      "checkpoint": "A1",
      "lessonId": "wk-03"
    },
    {
      "week": 4,
      "date": "2026-10-02",
      "project": "a",
      "title": "Week 4: Project A, quick details and variations (Pre-paintover Prep)",
      "checkpoint": null,
      "lessonId": "wk-04"
    },
    {
      "week": 5,
      "date": "2026-10-09",
      "project": "b",
      "title": "Project B: the funpack and turnaround",
      "checkpoint": "B1",
      "lessonId": "wk-05"
    },
    {
      "week": 6,
      "date": "2026-10-16",
      "project": "b",
      "title": "Project B: expression, variants, silhouette check",
      "checkpoint": "B2",
      "lessonId": "wk-06"
    },
    {
      "week": 7,
      "date": "2026-10-23",
      "project": "b",
      "title": "Project B: materials and day/night heroes (build week, no gate)",
      "checkpoint": null,
      "lessonId": "wk-07"
    },
    {
      "week": 8,
      "date": "2026-10-30",
      "project": null,
      "title": "Study week: push, polish, or rest",
      "checkpoint": null,
      "lessonId": "wk-08"
    },
    {
      "week": 8,
      "date": "2026-10-30",
      "project": null,
      "title": "Study Week (buffer)",
      "checkpoint": null,
      "lessonId": "wk-08",
      "noGate": true
    },
    {
      "week": 9,
      "date": "2026-11-06",
      "project": "b",
      "title": "Project B: delivery and midterm crit",
      "checkpoint": "Delivery B",
      "lessonId": "wk-09"
    },
    {
      "week": 10,
      "date": "2026-11-13",
      "project": "c",
      "title": "Project C: the motivated camera",
      "checkpoint": "C1",
      "lessonId": "wk-10"
    },
    {
      "week": 11,
      "date": "2026-11-20",
      "project": "c",
      "title": "Project C: 180-degree continuity, the line",
      "checkpoint": null,
      "lessonId": "wk-11"
    },
    {
      "week": 12,
      "date": "2026-11-27",
      "project": "c",
      "title": "Project C: shot sequence, contact sheet, the light and mood turn",
      "checkpoint": "C2",
      "lessonId": "wk-12"
    },
    {
      "week": 13,
      "date": "2026-12-04",
      "project": null,
      "title": "Grace week",
      "checkpoint": null,
      "lessonId": "wk-13"
    },
    {
      "week": 14,
      "date": "2026-12-11",
      "project": "c",
      "title": "Project C: final delivery and crit",
      "checkpoint": "Delivery C",
      "lessonId": "wk-14"
    }
  ]
},
  lessons: [
  {
    "id": "wk-01",
    "week": 1,
    "date": "2026-09-11",
    "project": null,
    "title": "Setup and orientation",
    "oneConcept": "3D multiplies what you already know in 2D.",
    "checkpoint": null,
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-01-setup-orientation.md",
    "beats": {
      "retrievalHook": "Welcome back, everyone! Our goal today is to ensure that we are all on the same page. We will pick one object, model it, add materials, light it, place a camera, name everything properly, and render it. The assignment is a bonus assignment, so there is no pressure, just a fun chance to build early momentum.\n\nThis is the first real time our hands go on the tool, and the skills we practice today carry through every week. Keep this thought with you as we go: 3D does not replace the ideas we already have in 2D. It multiplies them.\n\nThe Blender Shortcuts reference page lives in the sidebar for any week we need it, and the Starter Scene we will use today has all the collections and naming conventions pre-set so we can focus on the work itself.",
      "oneNewConcept": "**3D multiplies what you already know in 2D.**\n\nIn this term, we aim to create effective ways to generate variations of designs rather than perfect final pieces. Studies are meant to be rough, and that is exactly what we expect from your upcoming projects. In Visual Development, your design decisions matter far more than your polish.\n\nIterations and variations of the same subject are the skill. Block it, try three directions, drop two, keep one, move on. A rough read beats a perfect one, because the eye lands on the look, not the UVs, and the art director never sees the UVs. The day-to-day work is finding the right look for the show, and that craft carries into any industry.\n\nThis term builds toward **modeling, lighting, and rendering.** Those three are the core of a visual developer's work, and they work the same way whether the job lives in games, film, advertising, or products. Get them solid and any position in any industry is reachable.\n\nThe semester carries three main projects. The exact specs may shift with how the term goes, but the shape stays fixed.\n\n- **3 blockouts of an environment**, the same place in three different directions\n- **3 variations of the same prop or character**, one subject, three reads\n- **a 4-panel sequence**, a small story told in four frames\n\n**Today's Demo**\n\nA starter scene opens with naming conventions that carry through the semester. The tool shows the naming structure that makes the Blender experience smoother. File organization is just as important as design skill. The starter scene has collections with names a person can read, a camera and a light rig that is already set up, and a render engine in a sensible place. The tool does the setup, so time goes to decisions, not to wiring.\n\n> **Aside (further reading):** *The Complete Guide to Blender Graphics, Volume 1* by Blain, the interface and viewport chapters. The recent edition sits closest to the current layout. It answers \"where is that\" moments without requiring a full read-through.",
      "guidedMaking": "Today we will take one object and run the full pipeline on it: model it, add materials, light a room, place a camera, name everything properly, and render it. The deliverable stays small on purpose, but the experience is what matters.\n\n1. **Pick the subject.** Choose one: a treasure chest, a table, a chair, or a bottle. That single choice carries the whole pass, so pick the clearest idea and stay with it.\n2. **Set up a clean file.** Open the Starter Scene and *look* before touching anything. Name the collections: `00_world`, `10_set`, `20_light`, `30_cam`. Find the camera, find the lights, find where the work goes. If the naming is unclear, that is a useful thing to notice, not a problem.\n    - *Manual fallback:* no Starter Scene? Start from a fresh file and build the same structure by hand. Four collections: `00_world`, `10_set`, `20_light`, `30_cam`. Add one camera and a key/fill/rim from the lamp menu. Same result, a few more clicks. Both ways work.\n3. **Model it.** Build from simple shapes. Give it believable proportion, the size and mass of the thing being after. Add intent, not detail.\n4. **Add materials.** Put a base color and a roughness on the surfaces so the object reads as something made of something. A treasure chest reads wood and metal, a bottle reads glass, a chair reads whatever the commit lands on. The texture is not a final. It is a surface the light can read.\n5. **Light a room.** One key light and a soft fill, placed so the subject reads with shape. The test is whether the light gives the object a face, not whether the look is perfect.\n6. **Place a camera.** Frame the subject the way a person is framed: one clean composition, the object reading clearly.\n7. **Render a still image.** Render a single still image of your scene and save it as a .png file. Use our standard naming convention for every render this term: `Lastname_Firstname_ANV6_wk1_v001.png`. The format stays the same week to week, only the week number changes, so get the habit right now.\n8. **Save a clean file.** Name it like a person: `a-environment_wk1-setup.blend`, not `scene.blend` or `final_final2.blend`. Those names retire this term. Check the collections for orphan junk, close the file, reopen it, and verify it still makes sense.\n\nThe full pipeline on a simple subject is complete. Every week this term builds on it, and this week makes the rest legible.",
      "check": "No project checkpoint this week. One question lands the check:\n\n**Can the file open, the work surface be found, and the file save cleanly, all on its own?**\n\nIf yes, the setup week lands. If it took nudging, that is exactly what the week is for. The file is the deliverable, and the file is clean.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we set up a clean file and ran the full pass, our object, the room lighting, the camera, clean naming, and a render.\n- **What we learned:** 3D makes a good idea fast, it does not make a weak idea good, so the grade is on the thinking.\n- **What we'd try next:** reopening the file from cold and finding the camera in under ten seconds, so the naming works for a stranger, not just for us.\n\n**Checklist, the things worth not forgetting:**\n\n- Big-picture changes beat perfect polish. The look is what gets judged, so the time spends there.\n- Rough is fine at the study stage. A rough read that is decidable beats a perfect one that is not.\n- This week's deliverable is the full pass: our object, a lit room, a camera, clean naming, and a render, all in a well-named file.\n- Before Week 2, give Project A's brief (the \"a\" project, at [#/projects/a](#/projects/a)) a quiet read, so the world is already in our head when the shaping starts.\n\nThat organization is not busywork. It is the thing that carries through the whole semester. The same clean file that opens today opens in Week 8 and still makes sense, and it is the reason the end-of-term work, the hero renders, the sequences, and the final delivery, is actually doable. A well-organized file makes the big work possible!",
      "revisit": "The first brick is laid.\n\nNext week is Week 2, the start of Project A. A theme is picked: Nordic Fjords and Forests from the 10th to 12th Century, East Asian Mountain Temples from the 8th to 10th Century, or Sahel Crossroads from the 13th to 15th Century. Each theme carries props, architecture, and clothing that belong to its era. The first real idea is **scale**, because a place that is the wrong size is not a place yet. Thumbnails arrive, even the messy ones. A location anchors to a human figure.\n\n**Project A's brief is already posted:** [read it now](#/projects/a). It is short, and it sets up the idea-shaping for Week 2. A quiet read before then is the best use of an afternoon.\n\n---\n\n*No question is a dumb one here. If a panel moved and it is not found, that is the tool, not us. Ask, and we sort it out. We showed up, and that is exactly how this term is meant to start. See you next week.*"
    },
    "furtherReading": [
      {
        "book": "The Complete Guide to Blender Graphics, Volume 1",
        "author": "Blain",
        "note": "the interface and viewport chapters"
      }
    ],
    "order": 1
  },
  {
    "id": "wk-02",
    "week": 2,
    "date": "2026-09-18",
    "project": "a",
    "title": "Blocking our environment",
    "oneConcept": "An environment is a comparison to a body, and a home for the eye.",
    "checkpoint": "A1",
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-02-a-blockout-scale-hierarchy.md",
    "beats": {
      "retrievalHook": "Happy Friday, everyone! This week we learn about the three things that make a good blockout: an environment's **Purpose**, its **Scale**, and its **Shape Hierarchy**. That is the first part of Project A, where we block one environment and show it three ways.\n\nFor a fast challenge, imagine what sort of environment we would like to build. Hold the picture for a minute. It comes back when the themes land in a few minutes. Keep that image with you as we go, because it is the seed everything else grows from!",
      "oneNewConcept": "**An environment is a comparison to a body, and a home for the eye.**\n\nLast week we learned to design for the eye: the look is what gets judged, and a rough read we can decide on beats a perfect one. This week builds on that directly, because an environment only works when it gives that same eye a size to read and a place to land on.\n\nA blockout with nothing in it is a box, but the moment a person lands in it, we are building an environment. The brain reads size by comparison. A door next to a figure tells the height, and a table tells the scale of everything on it. Without that anchor, a grand library reads as a hallway, and a hallway reads as a cathedral, and we will not know which one we built until a body sits in it. Scale is a comparison, placed on purpose.\n\nThe environment gets a real anchor. The mannequin file drops into the scene from the sidebar as the scale reference. It is a human figure, so it already has proportions the eye trusts. Then the environment builds around it in 3D, and the space reacts to the body it is holding. The figure is the truth, and the environment is what adjusts.\n\nThat anchor is one part of our blockout, and there are three in all. Keep these three in mind, because they are the whole of a good blockout:\n\n- **Purpose:** what the environment is for. It is the first thing to decide, because everything else leans on it.\n- **Scale:** the size that reads. An environment is a comparison to a body, and the figure is the **anchor** we hang it on.\n- **Shape Hierarchy:** the one spot the eye lands on. Everything points at it, and everything else steps back.\n\n**Scale** is the one we just did. **Purpose** is what the environment is for, and it is the first thing to decide, because everything else leans on it. Three reads are available. One environment is about the path, a route the eye travels through the space from one end to the other. Another is about the destination that is out of reach, a focal point we can see but cannot quite get to, like a text on a high shelf or a skylight above. A third is about the destination that is in reach, a focal point we can reach and interact with, a desk we can sit at, a book we can open. Pick whichever one the environment is actually for. That choice is the purpose.\n\n**Shape Hierarchy** is the last part, and it is what keeps the eye from going to die. A space that is the right size but has no point is even, and even is where the eye gets lost. Everything is equally available, so nothing is. Hierarchy ends that. One thing that matters is picked, made the strongest value or the clearest shape, and a path builds from the edge of the frame to it. Think of a stage. There is one actor in focus, and the lighting, the set, and everyone else all point at them. The audience's eye is not allowed to wander. It is walked, hand in hand, to the one spot that matters. The environment is that stage, and the focal point is the lead actor.\n\n**Shape Hierarchy** has a body, because a place is built in sizes. The massing is the large, medium, and small volumes that give the space a body. The big walls and the floor are the large. The desks, the columns, the low plinths are the medium. The one small thing at the focal point, the text, the lamp, the figure, is the small. A place with only large masses is a cave. A place with only small masses is a cluttered table. The mix is what makes it a place. Running through all three sizes is value contrast, the bright, mid, dark structure the eye reads at a glance. Put the strongest value on the focal point, and the space stops being a set of shapes and starts being a read.\n\nSo that is our blockout, with its three parts: **Purpose** for what the environment is for, **Scale** for the size that reads, and **Shape Hierarchy** for the one spot the eye lands on. That is the first real design decision of Project A, so it is the one everything else stands on!\n\n**Designing for light**\n\nWe are not lighting the scene this week, but we are setting it up so next week's light lands on purpose. Two things shape now: the shapes and edges that will catch or throw cast shadows once a light is in, and the colour. Colour is a guide for the eye, and the contrast in **value, hue, and saturation** is what carves a path from the edge of the frame to the focal point. The blockout is not just size and place. It is the stage we are building for the light.\n\n**Today's Demo**\n\nA simple human figure drops into a rough block of our environment and the space changes its mind. Too small, we feel trapped. Too big, we feel lost. Then three things arrive, one at a time, and the eye stops wandering. First, the massing: a large wall, a medium shelf, a small thing at the point. Second, a strong value on the focal spot, the brightest or darkest thing in the scene, on purpose. Third, a line that points at it, a wall, a path, a row of shelves. Three steps, one result: the space now reads and it leads. That is our blockout in miniature, built from small decisions.\n\n> **Aside (further reading):** *Framed Ink: Drawing and Composition for Visual Storytellers* by Marcos Mateu-Mestre, **Chapter 3, \"The Visual Message within a Still Composition.\"** A quick read is a composition we can take in at a glance, and that is exactly what the focal point is for. It is the single most useful chapter in that book for this project, and it is short.",
      "guidedMaking": "We block our environment, and we block it three ways. One goal: **one environment, shown as three variations, each reading as the right size, the right place, with the eye going somewhere on purpose.** The VisDev workflow starts, and this is the first real blockout of the term.\n\n1. **Pick the theme, then its three designs.** Choose one of these three theme starting points, and within it pick the three location types that become the three variations, one design per variation. Each theme is a self-contained block: its world, then the designs that live inside it. Pick the theme we can see the clearest idea of, then the three designs we can commit to.\n    - **Theme 1: Nordic Fjords and Forests, 10th to 12th Century** (timber and stone): cold light, iron-tanged axes, wool cloaks, low timber framing with sod roofs\n        - the Longhouse Hearth (warm firelight, carved rune stone on a rough shelf as the focal point)\n        - the Coastal Fishing Hut (dawn fog, dried cod hanging by the door as the focal point)\n        - the Mountain Hermit Cell (cold blue mist, a worn psalter on a birch shelf as the focal point)\n    - **Theme 2: East Asian Mountain Temples, 8th to 10th Century** (lacquered wood and paper): morning mist, bronze mirrors, incense burners, silk sutra scrolls, timber framing with tiled roofs\n        - the Kyoto Tea House Interior (tatami, morning light through shoji screens, a single ceramic vessel on a low table as the focal point)\n        - the Rice Terrace Rest House (misty mountains through a half-door, a weathered wooden bowl on a crate as the focal point)\n        - the Floating Market Stall (warm dawn light, a carved jade pendant resting on a cloth as the focal point)\n    - **Theme 3: Sahel Crossroads, 13th to 15th Century** (rammed earth and carved wood): golden hour warmth, cowrie shells, leather-bound manuscripts, mud-brick walls with wooden toron beams\n        - the Granary Compound Interior (carved wooden doors, a leather water skin on woven mats as the focal point)\n        - the Cliffside Library (honey-colored stone, a metal inkwell on a reading stone as the focal point)\n        - the Savanna Lookout (thatch and woven patterns, a curved bow on a wooden peg as the focal point)\n2. **Drop in the anchor, per variation.** Grab the mannequin file from the sidebar and put one into each of the three variations, in the spot where the beat happens. A human figure works as the scale reference, but a low-poly stand-in from the allow-list works just as well.\n    - *Manual fallback:* no stand-in model? Model a rough figure. A box for the torso, a sphere for the head, two cylinders for the legs. The anatomy does not matter. The height does. Aim for about 1.7 to 1.8 meters and let the space react.\n3. **Block the massing in three sizes, per variation.** Large (walls, floor, the big volumes), medium (desks, columns, plinths), and the one small thing at the focal point. Big shapes only. No detail, no bevels, no textures. If a decorative arch calls, hold it. This week is about size and place, and beauty comes later.\n4. **Test the scale, per variation.** Move the anchor closer, farther, and to the center. Watch the space change its mind. If it reads too big, bring the walls in. If it reads too small, do the opposite. The figure is the truth, and the environment is what adjusts.\n5. **Name the focal point, per variation.** The table where the rare text lands. The opening to the sky. The figure in the center. Say it before touching a light, because the point has to come from the beat, and that beat comes from the **Purpose** we picked.\n6. **Make it the strongest, and build the path.** Give each focal point the most value contrast in that variation, the brightest spot or the darkest, on purpose. Then add one or two elements that point at it, a line of shelves, a walkway, a row of repeating shapes. The line does not have to be literal. The eye follows lines the way a hand follows a rail.\n7. **Cut one competitor, per variation.** Find the one shape that is stealing the eye from the focal point, and remove it or dim it. Hierarchy is as much about what we leave out as what we keep. That cut is a decision, and it is the one we will defend at Checkpoint A1.\n8. **Save a clean, named file.** `a-environment_wk2-a1.blend`, with the three variations in clean collections and nothing orphaned. This is the file for A1, so keep it organized now and it stays organized later.\n\nThe point of the three variations is that each one is a different decision. Same environment, three different ways to read it. One might be tight and intimate, one open and grand, one quiet and one loud. That spread is the whole point, and it is what makes a blockout a study and a study a decision!\n\n**The on-hand tool:** the Starter Scene keeps the collections and naming clean while we block, and its light rig lets us lay down the value contrast at the focal point. If it is not there, build the collection structure by hand and hang a key light on the focal point. The requirement does not change.",
      "check": "Bring a blockout that already has a sense of scale and a path the eye can walk. It does not need to be pretty. It needs to be decided!\n\n**Pass question:** does this read as a place with a beat, or as a thing in an environment?\n\n**Self-check before we show (answer these, then bring them):**\n\n1. Where is the focal point in each of the three variations, and what pulls the eye there, the light, a line, a size jump? Name one per variation.\n2. What is the one thing we would cut to make the beat land harder, in the variation where it is weakest?\n3. Does the space feel right, too big, or too small when we check it against the anchor? What gives it away?\n\nIf all three answer, we are ready. If two answer, we work the third together in the next few minutes, and that work becomes the iteration evidence, not a penalty. That is the deal on every checkpoint this term.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we blocked our environment at human scale, gave it a purpose and a focal point and an eye path, and cut one competitor, in three different variations.\n- **What we learned:** a good blockout has three parts, a purpose for what the environment is for, a scale that reads, and a shape hierarchy that gives the eye one place to land.\n- **What we'd try next:** moving the figure to a second spot and cutting a second competitor, to see if the beat lands harder, because the first cut was probably the obvious one.\n\n**Checklist, the things worth not forgetting:**\n\n- Big-picture changes beat perfect polish. The look is what gets judged, so the time spends there.\n- Rough is fine at the study stage. A rough read we can decide on beats a perfect one we cannot.\n- This week's deliverable is the blockout: one environment, three variations, each with a scale anchor, a purpose, a focal point, and an eye path, all in a well-named file.\n\nThat is our blockout, and it is the first real design decision of Project A. An environment that reads as the right size, with the eye going somewhere on purpose, is the thing every light, every material, and every camera in the term will stand on. Get it solid and the rest of the project builds on a foundation instead of a guess. That is why we are doing this, and it is the week that makes everything after it legible!",
      "revisit": "**Purpose**, **Scale**, and **Shape Hierarchy** do not stop at blockout. They carry straight into every object we model, every sequence we stage, and every shot we frame. They are the spine of the whole term.\n\nNext week we take this blocked place and make it read. Light arrives to carve the shapes we just built, materials give them weight and temperature, and a palette ties it all together. The three variations we blocked push in genuinely different directions, and the test is simple: are these different decisions, or the same render five times? Bring the A1 file, because the studies are built on it. That is the next door, and it is a good one.\n\n---\n\n*If the space reads even and the eye wanders, that is the space asking to be directed. Give it an anchor, a focal point, three sizes, and a value, and it will start telling a story. And if a light will not do what we want, that is a position question, not a you thing. Ask, and we sort it out. See you next week.*"
    },
    "furtherReading": [
      {
        "book": "Framed Ink: Drawing and Composition for Visual Storytellers",
        "author": "Marcos Mateu-Mestre",
        "chapter": "Chapter 3, \"The Visual Message within a Still Composition.",
        "note": "** A quick read is a composition we can take in at a glance, and that is exactly what the focal point is for"
      }
    ],
    "order": 2
  },
  {
    "id": "wk-03",
    "week": 3,
    "date": "2026-09-25",
    "project": "a",
    "title": "Week 3: Lighting, materials, and skyboxes",
    "oneConcept": "Light, material, sky: the three layers that make a blockout read.",
    "checkpoint": "A1",
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-03-lighting-materials-skyboxes.md",
    "beats": {
      "retrievalHook": "Hello, everyone! This week we learn about **Lighting**, **Materials**, and the **Skybox**. Those three layers turn our blockout of shapes into a place we can believe in. Our environment from last week is already decided: it has a focal point, it has a scale anchor, it has a purpose. Now we give it a face.\n\nTake a minute to look at our A1 file. The focal point either stands out or it gets lost in the shapes. The light answers that question, and by the end of class we will have it set. Keep this thought with you as we go: light is not just about making things visible. It is about making things feel real.\n\nOur blockout is the stage, and this week we bring the actors out.",
      "oneNewConcept": "**Light, material, sky: the three layers that make a blockout read.**\n\nLast week we gave the environment a purpose, a scale, and a shape hierarchy. A blockout with nothing on it is still just a box. This week we stack three layers on top of it, and each layer does a different job. 3D multiplies what we already know in 2D, and these layers are the multiplier.\n\n**Lighting** does the work first. A scene without light is a gray space with no shape, and our eye has nothing to hold onto. The setup is simple: one **key light** that does the main work and points straight at our focal point, one **fill light** that softens the shadows so the shape does not disappear, and one **rim light** behind the subject that separates it from the background. That is the three-lamp rig, and it is enough to start. The key light is the sun. The fill is what bounces off the walls. The rim is what makes a solid thing look solid instead of a paper cutout.\n\n```\n  Key ----> [focal point] <---- Fill\n                ^\n                |\n              Rim (behind)\n```\n\nPlace the key light at an angle, not straight on, so it casts shadows that tell us the shape has depth. Move it around and watch where the shadows fall. The shadows are the detail, and they are free.\n\n**Materials** give every surface a reason to exist. In Blender the material lives in the **Principled BSDF** shader, and the two sliders that do most of the work are **base color** and **roughness**. A high roughness diffuses the light and reads soft and worn. A low roughness catches the light and reads clean and new. So a rammed-earth wall reads rough and warm, and a polished brass lamp reads smooth and bright. One surface serves our beat, the other does not. That is a material direction, and it is a decision.\n\nA material is the subject's answer to *what is this made of, and why should I trust it*. We do not need a full texture map yet. We need a color and a roughness that agree with each other. The wall and the floor and the focal point should all read as different things, or the eye has no map to follow.\n\n**Color** gives the palette its direction. Before we pick individual colors, we set the range we are working from, and that range is built from three layers of priority.\n\n**Central color** anchors the scene. It covers the majority of the frame and sets the overall mood. Think of it as the ground everything sits on: a warm terracotta wash for a Sahel crossroads, a cool slate gray for a Nordic fjord, a deep moss green for an East Asian temple courtyard. The Central color does not compete for attention. It establishes where we are and how we should feel about being there.\n\n**Secondary color** supports the Central color and adds depth. It creates contrast that separates the foreground from the background, so the shapes we blocked last week actually read as layers instead of a flat wall. If the Central color is the room, the Secondary color is the furniture sitting inside it. Two surfaces that share the same color bleed together, and the eye has no map to follow. Give the wall one color and the floor another, and the space suddenly has depth.\n\n**Accent color** draws the eye to the focal point. It is the small hit of a different hue that creates visual interest and guides the narrative toward what matters. A brass lantern, a red ribbon, a pool of warm light on a cool floor. The Accent does not need to be loud. It needs to be distinct from the Central and Secondary, so the eye lands exactly where we want it to.\n\nThe priority system is how we create distinction without chaos. Central color sets the mood, Secondary color separates the layers, and Accent color points the way. A scene with all three reads intentional. A scene with only one reads flat, and a scene with no priority at all reads like a grab bag. The colors carry the theme instead of fighting it!\n\nA Nordic longhouse with a cool gray Central, a warm wood Secondary, and an amber firelight Accent tells one story. Flip the Accent to a steel blue, and the same room reads like a different time of day. The palette is the first sentence of the mood, and it is a decision we make before we render.\n\nWithout looking back, which of our three color priorities carries the majority of the frame, and which one draws the eye to the focal point?\n\n**Skybox** sets the world outside our window. An outdoor scene without a sky is a floating box in gray space, and the brain rejects it. A skybox is an image wrapped around the scene that gives the horizon a color, the clouds a shape, and the light a direction that makes sense. In Blender the skybox lives in the world settings, and it can be a gradient, a photo, or a custom cloud layer we build ourselves. For our themes, the sky does the heavy lifting: a Nordic fjord under a clear sky reads different from the same fjord under a golden-hour haze, and the sky is what tells us which one it is. An East Asian temple under morning mist reads different from the same temple under noon sun. A Sahel crossroads under late afternoon warmth carries a completely different story than the same space at dawn. The sky is the first sentence of that story.\n\nThe blockout is the stage, the lights are the direction, the materials are the costumes, and the skybox is the backdrop. Change one and the whole read shifts. All four together and we have a place.\n\n**Today's Demo**\n\nWe will take one of our blocked variations and stack the three layers on it, one at a time. First we drop in the three-lamp rig and watch the focal point stand out. Then we add base color and roughness to two surfaces and watch the shapes separate. Finally we wrap a sky around the scene and watch the whole thing stop floating. Three moves, one result: the blockout is now a place. That is our setup in miniature, built from small decisions.\n\n> **Aside (further reading):** *Color and Light* by James Gurney, **Chapter 4, \"Light and Form.\"** The form principle is the idea that light reveals shape, and that is exactly why changing the light changes the read. The directional setups in that chapter are a good list of moods to pick from, warm or cool, hard or soft, so we have a vocabulary for the direction instead of guessing.",
      "guidedMaking": "Take our A1 blockout and make it read. One goal: **one variation lit, materialized, and given a sky that agrees with the theme.**\n\n1. **Set the three-lamp rig.** Place the key light aimed at our focal point, at an angle, so it casts a shadow with shape. Place the fill light on the opposite side, lower intensity. Place the rim light behind and above, just enough to separate. Render and check: does the focal point read? If it does not, move the key, not the camera.\n2. **Add materials to two surfaces minimum.** Pick the focal point and the surface behind it. Give each a base color and a roughness that agree with our theme. A warm wall and a rough floor reads different from a cool wall and a smooth floor, and the choice is ours. Commit to one.\n3. **Wrap a skybox around the scene.** In the world settings, add an image texture or a gradient that matches our theme's time of day. Nordic longhouse under a cold dawn, East Asian temple under morning mist, Sahel crossroads under golden hour: pick the sky that serves the beat. If we do not have a custom sky image yet, a gradient with a warm horizon and a cooler top is a fast stand-in that works.\n4. **Render and check the read.** Does the eye land where we want it? Does the material agree with the light? Does the sky agree with the scene? If yes, save it. If not, adjust one thing at a time and re-check.\n5. **Save a clean file.** `a-environment_wk3-a1.blend`, with the same collections from Week 2 and our light and material work neatly placed. This is the file for Checkpoint A1 on Wednesday, so keep it organized now and it stays organized later.\n\nThe point of doing this on one variation first is that we are testing the setup. Once it reads, we can carry the same three layers onto our other two variations, and the test becomes: are these different decisions, or the same render three times. That test is coming next week, and this is the practice run.\n\n**The on-hand tool:** we can light the variation with the Starter Scene rig and iterate in EEVEE for speed, with a Cycles pass for the final check. If the rig is not there, three lamps plus a world color do the same job. The requirement does not change.",
      "check": "Checkpoint A1 is due this Wednesday. Bring the blockout file with lighting, materials, and a skybox on at least one variation. It does not need to be pretty. It needs to be decided!\n\n**Pass question:** does this read as a place, or as shapes in a gray void?\n\n**Self-check before we show (answer these, then bring them):**\n\n1. Where is the key light aimed, and does the shadow it casts help the focal point stand out?\n2. What are the base color and roughness on the focal point surface, and does it read as something real?\n3. Does the skybox agree with our theme, or does it look like a placeholder?\n\nIf we can answer all three, we are ready for A1. If we can answer two, we work the third together, and that work becomes our iteration evidence, not a penalty. That is the deal on every checkpoint this term.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we stacked three layers: light, material, sky: on our blockout and watched the shapes become a place.\n- **What we learned:** a scene reads when the key light hits the focal point, the materials agree with the theme, and the skybox sets the world outside.\n- **What we would try next:** carrying the same setup onto a second variation and checking whether the decisions shift, because one working setup is a test and three working setups are a range.\n\n**The things worth not forgetting:**\n\n- Big-picture changes beat perfect polish. The look is what gets judged, so spend the time there.\n- Rough is fine at the study stage. A rough read we can decide on beats a perfect one we cannot.\n- This week's deliverable is one fully set-up variation: lit, materialized, given a sky, saved in a clean file for Checkpoint A1.\n- Checkpoint A1 is Wednesday this week. The blockout we bring is the one we light up, so the shapes and the focal point need to be decided before the light arrives.\n\nThat is our setup, and it is the layer that sits on top of everything we blocked last week. A blockout that reads under light, with materials that agree and a sky that sets the world, is the thing every hero render will stand on. Get it solid and the rest of the project builds on a foundation instead of a guess. That is why we are doing this, and it is the week that makes the final renders possible.",
      "revisit": "**Lighting**, **Materials**, and **Skybox** do not stop at one variation. They carry straight into every study we make, every render we ship, and every beat we stage. They are the skin on the bones we built last week.\n\nNext week we push the same blockout in genuinely different directions. We change the whole system, light and material and sky together, and we test whether our variations are different decisions or the same render three times. The three variations we blocked will push in genuinely different moods, and the test is simple: can we defend the one we picked? Bring the A1 file, because the studies are built on it. That is the next door, and it is a good one.\n\n---\n\n*If our focal point still gets lost, that is the key light asking to move, not our blockout failing. Shift it an angle, check the shadow, and try again. And if a material reads wrong, that is a roughness question, not a you thing. Ask, and we will sort it out. See you Wednesday.*"
    },
    "furtherReading": [
      {
        "book": "Color and Light",
        "author": "James Gurney",
        "chapter": "Chapter 4, \"Light and Form.",
        "note": "** The form principle is the idea that light reveals shape, and that is exactly why changing the light changes the read"
      }
    ],
    "order": 3
  },
  {
    "id": "wk-04",
    "week": 4,
    "date": "2026-10-02",
    "project": "a",
    "title": "Week 4: Project A, quick details and variations (Pre-paintover Prep)",
    "oneConcept": "3D multiplies what you already know in 2D.",
    "checkpoint": null,
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-04-details-variations.md",
    "beats": {
      "retrievalHook": "Hi, everyone! This week we learn about **Details**, **Variations**, and **Lighting Impressions**. Quick details give the eye something to land on. Variations prove the scene holds together under different conditions. Lighting impressions are where the shape of an object finally earns its silhouette.\n\nWe take the Project A winner and push it one step further. Look at the winner render and find one flat surface or one shape that reads like a card instead of a solid. That is exactly what today is for. Keep this thought with you as we go: a detail that does work is never clutter, and a variation that fails is never a mistake. Both of them are teachers!",
      "oneNewConcept": "**3D multiplies what you already know in 2D.**\n\nA blockout with light and materials is a strong read, and that is all it needs to be at the study stage. Between a read and a *decided* picture, there are three moves we can make. Each one is cheap. None of them require a new model. They just require a different angle of attack.\n\n**Details** are the small additions that make an object read as an object instead of a placeholder. A shelf with three books instead of one plank. A window with a frame instead of a hole in the wall. A corner where two walls actually meet with a little depth to it. We are not building set dressing. We are giving the eye an edge to lock onto. That edge is often as small as a bevel, a bump, or a surface break. A properly placed detail does more work than a whole new prop, because it lives where the eye is already looking.\n\n**Variations** prove the scene holds together. The same space, hit with a different light angle, from a different camera position, or with a shifted palette. If the focal point disappears when the key light moves thirty degrees, the hierarchy was hiding in a lucky setup. If it survives, the hierarchy is real. A scene that only works from one angle is not a scene yet. It is a snapshot. Variations are how we find out which one we have!\n\n**Lighting Impressions** are the whole point of this week. The shape of an object is revealed by where its shadow falls and where its highlight sits, and those two things are controlled by the angle of our light, not its brightness. We shape our objects in angles that maximize shadow and light exposure. The key light grazes a surface. The fill lifts a corner the key left dark. The rim separates a form from the background. Those three moves turn a flat read into a shape we can actually see. And that is where it gets interesting!\n\n> **Aside (further reading):** *How to Render: The Fundamentals of Light and Shadow and Reflectivity* by Scott Robertson and Thomas Bertling, **Chapter 2, \"Light Types and Casting Shadows.\"** The hard/soft shadow vocabulary is exactly the tool for shaping an object's read, and the form-lighting setups in that chapter are the starting positions we use today. Stable ideas, any edition.",
      "guidedMaking": "Take the Project A winner and add quick details, then test it with a variation. One goal: **the scene reads as a place, not a render.**\n\n1. **Add three details.** Pick three spots in the winner where the eye has nothing to lock onto. A flat wall needs a ledge. A flat floor needs a seam. A flat corner needs depth. Model them small, model them fast, and render to check. Build an edge instead of a new prop. Think about what props belong to the chosen timeframe: a whalebone comb on a 10th-century Nordic shelf, an incense burner on a 9th-century East Asian altar, a leather-bound manuscript on a 14th-century Sahel reading stone.\n2. **Angle the light for shape.** Move the key light until it grazes a surface. Check the shadow. Is the object earning its shape, or is it just lit? Adjust. Move the fill to lift one corner the key left dark. Pull the rim until a form separates from the background. Render again.\n3. **Test a variation.** Shift the key light thirty degrees, or move the camera to a new position, or push the palette warmer or cooler. Render it. If the focal point survives, the hierarchy is real. If it vanishes, the light was doing the hierarchy's job, and now we know where to reinforce it.\n4. **Save both renders.** Name the base `a-environment_wk4-details.blend` and the variation `a-environment_wk4-variation.blend`. That is the artifact. Keep it clean, keep the collections tidy, and keep the file opening fast.\n\n**The on-hand tool:** the Starter Scene rig plus a sky texture is enough. EEVEE for speed while we adjust, a Cycles pass for the render we keep. The tool is the means. The shape is the decision.",
      "check": "Working-artifact check. Bring the details render and the variation render. They do not need to be beautiful. They need to be different, and we need to be able to say why the variation proves the scene holds together.\n\n**Pass question:** did the focal point survive the variation?\n\n**Self-check before we move on:**\n\n1. What three details did we add, and where did they land in the frame?\n2. What changed when we angled the light for shape, and which move did the most work?\n3. In the variation, did the focal point stay strong, or did it need help?\n\nA weak variation is not a failure. It is the scene telling us where the hierarchy still needs support. That is exactly what today was for.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we added quick details to the Project A winner, shaped objects with light angles, and tested a variation to check the hierarchy.\n- **What we learned:** a detail does not need to be big to do work, a variation proves the scene holds together, and a properly lit render gives the color context that carries everything.\n- **What we'd try next:** adding a second variation with a different camera position, to see if the hierarchy survives from a new angle.\n\n**The things worth carrying forward:**\n\n- Small details beat big props when they land where the eye is already looking.\n- A shape that only works from one angle is not a shape yet. Test it.\n- The key light grazes. The fill lifts. The rim separates. Three moves, three jobs, no overlap.\n- A properly lit 3D render gives the color context for everything that follows, even the paintover pass we will do next term.\n- Before next week, give Project A's final delivery brief a quiet read, so the expectation is already in our head.\n\nThose three moves, details and variations and lighting impressions, are the ones that carry a study past the \"nice render\" stage. The scene reads because we made it read, not because the light was lucky. And that is the difference between a picture and a decision!",
      "revisit": "**The blockout from Week 2 and the lighting from Week 3 are back, wearing new hats.** We shaped the focal point with a 1-2-3 read, and a direction is a whole-system decision, not a parameter. This week we put both of them to the test by angling the light for shape and checking the variation. The hierarchy had to survive a moved key, and the details had to earn their spot in the frame. Same muscle, fourth coat, and now it is doing real work.\n\nNext week is the Project A final delivery. We lock the winner, do the final render, and hand in the file. No paintover this term, but the lighting impressions we built today are the foundation for it, and that work carries forward into every project after this one. The scene is ours. The shape is ours. The decision is ours.\n\n**Project A's delivery brief is already posted:** [read it now](#/projects/a). It is short, and it tells us what the final artifact looks like. A quiet read before then is the best use of an afternoon.\n\n---\n\n*If the details feel like too much, they are not. A detail that does work is never clutter. If the variation kills the focal point, that is not a failure. It is the scene telling us where the hierarchy still needs support. Ask, and we find the shape together.*"
    },
    "furtherReading": [
      {
        "book": "How to Render: The Fundamentals of Light and Shadow and Reflectivity",
        "author": "Scott Robertson and Thomas Bertling",
        "chapter": "Chapter 2, \"Light Types and Casting Shadows.",
        "note": "** The hard/soft shadow vocabulary is exactly the tool for shaping an object's read, and the form-lighting setups in that chapter are the starting positions we use today"
      }
    ],
    "order": 4
  },
  {
    "id": "wk-05",
    "week": 5,
    "date": "2026-10-09",
    "project": "b",
    "title": "Project B: the funpack and turnaround",
    "oneConcept": "A subject is a sculpture, not a picture.",
    "checkpoint": "B1",
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-05-b-funpack-workflow.md",
    "beats": {
      "retrievalHook": "Good morning, everyone! This week we learn about the **funpack workflow** and the **three-view turnaround**. In Project A the space held the person. In Project B the subject has to hold the space in our head, from every angle. That flip changes everything, and the turnaround is how we find out whether our subject is a real thing or just a nice front.\n\nFor a fast challenge, sketch our subject as a lump. No detail, no lines, just the overall shape. A bean, a box, a teardrop. Rotate that lump in our head to the side, then to the back. If the lump reads from three sides, the subject is real. If it only reads from the front, it is a costume, and that is exactly what this week is for.\n\nThe Blender Shortcuts reference page lives in the sidebar for any week we need it.",
      "oneNewConcept": "**A subject is a sculpture, not a picture.**\n\nHere is the trap that eats every character and prop in this course. The front is good, because we designed the front. The side is a guess, because we never looked at it. The back is a surprise, because we never built it. And the moment the subject has to turn or walk or be seen from behind, the guess and the surprise show up. The three-view turnaround is the proof that the subject is a thing and not a picture of a thing. 3D multiplies what we already know in 2D, and the multiplier this week is form.\n\nA picture is one face. A sculpture is every face, and the test is whether it holds when we walk around it. Our subject has to live in a scene that will eventually rotate around it, so if it only works from one angle, it is a cardboard cutout with a nice front. The overall silhouette is the outer shape of the whole subject as one shape, and whether that shape is legible from every angle. A good silhouette is a subject we can recognize in a crowd. A bad silhouette is a subject we can only recognize when we already know it is there.\n\n**Why it matters for this project:** a subject that leads without trapping only leads if it can be looked at from wherever the camera ends up. If the back is a mess, the camera cannot go behind it. If the side is a guess, the subject cannot profile. A profile is half of how a subject reads.\n\n**The three checkpoints of Project B:**\n\n- **B1 (this week):** does the subject hold together from every angle, with a readable silhouette and clear proportion?\n- **B2 (Week 6):** does the sheet communicate the design from every angle, with expression variants and a silhouette check?\n- **Delivery B (Week 9):** does the full funpack, the two hero renders, and the talk-through prove the subject leads without trapping?\n\n**Today's Demo**\n\nA rough lump is blocked into a subject, and we watch the volumes arrive one at a time. Head, mass, base, the big shapes only. No detail, no bevels, no textures. Then the subject turns, front, three-quarter, side, back, and the silhouette is checked at every turn. The one move that decides whether it holds is the overall silhouette. If the shape is legible from all three views, the subject is built. If it only reads from the front, the volume is the problem, not the surface.\n\n> **Aside (further reading):** *Figure Drawing: Design and Invention* by Michael Hampton, **Chapter 1, \"Gesture Drawing.\"** The wrapping line is the fastest way to check that the side and back are still connected to the front. The center of gravity is the idea that keeps the subject standing, and a balanced funpack reads as real. Worth a pass before B1.",
      "guidedMaking": "Pick a subject, a character or a prop, and block it into a three-view turnaround with one expression or variant started. One goal: **a subject that holds together from every angle, proven by a three-view sheet.**\n\n1. **Write the one-sentence *what it is about*.** A djinn who is more curious than scary. A lamp that is more tired than magical. That sentence is the design, and the form has to serve it. If we cannot write it, write three options and pick one.\n2. **Block the volumes.** Head, mass, base, the big shapes only. No detail, no bevels, no textures. Use simple primitives or a low-poly stub. The point is that the volumes are right, not that the surface is pretty.\n3. **Build the three views.** Front, side, and back, all from the same block. The test is that the side and back are built, not guessed. Turn it, check the silhouette at each turn, and fix the volume, not the surface.\n4. **Check the overall silhouette.** At each of the three views, squint and read the outer shape as one shape. Is it legible? Does it say *this subject* or does it say *a lump with details on it*? If it is the latter, the silhouette is the problem, and the fix is a volume.\n5. **Start one expression or variant.** Just one, a tilt of the head, a change of the mouth, whatever the *about* sentence points to. The point is that the subject can do something, not just be something. That one started variant is what B1 asks for.\n6. **Save a clean file.** Name it `b-subject_wk5-b1.blend`, with the three-view sheet plus that one started variant. This is the artifact for B1, and it is a working artifact, a block, not a finish.\n\nThe on-hand tool is the Starter Scene with its clean collections, or simple primitives if we prefer. The tool is the means. The volume decision is the design, and that is what B1 is checking.",
      "check": "Working-artifact gate. Bring a subject blocked into a three-view turnaround, plus one expression or variant started, plus the one-sentence *what it is about*. It does not need to be pretty. It needs to be built, all the way around.\n\n**Pass question:** does this subject hold together from every angle, or is it a nice front with a guessed side and a surprised back?\n\n**Self-check before we show (answer these, then bring them):**\n\n1. What is the one-sentence *what it is about*, and does the volume actually serve it?\n2. At the side view, is the side built or guessed? Name the one volume that is the guess.\n3. Does the overall silhouette read as *this subject* from all three views, or does it need the details to be recognized?\n\nIf all three answer, we are ready. If two answer, we work the third together in the next few minutes, and that work becomes our iteration evidence, not a penalty. That is the deal on every checkpoint this term.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we blocked our subject into a three-view turnaround, checked the silhouette at each view, and started one variant.\n- **What we learned:** a subject is a sculpture, not a picture, and the side and back have to be built, not guessed.\n- **What we'd try next:** adding a fourth view, the three-quarter, to find the one angle that is weakest, because the three-quarter is where most subjects quietly fall apart.\n\n**The things worth not forgetting:**\n\n- A subject that is a bean is a different subject from one that is a teardrop. Trying both is range, even at the block stage.\n- The first shape is a decision. The second shape is a guess. We do not need to have been right. We need to have explored the shape.\n- Checkpoint B1 is Wednesday this week. The blockout we bring is the one we build on, so the volumes need to be decided before the face arrives.\n\nThat turnaround is the first real design decision of Project B. A subject that holds together from every angle is the thing every face, every material, and every hero render will stand on. Get it solid and the rest of the project builds on a foundation instead of a guess. That is the week that makes everything after it legible!",
      "revisit": "The silhouette and the volume are back, wearing a new hat. Remember how the focal point was the truth in Project A and the room was what we adjusted? This week the subject is the truth, and the scene it will live in is what we adjust. Same move, new thing to hold still. The 1-2-3 read from the hero render is back too, because a subject that reads as one clear shape, bright, mid, dark, is a subject with a 1-2-3 read. Same muscle, and now it is doing real work on a body instead of a room.\n\nNext week is Week 6, and it is Checkpoint B2. We give this built subject a face that means something, and a silhouette check that proves it reads as one shape in a crowd. That is expression and variants, and the test is whether the subject leads without trapping. Bring the B1 file, because the expression is built on the volume, not beside it. One file, two weeks, two layers of the subject.\n\n---\n\n*If the side is a guess and it is not clear yet, that is the best possible time to find out, because it is a block, not a finish, and a fix now is five minutes, not two weeks. And if the silhouette needs the details to be recognized, that is a volume problem, not a surface problem. Ask, and we will find the fix together.*"
    },
    "furtherReading": [
      {
        "book": "Figure Drawing: Design and Invention",
        "author": "Michael Hampton",
        "chapter": "Chapter 1, \"Gesture Drawing.",
        "note": "** The wrapping line is the fastest way to check that the side and back are still connected to the front"
      }
    ],
    "order": 5
  },
  {
    "id": "wk-06",
    "week": 6,
    "date": "2026-10-16",
    "project": "b",
    "title": "Project B: expression, variants, silhouette check",
    "oneConcept": "The face is the voice. The silhouette is the body.",
    "checkpoint": "B2",
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-06-b-expression-variant-silhouette.md",
    "beats": {
      "retrievalHook": "Happy Friday, everyone! This week we learn about **Expression**, **Variants**, and the **Silhouette Check**. In Project A the space held the person. In Project B the subject has to mean something from every angle, and the silhouette check is the guardrail that keeps the face from replacing the shape. A subject with a face that serves the sentence leads. A subject with a face that replaces the subject is trapped.\n\nFor a fast challenge, put the subject in a dark. Turn the lights off in our head, and read the silhouette at arm's length. Does it say *this subject*, or does it say *a lump*? Now give it one expression, a face, and ask again. If the expression changes whether it reads, the face is doing the silhouette's job, and that is exactly what this week fixes.",
      "oneNewConcept": "**The face is the voice. The silhouette is the body.**\n\nA subject with no expression is a shape, and a shape is fine. But a shape is not leading. A subject with one expression is a character, and a character can lead. A subject with one expression is also a trap, because if the only face it has is the one that is already there, the subject cannot change. That is the whole reason for variants. We make two or three faces, and we pick the one that serves the sentence. In doing so we prove the subject can do something, not just be something. 3D multiplies what we already know in 2D, and the multiplier this week is decision quality.\n\nThe analogy is a word and its synonyms. A word is one thing. Its synonyms are the same thing wearing different hats, and the reason we have synonyms is so we can pick the one that fits the sentence. The variants are the synonyms of the subject's face, and the test is whether we can pick one and say *why this one and not the other two*. That is the same move we made with the directional studies in Project A, and it is the same move we will make with the shots in Project C.\n\n**Why it matters for this project:** a subject that leads without trapping leads by expressing, and it does not trap by varying. If it only has one face, it is trapped in that face. If it has variants, it can lead in the direction the beat needs. The silhouette check is the guardrail that keeps the expression from replacing the subject, because a face that has to do the silhouette's job is a face that is hiding a weak shape.\n\n**The three checkpoints of Project B:**\n\n- **B1 (completed):** does the subject hold together from every angle, with a readable silhouette and clear proportion?\n- **B2 (this week):** does the sheet communicate the design from every angle, with expression variants and a silhouette check?\n- **Delivery B (Week 9):** does the full funpack, the two hero renders, and the talk-through prove the subject leads without trapping?\n\n**Today's Demo**\n\nThe built subject receives two or three expressions, and we check the silhouette between each one. A face is made, then the subject turns to the side and squints, and the question is whether the outer shape still reads as the subject, or whether the face has changed what the subject is. If the face changed the subject, the face is too loud, and it is pulled back. If the silhouette still reads, the face is the voice, and the subject is still the body.\n\n> **Aside (further reading):** *Framed Ink: Drawing and Composition for Visual Storytellers* by Marcos Mateu-Mestre, **Chapter 5, \"Character Design.\"** The dynamics of expression is the idea that a face moves, that it has a before and an after. The overall silhouette is the guardrail, and it is the same idea that decided B1. A re-read now connects the two checkpoints.",
      "guidedMaking": "Take the B1 subject and give it a voice, then check it. One goal: **a subject with a chosen expression, two or three variants, and a silhouette that holds under all of them.**\n\n1. **Re-read the one-sentence *what it is about*.** The face has to serve the sentence. If the sentence says *curious, not scary*, the face has to be the curious one, and the variants have to be kinds of curious, not curious and bored and angry.\n2. **Make the chosen expression.** The face that serves the beat. Build it on the volume, not on top of it. If the face feels pasted on, the volume underneath is the problem, and that is a B1 finding resurfacing.\n3. **Make two or three variants.** Each one a real alternative we could have shipped, not a nudge of the first one. The test is whether we can pick one and say *why this one and not the other two*.\n4. **Run the silhouette check on each one.** Turn each variant to the side, squint, and read the outer shape. Does the subject still read as the subject? If the face changed the subject, the face is too loud, and we pull it back until the silhouette carries again.\n5. **Save a clean file.** Name it `b-subject_wk6-b2.blend`, with the chosen expression, the two or three variants, each labeled, and the one-sentence *why this one* for the pick. This is the artifact for B2.\n\nThe on-hand tool is the Starter Scene with its clean collections, or a low-poly stub if we prefer. The tool is the means. The decision about meaning is the design, and that is what B2 is checking.",
      "check": "Working-artifact gate. Bring a subject with a chosen expression, two or three variants, and a silhouette that holds under all of them. It does not need to be pretty. It needs to be decided, and it needs to be legible.\n\n**Pass question:** does this subject lead without trapping, with a face that serves the sentence and a silhouette that carries the weight?\n\n**Self-check before we show (answer these, then bring them):**\n\n1. What is the one-sentence *what it is about*, and does the chosen face actually serve it?\n2. Are the two or three variants kinds of the same thing, or are they different characters? Name the one that is the nudge, and the one that is the real alternative.\n3. Does the silhouette hold under every variant? Turn each one to the side and squint.\n\nIf all three answer, we are ready. If two answer, we work the third together in the next few minutes. That is the deal on every checkpoint this term.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we gave our subject a chosen expression, made two or three variants, and ran the silhouette check on each.\n- **What we learned:** the face is the voice and the silhouette is the body, and the body has to carry the weight.\n- **What we'd try next:** making a fourth variant that is the worst of the four, to make sure the pick is chosen, not left over.\n\n**The things worth not forgetting:**\n\n- A strong *why* on a rough face outperforms a weak *why* on a polished one, every time.\n- The thinking is the 60, and the face is the 40 that makes the 60 land.\n- Checkpoint B2 is Wednesday this week. The face we bring is the one we build on, so the decision needs to be made before the material arrives.\n\nThat decision quality is the purest moment of Project B. We picked a face, we chose the variants, and we checked the silhouette. Every one of those is a choice with a reason. At the checkpoint, do not tell what was made. Tell *why* that face and not the other two. A strong *why* is the genre in the design, and the genre is the half that carries us.",
      "revisit": "The silhouette and the 1-2-3 read are back, doing real Project B work. Remember how the overall silhouette was the test of whether the subject reads as one shape, and how a 1-2-3 read was a structure our eye could take in at a glance? This week the variants used both of them. Each one had to keep the silhouette and keep the read, and the silhouette check was the guardrail that kept the face from replacing the subject. Two moves, two weeks, and now they are both in one subject.\n\nNext week is Week 7, the last build week before Study. We give this decided subject **material direction and two hero renders, a day and a night**, so the subject does not just hold together, it lives in light. That is the making, and it is not a gate. Use Study Week after it to push the material one level further, or rest, or both. Bring the B2 file, because the materials are built on the silhouette, and the heroes are built on the materials. One subject, three weeks, three layers.\n\n---\n\n*If the silhouette needs the face to be recognized, that is a volume problem, not a face problem, and it is the best possible time to find it. And if the variants are all the same face in different hats, that is the nudge, and it is a five-minute fix. Ask, and we will find the decision together.*"
    },
    "furtherReading": [
      {
        "book": "Framed Ink: Drawing and Composition for Visual Storytellers",
        "author": "Marcos Mateu-Mestre",
        "chapter": "Chapter 5, \"Character Design.",
        "note": "** The dynamics of expression is the idea that a face moves, that it has a before and an after"
      }
    ],
    "order": 6
  },
  {
    "id": "wk-07",
    "week": 7,
    "date": "2026-10-23",
    "project": "b",
    "title": "Project B: materials and day/night heroes (build week, no gate)",
    "oneConcept": "A subject is portable if it survives a light it did not choose.",
    "checkpoint": null,
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-07-b-materials-heroes.md",
    "beats": {
      "retrievalHook": "Good afternoon, everyone! This week we learn about **Material Direction** and the **Day/Night Hero pair**. The subject has a face. Now it needs an answer to a question the light asks: what are you made of, and why should I believe it? The material direction is that answer. The day/night pair is the proof that the subject is portable, that it survives a light it did not choose.\n\nFor a fast challenge, give the subject a light from the front, and then a light from behind. In our head, no build, just the read. At day, is it bright, mid, dark? At night, does the focal part still read, or does it vanish into the background? If the focal part survives both, the subject is real. If it only reads in one, the material is doing the silhouette's job, and we are about to find that out.",
      "oneNewConcept": "**A subject is portable if it survives a light it did not choose.**\n\nA blockout and a face make the subject hold together and mean something, but they are still a shape with a voice. To make it a thing, it has to answer the light. In Blender the material lives in the **Principled BSDF**, and the two sliders that do most of the work are **roughness** and **base color**. A rough surface diffuses the light and reads soft and used. A smooth one catches it and reads clean and new. So the same djinn in tarnished brass reads as lived-in, and the same djinn in clean plastic reads as just made. One serves our sentence and one does not. That is a direction, not a default. 3D multiplies what we already know in 2D, and the multiplier this week is portability.\n\nThe day/night pair is the test. A subject at day is in its home light, warm and wide, the one we designed. A subject at night is in a stranger's light, cool and tight, the one we did not design. If the subject reads the same in both, it is a thing. If it reads in day and vanishes in night, it is a costume that only worked because the light was on its side. One render is a picture. Two renders in genuinely different light are a proof.\n\n**Why it matters for this project:** a subject that leads without trapping has to lead in any scene, day or night, warm or cool. If it only leads in the light we designed, it is trapped in that light, and the next project, where the camera puts it in a shot we did not design, is where that trap shows. The day/night pair is not a render deliverable. It is the proof that the subject is portable, and a portable subject is the only kind that can carry Project C.\n\n**Today's Demo**\n\nA built subject receives two material directions, and we test each one against both lights. The day hero is set, warm and wide, and the read is checked. Then the night hero is set, cool and tight, and the read is checked again. The one move that decides whether the subject is portable is the focal part under the rim. The rim is that bright edge where the subject separates from the background. If the focal part still reads at night with just a rim, the subject is a thing. If the focal part needs the day light to be seen, the material is doing the silhouette's job.\n\n> **Aside (further reading):** *How to Render: The Fundamentals of Light and Shadow and Reflectivity* by Scott Robertson and Thomas Bertling, **Chapter 2, \"Light Types and Casting Shadows.\"** The hard/soft, rim, and occlusion vocabulary is the exact vocabulary the day/night pair uses. A subject with a strong rim at night is a subject that separates. Worth a pass before rendering the pair.",
      "guidedMaking": "Take the B2 subject and give it material and light, then test it. One goal: **one or two material directions, and two hero renders, a day and a night, that prove the subject is portable.**\n\n1. **Re-read the one-sentence *what it is about*.** The material has to serve the sentence. If the sentence says *lived-in, not new*, the material has to be the rough, the used, the tarnished one. If the material direction serves a different *about* than the face, it will split the subject in two.\n2. **Build the material direction.** In the **Principled BSDF**, set the base color and the roughness to serve the sentence. One or two directions, not five. A material direction is a decision.\n3. **Render the day hero.** Warm, wide, the light we designed. Set the key, the fill, and the rim, and render it. Check the 1-2-3 read, bright, mid, dark. Check the focal point.\n4. **Render the night hero.** Cool, tight, the light we did not design. Keep the subject the same, change the light and the palette. Check the focal part under the rim. If the focal part still reads with just a rim, the subject is a thing.\n5. **Save a clean file.** Name it `b-subject_wk7-heroes.blend`, with the day and night side by side, labeled, plus the one-sentence *why this material and not the other*. This is the build artifact. There is no gate this week, so the standard is whether we made the test, not whether it is finished.\n\nThe on-hand tool is a Cycles render for the heroes (or a clean EEVEE pass), the **Principled BSDF** for the material, and three lamps plus a world color for the lights. The tool is the means. The portability decision is the design.",
      "check": "No formal gate this week, but bring the two heroes and be ready to answer these. The gate is in nine days, and these are the questions it will ask.\n\n**Self-check (answer these, then bring them):**\n\n1. Does the subject read as the same subject in day and night? If it reads in day and vanishes in night, it is a costume.\n2. Is the material direction serving the one-sentence *what it is about*?\n3. If asked *why this material and not the other*, could we answer in one sentence?\n\nIf all three answer, we are in a strong place for Delivery B. If two answer, use Study Week to work the third. That is the deal, and it is the same deal on every build week this term.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we gave our subject a material direction and two hero renders, a day and a night, and tested whether it is portable.\n- **What we learned:** a subject is a thing if it survives a light it did not choose, and the rim is the cheapest proof.\n- **What we'd try next:** making a third hero in a hostile light, a low sun or a neon sign, to find the one light where the subject quietly falls apart.\n\n**The things worth not forgetting:**\n\n- A final we can defend, with a day and a night that prove the subject is portable, is strong evidence even if it is a little rough.\n- The evidence is the 30 that makes the other 70 land.\n- There is no gate this week, but the gate is in nine days. Use Study Week wisely.\n\nThat climb is visible. The blockout, the face, the material, the pair. At delivery, the render is not what is scored. What is scored is whether the climb from the first block to this pair is visible, and whether we can say *why* the subject is still the subject under a light it did not choose. That is the dimension, and it is the biggest one in the term.",
      "revisit": "The 1-2-3 read and the silhouette are back, doing their final Project B work. Remember how the 1-2-3 read was a structure our eye could take in at a glance, and how the silhouette was the test of whether the subject reads as one shape? This week both of them were the test. The day hero checked the read, and the night hero checked the silhouette under the rim. Two moves, two weeks, and now they are both in a pair.\n\nNext is Study Week, Week 8, and it has no gate. Push the material one level further, rest, or both. Then Week 9 is Delivery B, where we present the whole subject, the funpack, the silhouette, the two heroes, and a clean file, and crit it as the midpoint of the term. Bring the B2 file and the hero pair, because the delivery is built on the whole. One subject, five weeks, five layers.\n\n---\n\n*If the night hero is just a dark version of the day one, that is a color-relationships problem, not a render problem, and it is a five-minute fix in Study Week. And if the focal part vanishes at night, that is the material doing the silhouette's job, and we will find the rim together. Ask.*"
    },
    "furtherReading": [
      {
        "book": "How to Render: The Fundamentals of Light and Shadow and Reflectivity",
        "author": "Scott Robertson and Thomas Bertling",
        "chapter": "Chapter 2, \"Light Types and Casting Shadows.",
        "note": "** The hard/soft, rim, and occlusion vocabulary is the exact vocabulary the day/night pair uses"
      }
    ],
    "order": 7
  },
  {
    "id": "wk-08",
    "week": 8,
    "date": "2026-10-30",
    "project": "b",
    "title": "Study week: push, polish, or rest",
    "oneConcept": "The climb is visible, and the delivery is built on the whole.",
    "checkpoint": null,
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-08-b-study-week.md",
    "beats": {
      "retrievalHook": "Hello, everyone! This week we take a breath. The heavy lifting is done. The subject is blocked, the face is chosen, the material is set, and the day/night pair is rendered. This week is for the things that matter most at this stage: fixing what the test found, polishing what is close to ready, and preparing the talk-through that will be graded at Delivery B.\n\nFor a fast challenge, look at the night hero. Is it a dark version of the day hero, or is it a genuinely different read? If it is a dark version, that is a five-minute fix today, and it is the best possible time to find it. If it is genuinely different, the subject is portable, and we are in a strong place for Delivery B.",
      "oneNewConcept": "**The climb is visible, and the delivery is built on the whole.**\n\nProject B is five weeks of layers. Week 5 gave us the volume. Week 6 gave us the face. Week 7 gave us the material and the pair. Each week added a layer, and each layer had to serve the same one-sentence *what it is about*. The subject is not finished because it is polished. It is finished because it is decided.\n\n3D multiplies what we already know in 2D, and the multiplier this week is process. The talk-through at Delivery B is a graded deliverable. It is not a garnish. It is the argument, and the renders are the evidence. A subject with a strong argument and a rough render is a subject we can help finish. A subject with a weak argument and a beautiful render is a subject we cannot, because the beauty is the tool and the argument is ours, and only one of those is ours.\n\n**Three paths for today:**\n\n- **Fix.** The night hero is just a dark version of the day hero. The focal part vanishes at night. The material does not serve the sentence. These are the findings, and they are five-minute fixes if we catch them now.\n- **Polish.** The subject is decided. The read is clean. The climb is visible. Push the material one level further, sharpen the rim, adjust the palette. These are the things that make a good subject a finished one.\n- **Prepare.** Write the talk-through. Rehearse the two-minute version. Stand up, say the *about*, say the three defense lines, and stop. Two minutes, five sentences. If we can do it standing, we can do it in the room.\n\n**Today's Demo**\n\nA finished subject is put through a live talk-through. The structure is what matters, not the confidence. Open with the one-sentence *what it is about*. Then *why this material and not the other*, one line. Then *why this face and not the other two*, one line. Then *why this light and not the other one*, one line. Four lines, one decision each, and then stop. The renders are the proof. The lines are the argument.\n\n> **Aside (further reading):** *Imaginative Realism: How to Paint What Does Not Exist* by James Gurney, **Chapter 1, \"Tradition.\"** The conviction that subjects we cannot observe directly have been the mainstream of art since the Renaissance, painted with full conviction. That is the same conviction our one-sentence defense is built on: a subject has to be about something before it can be real. Stable idea, any edition.",
      "guidedMaking": "Pick one path, fix or polish or prepare, and commit to it. One goal: **the delivery is ready, and the talk-through is rehearsed.**\n\n1. **Fix what the test found.** The night hero is a dark version of the day hero. Fix the color relationships. The focal part vanishes at night. Add a rim. The material does not serve the sentence. Adjust the roughness or base color.\n2. **Polish what is close to ready.** Push the material one level further. Sharpen the rim. Adjust the palette. These are the things that make a good subject a finished one.\n3. **Write the talk-through.** The one-sentence *what it is about*. *Why this material and not the other.* *Why this face and not the other two.* *Why this light and not the other one.* Four lines, one decision each. Write it down, because a talk-through we cannot say out loud is a talk-through we cannot defend in a room.\n4. **Rehearse the two-minute version.** Stand up, say the *about*, say the three defense lines, and stop. Two minutes, five sentences.\n5. **Save everything clean.** Name the final file `b-subject_wk8-study.blend`. Keep the collections tidy. Purge orphans. Check the naming. The delivery is in two weeks, and it needs to still make sense.\n\nThe on-hand tool is the scene auditor for file hygiene, or a manual purge if the auditor is not available. A clean file is a deliverable, not a chore. A delivery with a messy file is a delivery that is half-finished.",
      "check": "No gate this week. The question is simple: are we ready for Delivery B?\n\n**Self-check (answer these, then bring them):**\n\n1. Does the subject read as the same subject in day and night?\n2. Is the talk-through written, and can we say it out loud in two minutes?\n3. If the subject is placed in a scene we did not design, does it still lead?\n\nIf all three answer, we are in a strong place for delivery. If two answer, the remaining work is small and focused. If the subject is good but the defense is weak, that is the 60/40 tilt doing its job, and we will build the thinking in the crit.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we fixed what the test found, polished what was close to ready, and prepared the talk-through for Delivery B.\n- **What we learned:** the delivery is built on the whole, and the talk-through is a graded deliverable, not a garnish.\n- **What we'd try next:** defending the subject to a friend who has not seen it, because a defense that only works in front of the person who made it is a defense that does not work at all.\n\n**The things worth not forgetting:**\n\n- A subject with a strong argument and a rough render is a subject we can help finish.\n- A subject with a weak argument and a beautiful render is a subject we cannot.\n- The thinking is the 60, and the subject is the 40 that makes the 60 land.\n- Delivery B is in Week 9. The talk-through is graded. Write it down.\n\nThat is the buffer, and it is there on purpose. Nothing lands on a cliff. Use it to fix, to polish, to rest, or to prepare. All three are valid, and all three carry us to delivery.",
      "revisit": "The *why this one and not the other* sentence is back, doing its final work, and this time it is carrying the whole term. Remember how we wrote it in the directional studies, in the variants, in the material, and in the light? This week all four show up at once, in the talk-through. One sentence, five weeks, and now it is the bridge to the next project.\n\nNext week is Week 9, and it is Delivery B. We present the whole subject, the funpack, the silhouette, the two heroes, and a clean file, and crit it as the midpoint of the term. The talk-through is a graded deliverable, and the test is whether the subject leads without trapping. Bring the study file, because the delivery is built on the whole. One subject, five weeks, five layers. That is the point.\n\n---\n\n*If the night hero needs one more fix, that is five minutes, not two weeks. And if the talk-through feels like a list of settings, that is the three-defense-lines we are missing. Ask, and we will find the argument together.*"
    },
    "furtherReading": [
      {
        "book": "Imaginative Realism: How to Paint What Does Not Exist",
        "author": "James Gurney",
        "chapter": "Chapter 1, \"Tradition.",
        "note": "** The conviction that subjects we cannot observe directly have been the mainstream of art since the Renaissance, painted with full conviction"
      }
    ],
    "order": 8
  },
  {
    "id": "wk-09",
    "week": 9,
    "date": "2026-11-06",
    "project": "b",
    "title": "Project B: delivery and midterm crit",
    "oneConcept": "The delivery is a defense, and the talk-through is a graded deliverable.",
    "checkpoint": "Delivery B",
    "checkpointIsDelivery": true,
    "source": "lessons/semester-3/lessons/wk-09-b-delivery-crit.md",
    "beats": {
      "retrievalHook": "Welcome back, everyone! This week we deliver Project B. The subject has been through five weeks of layers: the volume, the face, the material, the pair, and now the defense. The talk-through is a graded deliverable, and the test is the one that runs the whole subject. Does it lead without trapping, and can we say why in a room full of people who are going to ask why that one and not the other?\n\nFor a fast challenge, look at the day and night heroes. At which light does the subject read the most like itself, and at which does it quietly become a costume? Name the one that is the costume, and the one thing that makes it one. If both read, the subject is real, and we are ready to defend it.",
      "oneNewConcept": "**The delivery is a defense, and the talk-through is a graded deliverable.**\n\nThe render, the funpack, the silhouette, the pair, they are all proof, and proof is good. But proof does not argue. The argument is the talk-through, the two or three minutes where we say *what this subject is about, why this material and not the other, why this face and not the other two, and why this light and not the other one*. And that talk-through is a graded deliverable, because a subject we cannot defend is a subject we do not understand. 3D multiplies what we already know in 2D, and the multiplier this week is the argument.\n\nThe analogy is a thesis, not a poster. A poster is one face, and it is pretty, and it says look at this. A thesis is the why, and it says here is what this is about and why we made it this way and not the other way. The delivery is a thesis that happens to have renders attached. The renders are the evidence. The talk-through is the argument. And the argument is the half that carries us, because a subject with a strong argument and a rough render is a subject we can help finish. A subject with a weak argument and a beautiful render is a subject we cannot.\n\n**Why it matters for this project:** a subject that leads without trapping has to lead in any scene, and the only proof of that is that we can say why it leads when the scene is one we did not design. If we cannot defend the subject in a room, we cannot defend it in a shot, and Project C is a shot. The delivery is not the end of Project B. It is the bridge to Project C, and the talk-through is the plank we walk across.\n\n**Today's Demo**\n\nA finished subject goes through a live talk-through. The structure is what matters. Open with the one-sentence *what it is about*. Then why this material and not the other, one line. Then why this face and not the other two, one line. Then why this light and not the other one, one line. Four lines, one decision each, and then stop. The renders are the proof. The lines are the argument. The one move that decides whether the defense lands is the *why this one and not the other* sentence, the same sentence we have written four times now.\n\n> **Aside (further reading):** *Framed Ink: Drawing and Composition for Visual Storytellers* by Marcos Mateu-Mestre, **Chapter 5, \"Character Design.\"** The overall silhouette, the dynamics of expression, and the about-the-character ideas are the vocabulary for the talk-through. If the talk-through feels like a list of settings, this chapter is the fix, because it teaches how to say why instead of what.",
      "guidedMaking": "Assemble the delivery, and write the defense. One goal: **a finished subject we can defend in a room, with a talk-through that is a graded deliverable.**\n\n1. **Assemble the deliverables.** The full funpack, the three-view sheet, the silhouette check, the two heroes, a day and a night, and a clean source file. Name the file `b-subject_delivery.blend`, and keep the collections clean. This is the artifact, and it is the proof.\n2. **Write the one-sentence *what it is about*.** The djinn who is more curious than scary. The lamp that is more tired than magical. That sentence is the delivery, and the rest is the proof.\n3. **Write the three defense lines.** Why this material and not the other. Why this face and not the other two. Why this light and not the other one. Three lines, one decision each. Write it down, because a talk-through we cannot say out loud is a talk-through we cannot defend in a room.\n4. **Rehearse the two-minute version.** Stand up, say the about, say the three lines, and stop. Two minutes, five sentences. If we can do it standing, we can do it in the room.\n5. **Save everything clean.** The deliverables, the one-sentence about, the three defense lines, and the source file, all named and organized so the next person who opens it can follow the work in a minute.\n\nThe on-hand tool is the existing files, the funpack, the silhouette sheet, and the hero pair, plus a clean source file. The defense is text, a document or a sticky note, whatever we write it on. A clean file is a deliverable, not a chore. A delivery with a messy file is a delivery that is half-finished.",
      "check": "This is the midpoint of the term. Hand in the full funpack, the silhouette sheet, the two heroes, the clean source file, the one-sentence about, and the three defense lines. Then we crit, together, in the room. The crit is a defense, not a grade.\n\n**The delivery question:** does this subject lead without trapping, and can we defend it in a room, with the about, the material, the face, and the light, all in one breath?\n\n**Self-check before the crit (answer these, then bring them):**\n\n1. What is the one-sentence *what it is about*, and does the subject actually show it?\n2. What are the three defense lines, and can we say them out loud in two minutes?\n3. If the subject is placed in a scene we did not design, does it still lead?\n\nIf all three answer, we have a delivery that can be defended in front of the room. If two answer, we work the third in the crit, and that work becomes the iteration evidence. If the subject is good but the defense is weak, that is the 60/40 tilt doing its job, and we will spend the crit building the thinking.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we assembled the delivery, wrote the about and the three defense lines, and rehearsed the two-minute talk-through.\n- **What we learned:** the delivery is a defense and the talk-through is a deliverable, and the renders are the proof and the lines are the argument.\n- **What we'd try next:** defending the subject to a friend who has not seen it, because a defense that only works in front of the person who made it is a defense that does not work at all.\n\n**The things worth not forgetting:**\n\n- A strong why on a rough subject outperforms a weak why on a polished one, every time.\n- The thinking is the 60, and the subject is the 40 that makes the 60 land.\n- The same 60 that carried us through Project B is the same 60 that will carry us into Project C, where the subject becomes a scene and the defense becomes a shot.\n- Delivery B is today. The talk-through is graded. Bring the defense.\n\nThat is the midpoint, and it is where the term turns. We defended a space. We defended a subject. Now we are about to defend a scene, and the move is the same, just at a bigger scale. The thinking is real, and it is ours.",
      "revisit": "The *why this one and not the other* sentence is back, doing its final work, and this time it is carrying the whole term. Remember how we wrote it in the directional studies, in the variants, in the material, and in the light? This week all four showed up at once, in the about, the three defense lines, and the talk-through. One sentence, five weeks, and now it is the bridge to the next project.\n\nNext week is Week 10, and it is Project C kickoff. We leave the subject and go to a scene, a sequence of shots that tells a small story, and the first real idea is the motivated camera, a camera that moves because the story needs it to, not because it looks good. That is the flip of everything we have done. Instead of a subject holding a scene in our head, a scene holds a subject in a shot. Bring the B delivery file, because the scene is built around the subject, and the camera is built around the scene. One story, three weeks, three layers. That is the point.\n\n---\n\n*If the subject is good but the defense is weak, that is not a failure. That is the 60/40 tilt doing its job, and the crit is where we build the thinking, because that is the half that carries us. And if the talk-through feels like a list of settings, that is the three-defense-lines we are missing, and it is a five-minute fix. Ask, and we will find the argument together.*"
    },
    "furtherReading": [
      {
        "book": "Framed Ink: Drawing and Composition for Visual Storytellers",
        "author": "Marcos Mateu-Mestre",
        "chapter": "Chapter 5, \"Character Design.",
        "note": "** The overall silhouette, the dynamics of expression, and the about-the-character ideas are the vocabulary for the talk-through"
      }
    ],
    "order": 9
  },
  {
    "id": "wk-10",
    "week": 10,
    "date": "2026-11-13",
    "project": "c",
    "title": "Project C: the motivated camera",
    "oneConcept": "The motivated camera follows three moves:",
    "checkpoint": "C1",
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-10-c-motivated-camera.md",
    "beats": {
      "retrievalHook": "Welcome back for Project C! This week we learn about the motivated camera, a camera that is there for a reason we can defend. That is the heart of Project C, where we block a short scene, place our subject inside our world, and move a camera through it with a reason. Every camera we place has a motivation tied to the beat. The character is looking left, so the camera is where we see them look. The reveal is the point, so the wide shot comes before the close one. A pretty frame with no reason is the one we cut!\n\nOur subject and our room both carry ideas from the last two projects. The material we built for the subject, the environment we blocked for the world, the camera we place this week, all three of them come together for the first time. Keep that connection in mind as we go, because it is the seed Project C grows from.\n\n3D multiplies what we already know in 2D.",
      "oneNewConcept": "A motivated camera is there because of the beat, not because the angle looked nice. The trap that catches almost every scene is simple: the subject is good, the room is good, and the camera is parked in a spot that makes the render look nice, and that is it. It is not motivated. It is not there because of the story. It is there because it looked good, and a camera like that cannot be defended.\n\nThe analogy is a journalist and a tourist. A tourist photographs the view, the one that looks good, and that is fine. A journalist photographs the story, the one that is about something, and the view is just the setting. Our camera is the journalist. The beat is the story. The subject and the room are the setting.\n\nThe analogy breaks down here: a journalist covers events that already happened. Our camera creates the event, because placing it is what decides what the audience feels. That is the extra work 3D asks of us, and it is where the design thinking lives.\n\n**The motivated camera follows three moves:**\n\n- **Name the beat.** The one thing that happens. The rare text and the light that finds it. The djinn and the hour that makes it feel like a secret. That beat is the motivation, and the camera has to serve it.\n- **Name the emotional turn.** The mood at the start and where it goes. The room is quiet and then it is not. It is warm and then it is closing in. That turn is the target our light plan will hit by Week 12, so say it now, in one line.\n- **Find the position that serves the beat.** The one that makes the eye go to the subject at the moment it matters. If the camera is a guess, the eye's first stop is an accident. If the camera is a decision, the eye's first stop is the beat.\n\nThe checkpoint C1 checks the motivated camera. A strong why on a rough block outperforms a weak why on a polished frame, every time.\n\n**Today's Demo**\n\nWe take the subject and the room, put a camera in, and refuse to move it until we can say why. We name the beat, find the camera position that serves it, and check whether the camera serves the beat or just frames the scene. The one move that decides everything is the motivation question: does the camera's position serve the beat, or does it just frame the scene?\n\n> **Aside (further reading):** *Framed Ink* by Mateu-Mestre, **Chapter 3, \"The Visual Message within a Still Composition.\"** The camera motivation and the establishing shot are exactly the work we are doing. Worth a pass before C1.",
      "guidedMaking": "We take our subject and our room and block a scene with a motivated camera. One goal: **a frame the eye can defend, because the camera is there for a reason.**\n\n1. **Name the beat and its turn.** Before moving the camera, say the one thing that happens. Now name the emotional turn, the mood at the start and where it goes. Say it in one line. That turn is the target the light plan will aim at by Week 12.\n2. **Block the scene.** Subject, room, the big shapes only. No detail, no bevels, no textures. The point is that the composition is right, not that the surface is pretty.\n3. **Find the motivated camera.** Name the beat, then find the camera position that serves the beat. Turn it, check the frame at each position, and fix the motivation, not the angle. If the camera's position is a guess, that is exactly what C1 is for.\n4. **Check the eye's first stop.** In the frame, name the one thing the eye goes to first. Is it the subject at the moment it matters, or is it a pretty corner? If it is the pretty corner, the camera is parked, and we will find the motivation together.\n5. **Save a clean, named file.** Save it `c-scene_wk10-c1.blend`, with the collections clean and nothing orphaned. This is the artifact for C1, a working block with a motivated camera, not a finish.\n\nThe on-hand tool is the Starter Scene's clean collections and its camera, or a fresh camera from the lamp menu. The tool is the means. The motivation decision is the design, and that is what C1 checks!",
      "check": "Bring a scene blocked with a motivated camera, plus the one-sentence what the beat is and the emotional turn of the beat. It does not need to be pretty. It needs to be motivated, and we need to be able to say why the camera is here and where the beat is heading in mood.\n\n**Pass question:** is the camera motivated, there for the beat, or is it parked, there because it looked good?\n\n**Self-check before we show (answer these, then bring them):**\n\n1. What is the one-sentence what the beat is, and does the camera actually serve it?\n2. Where does the eye go first, the subject at the moment it matters, or a pretty corner?\n3. What is the emotional turn of the beat, the mood at the start and where it goes?\n\nIf all three answer, we are ready. If two answer, we work the third together in the next few minutes, and that work becomes the iteration evidence, not a penalty. A fix now is five minutes, not two weeks. That is the deal on every gate this term.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we blocked a scene with a motivated camera and named the beat it serves.\n- **What we learned:** the camera is the journalist, not the tourist, and the frame is the story, not the view.\n- **What we'd try next:** finding a second motivated camera from a different angle that serves the same beat, to see if the beat is real, because a beat that only works from one angle is a beat that is hiding.\n\n**The things worth not forgetting:**\n\n- A strong why on a rough block outperforms a weak why on a polished frame. The thinking is the 60, the camera is the 40 that makes the 60 land.\n- The emotional turn is named now, even though the light plan does not arrive until C2. Naming it gives the light a target to aim at.\n- Project C is a scene, not a render. The motivated camera is what separates a story from a picture of a room.\n\nThe motivated camera is the foundation of Project C. Get it solid and the sequence builds on a decision instead of a guess!",
      "revisit": "**The focal point and the 1-2-3 read are back, wearing a different hat.** Remember how the focal point was the truth and the shapes were what we adjusted? This week the camera is the new truth, and the frame is what we adjust. Same moves, new thing to hold still. We have done the focal-point move five times now, in scale, hierarchy, direction, hero, and subject. Now it is carrying the scene into a story.\n\nNext week is Week 11, and it decides whether Project C is a sequence or a set of frames. We take this motivated camera and add a second one, and the test is the one that runs all of continuity: can the audience follow from one to the other, or does the scene jump. That is **180-degree continuity, the line**, and it is the difference between a scene that leads and one that confuses. Bring the C1 file, because the second camera is built on the first.\n\n---\n\n*No question is a dumb one here. If the camera is parked and we do not know it yet, that is the best possible time to find out, because it is a block, not a finish. Ask, and we sort it out. See you next week.*"
    },
    "furtherReading": [
      {
        "book": "Framed Ink",
        "author": "Mateu-Mestre",
        "chapter": "Chapter 3, \"The Visual Message within a Still Composition.",
        "note": "** The camera motivation and the establishing shot are exactly the work we are doing"
      }
    ],
    "order": 10
  },
  {
    "id": "wk-11",
    "week": 11,
    "date": "2026-11-20",
    "project": "c",
    "title": "Project C: 180-degree continuity, the line",
    "oneConcept": "The 180-degree rule follows three moves:",
    "checkpoint": null,
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-11-c-180-continuity.md",
    "beats": {
      "retrievalHook": "Happy Friday, everyone! This week we learn about the 180-degree rule and the line, the invisible axis that runs through the action. Our two cameras have to work together, and they only work if the audience can follow from one to the other without a jump. When both cameras stay on the same side of the line, the subject keeps its direction, and the audience follows. When one camera crosses the line, the subject flips, and the audience stumbles. The line is the cheapest, most invisible, and most important thing in a sequence!\n\nFor a fast challenge, imagine cutting from the first camera to the second in our scene. Does the subject stay in place, or does it jump to the other side? Hold that thought, because it comes back when the concepts land in a few minutes.\n\n3D multiplies what we already know in 2D.",
      "oneNewConcept": "One camera is a frame. Two cameras are a sequence, and a sequence only works if the audience can follow from one to the other. The line is the invisible axis that runs through the action. It is the line between the subject and the thing it is looking at, or the line of the action itself. When both cameras stay on the same side of that line, the subject keeps its direction, and the audience follows.\n\nThe analogy is a conversation. Two people talking, and we are sitting on one side, watching both of them. We can see who is looking at whom, and the direction of the talk is clear. Now imagine jumping to the other side of the conversation, mid-sentence. Both people are still talking, but now they are looking the other way, and the brain stumbles because the direction flipped. We did not miss a word. We just lost the thread. That is the line.\n\nThe analogy breaks down here: a real conversation has two people, but our scene might have only one subject and a room. The line still works, because the axis runs between the subject and whatever it is interacting with. A book on a shelf, a light through a window, a door at the end of a hall. The rule is the same.\n\n**The 180-degree rule follows three moves:**\n\n- **Name the action axis.** The line that runs through the action. The line between the djinn and the text. The line of the walk, from the door to the table. Both cameras have to stay on the same side of it.\n- **Place the second camera on the same side.** Find the motivated position for the second shot, from a different angle but on the same side of the line. The test is that the subject keeps its direction, that it does not flip when we cut.\n- **Find the point of reference.** The one thing in the frame that does not move, the thing the audience's eye anchors to. The table. The door. The light. If the point of reference is consistent across the cut, the line holds.\n\nThe light and mood turn we will design in Week 12 happens inside this continuity, not on top of it. The turn must not break the line or the point of reference. The key direction can hold while the temperature turns. The point of reference holds while the mood shifts. The audience follows the turn because there is something constant to follow it against, and that constant is the line.\n\n**Today's Demo**\n\nWe take the two motivated cameras and show the line, the invisible axis that runs through the action. We move one camera across it, and watch the subject flip. In the first cut the subject looks left, in the second cut the subject looks right, and that flip is the stumble. Then we show the point of reference, the one thing in the frame that does not move, and if it is consistent across the cut, the line holds.\n\n> **Aside (further reading):** *Framed Ink* by Mateu-Mestre, **Chapter 4, \"Composing for Continuity.\"** The line, the point of reference, and the jump cut are all covered there. Worth a pass before C2.",
      "guidedMaking": "We take the C1 scene and add a second motivated camera, then block the two shots so they work together. One goal: **a two-shot sequence the audience can follow, because the line holds.**\n\n1. **Name the action axis.** Before moving the second camera, say the line, the axis that runs through the action. If the axis is not clear, name three options and pick one, because a sequence with no axis is a set of frames with no direction.\n2. **Place the second camera.** Find the motivated position for the second shot, from a different angle but on the same side of the line. The test is that the subject keeps its direction. If the subject flips, we have crossed the line, and we will find the fix together.\n3. **Find the point of reference.** In both frames, name the one thing that does not move, the thing the audience's eye anchors to. If it is consistent across the cut, the line holds.\n4. **Cut the two shots and watch.** Render both frames, or just look at the two viewports, and imagine the cut. Does the subject jump or stay? If it jumps, the line broke, and we fix the camera, not the subject.\n5. **Save a clean, named file.** Save it `c-scene_wk11.blend`, with the collections clean and nothing orphaned. This is the working file for C2, a block with two motivated cameras and a held line.\n\nThe on-hand tool is the Starter Scene's clean collections and its cameras, or fresh cameras from the lamp menu. The tool is the means. The line decision is the design!",
      "check": "No gate this week. One question lands the check.\n\n**Do the two shots follow, or do they jump?**\n\nIf we cut from the first to the second, does the subject keep its direction, or does it flip? Name the point of reference that is holding the cut, or the one that is breaking it. That name is exactly where next week's work starts.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we added a second motivated camera and blocked the two shots so the line holds.\n- **What we learned:** the line is the cheapest, most invisible, and most important thing in a sequence, and the audience follows when it holds.\n- **What we'd try next:** adding a third shot, a closer one, to find the one angle that breaks the line, because the line is only as strong as its weakest cut.\n\n**The things worth not forgetting:**\n\n- The line gives the turn its direction. Without a held line, the light and mood turn has nowhere to go.\n- A close shot and a wide shot are a different sequence from two wides. Exploring angles before settling is design range, even at the block stage.\n- The point of reference anchors the cut. Name it, because next week's contact sheet depends on it.\n\nThe line is the thing that turns a set of frames into a story. Get it solid and the sequence work builds on a decision!",
      "revisit": "**The motivated camera from last week is back, wearing a different hat.** Remember how the camera was the journalist, not the tourist? This week the line is the new truth, and the two cameras are what we adjust. Same move, new thing to hold still. And the 1-2-3 read from the hero render is back too, because a sequence that reads as one clear direction is a sequence with a 1-2-3 read. That is the test C2 checks, just on a cut instead of a frame.\n\nNext week is Week 12, and it is Checkpoint C2. We take this two-shot sequence and give it a light and mood turn and a contact sheet, so the sequence does not just follow, it moves, and reads as one scene in motion at a glance. We will lay the shots out on a contact sheet, and we will learn to kill the one that breaks the turn. Bring the Week 11 file, because the contact sheet is built on the two shots, not beside them.\n\n---\n\n*If the subject jumps when we cut, that is not a subject problem, that is a line problem, and it is the best possible time to find it. Ask, and we find the line together. See you next week.*"
    },
    "furtherReading": [
      {
        "book": "Framed Ink",
        "author": "Mateu-Mestre",
        "chapter": "Chapter 4, \"Composing for Continuity.",
        "note": "** The line, the point of reference, and the jump cut are all covered there"
      }
    ],
    "order": 11
  },
  {
    "id": "wk-12",
    "week": 12,
    "date": "2026-11-27",
    "project": "c",
    "title": "Project C: shot sequence, contact sheet, the light and mood turn",
    "oneConcept": "The light and mood turn follows three moves:",
    "checkpoint": "C2",
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-12-c-blockout-and-contact-sheet.md",
    "beats": {
      "retrievalHook": "Welcome back for C2! This week we learn about the shot sequence, the contact sheet, and the light and mood turn that carries the story's emotional beat across the sequence. The line holds from last week, the subject keeps its direction, and the audience can follow. But a story beat is a thing that changes, and if the light and the mood do not change with it, the beat lands flat. The turn is the light, the temperature, the palette, and the when deliberately shifting from beat to beat, so the audience feels the scene move!\n\nFor a fast challenge, lay the two shots side by side, squint, and read them as one scene moving through a change. Do they feel like one moment turning, or do they look like two disconnected days with nothing in between? Hold that thought, because it comes back when the concepts land in a few minutes.\n\n3D multiplies what we already know in 2D.",
      "oneNewConcept": "A sequence that follows but does not move is a sequence that holds the line but says nothing. The light and mood turn is what makes the scene move, and it works by deliberately shifting the temperature, the contrast, the palette, and the when from beat to beat, so the audience feels the scene go somewhere. The turn moves the when without moving the where.\n\nThe analogy is a song. A song is a set of notes in the right order, and that is the melody. But a good song also changes key, a modulation, a lift, a drop, and the turn is what makes the song feel like it is going somewhere instead of sitting still. Our sequence is the song. The light and mood turn is the modulation. The line is the melody, and it holds. The mood is the key, and the key turns. Both have to be there.\n\nThe analogy breaks down here: a song's key change is automatic, because the notes carry it. Our light and mood turn is a design decision, because the audience will not feel it unless we decide it. That is the extra work 3D asks of us, and it is where the turn lives.\n\n**The light and mood turn follows three moves:**\n\n- **Name the turn.** Say what changes from beat one to beat two, and why it is the right turn for the story. A warm open beat that closes into a cooler tighter one. A bright midday that sinks toward dusk. Name the start mood and the end mood, because a turn we can name is a turn we can build.\n- **Progress the light across the sequence.** Set the key, the fill, the rim, the temperature, and the palette so they change from beat one to beat two. Change the whole system, not one knob. Decide what holds, the key direction, the point of reference, so the audience has something constant to follow the change against.\n- **Lay out the contact sheet.** The shots in order, labeled, in the order they cut, with the one-sentence why this turn and why this order. The contact sheet is the quick read of the whole sequence. If the frames in order read as one scene moving through a change, the line and the turn are both there.\n\nIf the turn breaks the line, the audience stumbles. If it breaks the hold, the audience reads several disconnected days instead of one moment in motion. The contact sheet is where we find the odd frame out, and that is what C2 catches.\n\n**Today's Demo**\n\nWe take the two-shot sequence and give it a turn, then lay it out on a contact sheet. We watch the turn do the work, not the line. The line is the order, the turn is the when, and the contact sheet is where we see both at a glance. The one move that decides whether the turn works is the named turn: does the temperature, the contrast, the palette, deliberately shift from beat one to beat two, while the key direction and the point of reference hold?\n\n> **Aside (further reading):** *Color and Light* by Gurney, **Chapter 3, \"Sources of Light.\"** The color temperature and hardness of light are the vocabulary for why a mood reads as warm or cool, hard or soft. Stable ideas, any edition.",
      "guidedMaking": "We take the two-shot sequence and design the light and mood turn across it, then lay it out on a contact sheet. One goal: **a sequence that reads as one scene moving through a change at a glance, because the line holds while the turn carries the beat.**\n\n1. **Name the turn.** Before touching a light, say what changes from beat one to beat two, and why it is the right turn for the story. Name the start mood and the end mood.\n2. **Progress the light across the sequence.** Set the key, the fill, the rim, the temperature, and the palette so they change from beat one to beat two. Change the whole system, not one knob. Decide what holds, the key direction and the point of reference.\n3. **Lay out the contact sheet.** The shots in order, labeled, with the one-sentence why this turn and why this order. If one frame reads as a different day, that frame is the odd one out, and the contact sheet is where we find it.\n4. **Fix the weak beat in the turn.** If the contact sheet shows a beat where the turn stalls, jumps, or breaks the line, cut it, fix it, or re-aim it. Hierarchy is as much about what we do not show as what we do.\n5. **Save a clean, named file.** Save it `c-scene_wk12-c2.blend`, with the collections clean and nothing orphaned. This is the artifact for C2, a block with a held line and a named light and mood turn.\n\nThe on-hand tool is the Starter Scene's clean collections and its light rig, or fresh lamps. Three lamps plus a world color does the same job. The tool is the means. The turn decision is the design!",
      "check": "Bring a sequence with a named light and mood turn and a contact sheet, plus the one-sentence what the turn is, how it changes, and why it is the right turn. It does not need to be pretty. It needs to be decided, and it needs to read as one scene moving through a change at a glance.\n\n**Pass question:** does this sequence read as one scene moving through a change at a glance, with the line holding and a named light and mood turn carrying the beat, or is it a set of frames that happen to be in the right order?\n\n**Self-check before we show (answer these, then bring them):**\n\n1. Can we name the light and mood turn, what changes from beat to beat and why it is the right turn, and does the contact sheet show it legibly?\n2. Does the line still hold across the cut, the subject keeping its direction and the point of reference anchoring the cut?\n3. If we looked at the contact sheet and squinted, would we read it as one scene or several scenes?\n\nIf all three answer, we are ready. If two answer, we work the third together in the next few minutes, and that work becomes the iteration evidence, not a penalty. A fix now is five minutes, not two weeks. That is the deal on every gate this term.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we named the light and mood turn for our sequence, designed it across the beats, and laid it out on a contact sheet.\n- **What we learned:** the line is the melody and the mood is the key, and this week the key turns while the melody holds, and both have to be there for the sequence to read as one song that goes somewhere.\n- **What we'd try next:** adding a third beat to the turn, a closer one, to see if the turn and the line still hold, because the sequence is only as strong as its weakest beat.\n\n**The things worth not forgetting:**\n\n- A named turn is a turn we can build. If we cannot say it in one line, the light has no direction to aim at.\n- The contact sheet is the proof. It shows the whole sequence at a glance, and it is where we find the odd frame out.\n- Iteration is not quantity, it is evidence. A sequence we can defend, with a line that holds and a named turn that carries the beat, is strong iteration even if it is a little rough.\n\nThe contact sheet is the proof the sequence is a story and not a set of frames. Get it solid and the delivery builds on evidence!",
      "revisit": "**The directional studies from Project A and the day-and-night pair from Project B are back, doing their final Project C work.** Remember how a direction was a whole system, light plus camera plus palette, and how the day-and-night pair was two genuine directions, not the same render five times? This week our light and mood turn is the same move, on a sequence instead of a room or a subject. Same system, one turn, several beats.\n\nNext week is Week 13, and it is the grace week, no gate, no new concept. Take the time to push the sequence one level further, or to rest, or to both, and use it to find the one thing in the sequence that is still a guess. Then Week 14 is Delivery C, where we take this defended sequence and push it to a final, finished scene, and crit it together as the close of the term. Bring the C2 file, because the final is built on the sequence, and the delivery is built on the final.\n\n---\n\n*If the sequence reads as several disconnected days, that is not a light problem, that is a turn problem, and it is the best possible time to find it. Ask, and we find the turn together. See you next week.*"
    },
    "furtherReading": [
      {
        "book": "Color and Light",
        "author": "Gurney",
        "chapter": "Chapter 3, \"Sources of Light.",
        "note": "** The color temperature and hardness of light are the vocabulary for why a mood reads as warm or cool, hard or soft"
      }
    ],
    "order": 12
  },
  {
    "id": "wk-13",
    "week": 13,
    "date": "2026-12-04",
    "project": null,
    "title": "Grace week",
    "oneConcept": "The grace week follows three moves:",
    "checkpoint": null,
    "checkpointIsDelivery": false,
    "source": "lessons/semester-3/lessons/wk-13-grace-week.md",
    "beats": {
      "retrievalHook": "Happy Friday! This week is the grace week, no new concept, no gate. The term has handed us the whole toolkit: scale, hierarchy, direction, material, motivation, the line, the mood, and the paintover that proves we can see past the tool. What it has not handed us, because no one can, is the judgment of which of those to reach for, and when. That judgment is ours, and it is built in the work. This week is the room where the work meets the judgment, and the only rule is that the work has to be honest about what it still does not know!\n\nFor a fast challenge, look at the C2 contact sheet and point to the one thing that is almost right but not quite. The light is a touch even, the subject is a touch small, the mood is a touch uncertain. Name it. That one thing is what this week is for. If it cannot be named, the sequence is already honest, which is a good thing and a rare one.\n\n3D multiplies what we already know in 2D.",
      "oneNewConcept": "Iteration is the point of this week, and a guess we can name is a decision we can make. The term has given us the tools, and this week is where we decide which ones to use and when. The analogy is a musician before a gig. They do not learn a new instrument on the night before. They play the ones they have, and they find the one note that still wobbles, and they fix it, or they leave it, on purpose, because a musician who knows which note wobbles is a musician who is ready.\n\nThe analogy breaks down here: a musician's gig happens in real time, and our final is a file we can reopen and fix. That means the grace week is the last chance to find the wobbly note before the audience arrives.\n\n**The grace week follows three moves:**\n\n- **Do the read on our own sequence.** The contact sheet first, the quick read, the one thing the eye goes to. Then the line, the direction, the point of reference. Then the mood, the when. At each one, ask if it is a decision or a guess. Write the one that is still a guess down. That one is this week's work.\n- **Make the decision, or leave it on purpose.** If the guess is fixable in an hour, fix it. If it is not, leave it on purpose and write the reason. A guess we leave on purpose is a decision. A guess we do not know we have is the only real failure.\n- **Push one thing one level further, if we want.** The material's response, the hero's light, the subject's face, the sequence's mood. Pick the one that is closest to a finish and push it, because a finish is the best proof that the decision is real. If we would rather rest, rest, and do the read instead.\n\nThe final is a conversation, and a conversation starts with a clear state, not a finished render. The render is the proof. The sentence is the decision.\n\n**Today's Demo**\n\nWe walk through how to read a sequence, the same way the final will read ours. The contact sheet first, the quick read. Then the line, the direction, the point of reference. Then the mood, the when. At each one, the same question: is this a decision or a guess? Practice the same read on our own sequence.\n\n> **Aside (further reading):** *Framed Ink* by Mateu-Mestre, **Chapter 2, \"The Single Image.\"** Re-read it not as a new idea, but as the checklist. The shot size, the rule of thirds, the tangencies, the size difference, these are the questions we ask a frame before we trust it. Worth a pass.",
      "guidedMaking": "We use the week on the C2 sequence. One goal: **a sequence that is honest about what it still does not know, and a decision about the one thing that is still a guess.**\n\n1. **Do the read on our own.** The contact sheet, the quick read, the one thing the eye goes to. The line, the direction, the point of reference. The mood, the when. At each one, ask if it is a decision or a guess. Write the one that is still a guess down.\n2. **Make the decision, or leave it on purpose.** If the guess is fixable in an hour, fix it. If it is not, leave it on purpose and write the reason.\n3. **Push one thing one level further, if we want.** The material's response, the hero's light, the subject's face, the sequence's mood. Or rest, and do the read instead.\n4. **Write the one-sentence state.** Where is the sequence, and what is the one thing it is not sure about, and what did we do about it? That sentence is the artifact for the final.\n5. **Save a clean, named file.** Save it `c-scene_final.blend`, with the collections clean and nothing orphaned. This is the file the final is built on, and it is the one someone will open on Friday, so keep it clean.\n\nThe on-hand tool is whatever we have been using: the Starter Scene's clean collections, EEVEE for the fast read, Cycles for the final pass if we push a hero. The tool is the means. The honesty is the work!",
      "check": "No gate this week. One question lands the check.\n\n**What is the one thing our sequence is still not sure about, and did we fix it, or leave it on purpose, and why?**\n\nIf we can answer that, we are ready, and the final is a conversation. If we cannot, finding it is the whole win, because a guess we can name is a decision we can make. That is the difference between a finish and a hurry.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we did the read on our sequence and found the one thing that was still a guess.\n- **What we learned:** iteration is the point, and a guess we can name is a decision we can make.\n- **What we'd try next:** doing the read on someone else's sequence, to see if we can find their guess, because the read is only real if it works on a sequence that is not ours.\n\n**The things worth not forgetting:**\n\n- Iteration is the whole of the term in one dimension, because the term is the story of learning to make decisions we can defend.\n- A guess we leave on purpose is a decision. A guess we do not know we have is the only real failure.\n- The final is a conversation, not a judgment. The conversation starts with a clear state.\n\nThe grace week is the last chance to find the wobbly note. Use it well, and the delivery is a finish instead of a hurry!",
      "revisit": "**Every idea in the term is back, doing its final work, at once.** Scale, from the very first blockout. Hierarchy, from the focal point. Direction, from the studies. Material, from the heroes. Motivation, from the camera. The line, from the continuity. The mood, from the sequence. Seven moves, seven weeks, and now they are all in one sequence. The read is the thing that holds them together, because the read is the question each one answers, and the answer is the decision, and the decision is the project.\n\nNext week is Week 14, and it is Delivery C, the final. We take this honest sequence and push it to a finished scene, and then we crit it together as the close of the term. The crit is the conversation the whole term has been building toward. Bring the final file, because the delivery is built on the sequence, and the conversation is built on the delivery. One line, one mood, one story, one guess we found, and now they walk out the door together.\n\n---\n\n*No question is a dumb one here. If we cannot name the one thing our sequence is still not sure about, that is not a failure, that is the work, and finding it is the whole win of the week. Ask, and we find the decision together. See you next week.*"
    },
    "furtherReading": [
      {
        "book": "Framed Ink",
        "author": "Mateu-Mestre",
        "chapter": "Chapter 2, \"The Single Image.",
        "note": "** Re-read it not as a new idea, but as the checklist"
      }
    ],
    "order": 13
  },
  {
    "id": "wk-14",
    "week": 14,
    "date": "2026-12-11",
    "project": "c",
    "title": "Project C: final delivery and crit",
    "oneConcept": "The final delivery follows three moves:",
    "checkpoint": "Delivery C",
    "checkpointIsDelivery": true,
    "source": "lessons/semester-3/lessons/wk-14-c-final-delivery-crit.md",
    "beats": {
      "retrievalHook": "Welcome back for the final delivery! This week we push the sequence to a finished scene, and we crit it together as the close of the term. A finished scene is a decided scene, and the crit is where the decision is tested. Every edge is chosen, every cost is known, and the one thing the scene is not sure about is on purpose, not by accident. The render is the proof. The sentence is the decision!\n\nFor a fast challenge, look at the final scene and say the one-sentence defense out loud, in one line, without looking at the file. The rare text and the light that finds it. The djinn and the hour that makes it feel like a secret. That sentence is the project, and the render is the proof. If we can say the sentence, we are ready.\n\n3D multiplies what we already know in 2D.",
      "oneNewConcept": "A finished scene is a decided scene, and the crit is where the decision is tested. The term has handed us the toolkit, and the grace week gave us the honesty, and now the final is the commitment. A finished scene is not a scene with no flaws, because a scene with no flaws is a scene with no decisions. A finished scene is a scene where every edge is chosen, every cost is known, and the one thing it is not sure about is on purpose.\n\nThe analogy is a letter and a draft. A draft is a set of words, and the words can be good, and that is fine. A letter is a set of words that are chosen, and the choosing is the letter, because a letter is a thing that is meant to say something. Our final scene is the letter, and the crit is where we find out if it is a letter or a draft.\n\nThe analogy breaks down here: a letter is read by one person, and our scene is crit by the whole room. That means the defense has to hold in public, and the one-sentence defense is where it starts.\n\n**The final delivery follows three moves:**\n\n- **Lock the decision.** The one thing the sequence was not sure about, from last week, is fixed if it is fixable, or left on purpose with a written reason. Every other decision, the scale, the hierarchy, the direction, the material, the motivation, the line, the turn, is locked. A final with a loose decision is a draft. A final with a locked decision is a letter.\n- **Do the final render.** The hero pass, Cycles if available, or a clean EEVEE pass, and the contact sheet. Save the file `c-scene_final.blend`, the renders `c-scene_final.png`, and the contact sheet `c-scene_final-contact.png`. The naming convention carries through: `Lastname_Firstname_ANV6_wk14_v001.png`.\n- **Write the one-sentence defense.** What is the scene about, in one line? Why this camera, why this line, why this turn, and why the one thing it is not sure about is on purpose. That sentence and that why are the artifact next to the render.\n\nThe crit is a conversation, not a judgment. The conversation starts with a clear state, not a finished render. The render is the proof. The sentence is the decision.\n\n**Today's Demo**\n\nWe walk through the final read: the contact sheet first, the quick read. Then the line, the direction, the point of reference. Then the light and mood turn, the when, what changes across the beats and how it moves the story. Then the one-sentence defense, and the honesty about the one thing it is not sure about. At each one, the same question: is this a decision or a guess?\n\n> **Aside (further reading):** *Framed Ink* by Mateu-Mestre, **Chapter 2, \"Drawing and Composing a Single Image (Basics),\"** and **Chapter 3, \"The Visual Message within a Still Composition,\"** together, as the final checklist. Worth a pass.",
      "guidedMaking": "We take the grace-week sequence and finish it into the final, and prepare for the crit. One goal: **a decided scene we can defend, and a clear state we can say out loud.**\n\n1. **Lock the decision.** The one thing the sequence was not sure about, fix it if it is fixable, or leave it on purpose and write the reason. Every other decision, lock it.\n2. **Do the final render.** The hero pass, Cycles or a clean EEVEE pass, and the contact sheet. Save the file `c-scene_final.blend`, the renders `c-scene_final.png`, and the contact sheet `c-scene_final-contact.png`. Use the standard naming convention: `Lastname_Firstname_ANV6_wk14_v001.png`.\n3. **Write the one-sentence defense.** What is the scene about, in one line? Why this camera, why this line, why this turn, and why the one thing it is not sure about is on purpose.\n4. **Prepare the honesty.** The one thing the scene is not sure about, and the reason, fixed or left on purpose. Write it down, because the crit is where we say it.\n5. **Save everything clean.** The scene, the cameras, the line, the turn, the contact sheet, the one-sentence defense, the honesty, all in one file, named like a person, with the collections clean and nothing orphaned. This is the file the term is built on, and it is the one that leaves with us.\n\nThe on-hand tool is the final render, Cycles or a clean EEVEE pass, and the contact sheet, a 2D app or a compositor layout over the renders. The tool is the means. The honesty is the work!",
      "check": "This is the final delivery. We hand in the final render, the contact sheet, the source file, the one-sentence defense, and the honesty about the one thing it is not sure about. Then we crit, together, in the room, because the crit is the conversation the whole term has been building toward.\n\n**The delivery question:** is this a decided scene, with a beat we can name, a camera we can defend, a line that holds, a light and mood turn we can articulate out loud, and a one-sentence defense that says what it is about, or is it a nice render of a room with a subject in it?\n\n**Self-check before the crit (answer these, then bring them):**\n\n1. What is the one-sentence defense, and does the final actually show it?\n2. Why is the camera where it is, why does the line hold, what is the light and mood turn, and why is the one thing it is not sure about on purpose?\n3. If asked to defend the whole thing in one minute, can we? Not the render, the decisions.\n\nIf all three answer, we have a final we can defend with in front of the room. If two answer, we work the third in the crit, and that work becomes the iteration evidence, the last piece of it. If the render is good but the defense is weak, we will spend the crit building the thinking, because that is the half that carries us out of the term and into whatever is next.",
      "reflect": "Here is a recap of today's lesson:\n\n- **What we did:** we finished a decided scene, with a one-sentence defense and an honesty about the one thing it is not sure about.\n- **What we learned:** 3D makes a good idea fast, not a weak idea good, and the good idea is the 60, and the fast is the 40, and the term is the story of learning to keep them apart.\n- **What we'd try next:** doing the read on a project that is not ours, to see if the decision we can defend in our own work is one we can find in someone else's.\n\n**The things worth not forgetting:**\n\n- Score all four dimensions: design range, decision quality, execution and presentation, iteration evidence. Name the one that is weakest, and the one that is strongest, and the one we would push next.\n- The term is the conversation. The conversation is the 40, and the 60 is the thinking we built, and the thinking is the thing that leaves with us.\n- The tool makes the good idea fast, and the good idea is ours, and the fast is just the fast. Keep the two apart.\n\nThe final is a letter, not a draft. Get it decided, and the term closes on a finish instead of a hurry!",
      "revisit": "**Every idea in the term is back, one last time, doing its final work.** Scale, the first brick, the human figure as the truth. Hierarchy, the focal point, the line, the cut. Direction, the studies, the whole system, not the parameter. Material, the response, the day and the night. Motivation, the journalist, not the tourist. The line, the melody, the point of reference. The turn, the key that changes, the when. Seven moves, seven weeks, and now they are all in one scene.\n\nThere is no next week, and that is the point. The term is the conversation, and the conversation is the 40, and the 60 is the thinking we built. The thinking is the thing that leaves with us, and the tool is the thing we leave behind, because the tool makes the good idea fast, and the good idea is ours. Go make something good, and let the tool make it fast, and keep the two apart.\n\n---\n\n*No question is a dumb one here. If we cannot say the one-sentence defense, that is not a failure, that is the work, and finding it is the whole win of the final. Ask, and we find the decision together. The term is ours, and it is finished.*"
    },
    "furtherReading": [
      {
        "book": "Framed Ink",
        "author": "Mateu-Mestre",
        "chapter": "Chapter 2, \"Drawing and Composing a Single Image (Basics),",
        "note": "** and **Chapter 3, \"The Visual Message within a Still Composition,\"** together, as the final checklist"
      }
    ],
    "order": 14
  }
],
  glossary: [
  {
    "id": "anatomy-active-passive-rule",
    "term": "Active/passive (squash/stretch) rule",
    "anchor": "active-passive-rule",
    "category": "Anatomy",
    "definition": "\"C\" curve = pinch/active (compressed) anatomical shape; \"S\" curve = stretch/passive (elongated) shape.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 1
  },
  {
    "id": "anatomy-sternocleidomastoid",
    "term": "Sternocleidomastoid",
    "anchor": "sternocleidomastoid",
    "category": "Anatomy",
    "definition": "Neck muscle that pulls the head forward and rotates it laterally; a baseball-bat shape from manubrium to base of skull.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 2
  },
  {
    "id": "anatomy-pectoralis-major",
    "term": "Pectoralis major",
    "anchor": "pectoralis-major",
    "category": "Anatomy",
    "definition": "Chest muscle pulling the arm forward and rotating it medially; a fan or goldfish-without-head shape on the rib cage.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 3
  },
  {
    "id": "anatomy-trapezius",
    "term": "Trapezius",
    "anchor": "trapezius",
    "category": "Anatomy",
    "definition": "Muscle rotating, lifting, and pulling the scapula; an upside-down dagger shape.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 4
  },
  {
    "id": "anatomy-deltoid",
    "term": "Deltoid",
    "anchor": "deltoid",
    "category": "Anatomy",
    "definition": "The three-headed shoulder muscle; an upside-down triangle from the side.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 5
  },
  {
    "id": "anatomy-rectus-abdominis",
    "term": "Rectus abdominis",
    "anchor": "rectus-abdominis",
    "category": "Anatomy",
    "definition": "The abdominal group flexing the trunk at the lumbar vertebrae; a bullet shape with eight sections.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 6
  },
  {
    "id": "anatomy-external-obliques",
    "term": "External obliques",
    "anchor": "external-obliques",
    "category": "Anatomy",
    "definition": "The side muscles bending the trunk laterally and twisting; two elongated rectangles supporting the rib cage over the pelvis.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 7
  },
  {
    "id": "anatomy-serratus-anterior",
    "term": "Serratus anterior",
    "anchor": "serratus-anterior",
    "category": "Anatomy",
    "definition": "Muscle sliding the scapula forward; an egg form with three tabs on the rib cage.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 8
  },
  {
    "id": "anatomy-erector-spinae",
    "term": "Erector spinae",
    "anchor": "erector-spinae",
    "category": "Anatomy",
    "definition": "The muscle group (sacrospinalis) extending the vertebral column and head; two corn dogs side-by-side.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 9
  },
  {
    "id": "anatomy-latissimus-dorsi",
    "term": "Latissimus dorsi",
    "anchor": "latissimus-dorsi",
    "category": "Anatomy",
    "definition": "Back muscle adducting, extending, and rotating the humerus; a bowl with small triangular arms.",
    "source": "Figure Drawing",
    "chapter": "Ch 04",
    "order": 10
  },
  {
    "id": "animation-straight-ahead",
    "term": "Straight ahead",
    "anchor": "straight-ahead",
    "category": "Animation",
    "definition": "The animation technique of working sequentially from the first Keyframe to the last, drawing each in-between as you go, as opposed to planning Key Poses first.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 10",
    "order": 11
  },
  {
    "id": "animation-pose-to-pose",
    "term": "Pose to pose",
    "anchor": "pose-to-pose",
    "category": "Animation",
    "definition": "The animation technique of planning and drawing the extreme Key Poses first, then filling in the in-between Frames to connect them.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 10",
    "order": 12
  },
  {
    "id": "animation-twelve-disney-principles",
    "term": "The twelve Disney principles",
    "anchor": "twelve-disney-principles",
    "category": "Animation",
    "definition": "A set of foundational animation guidelines (Squash and Stretch, Anticipation, Staging, Straight Ahead and Pose to Pose, Follow Through and Overlapping Action, Slow In and Slow Out, Arcs, Secondary Action, Timing, Exaggeration, Solid Drawing, Appeal) established by Disney animators.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 10",
    "order": 13
  },
  {
    "id": "animation-environment-light",
    "term": "Environment light",
    "anchor": "environment-light",
    "category": "Animation",
    "definition": "A Blender lamp type that simulates ambient illumination arriving from all directions, giving a uniform fill to the Scene (as of Blender 2.6x-2.7x).",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 11",
    "order": 14
  },
  {
    "id": "animation-ray-shadow",
    "term": "Ray Shadow",
    "anchor": "ray-shadow",
    "category": "Animation",
    "definition": "A light property (as of Blender 2.6x-2.7x) that uses ray-tracing to compute shadow edges, producing sharper shadow boundaries than the default sampled shadow method.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 11",
    "order": 15
  },
  {
    "id": "animation-falloff",
    "term": "Falloff",
    "anchor": "falloff",
    "category": "Animation",
    "definition": "The rate at which a light's intensity, a Force Field's strength, or a proportional-editing influence diminishes with distance from its source.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 11, Ch 13",
    "order": 16
  },
  {
    "id": "animation-matte-nodes",
    "term": "Matte nodes",
    "anchor": "matte-nodes",
    "category": "Animation",
    "definition": "A category of Compositor nodes (Invert, Blur, Glare, etc.) that create or modify alpha mattes to control the transparency of composite layers.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 12",
    "order": 17
  },
  {
    "id": "animation-field-weights",
    "term": "Field Weights",
    "anchor": "field-weights",
    "category": "Animation",
    "definition": "Per-field influence values on a particle system that control how strongly each Force Field (Wind, Gravity, etc.) acts on the particles.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 13",
    "order": 18
  },
  {
    "id": "animation-curve-guide",
    "term": "Curve Guide",
    "anchor": "curve-guide",
    "category": "Animation",
    "definition": "A particle constraint (as of Blender 2.6x-2.7x) that guides particles to follow along a Curve Object's path.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 13",
    "order": 19
  },
  {
    "id": "animation-lennard-jones",
    "term": "Lennard-Jones",
    "anchor": "lennard-jones",
    "category": "Animation",
    "definition": "A particle interaction model (as of Blender 2.6x-2.7x) computing short-range attraction and long-range repulsion between particles based on their distance, used for molecular-style simulation.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 13",
    "order": 20
  },
  {
    "id": "animation-freestyle",
    "term": "Freestyle",
    "anchor": "freestyle",
    "category": "Animation",
    "definition": "A line-rendering feature (as of Blender 2.6x-2.7x) that produces stylized edge outlines over rendered geometry, separating it from the background.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 14",
    "order": 21
  },
  {
    "id": "animation-antialiasing",
    "term": "Antialiasing",
    "anchor": "antialiasing",
    "category": "Animation",
    "definition": "A render quality technique that reduces jagged staircase edges (aliasing) at object boundaries by sampling multiple points per pixel.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 14",
    "order": 22
  },
  {
    "id": "animation-bpy-python-api",
    "term": "bpy (Python API)",
    "anchor": "bpy-python-api",
    "category": "Animation",
    "definition": "Blender's built-in Python module providing programmatic access to all Blender data blocks, properties, and operators.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 16",
    "order": 23
  },
  {
    "id": "animation-operator-bpy-ops",
    "term": "Operator (bpy.ops)",
    "anchor": "operator-bpy-ops",
    "category": "Animation",
    "definition": "A discrete Blender operation callable from the bpy.ops namespace (e.g. bpy.ops.mesh.primitive_cube_add), equivalent to a menu or panel command.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 16",
    "order": 24
  },
  {
    "id": "animation-mathutils",
    "term": "mathutils",
    "anchor": "mathutils",
    "category": "Animation",
    "definition": "Blender's Python module providing vector, matrix, and quaternion math utilities for scripting and add-on development.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 16",
    "order": 25
  },
  {
    "id": "animation-keyframe-insert",
    "term": "keyframe_insert",
    "anchor": "keyframe-insert",
    "category": "Animation",
    "definition": "The Python API parameter (id(keyframe_insert=True) or .keyframe_insert()) that records an animation Keyframe on a property at the current frame.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 16",
    "order": 26
  },
  {
    "id": "animation-fk-ik-switcher",
    "term": "FK/IK Switcher",
    "anchor": "fk-ik-switcher",
    "category": "Animation",
    "definition": "A Blender Add-on that toggles a Bone chain between Forward Kinematics and Inverse Kinematics control with a single click, simplifying the animation workflow.",
    "source": "Blender for Animation and Film-Based Production",
    "chapter": "Ch 16",
    "order": 27
  },
  {
    "id": "animation-timing",
    "term": "Timing",
    "anchor": "timing",
    "category": "Animation",
    "definition": "The number of Frames allotted to an action; slower timing (more Frames) reads as heavier or more deliberate, faster timing as lighter or snappier.",
    "source": "Animating with Blender",
    "chapter": "Ch 11",
    "order": 28
  },
  {
    "id": "animation-spacing",
    "term": "Spacing",
    "anchor": "spacing",
    "category": "Animation",
    "definition": "The distance an object travels between consecutive Keyframes; wider spacing reads as faster motion, tighter spacing as slower motion.",
    "source": "Animating with Blender",
    "chapter": "Ch 11",
    "order": 29
  },
  {
    "id": "animation-overlapping-action",
    "term": "Overlapping action",
    "anchor": "overlapping-action",
    "category": "Animation",
    "definition": "The principle that secondary parts of a body (hair, cloth, ears) continue moving slightly after the primary body has stopped, producing natural follow-through.",
    "source": "Animating with Blender",
    "chapter": "Ch 11",
    "order": 30
  },
  {
    "id": "animation-anticipation",
    "term": "Anticipation",
    "anchor": "anticipation",
    "category": "Animation",
    "definition": "A preparatory movement in the opposite direction before the main action, alerting the viewer to what is about to happen (e.g. crouching before a jump).",
    "source": "Animating with Blender",
    "chapter": "Ch 11",
    "order": 31
  },
  {
    "id": "animation-follow-through",
    "term": "Follow through",
    "anchor": "follow-through",
    "category": "Animation",
    "definition": "The continued motion of secondary body parts after the main action has stopped (e.g. a character's coat swishing after a turn).",
    "source": "Animating with Blender",
    "chapter": "Ch 11",
    "order": 32
  },
  {
    "id": "animation-arcs",
    "term": "Arcs",
    "anchor": "arcs",
    "category": "Animation",
    "definition": "The natural curved paths that moving objects and body parts trace in space, as opposed to straight-line motion; following arcs produces more organic animation.",
    "source": "Animating with Blender",
    "chapter": "Ch 11",
    "order": 33
  },
  {
    "id": "animation-blocking",
    "term": "Blocking",
    "anchor": "blocking",
    "category": "Animation",
    "definition": "The rough, pose-by-pose pass of an animation where key positions are placed and checked for composition, timing, and readability before in-betweening.",
    "source": "Animating with Blender",
    "chapter": "Ch 12",
    "order": 34
  },
  {
    "id": "animation-rough-sets",
    "term": "Rough sets",
    "anchor": "rough-sets",
    "category": "Animation",
    "definition": "A group of rough animation passes (blocking, overlap, follow-through) assembled and reviewed together before the final polish pass.",
    "source": "Animating with Blender",
    "chapter": "Ch 12",
    "order": 35
  },
  {
    "id": "animation-lip-sync",
    "term": "Lip sync",
    "anchor": "lip-sync",
    "category": "Animation",
    "definition": "Matching a character's mouth Shape Keys to the phonemes of recorded dialogue so the mouth movement reads as speech.",
    "source": "Animating with Blender",
    "chapter": "Ch 12",
    "order": 36
  },
  {
    "id": "animation-lip-sync-shapes",
    "term": "Lip sync shapes",
    "anchor": "lip-sync-shapes",
    "category": "Animation",
    "definition": "A standard set of mouth Shape Keys (AA, EE, OH, OO, F, L, etc.) representing the main phoneme positions used for lip-sync animation.",
    "source": "Animating with Blender",
    "chapter": "Ch 12",
    "order": 37
  },
  {
    "id": "animation-hook-character-design",
    "term": "Hook (character design)",
    "anchor": "hook-character-design",
    "category": "Animation",
    "definition": "A distinctive silhouette feature (e.g. a prominent nose, cape, or weapon) that makes a character instantly recognizable even as a small black shape.",
    "source": "Animating with Blender",
    "chapter": "Ch 12",
    "order": 38
  },
  {
    "id": "animation-turn-character-design",
    "term": "Turn (character design)",
    "anchor": "turn-character-design",
    "category": "Animation",
    "definition": "A 360-degree rotation of a character model used to verify that the design reads clearly and consistently from all angles.",
    "source": "Animating with Blender",
    "chapter": "Ch 12",
    "order": 39
  },
  {
    "id": "animation-fluids",
    "term": "Fluids",
    "anchor": "fluids",
    "category": "Animation",
    "definition": "A Blender simulation type (Mantaflow, as of Blender 2.4x, 2.46) that models liquid flow, splashing, and interaction using domain-based solvers.",
    "source": "Animating with Blender",
    "chapter": "Ch 13",
    "order": 40
  },
  {
    "id": "animation-fire-smoke",
    "term": "Fire/Smoke",
    "anchor": "fire-smoke",
    "category": "Animation",
    "definition": "A Mantaflow domain simulation (as of Blender 2.4x, 2.46) that computes buoyant fire and smoke particles rising and dispersing through a fluid domain.",
    "source": "Animating with Blender",
    "chapter": "Ch 13",
    "order": 41
  },
  {
    "id": "animation-strands",
    "term": "Strands",
    "anchor": "strands",
    "category": "Animation",
    "definition": "A particle-based hair and fur system (as of Blender 2.4x, 2.46) that grows individual curve strands from emitter surfaces to simulate hair or animal coats.",
    "source": "Animating with Blender",
    "chapter": "Ch 13",
    "order": 42
  },
  {
    "id": "arm-anatomy-rotator-cuff",
    "term": "Rotator cuff",
    "anchor": "rotator-cuff",
    "category": "Arm anatomy",
    "definition": "The group of scapular muscles (supraspinatus, infraspinatus, teres minor, teres major) that rotate the humerus and stabilize the shoulder.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 43
  },
  {
    "id": "arm-anatomy-supraspinatus",
    "term": "Supraspinatus",
    "anchor": "supraspinatus",
    "category": "Arm anatomy",
    "definition": "Rotator cuff muscle that abducts the arm and helps stabilize the shoulder.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 44
  },
  {
    "id": "arm-anatomy-infraspinatus",
    "term": "Infraspinatus",
    "anchor": "infraspinatus",
    "category": "Arm anatomy",
    "definition": "Rotator cuff muscle that laterally rotates the arm and helps stabilize the shoulder.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 45
  },
  {
    "id": "arm-anatomy-teres-minor",
    "term": "Teres minor",
    "anchor": "teres-minor",
    "category": "Arm anatomy",
    "definition": "Rotator cuff muscle that laterally rotates the arm and weakly abducts it.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 46
  },
  {
    "id": "arm-anatomy-teres-major",
    "term": "Teres major",
    "anchor": "teres-major",
    "category": "Arm anatomy",
    "definition": "Rotator cuff muscle that adducts and medially rotates the arm.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 47
  },
  {
    "id": "arm-anatomy-brachialis",
    "term": "Brachialis",
    "anchor": "brachialis",
    "category": "Arm anatomy",
    "definition": "Upper-arm muscle from about half-way down the humerus to the ulna, used to flex the forearm.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 48
  },
  {
    "id": "arm-anatomy-biceps-brachii",
    "term": "Biceps brachii",
    "anchor": "biceps-brachii",
    "category": "Arm anatomy",
    "definition": "Upper-arm muscle from the top of the arm/shoulder to the radius, used to flex and supinate the forearm.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 49
  },
  {
    "id": "arm-anatomy-triceps",
    "term": "Triceps",
    "anchor": "triceps",
    "category": "Arm anatomy",
    "definition": "The three-headed (lateral, medial, long head) muscle that extends the arm at the elbow.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 50
  },
  {
    "id": "arm-anatomy-radius",
    "term": "Radius",
    "anchor": "radius",
    "category": "Arm anatomy",
    "definition": "The forearm bone that rotates around the ulna; fat at the bottom, skinny at the top, on the thumb side of the wrist.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 51
  },
  {
    "id": "arm-anatomy-ulna",
    "term": "Ulna",
    "anchor": "ulna",
    "category": "Arm anatomy",
    "definition": "The static forearm bone, hinge-connected to the humerus; wider at the top, on the pinky-finger side of the wrist.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 52
  },
  {
    "id": "arm-anatomy-pronation",
    "term": "Pronation",
    "anchor": "pronation",
    "category": "Arm anatomy",
    "definition": "Rotation of the forearm in which the radius crosses over the ulna.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 53
  },
  {
    "id": "arm-anatomy-supination",
    "term": "Supination",
    "anchor": "supination",
    "category": "Arm anatomy",
    "definition": "Rotation of the forearm in which the radius and ulna lie parallel; more powerful than pronation.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 54
  },
  {
    "id": "arm-anatomy-forearm-flexors",
    "term": "Flexors (forearm)",
    "anchor": "forearm-flexors",
    "category": "Arm anatomy",
    "definition": "The three-muscle group on the medial half of the forearm, most active in gripping, making a fist, and pronation.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 55
  },
  {
    "id": "arm-anatomy-forearm-extensors",
    "term": "Extensors (forearm)",
    "anchor": "forearm-extensors",
    "category": "Arm anatomy",
    "definition": "The ovoid muscle group on the back of the forearm, active in extending the wrist and stabilizing the elbow.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 56
  },
  {
    "id": "arm-anatomy-forearm-ridge-muscles",
    "term": "Ridge muscles (forearm)",
    "anchor": "forearm-ridge-muscles",
    "category": "Arm anatomy",
    "definition": "The two-muscle group on the outside of the forearm that aids in flexing the forearm at the elbow.",
    "source": "Figure Drawing",
    "chapter": "Ch 05a",
    "order": 57
  },
  {
    "id": "blender-graphics-gui",
    "term": "Graphical User Interface (GUI)",
    "anchor": "gui",
    "category": "Blender Graphics",
    "definition": "The arrangement of windows or panels displayed on the computer Screen when the program is in operation.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Intro",
    "order": 58
  },
  {
    "id": "blender-graphics-blender-foundation-open-source",
    "term": "Blender Foundation / Open Source",
    "anchor": "blender-foundation-open-source",
    "category": "Blender Graphics",
    "definition": "Blender is maintained by the Blender Foundation and released as Open Source Software, free to be used for any purpose.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Intro",
    "order": 59
  },
  {
    "id": "blender-graphics-gpu",
    "term": "GPU (Graphics Processing Unit)",
    "anchor": "gpu",
    "category": "Blender Graphics",
    "definition": "The dedicated processor on the graphics card with its own RAM; renders faster than the CPU.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Intro",
    "order": 60
  },
  {
    "id": "blender-graphics-control",
    "term": "Control",
    "anchor": "control",
    "category": "Blender Graphics",
    "definition": "A designated area on the Computer Screen represented by an icon in the form of a button or bar, with or without text annotation.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Intro",
    "order": 61
  },
  {
    "id": "blender-graphics-splash-screen",
    "term": "Splash Screen",
    "anchor": "splash-screen",
    "category": "Blender Graphics",
    "definition": "The startup panel shown in the centre of the Screen on first launch, carrying Quick Setup options.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Intro",
    "order": 62
  },
  {
    "id": "blender-graphics-blender-dark",
    "term": "Blender Dark",
    "anchor": "blender-dark",
    "category": "Blender Graphics",
    "definition": "The default display Theme of Blender.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Intro",
    "order": 63
  },
  {
    "id": "blender-graphics-editor",
    "term": "Editor",
    "anchor": "editor",
    "category": "Blender Graphics",
    "definition": "One of the GUI panels (3D Viewport, Outliner, Properties, Timeline); each has an Editor Icon for changing its type.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01, Ch 02",
    "order": 64
  },
  {
    "id": "blender-graphics-object-mode-edit-mode",
    "term": "Object Mode / Edit Mode",
    "anchor": "object-mode-edit-mode",
    "category": "Blender Graphics",
    "definition": "The two principal 3D Viewport working modes: build the Scene as a whole vs. model an Object; toggled with Tab.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01, Ch 04, Ch 16a",
    "order": 65
  },
  {
    "id": "blender-graphics-vertex-edge-face",
    "term": "Vertex / Edge / Face",
    "anchor": "vertex-edge-face",
    "category": "Blender Graphics",
    "definition": "The mesh elements: corner intersection points, the joining lines, and the areas they surround.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01, Ch 05",
    "order": 66
  },
  {
    "id": "blender-graphics-primitive",
    "term": "Primitive",
    "anchor": "primitive",
    "category": "Blender Graphics",
    "definition": "A basic mesh building block (one of Blender's ten basic shapes) from which modeling begins.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01, Ch 04",
    "order": 67
  },
  {
    "id": "blender-graphics-suzanne",
    "term": "Suzanne",
    "anchor": "suzanne",
    "category": "Blender Graphics",
    "definition": "Blender's built-in monkey-head mesh, used as a test/benchmark model.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01",
    "order": 68
  },
  {
    "id": "blender-graphics-3d-viewport-editor-cursor",
    "term": "3D Viewport Editor Cursor",
    "anchor": "3d-viewport-editor-cursor",
    "category": "Blender Graphics",
    "definition": "The scene point at which new Objects are placed and manipulations occur; distinct from the mouse cursor.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01, Ch 04",
    "order": 69
  },
  {
    "id": "blender-graphics-last-operator-panel",
    "term": "Last Operator Panel",
    "anchor": "last-operator-panel",
    "category": "Blender Graphics",
    "definition": "The lower-left panel that reports the most recent operation and lets you fine-tune its values.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01, Ch 04, Ch 06",
    "order": 70
  },
  {
    "id": "blender-graphics-material",
    "term": "Material",
    "anchor": "material",
    "category": "Blender Graphics",
    "definition": "The set of properties describing how an Object behaves under light; in its basic sense the color applied to an Object; a Blender datablock.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01, Ch 04, Ch 09a",
    "order": 71
  },
  {
    "id": "blender-graphics-domain",
    "term": "Domain",
    "anchor": "domain",
    "category": "Blender Graphics",
    "definition": "The cubic volume that bounds a physics (smoke/fire) simulation.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01",
    "order": 72
  },
  {
    "id": "blender-graphics-keyframe",
    "term": "Keyframe",
    "anchor": "keyframe",
    "category": "Blender Graphics",
    "definition": "A recorded state of an Object (Location, Base Color, etc.) at a given Frame; Blender interpolates between them.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01, Ch 15a",
    "order": 73
  },
  {
    "id": "blender-graphics-camera-view",
    "term": "Camera View",
    "anchor": "camera-view",
    "category": "Blender Graphics",
    "definition": "The portion of the Scene the Camera captures, and the only part that renders.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 01, Ch 12",
    "order": 74
  },
  {
    "id": "blender-graphics-workspace",
    "term": "Workspace",
    "anchor": "workspace",
    "category": "Blender Graphics",
    "definition": "The arrangement of Editor panels for specific tasks; Blender's Editor-tabbed layouts (default Layout/General).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 02, Ch 15b",
    "order": 75
  },
  {
    "id": "blender-graphics-theme",
    "term": "Theme",
    "anchor": "theme",
    "category": "Blender Graphics",
    "definition": "The cosmetic appearance of the interface (e.g. Blender Dark); installable as XML or created in-app.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 02",
    "order": 76
  },
  {
    "id": "blender-graphics-object-properties-panel",
    "term": "Object Properties Panel",
    "anchor": "object-properties-panel",
    "category": "Blender Graphics",
    "definition": "The 3D Viewport panel (hidden by default, N key) for adjusting the selected Object's properties.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 02",
    "order": 77
  },
  {
    "id": "blender-graphics-tool-panel",
    "term": "Tool Panel",
    "anchor": "tool-panel",
    "category": "Blender Graphics",
    "definition": "The 3D Viewport panel (T key) housing the Tools/Widgets for the selected Object.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 02, Ch 06",
    "order": 78
  },
  {
    "id": "blender-graphics-properties-tabs",
    "term": "Properties (tabs)",
    "anchor": "properties-tabs",
    "category": "Blender Graphics",
    "definition": "The Properties Editor buttons (Output, Render, Scene, Object, Material, etc.) that gate different control sets.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 02",
    "order": 79
  },
  {
    "id": "blender-graphics-preferences-editor",
    "term": "Preferences Editor",
    "anchor": "preferences-editor",
    "category": "Blender Graphics",
    "definition": "The configuration panel for Blender's settings and Themes.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 02",
    "order": 80
  },
  {
    "id": "blender-graphics-scene",
    "term": "Scene",
    "anchor": "scene",
    "category": "Blender Graphics",
    "definition": "The 3D content (Objects, Characters, Lighting, Background) displayed against a background; the fundamental unit of a .blend file.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Intro, Ch 02",
    "order": 81
  },
  {
    "id": "blender-graphics-user-perspective-orthographic",
    "term": "User Perspective / Orthographic",
    "anchor": "user-perspective-orthographic",
    "category": "Blender Graphics",
    "definition": "The two Viewport projection modes, toggled with Num Pad 5.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 02",
    "order": 82
  },
  {
    "id": "blender-graphics-blend-file",
    "term": ".blend file",
    "anchor": "blend-file",
    "category": "Blender Graphics",
    "definition": "Blender's native file format; a package of data/elements that produces the on-screen display.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 03",
    "order": 83
  },
  {
    "id": "blender-graphics-file-extension",
    "term": "File extension / suffix",
    "anchor": "file-extension",
    "category": "Blender Graphics",
    "definition": "The trailing dot-name that tells the OS which application opens a file.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 03",
    "order": 84
  },
  {
    "id": "blender-graphics-file-browser-editor",
    "term": "File Browser Editor",
    "anchor": "file-browser-editor",
    "category": "Blender Graphics",
    "definition": "The in-Blender panel for navigating the computer's file system.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 03",
    "order": 85
  },
  {
    "id": "blender-graphics-append",
    "term": "Append",
    "anchor": "append",
    "category": "Blender Graphics",
    "definition": "Take a copy of data (Objects, materials, cameras, etc.) from an existing .blend into the current file.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 03",
    "order": 86
  },
  {
    "id": "blender-graphics-link",
    "term": "Link",
    "anchor": "link",
    "category": "Blender Graphics",
    "definition": "Reference data from another .blend so it stays in the original file and edits propagate.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 03",
    "order": 87
  },
  {
    "id": "blender-graphics-import",
    "term": "Import",
    "anchor": "import",
    "category": "Blender Graphics",
    "definition": "Bring an external 3D file format (Collada, OBJ, DXF, etc.) into the Scene.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 03",
    "order": 88
  },
  {
    "id": "blender-graphics-packing",
    "term": "Packing",
    "anchor": "packing",
    "category": "Blender Graphics",
    "definition": "Embedding external data (textures, sounds) into the .blend for portability.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 03",
    "order": 89
  },
  {
    "id": "blender-graphics-thumbnail",
    "term": "Thumbnail",
    "anchor": "thumbnail",
    "category": "Blender Graphics",
    "definition": "The image preview option in File Display Options.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 03",
    "order": 90
  },
  {
    "id": "blender-graphics-translate-scale-rotate",
    "term": "Translate / Scale / Rotate (G/S/R)",
    "anchor": "translate-scale-rotate",
    "category": "Blender Graphics",
    "definition": "The three Object-mode manipulations, each axis-lockable or numeric.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 04",
    "order": 91
  },
  {
    "id": "blender-graphics-manipulation-widget",
    "term": "Manipulation Widget",
    "anchor": "manipulation-widget",
    "category": "Blender Graphics",
    "definition": "The on-Object colored handles (Move/Rotate/Scale/Transform) from the Tool Panel.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 04",
    "order": 92
  },
  {
    "id": "blender-graphics-measure",
    "term": "Measure (ruler/protractor)",
    "anchor": "measure",
    "category": "Blender Graphics",
    "definition": "The Tool-Panel tool for linear and angular measurement.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 04",
    "order": 93
  },
  {
    "id": "blender-graphics-meta-shape-metaball",
    "term": "Meta Shape / Metaball",
    "anchor": "meta-shape-metaball",
    "category": "Blender Graphics",
    "definition": "Clay-like Objects that merge when brought close together.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 04",
    "order": 94
  },
  {
    "id": "blender-graphics-render-engine",
    "term": "Render Engine (Eevee / Cycles / Workbench)",
    "anchor": "render-engine",
    "category": "Blender Graphics",
    "definition": "The three engines that convert Blender 3D data into a 2D Image or Video file (Eevee the default).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 04, Ch 14",
    "order": 95
  },
  {
    "id": "blender-graphics-mesh-object",
    "term": "Mesh Object",
    "anchor": "mesh-object",
    "category": "Blender Graphics",
    "definition": "A model whose surfaces are formed by a mesh of Vertices, Edges, and Faces.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05",
    "order": 96
  },
  {
    "id": "blender-graphics-toggle-x-ray",
    "term": "Toggle X-Ray",
    "anchor": "toggle-x-ray",
    "category": "Blender Graphics",
    "definition": "The Header toggle that lets you see and select hidden geometry.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05",
    "order": 97
  },
  {
    "id": "blender-graphics-subdivide",
    "term": "Subdivide",
    "anchor": "subdivide",
    "category": "Blender Graphics",
    "definition": "The operation that inserts new Vertices at Edge midpoints (Number of Cuts).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05",
    "order": 98
  },
  {
    "id": "blender-graphics-origin",
    "term": "Origin (pivot point)",
    "anchor": "origin",
    "category": "Blender Graphics",
    "definition": "An Object's centre point about which rotation occurs; movable via Set Origin.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05",
    "order": 99
  },
  {
    "id": "blender-graphics-join-separate",
    "term": "Join / Separate",
    "anchor": "join-separate",
    "category": "Blender Graphics",
    "definition": "Merge Objects (Ctrl+J) or split them (P key: Selection / By Material / By Loose Parts).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05",
    "order": 100
  },
  {
    "id": "blender-graphics-vertex-group",
    "term": "Vertex Group",
    "anchor": "vertex-group",
    "category": "Blender Graphics",
    "definition": "A named set of Vertices that can be re-selected and manipulated as a unit; must match the Bone name for Armature control.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05, Ch 16a",
    "order": 101
  },
  {
    "id": "blender-graphics-weight-paint",
    "term": "Weight Paint",
    "anchor": "weight-paint",
    "category": "Blender Graphics",
    "definition": "The brush tool for painting (graduated) weights onto Vertices to assign them to a group or Bone.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05, Ch 16a",
    "order": 102
  },
  {
    "id": "blender-graphics-proportional-editing",
    "term": "Proportional Editing / Circle of Influence",
    "anchor": "proportional-editing",
    "category": "Blender Graphics",
    "definition": "Change surrounding Vertices within an adjustable radius (Falloff Type) when editing one selection.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05, Ch 08",
    "order": 103
  },
  {
    "id": "blender-graphics-inset-faces",
    "term": "Inset Faces",
    "anchor": "inset-faces",
    "category": "Blender Graphics",
    "definition": "Create new Faces inside a selection (Thickness/Depth).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05, Ch 06",
    "order": 104
  },
  {
    "id": "blender-graphics-parenting",
    "term": "Parenting (Child/Parent)",
    "anchor": "parenting",
    "category": "Blender Graphics",
    "definition": "A relationship so Objects move together without joining (Ctrl+P).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 05, Ch 16a",
    "order": 105
  },
  {
    "id": "blender-graphics-extrude",
    "term": "Extrude / Extrusion (E)",
    "anchor": "extrude",
    "category": "Blender Graphics",
    "definition": "Stretching a selection by duplicating and repositioning Vertices (optionally axis-constrained); for 3D Text, the Shape property giving depth.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06, Ch 17",
    "order": 106
  },
  {
    "id": "blender-graphics-extrude-region",
    "term": "Extrude Region",
    "anchor": "extrude-region",
    "category": "Blender Graphics",
    "definition": "The Tool-Panel tool (Widget) with Extrude to Cursor / Extrude Along Normal / Extrude Individual.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06",
    "order": 107
  },
  {
    "id": "blender-graphics-bevel",
    "term": "Bevel",
    "anchor": "bevel",
    "category": "Blender Graphics",
    "definition": "The tool/Modifier that bevels the Edges of a selected Face; for 3D Text, the Shape property rounding extruded edges.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06, Ch 07, Ch 17",
    "order": 108
  },
  {
    "id": "blender-graphics-loop-cut",
    "term": "Loop Cut",
    "anchor": "loop-cut",
    "category": "Blender Graphics",
    "definition": "The tool that creates new Edges and Edge Loops without selecting Vertices (Number of Cuts; Offset Edge Loop Cut).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06",
    "order": 109
  },
  {
    "id": "blender-graphics-knife",
    "term": "Knife",
    "anchor": "knife",
    "category": "Blender Graphics",
    "definition": "The tool that cuts new Vertices and Edges by dragging.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06",
    "order": 110
  },
  {
    "id": "blender-graphics-poly-build",
    "term": "Poly Build",
    "anchor": "poly-build",
    "category": "Blender Graphics",
    "definition": "The tool that creates Polygon Surfaces by clicking.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06",
    "order": 111
  },
  {
    "id": "blender-graphics-spin",
    "term": "Spin / Spin Profile",
    "anchor": "spin",
    "category": "Blender Graphics",
    "definition": "Rotating a selection about the 3D View Cursor; the cross-section line drawing spun to generate a solid (e.g. a wine glass).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06",
    "order": 112
  },
  {
    "id": "blender-graphics-spin-duplication",
    "term": "Spin Duplication",
    "anchor": "spin-duplication",
    "category": "Blender Graphics",
    "definition": "Duplicating an Object around a circular path (default twelve; Steps).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06",
    "order": 113
  },
  {
    "id": "blender-graphics-screw",
    "term": "Screw (Modifier)",
    "anchor": "screw",
    "category": "Blender Graphics",
    "definition": "The Modifier that supersedes the old Screw tool, producing a Screw effect.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06",
    "order": 114
  },
  {
    "id": "blender-graphics-smooth-randomize",
    "term": "Smooth / Randomize",
    "anchor": "smooth-randomize",
    "category": "Blender Graphics",
    "definition": "Smooth rounds mesh corners; Randomize displaces Vertices randomly.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06",
    "order": 115
  },
  {
    "id": "blender-graphics-edge-slide-shrink-fatten-shear-rip",
    "term": "Edge Slide / Shrink Fatten / Shear / Rip Region",
    "anchor": "edge-slide-shrink-fatten-shear-rip",
    "category": "Blender Graphics",
    "definition": "Tools to slide an Edge, expand/shrink a selection, shear via a handle, and translate (rip) a selected Edge.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 06",
    "order": 116
  },
  {
    "id": "blender-graphics-modifier",
    "term": "Modifier",
    "anchor": "modifier",
    "category": "Blender Graphics",
    "definition": "Pre-assembled code applying a process/algorithm to an Object; found in the Properties Editor Modifiers tab.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07",
    "order": 117
  },
  {
    "id": "blender-graphics-add-apply-modifier",
    "term": "Add / Apply (Modifier)",
    "anchor": "add-apply-modifier",
    "category": "Blender Graphics",
    "definition": "The two-stage workflow: Add the Modifier and adjust values, then Apply it to assign the data permanently (Object Mode only).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07",
    "order": 118
  },
  {
    "id": "blender-graphics-modifier-stack",
    "term": "Modifier Stack",
    "anchor": "modifier-stack",
    "category": "Blender Graphics",
    "definition": "The ordered list of Modifiers on an Object; the top takes precedence and is reorderable.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07",
    "order": 119
  },
  {
    "id": "blender-graphics-modifier-groups",
    "term": "Modifier groups",
    "anchor": "modifier-groups",
    "category": "Blender Graphics",
    "definition": "The four categories of the Add Modifier menu: Modify / Generate / Deform / Physics.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07",
    "order": 120
  },
  {
    "id": "blender-graphics-bevel-modifier",
    "term": "Bevel Modifier",
    "anchor": "bevel-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that bevels the Edges of a Face.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07",
    "order": 121
  },
  {
    "id": "blender-graphics-mirror-modifier",
    "term": "Mirror Modifier",
    "anchor": "mirror-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that mirrors an Object, default on the X Axis.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07, Ch 08",
    "order": 122
  },
  {
    "id": "blender-graphics-subdivision-surface-modifier",
    "term": "Subdivision Surface Modifier",
    "anchor": "subdivision-surface-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that adds smoothness (Viewport/Render Levels).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07",
    "order": 123
  },
  {
    "id": "blender-graphics-cast-modifier",
    "term": "Cast Modifier",
    "anchor": "cast-modifier",
    "category": "Blender Graphics",
    "definition": "A Deform-group Modifier deforming a primitive via Cast Type/Factor/Radius/Size.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07",
    "order": 124
  },
  {
    "id": "blender-graphics-displace-modifier",
    "term": "Displace Modifier",
    "anchor": "displace-modifier",
    "category": "Blender Graphics",
    "definition": "A Deform-group Modifier displacing an Object or Vertex Group (Midlevel/Strength); used for Texture Displacement.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07, Ch 10",
    "order": 125
  },
  {
    "id": "blender-graphics-physics-group-modifiers",
    "term": "Physics group Modifiers",
    "anchor": "physics-group-modifiers",
    "category": "Blender Graphics",
    "definition": "Modifiers that activate simulations (Particle System / Physics Simulation), auto-added to the stack.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 07",
    "order": 126
  },
  {
    "id": "blender-graphics-dupliverts",
    "term": "Dupliverts",
    "anchor": "dupliverts",
    "category": "Blender Graphics",
    "definition": "Duplicating at Vertices; instancing an Object at each Vertex of a secondary Object via the Instancing tab.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 08",
    "order": 127
  },
  {
    "id": "blender-graphics-sculpt-mode",
    "term": "Sculpt Mode / Sculpting Workspace",
    "anchor": "sculpt-mode",
    "category": "Blender Graphics",
    "definition": "The mode/workspace for adding surface detail by manipulating Mesh Vertices with a Brush.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 08",
    "order": 128
  },
  {
    "id": "blender-graphics-brush-draw-tool",
    "term": "Brush / Draw tool",
    "anchor": "brush-draw-tool",
    "category": "Blender Graphics",
    "definition": "The cursor circle (colored by Tool) and tool that pulls/pushes Vertices; effect set by Strength and Brush Radius.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 08",
    "order": 129
  },
  {
    "id": "blender-graphics-x-axis-mirror",
    "term": "X Axis Mirror",
    "anchor": "x-axis-mirror",
    "category": "Blender Graphics",
    "definition": "The Header toggle that mirrors Sculpt deformation (or Bone duplication) about a centerline.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 08, Ch 16a",
    "order": 130
  },
  {
    "id": "blender-graphics-ant-landscape-addon",
    "term": "A.N.T. Landscape Add-on",
    "anchor": "ant-landscape-addon",
    "category": "Blender Graphics",
    "definition": "The Blender Add-on that automates landscape generation.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 08",
    "order": 131
  },
  {
    "id": "blender-graphics-texture-surface",
    "term": "Texture (surface)",
    "anchor": "texture-surface",
    "category": "Blender Graphics",
    "definition": "The surface pattern of a Material; together Material + Texture describe an Object's appearance.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09a",
    "order": 132
  },
  {
    "id": "blender-graphics-material-slot",
    "term": "Material Slot",
    "anchor": "material-slot",
    "category": "Blender Graphics",
    "definition": "The box on an Object that holds a Material's properties and name; an Object may hold multiple slots.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09a",
    "order": 133
  },
  {
    "id": "blender-graphics-color-picker",
    "term": "Color Picker",
    "anchor": "color-picker",
    "category": "Blender Graphics",
    "definition": "The tool for setting the Material Color (Diffuse) value via RGB/HSV/Hex.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09a",
    "order": 134
  },
  {
    "id": "blender-graphics-material-display-lighting-affects",
    "term": "Material Display / Lighting Affects",
    "anchor": "material-display-lighting-affects",
    "category": "Blender Graphics",
    "definition": "The Viewport display modes and the option controlling whether the Material's response to light is shown.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09a",
    "order": 135
  },
  {
    "id": "blender-graphics-shader-editor",
    "term": "Shader Editor",
    "anchor": "shader-editor",
    "category": "Blender Graphics",
    "definition": "The Editor that hosts node-based Materials (Noodle connections between node sockets).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09a, Ch 09b",
    "order": 136
  },
  {
    "id": "blender-graphics-principled-bsdf-node",
    "term": "Principled BSDF node",
    "anchor": "principled-bsdf-node",
    "category": "Blender Graphics",
    "definition": "The standard physically-based shading node (Base Color/Metallic/Roughness/Specular/IOR/Transmission/Alpha) whose Surface output feeds the Output node.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09a, Ch 09b",
    "order": 137
  },
  {
    "id": "blender-graphics-color-management",
    "term": "Color Management",
    "anchor": "color-management",
    "category": "Blender Graphics",
    "definition": "The panel/settings governing how color values are interpreted and displayed.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09a",
    "order": 138
  },
  {
    "id": "blender-graphics-noodle",
    "term": "Noodle / Noodle Curving",
    "anchor": "noodle",
    "category": "Blender Graphics",
    "definition": "The curved connection lines in the Shader Editor that link node sockets to pass data.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09b",
    "order": 139
  },
  {
    "id": "blender-graphics-shader-node-menu",
    "term": "Shader Node (menu)",
    "anchor": "shader-node-menu",
    "category": "Blender Graphics",
    "definition": "The Add > Shader Node menu from which nodes are inserted.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09b",
    "order": 140
  },
  {
    "id": "blender-graphics-shading-workspace",
    "term": "Shading Workspace",
    "anchor": "shading-workspace",
    "category": "Blender Graphics",
    "definition": "The Layout Tab presenting the Shader Editor alongside the 3D Viewport.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09b",
    "order": 141
  },
  {
    "id": "blender-graphics-mixing-material",
    "term": "Mixing Material",
    "anchor": "mixing-material",
    "category": "Blender Graphics",
    "definition": "Combining two colors/shaders with a Mix/Mix Shader node.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09b",
    "order": 142
  },
  {
    "id": "blender-graphics-color-ramp-node",
    "term": "Color Ramp node",
    "anchor": "color-ramp-node",
    "category": "Blender Graphics",
    "definition": "A node mapping a value across a color gradient.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09b",
    "order": 143
  },
  {
    "id": "blender-graphics-vertex-paint",
    "term": "Vertex Paint",
    "anchor": "vertex-paint",
    "category": "Blender Graphics",
    "definition": "The Mode painting per-vertex color into the Mesh to modulate a Material.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 09b",
    "order": 144
  },
  {
    "id": "blender-graphics-procedural-texture",
    "term": "Procedural Texture",
    "anchor": "procedural-texture",
    "category": "Blender Graphics",
    "definition": "A Texture built into Blender, produced by code generating a pattern in accordance with mathematical formula (Brick, Magic, Voronoi).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 10",
    "order": 145
  },
  {
    "id": "blender-graphics-texture-node",
    "term": "Texture Node",
    "anchor": "texture-node",
    "category": "Blender Graphics",
    "definition": "The Node connected to the Principled BSDF Base Color socket that outputs a Texture to the surface.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 10",
    "order": 146
  },
  {
    "id": "blender-graphics-image-as-a-texture",
    "term": "Image as a Texture / Image Texture",
    "anchor": "image-as-a-texture",
    "category": "Blender Graphics",
    "definition": "Loading an image (JPEG/BMP/PNG) as a Texture assigned in Material Properties Base Color, Mapped onto the surface.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 10",
    "order": 147
  },
  {
    "id": "blender-graphics-texture-mapping",
    "term": "Texture Mapping",
    "anchor": "texture-mapping",
    "category": "Blender Graphics",
    "definition": "How a 2D Texture is configured on the surface of a 3D Object.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 10",
    "order": 148
  },
  {
    "id": "blender-graphics-unwrapping",
    "term": "Unwrapping",
    "anchor": "unwrapping",
    "category": "Blender Graphics",
    "definition": "Laying the Mesh surface flat (UV Editor); Unwrap options in the UV Editor Header UV Button.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 10",
    "order": 149
  },
  {
    "id": "blender-graphics-pbr-texture",
    "term": "PBR (Physically Based Rendering) Texture",
    "anchor": "pbr-texture",
    "category": "Blender Graphics",
    "definition": "A Texture workflow of Images (diffuse/normal/height/roughness) connected to the Principled BSDF to simulate surface lumps and bumps that react with light.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 10",
    "order": 150
  },
  {
    "id": "blender-graphics-texture-properties",
    "term": "Texture Properties / Texture Channel / Texture Cache",
    "anchor": "texture-properties",
    "category": "Blender Graphics",
    "definition": "The Properties Editor panel acting as a Texture repository; Channels of Type Image or Movie; the Cache forms a per-file Texture Library.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 10",
    "order": 151
  },
  {
    "id": "blender-graphics-texture-painting",
    "term": "Texture Painting",
    "anchor": "texture-painting",
    "category": "Blender Graphics",
    "definition": "Modifying a Mapped Texture by painting over it with a Material Color or another Texture.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 10",
    "order": 152
  },
  {
    "id": "blender-graphics-texture-displacement",
    "term": "Texture Displacement",
    "anchor": "texture-displacement",
    "category": "Blender Graphics",
    "definition": "Deforming the surface using the color shades of a Texture Image via the Displace Modifier, controlled by Midlevel/Strength.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 10",
    "order": 153
  },
  {
    "id": "blender-graphics-node-system",
    "term": "Node System",
    "anchor": "node-system",
    "category": "Blender Graphics",
    "definition": "A graphical representation of code processing blocks arranged/connected to produce effects.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 154
  },
  {
    "id": "blender-graphics-compositor",
    "term": "Compositor Editor / Compositing",
    "anchor": "compositor",
    "category": "Blender Graphics",
    "definition": "Combining a Rendered Scene with saved Images/elements into a Composite Image.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 155
  },
  {
    "id": "blender-graphics-render-layers-node",
    "term": "Render Layers Node / Composite Node",
    "anchor": "render-layers-node",
    "category": "Blender Graphics",
    "definition": "The default Compositor Node Tree endpoints.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 156
  },
  {
    "id": "blender-graphics-color-mix-node",
    "term": "Color-Mix Node / Distort > Scale Node",
    "anchor": "color-mix-node",
    "category": "Blender Graphics",
    "definition": "Nodes used to blend and fit a saved Image into the Rendered View.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 157
  },
  {
    "id": "blender-graphics-texture-node-editor",
    "term": "Texture Node Editor",
    "anchor": "texture-node-editor",
    "category": "Blender Graphics",
    "definition": "The Editor for Node-based Texture painting in Brush Mode.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 158
  },
  {
    "id": "blender-graphics-checker-texture-node",
    "term": "Checker Texture Node",
    "anchor": "checker-texture-node",
    "category": "Blender Graphics",
    "definition": "A Texture Node connected to an Output Node for Texture painting.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 159
  },
  {
    "id": "blender-graphics-geometry-node-editor",
    "term": "Geometry Node Editor / Geometry Node Workspace",
    "anchor": "geometry-node-editor",
    "category": "Blender Graphics",
    "definition": "The Editor/Workspace for Geometry Nodes (Spreadsheet, 3D Viewport, GNE, Outliner, Properties).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 160
  },
  {
    "id": "blender-graphics-group-input-output",
    "term": "Group Input / Group Output Node",
    "anchor": "group-input-output",
    "category": "Blender Graphics",
    "definition": "The start/end of the Geometry Node Pipeline.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 161
  },
  {
    "id": "blender-graphics-geometry-instance-nodes",
    "term": "Transform / Point Instance / Point Scale Node",
    "anchor": "geometry-instance-nodes",
    "category": "Blender Graphics",
    "definition": "Geometry Nodes for displacement and Vertex-based instancing.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 162
  },
  {
    "id": "blender-graphics-alpha-blend",
    "term": "Alpha Blend",
    "anchor": "alpha-blend",
    "category": "Blender Graphics",
    "definition": "The Material blend mode (with Screen Space Reflections/Refraction) that makes a Material display as transparent; used for text transparency.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11, Ch 17",
    "order": 163
  },
  {
    "id": "blender-graphics-volumetric-lighting",
    "term": "Volumetric Lighting",
    "anchor": "volumetric-lighting",
    "category": "Blender Graphics",
    "definition": "Scattering light through a defined volume for beam, mist, and fog effects.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11, Ch 12",
    "order": 164
  },
  {
    "id": "blender-graphics-principled-volume-node",
    "term": "Principled Volume Node / Density",
    "anchor": "principled-volume-node",
    "category": "Blender Graphics",
    "definition": "The volume Shader Node and its key value for Volumetric Lighting.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 11",
    "order": 165
  },
  {
    "id": "blender-graphics-scene-lighting",
    "term": "Scene Lighting",
    "anchor": "scene-lighting",
    "category": "Blender Graphics",
    "definition": "The illumination (Lights) that creates the mood of a Scene; effective only in Rendered Viewport Shading.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 12",
    "order": 166
  },
  {
    "id": "blender-graphics-light-types",
    "term": "Light Types (Point / Sun / Spot / Area)",
    "anchor": "light-types",
    "category": "Blender Graphics",
    "definition": "The four Light types set in the Light Tab.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 12",
    "order": 167
  },
  {
    "id": "blender-graphics-camera-settings",
    "term": "Camera Settings",
    "anchor": "camera-settings",
    "category": "Blender Graphics",
    "definition": "The Object Data Properties tabs for the selected Camera (Lens, Depth of Field, Aperture, Safe Area, Background Image, Viewport Display).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 12",
    "order": 168
  },
  {
    "id": "blender-graphics-camera-switching",
    "term": "Camera Switching",
    "anchor": "camera-switching",
    "category": "Blender Graphics",
    "definition": "Changing the active Camera during Animation via bound Markers.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 12",
    "order": 169
  },
  {
    "id": "blender-graphics-marker-bind-camera",
    "term": "Marker / Bind Camera to Marker",
    "anchor": "marker-bind-camera",
    "category": "Blender Graphics",
    "definition": "The Timeline marker and Ctrl+B binding that drive Camera switching.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 12",
    "order": 170
  },
  {
    "id": "blender-graphics-camera-tracking",
    "term": "Camera Tracking",
    "anchor": "camera-tracking",
    "category": "Blender Graphics",
    "definition": "Imitating real Camera motion by plotting multiple video points onto the 3D Camera.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 12",
    "order": 171
  },
  {
    "id": "blender-graphics-basic-lighting-arrangement",
    "term": "Basic Lighting Arrangement",
    "anchor": "basic-lighting-arrangement",
    "category": "Blender Graphics",
    "definition": "Using multiple Lights to create mood and control shadows.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 12",
    "order": 172
  },
  {
    "id": "blender-graphics-world-background",
    "term": "World Background / HDRI Map / Environment Texture",
    "anchor": "world-background",
    "category": "Blender Graphics",
    "definition": "The ambient background light and high-dynamic-range Images that affect Material display.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 12",
    "order": 173
  },
  {
    "id": "blender-graphics-reference-image",
    "term": "Reference Image / Images as Planes",
    "anchor": "reference-image",
    "category": "Blender Graphics",
    "definition": "Non-rendering tracing templates vs. rendering Image-Planes.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 12",
    "order": 174
  },
  {
    "id": "blender-graphics-viewport-shading",
    "term": "Viewport Shading",
    "anchor": "viewport-shading",
    "category": "Blender Graphics",
    "definition": "How the View in an Editor (the Viewport) is displayed.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 175
  },
  {
    "id": "blender-graphics-wireframe-x-ray",
    "term": "Wireframe / X-Ray",
    "anchor": "wireframe-x-ray",
    "category": "Blender Graphics",
    "definition": "Mesh display with see-through Mesh detail.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 176
  },
  {
    "id": "blender-graphics-solid-viewport-shading",
    "term": "Solid Viewport Shading",
    "anchor": "solid-viewport-shading",
    "category": "Blender Graphics",
    "definition": "The default modeling display.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 177
  },
  {
    "id": "blender-graphics-studio-matcap-flat-lighting",
    "term": "Studio / MatCap / Flat Lighting",
    "anchor": "studio-matcap-flat-lighting",
    "category": "Blender Graphics",
    "definition": "The three Solid lighting methods, independent of Scene Lamps.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 178
  },
  {
    "id": "blender-graphics-color-display-options",
    "term": "Color Display Options",
    "anchor": "color-display-options",
    "category": "Blender Graphics",
    "definition": "The six Solid color types (Material, Single Color, Random Color, Texture Color, Vertex Color).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 179
  },
  {
    "id": "blender-graphics-background-displays",
    "term": "Background Displays",
    "anchor": "background-displays",
    "category": "Blender Graphics",
    "definition": "The three Solid background options (Theme, World, Viewport).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 180
  },
  {
    "id": "blender-graphics-outline",
    "term": "Outline",
    "anchor": "outline",
    "category": "Blender Graphics",
    "definition": "Object outlines (orange when selected) in Solid shading.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 181
  },
  {
    "id": "blender-graphics-rendered-viewport-shading",
    "term": "Rendered Viewport Shading",
    "anchor": "rendered-viewport-shading",
    "category": "Blender Graphics",
    "definition": "A preview of the final Render, lit by the Scene Lamps.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 182
  },
  {
    "id": "blender-graphics-material-preview",
    "term": "Material Preview / Scene Lighting / Scene World",
    "anchor": "material-preview",
    "category": "Blender Graphics",
    "definition": "Quick preview under Lamp or HDRI/World illumination.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 183
  },
  {
    "id": "blender-graphics-world-settings",
    "term": "World Settings",
    "anchor": "world-settings",
    "category": "Blender Graphics",
    "definition": "The World Properties background color affecting the Viewport.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 184
  },
  {
    "id": "blender-graphics-render-passes",
    "term": "Simplified Viewport Shading / Render Passes",
    "anchor": "render-passes",
    "category": "Blender Graphics",
    "definition": "Isolated display of Render passes (Combined, Diffuse Color, Normal).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 13",
    "order": 185
  },
  {
    "id": "blender-graphics-render-properties",
    "term": "Render Properties / Output Properties",
    "anchor": "render-properties",
    "category": "Blender Graphics",
    "definition": "The two Properties Editor button groups for Render and output settings.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 14",
    "order": 186
  },
  {
    "id": "blender-graphics-samples",
    "term": "Samples (Viewport 16 / Render 64)",
    "anchor": "samples",
    "category": "Blender Graphics",
    "definition": "The number of Render passes for quality.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 14",
    "order": 187
  },
  {
    "id": "blender-graphics-format-tab",
    "term": "Format Tab",
    "anchor": "format-tab",
    "category": "Blender Graphics",
    "definition": "The image size, shape, and playback settings (Resolution, Percentage, Aspect, Frame Start-End-Step, Frame Rate).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 14",
    "order": 188
  },
  {
    "id": "blender-graphics-output-tab",
    "term": "Output Tab (File Format)",
    "anchor": "output-tab",
    "category": "Blender Graphics",
    "definition": "The save location and Image/Movie format selection.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 14",
    "order": 189
  },
  {
    "id": "blender-graphics-video-playback",
    "term": "Video Playback",
    "anchor": "video-playback",
    "category": "Blender Graphics",
    "definition": "Render > View Animation.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 14",
    "order": 190
  },
  {
    "id": "blender-graphics-video-codec",
    "term": "Video Codec",
    "anchor": "video-codec",
    "category": "Blender Graphics",
    "definition": "The routine that encodes the animation data for an output media.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 14",
    "order": 191
  },
  {
    "id": "blender-graphics-vse-render-farm",
    "term": "Video Sequence Editor (VSE) / Render Farm",
    "anchor": "vse-render-farm",
    "category": "Blender Graphics",
    "definition": "Combining Clips and sound into a movie; distributed rendering of long sequences.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 14, Ch 18",
    "order": 192
  },
  {
    "id": "blender-graphics-animation-frame-timeline",
    "term": "Animation / Frame / Timeline",
    "anchor": "animation-frame-timeline",
    "category": "Blender Graphics",
    "definition": "The illusion of motion, its captured Frames, and the time axis.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 193
  },
  {
    "id": "blender-graphics-interpolation",
    "term": "Interpolation (Bezier / Constant / Linear)",
    "anchor": "interpolation",
    "category": "Blender Graphics",
    "definition": "How Blender computes the in-between Frames.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 194
  },
  {
    "id": "blender-graphics-timeline-cursor",
    "term": "Timeline Cursor",
    "anchor": "timeline-cursor",
    "category": "Blender Graphics",
    "definition": "The vertical blue line marking the current Frame.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 195
  },
  {
    "id": "blender-graphics-scrubbing",
    "term": "Scrubbing",
    "anchor": "scrubbing",
    "category": "Blender Graphics",
    "definition": "Manually playing the animation by dragging the Cursor.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 196
  },
  {
    "id": "blender-graphics-automatic-keyframing",
    "term": "Automatic Keyframing",
    "anchor": "automatic-keyframing",
    "category": "Blender Graphics",
    "definition": "Auto-inserting Keyframes on Move/Scale/Rotate.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 197
  },
  {
    "id": "blender-graphics-keyframe-channels",
    "term": "Keyframe Channels",
    "anchor": "keyframe-channels",
    "category": "Blender Graphics",
    "definition": "The per-channel display of animated data (green = data, orange = no data).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 198
  },
  {
    "id": "blender-graphics-dope-sheet",
    "term": "Dope Sheet Editor",
    "anchor": "dope-sheet",
    "category": "Blender Graphics",
    "definition": "The Animation Editor with Show Sliders and per-channel controls.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 199
  },
  {
    "id": "blender-graphics-graph-editor",
    "term": "Graph Editor",
    "anchor": "graph-editor",
    "category": "Blender Graphics",
    "definition": "The editable graphical display of the animation curves.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 200
  },
  {
    "id": "blender-graphics-bezier-curve",
    "term": "Bezier Curve / Control Handle",
    "anchor": "bezier-curve",
    "category": "Blender Graphics",
    "definition": "The curve and its manipulable points at Keyframes.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 201
  },
  {
    "id": "blender-graphics-graph-channels",
    "term": "Graph Channels",
    "anchor": "graph-channels",
    "category": "Blender Graphics",
    "definition": "The list of animated actions in the Graph Editor.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 202
  },
  {
    "id": "blender-graphics-euler-rotation",
    "term": "Euler Rotation",
    "anchor": "euler-rotation",
    "category": "Blender Graphics",
    "definition": "A method of expressing 3D Rotation (global + local).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 203
  },
  {
    "id": "blender-graphics-graph-editor-cursor",
    "term": "Graph Editor Cursor",
    "anchor": "graph-editor-cursor",
    "category": "Blender Graphics",
    "definition": "The vertical (Frames) and horizontal (units) blue lines.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a",
    "order": 204
  },
  {
    "id": "blender-graphics-f-curve",
    "term": "F-Curve (Function Curve)",
    "anchor": "f-curve",
    "category": "Blender Graphics",
    "definition": "One animatable parameter shown as an editable curve; includes Rotation and F-Curves beyond basic transforms.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15a, Ch 15b",
    "order": 205
  },
  {
    "id": "blender-graphics-curve-properties-panel",
    "term": "Curve Properties Panel",
    "anchor": "curve-properties-panel",
    "category": "Blender Graphics",
    "definition": "The Graph Editor panel for a selected F-Curve.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15b",
    "order": 206
  },
  {
    "id": "blender-graphics-keying-set",
    "term": "Keying Set",
    "anchor": "keying-set",
    "category": "Blender Graphics",
    "definition": "A named collection of Keyframe data from multiple Objects/channels, controlled as one unit (Multi Object Keying Sets).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15b",
    "order": 207
  },
  {
    "id": "blender-graphics-animating-sound",
    "term": "Animating Sound",
    "anchor": "animating-sound",
    "category": "Blender Graphics",
    "definition": "Driving animation Keyframes from an audio clip.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15b",
    "order": 208
  },
  {
    "id": "blender-graphics-animation-window",
    "term": "Animation Window",
    "anchor": "animation-window",
    "category": "Blender Graphics",
    "definition": "A dedicated larger animation workspace (preset Animation layout).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15b",
    "order": 209
  },
  {
    "id": "blender-graphics-follow-path",
    "term": "Follow Path",
    "anchor": "follow-path",
    "category": "Blender Graphics",
    "definition": "The Action/Constraint that drives an Object's movement along a Curve.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 15b",
    "order": 210
  },
  {
    "id": "blender-graphics-armature",
    "term": "Armature",
    "anchor": "armature",
    "category": "Blender Graphics",
    "definition": "A non-renderable Object made of Bones that controls the movement of other Objects in animation.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 211
  },
  {
    "id": "blender-graphics-bone",
    "term": "Bone",
    "anchor": "bone",
    "category": "Blender Graphics",
    "definition": "The component of an Armature; has Tip, Body, Root; connected in a hierarchy.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 212
  },
  {
    "id": "blender-graphics-armature-rig",
    "term": "Armature Rig",
    "anchor": "armature-rig",
    "category": "Blender Graphics",
    "definition": "An Armature with multiple Bones arranged to fit a Model for Posing/Animation.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 213
  },
  {
    "id": "blender-graphics-child-parent-relationship",
    "term": "Child Parent Relationship",
    "anchor": "child-parent-relationship",
    "category": "Blender Graphics",
    "definition": "The hierarchical link where a Child Bone follows its Parent Bone.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 214
  },
  {
    "id": "blender-graphics-pose-mode",
    "term": "Pose Mode",
    "anchor": "pose-mode",
    "category": "Blender Graphics",
    "definition": "The Armature working Mode for Posing Bones (with Object/Edit Modes).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 215
  },
  {
    "id": "blender-graphics-armature-modifier",
    "term": "Armature Modifier",
    "anchor": "armature-modifier",
    "category": "Blender Graphics",
    "definition": "A Modifier that links a Mesh to an Armature (Bind To: Bone Envelope or Vertex Groups).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 216
  },
  {
    "id": "blender-graphics-bone-envelope",
    "term": "Bone Envelope / Field of Influence",
    "anchor": "bone-envelope",
    "category": "Blender Graphics",
    "definition": "The volume around a Bone that determines which Vertices are controlled.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 217
  },
  {
    "id": "blender-graphics-set-parent-to",
    "term": "Set Parent To",
    "anchor": "set-parent-to",
    "category": "Blender Graphics",
    "definition": "The menu (Ctrl+P) offering With Empty Groups / With Envelope Weights / With Automatic Weights.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 218
  },
  {
    "id": "blender-graphics-datablock",
    "term": "Datablock",
    "anchor": "datablock",
    "category": "Blender Graphics",
    "definition": "A block of information (Mesh, Material, etc.) that generates a display in the 3D Viewport.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a, Ch 19",
    "order": 219
  },
  {
    "id": "blender-graphics-make-human",
    "term": "Make Human",
    "anchor": "make-human",
    "category": "Blender Graphics",
    "definition": "A free Open Source human character modeling program used to generate the demonstration model.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 220
  },
  {
    "id": "blender-graphics-forked",
    "term": "Forked",
    "anchor": "forked",
    "category": "Blender Graphics",
    "definition": "The Bone-duplication option that mirrors Bones to the opposite side of an Armature (with X-Axis Mirror).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16a",
    "order": 221
  },
  {
    "id": "blender-graphics-ik-constraint",
    "term": "Inverse Kinematics (IK) Constraint",
    "anchor": "ik-constraint",
    "category": "Blender Graphics",
    "definition": "A Bone Constraint that allows a single Control Bone to drive a chain of Bones (Target, Chain Length).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 222
  },
  {
    "id": "blender-graphics-control-bone",
    "term": "Control Bone",
    "anchor": "control-bone",
    "category": "Blender Graphics",
    "definition": "A Bone disconnected from the chain, used to manipulate the IK chain or Pose a limb.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 223
  },
  {
    "id": "blender-graphics-chain-length",
    "term": "Chain Length",
    "anchor": "chain-length",
    "category": "Blender Graphics",
    "definition": "The IK parameter determining how many Bones in the chain are affected (0 = all).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 224
  },
  {
    "id": "blender-graphics-spline-ik",
    "term": "Spline IK Constraint",
    "anchor": "spline-ik",
    "category": "Blender Graphics",
    "definition": "A Bone Constraint that forces an Armature to follow a Curve shape (Spline Fittings, Target).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 225
  },
  {
    "id": "blender-graphics-hook",
    "term": "Hook",
    "anchor": "hook",
    "category": "Blender Graphics",
    "definition": "A non-renderable 3D Cross object assigned to a Curve Control Handle for manipulation (Ctrl+H).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 226
  },
  {
    "id": "blender-graphics-character-rigging",
    "term": "Character Rigging",
    "anchor": "character-rigging",
    "category": "Blender Graphics",
    "definition": "The process of creating an Armature for a Character Model and associating Bones with Mesh parts.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 227
  },
  {
    "id": "blender-graphics-low-poly",
    "term": "Low Poly",
    "anchor": "low-poly",
    "category": "Blender Graphics",
    "definition": "A mesh model with a minimum number of Vertices, Edges, and Faces.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 228
  },
  {
    "id": "blender-graphics-root-bone",
    "term": "Root Bone",
    "anchor": "root-bone",
    "category": "Blender Graphics",
    "definition": "The primary Control Bone for moving the entire Model in the Scene.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 229
  },
  {
    "id": "blender-graphics-automatic-weights",
    "term": "Automatic Weights",
    "anchor": "automatic-weights",
    "category": "Blender Graphics",
    "definition": "The Set Parent To option that auto-assigns Vertices to Vertex Groups.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 230
  },
  {
    "id": "blender-graphics-control-handles",
    "term": "Control Handles",
    "anchor": "control-handles",
    "category": "Blender Graphics",
    "definition": "The developed Control Bones (custom Object display) used for Posing a Character.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 231
  },
  {
    "id": "blender-graphics-walk-cycle",
    "term": "Walk Cycle",
    "anchor": "walk-cycle",
    "category": "Blender Graphics",
    "definition": "The animation of a Character walking on the spot, with the Base Control Handle following a Path.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 232
  },
  {
    "id": "blender-graphics-rigify",
    "term": "Rigify",
    "anchor": "rigify",
    "category": "Blender Graphics",
    "definition": "The Blender Add-on (Rigging: Rigify) providing pre-assembled Armatures.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 233
  },
  {
    "id": "blender-graphics-deform-bone-property",
    "term": "Deform (Bone property)",
    "anchor": "deform-bone-property",
    "category": "Blender Graphics",
    "definition": "The toggle that excludes a Bone from mesh deformation (used for Control Bones).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 16b",
    "order": 234
  },
  {
    "id": "blender-graphics-3d-text-object",
    "term": "3D Text Object",
    "anchor": "3d-text-object",
    "category": "Blender Graphics",
    "definition": "A distinct Object type in Blender for creating text in the Scene.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 17",
    "order": 235
  },
  {
    "id": "blender-graphics-bfont",
    "term": "Bfont",
    "anchor": "bfont",
    "category": "Blender Graphics",
    "definition": "The Blender Font slot in Object Data Properties; holds the font name and variants.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 17",
    "order": 236
  },
  {
    "id": "blender-graphics-font-slot",
    "term": "Font Slot",
    "anchor": "font-slot",
    "category": "Blender Graphics",
    "definition": "The four variants (Regular, Bold, Italic, Bold & Italic) selectable per Font.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 17",
    "order": 237
  },
  {
    "id": "blender-graphics-nurbspath",
    "term": "NurbsPath",
    "anchor": "nurbspath",
    "category": "Blender Graphics",
    "definition": "A type of Curve used as a Path for text placement.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 17",
    "order": 238
  },
  {
    "id": "blender-graphics-convert-to-mesh",
    "term": "Convert to Mesh",
    "anchor": "convert-to-mesh",
    "category": "Blender Graphics",
    "definition": "The Object Menu command that converts a Text Object to a Mesh Object.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 17",
    "order": 239
  },
  {
    "id": "blender-graphics-convert-to-curve",
    "term": "Convert to Curve",
    "anchor": "convert-to-curve",
    "category": "Blender Graphics",
    "definition": "The Object Menu command that converts a Text Object to a Curve Object.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 17",
    "order": 240
  },
  {
    "id": "blender-graphics-paste-file",
    "term": "Paste File",
    "anchor": "paste-file",
    "category": "Blender Graphics",
    "definition": "The option for loading a specific font file (.ttf) into the Bfont slot.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 17",
    "order": 241
  },
  {
    "id": "blender-graphics-movie",
    "term": "Movie",
    "anchor": "movie",
    "category": "Blender Graphics",
    "definition": "The final assembled video output from combined Video Files; originated from Moving Pictures.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 242
  },
  {
    "id": "blender-graphics-video-file-clip",
    "term": "Video File / Clip",
    "anchor": "video-file-clip",
    "category": "Blender Graphics",
    "definition": "A pre-rendered animation clip (.avi format); the source material for the Movie.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 243
  },
  {
    "id": "blender-graphics-channel-vse",
    "term": "Channel (VSE)",
    "anchor": "channel-vse",
    "category": "Blender Graphics",
    "definition": "A horizontal strip in the VSE where Video Files are placed; upper Channels take precedence.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 244
  },
  {
    "id": "blender-graphics-video-strip",
    "term": "Video Strip",
    "anchor": "video-strip",
    "category": "Blender Graphics",
    "definition": "A Video File in the VSE; can be cut (Soft/Hard) and modified.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 245
  },
  {
    "id": "blender-graphics-soft-cut",
    "term": "Soft Cut (K key)",
    "anchor": "soft-cut",
    "category": "Blender Graphics",
    "definition": "A VSE cut where both segments retain data for the other part.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 246
  },
  {
    "id": "blender-graphics-hard-cut",
    "term": "Hard Cut (Shift+K)",
    "anchor": "hard-cut",
    "category": "Blender Graphics",
    "definition": "A VSE cut where data for the other part is not retained.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 247
  },
  {
    "id": "blender-graphics-sound-file",
    "term": "Sound File",
    "anchor": "sound-file",
    "category": "Blender Graphics",
    "definition": "An audio file (.wav, MP3) added to the VSE to enhance the video.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 248
  },
  {
    "id": "blender-graphics-strip-modifier",
    "term": "Strip Modifier",
    "anchor": "strip-modifier",
    "category": "Blender Graphics",
    "definition": "A Modifier applied to a Video Strip in the VSE Properties (e.g. Color).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 249
  },
  {
    "id": "blender-graphics-avi-raw",
    "term": "AVI Raw",
    "anchor": "avi-raw",
    "category": "Blender Graphics",
    "definition": "The .avi video codec used for the Movie output (no conversion from .avi source clips).",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 250
  },
  {
    "id": "blender-graphics-pal",
    "term": "PAL",
    "anchor": "pal",
    "category": "Blender Graphics",
    "definition": "The TV frame-rate standard (25 frames per second) used for the Movie output.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 251
  },
  {
    "id": "blender-graphics-text-strip",
    "term": "Text Strip",
    "anchor": "text-strip",
    "category": "Blender Graphics",
    "definition": "A Text element added to the VSE for Title/credits.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 18",
    "order": 252
  },
  {
    "id": "blender-graphics-outliner",
    "term": "Outliner Editor",
    "anchor": "outliner",
    "category": "Blender Graphics",
    "definition": "The Blender editor that displays the Scene as a File Tree of Objects and Datablocks.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 19",
    "order": 253
  },
  {
    "id": "blender-graphics-collection",
    "term": "Collection",
    "anchor": "collection",
    "category": "Blender Graphics",
    "definition": "A named group of Objects arranged hierarchically like folders.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 19",
    "order": 254
  },
  {
    "id": "blender-graphics-scene-collection",
    "term": "Scene Collection",
    "anchor": "scene-collection",
    "category": "Blender Graphics",
    "definition": "The default top-level Collection containing all Objects in the Scene.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 19",
    "order": 255
  },
  {
    "id": "blender-graphics-view-layer",
    "term": "View Layer",
    "anchor": "view-layer",
    "category": "Blender Graphics",
    "definition": "The display of the Scene in the 3D Viewport; Collections are organized within this hierarchy.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 19",
    "order": 256
  },
  {
    "id": "blender-graphics-filter-menu",
    "term": "Filter Menu",
    "anchor": "filter-menu",
    "category": "Blender Graphics",
    "definition": "The Outliner search/filter for finding Objects by name or type.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 19",
    "order": 257
  },
  {
    "id": "blender-graphics-restriction-toggles",
    "term": "Restriction Toggles",
    "anchor": "restriction-toggles",
    "category": "Blender Graphics",
    "definition": "The eye/camera icons for hiding/showing Objects from Viewport/Render.",
    "source": "Blender Graphics Vol 1",
    "chapter": "Ch 19",
    "order": 258
  },
  {
    "id": "blender-graphics-cell-fracture",
    "term": "Cell Fracture",
    "anchor": "cell-fracture",
    "category": "Blender Graphics",
    "definition": "The Add-on Quick Effect that divides a Mesh into cell parts based on Point Source / Own Verts options.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 02",
    "order": 259
  },
  {
    "id": "blender-graphics-array-modifier",
    "term": "Array Modifier",
    "anchor": "array-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that duplicates an Object in a grid, path, or object-offset array.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 260
  },
  {
    "id": "blender-graphics-boolean-modifier",
    "term": "Boolean Modifier",
    "anchor": "boolean-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that cuts, unions, or intersects an Object with another (Difference/Union/Intersect).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 261
  },
  {
    "id": "blender-graphics-build-modifier",
    "term": "Build Modifier",
    "anchor": "build-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that assembles an Object incrementally (per Face/Vertex/Edge) over an animation.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 262
  },
  {
    "id": "blender-graphics-decimate-modifier",
    "term": "Decimate Modifier",
    "anchor": "decimate-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that reduces a Mesh Vertex/Edge/Face count by a Ratio (Collapse mode).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 263
  },
  {
    "id": "blender-graphics-edge-split-modifier",
    "term": "Edge Split Modifier",
    "anchor": "edge-split-modifier",
    "category": "Blender Graphics",
    "definition": "A Modifier that splits Vertices/Edges so selected geometry displays and renders independently.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 264
  },
  {
    "id": "blender-graphics-mask-modifier",
    "term": "Mask Modifier",
    "anchor": "mask-modifier",
    "category": "Blender Graphics",
    "definition": "A Modifier that limits an Object display to a region defined by a Vertex Group or a Mask Object.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 265
  },
  {
    "id": "blender-graphics-multiresolution-modifier",
    "term": "Multiresolution Modifier",
    "anchor": "multiresolution-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier adding scalable resolution levels to a Mesh, designed for use with the Sculpt Tool.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 266
  },
  {
    "id": "blender-graphics-remesh-modifier",
    "term": "Remesh Modifier",
    "anchor": "remesh-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that recalculates how a Mesh Surface is constructed for shapes lacking detail geometry.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 267
  },
  {
    "id": "blender-graphics-octree-depth",
    "term": "Octree Depth",
    "anchor": "octree-depth",
    "category": "Blender Graphics",
    "definition": "The Remesh detail parameter; 4 to 5 dramatically increases Vertices, 6 to 8 exponentially and slows the computer.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 268
  },
  {
    "id": "blender-graphics-solidify-modifier",
    "term": "Solidify Modifier",
    "anchor": "solidify-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that gives a surface a Thickness (and optional Offset/Even Thickness).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 269
  },
  {
    "id": "blender-graphics-skin-modifier",
    "term": "Skin Modifier",
    "anchor": "skin-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that extrudes a mesh skeleton of Vertices and Edges into a solid surface.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 270
  },
  {
    "id": "blender-graphics-triangulation-modifier",
    "term": "Triangulation Modifier",
    "anchor": "triangulation-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier ensuring consistent triangulation for rendering/export, placed above the Armature Modifier.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 271
  },
  {
    "id": "blender-graphics-weld-modifier",
    "term": "Weld Modifier",
    "anchor": "weld-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that merges close Vertices and welds seams, cleaning a Mesh surface.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 272
  },
  {
    "id": "blender-graphics-wireframe-modifier",
    "term": "Wireframe Modifier",
    "anchor": "wireframe-modifier",
    "category": "Blender Graphics",
    "definition": "A Generate-group Modifier that turns Faces into a wireframe of Edges with a set Thickness.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 273
  },
  {
    "id": "blender-graphics-auto-smooth",
    "term": "Auto Smooth",
    "anchor": "auto-smooth",
    "category": "Blender Graphics",
    "definition": "The Object Data Properties Normals option that cleans shading seams after Weld.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 274
  },
  {
    "id": "blender-graphics-baking",
    "term": "Baking",
    "anchor": "baking",
    "category": "Blender Graphics",
    "definition": "Pre-calculating and storing simulation or Render data to save time converting Viewport data into an Image or Video.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 03",
    "order": 275
  },
  {
    "id": "blender-graphics-lattice",
    "term": "Lattice",
    "anchor": "lattice",
    "category": "Blender Graphics",
    "definition": "A deformable grid Object whose points can be moved to warp a parented or Lattice-modified Object.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 04",
    "order": 276
  },
  {
    "id": "blender-graphics-lattice-modifier",
    "term": "Lattice Modifier",
    "anchor": "lattice-modifier",
    "category": "Blender Graphics",
    "definition": "A Deform-group Modifier that applies a Lattice Object deformation to the Mesh.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 04",
    "order": 277
  },
  {
    "id": "blender-graphics-curve-modifier",
    "term": "Curve Modifier",
    "anchor": "curve-modifier",
    "category": "Blender Graphics",
    "definition": "A Deform-group Modifier that deforms a Mesh to follow a Curve Object.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 04",
    "order": 278
  },
  {
    "id": "blender-graphics-shrinkwrap-modifier",
    "term": "Shrinkwrap Modifier",
    "anchor": "shrinkwrap-modifier",
    "category": "Blender Graphics",
    "definition": "A Deform-group Modifier that snaps a Mesh onto the surface of a Target Object.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 04",
    "order": 279
  },
  {
    "id": "blender-graphics-simple-deform-modifier",
    "term": "Simple Deform Modifier",
    "anchor": "simple-deform-modifier",
    "category": "Blender Graphics",
    "definition": "A Deform-group Modifier applying simple Twist/Bend/Taper deformations about an Axis.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 04",
    "order": 280
  },
  {
    "id": "blender-graphics-curve-object",
    "term": "Curve Object",
    "anchor": "curve-object",
    "category": "Blender Graphics",
    "definition": "A distinct Object type defined by a path of control points (Bezier/Path), not a Mesh of Faces.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 05",
    "order": 281
  },
  {
    "id": "blender-graphics-curve-bevel",
    "term": "Curve Bevel",
    "anchor": "curve-bevel",
    "category": "Blender Graphics",
    "definition": "The Curve Object Data property giving a Curve a 3D profile (extruded tube) along its path.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 05",
    "order": 282
  },
  {
    "id": "blender-graphics-constraint",
    "term": "Constraint",
    "anchor": "constraint",
    "category": "Blender Graphics",
    "definition": "A rule that limits or drives an Object transform relative to itself or another Object (Object Constraints tab).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 07",
    "order": 283
  },
  {
    "id": "blender-graphics-child-of-constraint",
    "term": "Child Of Constraint",
    "anchor": "child-of-constraint",
    "category": "Blender Graphics",
    "definition": "A Constraint making an Object follow the Parent Location/Rotation/Scale.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 07",
    "order": 284
  },
  {
    "id": "blender-graphics-copy-location-constraint",
    "term": "Copy Location Constraint",
    "anchor": "copy-location-constraint",
    "category": "Blender Graphics",
    "definition": "A Constraint that copies a Target Object Location, optionally inverted or offset.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 07",
    "order": 285
  },
  {
    "id": "blender-graphics-damped-track-constraint",
    "term": "Damped Track Constraint",
    "anchor": "damped-track-constraint",
    "category": "Blender Graphics",
    "definition": "A Constraint that aims an axis at a Target with a smooth Damped factor (vs. Track To snapping).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 07",
    "order": 286
  },
  {
    "id": "blender-graphics-track-to-constraint",
    "term": "Track To Constraint",
    "anchor": "track-to-constraint",
    "category": "Blender Graphics",
    "definition": "A Constraint forcing an Object axis to point at a Target Object.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 07",
    "order": 287
  },
  {
    "id": "blender-graphics-shape-key",
    "term": "Shape Key",
    "anchor": "shape-key",
    "category": "Blender Graphics",
    "definition": "A saved set of Vertex positions (Basis plus one or more shapes) blended by a Mix value to morph a Mesh.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 08",
    "order": 288
  },
  {
    "id": "blender-graphics-basis-shape-key",
    "term": "Basis Shape Key",
    "anchor": "basis-shape-key",
    "category": "Blender Graphics",
    "definition": "The default 100% shape of a Shape Key set that all other keys are measured against.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 08",
    "order": 289
  },
  {
    "id": "blender-graphics-action",
    "term": "Action",
    "anchor": "action",
    "category": "Blender Graphics",
    "definition": "A block of animation data (F-Curves, Keyframes) attached to an Object, editable in the Action/Dope Sheet editors.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 08",
    "order": 290
  },
  {
    "id": "blender-graphics-particle-system",
    "term": "Particle System",
    "anchor": "particle-system",
    "category": "Blender Graphics",
    "definition": "A Modifier that emits, displays, and simulates particles (Physics Type) from an Emitter Object.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 09a",
    "order": 291
  },
  {
    "id": "blender-graphics-particle-rendering",
    "term": "Particle Rendering",
    "anchor": "particle-rendering",
    "category": "Blender Graphics",
    "definition": "The setting controlling what renders for each particle (None/Halo/Mesh/Instance/Collection).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 09a",
    "order": 292
  },
  {
    "id": "blender-graphics-particle-velocity",
    "term": "Particle Velocity",
    "anchor": "particle-velocity",
    "category": "Blender Graphics",
    "definition": "The initial speed and direction (Normal/Factor) of emitted particles.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 09a",
    "order": 293
  },
  {
    "id": "blender-graphics-boids-particle-system",
    "term": "Boids Particle System",
    "anchor": "boids-particle-system",
    "category": "Blender Graphics",
    "definition": "A Particle System physics type simulating flocking/swarming behavior via Boid Brains.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 09b",
    "order": 294
  },
  {
    "id": "blender-graphics-boid-brain",
    "term": "Boid Brain",
    "anchor": "boid-brain",
    "category": "Blender Graphics",
    "definition": "The per-boid rule stack deciding how each boid steers (Separation/Alignment/Cohesion, Follow Leader, Goal).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 09b",
    "order": 295
  },
  {
    "id": "blender-graphics-separation-alignment-cohesion",
    "term": "Separation / Alignment / Cohesion",
    "anchor": "separation-alignment-cohesion",
    "category": "Blender Graphics",
    "definition": "The three core Boid Brain rules: avoid crowding, match neighbor headings, and steer toward the group center.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 09b",
    "order": 296
  },
  {
    "id": "blender-graphics-hair-particle-system",
    "term": "Hair Particle System",
    "anchor": "hair-particle-system",
    "category": "Blender Graphics",
    "definition": "A Particle System physics type growing strands (Length, Interpolation, Children) from a Mesh surface.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 09b",
    "order": 297
  },
  {
    "id": "blender-graphics-hair-dynamics",
    "term": "Hair Dynamics",
    "anchor": "hair-dynamics",
    "category": "Blender Graphics",
    "definition": "The physics option making hair strands react (Spring, Damping, Stiffness) to forces and motion.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 09b",
    "order": 298
  },
  {
    "id": "blender-graphics-keyed-physics",
    "term": "Keyed Physics",
    "anchor": "keyed-physics",
    "category": "Blender Graphics",
    "definition": "The particle physics mode migrating particles between Target Objects in sequence.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 09b",
    "order": 299
  },
  {
    "id": "blender-graphics-rigid-body-physics",
    "term": "Rigid Body Physics",
    "anchor": "rigid-body-physics",
    "category": "Blender Graphics",
    "definition": "The simulation type where Objects collide and react under Newtonian Physics (Active/Passive, Mass).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10a",
    "order": 300
  },
  {
    "id": "blender-graphics-collision",
    "term": "Collision",
    "anchor": "collision",
    "category": "Blender Graphics",
    "definition": "The Rigid Body property type defining an Object collision shape (Mesh, Convex Hull, Cube/Sphere/Cylinder).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10a",
    "order": 301
  },
  {
    "id": "blender-graphics-kinematic",
    "term": "Kinematic",
    "anchor": "kinematic",
    "category": "Blender Graphics",
    "definition": "The Rigid Body option making an Object follow its animation while still colliding with dynamics.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10a",
    "order": 302
  },
  {
    "id": "blender-graphics-force-field",
    "term": "Force Field",
    "anchor": "force-field",
    "category": "Blender Graphics",
    "definition": "An Object type (Wind, Gravity, Buoyancy, etc.) applying directional forces to physics simulations.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10a",
    "order": 303
  },
  {
    "id": "blender-graphics-cloth",
    "term": "Cloth",
    "anchor": "cloth",
    "category": "Blender Graphics",
    "definition": "The simulation type modeling fabric (Stiffness, Tension, Compression, Shear, Damping) on a Mesh.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10a",
    "order": 304
  },
  {
    "id": "blender-graphics-stiffness",
    "term": "Stiffness",
    "anchor": "stiffness",
    "category": "Blender Graphics",
    "definition": "The cloth parameter resisting deformation (Bending/Tension/Compression/Shear sub-values).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10a",
    "order": 305
  },
  {
    "id": "blender-graphics-friction",
    "term": "Friction",
    "anchor": "friction",
    "category": "Blender Graphics",
    "definition": "The collision/physics parameter resisting sliding contact between surfaces.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10a",
    "order": 306
  },
  {
    "id": "blender-graphics-soft-body",
    "term": "Soft Body",
    "anchor": "soft-body",
    "category": "Blender Graphics",
    "definition": "The simulation type where a deformable Object (Pressure, Stiffness, Damping) reacts like a soft mass.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10a",
    "order": 307
  },
  {
    "id": "blender-graphics-physics-cache",
    "term": "Physics Cache",
    "anchor": "physics-cache",
    "category": "Blender Graphics",
    "definition": "The stored simulation data (Cache Type Replay/Modular/All) written to a Cache Folder to free RAM.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10a",
    "order": 308
  },
  {
    "id": "blender-graphics-mantaflow",
    "term": "Mantaflow",
    "anchor": "mantaflow",
    "category": "Blender Graphics",
    "definition": "Blenders fluid simulation engine for liquids and smoke/gas.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10b",
    "order": 309
  },
  {
    "id": "blender-graphics-fluid-domain",
    "term": "Fluid Domain",
    "anchor": "fluid-domain",
    "category": "Blender Graphics",
    "definition": "The Volume Object containing a fluid/smoke simulation, set to Flow type Domain.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10b",
    "order": 310
  },
  {
    "id": "blender-graphics-inflow",
    "term": "Inflow",
    "anchor": "inflow",
    "category": "Blender Graphics",
    "definition": "The Flow type of a Fluid Object that continuously emits fluid (Geometry/Inflow behaviour).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10b",
    "order": 311
  },
  {
    "id": "blender-graphics-fluid-surface",
    "term": "Fluid Surface",
    "anchor": "fluid-surface",
    "category": "Blender Graphics",
    "definition": "The rendered surface of a liquid (Surface Thickness, Viscosity) inside the Domain.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10b",
    "order": 312
  },
  {
    "id": "blender-graphics-foam",
    "term": "Foam",
    "anchor": "foam",
    "category": "Blender Graphics",
    "definition": "The liquid surface effect (Foam/Threshold) creating bubbles at high-speed impact.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 10b",
    "order": 313
  },
  {
    "id": "blender-graphics-dynamic-paint",
    "term": "Dynamic Paint",
    "anchor": "dynamic-paint",
    "category": "Blender Graphics",
    "definition": "The system that paints (Surface/Generate) on a Mesh in real time as Objects pass over it.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 11",
    "order": 314
  },
  {
    "id": "blender-graphics-stencil",
    "term": "Stencil",
    "anchor": "stencil",
    "category": "Blender Graphics",
    "definition": "The Dynamic Paint option masking where paint can be applied (by Object or Material).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 11",
    "order": 315
  },
  {
    "id": "blender-graphics-geometry-node",
    "term": "Geometry Node",
    "anchor": "geometry-node",
    "category": "Blender Graphics",
    "definition": "A node in a Geometry Node Pipeline that processes geometry (points/edges/instances).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12a",
    "order": 316
  },
  {
    "id": "blender-graphics-geometry-node-modifier",
    "term": "Geometry Node Modifier",
    "anchor": "geometry-node-modifier",
    "category": "Blender Graphics",
    "definition": "The Modifier attaching a Geometry Node Pipeline to an Object (non-destructive procedural geometry).",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12a",
    "order": 317
  },
  {
    "id": "blender-graphics-convex-hull",
    "term": "Convex Hull",
    "anchor": "convex-hull",
    "category": "Blender Graphics",
    "definition": "A Geometry Node (and Collision shape) wrapping geometry in the tightest convex Mesh.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12a",
    "order": 318
  },
  {
    "id": "blender-graphics-join-geometry",
    "term": "Join Geometry",
    "anchor": "join-geometry",
    "category": "Blender Graphics",
    "definition": "A Geometry Node combining multiple geometry streams into one.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12a",
    "order": 319
  },
  {
    "id": "blender-graphics-object-info",
    "term": "Object Info",
    "anchor": "object-info",
    "category": "Blender Graphics",
    "definition": "A Geometry Node that gathers the geometry data of another Object into the Pipeline.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12a",
    "order": 320
  },
  {
    "id": "blender-graphics-curve-to-mesh",
    "term": "Curve to Mesh",
    "anchor": "curve-to-mesh",
    "category": "Blender Graphics",
    "definition": "A Geometry Node that converts a Curve (with profile) into a solid Mesh.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12a",
    "order": 321
  },
  {
    "id": "blender-graphics-instance-on-point",
    "term": "Instance on Point",
    "anchor": "instance-on-point",
    "category": "Blender Graphics",
    "definition": "A Geometry Node instancing Objects (from Object Info) onto each Point in a collection.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12b",
    "order": 322
  },
  {
    "id": "blender-graphics-distribute-points-on-faces",
    "term": "Distribute Points on Faces",
    "anchor": "distribute-points-on-faces",
    "category": "Blender Graphics",
    "definition": "A Geometry Node scattering Points over Faces (Density, Density Factor) for point-cloud/Field arrays.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12b",
    "order": 323
  },
  {
    "id": "blender-graphics-asset",
    "term": "Asset",
    "anchor": "asset",
    "category": "Blender Graphics",
    "definition": "A reusable, packaged 3D element (mesh, material, settings) placed in the Asset Browser and instantiated in the Scene, e.g. a Foliage Asset Pack.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12b",
    "order": 324
  },
  {
    "id": "blender-graphics-vector-math",
    "term": "Vector Math",
    "anchor": "vector-math",
    "category": "Blender Graphics",
    "definition": "A Geometry Node performing vector calculations (Add/Multiply/Sine) to shape arrays and Fields.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 12b",
    "order": 325
  },
  {
    "id": "blender-graphics-driver",
    "term": "Driver",
    "anchor": "driver",
    "category": "Blender Graphics",
    "definition": "An expression (Driver Expression) that computes and drives a property value from other data.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 13",
    "order": 326
  },
  {
    "id": "blender-graphics-nla-editor",
    "term": "NLA Editor",
    "anchor": "nla-editor",
    "category": "Blender Graphics",
    "definition": "The Non-Linear Animation Editor for layering, overlapping, and mixing Actions on Tracks.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 14",
    "order": 327
  },
  {
    "id": "blender-graphics-nla-strip",
    "term": "NLA Strip",
    "anchor": "nla-strip",
    "category": "Blender Graphics",
    "definition": "A placed segment of an Action on an NLA Track, with adjustable Position, Scale, Fade, and Influence.",
    "source": "Blender Graphics Vol 2",
    "chapter": "Ch 14",
    "order": 328
  },
  {
    "id": "blender-graphics-world-origin",
    "term": "World Origin",
    "anchor": "world-origin",
    "category": "Blender Graphics",
    "definition": "The fixed (0,0,0) point of the Scene, used as a reference for the 3D Cursor and Transform Pivot.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 03",
    "order": 329
  },
  {
    "id": "blender-graphics-empty",
    "term": "Empty",
    "anchor": "empty",
    "category": "Blender Graphics",
    "definition": "An invisible placeholder Object with no mesh data, used as a Parent, Constraint target, or transform controller.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 03",
    "order": 330
  },
  {
    "id": "blender-graphics-apply-all-transforms",
    "term": "Apply All Transforms",
    "anchor": "apply-all-transforms",
    "category": "Blender Graphics",
    "definition": "The Ctrl+A operation that bakes an Object's Location/Rotation/Scale into its mesh so the values reset to defaults.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 03",
    "order": 331
  },
  {
    "id": "blender-graphics-non-destructive-workflow",
    "term": "Non-destructive workflow",
    "anchor": "non-destructive-workflow",
    "category": "Blender Graphics",
    "definition": "Modeling with Modifiers and tools that can be re-adjusted or removed without permanently altering the base mesh.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 03",
    "order": 332
  },
  {
    "id": "blender-graphics-manifold",
    "term": "Manifold / watertight",
    "anchor": "manifold",
    "category": "Blender Graphics",
    "definition": "A mesh where every edge joins exactly two Faces (no holes or open boundaries), required for sculpting and simulation.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 03",
    "order": 333
  },
  {
    "id": "blender-graphics-edge-flow",
    "term": "Topology / Edge Flow",
    "anchor": "edge-flow",
    "category": "Blender Graphics",
    "definition": "The deliberate arrangement of Edge Loops to follow a model's forms and support clean deformation.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 04a",
    "order": 334
  },
  {
    "id": "blender-graphics-mark-sharp",
    "term": "Mark Sharp",
    "anchor": "mark-sharp",
    "category": "Blender Graphics",
    "definition": "The per-Edge/Vertex flag that forces a hard shading boundary (with Auto Smooth) to keep bevels crisp.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 04b",
    "order": 335
  },
  {
    "id": "blender-graphics-greeble",
    "term": "Greeble",
    "anchor": "greeble",
    "category": "Blender Graphics",
    "definition": "Small surface-detail features (panels, rivets, bolts) added to hard-surface models.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 04b",
    "order": 336
  },
  {
    "id": "blender-graphics-hard-surface",
    "term": "Hard-surface modeling",
    "anchor": "hard-surface",
    "category": "Blender Graphics",
    "definition": "The modeling discipline for mechanical and industrial forms built from clean, flat quads.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 04a",
    "order": 337
  },
  {
    "id": "blender-graphics-transform-orientation",
    "term": "Transform Orientation",
    "anchor": "transform-orientation",
    "category": "Blender Graphics",
    "definition": "The axis frame (Global/Local/Normal/Gimbal/View/Cursor) against which Object manipulations are measured.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 05",
    "order": 338
  },
  {
    "id": "blender-graphics-dyn-topo",
    "term": "Dyn Topo (Dynamic Topology)",
    "anchor": "dyn-topo",
    "category": "Blender Graphics",
    "definition": "The Sculpt option that adds and removes mesh density on the fly so detail follows the brush.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 06",
    "order": 339
  },
  {
    "id": "blender-graphics-retopology",
    "term": "Retopology",
    "anchor": "retopology",
    "category": "Blender Graphics",
    "definition": "Rebuilding clean, low-poly topology over a high-detail sculpt for animation and export.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 06",
    "order": 340
  },
  {
    "id": "blender-graphics-low-to-high-high-to-low",
    "term": "Low-to-high / High-to-low workflow",
    "anchor": "low-to-high-high-to-low",
    "category": "Blender Graphics",
    "definition": "Sculpting at high resolution then baking that detail back onto a clean low-poly mesh for use.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 06",
    "order": 341
  },
  {
    "id": "blender-graphics-elastic-deform",
    "term": "Elastic Deform brush",
    "anchor": "elastic-deform",
    "category": "Blender Graphics",
    "definition": "A Sculpt brush that stretches and relaxes geometry like elastic.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 06",
    "order": 342
  },
  {
    "id": "blender-graphics-snake-hook",
    "term": "Snake Hook brush",
    "anchor": "snake-hook",
    "category": "Blender Graphics",
    "definition": "A Sculpt brush that pulls a stroke into a coiled, snake-like shape.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 06",
    "order": 343
  },
  {
    "id": "blender-graphics-multi-plane-scrape",
    "term": "Multi-Plane Scrape brush",
    "anchor": "multi-plane-scrape",
    "category": "Blender Graphics",
    "definition": "A Sculpt brush that carves flat facets across multiple planes for a cut, gem-like look.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 06",
    "order": 344
  },
  {
    "id": "blender-graphics-clay",
    "term": "Clay brush",
    "anchor": "clay",
    "category": "Blender Graphics",
    "definition": "A Sculpt brush that adds material like sculpting clay to build up form.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 06",
    "order": 345
  },
  {
    "id": "blender-graphics-texel-density",
    "term": "Texel density",
    "anchor": "texel-density",
    "category": "Blender Graphics",
    "definition": "The ratio of texture resolution to model surface area, kept uniform across a model to avoid uneven detail.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07a",
    "order": 346
  },
  {
    "id": "blender-graphics-power-of-two",
    "term": "Power of two",
    "anchor": "power-of-two",
    "category": "Blender Graphics",
    "definition": "Texture dimensions sized to a power of two (512, 1024, 2048) for efficient GPU tiling and mipmapping.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07a",
    "order": 347
  },
  {
    "id": "blender-graphics-albedo",
    "term": "Albedo",
    "anchor": "albedo",
    "category": "Blender Graphics",
    "definition": "The diffuse Base Color of a Material, its true color without lighting or reflection.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07a",
    "order": 348
  },
  {
    "id": "blender-graphics-normal-map",
    "term": "Normal map",
    "anchor": "normal-map",
    "category": "Blender Graphics",
    "definition": "A map encoding surface normal detail to fake bumps and dents that react to light without added geometry.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07a",
    "order": 349
  },
  {
    "id": "blender-graphics-bump-map",
    "term": "Bump map",
    "anchor": "bump-map",
    "category": "Blender Graphics",
    "definition": "A height-based map driving a Bump node to perturb shading without changing geometry.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07a",
    "order": 350
  },
  {
    "id": "blender-graphics-ambient-occlusion",
    "term": "Ambient Occlusion (AO)",
    "anchor": "ambient-occlusion",
    "category": "Blender Graphics",
    "definition": "The shading effect that darkens crevices where surfaces meet to suggest contact shadow.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07a",
    "order": 351
  },
  {
    "id": "blender-graphics-uv-space",
    "term": "UV space / UV Editor",
    "anchor": "uv-space",
    "category": "Blender Graphics",
    "definition": "The flat 2D (0-1) space where a mesh's UV Map is laid out for texturing.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07a",
    "order": 352
  },
  {
    "id": "blender-graphics-uv-islands",
    "term": "UV island",
    "anchor": "uv-islands",
    "category": "Blender Graphics",
    "definition": "A connected patch of unwrapped Faces laid flat in UV space.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07a",
    "order": 353
  },
  {
    "id": "blender-graphics-uv-seams",
    "term": "UV seam",
    "anchor": "uv-seams",
    "category": "Blender Graphics",
    "definition": "An Edge marked to split the unwrap so the mesh lays flat without distortion.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07a",
    "order": 354
  },
  {
    "id": "blender-graphics-texture-bleed",
    "term": "Texture bleed",
    "anchor": "texture-bleed",
    "category": "Blender Graphics",
    "definition": "Adjacent UVs sampling each other's texels at seams, corrected by UV padding.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07b",
    "order": 355
  },
  {
    "id": "blender-graphics-generate-uvs",
    "term": "Generate UVs",
    "anchor": "generate-uvs",
    "category": "Blender Graphics",
    "definition": "The smart UV-project option that automatically generates UVs by angle and distance.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07b",
    "order": 356
  },
  {
    "id": "blender-graphics-uv-packing",
    "term": "UV packing",
    "anchor": "uv-packing",
    "category": "Blender Graphics",
    "definition": "Scaling and arranging UV islands within the 0-1 space (with padding) to maximize texture use.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07b",
    "order": 357
  },
  {
    "id": "blender-graphics-bake-type",
    "term": "Bake type",
    "anchor": "bake-type",
    "category": "Blender Graphics",
    "definition": "Pre-rendering (baking) a property (Diffuse/Normal/Roughness/AO) from a mesh into a texture.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07b",
    "order": 358
  },
  {
    "id": "blender-graphics-selected-to-active",
    "term": "Selected to Active",
    "anchor": "selected-to-active",
    "category": "Blender Graphics",
    "definition": "The bake mode that transfers detail from a selected high-poly object onto the active low-poly's UVs.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 07b",
    "order": 359
  },
  {
    "id": "blender-graphics-ping-pong-playback",
    "term": "Ping-pong playback",
    "anchor": "ping-pong-playback",
    "category": "Blender Graphics",
    "definition": "A playback mode that runs the animation forward then backward before repeating.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 08",
    "order": 360
  },
  {
    "id": "blender-graphics-end-frame",
    "term": "End frame",
    "anchor": "end-frame",
    "category": "Blender Graphics",
    "definition": "The Timeline's final frame number (default 250) that bounds an animation's range.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 08",
    "order": 361
  },
  {
    "id": "blender-graphics-vfx-sfx",
    "term": "SFX / VFX",
    "anchor": "vfx-sfx",
    "category": "Blender Graphics",
    "definition": "Special visual effects (particles, physics, volumetrics) that are not solid-appearing meshes.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 09",
    "order": 362
  },
  {
    "id": "blender-graphics-sprite-sheet",
    "term": "Sprite-sheet animation",
    "anchor": "sprite-sheet",
    "category": "Blender Graphics",
    "definition": "A cheaper effects technique animating a sequence of pre-drawn frames on a plane instead of heavy particles.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 09",
    "order": 363
  },
  {
    "id": "blender-graphics-npr",
    "term": "NPR (non-photorealistic rendering)",
    "anchor": "npr",
    "category": "Blender Graphics",
    "definition": "A stylized rendering style that deliberately departs from photorealism.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 10",
    "order": 364
  },
  {
    "id": "blender-graphics-denoising",
    "term": "Denoising",
    "anchor": "denoising",
    "category": "Blender Graphics",
    "definition": "The Cycles Render option that removes noise grain from a render.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 10",
    "order": 365
  },
  {
    "id": "blender-graphics-uncanny-valley",
    "term": "Uncanny valley",
    "anchor": "uncanny-valley",
    "category": "Blender Graphics",
    "definition": "The unease produced by near-human but imperfect rendered characters.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 10",
    "order": 366
  },
  {
    "id": "blender-graphics-mood-board",
    "term": "Mood board",
    "anchor": "mood-board",
    "category": "Blender Graphics",
    "definition": "A collage of reference images establishing the visual direction before production.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 11",
    "order": 367
  },
  {
    "id": "blender-graphics-concept-art",
    "term": "Concept art",
    "anchor": "concept-art",
    "category": "Blender Graphics",
    "definition": "Illustrations exploring a project's look and feel before 3D production.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 11",
    "order": 368
  },
  {
    "id": "blender-graphics-asset-list",
    "term": "Asset list",
    "anchor": "asset-list",
    "category": "Blender Graphics",
    "definition": "The enumerated set of meshes, textures, animations, and effects to build, used to divide work into milestones.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 11",
    "order": 369
  },
  {
    "id": "blender-graphics-grey-boxing",
    "term": "Grey boxing",
    "anchor": "grey-boxing",
    "category": "Blender Graphics",
    "definition": "Roughly blocking a Scene with simple primitives to establish scale and composition before detailing.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 11",
    "order": 370
  },
  {
    "id": "blender-graphics-vertical-slice",
    "term": "Vertical slice / MVP",
    "anchor": "vertical-slice",
    "category": "Blender Graphics",
    "definition": "A small but complete slice of the project (MVP) demonstrating the full pipeline end-to-end.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 11",
    "order": 371
  },
  {
    "id": "blender-graphics-level-of-detail",
    "term": "Level of Detail (LOD)",
    "anchor": "level-of-detail",
    "category": "Blender Graphics",
    "definition": "Lower-poly duplicates swapped in at runtime based on distance from the camera to save performance.",
    "source": "Blender 3D for Jobseekers",
    "chapter": "Ch 11",
    "order": 372
  },
  {
    "id": "blender-graphics-block-out",
    "term": "Block-out",
    "anchor": "block-out",
    "category": "Blender Graphics",
    "definition": "The rough, parent-first assembly of a model's major parts that establishes its overall proportions and silhouette before any detailing.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 01, Ch 07",
    "order": 373
  },
  {
    "id": "blender-graphics-box-modeling",
    "term": "Box modeling",
    "anchor": "box-modeling",
    "category": "Blender Graphics",
    "definition": "The hard-surface technique of starting from a cube/primitive and shaping it with loop cuts and edge/face moves rather than building up from many small pieces.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 01, Ch 02, Ch 07",
    "order": 374
  },
  {
    "id": "blender-graphics-solidification",
    "term": "Solidification",
    "anchor": "solidification",
    "category": "Blender Graphics",
    "definition": "The book's term for expanding a face loop along its normals with Alt+S to give a flat loop thickness (distinct from the Solidify Modifier).",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 02, Ch 08",
    "order": 375
  },
  {
    "id": "blender-graphics-3d-cursor",
    "term": "3D Cursor",
    "anchor": "3d-cursor",
    "category": "Blender Graphics",
    "definition": "The movable 3D anchor that sets new objects' spawn point and, set as the Transform Pivot, drives snapping, scaling, and mirroring about it.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 02, Ch 03, Ch 05",
    "order": 376
  },
  {
    "id": "blender-graphics-looptools",
    "term": "LoopTools",
    "anchor": "looptools",
    "category": "Blender Graphics",
    "definition": "The built-in add-on (W menu) providing Circle, Relax, and Space tools that round or evenly space a selection of edges/vertices.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 03, Ch 09",
    "order": 377
  },
  {
    "id": "blender-graphics-shear-tool",
    "term": "Shear tool",
    "anchor": "shear-tool",
    "category": "Blender Graphics",
    "definition": "The transform tool (T > Shear) that slants a selected surface, with the offset value adjusted in the Shear menu.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 05",
    "order": 378
  },
  {
    "id": "camera-effects-bloom",
    "term": "Bloom",
    "anchor": "bloom",
    "category": "Camera effects",
    "definition": "A camera imaging artifact of light fringing outward from very bright areas.",
    "source": "How to Render",
    "chapter": "Ch 10",
    "order": 379
  },
  {
    "id": "camera-effects-glints",
    "term": "Glints",
    "anchor": "glints",
    "category": "Camera effects",
    "definition": "Localized bloom-like blurring around angled highlights of a reflected light source.",
    "source": "How to Render",
    "chapter": "Ch 10",
    "order": 380
  },
  {
    "id": "camera-effects-depth-of-field",
    "term": "Depth of field",
    "anchor": "depth-of-field",
    "category": "Camera effects",
    "definition": "The distance between the farthest and nearest in-focus objects; shallow depth of field directs attention.",
    "source": "How to Render",
    "chapter": "Ch 10",
    "order": 381
  },
  {
    "id": "camera-effects-camera-to-view",
    "term": "Camera To View (Lock Camera to View)",
    "anchor": "camera-to-view",
    "category": "Camera effects",
    "definition": "Setting the camera to the current viewport (Ctrl+Shift+0) or locking it to the view while you orbit.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 03",
    "order": 382
  },
  {
    "id": "camera-effects-passepartout",
    "term": "Passepartout",
    "anchor": "passepartout",
    "category": "Camera effects",
    "definition": "The dark border and frame around the render in the viewport/compositor that previews the final image area.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 03",
    "order": 383
  },
  {
    "id": "camera-effects-f-stop",
    "term": "F-Stop",
    "anchor": "f-stop",
    "category": "Camera effects",
    "definition": "The camera aperture value that controls the amount of depth-of-field blur in EEVEE.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 07",
    "order": 384
  },
  {
    "id": "camera-effects-bloom-threshold-intensity",
    "term": "Bloom Threshold and Intensity",
    "anchor": "bloom-threshold-intensity",
    "category": "Camera effects",
    "definition": "The two EEVEE Bloom parameters: Threshold sets how bright an area must be to bloom, Intensity sets how much it spreads.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 07",
    "order": 385
  },
  {
    "id": "color-and-light-dinotopia",
    "term": "Dinotopia",
    "anchor": "dinotopia",
    "category": "Color and Light",
    "definition": "Gurney's illustrated science-fantasy world (a sunken continent) used throughout the book as a running example of applied color and light.",
    "source": "Color and Light",
    "chapter": "Ch 01",
    "order": 386
  },
  {
    "id": "color-and-light-gamut-mapping",
    "term": "Gamut mapping",
    "anchor": "gamut-mapping",
    "category": "Color and Light",
    "definition": "Fitting the full color space (color solid) into the limited gamut a painter's actual pigments can produce.",
    "source": "Color and Light",
    "chapter": "Ch 01",
    "order": 387
  },
  {
    "id": "color-and-light-imaginative-realism",
    "term": "Imaginative realism",
    "anchor": "imaginative-realism",
    "category": "Color and Light",
    "definition": "The practice of applying realistic observation of light and color to invented or fantastical subjects and worlds.",
    "source": "Color and Light",
    "chapter": "Ch 01",
    "order": 388
  },
  {
    "id": "color-and-light-broken-color",
    "term": "Broken color",
    "anchor": "broken-color",
    "category": "Color and Light",
    "definition": "Applying small, discrete dabs of distinct hues that read as a mixed color at a distance, increasing perceived light and vibrancy.",
    "source": "Color and Light",
    "chapter": "Ch 02",
    "order": 389
  },
  {
    "id": "color-and-light-camera-obscura",
    "term": "Camera obscura",
    "anchor": "camera-obscura",
    "category": "Color and Light",
    "definition": "A darkened enclosure with a small aperture or lens projecting an inverted image of the outside scene, associated with Vermeer; in animation layout, the device that first inspired artists to \"draw with light\", used as a full-circle metaphor for the evolution of layout.",
    "source": "Color and Light; Setting the Scene",
    "chapter": "Ch 02; Ch 09",
    "order": 390
  },
  {
    "id": "color-and-light-plein-air-painting",
    "term": "Plein-air painting",
    "anchor": "plein-air-painting",
    "category": "Color and Light",
    "definition": "Painting outdoors directly from the natural scene, made practical by the 1841 portable paint tube.",
    "source": "Color and Light",
    "chapter": "Ch 02",
    "order": 391
  },
  {
    "id": "color-and-light-glaze",
    "term": "Glaze",
    "anchor": "glaze",
    "category": "Color and Light",
    "definition": "A thin, transparent layer of paint over a dried underpainting so the lower layer's light modifies the upper color.",
    "source": "Color and Light",
    "chapter": "Ch 02",
    "order": 392
  },
  {
    "id": "color-and-light-hudson-river-school",
    "term": "Hudson River School",
    "anchor": "hudson-river-school",
    "category": "Color and Light",
    "definition": "The mid-19th-century American landscape movement (Cole, Church, Durand) known for grand, luminous, carefully valued views.",
    "source": "Color and Light",
    "chapter": "Ch 02",
    "order": 393
  },
  {
    "id": "color-and-light-pre-rafaelites",
    "term": "Pre-Raphaelite",
    "anchor": "pre-rafaelites",
    "category": "Color and Light",
    "definition": "The British movement (Millais and others) noted for direct observation and luminous glazing over an underpainting.",
    "source": "Color and Light",
    "chapter": "Ch 02",
    "order": 394
  },
  {
    "id": "color-and-light-inverse-square-law",
    "term": "Inverse square law",
    "anchor": "inverse-square-law",
    "category": "Color and Light",
    "definition": "Light intensity is inversely proportional to the square of the distance from the source (1/4 at 2x, 1/9 at 3x).",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 395
  },
  {
    "id": "color-and-light-lumens",
    "term": "Lumens",
    "anchor": "lumens",
    "category": "Color and Light",
    "definition": "The unit of total visible light output (luminous flux) of a source.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 396
  },
  {
    "id": "color-and-light-hardness-of-light",
    "term": "Hardness of light",
    "anchor": "hardness-of-light",
    "category": "Color and Light",
    "definition": "Determined by the apparent size of the source; small sharp source = hard light and sharp shadows, large area (diffuser, shade) = soft.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 397
  },
  {
    "id": "color-and-light-color-temperature",
    "term": "Color temperature",
    "anchor": "color-temperature",
    "category": "Color and Light",
    "definition": "The color cast of a light on the Kelvin scale; low values warm/orange, high values cool/blue.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 398
  },
  {
    "id": "color-and-light-spectral-power-distribution",
    "term": "Spectral power distribution",
    "anchor": "spectral-power-distribution",
    "category": "Color and Light",
    "definition": "A graph of how a source's energy is distributed across wavelengths, determining its perceived color.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 399
  },
  {
    "id": "color-and-light-incandescent-light",
    "term": "Incandescent light",
    "anchor": "incandescent-light",
    "category": "Color and Light",
    "definition": "Light from a heated tungsten filament; warm, continuous spectrum strong in orange/red, weak in blue.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 400
  },
  {
    "id": "color-and-light-fluorescent-light",
    "term": "Fluorescent light",
    "anchor": "fluorescent-light",
    "category": "Color and Light",
    "definition": "Light from an excited gas; spiky spectrum, typically yellow-green, making outdoor daylight look violet by comparison.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 401
  },
  {
    "id": "color-and-light-sodium-vapor-light",
    "term": "Sodium vapor light",
    "anchor": "sodium-vapor-light",
    "category": "Color and Light",
    "definition": "A monochromatic, sickly orange street-lamp light.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 402
  },
  {
    "id": "color-and-light-mercury-vapor-light",
    "term": "Mercury vapor light",
    "anchor": "mercury-vapor-light",
    "category": "Color and Light",
    "definition": "A cool, bluish street-lamp light that flattens and cools skin tones.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 403
  },
  {
    "id": "color-and-light-bioluminescence",
    "term": "Bioluminescence",
    "anchor": "bioluminescence",
    "category": "Color and Light",
    "definition": "Light produced by a chemical reaction in living organisms (fireflies, fish, squid, algae, foxfire).",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 404
  },
  {
    "id": "color-and-light-fluorescence",
    "term": "Fluorescence",
    "anchor": "fluorescence",
    "category": "Color and Light",
    "definition": "Light re-emitted by a material after it absorbs ultraviolet radiation, seen in amber, calcite, some minerals.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 405
  },
  {
    "id": "color-and-light-incandescence",
    "term": "Incandescence",
    "anchor": "incandescence",
    "category": "Color and Light",
    "definition": "Light produced by heat (a glowing filament or ember), distinct from luminescence.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 406
  },
  {
    "id": "color-and-light-hidden-light-source",
    "term": "Hidden light source",
    "anchor": "hidden-light-source",
    "category": "Color and Light",
    "definition": "A light whose origin is implied rather than shown, placed outside the frame, visible, or concealed to build mystery.",
    "source": "Color and Light",
    "chapter": "Ch 03",
    "order": 407
  },
  {
    "id": "color-and-light-form-principle",
    "term": "Form principle",
    "anchor": "form-principle",
    "category": "Color and Light",
    "definition": "Light on a smooth matte solid produces an orderly, predictable sequence of value steps (lit side, highlight, terminator, core shadow).",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 408
  },
  {
    "id": "color-and-light-modeling-factors",
    "term": "Modeling factors",
    "anchor": "modeling-factors",
    "category": "Color and Light",
    "definition": "Conditions (direct sun vs. overcast, source size, angle) that change the sharpness and range of the value steps without removing them.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 409
  },
  {
    "id": "color-and-light-checkerboard-illusion",
    "term": "Checkerboard illusion",
    "anchor": "checkerboard-illusion",
    "category": "Color and Light",
    "definition": "A perceptual effect where context cues override raw luminance, making equal patches read as different values.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 410
  },
  {
    "id": "color-and-light-lighting-ratio",
    "term": "Lighting ratio",
    "anchor": "lighting-ratio",
    "category": "Color and Light",
    "definition": "The brightness ratio of the lit side to the shadow side (from film); about two stops equals five value steps.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 411
  },
  {
    "id": "color-and-light-eyeball-on-the-ant",
    "term": "Eyeball on the ant",
    "anchor": "eyeball-on-the-ant",
    "category": "Color and Light",
    "definition": "A mental exercise to see that even the darkest shadow is filled with light, by imagining an observer at ground level looking up.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 412
  },
  {
    "id": "color-and-light-half-shadow",
    "term": "Half shadow",
    "anchor": "half-shadow",
    "category": "Color and Light",
    "definition": "A setup where a form is lit on one half with the rest in shadow, for drama (cf. the existing half-light entry).",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 413
  },
  {
    "id": "color-and-light-three-quarter-lighting",
    "term": "Three-quarter lighting",
    "anchor": "three-quarter-lighting",
    "category": "Color and Light",
    "definition": "Light from in front at about 45 degrees, illuminating both eyes; the most common portrait setup.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 414
  },
  {
    "id": "color-and-light-rembrandt-lighting",
    "term": "Rembrandt lighting",
    "anchor": "rembrandt-lighting",
    "category": "Color and Light",
    "definition": "A portrait setup producing a small triangle of light on the shadowed cheek.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 415
  },
  {
    "id": "color-and-light-broad-lighting",
    "term": "Broad lighting",
    "anchor": "broad-lighting",
    "category": "Color and Light",
    "definition": "A setup where the larger side of the face is turned toward the light.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 416
  },
  {
    "id": "color-and-light-short-lighting",
    "term": "Short lighting",
    "anchor": "short-lighting",
    "category": "Color and Light",
    "definition": "A setup where the smaller side of the face is turned toward the light.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 417
  },
  {
    "id": "color-and-light-key-light",
    "term": "Key light",
    "anchor": "key-light",
    "category": "Color and Light",
    "definition": "The main light source in a lighting setup.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 418
  },
  {
    "id": "color-and-light-fill-light",
    "term": "Fill light",
    "anchor": "fill-light",
    "category": "Color and Light",
    "definition": "An additional source that raises the shadow side and lowers contrast.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 419
  },
  {
    "id": "color-and-light-frontal-lighting",
    "term": "Frontal lighting",
    "anchor": "frontal-lighting",
    "category": "Color and Light",
    "definition": "Light from the viewer's direction, with very little shadow, emphasizing two-dimensional design.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 420
  },
  {
    "id": "color-and-light-edge-lighting",
    "term": "Edge lighting",
    "anchor": "edge-lighting",
    "category": "Color and Light",
    "definition": "Light from behind that grazes the side of a form, producing a rim light / kicker (cf. edge/rim light).",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 421
  },
  {
    "id": "color-and-light-contre-jour",
    "term": "Contre-jour",
    "anchor": "contre-jour",
    "category": "Color and Light",
    "definition": "Backlighting where the subject stands before a bright sky or doorway, blocking the light and silhouetting the front.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 422
  },
  {
    "id": "color-and-light-underlighting",
    "term": "Underlighting",
    "anchor": "underlighting",
    "category": "Color and Light",
    "definition": "Light from underneath (footlights, firelight), reading as magical or ominous because faces are normally lit from above.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 423
  },
  {
    "id": "color-and-light-upfacing-downfacing-planes",
    "term": "Upfacing/downfacing planes",
    "anchor": "upfacing-downfacing-planes",
    "category": "Color and Light",
    "definition": "In shadow, upward-facing planes read cool (blue, sky) and downward-facing planes read warm (ground).",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 424
  },
  {
    "id": "color-and-light-spotlighting",
    "term": "Spotlighting",
    "anchor": "spotlighting",
    "category": "Color and Light",
    "definition": "Theatrical concentration of light on a single form to fix attention.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 425
  },
  {
    "id": "color-and-light-eyelights",
    "term": "Eyelights",
    "anchor": "eyelights",
    "category": "Color and Light",
    "definition": "The small highlights in the eyes used in classical cinema to give a figure life and focus.",
    "source": "Color and Light",
    "chapter": "Ch 04",
    "order": 426
  },
  {
    "id": "color-and-light-hue",
    "term": "Hue",
    "anchor": "hue",
    "category": "Color and Light",
    "definition": "The attribute that distinguishes a color as red, yellow, green, blue, etc., independent of lightness or intensity.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 427
  },
  {
    "id": "color-and-light-chroma",
    "term": "Chroma",
    "anchor": "chroma",
    "category": "Color and Light",
    "definition": "The grayness or intensity of a hue; how far a color is from a neutral gray.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 428
  },
  {
    "id": "color-and-light-saturation",
    "term": "Saturation",
    "anchor": "saturation",
    "category": "Color and Light",
    "definition": "The purity of a light or color, the degree to which it is free of white or gray.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 429
  },
  {
    "id": "color-and-light-value",
    "term": "Value",
    "anchor": "value",
    "category": "Color and Light",
    "definition": "The lightness or darkness of a color relative to a neutral gray; the third dimension of the color solid.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 430
  },
  {
    "id": "color-and-light-color-space",
    "term": "Color space",
    "anchor": "color-space",
    "category": "Color and Light",
    "definition": "The three-dimensional model of hue, chroma, and value (color solid) in which every color has a position.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 431
  },
  {
    "id": "color-and-light-munsell-notation",
    "term": "Munsell notation",
    "anchor": "munsell-notation",
    "category": "Color and Light",
    "definition": "Albert Munsell's objective system locating a color by hue, chroma, and value (e.g., YR 7/2).",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 432
  },
  {
    "id": "color-and-light-peak-chroma-value",
    "term": "Peak chroma value",
    "anchor": "peak-chroma-value",
    "category": "Color and Light",
    "definition": "The value at which a given hue reaches maximum chroma (yellow light, blue dark, red middle).",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 433
  },
  {
    "id": "color-and-light-complements",
    "term": "Complements",
    "anchor": "complements",
    "category": "Color and Light",
    "definition": "Two hues directly opposite on the wheel that neutralize toward gray when mixed, or heighten each other by juxtaposition.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 434
  },
  {
    "id": "color-and-light-cmy",
    "term": "CMY",
    "anchor": "cmy",
    "category": "Color and Light",
    "definition": "Cyan, magenta, yellow - the secondary complements of RGB and the primaries of subtractive color in printing.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 435
  },
  {
    "id": "color-and-light-rgb",
    "term": "RGB",
    "anchor": "rgb",
    "category": "Color and Light",
    "definition": "Red, green, blue - the primaries of additive light; mixing them yields white.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 436
  },
  {
    "id": "color-and-light-roygbiv",
    "term": "ROYGBIV",
    "anchor": "roygbiv",
    "category": "Color and Light",
    "definition": "Newton's seven spectral colors (red, orange, yellow, green, blue, indigo, violet).",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 437
  },
  {
    "id": "color-and-light-traditional-color-wheel",
    "term": "Traditional color wheel",
    "anchor": "traditional-color-wheel",
    "category": "Color and Light",
    "definition": "The historical red-yellow-blue wheel with secondaries at the midpoints, criticized for uneven spacing and weak secondaries.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 438
  },
  {
    "id": "color-and-light-yurmby-wheel",
    "term": "Yurmby wheel",
    "anchor": "yurmby-wheel",
    "category": "Color and Light",
    "definition": "Gurney's universal wheel with six evenly spaced primaries (yellow, red, magenta, blue, cyan, green).",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 439
  },
  {
    "id": "color-and-light-local-color",
    "term": "Local color",
    "anchor": "local-color",
    "category": "Color and Light",
    "definition": "The color of a surface seen up close in white light, as a swatch held against it.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 440
  },
  {
    "id": "color-and-light-neutrals",
    "term": "Neutrals",
    "anchor": "neutrals",
    "category": "Color and Light",
    "definition": "The low-chroma grays that are the artist's best friend and the \"sauce\" of a scheme; there is no single gray.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 441
  },
  {
    "id": "color-and-light-vegetable-green",
    "term": "Vegetable green",
    "anchor": "vegetable-green",
    "category": "Color and Light",
    "definition": "A high-chroma yellow-green, the electric color of new spring leaves.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 442
  },
  {
    "id": "color-and-light-smuggling-reds",
    "term": "Smuggling reds",
    "anchor": "smuggling-reds",
    "category": "Color and Light",
    "definition": "Stapleton Kearns's technique of weaving a pink/reddish gray into greens to warm and vary them.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 443
  },
  {
    "id": "color-and-light-gradation",
    "term": "Gradation",
    "anchor": "gradation",
    "category": "Color and Light",
    "definition": "A smooth, glissando-like transition in hue, light-dark, or dull-saturated.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 444
  },
  {
    "id": "color-and-light-tint",
    "term": "Tint",
    "anchor": "tint",
    "category": "Color and Light",
    "definition": "A hue mixed with white (a pastel), or a thin transparent layer over white yielding high chroma.",
    "source": "Color and Light",
    "chapter": "Ch 05",
    "order": 445
  },
  {
    "id": "color-and-light-pigment",
    "term": "Pigment",
    "anchor": "pigment",
    "category": "Color and Light",
    "definition": "The colored solid that gives paint its hue and, suspended in a binder, its body.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 446
  },
  {
    "id": "color-and-light-binder",
    "term": "Binder",
    "anchor": "binder",
    "category": "Color and Light",
    "definition": "The medium that suspends the pigment and binds it to the support.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 447
  },
  {
    "id": "color-and-light-color-index-name",
    "term": "Color Index name",
    "anchor": "color-index-name",
    "category": "Color and Light",
    "definition": "The stable international identifier for a pigment (e.g., PB29, PR83) that appears on the tube.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 448
  },
  {
    "id": "color-and-light-ultramarine",
    "term": "Ultramarine",
    "anchor": "ultramarine",
    "category": "Color and Light",
    "definition": "A luminous blue, historically ground from lapis lazuli and now synthesized (PB29).",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 449
  },
  {
    "id": "color-and-light-tyrian-purple",
    "term": "Tyrian purple",
    "anchor": "tyrian-purple",
    "category": "Color and Light",
    "definition": "The ancient murex-shell dye, used here to illustrate a beautiful but fugitive, era-defining color.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 450
  },
  {
    "id": "color-and-light-dye",
    "term": "Dye",
    "anchor": "dye",
    "category": "Color and Light",
    "definition": "A colorant that dissolves (rather than being suspended), many of which are fugitive.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 451
  },
  {
    "id": "color-and-light-lightfastness",
    "term": "Lightfastness",
    "anchor": "lightfastness",
    "category": "Color and Light",
    "definition": "A pigment's resistance to fading under light.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 452
  },
  {
    "id": "color-and-light-astm-rating",
    "term": "ASTM rating",
    "anchor": "astm-rating",
    "category": "Color and Light",
    "definition": "The American Society for Testing and Materials lightfastness scale, ASTM I (best) to III (fades).",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 453
  },
  {
    "id": "color-and-light-fugitive",
    "term": "Fugitive",
    "anchor": "fugitive",
    "category": "Color and Light",
    "definition": "A color that fades or shifts under light, unsuitable for work meant to last.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 454
  },
  {
    "id": "color-and-light-masstone",
    "term": "Masstone",
    "anchor": "masstone",
    "category": "Color and Light",
    "definition": "A pigment's full-strength color straight from the tube.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 455
  },
  {
    "id": "color-and-light-undertone",
    "term": "Undertone",
    "anchor": "undertone",
    "category": "Color and Light",
    "definition": "The color a pigment shows when thinned or glazed, often differing from its masstone.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 456
  },
  {
    "id": "color-and-light-tinting-strength",
    "term": "Tinting strength",
    "anchor": "tinting-strength",
    "category": "Color and Light",
    "definition": "The power of a small amount of pigment to color a large amount of another; a strong tinter.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 457
  },
  {
    "id": "color-and-light-organic-inorganic-pigments",
    "term": "Organic/inorganic pigments",
    "anchor": "organic-inorganic-pigments",
    "category": "Color and Light",
    "definition": "Organic pigments tend to be transparent with strong tinting strength; inorganic ones tend to be opaque and chalky.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 458
  },
  {
    "id": "color-and-light-underpainting",
    "term": "Underpainting",
    "anchor": "underpainting",
    "category": "Color and Light",
    "definition": "A toned ground (imprimatura) laid over the prepared surface before the final paint.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 459
  },
  {
    "id": "color-and-light-sky-panel",
    "term": "Sky panel",
    "anchor": "sky-panel",
    "category": "Color and Light",
    "definition": "The sky painted first to set the tonal and color key of the picture.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 460
  },
  {
    "id": "color-and-light-oiling-out",
    "term": "Oiling out",
    "anchor": "oiling-out",
    "category": "Color and Light",
    "definition": "Wiping a passage with a rag and a little medium to lower value or saturation.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 461
  },
  {
    "id": "color-and-light-alla-prima",
    "term": "Alla prima",
    "anchor": "alla-prima",
    "category": "Color and Light",
    "definition": "Painting the final image wet-in-wet in one sitting.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 462
  },
  {
    "id": "color-and-light-limited-palette",
    "term": "Limited palette",
    "anchor": "limited-palette",
    "category": "Color and Light",
    "definition": "A small, compatible set of pigments used to keep color relations under control.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 463
  },
  {
    "id": "color-and-light-muddy-color",
    "term": "Muddy color",
    "anchor": "muddy-color",
    "category": "Color and Light",
    "definition": "Color that has gone flat and neutral from overmixing complementary hues.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 464
  },
  {
    "id": "color-and-light-fried-salad-disease",
    "term": "Fried salad disease",
    "anchor": "fried-salad-disease",
    "category": "Color and Light",
    "definition": "Gurney's term for a palette that has gone gray and dead from too many mixed greens.",
    "source": "Color and Light",
    "chapter": "Ch 06",
    "order": 465
  },
  {
    "id": "color-and-light-monochromatic-scheme",
    "term": "Monochromatic scheme",
    "anchor": "monochromatic-scheme",
    "category": "Color and Light",
    "definition": "A color scheme built from value or chroma variations of a single hue.",
    "source": "Color and Light",
    "chapter": "Ch 07",
    "order": 466
  },
  {
    "id": "color-and-light-grisaille",
    "term": "Grisaille",
    "anchor": "grisaille",
    "category": "Color and Light",
    "definition": "A painting or underpainting executed in gray tones.",
    "source": "Color and Light",
    "chapter": "Ch 07",
    "order": 467
  },
  {
    "id": "color-and-light-additive-mixture",
    "term": "Additive mixture",
    "anchor": "additive-mixture",
    "category": "Color and Light",
    "definition": "The mixing of colored lights, including the blending of colors in the eye rather than the mixing of pigments.",
    "source": "Color and Light",
    "chapter": "Ch 07",
    "order": 468
  },
  {
    "id": "color-and-light-complementary-shadow",
    "term": "Complementary shadow",
    "anchor": "complementary-shadow",
    "category": "Color and Light",
    "definition": "With two differently colored light sources on one form, the cast shadow of each source takes on the color of the other source.",
    "source": "Color and Light",
    "chapter": "Ch 07",
    "order": 469
  },
  {
    "id": "color-and-light-triadic-scheme",
    "term": "Triadic scheme",
    "anchor": "triadic-scheme",
    "category": "Color and Light",
    "definition": "A color scheme of three primaries whose gamut is a triangle.",
    "source": "Color and Light",
    "chapter": "Ch 07",
    "order": 470
  },
  {
    "id": "color-and-light-color-accent",
    "term": "Color accent",
    "anchor": "color-accent",
    "category": "Color and Light",
    "definition": "A small area of color that stands out from the rest of the composition, usually by being complementary or more intense in chroma.",
    "source": "Color and Light",
    "chapter": "Ch 07",
    "order": 471
  },
  {
    "id": "color-and-light-warm-and-cool-colors",
    "term": "Warm and cool colors",
    "anchor": "warm-and-cool-colors",
    "category": "Color and Light",
    "definition": "The two psychological color families: warm (orange, yellow, red) evokes fire and energy; cool (blue-green, blue, violet) evokes sky, shadow, and rest.",
    "source": "Color and Light",
    "chapter": "Ch 07",
    "order": 472
  },
  {
    "id": "color-and-light-color-string",
    "term": "Color string",
    "anchor": "color-string",
    "category": "Color and Light",
    "definition": "A series of prepared paint mixtures stepping a color note through values or chroma, laid out on the palette in order.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 473
  },
  {
    "id": "color-and-light-free-mixing",
    "term": "Free mixing",
    "anchor": "free-mixing",
    "category": "Color and Light",
    "definition": "The practice of making paint mixtures as needed during the painting process; also called the open palette.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 474
  },
  {
    "id": "color-and-light-premixing",
    "term": "Premixing",
    "anchor": "premixing",
    "category": "Color and Light",
    "definition": "The practice of preparing organized paint mixtures on the palette in advance of painting; also called setting a palette.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 475
  },
  {
    "id": "color-and-light-gamut",
    "term": "Gamut",
    "anchor": "gamut",
    "category": "Color and Light",
    "definition": "The full range of color notes mixable from a given set of primaries; also the region of the color wheel that represents that range.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 476
  },
  {
    "id": "color-and-light-saturation-cost",
    "term": "Saturation cost",
    "anchor": "saturation-cost",
    "category": "Color and Light",
    "definition": "The inevitable loss of chroma produced by mixing colors of different hues.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 477
  },
  {
    "id": "color-and-light-gamut-mask",
    "term": "Gamut mask",
    "anchor": "gamut-mask",
    "category": "Color and Light",
    "definition": "A shape (e.g. a triangle) laid over the color wheel to visualize and rotate the limits of a scheme's gamut.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 478
  },
  {
    "id": "color-and-light-atmospheric-triad",
    "term": "Atmospheric triad",
    "anchor": "atmospheric-triad",
    "category": "Color and Light",
    "definition": "A color scheme based on a triangular gamut that does not include neutral gray.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 479
  },
  {
    "id": "color-and-light-complementary-gamut",
    "term": "Complementary gamut",
    "anchor": "complementary-gamut",
    "category": "Color and Light",
    "definition": "A gamut shape defined by a pair of complementary hues, used as a mask to limit a color scheme.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 480
  },
  {
    "id": "color-and-light-color-script",
    "term": "Color script",
    "anchor": "color-script",
    "category": "Color and Light",
    "definition": "In sequential media (books, film), the planning of the limited color range within each sequence and the transitions between them; in animation, the complete color script built from colored key sketches (thumbnails drawn on script pages) that establishes the film's color plan, with an abstract color-continuity script developed afterward.",
    "source": "Color and Light; Imaginative Realism; Dream Worlds",
    "chapter": "Ch 08; Ch 03; Ch 09",
    "order": 481
  },
  {
    "id": "color-and-light-analogous-colors",
    "term": "Analogous colors",
    "anchor": "analogous-colors",
    "category": "Color and Light",
    "definition": "Hues that are adjacent to one another along the outer edge of the color wheel; naturally related and harmonious.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 482
  },
  {
    "id": "color-and-light-subjective-primaries",
    "term": "Subjective primaries",
    "anchor": "subjective-primaries",
    "category": "Color and Light",
    "definition": "The three (or more) starting colors chosen for a color scheme; they define its gamut and may be any hues at any chroma.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 483
  },
  {
    "id": "color-and-light-subjective-neutral",
    "term": "Subjective neutral",
    "anchor": "subjective-neutral",
    "category": "Color and Light",
    "definition": "The color note at the geometric center of a gamut; unlike a chroma-matched gray it is shifted toward a hue and acts as the scheme's color cast.",
    "source": "Color and Light",
    "chapter": "Ch 08",
    "order": 484
  },
  {
    "id": "color-and-light-dichromat",
    "term": "Dichromat",
    "anchor": "dichromat",
    "category": "Color and Light",
    "definition": "A person with color blindness, especially the inability to distinguish red from green.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 485
  },
  {
    "id": "color-and-light-tetrachromat",
    "term": "Tetrachromat",
    "anchor": "tetrachromat",
    "category": "Color and Light",
    "definition": "A person (or bird, insect) with four kinds of color receptors; some can respond to ultraviolet or infrared light.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 486
  },
  {
    "id": "color-and-light-trichromat",
    "term": "Trichromat",
    "anchor": "trichromat",
    "category": "Color and Light",
    "definition": "A person with normal human vision, having three kinds of color receptors.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 487
  },
  {
    "id": "color-and-light-rods-and-cones",
    "term": "Rods and cones",
    "anchor": "rods-and-cones",
    "category": "Color and Light",
    "definition": "Retinal receptors: rods are sensitive to low light but cannot discriminate color; cones handle color and fine detail.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 488
  },
  {
    "id": "color-and-light-purkinje-shift",
    "term": "Purkinje shift",
    "anchor": "purkinje-shift",
    "category": "Color and Light",
    "definition": "In very dim light, the rods (most sensitive to bluish wavelengths) cause greenish or bluish hues to appear lighter in value.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 489
  },
  {
    "id": "color-and-light-opponent-process",
    "term": "Opponent process theory",
    "anchor": "opponent-process",
    "category": "Color and Light",
    "definition": "A theory of vision holding that perceived colors result from interactions of red/green, blue/yellow, and black/white (brightness) signals.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 490
  },
  {
    "id": "color-and-light-color-constancy",
    "term": "Color constancy",
    "anchor": "color-constancy",
    "category": "Color and Light",
    "definition": "The perception of stability of local color despite changes in the overall color cast of the illumination.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 491
  },
  {
    "id": "color-and-light-successive-contrast",
    "term": "Successive contrast",
    "anchor": "successive-contrast",
    "category": "Color and Light",
    "definition": "The effect of an afterimage on the experience of a currently viewed subject.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 492
  },
  {
    "id": "color-and-light-simultaneous-contrast",
    "term": "Simultaneous contrast",
    "anchor": "simultaneous-contrast",
    "category": "Color and Light",
    "definition": "The phenomenon in which a color appears to change due to the effect of an adjacent color.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 493
  },
  {
    "id": "color-and-light-chromatic-adaptation",
    "term": "Chromatic adaptation",
    "anchor": "chromatic-adaptation",
    "category": "Color and Light",
    "definition": "The tendency of the visual system to adjust to a given color of illumination.",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 494
  },
  {
    "id": "color-and-light-where-what-streams",
    "term": "Where/what streams",
    "anchor": "where-what-streams",
    "category": "Color and Light",
    "definition": "The brain's two visual streams: the dorsal \"where\" stream (motion, spatial, action) and ventral \"what\" stream (object and color recognition).",
    "source": "Color and Light",
    "chapter": "Ch 09",
    "order": 495
  },
  {
    "id": "color-and-light-transmitted-light",
    "term": "Transmitted light",
    "anchor": "transmitted-light",
    "category": "Color and Light",
    "definition": "Light that has passed diffusely through a thin, translucent material, sometimes becoming richly colored.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 496
  },
  {
    "id": "color-and-light-color-zones-of-the-face",
    "term": "Color zones of the face",
    "anchor": "color-zones-of-the-face",
    "category": "Color and Light",
    "definition": "The complexion zones of a light-skinned face: golden forehead, reddish mid-face, bluish or greenish lower third.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 497
  },
  {
    "id": "color-and-light-caustics",
    "term": "Caustics",
    "anchor": "caustics",
    "category": "Color and Light",
    "definition": "Reflection or refraction of light by curved glass or water, projecting spots, arcs, or bands of light onto other surfaces.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 498
  },
  {
    "id": "color-and-light-specular-reflection",
    "term": "Specular reflection",
    "anchor": "specular-reflection",
    "category": "Color and Light",
    "definition": "The mirror-like behavior of shiny objects, reflecting light rays at the same relative angle they approached.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 499
  },
  {
    "id": "color-and-light-specular-highlight",
    "term": "Specular highlight",
    "anchor": "specular-highlight",
    "category": "Color and Light",
    "definition": "A reflection of the light source on a wet or shiny surface, defining sets of parallel planes on the form.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 500
  },
  {
    "id": "color-and-light-diffuse-reflection",
    "term": "Diffuse reflection",
    "anchor": "diffuse-reflection",
    "category": "Color and Light",
    "definition": "Light reflected irregularly from an uneven surface, as opposed to specular reflection.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 501
  },
  {
    "id": "color-and-light-annular-highlights",
    "term": "Annular highlights",
    "anchor": "annular-highlights",
    "category": "Color and Light",
    "definition": "Patterns of small specular highlights forming concentric rings around a light source or a principal highlight.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 502
  },
  {
    "id": "color-and-light-color-corona",
    "term": "Color corona",
    "anchor": "color-corona",
    "category": "Color and Light",
    "definition": "A region of brightly colored light surrounding an intense light source, such as a setting sun or streetlight, akin to a lens flare.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 503
  },
  {
    "id": "color-and-light-motion-blur",
    "term": "Motion blur",
    "anchor": "motion-blur",
    "category": "Color and Light",
    "definition": "Softening of edges that occurs when a form moves rapidly in front of a stationary camera.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 504
  },
  {
    "id": "color-and-light-speed-blur",
    "term": "Speed blur",
    "anchor": "speed-blur",
    "category": "Color and Light",
    "definition": "Softening of edges that occurs when the camera tracks along with a fast-moving object, blurring the background along the path.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 505
  },
  {
    "id": "color-and-light-clipping",
    "term": "Clipping",
    "anchor": "clipping",
    "category": "Color and Light",
    "definition": "In photography, loss of information because the photosensor cannot respond to relatively bright or dim light levels.",
    "source": "Color and Light",
    "chapter": "Ch 10",
    "order": 506
  },
  {
    "id": "color-and-light-rayleigh-scattering",
    "term": "Rayleigh scattering",
    "anchor": "rayleigh-scattering",
    "category": "Color and Light",
    "definition": "Scattering by small air molecules of more short (blue) than long (red) wavelengths, producing the blue color of the sky.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 507
  },
  {
    "id": "color-and-light-solar-glare",
    "term": "Solar glare",
    "anchor": "solar-glare",
    "category": "Color and Light",
    "definition": "The sky gradation governed by proximity to the sun; the sky lightens and warms toward the sun.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 508
  },
  {
    "id": "color-and-light-horizon-glow",
    "term": "Horizon glow",
    "anchor": "horizon-glow",
    "category": "Color and Light",
    "definition": "The sky gradation that depends on angle above the horizon; the sky generally lightens toward the horizon.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 509
  },
  {
    "id": "color-and-light-cyanometer",
    "term": "Cyanometer",
    "anchor": "cyanometer",
    "category": "Color and Light",
    "definition": "A device (or set of paint swatches) for evaluating and matching sky colors.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 510
  },
  {
    "id": "color-and-light-well-of-the-sky",
    "term": "Well of the sky",
    "anchor": "well-of-the-sky",
    "category": "Color and Light",
    "definition": "The part of a clear sky that is the darkest and purest blue, roughly 65-95 degrees from the sun.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 511
  },
  {
    "id": "color-and-light-antisolar-point",
    "term": "Antisolar point",
    "anchor": "antisolar-point",
    "category": "Color and Light",
    "definition": "The point in the sky or below the horizon 180 degrees from the sun, at the center of a rainbow's arc.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 512
  },
  {
    "id": "color-and-light-reverse-atmospheric-perspective",
    "term": "Reverse atmospheric perspective",
    "anchor": "reverse-atmospheric-perspective",
    "category": "Color and Light",
    "definition": "Progression of color from cooler colors in the foreground to warmer colors in the background.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 513
  },
  {
    "id": "color-and-light-golden-hour",
    "term": "Golden hour",
    "anchor": "golden-hour",
    "category": "Color and Light",
    "definition": "The light qualities of the first and last hours of the day, including the effects of sunrise, sunset, and twilight; also called magic hour.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 514
  },
  {
    "id": "color-and-light-sunset-color-bands",
    "term": "Sunset color bands",
    "anchor": "sunset-color-bands",
    "category": "Color and Light",
    "definition": "Horizontal bands of color that form low in the sky at sunset; usually orange near the horizon and blue above.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 515
  },
  {
    "id": "color-and-light-shadowbeam",
    "term": "Shadowbeam",
    "anchor": "shadowbeam",
    "category": "Color and Light",
    "definition": "A shadow cast by clouds, contrails, or tree branches appearing as a darker shaft within a region of illuminated air.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 516
  },
  {
    "id": "color-and-light-dappled-light",
    "term": "Dappled light",
    "anchor": "dappled-light",
    "category": "Color and Light",
    "definition": "A patchwork of circular or elliptical spots of light caused by sunlight passing through small openings in an overhead canopy.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 517
  },
  {
    "id": "color-and-light-cloud-shadows",
    "term": "Cloud shadows",
    "anchor": "cloud-shadows",
    "category": "Color and Light",
    "definition": "Patches of shade drifting across a landscape as clouds interrupt the sun; useful for directing the viewer's attention.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 518
  },
  {
    "id": "color-and-light-skyholes",
    "term": "Skyholes",
    "anchor": "skyholes",
    "category": "Color and Light",
    "definition": "Openings or apertures within the silhouette of a tree through which the light of the sky is visible.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 519
  },
  {
    "id": "color-and-light-alexanders-dark-band",
    "term": "Alexander's dark band",
    "anchor": "alexanders-dark-band",
    "category": "Color and Light",
    "definition": "The relatively darker region between the primary and secondary rainbows.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 520
  },
  {
    "id": "color-and-light-supernumerary-bows",
    "term": "Supernumerary bows",
    "anchor": "supernumerary-bows",
    "category": "Color and Light",
    "definition": "Faint rainbows that form at angles of less than 42 degrees inside the primary rainbow.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 521
  },
  {
    "id": "color-and-light-water-color-filter",
    "term": "Water color filter",
    "anchor": "water-color-filter",
    "category": "Color and Light",
    "definition": "Water's selective absorption of wavelengths: red mostly absorbed by 10 feet, orange and yellow by 25, leaving a blue cast with depth.",
    "source": "Color and Light",
    "chapter": "Ch 11",
    "order": 522
  },
  {
    "id": "color-and-light-serial-painting",
    "term": "Serial painting",
    "anchor": "serial-painting",
    "category": "Color and Light",
    "definition": "The creation of multiple plein-air studies of the same subject under different lighting, or closely related studies made one after another, like frames of a film.",
    "source": "Color and Light",
    "chapter": "Ch 12",
    "order": 523
  },
  {
    "id": "color-and-light-film-transparent",
    "term": "Film Transparent",
    "anchor": "film-transparent",
    "category": "Color and Light",
    "definition": "A render setting that makes the background transparent (alpha) in the output so the scene can be composited over another image.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 04",
    "order": 524
  },
  {
    "id": "drapery-drapery",
    "term": "Drapery",
    "anchor": "drapery",
    "category": "Drapery",
    "definition": "Fabric on the figure; studied through gravity-driven gesture, fabric character, and the seven folds tied to tension points.",
    "source": "Figure Drawing",
    "chapter": "Ch 06",
    "order": 525
  },
  {
    "id": "drapery-tension-point",
    "term": "Tension point",
    "anchor": "tension-point",
    "category": "Drapery",
    "definition": "A landmark renamed to relate it to the push or grab of fabric; imagined as a large, moveable wire hanger.",
    "source": "Figure Drawing",
    "chapter": "Ch 06",
    "order": 526
  },
  {
    "id": "drapery-end-fold",
    "term": "End fold",
    "anchor": "end-fold",
    "category": "Drapery",
    "definition": "The fold where drapery ends; it always just fits to a wrapping line on the perspective of the form it conforms to.",
    "source": "Figure Drawing",
    "chapter": "Ch 06",
    "order": 527
  },
  {
    "id": "drapery-cylinder-fold",
    "term": "Cylinder fold",
    "anchor": "cylinder-fold",
    "category": "Drapery",
    "definition": "The fold from a consistent placement of tension points, making the fabric look like cylinders lined up next to one another (shower/window curtains).",
    "source": "Figure Drawing",
    "chapter": "Ch 06",
    "order": 528
  },
  {
    "id": "drapery-u-fold",
    "term": "\"U\" fold",
    "anchor": "u-fold",
    "category": "Drapery",
    "definition": "The fold caused by drapery suspended between two main tension points, designed with \"C\" and \"S\" curves.",
    "source": "Figure Drawing",
    "chapter": "Ch 06",
    "order": 529
  },
  {
    "id": "drapery-pinch-fold",
    "term": "Pinch fold",
    "anchor": "pinch-fold",
    "category": "Drapery",
    "definition": "The fold that takes place between any two tension points close enough to pinch fabric between them (e.g. the bend of the arm or leg).",
    "source": "Figure Drawing",
    "chapter": "Ch 06",
    "order": 530
  },
  {
    "id": "drapery-s-spiral-fold",
    "term": "\"S\"/spiral fold",
    "anchor": "s-spiral-fold",
    "category": "Drapery",
    "definition": "The fold from two tension points twisting the fabric in opposing directions, ending behind the forms in a \"T\" overlap.",
    "source": "Figure Drawing",
    "chapter": "Ch 06",
    "order": 531
  },
  {
    "id": "drapery-z-fold",
    "term": "\"Z\" fold",
    "anchor": "z-fold",
    "category": "Drapery",
    "definition": "The fold remembering the asymmetrical compression of clothing from gravity and excess fabric, most likely seen at the bottom of the pants/leg.",
    "source": "Figure Drawing",
    "chapter": "Ch 06",
    "order": 532
  },
  {
    "id": "drapery-cape-fold",
    "term": "Cape fold",
    "anchor": "cape-fold",
    "category": "Drapery",
    "definition": "The only fold showing external influence (wind, movement, flying); a \"U\" fold with an external element acting on it.",
    "source": "Figure Drawing",
    "chapter": "Ch 06",
    "order": 533
  },
  {
    "id": "dream-worlds-sweat-box",
    "term": "Sweat box",
    "anchor": "sweat-box",
    "category": "Dream Worlds",
    "definition": "The group that, after the finished animation, approves rough and final animation as well as the color combinations; the production designer is a member.",
    "source": "Dream Worlds",
    "chapter": "Introduction (PDF 15)",
    "order": 534
  },
  {
    "id": "dream-worlds-style-guide",
    "term": "Style Guide",
    "anchor": "style-guide",
    "category": "Dream Worlds",
    "definition": "A booklet of approximately 60 pages created after the green light, explaining the basic rules of the style for the departments Layout, Background, Animation, Effects, Clean-up and Color.",
    "source": "Dream Worlds",
    "chapter": "Introduction (PDF 15)",
    "order": 535
  },
  {
    "id": "dream-worlds-green-lit",
    "term": "Green lit",
    "anchor": "green-lit",
    "category": "Dream Worlds",
    "definition": "The moment a production is approved and the new project is announced to the outside world.",
    "source": "Dream Worlds",
    "chapter": "Introduction (PDF 15)",
    "order": 536
  },
  {
    "id": "dream-worlds-tonal-matte",
    "term": "Tonal matte",
    "anchor": "tonal-matte",
    "category": "Dream Worlds",
    "definition": "A matte used on characters so they do not blend into the background; *Mulan* executives wanted more of them, and Bacher cites *Lady and the Tramp* (without them) as not looking cheap.",
    "source": "Dream Worlds",
    "chapter": "Introduction (PDF 13)",
    "order": 537
  },
  {
    "id": "dream-worlds-framing-effect",
    "term": "Framing Effect",
    "anchor": "framing-effect",
    "category": "Dream Worlds",
    "definition": "Big foreground elements framing the action so all background perspective lines lead toward the characters, as in the *Cinderella* scenes.",
    "source": "Dream Worlds",
    "chapter": "Ch 01 Film Analysis (PDF 17)",
    "order": 538
  },
  {
    "id": "dream-worlds-golden-section",
    "term": "Golden section",
    "anchor": "golden-section",
    "category": "Dream Worlds",
    "definition": "A composition placement alternative to \"closer to the edge\" when deciding where to place the action in a frame.",
    "source": "Dream Worlds",
    "chapter": "Ch 01 Film Analysis (PDF 21)",
    "order": 539
  },
  {
    "id": "dream-worlds-up-shot-down-shot",
    "term": "Up-shot / down-shot",
    "anchor": "up-shot-down-shot",
    "category": "Dream Worlds",
    "definition": "Camera-position choices: shooting from below looking up (scary up-shots in horror films) or from above looking down.",
    "source": "Dream Worlds",
    "chapter": "Ch 01 Film Analysis (PDF 21, 28)",
    "order": 540
  },
  {
    "id": "dream-worlds-video-print",
    "term": "Video print",
    "anchor": "video-print",
    "category": "Dream Worlds",
    "definition": "Stills printed from taped TV programs (from the early nineties, via VHS/Laserdisc/DVD), Bacher's main medium for building reference archives of thousands of images.",
    "source": "Dream Worlds",
    "chapter": "Ch 01 Film Analysis (PDF 18-19)",
    "order": 541
  },
  {
    "id": "dream-worlds-floor-plan",
    "term": "Floor plan (scene)",
    "anchor": "floor-plan",
    "category": "Dream Worlds",
    "definition": "An architectural-style sketch of the environments of a chosen sequence, marking the main light sources with arrows, character positions, and their movements; used for studying film and for complex camera moves.",
    "source": "Dream Worlds",
    "chapter": "Ch 01 Film Analysis (PDF 26)",
    "order": 542
  },
  {
    "id": "dream-worlds-story-reel",
    "term": "Story reel",
    "anchor": "story-reel",
    "category": "Dream Worlds",
    "definition": "A timed presentation reel of the story; the London team finished a ~50-minute color story reel for *Beauty and the Beast* in a very short time (early fall 1989).",
    "source": "Dream Worlds",
    "chapter": "Ch 02 Beauty and the Beast (PDF 36)",
    "order": 543
  },
  {
    "id": "dream-worlds-rough-leica-reel",
    "term": "Rough leica-reel",
    "anchor": "rough-leica-reel",
    "category": "Dream Worlds",
    "definition": "The first timed test reel in Bacher's production timeline, later defined after sound recording and with elements exchanged.",
    "source": "Dream Worlds",
    "chapter": "Ch 02 Beauty and the Beast (PDF 46)",
    "order": 544
  },
  {
    "id": "dream-worlds-orientalist-painting",
    "term": "Orientalist painting",
    "anchor": "orientalist-painting",
    "category": "Dream Worlds",
    "definition": "Mostly French painting of Middle Eastern themes from around the end of the nineteenth century (favorites: Jacques Majorelle, Jean-Leon Gerome); the main reference for the *Aladdin* world.",
    "source": "Dream Worlds",
    "chapter": "Ch 04 Aladdin (PDF 53)",
    "order": 545
  },
  {
    "id": "dream-worlds-persian-miniature-art",
    "term": "Persian miniature art",
    "anchor": "persian-miniature-art",
    "category": "Dream Worlds",
    "definition": "The miniature painting tradition Bacher studied for the styling of the *Aladdin* palace garden.",
    "source": "Dream Worlds",
    "chapter": "Ch 04 Aladdin (PDF 53)",
    "order": 546
  },
  {
    "id": "dream-worlds-jump-cut",
    "term": "Jump cut",
    "anchor": "jump-cut",
    "category": "Dream Worlds",
    "definition": "Crossing the 180° invisible line connecting the characters; shots are allowed only along that line, and losing control of the logical sequence can \"completely destroy a sequence.\"",
    "source": "Dream Worlds",
    "chapter": "Ch 06 Camera Rules (PDF 67-68)",
    "order": 547
  },
  {
    "id": "dream-worlds-over-the-shoulder-shot",
    "term": "Over-the-shoulder shot",
    "anchor": "over-the-shoulder-shot",
    "category": "Dream Worlds",
    "definition": "A dialogue-scene camera position among the careful-planning tools (close-ups to medium-/wide shots, over-the-shoulder or POV).",
    "source": "Dream Worlds",
    "chapter": "Ch 06 Camera Rules (PDF 67)",
    "order": 548
  },
  {
    "id": "dream-worlds-visual-rhythm",
    "term": "Visual rhythm",
    "anchor": "visual-rhythm",
    "category": "Dream Worlds",
    "definition": "The balance of wider shots versus close-ups and of character counts within shots; compared when analyzing movies, planned to keep budgets down, and — connected across scenes — the movie's visual language.",
    "source": "Dream Worlds",
    "chapter": "Ch 06 Camera Rules (PDF 69); Ch 12 (PDF 127)",
    "order": 549
  },
  {
    "id": "dream-worlds-tilted-camera-dutch-angle",
    "term": "Tilted camera (Dutch angle)",
    "anchor": "tilted-camera-dutch-angle",
    "category": "Dream Worlds",
    "definition": "A slightly tilted camera angle that indicates something disturbing might happen; one of the tension-building tools of a climax.",
    "source": "Dream Worlds",
    "chapter": "Ch 08 Composition (PDF 78)",
    "order": 550
  },
  {
    "id": "dream-worlds-projection-method",
    "term": "Projection method (three-quarter)",
    "anchor": "projection-method",
    "category": "Dream Worlds",
    "definition": "The simple translation of a floor plan with actor positions and camera angle into a three-quarter perspective view, used to check character combinations before animation; Bacher's simplified version stayed 2-D.",
    "source": "Dream Worlds",
    "chapter": "Ch 10 Staging and Formats (PDF 98-99)",
    "order": 551
  },
  {
    "id": "dream-worlds-invisible-ground-contact",
    "term": "Invisible ground contact",
    "anchor": "invisible-ground-contact",
    "category": "Dream Worlds",
    "definition": "The perspective-grid solution for closer shots where a character's contact to ground level is not visible: place the foreground character in the same size relation next to the background character and follow the grid to find the contact point.",
    "source": "Dream Worlds",
    "chapter": "Ch 10 Staging and Formats (PDF 100)",
    "order": 552
  },
  {
    "id": "dream-worlds-guest-artists",
    "term": "Guest artists",
    "anchor": "guest-artists",
    "category": "Dream Worlds",
    "definition": "External artists invited \"from all over the world\" to add ingredients for a unique look (e.g. Alex Nino, Regis Loisel, Vink, Harald Siepermann for *Mulan*).",
    "source": "Dream Worlds",
    "chapter": "Ch 11 Mulan (PDF 113-116)",
    "order": 553
  },
  {
    "id": "dream-worlds-dry-brush-technique",
    "term": "Dry-brush (badger brush) technique",
    "anchor": "dry-brush-technique",
    "category": "Dream Worlds",
    "definition": "A very old painting technique: a dry badger brush softens the edges of freshly applied color on cardboard; taught by Ric Sluiter and used to define the final *Mulan* background style.",
    "source": "Dream Worlds",
    "chapter": "Ch 11 Mulan (PDF 124)",
    "order": 554
  },
  {
    "id": "dream-worlds-yin-and-yang",
    "term": "Yin and Yang",
    "anchor": "yin-and-yang",
    "category": "Dream Worlds",
    "definition": "The philosophy of balance everywhere in the Chinese landscape washes — detail as texture, more detail toward the foreground in stylized blossoms, bamboo and grass — that Bacher wanted to see in *Mulan*.",
    "source": "Dream Worlds",
    "chapter": "Ch 11 Mulan (PDF 119)",
    "order": 555
  },
  {
    "id": "dream-worlds-watercolor-background-style",
    "term": "Watercolor (background style)",
    "anchor": "watercolor-background-style",
    "category": "Dream Worlds",
    "definition": "The \"old traditional-style watercolor art from the beautiful Silly Symphonies\" (*Elmer Elephant*, *Farmyard Symphony*, *Three Little Wolves*) that *Lilo & Stitch* recreated via the top background team in Florida; the style also studied for *Mulan*.",
    "source": "Dream Worlds",
    "chapter": "Ch 13 Lilo and Stitch (PDF 136); Ch 11 Mulan (PDF 122)",
    "order": 556
  },
  {
    "id": "dream-worlds-color-mood-curve",
    "term": "Color mood curve",
    "anchor": "color-mood-curve",
    "category": "Dream Worlds",
    "definition": "The planned progression of color across a film's story events, parallel to the \"emotion/action curve\"; the \"clear 'color-curve'\" visible throughout *Lady and the Tramp* and *Sleeping Beauty*.",
    "source": "Dream Worlds",
    "chapter": "Ch 14 Value and Color (PDF 143, 145)",
    "order": 557
  },
  {
    "id": "dream-worlds-color-chapters",
    "term": "Color-chapters / color-transitions",
    "anchor": "color-chapters",
    "category": "Dream Worlds",
    "definition": "Sequences \"designed in 'color-chapters'\" with \"color-transitions\" between them, normally smooth or deliberately contrasting to indicate dramatic story changes, as in *Bambi*'s late-summer-to-first-snow scenes.",
    "source": "Dream Worlds",
    "chapter": "Ch 14 Value and Color (PDF 144)",
    "order": 558
  },
  {
    "id": "dream-worlds-turnaround",
    "term": "Turnaround (production)",
    "anchor": "turnaround",
    "category": "Dream Worlds",
    "definition": "The point where a production is handed over/ended under new leadership — *Wild Life* \"went into turnaround\" while the team still hoped the story would be fixed.",
    "source": "Dream Worlds",
    "chapter": "Ch 16 Unfinished Disney Projects (PDF 158)",
    "order": 559
  },
  {
    "id": "dream-worlds-crosshatching-3d",
    "term": "3-D crosshatching",
    "anchor": "crosshatching-3d",
    "category": "Dream Worlds",
    "definition": "Bill Peet's crosshatching for texture reimagined by Umesh Shukla as a \"3-D crosshatched world\" for the shelved *My Peoples* look, rejected as \"too spiky\" with an \"artificial technical feel.\"",
    "source": "Dream Worlds",
    "chapter": "Ch 16 Unfinished Disney Projects (PDF 158)",
    "order": 560
  },
  {
    "id": "dream-worlds-custom-brushes",
    "term": "Custom brushes (digital)",
    "anchor": "custom-brushes",
    "category": "Dream Worlds",
    "definition": "The \"some thousand different brushes\" Bacher designed for the flat textured look of *Fraidy Cat*, which \"became an obsession over the years.\"",
    "source": "Dream Worlds",
    "chapter": "Ch 16 Unfinished Disney Projects (PDF 170)",
    "order": 561
  },
  {
    "id": "dream-worlds-brain-trust",
    "term": "Brain trust",
    "anchor": "brain-trust",
    "category": "Dream Worlds",
    "definition": "One of the decision meetings a production designer attends — \"Story, workbook, brain trust, layout, back-ground, color, effects and sweatbox meetings.\"",
    "source": "Dream Worlds",
    "chapter": "Ch 17 Own Projects (PDF 196)",
    "order": 562
  },
  {
    "id": "eevee-shading-eevee",
    "term": "EEVEE",
    "anchor": "eevee",
    "category": "EEVEE Shading",
    "definition": "Blender's real-time render engine that rasterizes (rather than ray-traces) lights and materials so a frame is produced while you work; the book's focus.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 01",
    "order": 563
  },
  {
    "id": "eevee-shading-real-time-rendering",
    "term": "Real-time rendering",
    "anchor": "real-time-rendering",
    "category": "EEVEE Shading",
    "definition": "Producing a viewable image continuously at interactive frame rate (as opposed to batch/offline rendering); the defining property of EEVEE.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 01",
    "order": 564
  },
  {
    "id": "eevee-shading-shader-to-rgb",
    "term": "Shader to RGB node",
    "anchor": "shader-to-rgb",
    "category": "EEVEE Shading",
    "definition": "A node that passes the shader output straight to the render result, bypassing the lighting model, used here to build stylized non-physical materials.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 02",
    "order": 565
  },
  {
    "id": "eevee-shading-is-camera-ray",
    "term": "Is Camera Ray (Light Path node)",
    "anchor": "is-camera-ray",
    "category": "EEVEE Shading",
    "definition": "A Light Path node output exposing the current ray's pass, used so a shader differs for the camera pass versus reflection/refraction passes.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 03",
    "order": 566
  },
  {
    "id": "eevee-shading-line-art-modifier",
    "term": "Line Art modifier",
    "anchor": "line-art-modifier",
    "category": "EEVEE Shading",
    "definition": "A Grease Pencil-based modifier (in development in Blender 2.93) that generates an animated line-art outline of a mesh.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 03",
    "order": 567
  },
  {
    "id": "eevee-shading-eevee-volumetrics-settings",
    "term": "EEVEE Volumetrics render settings",
    "anchor": "eevee-volumetrics-settings",
    "category": "EEVEE Shading",
    "definition": "The EEVEE volume block (Start/End, Tile Size, Samples, Distribution) that controls how volumetric light is rendered and sampled.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 04",
    "order": 568
  },
  {
    "id": "eevee-shading-shadow-mode",
    "term": "Shadow Mode",
    "anchor": "shadow-mode",
    "category": "EEVEE Shading",
    "definition": "A material/EEVEE setting (e.g. \"None\") controlling whether a transparent material casts shadows.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 08",
    "order": 569
  },
  {
    "id": "eevee-shading-light-leaking",
    "term": "Light Leaking",
    "anchor": "light-leaking",
    "category": "EEVEE Shading",
    "definition": "An artifact where light bleeds through thin geometry in a rasterized engine; mitigated in the book with Solidify and render-setting tweaks.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 09",
    "order": 570
  },
  {
    "id": "eevee-shading-high-bit-depth",
    "term": "High Bit Depth",
    "anchor": "high-bit-depth",
    "category": "EEVEE Shading",
    "definition": "An EEVEE render setting that raises the internal bit depth to reduce shadow and gradient banding.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 09",
    "order": 571
  },
  {
    "id": "eevee-shading-cascade-size",
    "term": "Cascade Size",
    "anchor": "cascade-size",
    "category": "EEVEE Shading",
    "definition": "An EEVEE shadow setting controlling how the shadow map is split into cascades (sharpness versus artifact).",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 09",
    "order": 572
  },
  {
    "id": "environment-design-photorealism",
    "term": "Photorealism",
    "anchor": "photorealism",
    "category": "Environment Design",
    "definition": "The aim of making a rendered 3D scene read as a real photograph; the book's governing goal for the cabin and landscape projects.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 01",
    "order": 573
  },
  {
    "id": "environment-design-real-world-scale",
    "term": "Real-world scale",
    "anchor": "real-world-scale",
    "category": "Environment Design",
    "definition": "Using actual measured dimensions (Metric units in Blender) for objects instead of estimating size by eye.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 01",
    "order": 574
  },
  {
    "id": "environment-design-scale-matching",
    "term": "Scale matching",
    "anchor": "scale-matching",
    "category": "Environment Design",
    "definition": "Replicating the exact camera position, rotation, and focal length of a reference photograph so the 3D scene matches it.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 01",
    "order": 575
  },
  {
    "id": "environment-design-focal-length",
    "term": "Focal length",
    "anchor": "focal-length",
    "category": "Environment Design",
    "definition": "The camera lens parameter (mm) that fSpy recovers from a reference photo and the user tweaks to match the reference framing.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 01",
    "order": 576
  },
  {
    "id": "environment-design-base-color-map",
    "term": "Base Color map",
    "anchor": "base-color-map",
    "category": "Environment Design",
    "definition": "The texture channel holding a material's surface color, connected to the Principled BSDF Base Color socket.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 02",
    "order": 577
  },
  {
    "id": "environment-design-roughness-map",
    "term": "Roughness map",
    "anchor": "roughness-map",
    "category": "Environment Design",
    "definition": "The black-and-white channel (set Non-Color) controlling reflection: black = shiny, white = rough.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 02",
    "order": 578
  },
  {
    "id": "environment-design-musgrave-texture",
    "term": "Musgrave Texture",
    "anchor": "musgrave-texture",
    "category": "Environment Design",
    "definition": "A Blender procedural node (used at scale 5 and 50) to generate layered wood-like detail.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 02",
    "order": 579
  },
  {
    "id": "environment-design-noise-texture",
    "term": "Noise Texture",
    "anchor": "noise-texture",
    "category": "Environment Design",
    "definition": "A Blender procedural node added to break up the CG-perfect look of a surface.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 02",
    "order": 580
  },
  {
    "id": "environment-design-metallic",
    "term": "Metallic",
    "anchor": "metallic",
    "category": "Environment Design",
    "definition": "The Principled BSDF value (raised, e.g. to 0.9) that makes a surface read as metal.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 03",
    "order": 581
  },
  {
    "id": "environment-design-export-uv-layout",
    "term": "Export UV Layout",
    "anchor": "export-uv-layout",
    "category": "Environment Design",
    "definition": "Saving the UV map as an image to paint on in an external texture editor.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 03",
    "order": 582
  },
  {
    "id": "environment-design-clouds-texture",
    "term": "Clouds texture",
    "anchor": "clouds-texture",
    "category": "Environment Design",
    "definition": "A free Blender procedural texture of white and dark spots, used as the driver for the Displace modifier.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 03",
    "order": 583
  },
  {
    "id": "environment-design-project-from-view",
    "term": "Project from View",
    "anchor": "project-from-view",
    "category": "Environment Design",
    "definition": "The UV-mapping option (U menu) that unwraps the mesh as it appears in the current viewport view.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 04",
    "order": 584
  },
  {
    "id": "environment-design-instance-object",
    "term": "Instance Object",
    "anchor": "instance-object",
    "category": "Environment Design",
    "definition": "The particle Render As Object setting that replaces hair particles with a chosen object (a plant).",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 04",
    "order": 585
  },
  {
    "id": "environment-design-scale-randomness",
    "term": "Scale Randomness",
    "anchor": "scale-randomness",
    "category": "Environment Design",
    "definition": "The particle Render setting (default 0) that randomizes the size of scattered particles.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 04",
    "order": 586
  },
  {
    "id": "environment-design-orientation-axis",
    "term": "Orientation Axis",
    "anchor": "orientation-axis",
    "category": "Environment Design",
    "definition": "The particle Rotation setting (Velocity/Hair to Global Y) controlling the upright orientation of scattered plants.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 04",
    "order": 587
  },
  {
    "id": "environment-design-shade-smooth",
    "term": "Shade Smooth",
    "anchor": "shade-smooth",
    "category": "Environment Design",
    "definition": "The shading command (right-click) that smooths a mesh's surface shading so its edges are not flat-faceted.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 04",
    "order": 588
  },
  {
    "id": "environment-design-bright-contrast-node",
    "term": "Bright/Contrast node",
    "anchor": "bright-contrast-node",
    "category": "Environment Design",
    "definition": "The Shader Editor node (e.g. Bright -0.2) used to make texture colors more vivid before Base Color.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 04",
    "order": 589
  },
  {
    "id": "environment-design-alpha-over-node",
    "term": "Alpha Over node",
    "anchor": "alpha-over-node",
    "category": "Environment Design",
    "definition": "The Compositor node that places one image over another using alpha to fill transparent render areas.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 05",
    "order": 590
  },
  {
    "id": "environment-design-viewer-node",
    "term": "Viewer node",
    "anchor": "viewer-node",
    "category": "Environment Design",
    "definition": "The Compositor node that previews the running composite result.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 05",
    "order": 591
  },
  {
    "id": "environment-design-noise-basis",
    "term": "Noise Basis",
    "anchor": "noise-basis",
    "category": "Environment Design",
    "definition": "The underlying noise basis selected in the A.N.T. Landscape add-on (default Blender, changed to Voronoi F2) that shapes the procedural terrain.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 06",
    "order": 592
  },
  {
    "id": "environment-design-geometry-node-shader",
    "term": "Geometry node (shader)",
    "anchor": "geometry-node-shader",
    "category": "Environment Design",
    "definition": "The Shader Editor node exposing geometric data (e.g. the Normal output), used here to encode surface orientation as RGB.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 06",
    "order": 593
  },
  {
    "id": "environment-design-separate-xyz-node",
    "term": "Separate XYZ node",
    "anchor": "separate-xyz-node",
    "category": "Environment Design",
    "definition": "The shader node that splits a vector into its X, Y, and Z components to isolate a single axis.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 06",
    "order": 594
  },
  {
    "id": "environment-design-bridge-edge-loops",
    "term": "Bridge Edge Loops",
    "anchor": "bridge-edge-loops",
    "category": "Environment Design",
    "definition": "The Edit Mode operator (Ctrl + E) that fills a gap between two selected edge loops.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 06",
    "order": 595
  },
  {
    "id": "environment-design-glass-bsdf",
    "term": "Glass BSDF",
    "anchor": "glass-bsdf",
    "category": "Environment Design",
    "definition": "The shader node that refracts and reflects light passing through a surface, used here for water's reflectivity.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 07",
    "order": 596
  },
  {
    "id": "environment-design-transparent-bsdf",
    "term": "Transparent BSDF",
    "anchor": "transparent-bsdf",
    "category": "Environment Design",
    "definition": "The shader node that adds transparency without refraction, passing light straight through the surface.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 07",
    "order": 597
  },
  {
    "id": "environment-design-ior",
    "term": "IOR (Index of Refraction)",
    "anchor": "ior",
    "category": "Environment Design",
    "definition": "A measure of how much a light ray bends passing from one medium to another (water is 1.33).",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 07",
    "order": 598
  },
  {
    "id": "environment-design-make-cyclic",
    "term": "Make Cyclic (F-Modifier)",
    "anchor": "make-cyclic",
    "category": "Environment Design",
    "definition": "The Timeline F-Modifier that loops an animation.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 07",
    "order": 599
  },
  {
    "id": "environment-design-displacement-and-bump-surface",
    "term": "Displacement and Bump (Surface mode)",
    "anchor": "displacement-and-bump-surface",
    "category": "Environment Design",
    "definition": "The Material > Settings 'Surface' mode (Displacement and Bump) that enables real displacement alongside bump, requiring Cycles.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 08",
    "order": 600
  },
  {
    "id": "environment-design-frame-node",
    "term": "Frame node",
    "anchor": "frame-node",
    "category": "Environment Design",
    "definition": "The Shader Editor node that groups and labels related nodes to organize a setup.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 08",
    "order": 601
  },
  {
    "id": "environment-design-node-grouping",
    "term": "Node grouping (Ctrl + G)",
    "anchor": "node-grouping",
    "category": "Environment Design",
    "definition": "The Ctrl + G operation that packs a node tree into a single, reusable group node exposing only essential parameters.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 09",
    "order": 602
  },
  {
    "id": "environment-design-texturing-mask",
    "term": "Texturing mask",
    "anchor": "texturing-mask",
    "category": "Environment Design",
    "definition": "A grayscale texture that determines where and to what degree two materials mix on the same object.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 09",
    "order": 603
  },
  {
    "id": "environment-design-cube-projection",
    "term": "Cube Projection",
    "anchor": "cube-projection",
    "category": "Environment Design",
    "definition": "The UV unwrap method (U in Edit Mode) that projects the mesh as if it were a cube.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 10",
    "order": 604
  },
  {
    "id": "environment-design-alpha-transparency-alpha-slot",
    "term": "Alpha transparency (BSDF Alpha slot)",
    "anchor": "alpha-transparency-alpha-slot",
    "category": "Environment Design",
    "definition": "Using a black-and-white mask in the Principled BSDF Alpha slot so only the masked area renders and the background becomes transparent.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 11",
    "order": 605
  },
  {
    "id": "environment-design-emitter-particle-type",
    "term": "Emitter (particle type)",
    "anchor": "emitter-particle-type",
    "category": "Environment Design",
    "definition": "One of the two Particle System configurations (as of Blender 3.3); the default type, not used for scattering in this book.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 12",
    "order": 606
  },
  {
    "id": "environment-design-children-particles-simple",
    "term": "Children particles (Simple)",
    "anchor": "children-particles-simple",
    "category": "Environment Design",
    "definition": "Particle copies (Simple) that reuse parent geometry to raise visible density at low computational cost (as of Blender 3.3).",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 12",
    "order": 607
  },
  {
    "id": "environment-design-time-limit",
    "term": "Time Limit",
    "anchor": "time-limit",
    "category": "Environment Design",
    "definition": "The render control that stops rendering after a set duration (e.g. 5 minutes).",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 13",
    "order": 608
  },
  {
    "id": "environment-design-edge-mask",
    "term": "Edge Mask",
    "anchor": "edge-mask",
    "category": "Environment Design",
    "definition": "A Cycles node setup (Bevel + Geometry + Vector Math Dot Product + Invert) that detects sharp edges and renders them white on a black model.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 04, Ch 12",
    "order": 609
  },
  {
    "id": "environment-design-edge-map",
    "term": "Edge map",
    "anchor": "edge-map",
    "category": "Environment Design",
    "definition": "The image (Bake Type Emit) baked from an Edge Mask and used to drive edge wear on a surface.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 04, Ch 12",
    "order": 610
  },
  {
    "id": "environment-design-edge-wear",
    "term": "Edge wear",
    "anchor": "edge-wear",
    "category": "Environment Design",
    "definition": "The worn, darker-or-brighter-edged look produced from an edge map via a Mix + Power + ColorRamp node chain.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 04, Ch 12",
    "order": 611
  },
  {
    "id": "environment-design-bevel-node",
    "term": "Bevel node",
    "anchor": "bevel-node",
    "category": "Environment Design",
    "definition": "The shader node (Samples, Radius) that simulates rounded edge bevels for edge detection and normal-map baking.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 04, Ch 06",
    "order": 612
  },
  {
    "id": "environment-design-baking-a-normal-map",
    "term": "Baking a normal map",
    "anchor": "baking-a-normal-map",
    "category": "Environment Design",
    "definition": "The Cycles Selected-to-Active bake that turns a high-poly pattern into a normal map image.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 06",
    "order": 613
  },
  {
    "id": "environment-design-bevel-map",
    "term": "Bevel map",
    "anchor": "bevel-map",
    "category": "Environment Design",
    "definition": "The normal map baked from duplicated, beveled edges to fake smooth bevels without added polygon count.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 06",
    "order": 614
  },
  {
    "id": "environment-design-painting-decals",
    "term": "Painting decals",
    "anchor": "painting-decals",
    "category": "Environment Design",
    "definition": "Painting transparent PNG stickers onto a surface via Stencil mapping in the Texture Paint Workspace.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 06",
    "order": 615
  },
  {
    "id": "environment-design-normal-decal",
    "term": "Normal decal",
    "anchor": "normal-decal",
    "category": "Environment Design",
    "definition": "A baked normal-map sticker painted onto a surface to fake modeled detail without geometry.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 06",
    "order": 616
  },
  {
    "id": "environment-design-baking-a-normal-decal",
    "term": "Baking a normal decal",
    "anchor": "baking-a-normal-decal",
    "category": "Environment Design",
    "definition": "The Cycles bake of a small model into a normal map for use as a paintable decal.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 06",
    "order": 617
  },
  {
    "id": "figure-drawing-and-gesture-gesture-drawing",
    "term": "Gesture drawing",
    "anchor": "gesture-drawing",
    "category": "Figure drawing and gesture",
    "definition": "The line framework of the figure, considered the foundation for everything planned; like an armature to a sculpture or a rig to a 3D model.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 618
  },
  {
    "id": "figure-drawing-and-gesture-c-curve",
    "term": "\"C\" curve",
    "anchor": "c-curve",
    "category": "Figure drawing and gesture",
    "definition": "One of the only three line types; used for active, pinched, compressed forms.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 619
  },
  {
    "id": "figure-drawing-and-gesture-s-curve",
    "term": "\"S\" curve",
    "anchor": "s-curve",
    "category": "Figure drawing and gesture",
    "definition": "One of the only three line types; used for stretched, passive forms and for the spine.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 620
  },
  {
    "id": "figure-drawing-and-gesture-straight-line",
    "term": "Straight line",
    "anchor": "straight-line",
    "category": "Figure drawing and gesture",
    "definition": "The third permitted line type, used for direction and length; a straight line drawn across a form is avoided in favor of wrapping lines.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 621
  },
  {
    "id": "figure-drawing-and-gesture-eight-parts-of-the-body",
    "term": "Eight parts of the body",
    "anchor": "eight-parts-of-the-body",
    "category": "Figure drawing and gesture",
    "definition": "Head, spine, rib cage, pelvis, two arms, and two legs - the parts described in a gesture drawing.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 622
  },
  {
    "id": "figure-drawing-and-gesture-asymmetry",
    "term": "Asymmetry",
    "anchor": "asymmetry",
    "category": "Figure drawing and gesture",
    "definition": "Offsetting curve apexes so the eye moves through the design; the main line use in gesture drawing.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 623
  },
  {
    "id": "figure-drawing-and-gesture-repetition-of-curves",
    "term": "Repetition (of curves)",
    "anchor": "repetition-of-curves",
    "category": "Figure drawing and gesture",
    "definition": "Repeating a similar curve or shape twice or more, which provokes visual movement.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 624
  },
  {
    "id": "figure-drawing-and-gesture-visual-timing",
    "term": "Visual timing",
    "anchor": "visual-timing",
    "category": "Figure drawing and gesture",
    "definition": "Controlling the speed of the viewer's eye (fast vs. slow areas) through line combinations.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 625
  },
  {
    "id": "figure-drawing-and-gesture-wrapping-line",
    "term": "Wrapping line",
    "anchor": "wrapping-line",
    "category": "Figure drawing and gesture",
    "definition": "A volumetric contour that travels around a form to indicate perspective, like a rubber band tied around it.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 626
  },
  {
    "id": "figure-drawing-and-gesture-center-of-gravity",
    "term": "Center of gravity",
    "anchor": "center-of-gravity",
    "category": "Figure drawing and gesture",
    "definition": "The figure's balance line; exaggerated out of balance to create dynamic poses.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 627
  },
  {
    "id": "figure-drawing-and-gesture-about-to-pose",
    "term": "\"About to...\" pose",
    "anchor": "about-to-pose",
    "category": "Figure drawing and gesture",
    "definition": "A mid-action position that suspends the outcome of the action, engaging the viewer's anticipation.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 628
  },
  {
    "id": "figure-drawing-and-gesture-economy-of-line",
    "term": "Economy of line",
    "anchor": "economy-of-line",
    "category": "Figure drawing and gesture",
    "definition": "Using as little line as possible to describe the differences between muscle, fat, and bone.",
    "source": "Figure Drawing",
    "chapter": "Ch 01",
    "order": 629
  },
  {
    "id": "framed-ink-masters-course",
    "term": "Master's course",
    "anchor": "masters-course",
    "category": "Framed Ink",
    "definition": "Katzenberg's label for the book: a complete practical manual of the visual language of storytelling.",
    "source": "Framed Ink",
    "chapter": "Foreword",
    "order": 630
  },
  {
    "id": "framed-ink-visual-grammar",
    "term": "Visual grammar",
    "anchor": "visual-grammar",
    "category": "Framed Ink",
    "definition": "The rules and techniques of the image medium that must be understood before personal style can be explored.",
    "source": "Framed Ink",
    "chapter": "Foreword",
    "order": 631
  },
  {
    "id": "framed-ink-narrowing-down",
    "term": "Narrowing down",
    "anchor": "narrowing-down",
    "category": "Framed Ink",
    "definition": "The Introduction's prioritization method: general intensity of the image, then narrative detail, then artistic execution and style.",
    "source": "Framed Ink",
    "chapter": "Introduction",
    "order": 632
  },
  {
    "id": "framed-ink-parallel-reality",
    "term": "Parallel reality",
    "anchor": "parallel-reality",
    "category": "Framed Ink",
    "definition": "The fictional world a storyteller creates on paper that the audience must experience as real.",
    "source": "Framed Ink",
    "chapter": "Ch 01",
    "order": 633
  },
  {
    "id": "framed-ink-artistic-grammar",
    "term": "Artistic grammar",
    "anchor": "artistic-grammar",
    "category": "Framed Ink",
    "definition": "The book's term for the techniques and rules that translate perceived mood into a drawing.",
    "source": "Framed Ink",
    "chapter": "Ch 01",
    "order": 634
  },
  {
    "id": "framed-ink-insinuation",
    "term": "Insinuation",
    "anchor": "insinuation",
    "category": "Framed Ink",
    "definition": "Foreshadowing or hinting rather than spelling things out, so the audience fills in the gaps.",
    "source": "Framed Ink",
    "chapter": "Ch 01",
    "order": 635
  },
  {
    "id": "framed-ink-atmosphere",
    "term": "Atmosphere",
    "anchor": "atmosphere",
    "category": "Framed Ink",
    "definition": "The main tool for creating a world of parallel reality, based on lighting, pacing, and color.",
    "source": "Framed Ink",
    "chapter": "Ch 01",
    "order": 636
  },
  {
    "id": "framed-ink-consistency-of-vision",
    "term": "Consistency (of vision)",
    "anchor": "consistency-of-vision",
    "category": "Framed Ink",
    "definition": "Coherent visual and emotional choices from the first to the last frame, established by the first shots.",
    "source": "Framed Ink",
    "chapter": "Ch 01",
    "order": 637
  },
  {
    "id": "framed-ink-chiaroscuro",
    "term": "Chiaroscuro",
    "anchor": "chiaroscuro",
    "category": "Framed Ink",
    "definition": "Drawing with masses of light and dark; contour lines do not exist in reality and can be dropped when they get in the way.",
    "source": "Framed Ink",
    "chapter": "Ch 02",
    "order": 638
  },
  {
    "id": "framed-ink-selective-vision",
    "term": "Selective vision",
    "anchor": "selective-vision",
    "category": "Framed Ink",
    "definition": "Prioritizing and highlighting certain elements in a composition based on what is required at the moment.",
    "source": "Framed Ink",
    "chapter": "Ch 02",
    "order": 639
  },
  {
    "id": "framed-ink-rule-of-thirds",
    "term": "Rule of thirds",
    "anchor": "rule-of-thirds",
    "category": "Framed Ink",
    "definition": "Off-center composition based on the thirds grid lines or their intersections, preferred over regular symmetry.",
    "source": "Framed Ink",
    "chapter": "Ch 02",
    "order": 640
  },
  {
    "id": "framed-ink-tangencies",
    "term": "Tangencies",
    "anchor": "tangencies",
    "category": "Framed Ink",
    "definition": "Accidental touchings or coincidences between elements that look premeditated and pull the audience out of the story.",
    "source": "Framed Ink",
    "chapter": "Ch 02",
    "order": 641
  },
  {
    "id": "framed-ink-screen-direction",
    "term": "Screen direction",
    "anchor": "screen-direction",
    "category": "Framed Ink",
    "definition": "The culturally familiar reading direction; action moving with it reads as positive, against it as difficulty.",
    "source": "Framed Ink",
    "chapter": "Ch 02",
    "order": 642
  },
  {
    "id": "framed-ink-vanishing-point",
    "term": "Vanishing point",
    "anchor": "vanishing-point",
    "category": "Framed Ink",
    "definition": "The point where lines parallel to the horizon converge, toward which parallel lines recede in a perspective construction; an obvious center of interest that attracts the eye.",
    "source": "Framed Ink; Setting the Scene",
    "chapter": "Ch 02; Ch 03",
    "order": 643
  },
  {
    "id": "framed-ink-wide-angle-lens",
    "term": "Wide-angle lens",
    "anchor": "wide-angle-lens",
    "category": "Framed Ink",
    "definition": "A lens that includes a wider view and exaggerates depth clues and perspective distortion.",
    "source": "Framed Ink",
    "chapter": "Ch 02",
    "order": 644
  },
  {
    "id": "framed-ink-long-lens",
    "term": "Long lens",
    "anchor": "long-lens",
    "category": "Framed Ink",
    "definition": "A lens that focuses on a narrower portion, minimizing depth clues and flattening the image.",
    "source": "Framed Ink",
    "chapter": "Ch 02",
    "order": 645
  },
  {
    "id": "framed-ink-50mm-lens",
    "term": "50-mm lens",
    "anchor": "50mm-lens",
    "category": "Framed Ink",
    "definition": "With 35-mm film, the approximate equivalent of the undistorted human-eye view.",
    "source": "Framed Ink",
    "chapter": "Ch 02",
    "order": 646
  },
  {
    "id": "framed-ink-cutting-in",
    "term": "Cutting in",
    "anchor": "cutting-in",
    "category": "Framed Ink",
    "definition": "Jumping closer to a detail while keeping the subject in the same proportional position within the frame; in animation production, re-using animation for later shots by using a smaller field (economical but limited).",
    "source": "Framed Ink; Setting the Scene",
    "chapter": "Ch 02; Ch 05",
    "order": 647
  },
  {
    "id": "framed-ink-size-difference",
    "term": "Size difference",
    "anchor": "size-difference",
    "category": "Framed Ink",
    "definition": "An uneven balance of big/medium/small shapes that makes an image deeper, more dynamic, and interesting.",
    "source": "Framed Ink",
    "chapter": "Ch 02",
    "order": 648
  },
  {
    "id": "framed-ink-quick-read",
    "term": "Quick read",
    "anchor": "quick-read",
    "category": "Framed Ink",
    "definition": "A composition readable at a glance, built from basic clear shapes (light/dark masses, lines of tension) before the elements.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 649
  },
  {
    "id": "framed-ink-lines-of-tension",
    "term": "Lines of tension",
    "anchor": "lines-of-tension",
    "category": "Framed Ink",
    "definition": "The main physical or perceived lines in a composition that direct the eye.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 650
  },
  {
    "id": "framed-ink-establishing-shot",
    "term": "Establishing shot",
    "anchor": "establishing-shot",
    "category": "Framed Ink",
    "definition": "An early image that conveys the world, tone, and \"rules of the game\" in a single frame.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 651
  },
  {
    "id": "framed-ink-animating-the-scene",
    "term": "Animating the scene",
    "anchor": "animating-the-scene",
    "category": "Framed Ink",
    "definition": "Imprinting a sense of motion in a still image with repeated elements or poses (e.g., fanned guns, a U-shaped head line).",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 652
  },
  {
    "id": "framed-ink-overpowering-upshot",
    "term": "Overpowering upshot",
    "anchor": "overpowering-upshot",
    "category": "Framed Ink",
    "definition": "A camera below the characters' eyes making subjects towering and imposing.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 653
  },
  {
    "id": "framed-ink-order-vs-chaos",
    "term": "Order vs. chaos",
    "anchor": "order-vs-chaos",
    "category": "Framed Ink",
    "definition": "The contrast between ordered and random arrangements of elements as a mood or character statement.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 654
  },
  {
    "id": "framed-ink-tree-vs-forest-effect",
    "term": "Tree vs. forest effect",
    "anchor": "tree-vs-forest-effect",
    "category": "Framed Ink",
    "definition": "Insinuating complex structures with a few elements and shadows, letting the audience imagine the rest.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 655
  },
  {
    "id": "framed-ink-big-medium-small",
    "term": "Big, medium, small",
    "anchor": "big-medium-small",
    "category": "Framed Ink",
    "definition": "Scale variety in a composition that creates depth, dynamics, and the illusion of movement.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 656
  },
  {
    "id": "framed-ink-landscape-as-a-character",
    "term": "Landscape as a character",
    "anchor": "landscape-as-a-character",
    "category": "Framed Ink",
    "definition": "A landscape with its own voice, whose emotional charge varies with camera position, framing, and lighting.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 657
  },
  {
    "id": "framed-ink-conceal-and-reveal",
    "term": "Conceal and reveal",
    "anchor": "conceal-and-reveal",
    "category": "Framed Ink",
    "definition": "Applying \"less is more\" in lighting and composition, giving just enough information for the emotional complexity of the moment.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 658
  },
  {
    "id": "framed-ink-weird-beats-weird-shots",
    "term": "Weird beats, weird shots",
    "anchor": "weird-beats-weird-shots",
    "category": "Framed Ink",
    "definition": "Foreshadowing via unexpectedly composed frames (symmetry without an epic function, out-of-context cropping) to build suspense.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 659
  },
  {
    "id": "framed-ink-pov-point-of-view",
    "term": "POV (point of view)",
    "anchor": "pov-point-of-view",
    "category": "Framed Ink",
    "definition": "Placing the camera where a character is, so the audience perceives reality exactly as that character does.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 660
  },
  {
    "id": "framed-ink-keeping-the-focal-point",
    "term": "Keeping the focal point",
    "anchor": "keeping-the-focal-point",
    "category": "Framed Ink",
    "definition": "Making the last focus position of one shot coincide with the first focus point of the next.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 661
  },
  {
    "id": "framed-ink-scale-progression",
    "term": "Scale progression",
    "anchor": "scale-progression",
    "category": "Framed Ink",
    "definition": "Revealing the size of one element by comparing it, across shots, with a common element shared by both.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 662
  },
  {
    "id": "framed-ink-intercutting",
    "term": "Intercutting",
    "anchor": "intercutting",
    "category": "Framed Ink",
    "definition": "Cutting between two tension levels - what one side knows and the other does not - to create emotional effects.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 663
  },
  {
    "id": "framed-ink-icons",
    "term": "Icons",
    "anchor": "icons",
    "category": "Framed Ink",
    "definition": "Focusing on the consequences, reactions, or a distinctive signal/item around the action rather than the action itself.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 664
  },
  {
    "id": "framed-ink-action-shot",
    "term": "Action shot",
    "anchor": "action-shot",
    "category": "Framed Ink",
    "definition": "A shot defined by dynamic shapes and diagonal/tilted compositions that read as instability and alarm.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 665
  },
  {
    "id": "framed-ink-camera-motivation",
    "term": "Camera motivation",
    "anchor": "camera-motivation",
    "category": "Framed Ink",
    "definition": "An in-scene reason (a character's motion or look direction) that motivates the camera's movement.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 666
  },
  {
    "id": "framed-ink-pan",
    "term": "Pan",
    "anchor": "pan",
    "category": "Framed Ink",
    "definition": "A camera move that shifts the frame sideways through the artwork; its different frames or camera poses represent different moments within the same beat.",
    "source": "Framed Ink; Setting the Scene",
    "chapter": "Ch 03; Ch 04",
    "order": 667
  },
  {
    "id": "framed-ink-single-camera-take",
    "term": "Single camera take",
    "anchor": "single-camera-take",
    "category": "Framed Ink",
    "definition": "A sequence of frames from one continuous camera move with no cuts (e.g., the Shanghai house visit).",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 668
  },
  {
    "id": "framed-ink-line-of-connection",
    "term": "Line of connection",
    "anchor": "line-of-connection",
    "category": "Framed Ink",
    "definition": "The line between a character's gaze and its object; the camera should not cross it.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 669
  },
  {
    "id": "framed-ink-locked-camera",
    "term": "Locked camera",
    "anchor": "locked-camera",
    "category": "Framed Ink",
    "definition": "The camera held in one position while different actions take place on the same background.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 670
  },
  {
    "id": "framed-ink-locked-low-camera",
    "term": "Locked low camera",
    "anchor": "locked-low-camera",
    "category": "Framed Ink",
    "definition": "A very low locked position that keeps events feeling overpowering, consistent with the established atmosphere.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 671
  },
  {
    "id": "framed-ink-ground-plane",
    "term": "Ground plane",
    "anchor": "ground-plane",
    "category": "Framed Ink",
    "definition": "The floor rendering whose accuracy (contact points, gaps) is critical when the camera is set very low.",
    "source": "Framed Ink",
    "chapter": "Ch 03",
    "order": 672
  },
  {
    "id": "framed-ink-contrast",
    "term": "Contrast",
    "anchor": "contrast",
    "category": "Framed Ink",
    "definition": "The reason we see things and react to them; reveals and conceals, establishing a rhythm so a \"special\" element can break it.",
    "source": "Framed Ink",
    "chapter": "Ch 04",
    "order": 673
  },
  {
    "id": "framed-ink-climax",
    "term": "Climax",
    "anchor": "climax",
    "category": "Framed Ink",
    "definition": "The point where we are really close to the answer; the wildest material is left for the end.",
    "source": "Framed Ink",
    "chapter": "Ch 04",
    "order": 674
  },
  {
    "id": "framed-ink-ramping-up",
    "term": "Ramping up",
    "anchor": "ramping-up",
    "category": "Framed Ink",
    "definition": "Progressively increasing visual intensity (closer framing, more expressive shapes, lens distortion) to approach a climax.",
    "source": "Framed Ink",
    "chapter": "Ch 04",
    "order": 675
  },
  {
    "id": "framed-ink-calm-before-the-storm",
    "term": "Calm before the storm",
    "anchor": "calm-before-the-storm",
    "category": "Framed Ink",
    "definition": "Deliberately establishing a quiet or misleading tone so the coming change feels more dramatic.",
    "source": "Framed Ink",
    "chapter": "Ch 04",
    "order": 676
  },
  {
    "id": "framed-ink-the-line",
    "term": "The line",
    "anchor": "the-line",
    "category": "Framed Ink",
    "definition": "The line connecting the two main elements of a scene; the camera stays on one side so background and geography remain consistent.",
    "source": "Framed Ink",
    "chapter": "Ch 04",
    "order": 677
  },
  {
    "id": "framed-ink-transition-zone",
    "term": "Transition zone",
    "anchor": "transition-zone",
    "category": "Framed Ink",
    "definition": "The area between two scene lines where the first shot of a new setup sits to keep continuity across an exterior-to-interior transition.",
    "source": "Framed Ink",
    "chapter": "Ch 04",
    "order": 678
  },
  {
    "id": "framed-ink-visual-dominance",
    "term": "Visual dominance",
    "anchor": "visual-dominance",
    "category": "Framed Ink",
    "definition": "Control asserted by a character's elevated gaze or position (the mobster looking down on the couple).",
    "source": "Framed Ink",
    "chapter": "Ch 04",
    "order": 679
  },
  {
    "id": "framed-ink-visual-pressure",
    "term": "Visual pressure",
    "anchor": "visual-pressure",
    "category": "Framed Ink",
    "definition": "Extra tension conveyed by a pointed or aimed element (the mobster's gun toward the couple).",
    "source": "Framed Ink",
    "chapter": "Ch 04",
    "order": 680
  },
  {
    "id": "framed-ink-point-of-reference",
    "term": "Point of reference",
    "anchor": "point-of-reference",
    "category": "Framed Ink",
    "definition": "The consistent backdrop anchored to one side of \"the line\" that lets the audience track the geography.",
    "source": "Framed Ink",
    "chapter": "Ch 04",
    "order": 681
  },
  {
    "id": "framed-ink-overall-silhouette",
    "term": "Overall silhouette",
    "anchor": "overall-silhouette",
    "category": "Framed Ink",
    "definition": "The character (head or full body) recognizable in any circumstances, framing, and lighting, including front and profile and costume.",
    "source": "Framed Ink",
    "chapter": "Ch 05",
    "order": 682
  },
  {
    "id": "framed-ink-dynamics-of-expression",
    "term": "Dynamics of expression",
    "anchor": "dynamics-of-expression",
    "category": "Framed Ink",
    "definition": "The shape language of face and body poses (angular = tense, soft = relaxed, diagonals in action) that transmits a character's feelings.",
    "source": "Framed Ink",
    "chapter": "Ch 05",
    "order": 683
  },
  {
    "id": "framed-ink-panel",
    "term": "Panel (graphic novel)",
    "anchor": "panel",
    "category": "Framed Ink",
    "definition": "The still frame of the printed page whose size and shape (square, rectangular, circular, triangular, irregular, whole page) are narrative devices.",
    "source": "Framed Ink",
    "chapter": "Ch 05",
    "order": 684
  },
  {
    "id": "framed-ink-page-readability",
    "term": "Page readability",
    "anchor": "page-readability",
    "category": "Framed Ink",
    "definition": "The main priority of a page layout: the audience is there to follow a story, not to figure out the layout or panel order.",
    "source": "Framed Ink",
    "chapter": "Ch 05",
    "order": 685
  },
  {
    "id": "framed-ink-page-choreography",
    "term": "Page choreography",
    "anchor": "page-choreography",
    "category": "Framed Ink",
    "definition": "Locating the main point of each frame along a main line on a predetermined, harmonious path so the reader doesn't lose the flow.",
    "source": "Framed Ink",
    "chapter": "Ch 05",
    "order": 686
  },
  {
    "id": "framed-ink-fragmenting-the-scene",
    "term": "Fragmenting the scene",
    "anchor": "fragmenting-the-scene",
    "category": "Framed Ink",
    "definition": "Splitting a scene into panels whose size, main element, or lighting tone change when something special happens.",
    "source": "Framed Ink",
    "chapter": "Ch 05",
    "order": 687
  },
  {
    "id": "framed-ink-neutral-camera-shot",
    "term": "Neutral camera shot",
    "anchor": "neutral-camera-shot",
    "category": "Framed Ink",
    "definition": "A straight-on, un-tilted framing used as a tense pause to fully appreciate a character's expression.",
    "source": "Framed Ink",
    "chapter": "Ch 05",
    "order": 688
  },
  {
    "id": "framed-ink-speech-balloon",
    "term": "Speech balloon",
    "anchor": "speech-balloon",
    "category": "Framed Ink",
    "definition": "A word balloon whose order, shape, and color are planned per character so simultaneous conversations stay readable.",
    "source": "Framed Ink",
    "chapter": "Ch 05",
    "order": 689
  },
  {
    "id": "framed-ink-onomatopoeia",
    "term": "Onomatopoeia",
    "anchor": "onomatopoeia",
    "category": "Framed Ink",
    "definition": "The written-sound device that enriches the visuals and creates rhythms and pacing; the graphic-novel equivalent of film sound effects.",
    "source": "Framed Ink",
    "chapter": "Ch 05",
    "order": 690
  },
  {
    "id": "game-development-godot-engine",
    "term": "Godot Engine",
    "anchor": "godot-engine",
    "category": "Game Development",
    "definition": "The open-source game engine (targeting 3D point-and-click) that receives the exported Blender assets.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 07",
    "order": 691
  },
  {
    "id": "game-development-godot-scene",
    "term": "Godot scene",
    "anchor": "godot-scene",
    "category": "Game Development",
    "definition": "A saved Godot node tree (e.g. a model wrapped in a Spatial root with MeshInstance children) that can be instanced.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 07",
    "order": 692
  },
  {
    "id": "game-development-tscn",
    "term": ".tscn scene file",
    "anchor": "tscn",
    "category": "Game Development",
    "definition": "Godot's saved-scene file format that stores a node tree for reuse.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 07",
    "order": 693
  },
  {
    "id": "game-development-spatial-node",
    "term": "Spatial node",
    "anchor": "spatial-node",
    "category": "Game Development",
    "definition": "Godot's 3D root/container node (X/Y/Z), the 3D analogue of Node2D.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 07",
    "order": 694
  },
  {
    "id": "game-development-mesh-instance",
    "term": "MeshInstance node",
    "anchor": "mesh-instance",
    "category": "Game Development",
    "definition": "The node that holds a mesh inside a Godot scene.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 07",
    "order": 695
  },
  {
    "id": "game-development-skeleton-node",
    "term": "Skeleton node",
    "anchor": "skeleton-node",
    "category": "Game Development",
    "definition": "The node Godot groups the imported bones into.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 07",
    "order": 696
  },
  {
    "id": "game-development-animation-player",
    "term": "AnimationPlayer node",
    "anchor": "animation-player",
    "category": "Game Development",
    "definition": "The node that plays 2D/3D keyframed actions.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 07",
    "order": 697
  },
  {
    "id": "game-development-new-inherited",
    "term": "New Inherited",
    "anchor": "new-inherited",
    "category": "Game Development",
    "definition": "The Godot option (versus read-only Open Anyway) that wraps an imported 3D model in an editable scene.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 07",
    "order": 698
  },
  {
    "id": "game-development-reimport",
    "term": "Reimport",
    "anchor": "reimport",
    "category": "Game Development",
    "definition": "The Godot operation that re-processes an imported asset after a change.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 07",
    "order": 699
  },
  {
    "id": "game-development-godot-theme",
    "term": "Godot theme",
    "anchor": "godot-theme",
    "category": "Game Development",
    "definition": "The set of reusable style resources (StyleBox, fonts) applied to Godot UI controls.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 11",
    "order": 700
  },
  {
    "id": "game-development-canvas-layer",
    "term": "CanvasLayer",
    "anchor": "canvas-layer",
    "category": "Game Development",
    "definition": "A node that draws its UI on a separate layer with its own draw order.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 11",
    "order": 701
  },
  {
    "id": "game-development-margin-container",
    "term": "MarginContainer",
    "anchor": "margin-container",
    "category": "Game Development",
    "definition": "A container node that adds constant padding (margins) around its single child.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 11",
    "order": 702
  },
  {
    "id": "game-development-scroll-container",
    "term": "ScrollContainer",
    "anchor": "scroll-container",
    "category": "Game Development",
    "definition": "A container node that adds scroll bars when its child is larger than the view.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 11",
    "order": 703
  },
  {
    "id": "game-development-level",
    "term": "Level",
    "anchor": "level",
    "category": "Game Development",
    "definition": "A particular part of the game world the player experiences, often stored as a scene (e.g. Level-01).",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 09",
    "order": 704
  },
  {
    "id": "game-development-gizmo",
    "term": "Gizmo",
    "anchor": "gizmo",
    "category": "Game Development",
    "definition": "The on-screen handles for moving or rotating a selected object.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 09",
    "order": 705
  },
  {
    "id": "game-development-alpha-clip",
    "term": "Alpha Clip",
    "anchor": "alpha-clip",
    "category": "Game Development",
    "definition": "A material blend mode that clips out the transparent parts of a texture (used for leaves).",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 09",
    "order": 706
  },
  {
    "id": "game-development-godot-shader",
    "term": "Godot shader / ShaderMaterial",
    "anchor": "godot-shader",
    "category": "Game Development",
    "definition": "Godot's .tres shader resource holding GLSL-like code; a ShaderMaterial attaches it to a mesh.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 09",
    "order": 707
  },
  {
    "id": "game-development-gridmap",
    "term": "GridMap",
    "anchor": "gridmap",
    "category": "Game Development",
    "definition": "Godot's 3D grid-placement node, the 3D analogue of TileMap.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 09",
    "order": 708
  },
  {
    "id": "game-development-tilemap",
    "term": "TileMap",
    "anchor": "tilemap",
    "category": "Game Development",
    "definition": "The 2D grid node that uses sprites; GridMap is its 3D mesh counterpart.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 09",
    "order": 709
  },
  {
    "id": "game-development-mesh-library",
    "term": "MeshLibrary (.tres)",
    "anchor": "mesh-library",
    "category": "Game Development",
    "definition": "A resource of meshes that a GridMap places; created by converting a scene of models.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 09",
    "order": 710
  },
  {
    "id": "game-development-directional-light",
    "term": "DirectionalLight",
    "anchor": "directional-light",
    "category": "Game Development",
    "definition": "Godot's directional light (the Blender Sun equivalent) with parallel rays.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 10",
    "order": 711
  },
  {
    "id": "game-development-omni-light",
    "term": "OmniLight",
    "anchor": "omni-light",
    "category": "Game Development",
    "definition": "Godot's point light (the Blender Point equivalent) that emits in every direction.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 10",
    "order": 712
  },
  {
    "id": "game-development-spot-light",
    "term": "SpotLight",
    "anchor": "spot-light",
    "category": "Game Development",
    "definition": "Godot's spot light (the Blender Spot equivalent) with a beam-like cone.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 10",
    "order": 713
  },
  {
    "id": "game-development-indirect-energy",
    "term": "Indirect Energy",
    "anchor": "indirect-energy",
    "category": "Game Development",
    "definition": "The light property (versus direct Energy) that produces natural fill for global illumination.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 10",
    "order": 714
  },
  {
    "id": "game-development-gi-probe",
    "term": "GIProbe",
    "anchor": "gi-probe",
    "category": "Game Development",
    "definition": "The node that captures and bakes global illumination for a region of the level.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 10",
    "order": 715
  },
  {
    "id": "game-development-world-environment",
    "term": "WorldEnvironment",
    "anchor": "world-environment",
    "category": "Game Development",
    "definition": "The node holding post-processing effects (Background, ToneMap, SSR, SSAO, Glow, Adjustments).",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 10",
    "order": 716
  },
  {
    "id": "game-development-process-method",
    "term": "_process",
    "anchor": "process-method",
    "category": "Game Development",
    "definition": "Godot's per-frame virtual method used to run continuous logic such as a light switch.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 10, Ch 13",
    "order": 717
  },
  {
    "id": "game-development-audiostreamplayer",
    "term": "AudioStreamPlayer",
    "anchor": "audiostreamplayer",
    "category": "Game Development",
    "definition": "A non-positional audio node used for background music and on-demand sound effects.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 08",
    "order": 718
  },
  {
    "id": "game-development-audiostreamplayer-2d-3d",
    "term": "AudioStreamPlayer2D / 3D",
    "anchor": "audiostreamplayer-2d-3d",
    "category": "Game Development",
    "definition": "Position-aware audio nodes that add distance/panning (2D) and attenuation/Doppler (3D).",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 08",
    "order": 719
  },
  {
    "id": "game-development-sfx",
    "term": "SFX (sound effect)",
    "anchor": "sfx",
    "category": "Game Development",
    "definition": "A short, event-driven sound, distinct from looping background music.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 08",
    "order": 720
  },
  {
    "id": "game-development-audio-bus",
    "term": "Audio bus",
    "anchor": "audio-bus",
    "category": "Game Development",
    "definition": "A routed audio channel (e.g. SFX bus, Master) in Godot's audio tree.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 13",
    "order": 721
  },
  {
    "id": "game-development-decibel",
    "term": "Decibel (dB)",
    "anchor": "decibel",
    "category": "Game Development",
    "definition": "The logarithmic unit used for Godot audio volume and attenuation.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 13",
    "order": 722
  },
  {
    "id": "game-development-interpolated-camera",
    "term": "InterpolatedCamera",
    "anchor": "interpolated-camera",
    "category": "Game Development",
    "definition": "A camera node whose position is smoothed toward its target.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 12",
    "order": 723
  },
  {
    "id": "game-development-clipped-camera",
    "term": "ClippedCamera",
    "anchor": "clipped-camera",
    "category": "Game Development",
    "definition": "A camera node whose view is clipped to a bounded region.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 12",
    "order": 724
  },
  {
    "id": "game-development-raycasting",
    "term": "Raycasting",
    "anchor": "raycasting",
    "category": "Game Development",
    "definition": "Casting a ray from a point to detect objects along its path.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 12",
    "order": 725
  },
  {
    "id": "game-development-navigation-mesh",
    "term": "NavigationMesh",
    "anchor": "navigation-mesh",
    "category": "Game Development",
    "definition": "The walkable-area mesh over which agents (the player, Clara) navigate.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 12",
    "order": 726
  },
  {
    "id": "game-development-godot-area",
    "term": "Area (node)",
    "anchor": "godot-area",
    "category": "Game Development",
    "definition": "A node that detects when objects enter or exit its shape to trigger logic.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 13",
    "order": 727
  },
  {
    "id": "game-development-collision-shape",
    "term": "CollisionShape",
    "anchor": "collision-shape",
    "category": "Game Development",
    "definition": "A node that defines the physical volume of a body or area.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 12",
    "order": 728
  },
  {
    "id": "game-development-input-map",
    "term": "Input map",
    "anchor": "input-map",
    "category": "Game Development",
    "definition": "The Godot table mapping physical input devices to named actions (e.g. ui_cancel, Esc).",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 14",
    "order": 729
  },
  {
    "id": "game-development-signal",
    "term": "Signal",
    "anchor": "signal",
    "category": "Game Development",
    "definition": "A Godot event that a node emits and other nodes connect to.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 12, Ch 13",
    "order": 730
  },
  {
    "id": "game-development-event-bus",
    "term": "EventBus",
    "anchor": "event-bus",
    "category": "Game Development",
    "definition": "A singleton script centralizing cross-level signals such as change_level.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 13",
    "order": 731
  },
  {
    "id": "game-development-singleton",
    "term": "Singleton / AutoLoad",
    "anchor": "singleton",
    "category": "Game Development",
    "definition": "A globally accessible scene registered as an AutoLoad (autoloader).",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 13",
    "order": 732
  },
  {
    "id": "game-development-flicker",
    "term": "Flicker",
    "anchor": "flicker",
    "category": "Game Development",
    "definition": "A light/animation property track that varies intensity over time for a flame effect.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 13",
    "order": 733
  },
  {
    "id": "game-development-pck",
    "term": "PCK (packed resources)",
    "anchor": "pck",
    "category": "Game Development",
    "definition": "Godot's packed-resource file bundling game data for export.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 14",
    "order": 734
  },
  {
    "id": "game-development-dlc",
    "term": "DLC (downloadable content)",
    "anchor": "dlc",
    "category": "Game Development",
    "definition": "A separable content package for extending a game after release.",
    "source": "Game Dev Blender Godot",
    "chapter": "Ch 14",
    "order": 735
  },
  {
    "id": "geometry-nodes-geometry-nodes",
    "term": "Geometry Nodes",
    "anchor": "geometry-nodes",
    "category": "Geometry Nodes",
    "definition": "Blender's node-based system for procedurally building, modifying, and animating geometry, points, instances, curves, and volumes.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 1",
    "order": 736
  },
  {
    "id": "geometry-nodes-node-tree",
    "term": "node tree",
    "anchor": "node-tree",
    "category": "Geometry Nodes",
    "definition": "The connected graph of nodes and their socket links that defines a Geometry Nodes modifier's behavior.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 1-2",
    "order": 737
  },
  {
    "id": "geometry-nodes-node-input",
    "term": "node input",
    "anchor": "node-input",
    "category": "Geometry Nodes",
    "definition": "A socket on a node where data (value, vector, geometry, etc.) enters.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 1",
    "order": 738
  },
  {
    "id": "geometry-nodes-node-output",
    "term": "node output",
    "anchor": "node-output",
    "category": "Geometry Nodes",
    "definition": "A socket on a node where processed data leaves for the next node.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 1",
    "order": 739
  },
  {
    "id": "geometry-nodes-multi-connection-input",
    "term": "multi-connection input",
    "anchor": "multi-connection-input",
    "category": "Geometry Nodes",
    "definition": "An input socket that accepts more than one incoming connection at once (for example the Join Geometry input).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 1",
    "order": 740
  },
  {
    "id": "geometry-nodes-instance",
    "term": "instance",
    "anchor": "instance",
    "category": "Geometry Nodes",
    "definition": "A lightweight copy of geometry (an Object or mesh) referenced at a Point without duplicating the underlying data.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2",
    "order": 741
  },
  {
    "id": "geometry-nodes-instance-id",
    "term": "instance ID",
    "anchor": "instance-id",
    "category": "Geometry Nodes",
    "definition": "The integer index that uniquely identifies each Instance so it can be addressed and randomized individually.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 5",
    "order": 742
  },
  {
    "id": "geometry-nodes-randomization",
    "term": "randomization",
    "anchor": "randomization",
    "category": "Geometry Nodes",
    "definition": "Varying node values (via Random Value and a Seed) so repeated instances or elements differ from one another.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 5",
    "order": 743
  },
  {
    "id": "geometry-nodes-node-group",
    "term": "node group",
    "anchor": "node-group",
    "category": "Geometry Nodes",
    "definition": "A saved, reusable bundle of nodes whose inputs and outputs are exposed through Group Input / Group Output.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 5-10",
    "order": 744
  },
  {
    "id": "geometry-nodes-group-input",
    "term": "group input",
    "anchor": "group-input",
    "category": "Geometry Nodes",
    "definition": "A parameter exposed at the left edge of a node tree that can be driven by a modifier slider or another node.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 5",
    "order": 745
  },
  {
    "id": "geometry-nodes-modifier-slider",
    "term": "modifier slider",
    "anchor": "modifier-slider",
    "category": "Geometry Nodes",
    "definition": "The Properties-panel slider that surfaces a Group Input value so the node tree can be tuned per Object.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 5",
    "order": 746
  },
  {
    "id": "geometry-nodes-procedural-modeling",
    "term": "procedural modeling",
    "anchor": "procedural-modeling",
    "category": "Geometry Nodes",
    "definition": "Building geometry from parametric node rules and inputs instead of hand-placing individual vertices and edges.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 1-12",
    "order": 747
  },
  {
    "id": "geometry-nodes-node-based-workflow",
    "term": "node-based workflow",
    "anchor": "node-based-workflow",
    "category": "Geometry Nodes",
    "definition": "Editing a scene by connecting nodes and sockets rather than by direct, destructive manipulation of the mesh.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 1",
    "order": 748
  },
  {
    "id": "geometry-nodes-plant-generator",
    "term": "plant generator",
    "anchor": "plant-generator",
    "category": "Geometry Nodes",
    "definition": "A node tree that grows a plant (stem, leaves, and pot) parameterized by group inputs such as Plant Height and Leaf Count.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 10",
    "order": 749
  },
  {
    "id": "geometry-nodes-node-primitive",
    "term": "node primitive",
    "anchor": "node-primitive",
    "category": "Geometry Nodes",
    "definition": "A node that adds a base mesh or curve shape (Cube, Grid, UV Sphere, Ico Sphere, Mesh Line, Curve Line, Curve Circle, and others).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4",
    "order": 750
  },
  {
    "id": "geometry-nodes-reroute",
    "term": "Reroute",
    "anchor": "reroute",
    "category": "Geometry Nodes",
    "definition": "A connector (Node Wrangler) that passes a value through unchanged so long socket runs stay readable.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 3, 13",
    "order": 751
  },
  {
    "id": "geometry-nodes-set-shade-smooth",
    "term": "Set Shade Smooth node",
    "anchor": "set-shade-smooth",
    "category": "Geometry Nodes",
    "definition": "A node that marks a mesh (or its selection) to render with smooth shading.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2",
    "order": 752
  },
  {
    "id": "geometry-nodes-extrude-mesh-node",
    "term": "Extrude Mesh node",
    "anchor": "extrude-mesh-node",
    "category": "Geometry Nodes",
    "definition": "A node that pushes edges and faces outward along a normal or vector to add thickness or volume.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 9",
    "order": 753
  },
  {
    "id": "geometry-nodes-mesh-to-points",
    "term": "Mesh to Points node",
    "anchor": "mesh-to-points",
    "category": "Geometry Nodes",
    "definition": "A node that converts a mesh's vertices or faces into Points.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2",
    "order": 754
  },
  {
    "id": "geometry-nodes-geometry-to-instance",
    "term": "Geometry to Instance node",
    "anchor": "geometry-to-instance",
    "category": "Geometry Nodes",
    "definition": "A node that wraps each element of a collection of geometry into an Instance.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2",
    "order": 755
  },
  {
    "id": "geometry-nodes-realize-instances",
    "term": "Realize Instances node",
    "anchor": "realize-instances",
    "category": "Geometry Nodes",
    "definition": "A node that converts Instances back into real, editable geometry so modifiers and shading can act on them.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2, 14",
    "order": 756
  },
  {
    "id": "geometry-nodes-mesh-to-volume",
    "term": "Mesh to Volume node",
    "anchor": "mesh-to-volume",
    "category": "Geometry Nodes",
    "definition": "A node that converts a mesh into a volumetric field for volume-based modeling.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 757
  },
  {
    "id": "geometry-nodes-volume-to-mesh",
    "term": "Volume to Mesh node",
    "anchor": "volume-to-mesh",
    "category": "Geometry Nodes",
    "definition": "A node that converts a volume back into mesh geometry (a surface).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 758
  },
  {
    "id": "geometry-nodes-duplicate-elements",
    "term": "Duplicate Elements node",
    "anchor": "duplicate-elements",
    "category": "Geometry Nodes",
    "definition": "A node that duplicates vertices, edges, or faces (with an offset) before further processing.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2",
    "order": 759
  },
  {
    "id": "geometry-nodes-translate-instances",
    "term": "Translate Instances node",
    "anchor": "translate-instances",
    "category": "Geometry Nodes",
    "definition": "A node that moves each Instance by a local or global vector.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2, 5",
    "order": 760
  },
  {
    "id": "geometry-nodes-rotate-instances",
    "term": "Rotate Instances node",
    "anchor": "rotate-instances",
    "category": "Geometry Nodes",
    "definition": "A node that rotates each Instance by a given rotation (Euler or quaternion).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2, 5",
    "order": 761
  },
  {
    "id": "geometry-nodes-delete-geometry",
    "term": "Delete Geometry node",
    "anchor": "delete-geometry",
    "category": "Geometry Nodes",
    "definition": "A node that removes selected elements (vertices/edges/faces/instances) from a geometry field.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2",
    "order": 762
  },
  {
    "id": "geometry-nodes-random-value-node",
    "term": "Random Value node",
    "anchor": "random-value-node",
    "category": "Geometry Nodes",
    "definition": "A node that outputs a random value per element, driven by an ID and Seed, used to randomize instances and attributes.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 2, 5",
    "order": 763
  },
  {
    "id": "geometry-nodes-string-node-connection",
    "term": "string node connection",
    "anchor": "string-node-connection",
    "category": "Geometry Nodes",
    "definition": "A text (string) data type used by nodes that create and modify text, such as String to Curves.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 7",
    "order": 764
  },
  {
    "id": "geometry-nodes-string-to-curves",
    "term": "String to Curves node",
    "anchor": "string-to-curves",
    "category": "Geometry Nodes",
    "definition": "A node that converts a string of text into curves that can be turned into a mesh.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 7",
    "order": 765
  },
  {
    "id": "geometry-nodes-fill-curve",
    "term": "Fill Curve node",
    "anchor": "fill-curve",
    "category": "Geometry Nodes",
    "definition": "A node that fills open curves with faces to make a closed, solid shape.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 7",
    "order": 766
  },
  {
    "id": "geometry-nodes-flip-faces",
    "term": "Flip Faces node",
    "anchor": "flip-faces",
    "category": "Geometry Nodes",
    "definition": "A node that reverses the winding (normal direction) of faces.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 7, 14",
    "order": 767
  },
  {
    "id": "geometry-nodes-mesh-boolean",
    "term": "Mesh Boolean node",
    "anchor": "mesh-boolean",
    "category": "Geometry Nodes",
    "definition": "A node that booleans two meshes together using Union, Difference, or Intersection.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 7, 9",
    "order": 768
  },
  {
    "id": "geometry-nodes-difference-mode",
    "term": "Difference mode",
    "anchor": "difference-mode",
    "category": "Geometry Nodes",
    "definition": "The Boolean operation that subtracts one mesh from another, leaving the non-overlapping part.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 7, 9",
    "order": 769
  },
  {
    "id": "geometry-nodes-exact-solver",
    "term": "Exact solver",
    "anchor": "exact-solver",
    "category": "Geometry Nodes",
    "definition": "The Boolean solver that computes precise overlaps (as opposed to the faster, approximate one) at the cost of speed.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 9",
    "order": 770
  },
  {
    "id": "geometry-nodes-intersecting-edges",
    "term": "Intersecting Edges",
    "anchor": "intersecting-edges",
    "category": "Geometry Nodes",
    "definition": "Edges produced where two meshes cross; the Exact solver uses them to split geometry for a clean Boolean.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 9, 14",
    "order": 771
  },
  {
    "id": "geometry-nodes-curve-thickness",
    "term": "curve thickness",
    "anchor": "curve-thickness",
    "category": "Geometry Nodes",
    "definition": "The radius/depth given to a curve so it renders as a solid tube rather than a line.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 8",
    "order": 772
  },
  {
    "id": "geometry-nodes-cube-node",
    "term": "Cube node",
    "anchor": "cube-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds a cube (box) mesh with configurable size and subdivisions.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4",
    "order": 773
  },
  {
    "id": "geometry-nodes-grid-node",
    "term": "Grid node",
    "anchor": "grid-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds a flat grid mesh with configurable X/Y size and vertex count.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4, 5",
    "order": 774
  },
  {
    "id": "geometry-nodes-uv-sphere-node",
    "term": "UV Sphere node",
    "anchor": "uv-sphere-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds a UV-mapped sphere mesh.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4",
    "order": 775
  },
  {
    "id": "geometry-nodes-ico-sphere-node",
    "term": "Ico Sphere node",
    "anchor": "ico-sphere-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds an icosphere (subdivided icosahedron) mesh with a subdivision level.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4, 19",
    "order": 776
  },
  {
    "id": "geometry-nodes-mesh-line-node",
    "term": "Mesh Line node",
    "anchor": "mesh-line-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds a straight line of connected vertices (a 1D mesh).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4",
    "order": 777
  },
  {
    "id": "geometry-nodes-curve-line-node",
    "term": "Curve Line node",
    "anchor": "curve-line-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds a straight two-point curve.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4",
    "order": 778
  },
  {
    "id": "geometry-nodes-curve-circle-node",
    "term": "Curve Circle node",
    "anchor": "curve-circle-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds a circular curve, often used as the profile swept by a Curve to Mesh.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4, 11",
    "order": 779
  },
  {
    "id": "geometry-nodes-bezier-segment-node",
    "term": "Bezier Segment node",
    "anchor": "bezier-segment-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds a single Bezier curve segment.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4",
    "order": 780
  },
  {
    "id": "geometry-nodes-star-node",
    "term": "Star node",
    "anchor": "star-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds a star-shaped curve with adjustable points and radii.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4",
    "order": 781
  },
  {
    "id": "geometry-nodes-spiral-node",
    "term": "Spiral node",
    "anchor": "spiral-node",
    "category": "Geometry Nodes",
    "definition": "A node primitive that adds a spiral curve with adjustable turns and radius.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 4",
    "order": 782
  },
  {
    "id": "geometry-nodes-face-corner",
    "term": "Face Corner",
    "anchor": "face-corner",
    "category": "Geometry Nodes",
    "definition": "A data domain (per face corner) used when storing or reading attributes that vary within a single face.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 6",
    "order": 783
  },
  {
    "id": "geometry-nodes-simulation-zone",
    "term": "Simulation Zone",
    "anchor": "simulation-zone",
    "category": "Geometry Nodes",
    "definition": "A Blender 4.x (added in 4.0) node region that holds state across frames so nodes inside it run a per-frame simulation.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 15-18",
    "order": 784
  },
  {
    "id": "geometry-nodes-simulation-begin-node",
    "term": "Simulation Begin node",
    "anchor": "simulation-begin-node",
    "category": "Geometry Nodes",
    "definition": "The node that marks the start of the Simulation Zone and feeds its inputs.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 15",
    "order": 785
  },
  {
    "id": "geometry-nodes-simulation-end-node",
    "term": "Simulation End node",
    "anchor": "simulation-end-node",
    "category": "Geometry Nodes",
    "definition": "The node that marks the end of the Simulation Zone and outputs its result.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 15",
    "order": 786
  },
  {
    "id": "geometry-nodes-delta-time",
    "term": "Delta Time",
    "anchor": "delta-time",
    "category": "Geometry Nodes",
    "definition": "The elapsed time between the current and previous frame, used to scale per-frame motion in a simulation.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 15",
    "order": 787
  },
  {
    "id": "geometry-nodes-skip-boolean",
    "term": "Skip Boolean",
    "anchor": "skip-boolean",
    "category": "Geometry Nodes",
    "definition": "A flag that lets the Simulation Zone skip recomputation on a given frame.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 15",
    "order": 788
  },
  {
    "id": "geometry-nodes-simulation-input",
    "term": "Simulation Input",
    "anchor": "simulation-input",
    "category": "Geometry Nodes",
    "definition": "A value fed into the Simulation Zone from outside it (not carried over from the previous frame).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 15",
    "order": 789
  },
  {
    "id": "geometry-nodes-simulation-output",
    "term": "Simulation Output",
    "anchor": "simulation-output",
    "category": "Geometry Nodes",
    "definition": "A value passed out of the Simulation Zone to the rest of the node tree.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 15",
    "order": 790
  },
  {
    "id": "geometry-nodes-simulation-cache",
    "term": "Simulation cache",
    "anchor": "simulation-cache",
    "category": "Geometry Nodes",
    "definition": "The stored per-frame results of a Simulation Zone that can be reused to avoid recomputation.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 15, 18, 21",
    "order": 791
  },
  {
    "id": "geometry-nodes-repeat-zone",
    "term": "Repeat Zone",
    "anchor": "repeat-zone",
    "category": "Geometry Nodes",
    "definition": "A node region that loops its contents a set number of iterations (Blender 4.x feature).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 20",
    "order": 792
  },
  {
    "id": "geometry-nodes-iteration",
    "term": "Iteration",
    "anchor": "iteration",
    "category": "Geometry Nodes",
    "definition": "A single pass through a Repeat Zone, counted from 1, that can drive progressively refined geometry.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 20",
    "order": 793
  },
  {
    "id": "geometry-nodes-viewport-preview",
    "term": "viewport preview",
    "anchor": "viewport-preview",
    "category": "Geometry Nodes",
    "definition": "A low-detail, fast branch that runs only in the viewport (via Is Viewport) to keep navigation responsive.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 20",
    "order": 794
  },
  {
    "id": "geometry-nodes-transform-geometry",
    "term": "Transform Geometry node",
    "anchor": "transform-geometry",
    "category": "Geometry Nodes",
    "definition": "A node that applies a Location, Rotation, and Scale transform to a whole geometry field.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 795
  },
  {
    "id": "geometry-nodes-set-position",
    "term": "Set Position node",
    "anchor": "set-position",
    "category": "Geometry Nodes",
    "definition": "A node that repositions vertices (by a local or global offset), used to move and snap geometry.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13, 19",
    "order": 796
  },
  {
    "id": "geometry-nodes-resample-curve",
    "term": "Resample Curve node",
    "anchor": "resample-curve",
    "category": "Geometry Nodes",
    "definition": "A node that re-spaces a curve's control points to an even count, enabling even distribution along it.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 11",
    "order": 797
  },
  {
    "id": "geometry-nodes-align-rotation-to-vector",
    "term": "Align Rotation to Vector node",
    "anchor": "align-rotation-to-vector",
    "category": "Geometry Nodes",
    "definition": "A node that rotates each element so a chosen axis aligns with a target vector (often a normal).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 11, 13",
    "order": 798
  },
  {
    "id": "geometry-nodes-scale-instances",
    "term": "Scale Instances node",
    "anchor": "scale-instances",
    "category": "Geometry Nodes",
    "definition": "A node that scales each Instance by a given factor.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 799
  },
  {
    "id": "geometry-nodes-map-range",
    "term": "Map Range node",
    "anchor": "map-range",
    "category": "Geometry Nodes",
    "definition": "A node that remaps a value from one range to another, optionally with interpolation and clamping.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 800
  },
  {
    "id": "geometry-nodes-named-attribute-node",
    "term": "Named Attribute node",
    "anchor": "named-attribute-node",
    "category": "Geometry Nodes",
    "definition": "A node that reads the value of a named (stored) attribute from a geometry field.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 12, 13",
    "order": 801
  },
  {
    "id": "geometry-nodes-store-named-attribute",
    "term": "Store Named Attribute node",
    "anchor": "store-named-attribute",
    "category": "Geometry Nodes",
    "definition": "A node that writes a value into a named attribute on a chosen domain (Point, Face Corner, etc.).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 12, 13",
    "order": 802
  },
  {
    "id": "geometry-nodes-math-node",
    "term": "Math node",
    "anchor": "math-node",
    "category": "Geometry Nodes",
    "definition": "A node that performs a math operation (add, multiply, min/max, sine, etc.) on one or two values.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 803
  },
  {
    "id": "geometry-nodes-compare-node",
    "term": "Compare node",
    "anchor": "compare-node",
    "category": "Geometry Nodes",
    "definition": "A node that compares two values (equal, greater/less than, etc.) and returns a boolean.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 804
  },
  {
    "id": "geometry-nodes-set-point-radius",
    "term": "Set Point Radius node",
    "anchor": "set-point-radius",
    "category": "Geometry Nodes",
    "definition": "A node that sets the radius of points so they render as sized spheres.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 16",
    "order": 805
  },
  {
    "id": "geometry-nodes-separate-xyz",
    "term": "Separate XYZ node",
    "anchor": "separate-xyz",
    "category": "Geometry Nodes",
    "definition": "A node that splits a vector into its X, Y, and Z components.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 806
  },
  {
    "id": "geometry-nodes-combine-xyz",
    "term": "Combine XYZ node",
    "anchor": "combine-xyz",
    "category": "Geometry Nodes",
    "definition": "A node that joins three X, Y, and Z values into a single vector.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 807
  },
  {
    "id": "geometry-nodes-bake-node",
    "term": "Bake node",
    "anchor": "bake-node",
    "category": "Geometry Nodes",
    "definition": "A node that bakes a Simulation Zone's per-frame results to disk (Animation or Still mode) so they can be reused.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 18",
    "order": 808
  },
  {
    "id": "geometry-nodes-geometry-proximity",
    "term": "Geometry Proximity node",
    "anchor": "geometry-proximity",
    "category": "Geometry Nodes",
    "definition": "A node that reports the distance and position of the nearest point on a target geometry, used to snap to a surface.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13, 19-20",
    "order": 809
  },
  {
    "id": "geometry-nodes-position-node",
    "term": "Position node",
    "anchor": "position-node",
    "category": "Geometry Nodes",
    "definition": "A node that outputs the world-space position of each element.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 810
  },
  {
    "id": "geometry-nodes-spline-parameter",
    "term": "Spline Parameter node",
    "anchor": "spline-parameter",
    "category": "Geometry Nodes",
    "definition": "A node that outputs per-point parameters of a curve (factor, length, tangent, normal).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 16",
    "order": 811
  },
  {
    "id": "geometry-nodes-float-curve",
    "term": "Float Curve node",
    "anchor": "float-curve",
    "category": "Geometry Nodes",
    "definition": "A node that reads a 1D float curve (keyframes) and samples it over a domain.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 16",
    "order": 812
  },
  {
    "id": "geometry-nodes-dual-mesh",
    "term": "Dual Mesh node",
    "anchor": "dual-mesh",
    "category": "Geometry Nodes",
    "definition": "A node that generates a mesh (dual of the input) used to drive shrinkwrapping and other simulations.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 20",
    "order": 813
  },
  {
    "id": "geometry-nodes-mix-vector",
    "term": "Mix Vector node",
    "anchor": "mix-vector",
    "category": "Geometry Nodes",
    "definition": "A node that blends two vectors by a factor.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 19",
    "order": 814
  },
  {
    "id": "geometry-nodes-switch-node",
    "term": "Switch node",
    "anchor": "switch-node",
    "category": "Geometry Nodes",
    "definition": "A node that selects between two inputs based on a boolean or integer switch.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 20",
    "order": 815
  },
  {
    "id": "geometry-nodes-is-viewport",
    "term": "Is Viewport node",
    "anchor": "is-viewport",
    "category": "Geometry Nodes",
    "definition": "A node that returns true when evaluated in the viewport (as opposed to at render time).",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 20",
    "order": 816
  },
  {
    "id": "geometry-nodes-merge-by-distance-node",
    "term": "Merge By Distance node",
    "anchor": "merge-by-distance-node",
    "category": "Geometry Nodes",
    "definition": "A node that merges vertices closer than a threshold, welding near-duplicate points.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 817
  },
  {
    "id": "geometry-nodes-subdivide-mesh-node",
    "term": "Subdivide Mesh node",
    "anchor": "subdivide-mesh-node",
    "category": "Geometry Nodes",
    "definition": "A node that subdivides a mesh by cutting edges (adding detail) a set number of times.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 13",
    "order": 818
  },
  {
    "id": "geometry-nodes-collection-info",
    "term": "Collection Info node",
    "anchor": "collection-info",
    "category": "Geometry Nodes",
    "definition": "A node that pulls in the geometry of a Collection, optionally as Instances.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 12",
    "order": 819
  },
  {
    "id": "geometry-nodes-set-material",
    "term": "Set Material node",
    "anchor": "set-material",
    "category": "Geometry Nodes",
    "definition": "A node that assigns a chosen material to a geometry field.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 12",
    "order": 820
  },
  {
    "id": "geometry-nodes-velocity",
    "term": "velocity",
    "anchor": "velocity",
    "category": "Geometry Nodes",
    "definition": "The velocity (vel) attribute that stores each point's speed and direction in a Simulation Zone, driving gravity, damping, and terminal velocity.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 16-17",
    "order": 821
  },
  {
    "id": "geometry-nodes-initial-velocity",
    "term": "initial velocity",
    "anchor": "initial-velocity",
    "category": "Geometry Nodes",
    "definition": "The starting velocity given to emitted points before the simulation accumulates further motion.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 17",
    "order": 822
  },
  {
    "id": "geometry-nodes-terminal-velocity",
    "term": "terminal velocity",
    "anchor": "terminal-velocity",
    "category": "Geometry Nodes",
    "definition": "The maximum falling speed a point reaches, set by clamping the velocity attribute.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 17",
    "order": 823
  },
  {
    "id": "geometry-nodes-gravity",
    "term": "gravity",
    "anchor": "gravity",
    "category": "Geometry Nodes",
    "definition": "The constant downward acceleration (typically -9.8 on Y) added to a point's velocity each frame.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 17",
    "order": 824
  },
  {
    "id": "geometry-nodes-vel-attribute",
    "term": "vel (velocity attribute)",
    "anchor": "vel-attribute",
    "category": "Geometry Nodes",
    "definition": "The named vector attribute that carries a point's current velocity through a Simulation Zone.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 17",
    "order": 825
  },
  {
    "id": "geometry-nodes-point-emitter",
    "term": "Point Emitter",
    "anchor": "point-emitter",
    "category": "Geometry Nodes",
    "definition": "A Simulation Zone setup that re-emits points on a surface each frame (via Distribute Points on Faces) to simulate a spray.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 16",
    "order": 826
  },
  {
    "id": "geometry-nodes-point-lifetime",
    "term": "Point Lifetime",
    "anchor": "point-lifetime",
    "category": "Geometry Nodes",
    "definition": "The number of frames a point survives before it is culled, driving an age-based lifecycle.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 16",
    "order": 827
  },
  {
    "id": "hand-anatomy-carpus-group",
    "term": "Carpus group",
    "anchor": "carpus-group",
    "category": "Hand anatomy",
    "definition": "The eight wrist bones organized in a bridge-like form; the design theme carried through every stage of the hand.",
    "source": "Figure Drawing",
    "chapter": "Ch 05b",
    "order": 828
  },
  {
    "id": "hand-anatomy-carpal-tunnel",
    "term": "Carpal tunnel",
    "anchor": "carpal-tunnel",
    "category": "Hand anatomy",
    "definition": "The vacancy created beneath the bridge-like carpus group, occupied by tendons branching out into the fingers.",
    "source": "Figure Drawing",
    "chapter": "Ch 05b",
    "order": 829
  },
  {
    "id": "hand-anatomy-metacarpus",
    "term": "Metacarpus",
    "anchor": "metacarpus",
    "category": "Hand anatomy",
    "definition": "The bones of the palm; with the carpus they make up the upper half of the hand (one-third carpus, two-thirds metacarpals to the knuckles).",
    "source": "Figure Drawing",
    "chapter": "Ch 05b",
    "order": 830
  },
  {
    "id": "hand-anatomy-phalanges",
    "term": "Phalanges",
    "anchor": "phalanges",
    "category": "Hand anatomy",
    "definition": "The bones of the fingers (proximal, middle, distal) on a 3:2 proportional chain; the thumb has only a proximal and distal phalanx.",
    "source": "Figure Drawing",
    "chapter": "Ch 05b",
    "order": 831
  },
  {
    "id": "hand-anatomy-thenar-eminence",
    "term": "Thenar eminence",
    "anchor": "thenar-eminence",
    "category": "Hand anatomy",
    "definition": "One of the three major hand muscle groups, simplified into a teardrop shape where pinch/stretch occur.",
    "source": "Figure Drawing",
    "chapter": "Ch 05b",
    "order": 832
  },
  {
    "id": "hand-anatomy-hypothenar-eminence",
    "term": "Hypothenar eminence",
    "anchor": "hypothenar-eminence",
    "category": "Hand anatomy",
    "definition": "One of the three major hand muscle groups, simplified into a teardrop shape where pinch/stretch occur.",
    "source": "Figure Drawing",
    "chapter": "Ch 05b",
    "order": 833
  },
  {
    "id": "hand-anatomy-first-dorsal-interosseous",
    "term": "First dorsal interosseous",
    "anchor": "first-dorsal-interosseous",
    "category": "Hand anatomy",
    "definition": "Hand muscle whose teardrop shape compresses and pinches when the thumb moves against the index finger.",
    "source": "Figure Drawing",
    "chapter": "Ch 05b",
    "order": 834
  },
  {
    "id": "head-construction-cranial-mass",
    "term": "Cranial mass",
    "anchor": "cranial-mass",
    "category": "Head construction",
    "definition": "The sphere representing 2/3 of the entire skull.",
    "source": "Figure Drawing",
    "chapter": "Ch 03",
    "order": 835
  },
  {
    "id": "head-construction-keystone",
    "term": "Keystone",
    "anchor": "keystone",
    "category": "Head construction",
    "definition": "The bone area separating the eyes; the most important area to observe closely for likeness.",
    "source": "Figure Drawing",
    "chapter": "Ch 03",
    "order": 836
  },
  {
    "id": "head-construction-denture-sphere",
    "term": "Denture sphere",
    "anchor": "denture-sphere",
    "category": "Head construction",
    "definition": "The oval of the tooth cylinder that pushes out and away from the lower face, drawn before the lips.",
    "source": "Figure Drawing",
    "chapter": "Ch 03",
    "order": 837
  },
  {
    "id": "head-construction-eye-line",
    "term": "Eye line",
    "anchor": "eye-line",
    "category": "Head construction",
    "definition": "The horizontal line at the level of the eyes; its tilt relative to the brow and top of ear shows the head's perspective.",
    "source": "Figure Drawing",
    "chapter": "Ch 03",
    "order": 838
  },
  {
    "id": "head-construction-side-plane",
    "term": "Side plane",
    "anchor": "side-plane",
    "category": "Head construction",
    "definition": "The plane of the side of the skull, found from four points (back of skull, hairline, outside of brow, base of nose).",
    "source": "Figure Drawing",
    "chapter": "Ch 03",
    "order": 839
  },
  {
    "id": "head-construction-t-of-the-face",
    "term": "\"T\" of the face",
    "anchor": "t-of-the-face",
    "category": "Head construction",
    "definition": "The face's line of symmetry with its horizontal eye-line cross; it favors the side the head is turning and is lost in profile.",
    "source": "Figure Drawing",
    "chapter": "Ch 03",
    "order": 840
  },
  {
    "id": "imaginative-realism-capriccio",
    "term": "Capriccio",
    "anchor": "capriccio",
    "category": "Imaginative Realism",
    "definition": "An architectural fantasy that combines different buildings, ruins, or landscape elements into an extravagant juxtaposition.",
    "source": "Imaginative Realism",
    "chapter": "Ch 01 Tradition",
    "order": 841
  },
  {
    "id": "imaginative-realism-prix-de-rome",
    "term": "Prix de Rome",
    "anchor": "prix-de-rome",
    "category": "Imaginative Realism",
    "definition": "A scholarship competition in French art, architecture, and sculpture in which the award was a sponsored trip to Rome to study the old masters.",
    "source": "Imaginative Realism",
    "chapter": "Ch 01 Tradition",
    "order": 842
  },
  {
    "id": "imaginative-realism-croquis",
    "term": "Croquis",
    "anchor": "croquis",
    "category": "Imaginative Realism",
    "definition": "A small copy sketch of a composition by another artist, used as a way of learning.",
    "source": "Imaginative Realism",
    "chapter": "Ch 01 Tradition",
    "order": 843
  },
  {
    "id": "imaginative-realism-golden-age-illustrators",
    "term": "Golden-age illustrators",
    "anchor": "golden-age-illustrators",
    "category": "Imaginative Realism",
    "definition": "The mid-twentieth-century American illustrators (Rockwell, Leyendecker, Cornwell, Sundblom) who carried the realist storytelling tradition into books and magazines; their lesson is to capture the epic, not the incident.",
    "source": "Imaginative Realism",
    "chapter": "Ch 01 Tradition",
    "order": 844
  },
  {
    "id": "imaginative-realism-mahl-stick",
    "term": "Mahl stick",
    "anchor": "mahl-stick",
    "category": "Imaginative Realism",
    "definition": "A rod with a padded or cork tip held in the non-painting hand and used to steady the brush hand.",
    "source": "Imaginative Realism",
    "chapter": "Ch 02 Studio",
    "order": 845
  },
  {
    "id": "imaginative-realism-reducing-glass",
    "term": "Reducing glass",
    "anchor": "reducing-glass",
    "category": "Imaginative Realism",
    "definition": "A double-concave lens that shrinks the full composition to the palm of the hand for objective viewing.",
    "source": "Imaginative Realism",
    "chapter": "Ch 02 Studio",
    "order": 846
  },
  {
    "id": "imaginative-realism-color-rendering-index",
    "term": "Color rendering index",
    "anchor": "color-rendering-index",
    "category": "Imaginative Realism",
    "definition": "A measure of how accurately a given light source replicates the color of a test object, compared with a natural reference source of light; measured as a percentage, with 100 being the best.",
    "source": "Imaginative Realism",
    "chapter": "Ch 02 Studio",
    "order": 847
  },
  {
    "id": "imaginative-realism-fresnel-lens",
    "term": "Fresnel lens",
    "anchor": "fresnel-lens",
    "category": "Imaginative Realism",
    "definition": "A profile lens on a stage spotlight that produces a soft-edged, controllable beam with a wide/narrow knob.",
    "source": "Imaginative Realism",
    "chapter": "Ch 02 Studio",
    "order": 848
  },
  {
    "id": "imaginative-realism-barn-doors",
    "term": "Barn doors",
    "anchor": "barn-doors",
    "category": "Imaginative Realism",
    "definition": "Adjustable blades on a light that control how much light spills to the sides.",
    "source": "Imaginative Realism",
    "chapter": "Ch 02 Studio",
    "order": 849
  },
  {
    "id": "imaginative-realism-c-stand",
    "term": "C-stand",
    "anchor": "c-stand",
    "category": "Imaginative Realism",
    "definition": "A tripod designed for gripping an object at a particular angle and position.",
    "source": "Imaginative Realism",
    "chapter": "Ch 02 Studio",
    "order": 850
  },
  {
    "id": "imaginative-realism-taboret",
    "term": "Taboret",
    "anchor": "taboret",
    "category": "Imaginative Realism",
    "definition": "A small drawer unit, usually on wheels, that typically holds the palette, paints, brushes, pens, and pencils.",
    "source": "Imaginative Realism",
    "chapter": "Ch 02 Studio",
    "order": 851
  },
  {
    "id": "imaginative-realism-alkyd-medium",
    "term": "Alkyd medium",
    "anchor": "alkyd-medium",
    "category": "Imaginative Realism",
    "definition": "An oil-compatible, fast-drying medium (e.g. Liquin) that dries to a dull sheen needing later varnish.",
    "source": "Imaginative Realism",
    "chapter": "Ch 02 Studio",
    "order": 852
  },
  {
    "id": "imaginative-realism-premiere-pensee",
    "term": "Premiere pensee",
    "anchor": "premiere-pensee",
    "category": "Imaginative Realism",
    "definition": "A small, rapidly executed sketch, usually in oil, that captures the first concept of the compositional idea.",
    "source": "Imaginative Realism",
    "chapter": "Ch 03 Preliminary Sketches",
    "order": 853
  },
  {
    "id": "imaginative-realism-thumbnail-sketch",
    "term": "Thumbnail sketch",
    "anchor": "thumbnail-sketch",
    "category": "Imaginative Realism",
    "definition": "A small preliminary drawing with an especially loose or tentative statement of form.",
    "source": "Imaginative Realism",
    "chapter": "Ch 03 Preliminary Sketches",
    "order": 854
  },
  {
    "id": "imaginative-realism-flimsy",
    "term": "Flimsy",
    "anchor": "flimsy",
    "category": "Imaginative Realism",
    "definition": "Cheap, lightweight architect's sketch paper used for exploratory drawings where nothing should feel precious.",
    "source": "Imaginative Realism",
    "chapter": "Ch 03 Preliminary Sketches",
    "order": 855
  },
  {
    "id": "imaginative-realism-storyboard",
    "term": "Storyboard",
    "anchor": "storyboard",
    "category": "Imaginative Realism",
    "definition": "A series of images or illustrations, usually displayed together on a wall, to help visualize a film, website, or other sequential art form.",
    "source": "Imaginative Realism",
    "chapter": "Ch 03 Preliminary Sketches",
    "order": 856
  },
  {
    "id": "imaginative-realism-charcoal-comprehensive",
    "term": "Charcoal comprehensive",
    "anchor": "charcoal-comprehensive",
    "category": "Imaginative Realism",
    "definition": "A preliminary drawing on paper, usually at the same size as the final painting, that establishes the design; also called a cartoon.",
    "source": "Imaginative Realism",
    "chapter": "Ch 03 Preliminary Sketches",
    "order": 857
  },
  {
    "id": "imaginative-realism-cartoon",
    "term": "Cartoon",
    "anchor": "cartoon",
    "category": "Imaginative Realism",
    "definition": "A full-size tonal study or design drawing; Gurney's charcoal comprehensive is also called a cartoon.",
    "source": "Imaginative Realism",
    "chapter": "Ch 03 Preliminary Sketches",
    "order": 858
  },
  {
    "id": "imaginative-realism-eye-level",
    "term": "Eye level",
    "anchor": "eye-level",
    "category": "Imaginative Realism",
    "definition": "The height of the viewer's eye above the ground, usually represented by a horizontal line across the picture, even if the horizon itself is not visible in the scene.",
    "source": "Imaginative Realism",
    "chapter": "Ch 03 Preliminary Sketches",
    "order": 859
  },
  {
    "id": "imaginative-realism-perspective-grid",
    "term": "Perspective grid",
    "anchor": "perspective-grid",
    "category": "Imaginative Realism",
    "definition": "A series of sloping lines marked across the picture to guide the perspective.",
    "source": "Imaginative Realism",
    "chapter": "Ch 03 Preliminary Sketches",
    "order": 860
  },
  {
    "id": "imaginative-realism-life-restoration",
    "term": "Life restoration",
    "anchor": "life-restoration",
    "category": "Imaginative Realism",
    "definition": "Reconstructing the living appearance of an early human or hominin from the fossil record, combining careful observation of the known facts with reasonable speculation based on living analogues.",
    "source": "Imaginative Realism",
    "chapter": "Ch 04 History and Archaeology",
    "order": 861
  },
  {
    "id": "imaginative-realism-soft-morphology",
    "term": "Soft morphology",
    "anchor": "soft-morphology",
    "category": "Imaginative Realism",
    "definition": "Skin, muscle, hair, cartilage, and other perishable tissues that do not fossilize as readily as bones and teeth; a central challenge in restoring early humans.",
    "source": "Imaginative Realism",
    "chapter": "Ch 04 History and Archaeology",
    "order": 862
  },
  {
    "id": "imaginative-realism-hominin",
    "term": "Hominin",
    "anchor": "hominin",
    "category": "Imaginative Realism",
    "definition": "A creature that paleoanthropologists believe is a human or a human ancestor, formerly known as a hominid.",
    "source": "Imaginative Realism",
    "chapter": "Ch 04 History and Archaeology",
    "order": 863
  },
  {
    "id": "imaginative-realism-mirror-studies",
    "term": "Mirror studies",
    "anchor": "mirror-studies",
    "category": "Imaginative Realism",
    "definition": "Drawings that an artist makes of himself or herself while posing in front of a mirror.",
    "source": "Imaginative Realism",
    "chapter": "Ch 05 People",
    "order": 864
  },
  {
    "id": "imaginative-realism-tone-paper-study",
    "term": "Tone paper study",
    "anchor": "tone-paper-study",
    "category": "Imaginative Realism",
    "definition": "Laying a light overall tone with charcoal and working up the values to capture a figure's or scene's light/shade structure quickly.",
    "source": "Imaginative Realism",
    "chapter": "Ch 05 People",
    "order": 865
  },
  {
    "id": "imaginative-realism-photodependent",
    "term": "Photodependent",
    "anchor": "photodependent",
    "category": "Imaginative Realism",
    "definition": "The effect that comes from copying a photograph too closely.",
    "source": "Imaginative Realism",
    "chapter": "Ch 05 People",
    "order": 866
  },
  {
    "id": "imaginative-realism-head-maquette",
    "term": "Head maquette",
    "anchor": "head-maquette",
    "category": "Imaginative Realism",
    "definition": "A small three-dimensional head model used to study form, proportion, and light from many angles, especially for invented faces.",
    "source": "Imaginative Realism",
    "chapter": "Ch 05 People",
    "order": 867
  },
  {
    "id": "imaginative-realism-tableau",
    "term": "Tableau",
    "anchor": "tableau",
    "category": "Imaginative Realism",
    "definition": "An artful arrangement of three-dimensional objects on a stage-like surface.",
    "source": "Imaginative Realism",
    "chapter": "Ch 05 People",
    "order": 868
  },
  {
    "id": "imaginative-realism-paleoart",
    "term": "Paleoart",
    "anchor": "paleoart",
    "category": "Imaginative Realism",
    "definition": "Art that reconstructs extinct life.",
    "source": "Imaginative Realism",
    "chapter": "Ch 06 Dinosaurs",
    "order": 869
  },
  {
    "id": "imaginative-realism-maquette",
    "term": "Maquette",
    "anchor": "maquette",
    "category": "Imaginative Realism",
    "definition": "A miniature or model of a building, creature, or character constructed to explore form, lighting, or texture before proceeding to paint.",
    "source": "Imaginative Realism",
    "chapter": "Ch 06 Dinosaurs",
    "order": 870
  },
  {
    "id": "imaginative-realism-hero-maquette",
    "term": "Hero maquette",
    "anchor": "hero-maquette",
    "category": "Imaginative Realism",
    "definition": "A maquette made with additional detail, special accessories, or posable parts that serves more than one painting or provides a standard reference for a major character.",
    "source": "Imaginative Realism",
    "chapter": "Ch 06 Dinosaurs",
    "order": 871
  },
  {
    "id": "imaginative-realism-2d-to-3d-maquette",
    "term": "2D-to-3D maquette",
    "anchor": "2d-to-3d-maquette",
    "category": "Imaginative Realism",
    "definition": "A maquette that uses a flat shape (often a top view or a side view) as a starting point.",
    "source": "Imaginative Realism",
    "chapter": "Ch 06 Dinosaurs",
    "order": 872
  },
  {
    "id": "imaginative-realism-countershading",
    "term": "Countershading",
    "anchor": "countershading",
    "category": "Imaginative Realism",
    "definition": "A system of camouflage in animals in which the back is more darkly pigmented than the belly, offsetting the effects of shadowing.",
    "source": "Imaginative Realism",
    "chapter": "Ch 06 Dinosaurs",
    "order": 873
  },
  {
    "id": "imaginative-realism-camouflage",
    "term": "Camouflage",
    "anchor": "camouflage",
    "category": "Imaginative Realism",
    "definition": "The use of surface patterns or colors on an object or animal to make it blend in with the surroundings, concealing it from view.",
    "source": "Imaginative Realism",
    "chapter": "Ch 06 Dinosaurs",
    "order": 874
  },
  {
    "id": "imaginative-realism-eyestripe",
    "term": "Eyestripe",
    "anchor": "eyestripe",
    "category": "Imaginative Realism",
    "definition": "A system of camouflage in which a dark facial line or bar runs along the snout and through the eye, usually in birds and mammals and presumably in some dinosaurs.",
    "source": "Imaginative Realism",
    "chapter": "Ch 06 Dinosaurs",
    "order": 875
  },
  {
    "id": "imaginative-realism-supercilium",
    "term": "Supercilium",
    "anchor": "supercilium",
    "category": "Imaginative Realism",
    "definition": "A bright stripe or bar directly above the eyestripe, another facial marking borrowed from modern animals.",
    "source": "Imaginative Realism",
    "chapter": "Ch 06 Dinosaurs",
    "order": 876
  },
  {
    "id": "imaginative-realism-animalmorphism",
    "term": "Animalmorphism",
    "anchor": "animalmorphism",
    "category": "Imaginative Realism",
    "definition": "Designing animal characters that retain as much essential animal character as possible rather than serving as human surrogates.",
    "source": "Imaginative Realism",
    "chapter": "Ch 07 Creatures and Aliens",
    "order": 877
  },
  {
    "id": "imaginative-realism-apophenia",
    "term": "Apophenia",
    "anchor": "apophenia",
    "category": "Imaginative Realism",
    "definition": "The tendency to find meaningful patterns or draw connections in random sets of data; term coined by Klaus Conrad in 1958.",
    "source": "Imaginative Realism",
    "chapter": "Ch 07 Creatures and Aliens",
    "order": 878
  },
  {
    "id": "imaginative-realism-pareidolia",
    "term": "Pareidolia",
    "anchor": "pareidolia",
    "category": "Imaginative Realism",
    "definition": "A specific kind of apophenia in which a face or other pattern emerges from random shapes.",
    "source": "Imaginative Realism",
    "chapter": "Ch 07 Creatures and Aliens",
    "order": 879
  },
  {
    "id": "imaginative-realism-cyborg",
    "term": "Cyborg",
    "anchor": "cyborg",
    "category": "Imaginative Realism",
    "definition": "A cybernetic organism that blends natural and artificial systems.",
    "source": "Imaginative Realism",
    "chapter": "Ch 07 Creatures and Aliens",
    "order": 880
  },
  {
    "id": "imaginative-realism-schematic-maquette",
    "term": "Schematic maquette",
    "anchor": "schematic-maquette",
    "category": "Imaginative Realism",
    "definition": "A simplified architectural model with only a few characteristic geometric forms, used to check sightlines, lighting, and consistency across angles, then multiplied into full detail when drawing.",
    "source": "Imaginative Realism",
    "chapter": "Ch 08 Architecture",
    "order": 881
  },
  {
    "id": "imaginative-realism-cutters",
    "term": "Cutters",
    "anchor": "cutters",
    "category": "Imaginative Realism",
    "definition": "Uneven cardboard shapes held up (e.g., with a C-stand) in front of a light source to interrupt the light and create deliberate cast shadows on a maquette or model.",
    "source": "Imaginative Realism",
    "chapter": "Ch 08 Architecture",
    "order": 882
  },
  {
    "id": "imaginative-realism-steampunk",
    "term": "Steampunk",
    "anchor": "steampunk",
    "category": "Imaginative Realism",
    "definition": "A design philosophy that blends Victorian technology, especially steam power, with science fiction.",
    "source": "Imaginative Realism",
    "chapter": "Ch 09 Vehicles",
    "order": 883
  },
  {
    "id": "imaginative-realism-ornithopter",
    "term": "Ornithopter",
    "anchor": "ornithopter",
    "category": "Imaginative Realism",
    "definition": "A flying vehicle with beating wings, conceptually derived from birds or insects.",
    "source": "Imaginative Realism",
    "chapter": "Ch 09 Vehicles",
    "order": 884
  },
  {
    "id": "imaginative-realism-kit-bashing",
    "term": "Kit bashing",
    "anchor": "kit-bashing",
    "category": "Imaginative Realism",
    "definition": "Combining parts from many different commercial model kits (e.g., robot kits) and filling in extra shapes with putty to build a new design.",
    "source": "Imaginative Realism",
    "chapter": "Ch 09 Vehicles",
    "order": 885
  },
  {
    "id": "imaginative-realism-greebles",
    "term": "Greebles",
    "anchor": "greebles",
    "category": "Imaginative Realism",
    "definition": "Small surface details added to a machine's form to break it up and suggest internal drive mechanisms.",
    "source": "Imaginative Realism",
    "chapter": "Ch 09 Vehicles",
    "order": 886
  },
  {
    "id": "imaginative-realism-strutter",
    "term": "Strutter",
    "anchor": "strutter",
    "category": "Imaginative Realism",
    "definition": "A four-legged walking vehicle; Gurney's example is based on a ceratopsian design with the head/windshield removed.",
    "source": "Imaginative Realism",
    "chapter": "Ch 09 Vehicles",
    "order": 887
  },
  {
    "id": "imaginative-realism-alternate-history",
    "term": "Alternate history",
    "anchor": "alternate-history",
    "category": "Imaginative Realism",
    "definition": "A science fiction subgenre imagining events following a different course from some key point of divergence.",
    "source": "Imaginative Realism",
    "chapter": "Ch 09 Vehicles",
    "order": 888
  },
  {
    "id": "imaginative-realism-retrofitting",
    "term": "Retrofitting",
    "anchor": "retrofitting",
    "category": "Imaginative Realism",
    "definition": "A design strategy of modifying existing technology with updated elements to adapt it for modern uses.",
    "source": "Imaginative Realism",
    "chapter": "Ch 09 Vehicles",
    "order": 889
  },
  {
    "id": "imaginative-realism-lived-in-future",
    "term": "Lived-in future",
    "anchor": "lived-in-future",
    "category": "Imaginative Realism",
    "definition": "The sensibility of adding signs of decay and holdover technology to a future scene so it reads as a real, used world.",
    "source": "Imaginative Realism",
    "chapter": "Ch 09 Vehicles",
    "order": 890
  },
  {
    "id": "imaginative-realism-scrap-file",
    "term": "Scrap file",
    "anchor": "scrap-file",
    "category": "Imaginative Realism",
    "definition": "A personal collection of clipped photos organized in labeled file folders, used as indirect reference for light, color, and texture.",
    "source": "Imaginative Realism",
    "chapter": "Ch 09 Vehicles",
    "order": 891
  },
  {
    "id": "imaginative-realism-orientalism",
    "term": "Orientalism",
    "anchor": "orientalism",
    "category": "Imaginative Realism",
    "definition": "A genre of European and American painting of exotic Eastern cultures, growing from colonial expansion (Napoleon's 1798 Egypt) and flourishing through the nineteenth century, hovering on the boundary between reality and fantasy.",
    "source": "Imaginative Realism",
    "chapter": "Ch 10 Plein-air Studies",
    "order": 892
  },
  {
    "id": "imaginative-realism-middle-value-mumbling",
    "term": "Middle value mumbling",
    "anchor": "middle-value-mumbling",
    "category": "Imaginative Realism",
    "definition": "The tendency to paint everything in the middle of the tonal range, reducing contrast.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 893
  },
  {
    "id": "imaginative-realism-tenebrism",
    "term": "Tenebrism",
    "anchor": "tenebrism",
    "category": "Imaginative Realism",
    "definition": "A way of painting with dramatic contrasts of light and dark, especially associated with seventeenth-century followers of Caravaggio.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 894
  },
  {
    "id": "imaginative-realism-shapewelding",
    "term": "Shapewelding",
    "anchor": "shapewelding",
    "category": "Imaginative Realism",
    "definition": "Linking adjacent shapes of similar value or color into larger shape units to simplify a composition.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 895
  },
  {
    "id": "imaginative-realism-counterchange",
    "term": "Counterchange",
    "anchor": "counterchange",
    "category": "Imaginative Realism",
    "definition": "The reversal of tonal relationships between a form and its background from one end of the form to the other.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 896
  },
  {
    "id": "imaginative-realism-windmill-principle",
    "term": "Windmill principle",
    "anchor": "windmill-principle",
    "category": "Imaginative Realism",
    "definition": "A tonal-arrangement method integrating a form into its background using the four possible tonal relationships, read from Rembrandt's The Mill.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 897
  },
  {
    "id": "imaginative-realism-saccade",
    "term": "Saccade",
    "anchor": "saccade",
    "category": "Imaginative Realism",
    "definition": "A straight jagged leap of the eye between fixations, occurring three to five times per second.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 898
  },
  {
    "id": "imaginative-realism-fixation",
    "term": "Fixation",
    "anchor": "fixation",
    "category": "Imaginative Realism",
    "definition": "A brief pause of the eye's center of vision (fovea) during scanning.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 899
  },
  {
    "id": "imaginative-realism-scanpath",
    "term": "Scanpath",
    "anchor": "scanpath",
    "category": "Imaginative Realism",
    "definition": "A computer-generated map of a viewer's eye movements over an image.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 900
  },
  {
    "id": "imaginative-realism-eye-tracking-heatmap",
    "term": "Eye-tracking heatmap",
    "anchor": "eye-tracking-heatmap",
    "category": "Imaginative Realism",
    "definition": "A composite image aggregating a group's eye-movement data to show where most viewers look.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 901
  },
  {
    "id": "imaginative-realism-spokewheeling",
    "term": "Spokewheeling",
    "anchor": "spokewheeling",
    "category": "Imaginative Realism",
    "definition": "Lines converging on a single point, like spokes around a hub, to pull the eye toward the center.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 902
  },
  {
    "id": "imaginative-realism-clustering",
    "term": "Clustering",
    "anchor": "clustering",
    "category": "Imaginative Realism",
    "definition": "Arranging a tight group of detail in one area of a composition, contrasted with large empty areas.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 903
  },
  {
    "id": "imaginative-realism-flagging-the-head",
    "term": "Flagging the head",
    "anchor": "flagging-the-head",
    "category": "Imaginative Realism",
    "definition": "Placing a white shape behind the head of the most important character to direct attention.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 904
  },
  {
    "id": "imaginative-realism-confetti",
    "term": "Confetti",
    "anchor": "confetti",
    "category": "Imaginative Realism",
    "definition": "A paint handling that places small, colorful strokes within the system of perspective to trick the eye into seeing a passage as more finished than it really is.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 905
  },
  {
    "id": "imaginative-realism-vignette",
    "term": "Vignette",
    "anchor": "vignette",
    "category": "Imaginative Realism",
    "definition": "A design strategy that lets a picture flow informally into the white of a page, in many variants (soft blur, torn paper, form-link, real white, wraparound, sketchy edge, breakaway, cutback, fadeaway).",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 906
  },
  {
    "id": "imaginative-realism-repoussoir",
    "term": "Repoussoir",
    "anchor": "repoussoir",
    "category": "Imaginative Realism",
    "definition": "A foreground object or strong foreground color that pushes back the far spaces and enhances the illusion of distance.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 907
  },
  {
    "id": "imaginative-realism-supreme-moment",
    "term": "Supreme moment",
    "anchor": "supreme-moment",
    "category": "Imaginative Realism",
    "definition": "Howard Pyle's term for the part of a narrative with the most suspense, the best single moment to depict.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 908
  },
  {
    "id": "imaginative-realism-keyframe-pose",
    "term": "Keyframe pose",
    "anchor": "keyframe-pose",
    "category": "Imaginative Realism",
    "definition": "An animators' term for a telling moment of extreme action that conveys continuous movement.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 909
  },
  {
    "id": "imaginative-realism-cutaway-view",
    "term": "Cutaway view",
    "anchor": "cutaway-view",
    "category": "Imaginative Realism",
    "definition": "A rendering that removes the outer layers of a vehicle or building to reveal its interior structure.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 910
  },
  {
    "id": "imaginative-realism-aerial-view",
    "term": "Aerial view",
    "anchor": "aerial-view",
    "category": "Imaginative Realism",
    "definition": "Also called a bird's-eye view, presenting the spatial relationships of buildings and streets while still showing the facades.",
    "source": "Imaginative Realism",
    "chapter": "Ch 11 Composition",
    "order": 911
  },
  {
    "id": "imaginative-realism-ebauche",
    "term": "Ebauche",
    "anchor": "ebauche",
    "category": "Imaginative Realism",
    "definition": "A quick, loose, semi-transparent first layer of paint covering the whole canvas to establish the light and dark masses and the basic color statement.",
    "source": "Imaginative Realism",
    "chapter": "Ch 12 Procedure",
    "order": 912
  },
  {
    "id": "imaginative-realism-imprimatura",
    "term": "Imprimatura",
    "anchor": "imprimatura",
    "category": "Imaginative Realism",
    "definition": "A complete tone laid over the whole surface to get rid of the white of the support and set the basic color mood of the scene.",
    "source": "Imaginative Realism",
    "chapter": "Ch 12 Procedure",
    "order": 913
  },
  {
    "id": "imaginative-realism-impasto",
    "term": "Impasto",
    "anchor": "impasto",
    "category": "Imaginative Realism",
    "definition": "Paint applied thickly so that parts are raised above the normal surface texture of the canvas, a physical quality of the object as well as an illusion.",
    "source": "Imaginative Realism",
    "chapter": "Ch 12 Procedure",
    "order": 914
  },
  {
    "id": "imaginative-realism-glazing-in-the-pits",
    "term": "Glazing in the pits",
    "anchor": "glazing-in-the-pits",
    "category": "Imaginative Realism",
    "definition": "A Rembrandt device of sinking a thin glaze into the hollows of a dried impasto and wiping it from the ridges to accentuate the texture.",
    "source": "Imaginative Realism",
    "chapter": "Ch 12 Procedure",
    "order": 915
  },
  {
    "id": "imaginative-realism-top-dragging",
    "term": "Top-dragging",
    "anchor": "top-dragging",
    "category": "Imaginative Realism",
    "definition": "A Rembrandt device of dragging thick light paint over a pretextured base so it catches on the crests of the impasto, suggesting texture in a few strokes.",
    "source": "Imaginative Realism",
    "chapter": "Ch 12 Procedure",
    "order": 916
  },
  {
    "id": "imaginative-realism-animatic",
    "term": "Animatic",
    "anchor": "animatic",
    "category": "Imaginative Realism",
    "definition": "An animated storyboard used to let the director and effects supervisor see how the parts of a scene will move.",
    "source": "Imaginative Realism; Setting the Scene",
    "chapter": "Ch 13; Ch 07",
    "order": 917
  },
  {
    "id": "imaginative-realism-matte-painting",
    "term": "Matte painting",
    "anchor": "matte-painting",
    "category": "Imaginative Realism",
    "definition": "A photoreal setting, now created entirely digitally, that is intercut with principal photography in live action or used as a background in animated films.",
    "source": "Imaginative Realism",
    "chapter": "Ch 13 Careers",
    "order": 918
  },
  {
    "id": "imaginative-realism-visual-development",
    "term": "Visual development",
    "anchor": "visual-development",
    "category": "Imaginative Realism",
    "definition": "Concept artwork created early in a film's development to help define its look and to attract cast members or financial backers.",
    "source": "Imaginative Realism",
    "chapter": "Ch 13 Careers",
    "order": 919
  },
  {
    "id": "imaginative-realism-image-board",
    "term": "Image board",
    "anchor": "image-board",
    "category": "Imaginative Realism",
    "definition": "A wall covered with clippings and sketches used by a theme park design team to generate and narrow ideas.",
    "source": "Imaginative Realism",
    "chapter": "Ch 13 Careers",
    "order": 920
  },
  {
    "id": "imaginative-realism-mass-model",
    "term": "Mass model",
    "anchor": "mass-model",
    "category": "Imaginative Realism",
    "definition": "A rough physical model, similar to a maquette, used to define how people will flow through a themed attraction.",
    "source": "Imaginative Realism",
    "chapter": "Ch 13 Careers",
    "order": 921
  },
  {
    "id": "imaginative-realism-location-based-entertainment",
    "term": "Location-based entertainment",
    "anchor": "location-based-entertainment",
    "category": "Imaginative Realism",
    "definition": "The broader field of themed, place-based experiences that includes theme parks, hotels, casinos, and themed retail establishments.",
    "source": "Imaginative Realism",
    "chapter": "Ch 13 Careers",
    "order": 922
  },
  {
    "id": "landmarks-and-construction-landmarks",
    "term": "Landmarks",
    "anchor": "landmarks",
    "category": "Landmarks and construction",
    "definition": "Areas of bone that visibly push through the flesh (clavicles, sternum, iliac crest, etc.), giving the figure the feel of an active skeleton.",
    "source": "Figure Drawing",
    "chapter": "Ch 02",
    "order": 923
  },
  {
    "id": "landmarks-and-construction-line-of-symmetry",
    "term": "Line of symmetry",
    "anchor": "line-of-symmetry",
    "category": "Landmarks and construction",
    "definition": "The line down the center of the skeleton; a \"C\" curve when rib cage and pelvis face the same way, an \"S\" curve when twisting.",
    "source": "Figure Drawing",
    "chapter": "Ch 02",
    "order": 924
  },
  {
    "id": "landmarks-and-construction-t-overlap",
    "term": "\"T\" overlap",
    "anchor": "t-overlap",
    "category": "Landmarks and construction",
    "definition": "One line clearly passing in front of or behind another, the main tool for showing recession and depth.",
    "source": "Figure Drawing",
    "chapter": "Ch 02",
    "order": 925
  },
  {
    "id": "landmarks-and-construction-pinch",
    "term": "Pinch",
    "anchor": "pinch",
    "category": "Landmarks and construction",
    "definition": "Flesh compressed where two bone areas move toward each other, shown with a \"C\" curve.",
    "source": "Figure Drawing",
    "chapter": "Ch 02",
    "order": 926
  },
  {
    "id": "landmarks-and-construction-stretch",
    "term": "Stretch",
    "anchor": "stretch",
    "category": "Landmarks and construction",
    "definition": "Elongation where two bone areas move apart, shown with an \"S\" curve.",
    "source": "Figure Drawing",
    "chapter": "Ch 02",
    "order": 927
  },
  {
    "id": "landmarks-and-construction-clavicle",
    "term": "Clavicle",
    "anchor": "clavicle",
    "category": "Landmarks and construction",
    "definition": "The bone resembling bicycle handlebars that acts as a lever for arm movement.",
    "source": "Figure Drawing",
    "chapter": "Ch 02",
    "order": 928
  },
  {
    "id": "landmarks-and-construction-sternum",
    "term": "Sternum",
    "anchor": "sternum",
    "category": "Landmarks and construction",
    "definition": "The bone fusing the rib cage in the front; with the manubrium resembles a neck tie.",
    "source": "Figure Drawing",
    "chapter": "Ch 02",
    "order": 929
  },
  {
    "id": "landmarks-and-construction-scapula",
    "term": "Scapula",
    "anchor": "scapula",
    "category": "Landmarks and construction",
    "definition": "The free-floating bone that guides and aids the movement of the arms.",
    "source": "Figure Drawing",
    "chapter": "Ch 02",
    "order": 930
  },
  {
    "id": "landmarks-and-construction-great-trochanter",
    "term": "Great trochanter",
    "anchor": "great-trochanter",
    "category": "Landmarks and construction",
    "definition": "The top of the femur, a landmark at the hip used to locate the leg's placement.",
    "source": "Figure Drawing",
    "chapter": "Ch 02",
    "order": 931
  },
  {
    "id": "landmarks-and-construction-shoulder-girdle",
    "term": "Shoulder girdle",
    "anchor": "shoulder-girdle",
    "category": "Landmarks and construction",
    "definition": "The perspectival unit of clavicle (front) and scapula (back) sitting on the rib cage; moves independently and organizes the shoulders.",
    "source": "Figure Drawing",
    "chapter": "Ch 02, Ch 05a",
    "order": 932
  },
  {
    "id": "landmarks-and-construction-negative-space",
    "term": "Negative space",
    "anchor": "negative-space",
    "category": "Landmarks and construction",
    "definition": "The shapes surrounding the figure, designed through limited, curve-based line use (fluid/rhythmic on the passive side, jagged on the pinched side).",
    "source": "Figure Drawing",
    "chapter": "Ch 02, Ch 04",
    "order": 933
  },
  {
    "id": "leg-and-foot-anatomy-abduction",
    "term": "Abduction",
    "anchor": "abduction",
    "category": "Leg and foot anatomy",
    "definition": "Moving the leg away from the body; the abductor muscle shapes are compressed during this movement.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 934
  },
  {
    "id": "leg-and-foot-anatomy-adduction",
    "term": "Adduction",
    "anchor": "adduction",
    "category": "Leg and foot anatomy",
    "definition": "Moving the leg toward the body; the opposing movement to abduction in the leg's muscle design.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 935
  },
  {
    "id": "leg-and-foot-anatomy-tensor-fascia-lata",
    "term": "Tensor fascia lata",
    "anchor": "tensor-fascia-lata",
    "category": "Leg and foot anatomy",
    "definition": "Hip muscle originating under the iliac crest that abducts and medially rotates the thigh; represented as an ellipse.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 936
  },
  {
    "id": "leg-and-foot-anatomy-gluteus-medius",
    "term": "Gluteus medius",
    "anchor": "gluteus-medius",
    "category": "Leg and foot anatomy",
    "definition": "Hip muscle represented as a triangle, very similar to the shape of the deltoid.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 937
  },
  {
    "id": "leg-and-foot-anatomy-gluteus-maximus",
    "term": "Gluteus maximus",
    "anchor": "gluteus-maximus",
    "category": "Leg and foot anatomy",
    "definition": "Muscle involved in both adduction and abduction; simplified as a butterfly shape.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 938
  },
  {
    "id": "leg-and-foot-anatomy-adductors",
    "term": "Adductors (longus and magnus)",
    "anchor": "adductors",
    "category": "Leg and foot anatomy",
    "definition": "Hip muscles whose primary shape is a triangle with the base along the back of the femur and the tip toward the pubic bone.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 939
  },
  {
    "id": "leg-and-foot-anatomy-iliotibial-tract",
    "term": "Iliotibial tract",
    "anchor": "iliotibial-tract",
    "category": "Leg and foot anatomy",
    "definition": "Band on the side of the leg; a point of insertion for the tensor fascia, sitting over the vastus lateralis and inserting into the tibia; a wrench-grabbing-the-femur shape.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 940
  },
  {
    "id": "leg-and-foot-anatomy-sartorius",
    "term": "Sartorius",
    "anchor": "sartorius",
    "category": "Leg and foot anatomy",
    "definition": "Muscle flexing the lower leg and rotating it medially; a long \"S\" curve from the iliac crest to the inside of the tibia.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 941
  },
  {
    "id": "leg-and-foot-anatomy-hamstrings",
    "term": "Hamstrings",
    "anchor": "hamstrings",
    "category": "Leg and foot anatomy",
    "definition": "The three large back-of-leg muscles (semimembranosus, semitendinosus, biceps femoris) flexing the knee; an ellipse with two tendon legs.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 942
  },
  {
    "id": "leg-and-foot-anatomy-quadriceps",
    "term": "Quadriceps",
    "anchor": "quadriceps",
    "category": "Leg and foot anatomy",
    "definition": "The four-muscle group on the front of the femur (vastus medialis, vastus lateralis, rectus femoris, vastus intermedius) flexing the hip and extending the knee; a large ellipse.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 943
  },
  {
    "id": "leg-and-foot-anatomy-soleus",
    "term": "Soleus",
    "anchor": "soleus",
    "category": "Leg and foot anatomy",
    "definition": "Calf muscle, grouped with the gastrocnemius, raising the heel and preventing the figure from falling forward.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 944
  },
  {
    "id": "leg-and-foot-anatomy-gastrocnemius",
    "term": "Gastrocnemius",
    "anchor": "gastrocnemius",
    "category": "Leg and foot anatomy",
    "definition": "Calf muscle, grouped with the soleus; origin at the fibula, inserting into the calcaneus/heel block.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 945
  },
  {
    "id": "leg-and-foot-anatomy-calcaneus",
    "term": "Calcaneus",
    "anchor": "calcaneus",
    "category": "Leg and foot anatomy",
    "definition": "The heel block into which the calf muscle inserts; a cube in the foot's structural design.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c, Ch 05d",
    "order": 946
  },
  {
    "id": "leg-and-foot-anatomy-achilles-tendon",
    "term": "Achilles tendon",
    "anchor": "achilles-tendon",
    "category": "Leg and foot anatomy",
    "definition": "The more square/block-like bottom that the large calf ellipse trails into.",
    "source": "Figure Drawing",
    "chapter": "Ch 05c",
    "order": 947
  },
  {
    "id": "leg-and-foot-anatomy-form-matches-function",
    "term": "Form matching function",
    "anchor": "form-matches-function",
    "category": "Leg and foot anatomy",
    "definition": "The natural principle that a form is designed to match its needed function, illustrated by the foot's support/weight-absorption design.",
    "source": "Figure Drawing",
    "chapter": "Ch 05d",
    "order": 948
  },
  {
    "id": "leg-and-foot-anatomy-longitudinal-arch",
    "term": "Longitudinal arch",
    "anchor": "longitudinal-arch",
    "category": "Leg and foot anatomy",
    "definition": "The front-to-back arch of the foot (example A), built in the structural design as a bridge forward in space.",
    "source": "Figure Drawing",
    "chapter": "Ch 05d",
    "order": 949
  },
  {
    "id": "leg-and-foot-anatomy-transverse-arch",
    "term": "Transverse arch",
    "anchor": "transverse-arch",
    "category": "Leg and foot anatomy",
    "definition": "The side-to-side arch of the foot (example B).",
    "source": "Figure Drawing",
    "chapter": "Ch 05d",
    "order": 950
  },
  {
    "id": "leg-and-foot-anatomy-tarsus",
    "term": "Tarsus",
    "anchor": "tarsus",
    "category": "Leg and foot anatomy",
    "definition": "The largest bone collection of the foot (roughly half the foot), reduced in the structural design to a sphere and the heel cube.",
    "source": "Figure Drawing",
    "chapter": "Ch 05d",
    "order": 951
  },
  {
    "id": "leg-and-foot-anatomy-metatarsus",
    "term": "Metatarsus",
    "anchor": "metatarsus",
    "category": "Leg and foot anatomy",
    "definition": "The mid-foot bone group connecting the tarsus to the ground plane; designed as a box built from an \"S\" curve, similar to a slide.",
    "source": "Figure Drawing",
    "chapter": "Ch 05d",
    "order": 952
  },
  {
    "id": "light-and-shadow-eight-conditions-of-light",
    "term": "Eight conditions of light",
    "anchor": "eight-conditions-of-light",
    "category": "Light and shadow",
    "definition": "The set of light conditions with the edges used to integrate them, diagrammed in the closing chapter.",
    "source": "Figure Drawing",
    "chapter": "Ch 07",
    "order": 953
  },
  {
    "id": "light-and-shadow-value-shifts-equal-surface-changes",
    "term": "Value shifts equal surface changes",
    "anchor": "value-shifts-equal-surface-changes",
    "category": "Light and shadow",
    "definition": "The rule that a change in value on the figure describes a change in surface, in exactly the same way as a wrapping line.",
    "source": "Figure Drawing",
    "chapter": "Ch 07",
    "order": 954
  },
  {
    "id": "light-and-shadow-hard-light",
    "term": "Hard light",
    "anchor": "hard-light",
    "category": "Light and shadow",
    "definition": "Light whose rays are aligned in a singular direction, casting hard-edged shadows.",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 955
  },
  {
    "id": "light-and-shadow-soft-light",
    "term": "Soft light",
    "anchor": "soft-light",
    "category": "Light and shadow",
    "definition": "Diffuse light from many points, casting soft-edged shadows.",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 956
  },
  {
    "id": "light-and-shadow-local-light",
    "term": "Local light",
    "anchor": "local-light",
    "category": "Light and shadow",
    "definition": "A light source at a finite distance whose rays fan out (contrast with sunlight).",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 957
  },
  {
    "id": "light-and-shadow-light-decay",
    "term": "Light decay",
    "anchor": "light-decay",
    "category": "Light and shadow",
    "definition": "The diminishing of light strength with distance from its source (a.k.a. falloff).",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 958
  },
  {
    "id": "light-and-shadow-occlusion",
    "term": "Occlusion",
    "anchor": "occlusion",
    "category": "Light and shadow",
    "definition": "Shadow cast where two adjoining surfaces meet and block light.",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 959
  },
  {
    "id": "light-and-shadow-occlusion-shadow",
    "term": "Occlusion shadow",
    "anchor": "occlusion-shadow",
    "category": "Light and shadow",
    "definition": "The darkest part of a cast shadow where a form meets a surface or in cavities.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 960
  },
  {
    "id": "light-and-shadow-edge-rim-light",
    "term": "Edge/rim light",
    "anchor": "edge-rim-light",
    "category": "Light and shadow",
    "definition": "Back light illuminating only an object's edge to strengthen its silhouette.",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 961
  },
  {
    "id": "light-and-shadow-half-light",
    "term": "Half-light",
    "anchor": "half-light",
    "category": "Light and shadow",
    "definition": "Lighting in which only half an object or scene is illuminated.",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 962
  },
  {
    "id": "light-and-shadow-reflected-light",
    "term": "Reflected light",
    "anchor": "reflected-light",
    "category": "Light and shadow",
    "definition": "Light bouncing off one surface to illuminate another (a.k.a. bounced/fill light).",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 963
  },
  {
    "id": "light-and-shadow-sunbeams",
    "term": "Sunbeams",
    "anchor": "sunbeams",
    "category": "Light and shadow",
    "definition": "Illuminated atmospheric shafts / edges of cloud shadows.",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 964
  },
  {
    "id": "light-and-shadow-atmospheric-perspective",
    "term": "Atmospheric perspective",
    "anchor": "atmospheric-perspective",
    "category": "Light and shadow",
    "definition": "Reduced value contrast and saturation with distance.",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 965
  },
  {
    "id": "light-and-shadow-cast-shadow",
    "term": "Cast shadow",
    "anchor": "cast-shadow",
    "category": "Light and shadow",
    "definition": "The shadow a form projects onto another surface.",
    "source": "How to Render",
    "chapter": "Ch 02",
    "order": 966
  },
  {
    "id": "light-and-shadow-terminator",
    "term": "Terminator",
    "anchor": "terminator",
    "category": "Light and shadow",
    "definition": "The line where the light side transitions to the shadow side (where light rays are tangent).",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 967
  },
  {
    "id": "light-and-shadow-core-shadow",
    "term": "Core shadow",
    "anchor": "core-shadow",
    "category": "Light and shadow",
    "definition": "The dark band of gradation starting at the terminator on the shadow side.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 968
  },
  {
    "id": "light-and-shadow-passive-highlight",
    "term": "Passive highlight",
    "anchor": "passive-highlight",
    "category": "Light and shadow",
    "definition": "The brightest area of a matte surface, fixed relative to the light source.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 969
  },
  {
    "id": "light-and-shadow-reflective-highlight",
    "term": "Reflective highlight",
    "anchor": "reflective-highlight",
    "category": "Light and shadow",
    "definition": "The reflection of the light source, which moves with the viewer.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 970
  },
  {
    "id": "light-and-shadow-accelerating-gradation",
    "term": "Accelerating gradation",
    "anchor": "accelerating-gradation",
    "category": "Light and shadow",
    "definition": "Value change that speeds up near the core shadow rather than running linear.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 971
  },
  {
    "id": "light-and-shadow-angle-of-incidence",
    "term": "Angle of incidence",
    "anchor": "angle-of-incidence",
    "category": "Light and shadow",
    "definition": "The angle at which light rays strike a surface, governing its value (a.k.a. light ray angle).",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 972
  },
  {
    "id": "light-and-shadow-kelvin-scale",
    "term": "Kelvin scale",
    "anchor": "kelvin-scale",
    "category": "Light and shadow",
    "definition": "The color-temperature scale (e.g. 5500 K for daylight) used to set realistic natural lighting.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 05",
    "order": 973
  },
  {
    "id": "light-and-shadow-blackbody-node",
    "term": "Blackbody node",
    "anchor": "blackbody-node",
    "category": "Light and shadow",
    "definition": "The node that converts a Kelvin color-temperature value into an RGB color for a light's Color socket.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 05",
    "order": 974
  },
  {
    "id": "light-and-shadow-sky-texture-node",
    "term": "Sky Texture node",
    "anchor": "sky-texture-node",
    "category": "Light and shadow",
    "definition": "The World node that adds procedural sky lighting with its own sun (Sun Size, Sun Intensity, Elevation, Altitude, Air, Dust, Ozone).",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 05",
    "order": 975
  },
  {
    "id": "light-and-shadow-color-balance-node",
    "term": "Color Balance node",
    "anchor": "color-balance-node",
    "category": "Light and shadow",
    "definition": "The compositing node that adjusts the render's color/values (Gain) to change its mood.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 13",
    "order": 976
  },
  {
    "id": "light-and-shadow-glare-node",
    "term": "Glare node",
    "anchor": "glare-node",
    "category": "Light and shadow",
    "definition": "The compositing node that adds lens flares/glows (e.g. Fog Glow) around bright areas.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 13",
    "order": 977
  },
  {
    "id": "light-and-shadow-light-power",
    "term": "Power (light)",
    "anchor": "light-power",
    "category": "Light and shadow",
    "definition": "A light's emitted energy (watts) controlling its brightness, the primary knob for light strength.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 09",
    "order": 978
  },
  {
    "id": "light-and-shadow-area-light-size",
    "term": "Size (area light)",
    "anchor": "area-light-size",
    "category": "Light and shadow",
    "definition": "An area light's physical size; larger gives softer shadows, smaller gives harder shadows.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 09",
    "order": 979
  },
  {
    "id": "light-and-shadow-irradiance-volume",
    "term": "Irradiance Volume",
    "anchor": "irradiance-volume",
    "category": "Light and shadow",
    "definition": "An EEVEE light probe that captures indirect/ambient (irradiance) light from the environment to improve shading accuracy.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 10",
    "order": 980
  },
  {
    "id": "light-and-shadow-bake-indirect-lighting",
    "term": "Bake Indirect Lighting",
    "anchor": "bake-indirect-lighting",
    "category": "Light and shadow",
    "definition": "The probe action that bakes the scene's indirect light (and optionally the cubemap) into a probe for reuse.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 10",
    "order": 981
  },
  {
    "id": "reflectivity-reflectivity",
    "term": "Reflectivity",
    "anchor": "reflectivity",
    "category": "Reflectivity",
    "definition": "The behavior of light on a surface; the subject of the book's second half.",
    "source": "How to Render",
    "chapter": "Introduction",
    "order": 982
  },
  {
    "id": "reflectivity-fresnel-effect",
    "term": "Fresnel Effect",
    "anchor": "fresnel-effect",
    "category": "Reflectivity",
    "definition": "Reflection strength grows stronger as the surface rolls away from the line of sight (weakest at perpendicular, strongest at tangent); chrome is 100% shiny from any angle.",
    "source": "How to Render",
    "chapter": "Ch 07",
    "order": 983
  },
  {
    "id": "reflectivity-perceived-reflectivity",
    "term": "Perceived reflectivity",
    "anchor": "perceived-reflectivity",
    "category": "Reflectivity",
    "definition": "The brain reads light values as mostly matte and dark values as mostly reflective; contrast between reflection and base paint makes a surface look shinier.",
    "source": "How to Render",
    "chapter": "Ch 07-09",
    "order": 984
  },
  {
    "id": "reflectivity-reflection-flipping",
    "term": "Reflection flipping",
    "anchor": "reflection-flipping",
    "category": "Reflectivity",
    "definition": "The environment appearing upside down on a shiny concave surface because the reflecting sight lines invert it.",
    "source": "How to Render",
    "chapter": "Ch 07",
    "order": 985
  },
  {
    "id": "reflectivity-reflection-pools-puddles",
    "term": "Reflection pools/puddles",
    "anchor": "reflection-pools-puddles",
    "category": "Reflectivity",
    "definition": "Floating-island reflections caused by reflection flipping, often melting into one continuous perimeter.",
    "source": "How to Render",
    "chapter": "Ch 07",
    "order": 986
  },
  {
    "id": "reflectivity-double-bounce-reflection",
    "term": "Double-bounce reflection",
    "anchor": "double-bounce-reflection",
    "category": "Reflectivity",
    "definition": "A sight line bouncing off one reflective surface onto another and then to a different part of the environment, changing the reflected color.",
    "source": "How to Render",
    "chapter": "Ch 07",
    "order": 987
  },
  {
    "id": "reflectivity-clear-coat",
    "term": "Clear coat",
    "anchor": "clear-coat",
    "category": "Reflectivity",
    "definition": "The transparent reflective layer over a base paint (or carbon weave) that carries the environment's reflections.",
    "source": "How to Render",
    "chapter": "Ch 07-08",
    "order": 988
  },
  {
    "id": "reflectivity-fresnel-layer-mask",
    "term": "Fresnel layer mask",
    "anchor": "fresnel-layer-mask",
    "category": "Reflectivity",
    "definition": "An airbrushed layer mask that fades reflections where the line of sight is perpendicular, creating the Fresnel Effect.",
    "source": "How to Render",
    "chapter": "Ch 08",
    "order": 989
  },
  {
    "id": "reflectivity-sky-gradation",
    "term": "Sky gradation",
    "anchor": "sky-gradation",
    "category": "Reflectivity",
    "definition": "The sky's own value change - darkest straight up, lightest at the horizon (dust, smog, moisture) - that chrome reflects directly.",
    "source": "How to Render",
    "chapter": "Ch 09",
    "order": 990
  },
  {
    "id": "reflectivity-metallic-paint-metal-flake",
    "term": "Metallic paint / metal flake",
    "anchor": "metallic-paint-metal-flake",
    "category": "Reflectivity",
    "definition": "A base coat of tiny floating mirrors (flakes) at different angles that scatter sight lines back to the light source from a wider area, intensifying the light reflection.",
    "source": "How to Render",
    "chapter": "Ch 10",
    "order": 991
  },
  {
    "id": "reflectivity-color-dodge",
    "term": "Color dodge (rendering use)",
    "anchor": "color-dodge",
    "category": "Reflectivity",
    "definition": "Softly expanding or lightening a base coat toward the light source's color to simulate metallic reflection.",
    "source": "How to Render",
    "chapter": "Ch 10",
    "order": 992
  },
  {
    "id": "reflectivity-subsurface-scattering",
    "term": "Subsurface scattering",
    "anchor": "subsurface-scattering",
    "category": "Reflectivity",
    "definition": "Light penetrating a translucent material and scattering within it, creating a glowing effect.",
    "source": "How to Render",
    "chapter": "Ch 10",
    "order": 993
  },
  {
    "id": "reflectivity-refraction",
    "term": "Refraction",
    "anchor": "refraction",
    "category": "Reflectivity",
    "definition": "The change of direction of a ray of light, distorting what appears behind glass.",
    "source": "How to Render",
    "chapter": "Ch 10",
    "order": 994
  },
  {
    "id": "reflectivity-luminescence",
    "term": "Luminescence",
    "anchor": "luminescence",
    "category": "Reflectivity",
    "definition": "Surfaces that glow and emit their own light, taking no cast shadows.",
    "source": "How to Render",
    "chapter": "Ch 10",
    "order": 995
  },
  {
    "id": "reflectivity-anisotropic-reflection",
    "term": "Anisotropic reflection",
    "anchor": "anisotropic-reflection",
    "category": "Reflectivity",
    "definition": "Uneven reflection from aligned microscopic scratches (brushed/machined metal), like tiny aligned cylindrical cross sections.",
    "source": "How to Render",
    "chapter": "Ch 10",
    "order": 996
  },
  {
    "id": "reflectivity-screen-space-reflections",
    "term": "Screen Space Reflections (SSR)",
    "anchor": "screen-space-reflections",
    "category": "Reflectivity",
    "definition": "EEVEE's real-time reflection technique that approximates reflections from the already-rendered screen buffer (no ray tracing), central to the water scene.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 06",
    "order": 997
  },
  {
    "id": "reflectivity-light-probe",
    "term": "Light Probe",
    "anchor": "light-probe",
    "category": "Reflectivity",
    "definition": "A small helper object that captures light (reflections or irradiance) from its surroundings and feeds it to a material or the scene.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 06",
    "order": 998
  },
  {
    "id": "reflectivity-reflection-plane",
    "term": "Reflection Plane",
    "anchor": "reflection-plane",
    "category": "Reflectivity",
    "definition": "A plane used as a reflection light probe that captures the environment for a local reflective surface.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 06",
    "order": 999
  },
  {
    "id": "reflectivity-fresnel-node",
    "term": "Fresnel node",
    "anchor": "fresnel-node",
    "category": "Reflectivity",
    "definition": "A shader node that outputs the Fresnel term (edge-on reflectivity) to drive a material's edge reflections, as in the water material.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 06",
    "order": 1000
  },
  {
    "id": "reflectivity-reflection-cubemap",
    "term": "Reflection Cubemap",
    "anchor": "reflection-cubemap",
    "category": "Reflectivity",
    "definition": "A baked cube-map probe that supplies accurate, static reflections to a region (as opposed to live SSR).",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 10",
    "order": 1001
  },
  {
    "id": "reflectivity-bake-cubemap-only",
    "term": "Bake Cubemap Only",
    "anchor": "bake-cubemap-only",
    "category": "Reflectivity",
    "definition": "A probe bake option that stores only the reflection cubemap (not irradiance) for a probe.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 10",
    "order": 1002
  },
  {
    "id": "rendering-fundamentals-rendering",
    "term": "Rendering",
    "anchor": "rendering",
    "category": "Rendering fundamentals",
    "definition": "Applying value, color, and light/shadow to a drawing so volumes read as three-dimensional.",
    "source": "How to Render",
    "chapter": "Ch 01",
    "order": 1003
  },
  {
    "id": "rendering-fundamentals-matte-surface",
    "term": "Matte surface",
    "anchor": "matte-surface",
    "category": "Rendering fundamentals",
    "definition": "A non-reflective surface; the focus of the book's first half.",
    "source": "How to Render",
    "chapter": "Ch 01",
    "order": 1004
  },
  {
    "id": "rendering-fundamentals-1-2-3-read",
    "term": "1-2-3 read",
    "anchor": "1-2-3-read",
    "category": "Rendering fundamentals",
    "definition": "Three clearly differentiated surface values (lightest, mid, darkest) that make a volume read as three-dimensional.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 1005
  },
  {
    "id": "rendering-fundamentals-true-value",
    "term": "True value",
    "anchor": "true-value",
    "category": "Rendering fundamentals",
    "definition": "The value of an object's physical color, independent of lighting.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 1006
  },
  {
    "id": "rendering-fundamentals-value-range",
    "term": "Value range",
    "anchor": "value-range",
    "category": "Rendering fundamentals",
    "definition": "The span from the lightest to the darkest value used on an object.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 1007
  },
  {
    "id": "rendering-fundamentals-local-value",
    "term": "Local value",
    "anchor": "local-value",
    "category": "Rendering fundamentals",
    "definition": "The inherent value of a color/material independent of lighting.",
    "source": "How to Render",
    "chapter": "Ch 05",
    "order": 1008
  },
  {
    "id": "rendering-fundamentals-halfway-to-black",
    "term": "Halfway to black",
    "anchor": "halfway-to-black",
    "category": "Rendering fundamentals",
    "definition": "Rule: shadow-side/cast-shadow value = (10 − true value) ÷ 2.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 1009
  },
  {
    "id": "rendering-fundamentals-ambient-light",
    "term": "Ambient light",
    "anchor": "ambient-light",
    "category": "Rendering fundamentals",
    "definition": "The general surrounding light that fills shadows.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 1010
  },
  {
    "id": "rendering-fundamentals-geo-form",
    "term": "Geo form",
    "anchor": "geo-form",
    "category": "Rendering fundamentals",
    "definition": "A simple geometric volume (box, cylinder, cone, sphere) used as a rendering foundation.",
    "source": "How to Render",
    "chapter": "Ch 03a",
    "order": 1011
  },
  {
    "id": "rendering-fundamentals-x-y-z-volume",
    "term": "X-Y-Z volume",
    "anchor": "x-y-z-volume",
    "category": "Rendering fundamentals",
    "definition": "A compound form defined in a three-axis perspective coordinate system.",
    "source": "How to Render",
    "chapter": "Ch 04",
    "order": 1012
  },
  {
    "id": "rendering-fundamentals-simple-curved-surface",
    "term": "Simple curved surface",
    "anchor": "simple-curved-surface",
    "category": "Rendering fundamentals",
    "definition": "A surface bending in only one direction; the building block of X-Y-Z forms.",
    "source": "How to Render",
    "chapter": "Ch 04",
    "order": 1013
  },
  {
    "id": "rendering-fundamentals-cut-line",
    "term": "Cut line",
    "anchor": "cut-line",
    "category": "Rendering fundamentals",
    "definition": "A line on a manufactured object that separates panels and reads like a section line (a.k.a. panel/part/shut line).",
    "source": "How to Render",
    "chapter": "Ch 04",
    "order": 1014
  },
  {
    "id": "rendering-fundamentals-texture",
    "term": "Texture",
    "anchor": "texture",
    "category": "Rendering fundamentals",
    "definition": "The physical roughness of a surface, shown by value changes.",
    "source": "How to Render",
    "chapter": "Ch 04",
    "order": 1015
  },
  {
    "id": "rendering-fundamentals-texture-gradient",
    "term": "Texture gradient",
    "anchor": "texture-gradient",
    "category": "Rendering fundamentals",
    "definition": "The reduction in visible detail with distance, giving depth perception.",
    "source": "How to Render",
    "chapter": "Ch 04",
    "order": 1016
  },
  {
    "id": "rendering-fundamentals-background-value-illusion",
    "term": "Background value illusion",
    "anchor": "background-value-illusion",
    "category": "Rendering fundamentals",
    "definition": "A constant value appearing to shift value depending on the surrounding background.",
    "source": "How to Render",
    "chapter": "Ch 03b",
    "order": 1017
  },
  {
    "id": "rendering-fundamentals-top-light-illusion",
    "term": "Top-light illusion",
    "anchor": "top-light-illusion",
    "category": "Rendering fundamentals",
    "definition": "The appearance of top lighting created by a background/value gradation.",
    "source": "How to Render",
    "chapter": "Ch 03b",
    "order": 1018
  },
  {
    "id": "rendering-fundamentals-white-point",
    "term": "White point",
    "anchor": "white-point",
    "category": "Rendering fundamentals",
    "definition": "The lightest value in a rendering, which must be darkened for saturated colors.",
    "source": "How to Render",
    "chapter": "Ch 05",
    "order": 1019
  },
  {
    "id": "rendering-fundamentals-value-and-color-relationship",
    "term": "Value and color relationship",
    "anchor": "value-and-color-relationship",
    "category": "Rendering fundamentals",
    "definition": "The principle that a color's value must be set before colorizing; saturated colors are far darker than intuition suggests.",
    "source": "How to Render",
    "chapter": "Ch 05",
    "order": 1020
  },
  {
    "id": "rendering-fundamentals-rasterization",
    "term": "Rasterization",
    "anchor": "rasterization",
    "category": "Rendering fundamentals",
    "definition": "Converting a scene into a 2D image by projecting and shading primitives (EEVEE's method) as opposed to ray tracing.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 01",
    "order": 1021
  },
  {
    "id": "rendering-fundamentals-ray-tracing",
    "term": "Ray-tracing",
    "anchor": "ray-tracing",
    "category": "Rendering fundamentals",
    "definition": "A render technique that simulates light by tracing rays from the camera and their bounces through the scene (Cycles' method).",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 01",
    "order": 1022
  },
  {
    "id": "rendering-fundamentals-physically-based-rendering",
    "term": "Physically Based Rendering (PBR)",
    "anchor": "physically-based-rendering",
    "category": "Rendering fundamentals",
    "definition": "A material/shading model built on physically plausible light behavior, shared by both EEVEE and Cycles.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 01",
    "order": 1023
  },
  {
    "id": "rendering-fundamentals-global-illumination",
    "term": "Global Illumination",
    "anchor": "global-illumination",
    "category": "Rendering fundamentals",
    "definition": "The contribution of light that has bounced once or more between surfaces, as opposed to direct light.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 02",
    "order": 1024
  },
  {
    "id": "rendering-fundamentals-image-based-material",
    "term": "Image-based material",
    "anchor": "image-based-material",
    "category": "Rendering fundamentals",
    "definition": "A material whose surface color/texture comes from an image texture (as opposed to procedural generation).",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 02",
    "order": 1025
  },
  {
    "id": "rendering-fundamentals-emission-shader",
    "term": "Emission shader",
    "anchor": "emission-shader",
    "category": "Rendering fundamentals",
    "definition": "A shader that makes a surface emit its own light/color independent of scene lighting.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 02",
    "order": 1026
  },
  {
    "id": "rendering-fundamentals-voronoi-texture-node",
    "term": "Voronoi Texture node",
    "anchor": "voronoi-texture-node",
    "category": "Rendering fundamentals",
    "definition": "A procedural texture node generating cell-like patterns, used here for smoke and rock detail.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 02",
    "order": 1027
  },
  {
    "id": "rendering-fundamentals-non-physical-rendering",
    "term": "Non-Physical Rendering (NPR)",
    "anchor": "non-physical-rendering",
    "category": "Rendering fundamentals",
    "definition": "Deliberately bypassing physically based shading to produce stylized, artistic looks (as in the Stylized Scene project).",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 04",
    "order": 1028
  },
  {
    "id": "rendering-fundamentals-gradient-texture-node",
    "term": "Gradient Texture node",
    "anchor": "gradient-texture-node",
    "category": "Rendering fundamentals",
    "definition": "A procedural texture node that produces a smooth one-axis gradient, used for fake clouds and mist.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 04",
    "order": 1029
  },
  {
    "id": "rendering-fundamentals-rgb-curves-node",
    "term": "RGB Curves node",
    "anchor": "rgb-curves-node",
    "category": "Rendering fundamentals",
    "definition": "A compositor/material node that remaps color channels by curve for grading and contrast.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 03",
    "order": 1030
  },
  {
    "id": "rendering-fundamentals-file-output-node",
    "term": "File Output node",
    "anchor": "file-output-node",
    "category": "Rendering fundamentals",
    "definition": "A compositor node that saves (or exports) the composite or an individual pass to a file.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 04",
    "order": 1031
  },
  {
    "id": "rendering-fundamentals-hue-saturation-value-node",
    "term": "Hue Saturation Value node",
    "anchor": "hue-saturation-value-node",
    "category": "Rendering fundamentals",
    "definition": "A node that adjusts Hue, Saturation, and Value (brightness) of an image independently.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 04",
    "order": 1032
  },
  {
    "id": "rendering-fundamentals-backdrop",
    "term": "Backdrop",
    "anchor": "backdrop",
    "category": "Rendering fundamentals",
    "definition": "The compositor feature showing the scene (or a saved render) behind the node graph for reference.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 04",
    "order": 1033
  },
  {
    "id": "rendering-fundamentals-premultiplied",
    "term": "Premultiplied (alpha)",
    "anchor": "premultiplied",
    "category": "Rendering fundamentals",
    "definition": "Storing an image's color already multiplied by its alpha, as Blender imports detail/alpha images by default.",
    "source": "Shading, Lighting, and Rendering with Blender EEVEE",
    "chapter": "Ch 08",
    "order": 1034
  },
  {
    "id": "rendering-fundamentals-normal-mapping",
    "term": "Normal mapping",
    "anchor": "normal-mapping",
    "category": "Rendering fundamentals",
    "definition": "A texturing technique that stores surface-normal information in a texture to simulate fine geometric detail (bumps, engravings) without adding actual geometry.",
    "source": "Animating with Blender",
    "chapter": "Ch 13",
    "order": 1035
  },
  {
    "id": "rendering-fundamentals-vector-blur",
    "term": "Vector blur",
    "anchor": "vector-blur",
    "category": "Rendering fundamentals",
    "definition": "A Compositor node that applies directional motion blur using a Vector (velocity) pass, as opposed to the simpler fixed-direction Blur node.",
    "source": "Animating with Blender",
    "chapter": "Ch 15",
    "order": 1036
  },
  {
    "id": "rendering-fundamentals-vec-pass",
    "term": "Vec pass",
    "anchor": "vec-pass",
    "category": "Rendering fundamentals",
    "definition": "A render pass (Vector pass) that outputs per-pixel motion vectors (X, Y, Z displacement) for use in post-compositing effects like vector blur or camera shake.",
    "source": "Animating with Blender",
    "chapter": "Ch 15",
    "order": 1037
  },
  {
    "id": "rendering-fundamentals-image-contrast",
    "term": "Image contrast",
    "anchor": "image-contrast",
    "category": "Rendering fundamentals",
    "definition": "The tonal range between the darkest and brightest values in an image; increasing contrast pushes midtones toward black or white, decreasing it compresses them toward gray.",
    "source": "Animating with Blender",
    "chapter": "Ch 15",
    "order": 1038
  },
  {
    "id": "rendering-fundamentals-midtone",
    "term": "Midtone",
    "anchor": "midtone",
    "category": "Rendering fundamentals",
    "definition": "The middle range of luminance values in an image (between highlights and shadows); adjusting midtones shifts the overall brightness without clipping the extremes.",
    "source": "Animating with Blender",
    "chapter": "Ch 15",
    "order": 1039
  },
  {
    "id": "rigging-rest-position",
    "term": "Rest position",
    "anchor": "rest-position",
    "category": "Rigging",
    "definition": "The default, unposed state of every Bone in an Armature as it was built in Edit Mode; the reference from which all deformation is measured.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1040
  },
  {
    "id": "rigging-bind-pose",
    "term": "Bind pose",
    "anchor": "bind-pose",
    "category": "Rigging",
    "definition": "The Armature pose at which a Mesh is first skinned to it; the starting state used to compute vertex deformation.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1041
  },
  {
    "id": "rigging-vertex-groups",
    "term": "Vertex groups",
    "anchor": "vertex-groups",
    "category": "Rigging",
    "definition": "Named collections of Vertices on a Mesh, each with a per-Vertex weight (0-1), used to control how much a Bone influences each Vertex.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1042
  },
  {
    "id": "rigging-skinning",
    "term": "Skinning",
    "anchor": "skinning",
    "category": "Rigging",
    "definition": "The process of assigning Mesh Vertices to Bones (via Vertex Groups and weights) so that deforming the Bones deforms the Mesh.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1043
  },
  {
    "id": "rigging-ik",
    "term": "IK (Inverse Kinematics)",
    "anchor": "ik",
    "category": "Rigging",
    "definition": "A Bone-constraint method in which the position of a target (effector) is set and the solver works backward to orient each Bone in the chain, used for arms and legs.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1044
  },
  {
    "id": "rigging-fk",
    "term": "FK (Forward Kinematics)",
    "anchor": "fk",
    "category": "Rigging",
    "definition": "The default Bone-control method in which each Bone in a chain is rotated individually from the root outward; simpler to animate but harder for multi-Bone chains.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1045
  },
  {
    "id": "rigging-auto-ik",
    "term": "Auto-IK",
    "anchor": "auto-ik",
    "category": "Rigging",
    "definition": "The 2.4x-era IK mode (as of Blender 2.4x, 2.46) that automatically adjusts Bone chain lengths to reach the target, as opposed to the later iterative solver.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1046
  },
  {
    "id": "rigging-targetless-ik",
    "term": "Targetless IK",
    "anchor": "targetless-ik",
    "category": "Rigging",
    "definition": "An IK chain that has no explicit target Bone; the end Bone itself is the control point, simplifying the rig by one control.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1047
  },
  {
    "id": "rigging-proxy-armature",
    "term": "Proxy armature",
    "anchor": "proxy-armature",
    "category": "Rigging",
    "definition": "A simplified copy of a character Armature used for fast blocking or as a lightweight control layer, keeping the full-rig file separate.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1048
  },
  {
    "id": "rigging-deformer",
    "term": "Deformer",
    "anchor": "deformer",
    "category": "Rigging",
    "definition": "A non-renderable control object (Empty, Curve, or Mesh) that drives a deformation via a Lattice, Mesh Deform, or Armature Modifier without being rendered.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1049
  },
  {
    "id": "rigging-helper",
    "term": "Helper",
    "anchor": "helper",
    "category": "Rigging",
    "definition": "A non-renderable object (typically an Empty) used purely to position, orient, or drive another object or Bone; never appears in the final render.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1050
  },
  {
    "id": "rigging-weights",
    "term": "Weights",
    "anchor": "weights",
    "category": "Rigging",
    "definition": "The per-Vertex values (0 to 1) in a Vertex Group that determine how strongly a given Bone influences each Vertex during skinning.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1051
  },
  {
    "id": "rigging-mesh-deform",
    "term": "Mesh Deform",
    "anchor": "mesh-deform",
    "category": "Rigging",
    "definition": "A Modifier (as of Blender 2.4x, 2.46) that deforms a Mesh based on the deformation of a target Mesh object, used for proportional or surface-driven deformations.",
    "source": "Animating with Blender",
    "chapter": "Ch 09",
    "order": 1052
  },
  {
    "id": "rigging-facial-shapes",
    "term": "Facial shapes",
    "anchor": "facial-shapes",
    "category": "Rigging",
    "definition": "Shape Keys on a character head representing discrete expressions (smile, brow raise, jaw open) that can be blended by Mix values to build a face.",
    "source": "Animating with Blender",
    "chapter": "Ch 10",
    "order": 1053
  },
  {
    "id": "rigging-expression-fragments",
    "term": "Expression fragments",
    "anchor": "expression-fragments",
    "category": "Rigging",
    "definition": "Individual Shape Key components (e.g. one eye, one brow) that are combined (additively) to build a full expression, as opposed to whole-face Shape Keys.",
    "source": "Animating with Blender",
    "chapter": "Ch 10",
    "order": 1054
  },
  {
    "id": "rigging-spherical-eyes",
    "term": "Spherical eyes",
    "anchor": "spherical-eyes",
    "category": "Rigging",
    "definition": "A technique (as of Blender 2.4x, 2.46) where the eyes are modeled as spheres with a Lattice or proportional-edit deformation to produce a natural rolling motion.",
    "source": "Animating with Blender",
    "chapter": "Ch 10",
    "order": 1055
  },
  {
    "id": "rigging-transformation-constraint",
    "term": "Transformation constraint",
    "anchor": "transformation-constraint",
    "category": "Rigging",
    "definition": "The object constraint that maps one object's location, rotation, or scale to another's, used here to drive tank tracks and wheels from a single empty sphere.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 11",
    "order": 1056
  },
  {
    "id": "setting-the-scene-layout-the-discipline",
    "term": "Layout (the discipline)",
    "anchor": "layout-the-discipline",
    "category": "Setting the Scene",
    "definition": "The department and craft that frames the performance, plans camera moves, and dictates the cost of every shot before animation begins.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1057
  },
  {
    "id": "setting-the-scene-pencil-mileage",
    "term": "Pencil mileage",
    "anchor": "pencil-mileage",
    "category": "Setting the Scene",
    "definition": "The total amount of line drawing a production requires; TV animation does not reduce it despite simpler style.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1058
  },
  {
    "id": "setting-the-scene-fielding",
    "term": "Fielding",
    "anchor": "fielding",
    "category": "Setting the Scene",
    "definition": "Framing a set-up to a specific field (aspect ratio/format), shown as fielding diagrams.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1059
  },
  {
    "id": "setting-the-scene-fielding-diagram",
    "term": "Fielding diagram",
    "anchor": "fielding-diagram",
    "category": "Setting the Scene",
    "definition": "A framing guide drawn on the layout indicating the required field and safe area for the shot.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1060
  },
  {
    "id": "setting-the-scene-fixed-field",
    "term": "Fixed field",
    "anchor": "fixed-field",
    "category": "Setting the Scene",
    "definition": "A set field (format) that the camera does not change, as used on lathe beds.",
    "source": "Setting the Scene",
    "chapter": "Ch 02",
    "order": 1061
  },
  {
    "id": "setting-the-scene-tilt-field",
    "term": "Tilt field",
    "anchor": "tilt-field",
    "category": "Setting the Scene",
    "definition": "A field that is photographed at an angle, with maximum tilt limits that vary by field size.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1062
  },
  {
    "id": "setting-the-scene-pan-background",
    "term": "Pan background",
    "anchor": "pan-background",
    "category": "Setting the Scene",
    "definition": "A background designed to move (pan) through the platen, usually pegged to the top.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1063
  },
  {
    "id": "setting-the-scene-trucking",
    "term": "Trucking (truck in/out)",
    "anchor": "trucking",
    "category": "Setting the Scene",
    "definition": "A camera move that dollies toward or away from the scene within the artwork.",
    "source": "Setting the Scene",
    "chapter": "Ch 04",
    "order": 1064
  },
  {
    "id": "setting-the-scene-ew-pan",
    "term": "E/W pan",
    "anchor": "ew-pan",
    "category": "Setting the Scene",
    "definition": "An East-West (sideways) pan, one of the basic camera moves available on a fixed camera.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1065
  },
  {
    "id": "setting-the-scene-over-and-under",
    "term": "Over and under (OL/UL)",
    "anchor": "over-and-under",
    "category": "Setting the Scene",
    "definition": "Overlay and underlay: drawing one element over (or under) another to create depth or a cutaway.",
    "source": "Setting the Scene",
    "chapter": "Ch 04",
    "order": 1066
  },
  {
    "id": "setting-the-scene-peg-bar",
    "term": "Peg bar",
    "anchor": "peg-bar",
    "category": "Setting the Scene",
    "definition": "The bar holding the peg holes that register every sheet and background in the camera.",
    "source": "Setting the Scene",
    "chapter": "Ch 02",
    "order": 1067
  },
  {
    "id": "setting-the-scene-side-pegs",
    "term": "Side pegs",
    "anchor": "side-pegs",
    "category": "Setting the Scene",
    "definition": "Peg holes on the sides of a background used to shift it sideways (for pans) without changing the top/bottom registration.",
    "source": "Setting the Scene",
    "chapter": "Ch 04",
    "order": 1068
  },
  {
    "id": "setting-the-scene-jump-pegs",
    "term": "Jump pegs",
    "anchor": "jump-pegs",
    "category": "Setting the Scene",
    "definition": "Peg holes that allow a sheet to be shifted a fixed, known distance.",
    "source": "Setting the Scene",
    "chapter": "Ch 04",
    "order": 1069
  },
  {
    "id": "setting-the-scene-panning-peg-bar",
    "term": "Panning peg bar",
    "anchor": "panning-peg-bar",
    "category": "Setting the Scene",
    "definition": "A peg bar that registers a background for a pan, often with side pegs.",
    "source": "Setting the Scene",
    "chapter": "Ch 04",
    "order": 1070
  },
  {
    "id": "setting-the-scene-platen",
    "term": "Platen",
    "anchor": "platen",
    "category": "Setting the Scene",
    "definition": "The flat glass plate in the animation camera on which the stacked sheets and background sit.",
    "source": "Setting the Scene",
    "chapter": "Ch 02",
    "order": 1071
  },
  {
    "id": "setting-the-scene-cel",
    "term": "Cel",
    "anchor": "cel",
    "category": "Setting the Scene",
    "definition": "A transparent sheet bearing a single drawing (usually one character/part) in a stack.",
    "source": "Setting the Scene",
    "chapter": "Ch 02",
    "order": 1072
  },
  {
    "id": "setting-the-scene-held-cel",
    "term": "Held cel",
    "anchor": "held-cel",
    "category": "Setting the Scene",
    "definition": "An object or prop that persists across a scene (e.g. cars, a family unit), painted by Ink-and-Paint rather than the BG department.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1073
  },
  {
    "id": "setting-the-scene-multiplane-camera",
    "term": "Multiplane camera",
    "anchor": "multiplane-camera",
    "category": "Setting the Scene",
    "definition": "An animation camera that photographs cels at different heights to create true depth/parallax.",
    "source": "Setting the Scene",
    "chapter": "Ch 03",
    "order": 1074
  },
  {
    "id": "setting-the-scene-universal-multiplane",
    "term": "Universal Multiplane",
    "anchor": "universal-multiplane",
    "category": "Setting the Scene",
    "definition": "The improved multiplane camera design that could vary the number and spacing of planes.",
    "source": "Setting the Scene",
    "chapter": "Ch 03",
    "order": 1075
  },
  {
    "id": "setting-the-scene-down-shooter",
    "term": "Down-shooter",
    "anchor": "down-shooter",
    "category": "Setting the Scene",
    "definition": "The downward-facing camera in the animation camera that photographs the platen stack.",
    "source": "Setting the Scene",
    "chapter": "Ch 02",
    "order": 1076
  },
  {
    "id": "setting-the-scene-aerial-image",
    "term": "Aerial image",
    "anchor": "aerial-image",
    "category": "Setting the Scene",
    "definition": "Predigital frame-image compositing technique (per the book's glossary) involving the photography of both \"solid\" and projected elements â€” the latter being an \"aerial\" image because the beam of the projected image does not \"land\" on a solid surface; often used to combine live-action footage with animation.",
    "source": "Setting the Scene",
    "chapter": "Ch 02",
    "order": 1077
  },
  {
    "id": "setting-the-scene-exposure-sheet",
    "term": "Exposure sheet",
    "anchor": "exposure-sheet",
    "category": "Setting the Scene",
    "definition": "The working document (X-sheet) that records every shot's drawings, cels, sound, and timing.",
    "source": "Setting the Scene",
    "chapter": "Ch 02",
    "order": 1078
  },
  {
    "id": "setting-the-scene-registration-reg-to-bg",
    "term": "Registration (REG TO BG)",
    "anchor": "registration-reg-to-bg",
    "category": "Setting the Scene",
    "definition": "The clean red line marking where animation must register to the background.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1079
  },
  {
    "id": "setting-the-scene-control-device-for-animation",
    "term": "Control Device for Animation",
    "anchor": "control-device-for-animation",
    "category": "Setting the Scene",
    "definition": "The Walt Disney Studio's multiplane camera, coyly described by that name in U.S. Patent 2,198,006 (designed by William E. Garity).",
    "source": "Setting the Scene",
    "chapter": "Ch 03",
    "order": 1080
  },
  {
    "id": "setting-the-scene-lathe-bed",
    "term": "Lathe bed",
    "anchor": "lathe-bed",
    "category": "Setting the Scene",
    "definition": "A support that holds a drawing (or background) for the camera, associated with fixed fields.",
    "source": "Setting the Scene",
    "chapter": "Ch 02",
    "order": 1081
  },
  {
    "id": "setting-the-scene-matte",
    "term": "Matte",
    "anchor": "matte",
    "category": "Setting the Scene",
    "definition": "A line or shape used to mask/define an area, e.g. a matte line separating overlapping elements.",
    "source": "Setting the Scene",
    "chapter": "Ch 03",
    "order": 1082
  },
  {
    "id": "setting-the-scene-stereoptical-camera",
    "term": "Stereoptical camera",
    "anchor": "stereoptical-camera",
    "category": "Setting the Scene",
    "definition": "A camera that photographs a set-up at an angle (\"setback\") to suggest depth.",
    "source": "Setting the Scene",
    "chapter": "Ch 03",
    "order": 1083
  },
  {
    "id": "setting-the-scene-pencil-test",
    "term": "Pencil test",
    "anchor": "pencil-test",
    "category": "Setting the Scene",
    "definition": "A rough photographed test of drawings against the background to check the shot before clean-up.",
    "source": "Setting the Scene",
    "chapter": "Ch 02",
    "order": 1084
  },
  {
    "id": "setting-the-scene-pose-reel",
    "term": "Pose reel",
    "anchor": "pose-reel",
    "category": "Setting the Scene",
    "definition": "A test reel of posed character drawings bridging storyboard and character layout.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1085
  },
  {
    "id": "setting-the-scene-story-sketch",
    "term": "Story sketch",
    "anchor": "story-sketch",
    "category": "Setting the Scene",
    "definition": "An individual rough panel or group of drawings from the board, used before it settles into a linear storyboard.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1086
  },
  {
    "id": "setting-the-scene-rotoscope",
    "term": "Rotoscope",
    "anchor": "rotoscope",
    "category": "Setting the Scene",
    "definition": "A device that projects film onto a drawing surface so poses can be traced.",
    "source": "Setting the Scene",
    "chapter": "Ch 03",
    "order": 1087
  },
  {
    "id": "setting-the-scene-checkerboard-grid",
    "term": "Checkerboard grid",
    "anchor": "checkerboard-grid",
    "category": "Setting the Scene",
    "definition": "A reference grid used to check and build perspective/depth in a layout.",
    "source": "Setting the Scene",
    "chapter": "Ch 03",
    "order": 1088
  },
  {
    "id": "setting-the-scene-perspective-cheat",
    "term": "Perspective cheat",
    "anchor": "perspective-cheat",
    "category": "Setting the Scene",
    "definition": "A deliberate, non-literal shortcut used to suggest depth or scale.",
    "source": "Setting the Scene",
    "chapter": "Ch 03",
    "order": 1089
  },
  {
    "id": "setting-the-scene-tv-safe",
    "term": "TV Safe",
    "anchor": "tv-safe",
    "category": "Setting the Scene",
    "definition": "The framing that keeps all essential action within the portion of the image domestic TV sets displayed.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1090
  },
  {
    "id": "setting-the-scene-aspect-ratio",
    "term": "Aspect ratio",
    "anchor": "aspect-ratio",
    "category": "Setting the Scene",
    "definition": "The width-to-height proportion of the image frame; a sequence cannot be staged identically in two very different ratios.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1091
  },
  {
    "id": "setting-the-scene-cinerama-cinemascope",
    "term": "Cinerama / CinemaScope",
    "anchor": "cinerama-cinemascope",
    "category": "Setting the Scene",
    "definition": "Wide-screen formats whose aspect ratios push composition and framing choices.",
    "source": "Setting the Scene",
    "chapter": "Ch 04",
    "order": 1092
  },
  {
    "id": "setting-the-scene-caps",
    "term": "CAPS (Computer Animation Production System)",
    "anchor": "caps",
    "category": "Setting the Scene",
    "definition": "Disney's in-house digital ink-and-paint and computerized image-compositing system, another Academy Award winner that led the field in both areas.",
    "source": "Setting the Scene",
    "chapter": "Ch 06",
    "order": 1093
  },
  {
    "id": "setting-the-scene-strobing",
    "term": "Strobing",
    "anchor": "strobing",
    "category": "Setting the Scene",
    "definition": "The effect when a repeat pan background is too short, so the same elements reappear too quickly behind the characters.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1094
  },
  {
    "id": "setting-the-scene-sa-wo-scene",
    "term": "S.A. / W.O. scene",
    "anchor": "sa-wo-scene",
    "category": "Setting the Scene",
    "definition": "\"Same as\" / \"works out of\": a scene based on previous material, with re-used animation xeroxed into the folder.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1095
  },
  {
    "id": "setting-the-scene-quota",
    "term": "Quota",
    "anchor": "quota",
    "category": "Setting the Scene",
    "definition": "The required amount of drawings an artist must produce; a reality even in feature work.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1096
  },
  {
    "id": "setting-the-scene-scene-planning",
    "term": "Scene planning",
    "anchor": "scene-planning",
    "category": "Setting the Scene",
    "definition": "The upstream planning of a shot (framing, moves, edits) that layout commits before animation.",
    "source": "Setting the Scene",
    "chapter": "Ch 04",
    "order": 1097
  },
  {
    "id": "setting-the-scene-bongo-zip-outs",
    "term": "Bongo zip-outs",
    "anchor": "bongo-zip-outs",
    "category": "Setting the Scene",
    "definition": "A musical percussion cue (or cues) in Hanna-Barbera series such as *The Flintstones*, in which a rapid pattern of bongo beats accompanies a cycle of a character's feet running in midair before contacting the ground, at which point the character exits (\"zips out\") the scene.",
    "source": "Setting the Scene",
    "chapter": "Ch 01",
    "order": 1098
  },
  {
    "id": "setting-the-scene-deep-canvas",
    "term": "Deep Canvas",
    "anchor": "deep-canvas",
    "category": "Setting the Scene",
    "definition": "The Academy Award-winning software package/process developed for *Tarzan* (1999) by Disney's in-house CGI team, allowing many of the film's environments to be modeled in 3D even though the character animation was hand-drawn.",
    "source": "Setting the Scene",
    "chapter": "Ch 01",
    "order": 1099
  },
  {
    "id": "setting-the-scene-midget-sets",
    "term": "Midget sets",
    "anchor": "midget-sets",
    "category": "Setting the Scene",
    "definition": "Small physical sets/models used to give real depth and reference to a layout.",
    "source": "Setting the Scene",
    "chapter": "Ch 03",
    "order": 1100
  },
  {
    "id": "setting-the-scene-l-shaped-artwork",
    "term": "L-shaped artwork",
    "anchor": "l-shaped-artwork",
    "category": "Setting the Scene",
    "definition": "A background/lay-out shaped to fit a corner of the frame, leaving room for a move.",
    "source": "Setting the Scene",
    "chapter": "Ch 04",
    "order": 1101
  },
  {
    "id": "setting-the-scene-termite-terrace",
    "term": "\"Termite Terrace\"",
    "anchor": "termite-terrace",
    "category": "Setting the Scene",
    "definition": "The name Tex Avery's unit gave to its temporary Warner Bros. accommodation; a catch-all for the Looney Tunes and Merrie Melodies shorts.",
    "source": "Setting the Scene",
    "chapter": "Ch 05",
    "order": 1102
  },
  {
    "id": "setting-the-scene-staging-for-business",
    "term": "Staging for business",
    "anchor": "staging-for-business",
    "category": "Setting the Scene",
    "definition": "The layout discipline of framing character gags with the minimum of scenic invention, prioritizing legibility, timing, and economy over cinematic elaboration.",
    "source": "Setting the Scene",
    "chapter": "Ch 06",
    "order": 1103
  },
  {
    "id": "setting-the-scene-signature-environment",
    "term": "Signature environment",
    "anchor": "signature-environment",
    "category": "Setting the Scene",
    "definition": "A recurring cartoon environment (e.g. the *Road Runner* desert) that operates as a quasi-character, establishing finite parameters within which the comedy is staged.",
    "source": "Setting the Scene",
    "chapter": "Ch 06",
    "order": 1104
  },
  {
    "id": "setting-the-scene-the-noble-boys",
    "term": "The Noble Boys",
    "anchor": "the-noble-boys",
    "category": "Setting the Scene",
    "definition": "The group of young CalArts graduates mentored by Maurice Noble at Chuck Jones Productions in the late 1990s.",
    "source": "Setting the Scene",
    "chapter": "Ch 06",
    "order": 1105
  },
  {
    "id": "setting-the-scene-color-key",
    "term": "Color key (development art)",
    "anchor": "color-key",
    "category": "Setting the Scene",
    "definition": "A colored drawing showing the intended color design for a shot or sequence, used as a guide for BG painters.",
    "source": "Setting the Scene",
    "chapter": "Ch 06",
    "order": 1106
  },
  {
    "id": "setting-the-scene-bg-after-animation",
    "term": "BG after animation",
    "anchor": "bg-after-animation",
    "category": "Setting the Scene",
    "definition": "The Warner Bros. practice of drawing background layouts after the character animation was complete, so the scenic design could reference the actual performance.",
    "source": "Setting the Scene",
    "chapter": "Ch 06",
    "order": 1107
  },
  {
    "id": "setting-the-scene-workbooks",
    "term": "Workbooks",
    "anchor": "workbooks",
    "category": "Setting the Scene",
    "definition": "The per-film production documents recording every shot's timing, camera moves, background requirements, and cost implications.",
    "source": "Setting the Scene",
    "chapter": "Ch 06",
    "order": 1108
  },
  {
    "id": "setting-the-scene-beziers-curve-camera-path",
    "term": "BÃ©zier curve (camera path)",
    "anchor": "beziers-curve-camera-path",
    "category": "Setting the Scene",
    "definition": "A path-of-movement curve designated by Scene Planning for a camera move (per Bill Perkins, art directing on *Aladdin*), whose mathematics layout duplicated in the final composite for blurs, lighting changes, and the like.",
    "source": "Setting the Scene",
    "chapter": "Ch 06",
    "order": 1109
  },
  {
    "id": "setting-the-scene-rostrum-camera",
    "term": "Rostrum camera",
    "anchor": "rostrum-camera",
    "category": "Setting the Scene",
    "definition": "A precision camera (on a rostrum table) that photographs artwork in multiple passes/exposures, used for multi-layer integration.",
    "source": "Setting the Scene",
    "chapter": "Ch 07",
    "order": 1110
  },
  {
    "id": "setting-the-scene-multi-exposure",
    "term": "Multi-exposure",
    "anchor": "multi-exposure",
    "category": "Setting the Scene",
    "definition": "The technique of photographing multiple layers (character cels, effects, backgrounds) in separate passes to build a single composite image.",
    "source": "Setting the Scene",
    "chapter": "Ch 07",
    "order": 1111
  },
  {
    "id": "setting-the-scene-horseshoe-background",
    "term": "Horseshoe background",
    "anchor": "horseshoe-background",
    "category": "Setting the Scene",
    "definition": "The specific shape of the flat background painting for the *Who Framed Roger Rabbit* kitchen sequence, designed for extreme perspective shifts.",
    "source": "Setting the Scene",
    "chapter": "Ch 07",
    "order": 1112
  },
  {
    "id": "setting-the-scene-tradigital",
    "term": "Tradigital",
    "anchor": "tradigital",
    "category": "Setting the Scene",
    "definition": "Jeffrey Katzenberg's term for the 2D/3D hybrid: hand-drawn animation inhabiting a 3D computer-modeled environment.",
    "source": "Setting the Scene",
    "chapter": "Ch 07",
    "order": 1113
  },
  {
    "id": "setting-the-scene-digital-flats",
    "term": "Digital flats",
    "anchor": "digital-flats",
    "category": "Setting the Scene",
    "definition": "The technique of painting scenic artwork and projecting it onto digital planes to create an illusion of depth and scale.",
    "source": "Setting the Scene",
    "chapter": "Ch 07",
    "order": 1114
  },
  {
    "id": "setting-the-scene-z-axis-liberation",
    "term": "Z-axis liberation",
    "anchor": "z-axis-liberation",
    "category": "Setting the Scene",
    "definition": "The ability of computer tools to move the camera along the depth (z) axis as well as the traditional x and y axes.",
    "source": "Setting the Scene",
    "chapter": "Ch 07",
    "order": 1115
  },
  {
    "id": "setting-the-scene-vfx-layout",
    "term": "VFX Layout",
    "anchor": "vfx-layout",
    "category": "Setting the Scene",
    "definition": "The department/role at CG and VFX studios responsible for planning camera moves, framing, and environmental staging for live-action/CG hybrid shots.",
    "source": "Setting the Scene",
    "chapter": "Ch 08",
    "order": 1116
  },
  {
    "id": "setting-the-scene-stage-within-a-stage",
    "term": "Stage within a stage",
    "anchor": "stage-within-a-stage",
    "category": "Setting the Scene",
    "definition": "The practice (per MacLean) of isolating an area within a background painting or set model at a key narrative point so a lead character can declare something important to the story â€” e.g. the miniature \"proscenium\" built for Cruella de Vil in *The Dalmatians*.",
    "source": "Setting the Scene",
    "chapter": "Ch 08",
    "order": 1117
  },
  {
    "id": "setting-the-scene-kitchen-think",
    "term": "Kitchen think",
    "anchor": "kitchen-think",
    "category": "Setting the Scene",
    "definition": "The ch. 08 principle that characters get into cars or go to the kitchen only because the story requires it; writers, directors, and designers establish a plausible context from the outset (exemplar: MGM's *Tom and Jerry* kitchen).",
    "source": "Setting the Scene",
    "chapter": "Ch 08",
    "order": 1118
  },
  {
    "id": "setting-the-scene-design-as-texture",
    "term": "Design as texture",
    "anchor": "design-as-texture",
    "category": "Setting the Scene",
    "definition": "Maurice Noble's concept, as told by Pixar's Scott Morse: \"He thought about design itself as texture\"; Ernie Nordli's *Incredibles* design echoes it; in CG production language, \"texture\" usually refers to the rendering of surface detail.",
    "source": "Setting the Scene",
    "chapter": "Ch 08",
    "order": 1119
  },
  {
    "id": "setting-the-scene-digital-puppetry",
    "term": "Digital puppetry",
    "anchor": "digital-puppetry",
    "category": "Setting the Scene",
    "definition": "The description of CG character animation as the manipulation of a pre-built model in 3D space, analogous to physical puppet traditions.",
    "source": "Setting the Scene",
    "chapter": "Ch 09",
    "order": 1120
  },
  {
    "id": "setting-the-scene-you-are-a-camera",
    "term": "\"You are a camera\" (Aragon)",
    "anchor": "you-are-a-camera",
    "category": "Setting the Scene",
    "definition": "Ray Aragon's core teaching philosophy: the layout artist's eye is the camera, and the artist must learn to position, move, and frame as a camera would.",
    "source": "Setting the Scene",
    "chapter": "Ch 09",
    "order": 1121
  },
  {
    "id": "setting-the-scene-composition-over-mechanics",
    "term": "Composition over mechanics",
    "anchor": "composition-over-mechanics",
    "category": "Setting the Scene",
    "definition": "Aragon's insistence that layout is fundamentally about composition (\"Set it up! Stage it!\"), not the mechanical process of drawing backgrounds.",
    "source": "Setting the Scene",
    "chapter": "Ch 09",
    "order": 1122
  },
  {
    "id": "setting-the-scene-creative-oasis",
    "term": "Creative oasis",
    "anchor": "creative-oasis",
    "category": "Setting the Scene",
    "definition": "Aragon's description of the 1950s-60s Disney animation community: a collaborative, friendly culture unique in the world of commercial design.",
    "source": "Setting the Scene",
    "chapter": "Ch 09",
    "order": 1123
  },
  {
    "id": "tools-and-workflow-observe-icon",
    "term": "Observe icon",
    "anchor": "observe-icon",
    "category": "Tools and workflow",
    "definition": "A page marker indicating the section is about observing reality.",
    "source": "How to Render",
    "chapter": "Introduction",
    "order": 1124
  },
  {
    "id": "tools-and-workflow-act-icon",
    "term": "Act icon",
    "anchor": "act-icon",
    "category": "Tools and workflow",
    "definition": "A page marker indicating the reader should apply the steps to make their own work.",
    "source": "How to Render",
    "chapter": "Introduction",
    "order": 1125
  },
  {
    "id": "tools-and-workflow-writing-grip",
    "term": "Writing grip",
    "anchor": "writing-grip",
    "category": "Tools and workflow",
    "definition": "Pencil-holding method useful for adding lines and details.",
    "source": "How to Render",
    "chapter": "Ch 03b",
    "order": 1126
  },
  {
    "id": "tools-and-workflow-overhand-grip",
    "term": "Overhand grip",
    "anchor": "overhand-grip",
    "category": "Tools and workflow",
    "definition": "Pencil-holding method for loose concepts and smooth gradations.",
    "source": "How to Render",
    "chapter": "Ch 03b",
    "order": 1127
  },
  {
    "id": "tools-and-workflow-archival-media",
    "term": "Archival media",
    "anchor": "archival-media",
    "category": "Tools and workflow",
    "definition": "Rendering media that do not fade or blur over time.",
    "source": "How to Render",
    "chapter": "Ch 03b",
    "order": 1128
  },
  {
    "id": "tools-and-workflow-acid-free-surface",
    "term": "Acid-free surface",
    "anchor": "acid-free-surface",
    "category": "Tools and workflow",
    "definition": "Paper/board that prevents added media from degrading.",
    "source": "How to Render",
    "chapter": "Ch 03b",
    "order": 1129
  },
  {
    "id": "tools-and-workflow-multiply-layer",
    "term": "Multiply layer",
    "anchor": "multiply-layer",
    "category": "Tools and workflow",
    "definition": "A blend mode used to overlay a line drawing or cast shadow without hiding underlying values.",
    "source": "How to Render",
    "chapter": "Ch 05",
    "order": 1130
  },
  {
    "id": "tools-and-workflow-preserve-transparency",
    "term": "Preserve transparency",
    "anchor": "preserve-transparency",
    "category": "Tools and workflow",
    "definition": "A digital layer setting so edits affect only existing pixels, preserving edges.",
    "source": "How to Render",
    "chapter": "Ch 05",
    "order": 1131
  },
  {
    "id": "tools-and-workflow-vehicle-lighting-strategy",
    "term": "Vehicle lighting strategy",
    "anchor": "vehicle-lighting-strategy",
    "category": "Tools and workflow",
    "definition": "The deliberate staging of light direction to feature the best of a subject.",
    "source": "How to Render",
    "chapter": "Ch 05",
    "order": 1132
  },
  {
    "id": "tools-and-workflow-45-tangent-line",
    "term": "45° tangent line",
    "anchor": "45-tangent-line",
    "category": "Tools and workflow",
    "definition": "A constant-angle tangent used to find common value points on a curved surface.",
    "source": "How to Render",
    "chapter": "Ch 04",
    "order": 1133
  },
  {
    "id": "tools-and-workflow-reference-library",
    "term": "Reference library",
    "anchor": "reference-library",
    "category": "Tools and workflow",
    "definition": "A growing, categorized collection of only the best photographs of materials, lighting, and reflectivity phenomena, used to inform new renderings.",
    "source": "How to Render",
    "chapter": "Ch 06",
    "order": 1134
  },
  {
    "id": "tools-and-workflow-photo-booth-mirror-technique",
    "term": "Photo Booth mirror technique",
    "anchor": "photo-booth-mirror-technique",
    "category": "Tools and workflow",
    "definition": "Using a Mac/iPhone Photo Booth mirror filter on found objects (crumpled paper, a wooden post) to generate alien character faces.",
    "source": "How to Render",
    "chapter": "Ch 11",
    "order": 1135
  },
  {
    "id": "tools-and-workflow-photo-paint-over",
    "term": "Photo paint-over",
    "anchor": "photo-paint-over",
    "category": "Tools and workflow",
    "definition": "Starting a digital rendering from a photograph and painting over it in Photoshop as an auxiliary drawing tool.",
    "source": "How to Render",
    "chapter": "Ch 11",
    "order": 1136
  },
  {
    "id": "tools-and-workflow-2d-over-3d-workflow",
    "term": "2D over 3D workflow",
    "anchor": "2d-over-3d-workflow",
    "category": "Tools and workflow",
    "definition": "Modeling in a 3D program (e.g. MODO), outputting a base rendering, then adding lighting, detail, form refinements, and atmosphere with 2D skills (e.g. Photoshop).",
    "source": "How to Render",
    "chapter": "Ch 11",
    "order": 1137
  },
  {
    "id": "tools-and-workflow-fspy",
    "term": "fSpy",
    "anchor": "fspy",
    "category": "Tools and workflow",
    "definition": "The free, open-source program that estimates a photo's camera parameters (focal length, position, rotation) from its vanishing points and exports them into Blender.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 01",
    "order": 1138
  },
  {
    "id": "tools-and-workflow-node-wrangler",
    "term": "Node Wrangler",
    "anchor": "node-wrangler",
    "category": "Tools and workflow",
    "definition": "The built-in add-on enabling one-click PBR texture setup (Ctrl + Shift + T) and node preview (Ctrl + Shift + left-click).",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 06",
    "order": 1139
  },
  {
    "id": "tools-and-workflow-rock-generator-addon",
    "term": "Rock Generator Add-on",
    "anchor": "rock-generator-addon",
    "category": "Tools and workflow",
    "definition": "The built-in add-on (part of Add Mesh: Extra Objects) used to generate rocks in one click.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 10",
    "order": 1140
  },
  {
    "id": "tools-and-workflow-add-mesh-extra-objects",
    "term": "Add Mesh: Extra Objects",
    "anchor": "add-mesh-extra-objects",
    "category": "Tools and workflow",
    "definition": "The larger add-on (Gears, Pipe Joints, Rock Generator) containing the Rock Generator, enabled from Preferences.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 10",
    "order": 1141
  },
  {
    "id": "tools-and-workflow-principled-texture-setup",
    "term": "Principled Texture Setup",
    "anchor": "principled-texture-setup",
    "category": "Tools and workflow",
    "definition": "The Node Wrangler action (Ctrl + Shift + T) that wires a PBR texture set into the Principled BSDF by matching file-name keywords.",
    "source": "3D Environment Design with Blender",
    "chapter": "Ch 10",
    "order": 1142
  },
  {
    "id": "tools-and-workflow-spreadsheet",
    "term": "Spreadsheet",
    "anchor": "spreadsheet",
    "category": "Tools and workflow",
    "definition": "The Blender editor that tabulates Geometry Nodes data (points, elements, attributes) as editable rows and columns, used to inspect and filter node data.",
    "source": "Procedural 3D Modeling Using Geometry Nodes in Blender",
    "chapter": "Ch 6",
    "order": 1143
  },
  {
    "id": "topology-destructive-modeling",
    "term": "Destructive modeling",
    "anchor": "destructive-modeling",
    "category": "Topology",
    "definition": "A modeling operation that cannot be tweaked after the transform is finalized, revertible only by Ctrl + Z.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 01",
    "order": 1144
  },
  {
    "id": "topology-quad",
    "term": "Quad",
    "anchor": "quad",
    "category": "Topology",
    "definition": "A face with four edges and four vertices, technically two combined triangles, the basis of a clean quad-based workflow.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 02",
    "order": 1145
  },
  {
    "id": "topology-grid",
    "term": "Grid",
    "anchor": "grid",
    "category": "Topology",
    "definition": "A plane of connected quads, the perfect topology for a flat surface.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 02",
    "order": 1146
  },
  {
    "id": "topology-edge-loop",
    "term": "Edge loop",
    "anchor": "edge-loop",
    "category": "Topology",
    "definition": "A continuous line of edges through a row of connected faces whose flow is checked with the Loop Cut tool.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 02",
    "order": 1147
  },
  {
    "id": "topology-pole",
    "term": "Pole",
    "anchor": "pole",
    "category": "Topology",
    "definition": "A vertex where more than four edges meet, formed at the corners where two grids intersect, usually kept to five edges or fewer.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 02",
    "order": 1148
  },
  {
    "id": "topology-normal",
    "term": "Normal",
    "anchor": "normal",
    "category": "Topology",
    "definition": "The direction a face points, determining how light bounces off the surface; all normals on a mesh should face the same direction.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 02",
    "order": 1149
  },
  {
    "id": "topology-merge-by-distance",
    "term": "Merge by Distance (Remove Doubles)",
    "anchor": "merge-by-distance",
    "category": "Topology",
    "definition": "The operation (A, then M, then By Distance) that merges coincident or near-coincident vertices to remove duplicate geometry.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 02",
    "order": 1150
  },
  {
    "id": "topology-snapping",
    "term": "Snapping",
    "anchor": "snapping",
    "category": "Topology",
    "definition": "The viewport option that snaps a selection to an edge, face, vertex, or volume, used here to faces to align vertices.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 02",
    "order": 1151
  },
  {
    "id": "topology-three-rules-of-topology",
    "term": "Three rules of topology",
    "anchor": "three-rules-of-topology",
    "category": "Topology",
    "definition": "(1) loops terminate into the void or themselves, (2) loops do not intersect themselves, (3) loops do not spiral down a mesh.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 02",
    "order": 1152
  },
  {
    "id": "topology-deformation",
    "term": "Deformation",
    "anchor": "deformation",
    "category": "Topology",
    "definition": "The bending or stretching of a finished mesh (any shifting of the mesh), as driven by an armature or a physics simulation.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 03",
    "order": 1153
  },
  {
    "id": "topology-bending-stretching-rule",
    "term": "Bending and stretching deformation rule",
    "anchor": "bending-stretching-rule",
    "category": "Topology",
    "definition": "Rule 1 - the edges of the grid must be parallel to the axis of deformation.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 03",
    "order": 1154
  },
  {
    "id": "topology-twisting-rule",
    "term": "Twisting deformation rule",
    "anchor": "twisting-rule",
    "category": "Topology",
    "definition": "Rule 2 - the axis of twisting should be in line with the edge flow.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 03",
    "order": 1155
  },
  {
    "id": "topology-candy-wrappering",
    "term": "Candy wrappering",
    "anchor": "candy-wrappering",
    "category": "Topology",
    "definition": "The twisting failure caused by too little geometry to distribute the twist, fixed by adding geometry.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 03",
    "order": 1156
  },
  {
    "id": "topology-intersecting-grids-rule",
    "term": "Intersecting grids deformation rule",
    "anchor": "intersecting-grids-rule",
    "category": "Topology",
    "definition": "Rule 3 - keep a buffer of at least one row of faces between a pole and the area of deformation.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 03",
    "order": 1157
  },
  {
    "id": "topology-cloth-modifier",
    "term": "Cloth modifier",
    "anchor": "cloth-modifier",
    "category": "Topology",
    "definition": "The Physics modifier that gives a mesh a cloth simulation.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 03",
    "order": 1158
  },
  {
    "id": "topology-simple-subdivision-mode",
    "term": "Simple subdivision mode",
    "anchor": "simple-subdivision-mode",
    "category": "Topology",
    "definition": "A Subdivision modifier setting that adds geometry without smoothing the mesh.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 03",
    "order": 1159
  },
  {
    "id": "topology-tileable-texture",
    "term": "Tileable texture",
    "anchor": "tileable-texture",
    "category": "Topology",
    "definition": "An image texture that can be laid next to itself with no visible seams, requiring the UV map to unwrap into a clean plane.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 04",
    "order": 1160
  },
  {
    "id": "topology-display-stretch",
    "term": "Display Stretch",
    "anchor": "display-stretch",
    "category": "Topology",
    "definition": "The UV-editor Overlays option that visualizes per-face warping (blue/green/red) to judge unwrap quality.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 04",
    "order": 1161
  },
  {
    "id": "topology-uv-sync-selection",
    "term": "UV Sync Selection",
    "anchor": "uv-sync-selection",
    "category": "Topology",
    "definition": "The UV-editor option that shows the full map and syncs selections between the 3D Viewport and the UV Editor.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 04",
    "order": 1162
  },
  {
    "id": "topology-foundational-topology-checks",
    "term": "Foundational topology checks",
    "anchor": "foundational-topology-checks",
    "category": "Topology",
    "definition": "The three first checks - all faces are quads, no duplicate geometry, and all face normals oriented the same direction - that must be met before the other rules can be checked.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 05",
    "order": 1163
  },
  {
    "id": "topology-geometric-topology-rules",
    "term": "Geometric topology rules",
    "anchor": "geometric-topology-rules",
    "category": "Topology",
    "definition": "The shape-based rules (loops terminate into themselves or the void, do not overlap, do not spiral) that direct how topology is laid out on a mesh.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 05",
    "order": 1164
  },
  {
    "id": "topology-deformation-topology-rules",
    "term": "Deformation topology rules",
    "anchor": "deformation-topology-rules",
    "category": "Topology",
    "definition": "The rules (grid edges parallel to the axis of deformation, twist axis in line with the edge flow, one row of faces between a pole and the deforming area) that ensure good deformations.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 05",
    "order": 1165
  },
  {
    "id": "topology-guiding-edges",
    "term": "Guiding edges",
    "anchor": "guiding-edges",
    "category": "Topology",
    "definition": "A string of vertices/edges laid along a detail or across an area to mark the path faces should follow before the area is filled in.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 05",
    "order": 1166
  },
  {
    "id": "topology-loop-cut-interpolation",
    "term": "Loop cut interpolation",
    "anchor": "loop-cut-interpolation",
    "category": "Topology",
    "definition": "The behavior where a loop cut placed between two snapped ends inherits a shape that blends from one end toward the other, so loops read like whichever snapped end they are closest to.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 06",
    "order": 1167
  },
  {
    "id": "topology-flat-shading",
    "term": "Flat shading",
    "anchor": "flat-shading",
    "category": "Topology",
    "definition": "The shading mode that shows the normals exactly as shown by the geometry, with each face separated by a sharp edge.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 07",
    "order": 1168
  },
  {
    "id": "topology-smooth-shading",
    "term": "Smooth shading",
    "anchor": "smooth-shading",
    "category": "Topology",
    "definition": "The shading mode that averages the normals of intersecting faces to smooth out their edges, which can create shading artifacts on sharp corners.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 07",
    "order": 1169
  },
  {
    "id": "topology-shading-artifacts",
    "term": "Shading artifacts",
    "anchor": "shading-artifacts",
    "category": "Topology",
    "definition": "Anything that causes the final surface of a model to look off, here caused by smoothing corners that are too sharp.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 07",
    "order": 1170
  },
  {
    "id": "topology-vertex-slide",
    "term": "Vertex slide",
    "anchor": "vertex-slide",
    "category": "Topology",
    "definition": "The operation (double-tap G) that slides a vertex along the edges it is connected to, used to pull and merge unnecessary loops.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 08",
    "order": 1171
  },
  {
    "id": "topology-auto-merge",
    "term": "Auto Merge",
    "anchor": "auto-merge",
    "category": "Topology",
    "definition": "The setting (Active Tool and Workspace) that merges vertices within a set distance, used with vertex slide to collapse geometry.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 08",
    "order": 1172
  },
  {
    "id": "topology-triangle-count",
    "term": "Triangle count",
    "anchor": "triangle-count",
    "category": "Topology",
    "definition": "The number of triangles a mesh renders as (labeled Tris in Scene Statistics), the metric being reduced to improve performance.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 08",
    "order": 1173
  },
  {
    "id": "topology-scene-statistics",
    "term": "Scene Statistics",
    "anchor": "scene-statistics",
    "category": "Topology",
    "definition": "The Status Bar view (right-click the footer) that reports the scene's triangle count and other statistics.",
    "source": "Squeaky Clean Topology",
    "chapter": "Ch 08",
    "order": 1174
  },
  {
    "id": "topology-n-gon",
    "term": "N-gon",
    "anchor": "n-gon",
    "category": "Topology",
    "definition": "A face with more than four sides, produced when unneeded flat-surface edges are dissolved; tolerated in hard-surface work but avoided where deformation is needed.",
    "source": "Blender 3D Incredible Models",
    "chapter": "Ch 01, Ch 02, Ch 03",
    "order": 1175
  }
],
  research: [
  {
    "id": "fall-2026-3d-integration-research",
    "title": "3D Integration Class (Fall 2026)",
    "date": "2026-08-27",
    "handoffVersion": "001",
    "scope": "Student baseline, industry use of 3D in visual development, Blender 2025-2026 ecosystem, and pedagogy constraints for a semester-long 3D Integration class at Seneca College (second-year Visual Development).",
    "summary": "Studios use 3D in visual development as an iteration accelerator, not a production goal: blocking environments, character turnarounds, camera/composition studies, and painted-over renders that feed concept art, previs, and look-dev handoffs. The highest-leverage move for this class is a small set (2-3) of custom Blender tools that remove setup and presentation busywork, so class time goes to design decisions. Pin the class to one Blender LTS (4.5 LTS is the safe pick), teach built-in features for UVs, lighting, cameras, Grease Pencil, and EEVEE iteration, use a short allow-list of add-ons, and structure three escalating projects of 4-5 weeks each.",
    "body": "- **Date:** 2026-08-27\n- **Handoff Version:** 001 (researcher-fall-2026-research_001)\n- **Research Scope:** Student baseline, industry use of 3D in visual development, Blender 2025-2026 ecosystem, and pedagogy constraints for a semester-long 3D Integration class at Seneca College (second-year Visual Development).\n\n## Executive Summary\n\nStudios use 3D in visual development as an iteration accelerator, not a production goal: blocking environments, character turnarounds, camera/composition studies, and painted-over renders that feed concept art, previs, and look-dev handoffs. The highest-leverage move for this class is a small set (2-3) of custom Blender tools that remove setup and presentation busywork, so class time goes to design decisions. Pin the class to one Blender LTS (4.5 LTS is the safe pick), teach built-in features for UVs, lighting, cameras, Grease Pencil, and EEVEE iteration, use a short allow-list of add-ons, and structure three escalating projects of 4-5 weeks each.\n\n## Project A Themes\n\nThree historically grounded theme options for the environment project:\n\n- **Nordic Fjords and Forests (10th to 12th Century):** longhouse interiors with hearths and timber construction, coastal fishing huts with dawn fog, mountain hermit cells with cold mist. References: L'Anse aux Meadows, Borre Viking Center.\n- **East Asian Mountain Temples (8th to 10th Century Tang):** Kyoto tea house interiors with shoji screens, mountain temple architecture with morning mist, rice terrace structures. References: Horyu-ji Temple, Dunhuang murals.\n- **Sahel Crossroads (13th to 15th Century Mali/Songhai):** Sudano-Sahelian mud-brick architecture, granary compounds with earth tones, cliffside libraries with filtered light. References: Djenné Great Mosque, Sankore Madrasah.",
    "status": null,
    "sources": [],
    "tags": [
      "research-report",
      "integration",
      "class",
      "fall"
    ],
    "source": "research/fall-2026-3d-integration-research.md",
    "order": 1
  },
  {
    "id": "fall-2026-seneca-dates-and-terminology",
    "title": "Fall 2026 Seneca Dates + Production Terminology",
    "date": "2026-08-27",
    "handoffVersion": "007",
    "scope": "Official Seneca Fall 2026 academic calendar (confirmed, published) and animation/VDA production-terminology mapping for deliverable renames.",
    "summary": "Seneca's Fall 2026 term is **published and confirmed**: classes run **Tuesday, Sept 8 to Wednesday, Dec 16, 2026**, with one no-class week (**Study Week, Oct 26-30**, Seneca's name for the reading-week equivalent) and two fall holidays (Labour Day Sept 7, Thanksgiving Oct 12) that both fall on **Mondays** and cost no Friday classes. A Friday class therefore has exactly **13 teaching weeks (13 Fridays)** - the 13-week target is **confirmed, not corrected**. On terminology: **turnaround**, **model sheet**, **contact sheet**, **style frame**, and **previs blockout** are solid industry-standard terms; **fun sheet** (two words) is a real North American animation usage, and **\"funpack\" (one word) was flagged non-standard** here - **SUPERSEDED for this program by handoff 012, where the teacher made \"funpack\" the primary deliverable name** (see the verdict note in section 4).\n\n---",
    "body": "- **Date:** 2026-08-27\n- **Handoff Version:** 007 (researcher-seneca-dates-terminology)\n- **Research Scope:** Official Seneca Fall 2026 academic calendar (confirmed, published) and animation/VDA production-terminology mapping for deliverable renames.\n\n## Executive Summary\n\nSeneca's Fall 2026 term is **published and confirmed**: classes run **Tuesday, Sept 8 to Wednesday, Dec 16, 2026**, with one no-class week (**Study Week, Oct 26-30**, Seneca's name for the reading-week equivalent) and two fall holidays (Labour Day Sept 7, Thanksgiving Oct 12) that both fall on **Mondays** and cost no Friday classes. A Friday class therefore has exactly **13 teaching weeks (13 Fridays)** - the 13-week target is **confirmed, not corrected**. On terminology: **turnaround**, **model sheet**, **contact sheet**, **style frame**, and **previs blockout** are solid industry-standard terms; **fun sheet** (two words) is a real North American animation usage, and **\"funpack\" (one word) was flagged non-standard** here - **SUPERSEDED for this program by handoff 012, where the teacher made \"funpack\" the primary deliverable name** (see the verdict note in section 4).",
    "status": "confirmed",
    "sources": [
      "https://students.senecapolytechnic.ca/spaces/135/important-academic-dates/wiki/view/17734/fall-2026-term",
      "https://www.senecapolytechnic.ca/registrar/dates.html",
      "https://www.senecapolytechnic.ca/"
    ],
    "tags": [
      "calendar",
      "fall",
      "2026",
      "seneca"
    ],
    "source": "research/fall-2026-seneca-dates-and-terminology.md",
    "order": 2
  },
  {
    "id": "modern-teaching-techniques-2024-2026",
    "title": "Modern Teaching Techniques for Creative-Technical Students (2024-2026)",
    "date": "2026-08-28",
    "handoffVersion": "039",
    "scope": "Synthesize evidence-based teaching techniques into concrete, writable rules for an AI subagent that produces educational content for this course's students.",
    "summary": "The strongest-evidence techniques in 2024-2026 all reduce to one design stance for a text-based AI tutor: **make the student do the thinking, in small well-sequenced doses, in a voice that makes them feel safe and curious.** Retrieval practice, distributed and interleaved sequencing, low-extraneous-load presentation, autonomy-supportive language, humor as connective tissue, Socratic questioning, and metacognitive prompts are the highest-leverage levers - and every one is expressible as a rule an LLM can follow when writing a lesson.",
    "body": "- **Date:** 2026-08-28\n- **Handoff:** 039 (Researcher, modern-teaching-techniques)\n- **Purpose:** Synthesize evidence-based teaching techniques into concrete, writable rules for an AI subagent that produces educational content for this course's students.\n\n## Executive Summary\n\nThe strongest-evidence techniques in 2024-2026 all reduce to one design stance for a text-based AI tutor: **make the student do the thinking, in small well-sequenced doses, in a voice that makes them feel safe and curious.** Retrieval practice, distributed and interleaved sequencing, low-extraneous-load presentation, autonomy-supportive language, humor as connective tissue, Socratic questioning, and metacognitive prompts are the highest-leverage levers - and every one is expressible as a rule an LLM can follow when writing a lesson.",
    "status": null,
    "sources": [
      "https://www.freecodecamp.org",
      "https://www.theodinproject.com",
      "https://www.codecademy.com",
      "https://ocw.mit.edu",
      "https://cs50.harvard.edu",
      "https://waitbutwhy.com",
      "https://www.veritasium.com",
      "https://www.3blue1brown.com",
      "https://simonsinek.com"
    ],
    "tags": [
      "teaching-techniques",
      "modern",
      "teaching",
      "techniques"
    ],
    "source": "research/modern-teaching-techniques-2024-2026.md",
    "order": 3
  },
  {
    "id": "prompt-bank-iconic-events",
    "title": "Prompt Bank of Iconic Events (Fall 2026, 3D Integration)",
    "date": "2026-08-28",
    "handoffVersion": "027",
    "scope": "a candidate bank of historically iconic, cross-cultural events fertile for fantastical/futuristic/mythological reinterpretation, with a week-mapping suggestion and a constraints summary for the Planner/Executor.",
    "summary": "A candidate bank of encyclopedia-grade events spanning the three Project A themes: Nordic Fjords and Forests (10th to 12th Century), East Asian Mountain Temples (8th to 10th Century Tang), and Sahel Crossroads (13th to 15th Century Mali/Songhai). Each with a strong gender and/or social-class angle and at least one fantastical or mythological hook. A suggested week-to-candidate sketch aligns environment-leaning prompts to P1 (W3-W5), character/prop-leaning prompts to P2 (W6-W8), and story-moment prompts to P3 (W9-W12). Constraints (3-hour/no-homework, tool availability, funpack terminology, 60/40 tilt) are summarized for the lesson docs. Prompts remain placeholders until the teacher finalizes them.",
    "body": "- **Date:** 2026-08-28\n- **Handoff Version:** 027\n- **Research Scope:** a candidate bank of historically iconic, cross-cultural events fertile for fantastical/futuristic/mythological reinterpretation, with a week-mapping suggestion and a constraints summary for the Planner/Executor.\n\n## Executive Summary\nA candidate bank of encyclopedia-grade events spanning the three Project A themes, each with a strong gender and/or social-class angle and at least one fantastical or mythological hook. A suggested week-to-candidate sketch aligns environment-leaning prompts to P1 (W3-W5), character/prop-leaning prompts to P2 (W6-W8), and story-moment prompts to P3 (W9-W12). Constraints (3-hour/no-homework, tool availability, funpack terminology, 60/40 tilt) are summarized for the lesson docs. Prompts remain placeholders until the teacher finalizes them.\n\n## How to Use This Bank\n- Each candidate lists: **Name**, **Era**, **Culture/Region**, **Why it works as a 3D subject** (1-2 sentences), **Gender/class angle**, **Fantastical hook(s)** (futuristic and/or mythological), and a **Content note** flag where needed.\n- Candidates are grouped by theme for scanning, not ranked. The **Top 5** (section 8) are the strongest all-rounders.\n- A candidate can serve more than one project; the mapping in section 9 is a starting sketch, not a fixed assignment.\n- Keep prompts as **story-anchored beats** (\"a place where [event] happens\", \"a character central to [event]\", \"the moment of [event]\").\n- Every prompt is a placeholder: the teacher finalizes wording. This bank is raw material for the Planner, not student-facing copy.\n\n## 1. Nordic Fjords and Forests (10th to 12th Century)\n\n**Longhouse Hearth gathering** -- Scandinavia, ca. 1000 CE\n- **Why it works:** warm firelight inside timber framing against cold fjord light outside; strong interior/exterior contrast.\n- **Reference:** Borre Viking Center reconstructions.\n\n**Coastal fishing settlement** -- North Atlantic coast, ca. 1050 CE\n- **Why it works:** dawn fog over water, fishing gear and dried catch, low timber structures with sod roofs.\n- **Reference:** L'Anse aux Meadows archaeological site.\n\n## 2. East Asian Mountain Temples (8th to 10th Century Tang)\n\n**Kyoto tea house interior** -- Japan, ca. 900 CE\n- **Why it works:** morning light through shoji screens, ceramic vessels, tatami surfaces; strong depth through layered screens.\n- **Reference:** Horyu-ji Temple architectural documentation.\n\n**Mountain temple at dawn** -- China/Tang heartland, ca. 800 CE\n- **Why it works:** morning mist through timber framing with tiled roofs, bronze mirrors and incense burners as props, silk sutra scrolls as texture.\n- **Reference:** Dunhuang mural color palettes and compositions.\n\n## 3. Sahel Crossroads (13th to 15th Century Mali/Songhai)\n\n**Granary compound interior** -- Mali Empire, ca. 1400 CE\n- **Why it works:** carved wooden doors, cowrie shells and leather-bound manuscripts as props, rammed earth walls with toron beams creating strong shadow patterns.\n- **Reference:** Djenné Great Mosque architectural tradition.\n\n**Cliffside library** -- Sankore, Timbuktu, ca. 1350 CE\n- **Why it works:** filtered light through mud-brick walls, leather-bound manuscripts as focal props, warm earth-tone palette.\n- **Reference:** Sankore Madrasah historical records.",
    "status": null,
    "sources": [
      "https://en.wikipedia.org/wiki/L%27Anse_aux_Meadows_National_Historic_Site",
      "https://en.wikipedia.org/wiki/Borre_style",
      "https://en.wikipedia.org/wiki/H%C5%8Dr%C5%8D-ji",
      "https://en.wikipedia.org/wiki/Mogao_Caves",
      "https://en.wikipedia.org/wiki/Djenn%C3%A9_Great_Mosque",
      "https://en.wikipedia.org/wiki/University_of_Sankor%C3%A9"
    ],
    "tags": [
      "prompt-bank",
      "prompt",
      "bank",
      "iconic"
    ],
    "source": "research/prompt-bank-iconic-events.md",
    "order": 4
  },
  {
    "id": "prompt-details-p1",
    "title": "Detailed Prompt Cards - Part 1 of 3 (Warm-ups + P1 Environments)",
    "date": null,
    "handoffVersion": null,
    "scope": null,
    "summary": "",
    "body": "This file is the first of three detail cards for the candidates used in the student lesson docs. Part 2 covers the P2 menu (character/prop) first appearances; Part 3 covers the P3 story-moment first appearances, the full-set hook tally, bank corrections, and the shared source list. A candidate used in several weeks appears once, in its first course placement, with a \"used in\" line listing every placement.\n\n- Part 1 (this file): `research/prompt-details-p1.md` -- Nordic longhouse hearth, coastal fishing hut, mountain hermit cell, Kyoto tea house interior, rice terrace rest house, floating market stall, granary compound interior, cliffside library\n- Part 2: `research/prompt-details-p2.md` -- Nordic coastal warrior, Tang temple attendant, Sahel scholar\n- Part 3: `research/prompt-details-p3.md` -- Viking raid moment, temple dedication ceremony, Sahel trade caravan arrival; plus hook tally, corrections, shared sources\n\nHow to read each card: the fields are the raw material for the placeholder blocks already in `students/` (W1, W2, W3). The bank's existing hook stays on each card so you can see it next to the new labeled hooks. The design-concept thread is written to stand alone - no event names inside it - for your idea of building standalone design questions on abstract concepts.\n\n---\n\n### 1. Nordic Longhouse Hearth (bank cand. 1)\n- **Event:** Longhouse gathering, Scandinavia, 10th to 12th Century\n- **Used in:** W3-W5 P1 list (longhouse interior, warm firelight, carved rune stone focal point)\n- **Regional uniqueness:** (1) Timber construction with sod roofing is the documented structural system of the era (Borre Viking Center reconstructions). (2) The hearth as central gathering point - firelight reading against cold fjord light outside the door - is the documented atmospheric condition (L'Anse aux Meadows site archaeology). (3) Iron-tanged axes, wool cloaks, whalebone combs are the era-accurate props (Borre material culture catalog). (4) Light: warm firelight key against cool exterior fill creates the interior/exterior contrast that defines the Nordic theme mood.\n- **Gender angle:** women managed the longhouse economy, food preservation, and textile production; the hearth was the operational center of the household.\n- **Fantastical hook:** the carved rune stone as a conduit for ancestral knowledge; the hearth fire as a portal to the other world (Norse mythology).\n\n### 2. Coastal Fishing Hut (bank cand. 2)\n- **Event:** Coastal fishing settlement, North Atlantic coast, 10th to 12th Century\n- **Used in:** W3-W5 P1 list (dawn fog, dried cod hanging by door, whalebone comb focal point)\n- **Regional uniqueness:** (1) Low timber framing with sod roofs is the documented coastal building type. (2) Dawn fog over fjord water is the documented atmospheric condition of North Atlantic coastal sites. (3) Dried cod, fishing nets, whalebone tools are the era-accurate material culture. (4) Light: cool dawn fog with warm interior spill through doorway creates the read.\n- **Gender angle:** women processed and preserved the catch, managing the dried cod trade that was the economic backbone of coastal settlements.\n- **Fantastical hook:** the sea as a living boundary; dawn fog concealing otherworldly shapes beneath the waves.\n\n### 3. Mountain Hermit Cell (bank cand. 3)\n- **Event:** Mountain hermitage, Scandinavian highlands, 10th to 12th Century\n- **Used in:** W3-W5 P1 list (cold blue mist, worn psalter on birch shelf focal point)\n- **Regional uniqueness:** (1) Small stone or timber cells in mountain locations are documented from early Christian hermitage traditions in Scandinavia. (2) Cold mist and blue light are the documented atmospheric conditions at altitude. (3) The psalter or prayer book as focal prop reflects the Christian hermitage tradition that coexisted with pagan practice. (4) Light: cold blue ambient with a warm candle as the sole interior key.\n- **Gender angle:** hermitage was open to both men and women; some of the earliest documented Scandinavian nuns lived in mountain cells.\n- **Fantastical hook:** the hermit cell as a threshold between the mortal world and the spiritual realm; cold mist as a living entity.\n\n### 4. Kyoto Tea House Interior (bank cand. 4)\n- **Event:** Tea house gathering, Kyoto region, 8th to 10th Century\n- **Used in:** W3-W5 P1 list (tatami, morning light through shoji screens, ceramic vessel focal point)\n- **Regional uniqueness:** (1) Timber framing with paper screens is the documented Tang/Japanese structural vocabulary. (2) Morning light filtering through shoji screens creates layered depth planes. (3) Ceramic vessels, silk textiles, and bronze mirrors are the era-accurate props. (4) Light: soft morning diffusion through paper screens with a single sunbeam as the key.\n- **Gender angle:** tea preparation was a codified art form with distinct roles for male and female practitioners; the tea house was one of the few social spaces where gender roles were suspended during the ceremony.\n- **Fantastical hook:** the tea ceremony as a meditative gateway to inner landscapes; the ceramic vessel as a vessel for ancestral spirits.\n\n### 5. Rice Terrace Rest House (bank cand. 5)\n- **Event:** Mountain rest house, Tang highlands, 8th to 10th Century\n- **Used in:** W3-W5 P1 list (misty mountains through half-door, weathered wooden bowl focal point)\n- **Regional uniqueness:** (1) Rice terrace architecture with half-doors and timber framing is the documented mountain-building type. (2) Morning mist through open doors creates the atmospheric read. (3) Wooden bowls, woven baskets, and silk sutra scrolls are the era-accurate props. (4) Light: cool mist ambient with warm interior spill.\n- **Gender angle:** women managed the terrace irrigation and rice processing; the rest house served both genders equally as a neutral waypoint.\n- **Fantastical hook:** the mist as a living barrier between the mortal realm and the mountain spirits; the terrace as steps to the celestial palace.\n\n### 6. Floating Market Stall (bank cand. 6)\n- **Event:** River market, Tang riverlands, 8th to 10th Century\n- **Used in:** W3-W5 P1 list (warm dawn light, carved jade pendant on cloth focal point)\n- **Regional uniqueness:** (1) Timber structures built on water is the documented riverside building type. (2) Dawn light over water creates the warm atmospheric condition. (3) Jade carvings, silk goods, and ceramic wares are the era-accurate trade items. (4) Light: warm golden hour reflecting off water with soft fill.\n- **Gender angle:** women dominated riverside trade in many Tang markets; the floating market was one of the few economic spaces controlled entirely by female merchants.\n- **Fantastical hook:** the jade pendant as a ward against river spirits; the market as a crossroads between the material and spiritual worlds.\n\n### 7. Granary Compound Interior (bank cand. 7)\n- **Event:** Granary compound, Mali Empire, 13th to 15th Century\n- **Used in:** W3-W5 P1 list (carved wooden doors, leather-bound manuscript focal point, earth tones)\n- **Regional uniqueness:** (1) Sudano-Sahelian mud-brick architecture with wooden toron beams is the documented building system (Djenné Great Mosque tradition). (2) Carved wooden doors with geometric patterns are the documented decorative vocabulary. (3) Leather-bound manuscripts, cowrie shells, and iron tools are the era-accurate material culture. (4) Light: warm filtered light through toron-beam gaps creating rhythmic shadow patterns on rammed earth walls.\n- **Gender angle:** women managed granary storage and grain distribution; the compound was a women-centered economic space.\n- **Fantastical hook:** the toron beams as structural and spiritual supports; the granary as a storehouse for the community's ancestral blessings.\n\n### 8. Cliffside Library (bank cand. 8)\n- **Event:** Sankore Madrasah, Timbuktu, 13th to 15th Century\n- **Used in:** W3-W5 P1 list (filtered light, leather manuscripts, earth tones, Sudano-Sahelian architecture)\n- **Regional uniqueness:** (1) Mud-brick walls with wooden beams and arched openings are the documented Sankore architectural vocabulary. (2) Filtered light through high windows is the documented reading-lighting condition. (3) Leather-bound manuscripts in Saharan trade languages are the era-accurate props. (4) Light: warm golden hour through high windows with dust motes as atmosphere.\n- **Gender angle:** the Madrasah admitted both male and female students; women scholars are documented in the Sankore records.\n- **Fantastical hook:** the manuscripts as vessels of accumulated wisdom across centuries; the library as a physical manifestation of the Sahel as a crossroads of civilizations.",
    "status": null,
    "sources": [
      "https://en.wikipedia.org/wiki/L%27Anse_aux_Meadows_National_Historic_Site",
      "https://en.wikipedia.org/wiki/Borre_style",
      "https://en.wikipedia.org/wiki/H%C5%8Dr%C5%8D-ji",
      "https://en.wikipedia.org/wiki/Mogao_Caves",
      "https://en.wikipedia.org/wiki/Djenn%C3%A9_Great_Mosque",
      "https://en.wikipedia.org/wiki/University_of_Sankor%C3%A9",
      "https://en.wikipedia.org/wiki/Sudano-Sahelian_architecture"
    ],
    "tags": [
      "prompt-details",
      "detailed",
      "prompt",
      "cards"
    ],
    "source": "research/prompt-details-p1.md",
    "order": 5
  },
  {
    "id": "prompt-details-p2",
    "title": "Detailed Prompt Cards - Part 2 of 3 (P2 Menu, Character and Prop)",
    "date": null,
    "handoffVersion": null,
    "scope": null,
    "summary": "",
    "body": "This file is the second of three detail cards for the candidates used in the student lesson docs. Part 1 covers the W1/W2 warm-ups and the P1 environment list; Part 3 covers the P3 story-moment first appearances, the full-set hook tally, bank corrections, and the shared source list. A candidate used in several weeks appears once, in its first course placement, with a \"used in\" line listing every placement.\n\n- Part 1: `research/prompt-details-p1.md` -- Nordic longhouse hearth, coastal fishing hut, mountain hermit cell, Kyoto tea house interior, rice terrace rest house, floating market stall, granary compound interior, cliffside library\n- Part 2 (this file): `research/prompt-details-p2.md` -- Nordic coastal warrior, Tang temple attendant, Sahel scholar\n- Part 3: `research/prompt-details-p3.md` -- Viking raid moment, temple dedication ceremony, Sahel trade caravan arrival; plus hook tally, corrections, shared sources\n\nThese are the P2 character/prop candidates. Each card lists the character track and prop track placements where the candidate appears. The bank's existing hook stays on each card so you can see it next to the new labeled hooks. The design-concept thread is written to stand alone - no event names inside it.\n\n---\n\n### 1. Nordic Coastal Warrior (bank cand. 9)\n- **Event:** Coastal defense, Scandinavia, 10th to 12th Century\n- **Used in:** W6-W8 P2 menu - character track (a shield-maiden in the tradition of documented female warriors)\n- **Regional uniqueness:** (1) Iron-tanged axe and round shield are the documented combat equipment of the era. (2) Wool cloak with brooch fastenings and leather armor are the documented clothing types (Borre Viking Center reconstructions). (3) Fjord backdrop with low timber structures establishes the Nordic setting. (4) Light: cool dawn ambient with warm firelight from nearby longhouse.\n- **Gender angle:** women in Norse society had legal rights to own property, initiate divorce, and serve as warriors; shield-maidens are documented in sagas and archaeological evidence.\n- **Fantastical hook:** the shield as a protective charm carved with ancestral runes; the warrior as a guardian between the mortal coast and the sea realm.\n\n### 2. Tang Temple Attendant (bank cand. 10)\n- **Event:** Temple ceremony, Tang dynasty, 8th to 10th Century\n- **Used in:** W6-W8 P2 menu - character track (a temple attendant tending incense and sutra scrolls)\n- **Regional uniqueness:** (1) Silk robes with era-appropriate dyes and patterns are the documented clothing of temple attendants (Dunhuang mural documentation). (2) Incense burner, bronze mirror, and silk sutra scrolls are the era-accurate props. (3) Mountain temple architecture with tiled roofs and timber framing establishes the setting. (4) Light: morning mist diffusion through shoji screens with a single sunbeam.\n- **Gender angle:** temple attendants included both men and women; women held respected positions as nuns and lay practitioners in Tang-era monasteries.\n- **Fantastical hook:** the incense smoke as a bridge between the physical and spiritual realms; the attendant as a keeper of the temple's accumulated wisdom.\n\n### 3. Sahel Scholar (bank cand. 11)\n- **Event:** Academic study, Sankore Madrasah, 13th to 15th Century\n- **Used in:** W6-W8 P2 menu - character track (a scholar at the Sankore library with manuscripts and trade goods)\n- **Regional uniqueness:** (1) Earth-toned robes with indigo and gold accents are the documented Sahel clothing palette. (2) Leather-bound manuscripts, cowrie shells, and brass astrolabes are the era-accurate props. (3) Mud-brick walls with toron beams and arched openings establish the Sudano-Sahelian setting (Djenné tradition). (4) Light: warm filtered light through high windows with dust motes.\n- **Gender angle:** the Sankore Madrasah admitted women as scholars and students; female scholars are documented in the historical records of Timbuktu's academic tradition.\n- **Fantastical hook:** the manuscripts as living vessels of knowledge spanning centuries; the scholar as a crossroads figure connecting African, Arab, and Berber intellectual traditions.",
    "status": null,
    "sources": [
      "https://en.wikipedia.org/wiki/Borre_style",
      "https://en.wikipedia.org/wiki/Mogao_Caves",
      "https://en.wikipedia.org/wiki/University_of_Sankor%C3%A9",
      "https://en.wikipedia.org/wiki/Sudano-Sahelian_architecture"
    ],
    "tags": [
      "prompt-details",
      "detailed",
      "prompt",
      "cards"
    ],
    "source": "research/prompt-details-p2.md",
    "order": 6
  },
  {
    "id": "prompt-details-p3",
    "title": "Detailed Prompt Cards - Part 3 of 3 (P3 Story Moments) + Set-Level Summary",
    "date": null,
    "handoffVersion": null,
    "scope": null,
    "summary": "",
    "body": "This file is the third of three detail cards for the candidates used in the student lesson docs. Part 1 covers the W1/W2 warm-ups and the P1 environment list; Part 2 covers the P2 character/prop menu. A candidate used in several weeks appears once, in its first course placement, with a \"used in\" line listing every placement. This file also carries the full-set hook tally, the consolidated corrections, and the shared source list.\n\n- Part 1: `research/prompt-details-p1.md` -- Nordic longhouse hearth, coastal fishing hut, mountain hermit cell, Kyoto tea house interior, rice terrace rest house, floating market stall, granary compound interior, cliffside library\n- Part 2: `research/prompt-details-p2.md` -- Nordic coastal warrior, Tang temple attendant, Sahel scholar\n- Part 3 (this file): `research/prompt-details-p3.md` -- Viking raid moment, temple dedication ceremony, Sahel trade caravan arrival; plus hook tally, corrections, shared sources\n\nThese are the P3 story-moment candidates. The design-concept thread is written to stand alone - no event names inside it - for your idea of building standalone design questions on abstract concepts.\n\n---\n\n### 1. Raid at Dawn (bank cand. 12)\n- **Event:** Coastal raid, Scandinavia, 10th to 12th Century\n- **Used in:** W9-W12 P3 list (dawn light over fjord, longships approaching a coastal settlement)\n- **Regional uniqueness:** (1) Longship silhouettes against dawn sky are the documented visual vocabulary of Norse seafaring (L'Anse aux Meadows site archaeology). (2) The coastal settlement with low timber buildings and fishing gear establishes the target. (3) Warm firelight from longhouse hearths contrasts with cool dawn ambient. (4) Light: dawn gradient from cool to warm, firelight as interior accents.\n- **Gender angle:** women defended coastal settlements when men were away at sea; shield-maidens participated in raids and defenses.\n- **Fantastical hook:** the longship as a vessel that sails between worlds; the dawn fog as a curtain separating the mortal and mythological realms.\n\n### 2. Temple Dedication (bank cand. 13)\n- **Event:** Mountain temple dedication ceremony, Tang dynasty, 8th to 10th Century\n- **Used in:** W9-W12 P3 list (temple interior at dawn, incense smoke, monks and lay worshippers)\n- **Regional uniqueness:** (1) Mountain temple with tiled roofs and timber framing is the documented Tang-era architecture (Horyu-ji Temple documentation). (2) Incense smoke, bronze ritual objects, and silk sutra scrolls are the documented ceremonial elements (Dunhuang mural records). (3) Morning mist through open temple doors creates the atmospheric read. (4) Light: warm interior firelight against cool morning mist exterior.\n- **Gender angle:** women participated as lay worshippers and donor-patrons in Tang-era temple dedications; female nuns held formal roles in the ceremony.\n- **Fantastical hook:** the temple as a portal between the earthly realm and the celestial court; incense smoke as a visible bridge between worlds.\n\n### 3. Sahel Trade Caravan Arrival (bank cand. 14)\n- **Event:** Trans-Saharan caravan arrival, Mali Empire, 13th to 15th Century\n- **Used in:** W9-W12 P3 list (golden hour at city gates, camel caravans, mud-brick architecture, traders and scholars)\n- **Regional uniqueness:** (1) Sudano-Sahelian mud-brick architecture with toron beams is the documented building system (Djenné Great Mosque tradition). (2) Camel caravans with leather-bound manuscripts, gold, salt, and cowrie shells are the documented trade goods. (3) Earth tones with gold accents define the palette. (4) Light: golden hour warmth with long shadows through arched city gates.\n- **Gender angle:** women traders and scholars participated in Sahel commerce; female merchants are documented in the Sankore Madrasah records as participants in cross-Saharan trade.\n- **Fantastical hook:** the caravan as a thread connecting the spiritual crossroads of Africa; the manuscripts as vessels carrying accumulated wisdom across centuries.",
    "status": null,
    "sources": [
      "https://en.wikipedia.org/wiki/L%27Anse_aux_Meadows_National_Historic_Site",
      "https://en.wikipedia.org/wiki/Borre_style",
      "https://en.wikipedia.org/wiki/H%C5%8Dr%C5%8D-ji",
      "https://en.wikipedia.org/wiki/Mogao_Caves",
      "https://en.wikipedia.org/wiki/Djenn%C3%A9_Great_Mosque",
      "https://en.wikipedia.org/wiki/University_of_Sankor%C3%A9",
      "https://en.wikipedia.org/wiki/Sudano-Sahelian_architecture"
    ],
    "tags": [
      "prompt-details",
      "detailed",
      "prompt",
      "cards"
    ],
    "source": "research/prompt-details-p3.md",
    "order": 7
  }
],
  progress: {
  "student": {
    "name": "",
    "id": ""
  },
  "xp": {
    "total": 0,
    "perCheckpoint": 250,
    "perReflect": 25,
    "perLessonRead": 10
  },
  "weeks": {
    "wk-01": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "n/a",
      "note": ""
    },
    "wk-02": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "pending",
      "note": ""
    },
    "wk-03": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "pending",
      "note": ""
    },
    "wk-04": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "n/a",
      "note": ""
    },
    "wk-05": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "pending",
      "note": ""
    },
    "wk-06": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "pending",
      "note": ""
    },
    "wk-07": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "n/a",
      "note": ""
    },
    "wk-08": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "n/a",
      "note": ""
    },
    "wk-09": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "pending",
      "note": ""
    },
    "wk-10": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "pending",
      "note": ""
    },
    "wk-11": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "n/a",
      "note": ""
    },
    "wk-12": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "pending",
      "note": ""
    },
    "wk-13": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "n/a",
      "note": ""
    },
    "wk-14": {
      "read": false,
      "reflected": false,
      "checkpointStatus": "pending",
      "note": ""
    }
  },
  "projects": {
    "a": {
      "status": "not-started",
      "checkpointStatus": {
        "A1": "pending",
        "A2": "pending",
        "Delivery A": "pending"
      },
      "delivered": false
    },
    "b": {
      "status": "not-started",
      "checkpointStatus": {
        "B1": "pending",
        "B2": "pending",
        "Delivery B": "pending"
      },
      "delivered": false
    },
    "c": {
      "status": "not-started",
      "checkpointStatus": {
        "C1": "pending",
        "C2": "pending",
        "Delivery C": "pending"
      },
      "delivered": false
    }
  },
  "updatedAt": "2026-01-01T00:00:00.000Z"
},
  projects: [
  {
    "id": "a",
    "name": "Project A: Environment / World Study",
    "world": "Three themes: Nordic Fjords and Forests (10th-12th Century), East Asian Mountain Temples (8th-10th Century), Sahel Crossroads (13th-15th Century)",
    "weeks": [
      2,
      3,
      4
    ],
    "deliveryWeek": 4,
    "deliveryDate": "2026-10-02",
    "prompt": null,
    "brief": "## Project Brief\n\nWelcome to the first real studio-style project of the term! We will design one believable location inside a shared reference world, explore several genuinely different directions, and deliver the best one as a detailed blockout rendered from three angles and presented in a funpack-style contact sheet. The whole process follows the visual design pipeline: we block the space, we choose our favorite direction, and we detail it into something that reads as a place with a story. Three angles on the final blockout show the space from different sides, and the funpack presentation gives us a clean, scannable way to show our thinking alongside the work. Many good studies beat one perfect render, and that is exactly how we measure success here.\n\nThe core deliverable is a **detailed blockout of one environment, rendered in three different camera angles, assembled into a funpack-style presentation**. The mood board and our weekly prep work round out the package. We will cover the weekly tools and steps in the lesson plan, so we can refer back to each week for the in-depth guidance. This brief is where the big picture lives.\n\n## Themes and Timeframes\n\nWe have three different geographical themes to choose from, each rooted in a specific period, and within those themes we have three unique designs to explore. The timeframe is not decoration. It tells us what props to place, what clothing to suggest, what architecture to trust. Pick the theme that sparks the clearest idea, then pick the sub-location that feels most fun to build. Here is what is on the table:\n\n**Theme 1: Nordic Fjords and Forests (10th to 12th Century)**. The Viking Age is ending, the first stone churches are rising, and timber longhouses still anchor every settlement. Stone, timber, and cold light define the palette. Choose from the **Longhouse Hearth** with warm firelight and woven wool textiles and a carved rune stone on a rough shelf as the focal point, the **Coastal Fishing Hut** with dawn fog and weathered driftwood and dried cod hanging by the door as the focal point, or the **Mountain Hermit Cell** with cold blue mist through a single window and a worn psalter on a birch shelf as the focal point. Props suggest themselves from the era: iron-tanged axes, wool cloaks, wooden bowls, whalebone combs. The architecture is timber and sod, low and wide.\n\n**Theme 2: East Asian Mountain Temples (8th to 10th Century)**. The Tang Dynasty reaches its zenith, Buddhist monasteries climb mountain ridges, and lacquered woodwork meets paper screens in every interior. Morning mist is the default atmosphere. Choose from the **Kyoto Tea House Interior** with tatami and low wood and morning light through shoji screens and a single ceramic vessel on a low table as the focal point, the **Rice Terrace Rest House** with misty mountains visible through a half-door and woven bamboo and a weathered wooden bowl on a crate as the focal point, or the **Floating Market Stall** with warm dawn light and lacquered wood and silk and a carved jade pendant resting on a cloth as the focal point. Props from the era: bronze mirrors, incense burners, silk sutra scrolls, lacquerware. The architecture is timber framing with tiled roofs and wooden railings.\n\n**Theme 3: Sahel Crossroads (13th to 15th Century)**. The Mali Empire and Songhai trade routes carry gold, salt, and manuscripts across West Africa. Rammed earth and carved wood define the built environment. Golden hour warmth is the default light. Choose from the **Granary Compound Interior** with carved wooden doors and earth tones and a leather water skin on woven mats as the focal point, the **Cliffside Library** with honey-colored stone and shafts of light through narrow windows and a metal inkwell on a reading stone as the focal point, or the **Savanna Lookout** with thatch and woven patterns and golden hour glow and a curved bow on a wooden peg as the focal point. Props from the era: cowrie shell strings, leather-bound manuscripts, clay water jugs, woven baskets. The architecture is mud-brick walls with wooden toron beams and carved doorways.\n\nOur location carries a *story beat*, not just a postcard of a place. A beat has a before and an after: something just happened or is about to happen. A library is a noun, but the environment the moment a rare text lands on one of its tables is a beat. That difference is the heart of the whole project. If our beat edges toward a heavier historical layer, we lead with the design question and the story hook first, and treat the historical context as optional background. The design carries the grade, not the history lesson.\n\n> **Aside (further reading):** *Dream Worlds: Production Design for Animation* by Hans Bacher, Chapter 3, \"Visual Development and Research.\"\n\n## Project Details\n\nThe weekly lessons will walk us through the tools and techniques step by step, so we can refer back to each week for the detailed guidance on blocking, lighting, materials, camera work, and rendering. Here is the overview of what to expect:\n\nWe start with a **starter scene** that gives us an organized file with collections, a camera, and a three-point light rig ready to go. The **Quick Sheet renderer** helps us produce a contact sheet of directional studies in one pass. The **file auditor** checks naming and scene hygiene before we deliver. We will use **EEVEE for daily iteration** and reserve longer renders for the hero pass. **Week 3** introduces skyboxes: we build custom skies and clouds to set the atmosphere. **Week 4** is about adding quick details, variations, and lighting impressions to bring the scene to life. Blender is the tool for the term, and the concepts stay version-agnostic.\n\nTwo in-class checkpoints will keep us on track, each gated on a working artifact rather than the clock. **Checkpoint A1** at week two reviews our blocked location for scale and flow. **Checkpoint A2** at week three reviews our directional studies for genuine variety. Delivery happens at week four with the hero render, funpack presentation, mood board, and a clean file. At delivery we want to hear the process, not the polish. What we killed and why is more interesting than the finished image.\n\n## Grading Rubric\n\nThe rubric for this project covers checkpoint criteria, final submission criteria, and how the grade is calculated across the three term projects. We self-assess before the instructor grades, and that comparison between our own read and the instructor's read is where the real learning happens. The full rubric breaks each dimension down with point values and rationale, so take a look before we start. The process and the thinking carry more weight than the final polish, and that is by design.\n\n## Deliverables\n\n- A **detailed blockout of one environment**, rendered in three different camera angles.\n- A **funpack-style presentation** assembled from the three renders.\n- A **mood board** with research references.\n- A clean **.blend**, auditor-checked.\n\nNot required: animation, texture-baking, or a game-ready asset. This is design and presentation, and that is the whole of it.\n\n## Checkpoints\n\nTwo in-class checkpoints, each gating on a **working artifact**, not the clock. Checkpoints are due **Wednesday after the assignment** (marked Thursday). Answer the self-checks before we show the work.\n\n### A1: Blockout review (Wk 2)\n\n- **What to show:** the location blocked out with basic scale and flow established.\n- **Focus criterion:** Does the space have **readable scale and a clear path through it**, or is it still a floating box with no sense of place?\n- **Self-check before we show:**\n  1. What is the main focal point of our space, and how does the eye find it?\n  2. Where is the camera for the hero angle, and why there?\n  3. If we walked through this space, what would we see first?\n\n### A2: Directional studies review (Wk 3)\n\n- **What to show:** the contact sheet of directional studies showing genuine variety.\n- **Focus criterion:** Do our studies show **different choices**, or five copies of the same idea?\n- **Self-check before we show:**\n  1. Which study is the weakest, and what specifically makes it weak?\n  2. What did we kill from early ideas, and why?\n  3. Does the chosen direction carry the story beat, or is it just a pretty environment?\n\n### Delivery A (Wk 4)\n\nThe hero render, funpack presentation, mood board, and the clean .blend. At delivery we want to hear the process, not the polish. What we killed and why is more interesting than the finished image.\n\n## Links and Resources\n\nHere is where we will keep useful links and reference images as the term progresses. For now, the weekly lessons are the primary source of in-depth guidance, and the rubric is our grading compass. As we build, we will add mood board references, tool tips, and example funpacks right here.\n\n*Coming soon: mood board templates, funpack examples, and reference image links.*",
    "rubric": "*Three worlds, three timeframes. Fall 2026. Read this rubric like a conversation, not a form.*\n\n## How This Term Is Graded\n\nThe term is split across three projects, weighted to keep the work steady from start to finish:\n\n- **Project A = 30%** of the term grade\n- **Project B = 30%** of the term grade\n- **Project C = 40%** of the term grade\n\nProject C carries the most weight because it is the heaviest build. The split makes sure we invest effort throughout the term, not just at the end.\n\nEach project is scored on a 100-point scale. The final submission score becomes the project score, which is then weighted by the project percentage above. So a 75 out of 100 on Project A contributes 22.5 points (75 * 0.30) toward the term total.\n\n## How Each Project Is Scored\n\nEvery project is split 50/50 between checkpoints and the final submission:\n\n- **Checkpoints = 50% of the project score** (50 points available)\n- **Final Submission = 50% of the project score** (50 points available)\n\nThis means checkpoints are not a formality. Half our project grade is locked in before the final delivery, and that is intentional. We want the climb to be visible, and we want the process to carry weight.\n\n## Checkpoints\n\nCheckpoints are due **Wednesday after the assignment**. We mark them **Thursday**. This timing is not flexible. The ability to deliver on time is incredibly important. In a real studio, a missed deadline is a missed deadline, and we want the practice to land now.\n\nEach checkpoint has exactly **one criterion**: the focus of that week's lesson. We score it out of 25 points, so two checkpoints give us the 50 checkpoint points total.\n\n### A1: Blockout Review (Wk 2) | 25 pts\n\n**Criterion:** Does the blockout have readable scale and a clear path through it?\n\nThis is the only thing we are looking for at this stage. Not the materials, not the lighting, not the hero angle. Just: can we walk through this space and feel like it is a place?\n\n- **20 to 25 pts:** The space reads as a real location. A human dropped in would feel the right size. There is a path the eye can follow and a focal point the eye can land on.\n- **15 to 19 pts:** The space is recognizable but scale wavers in places. The path is there but the eye gets lost partway through.\n- **1 to 14 pts:** The space reads more like a floating object than a place we can inhabit. Scale is unclear and there is no obvious path.\n\n### A2: Directional Study Review (Wk 3) | 25 pts\n\n**Criterion:** Do the directional studies show genuinely different choices?\n\nNot five copies of the same render with the light nudged. Different compositions, different palettes, different focal points. Range, not repetition.\n\n- **20 to 25 pts:** The studies are meaningfully different. We can point to specific choices that shift between studies and say why each direction is worth exploring.\n- **15 to 19 pts:** The studies have some variety, but two or more are too close to each other. The range is there but not sharp.\n- **1 to 14 pts:** The studies feel like the same idea repeated. There is not enough difference between directions to call them a range.\n\n## Final Submission Criteria\n\nThe final submission is scored out of 100 points. Those 100 points are then halved to give us the 50 points for the final submission portion of the project grade. Here are the four criteria:\n\n### 1. Adherence to Reference Material | 30 pts\n\n**Why it matters:** Directors look at this first. Can we take a brief, research it, and deliver work that matches the assigned style and world? This is the core job skill.\n\nWe are graded on how well our environment lives inside the chosen theme, its timeframe, and its design. Does the **10th-century Nordic Fjord** read as stone, timber, and cold light? Does the **9th-century East Asian Mountain Temple** carry lacquered wood, paper screens, and morning mist? Does the **14th-century Sahel Crossroads** feel like rammed earth, carved wood, and golden warmth? The timeframe shapes the props we place, the architecture we trust, and the clothing we suggest. The reference material is our north star, not a suggestion.\n\n### 2. Presentation | 30 pts\n\n**Why it matters:** Directors look at this second. Can we make our work legible to someone who has not seen the process? A great idea trapped behind a messy deliverable does not land.\n\nThis covers the funpack-style contact sheet, the mood board, the three hero angles, and how clearly our story beat comes through in the final render. The presentation is communication, not decoration.\n\n### 3. Design Innovation | 20 pts\n\n**Why it matters:** This is the cool factor. Did we bring something to the table that makes us stand out, even within the reference constraints? Directors want work that surprises, and they want to hire people who do that.\n\nWe are looking for smart choices that go beyond the brief without violating it. A camera angle that tells the beat more clearly than a head-on shot. A palette that carries mood without drifting from the world. A detail that says \"this was a real place\" without reading as clutter.\n\n### 4. Organization | 20 pts\n\n**Why it matters:** Quality of life. Someone else needs to be able to open our file and follow along. Clean names, sorted collections, a readable node graph. This is not busywork. It is how we keep our own sanity.\n\nThe file auditor runs before delivery. If the auditor flags issues, those are fixable, and fixing them before we deliver is part of the grade.\n\n## Summary\n\n| Component | Points | Weight |\n|---|---|---|\n| Checkpoint A1 | 25 pts | 25% of project grade |\n| Checkpoint A2 | 25 pts | 25% of project grade |\n| Final Submission (100 pts, halved) | 50 pts max | 50% of project grade |\n| **Total Project A** | **100 pts** | **30% of term grade** |\n\nThe grade is not the render. The grade is the thinking we can defend, the decisions we can explain, and the evidence that we got there by working, not by luck. Everything else in this document is just the shape of that, aimed at our environment.",
    "guardrails": [],
    "deliverables": [
      "A **detailed blockout of one environment**, rendered in three different camera angles.",
      "A **funpack-style presentation** assembled from the three renders.",
      "A **mood board** with research references.",
      "A clean **.blend**, auditor-checked."
    ],
    "checkpoints": [
      {
        "id": "A1",
        "week": 2,
        "name": "A1",
        "body": "- **What to show:** the location blocked out with basic scale and flow established.\n- **Focus criterion:** Does the space have **readable scale and a clear path through it**, or is it still a floating box with no sense of place?\n- **Self-check before we show:**\n  1. What is the main focal point of our space, and how does the eye find it?\n  2. Where is the camera for the hero angle, and why there?\n  3. If we walked through this space, what would we see first?"
      },
      {
        "id": "A2",
        "week": 3,
        "name": "A2",
        "body": "- **What to show:** the contact sheet of directional studies showing genuine variety.\n- **Focus criterion:** Do our studies show **different choices**, or five copies of the same idea?\n- **Self-check before we show:**\n  1. Which study is the weakest, and what specifically makes it weak?\n  2. What did we kill from early ideas, and why?\n  3. Does the chosen direction carry the story beat, or is it just a pretty environment?"
      },
      {
        "id": "Delivery A",
        "week": 4,
        "name": "Delivery A",
        "body": "The hero render, funpack presentation, mood board, and the clean .blend. At delivery we want to hear the process, not the polish. What we killed and why is more interesting than the finished image."
      }
    ],
    "source": {
      "brief": "lessons/semester-3/briefs/brief-a-environment-world-study.md",
      "rubric": "lessons/semester-3/rubrics/rubric-a-environment.md"
    },
    "order": 1
  },
  {
    "id": "b",
    "name": "Project B — Character or Prop Design Package (Funpacks)",
    "world": null,
    "weeks": [
      5,
      6,
      7
    ],
    "deliveryWeek": 9,
    "deliveryDate": null,
    "prompt": "**Pick one of three genre tracks, then pick your subject within it.** The subject is a starting point, not a mandate. We have full choice of what to design, even within a genre.\n\n**Horror.** A creature, a cursed or haunted object, or a figure that reads as other. Design-level menace only, built from shape and silhouette and wrongness. Find the menace in the silhouette first.\n\n**Comedy.** A gag prop, an exasperated sidekick, or an absurd machine or creature. It must read in silhouette and expression. If the joke only lands with a caption the design is not carrying it.\n\n**Mythic or folklore.** A figure or artifact rooted in the world of Project A's theme so the subject belongs in the same place you built. If your Project A world is Nordic, design a guardian of the longhouse hearth, a mountain hermit, a coastal spirit of the fjords, or a carved rune figure given life. If East Asian, design a temple attendant, a spirit of the mountain mist, a guardian of the tea house, or a yokai of the rice terraces. If Sahel, design a scholar of the cliffside library, a guardian of the granary compound, or a spirit of the trade routes. Other anchors include a kitsune or yokai, a feathered serpent or jaguar deity, a koi or dragon, a Polynesian demigod.\n\nThe content note: keep horror and comedy at the design level. Shape, silhouette, menace, expression, absurdity. Where the subject carries historical or cultural weight, lead with the design question and the hook. Treat deeper context as optional background. The design carries the grade. Do the small amount of research that keeps the work from reading as a costume. A real simurgh is a griffin with a human head, not a generic dragon in a hat. That care is visible and it is part of the craft.",
    "brief": "*One subject, presented the way a studio would hand it off.*\n\nWelcome to the second project of the term. We built a place in Project A. Now we build the thing that lives in it. A character or a prop, developed in 3D, and presented as a **funpack**, the turnaround-and-studies sheet a production actually uses. A render shows one angle. A funpack says *this is the design, from every angle, and here is how it behaves.*\n\n## What we are making\n\nWe design **one character or one prop** and present it as a production-ready reference sheet. A 3-view turnaround. A set of expressions or variants. A silhouette check. One or two material directions. Two hero renders. We are not making a game-ready model or a rig. We are making a design that reads and a sheet that communicates it. A funpack is not a portrait. It is a *specification*. When a production artist looks at our sheet they should be able to rebuild our subject in another shot from that sheet alone. If the back view is a mystery the design is not finished.\n\n## The prompt\n\n**Pick one of three genre tracks, then pick your subject within it.** The subject is a starting point, not a mandate. We have full choice of what to design, even within a genre.\n\n**Horror.** A creature, a cursed or haunted object, or a figure that reads as other. Design-level menace only, built from shape and silhouette and wrongness. Find the menace in the silhouette first.\n\n**Comedy.** A gag prop, an exasperated sidekick, or an absurd machine or creature. It must read in silhouette and expression. If the joke only lands with a caption the design is not carrying it.\n\n**Mythic or folklore.** A figure or artifact rooted in the world of Project A's theme so the subject belongs in the same place you built. If your Project A world is Nordic, design a guardian of the longhouse hearth, a mountain hermit, a coastal spirit of the fjords, or a carved rune figure given life. If East Asian, design a temple attendant, a spirit of the mountain mist, a guardian of the tea house, or a yokai of the rice terraces. If Sahel, design a scholar of the cliffside library, a guardian of the granary compound, or a spirit of the trade routes. Other anchors include a kitsune or yokai, a feathered serpent or jaguar deity, a koi or dragon, a Polynesian demigod.\n\nThe content note: keep horror and comedy at the design level. Shape, silhouette, menace, expression, absurdity. Where the subject carries historical or cultural weight, lead with the design question and the hook. Treat deeper context as optional background. The design carries the grade. Do the small amount of research that keeps the work from reading as a costume. A real simurgh is a griffin with a human head, not a generic dragon in a hat. That care is visible and it is part of the craft.\n\n## Guardrail menu\n\nEvery tool is available, never a hard dependency. If it is down the manual path works and the requirement does not change.\n\n| Tool or technique | What it does for this project | Manual fallback |\n|---|---|---|\n| **Funpack or turnaround generator** | Places cameras around the subject and renders a labeled grid sheet | Set up 3 to 4 cameras manually, render each to PNG, assemble a labeled grid |\n| **Quick Sheet renderer** | A contact sheet of variants or angles at low samples | Render each variant to its own PNG and assemble a grid by hand |\n| **File or scene auditor** | Checks naming, orphan data, collection hygiene before delivery | Manually rename, purge orphans, confirm every collection has a purpose |\n| **Palette extractor** (optional) | Swatches from a render for the material direction | Pick 3 to 5 values by eye |\n| **Add-on allow-list** | Smart UV Project, BlenderKit, studio light kit, optionally Node Tools | Model the subject ourselves, use a sky texture or simple HDRI, light with a three-point rig |\n| **Principled BSDF + EEVEE** | The material study, one or two believable or stylized directions | Build the material from the BSDF node by hand |\n| **Render** | EEVEE for iteration, Cycles-class for the two hero renders | Bump EEVEE samples and GI for the heroes |\n\n## Deliverables\n\n- A **3-view funpack or turnaround** with front, side, back and often 3/4, with scale\n- An **expression sheet** for character work or a **variant or palette sheet** for prop work, 3 to 5 reads\n- A **silhouette check sheet** with flat-color renders at key angles, judged by one question: does it read in solid black\n- **1 to 2 material directions**, believable or stylized\n- **2 hero renders**, a day and a night pass\n- A clean **.blend** file, auditor-checked\n\nNot required: a full rig, animation, or a game-ready asset. Those belong to a later semester. This is design and presentation.\n\n## Checkpoints\n\nTwo in-class checkpoints, each gating on a **working artifact**.\n\n### B1: Proportions and blockout review (Wk 5)\n\nShow the subject blocked out, plus at least one expression or variant started. The pass question: does the subject have a **readable silhouette and a clear proportion**.\n\n### B2: Funpack and studies review (Wk 6)\n\nShow the turnaround, the expression or variant sheet, and the silhouette check, with materials started. The pass question: does the sheet **communicate the design from every angle**.\n\n### Delivery B (Wk 9, midterm crit)\n\nThe full funpack, the silhouette sheet, the two hero renders, and the clean .blend. Study Week (Wk 8) is our buffer between the last build week and delivery. At the crit the talk-through should be about process. What we tried, what we killed, and why the survivor won.\n\n## Assessment focus\n\nThe four rubric dimensions land on the subject like this:\n\n- **Adherence:** the genre intent comes through in design, not decoration. We can say why the silhouette reads the way it does.\n- **Presentation:** the funpack is clear and consistent from every angle. The silhouette check is honest. The renders read at small size. The .blend is clean.\n- **Innovation:** the expressions or variants are real choices. The materials explore at least two directions.\n- **Organization:** we explored and then committed. The studies show weak variants killed and survivors built on. The process is visible.\n\nThe one line that does the most work: the genre has to be in the design, not stuck on top of it. A horror subject with a clean silhouette and a wrong proportion beats a horror subject with a great texture.\n\n## Revisit (spacing hook)\n\nRemember the directional studies from Project A, where we checked that five reads were five choices, not five copies. Same test, different subject. Now it is expressions or variants. The question is identical: is each one a different decision or the same one nudged. It is about to show up in Project C, where a whole shot list has to pass this exact test.\n\n---\n\n**Three lines to close, specific to this project:**\n- **What we did:** picked our genre and our subject, blocked it out, and started one variant.\n- **What we learned:** a funpack is a specification, and the back view is part of the design, not an afterthought.\n- **What we would try next:** flattening the silhouette to solid black and asking what we actually see before we add any color.",
    "rubric": "*One subject, presented the way a studio would hand it off. Fall 2026. This is the rubric for Project B, applied to the funpack, the two checkpoints, and the delivery. Read it like a conversation, not a form.*\n\nProject B counts for **30% of the term grade**. It is scored on a 100-point scale, then weighted by 0.30 to contribute toward the term total.\n\n## How Project B is scored\n\nThe project splits 50/50 between checkpoints and the final submission.\n\n- **Checkpoints = 50% of the project score** (50 points available). Two checkpoints, each scored on one criterion, 25 points each.\n- **Final Submission = 50% of the project score** (50 points available). Four criteria: **Adherence** (30%), **Presentation** (30%), **Innovation** (20%), **Organization** (20%).\n\nCheckpoints are due **Wednesday after the assignment**. We mark them **Thursday**. This timing is not flexible.\n\n## What we are delivering (checklist)\n\n- **A 3-view funpack or turnaround** with front, side, back, and often 3/4, with scale. The subject built all the way around, not just a nice front.\n- **An expression sheet** for character work or a **variant or palette sheet** for prop work, three to five reads. Real choices, not the same face with a different mouth.\n- **A silhouette check sheet** with flat-color renders at key angles, judged by one question: does it read in solid black.\n- **One to two material directions**, believable or stylized. The *what it is made of and why*, not glossy brown.\n- **Two hero renders**, a day and a night pass, so the design is tested in two lights.\n- **A clean .blend file**, auditor-checked. Named, organized, no orphan data.\n- **A talk-through at delivery.** The process, not the polish. What we tried, what we killed, and why the survivor won.\n\n## Checkpoint gates\n\nBoth gate on a **working artifact, not on time**. Hit the pass question, move on. Miss it and we fix it in class, and that fix is part of our iteration evidence, not a penalty.\n\n### B1: Proportions and blockout review (Wk 5) | 25 pts\n\n**Criterion:** Does the subject have a readable silhouette and a clear proportion.\n\nShow the subject blocked out, plus at least one expression or variant started.\n\n- **Strong:** the silhouette reads in solid black. The proportion lands the genre. A horror figure with a wrong ratio that creates unease. A comedy prop where the shape itself is the joke. The center of gravity is clear and the subject looks stable.\n- **Not there yet:** a blob wearing a costume. The silhouette is generic. The proportions do not serve the genre. The subject could belong to any track.\n\n### B2: Funpack and studies review (Wk 6) | 25 pts\n\n**Criterion:** Does the sheet communicate the design from every angle.\n\nShow the turnaround, the expression or variant sheet, and the silhouette check, with materials started.\n\n- **Strong:** the back view is as intentional as the front. The variants show real decisions. The silhouette check changed something about the design. The material direction serves the genre.\n- **Not there yet:** the front is beautiful and the back is a surprise. The variants are the same idea nudged. The silhouette was rendered but never used as a filter.\n\n## Final submission criteria (50 points total)\n\n### Adherence (30%)\n\nDoes the genre intent land in the design, not stuck on top of it. Can we say why the silhouette reads the way it does.\n\n- **Strong:** the one-sentence *what it is about* is real. The volume, the face, the material, and the light all serve it. A horror subject with a clean silhouette and a wrong proportion. A comedy prop that reads the joke in silhouette. When asked *why this one and not the other* the answer is a reason, not a feeling. The genre is in the design.\n- **Not there yet:** a beautiful subject that needs a caption to land. A texture doing the design job. The back is a mystery. The genre is there but we cannot say where it is.\n\n### Presentation (30%)\n\nDoes the sheet communicate the design from every angle. Is the craft of showing the work clean and professional.\n\n- **Strong:** the turnaround is built from clean, readable volumes. The silhouette check shows the subject reads in solid black, from front, side, and back. The day and night heroes prove the subject is portable and survives a light it did not choose. The file is named and organized. The weak variants are shown as *killed*, not hidden.\n- **Not there yet:** the front is beautiful and the back is a surprise. The silhouette needs details to be recognized, which means the face is doing the silhouette job. The night hero is just a dark version of the day one.\n\n### Innovation (20%)\n\nAre the expressions or variants real choices. Do the materials explore at least two directions.\n\n- **Strong:** the variants are kinds of the same thing, each one a real alternative we could have shipped. A curious djinn has a curious tilt, a curious squint, a curious lean, and we can pick the one that serves the beat. The materials explore the used and the new, or the smooth and the rough, and each one serves the design sentence.\n- **Not there yet:** five faces that are the same face with a different mouth. One material with the roughness nudged. The work looks nice and says one thing. We made a portrait, not a set of options.\n\n### Organization (20%)\n\nCan we see the climb. Did we explore and then commit. Is the process visible.\n\n- **Strong:** we killed the nudge and kept the real alternative. The silhouette check is there and it changed something. The material list shows we knew what to fix and why before we rendered the pair. The day or night test told us where the subject quietly falls apart. The .blend is named, organized, and free of orphan data.\n- **Not there yet:** only the survivor. The heroes are there and the process is not. We cannot see how the decisions were made, and we cannot tell a good decision from a lucky one. The file is messy or unorganized.\n\n## Self-assess before we hand it in\n\nThese are the Boud moves. We answer them in our three-line reflection, honestly, before we hand the work over. The instructor reads them and tells us where their view matches ours and where it does not.\n\n- What changed between our B1 blockout and our delivery, and why. If the answer is *we made it prettier* that is execution. If it is *we killed the variant that was a nudge and the silhouette got cleaner* that is design.\n- What is the one-sentence *what it is about* for our subject, and does the silhouette actually show it. If the sentence says *curious, not scary* and the silhouette says *a spiky lump* the subject is working against the sentence.\n- Which of our variants or material directions is the weakest, and what specifically is weak about it. Naming our own weak work, precisely, is the whole of decision quality.\n- Does our subject lead without trapping. Put it in a scene we did not design, in a hard shadow, in a cool light. Does it still lead.\n\n---\n\n**One line to carry out of this rubric:** the grade is not the render. The grade is the thinking we can defend, the decisions we can explain, and the evidence that we got there by working, not by luck. On B the one line that does the most work: the genre is in the design, not stuck on top of it.",
    "guardrails": [
      {
        "tool": "Funpack or turnaround generator",
        "does": "Places cameras around the subject and renders a labeled grid sheet",
        "fallback": "Set up 3 to 4 cameras manually, render each to PNG, assemble a labeled grid"
      },
      {
        "tool": "Quick Sheet renderer",
        "does": "A contact sheet of variants or angles at low samples",
        "fallback": "Render each variant to its own PNG and assemble a grid by hand"
      },
      {
        "tool": "File or scene auditor",
        "does": "Checks naming, orphan data, collection hygiene before delivery",
        "fallback": "Manually rename, purge orphans, confirm every collection has a purpose"
      },
      {
        "tool": "Palette extractor** (optional)",
        "does": "Swatches from a render for the material direction",
        "fallback": "Pick 3 to 5 values by eye"
      },
      {
        "tool": "Add-on allow-list",
        "does": "Smart UV Project, BlenderKit, studio light kit, optionally Node Tools",
        "fallback": "Model the subject ourselves, use a sky texture or simple HDRI, light with a three-point rig"
      },
      {
        "tool": "Principled BSDF + EEVEE",
        "does": "The material study, one or two believable or stylized directions",
        "fallback": "Build the material from the BSDF node by hand"
      },
      {
        "tool": "Render",
        "does": "EEVEE for iteration, Cycles-class for the two hero renders",
        "fallback": "Bump EEVEE samples and GI for the heroes"
      }
    ],
    "deliverables": [
      "A **3-view funpack or turnaround** with front, side, back and often 3/4, with scale",
      "An **expression sheet** for character work or a **variant or palette sheet** for prop work, 3 to 5 reads",
      "A **silhouette check sheet** with flat-color renders at key angles, judged by one question: does it read in solid black",
      "1 to 2 material directions**, believable or stylized",
      "2 hero renders**, a day and a night pass",
      "A clean **.blend** file, auditor-checked"
    ],
    "checkpoints": [
      {
        "id": "B1",
        "week": 5,
        "name": "B1",
        "body": "Show the subject blocked out, plus at least one expression or variant started. The pass question: does the subject have a **readable silhouette and a clear proportion**."
      },
      {
        "id": "B2",
        "week": 6,
        "name": "B2",
        "body": "Show the turnaround, the expression or variant sheet, and the silhouette check, with materials started. The pass question: does the sheet **communicate the design from every angle**."
      },
      {
        "id": "Delivery B",
        "week": 9,
        "name": "Delivery B",
        "body": "The full funpack, the silhouette sheet, the two hero renders, and the clean .blend. Study Week (Wk 8) is our buffer between the last build week and delivery. At the crit the talk-through should be about process. What we tried, what we killed, and why the survivor won."
      }
    ],
    "source": {
      "brief": "lessons/semester-3/briefs/brief-b-character-prop-funpacks.md",
      "rubric": "lessons/semester-3/rubrics/rubric-b-funpack.md"
    },
    "order": 2
  },
  {
    "id": "c",
    "name": "Project C — Scene / Previs Blockout (Capstone)",
    "world": null,
    "weeks": [
      10,
      11,
      12,
      13,
      14
    ],
    "deliveryWeek": 14,
    "deliveryDate": null,
    "prompt": "**The beat comes from Project A's beat bank.** It inherits our world and our tone. Pick the **P1 shortlist beat** we already chose, with its fantastical hook. If we are in the Nordic theme, that might be a spirit emerging from the fjord mist. If East Asian, a lantern ceremony at dawn in the mountain temple. If Sahel, a caravan arriving at the cliffside library as the last light fades. We know ours.\n\n**The continuity requirement.** Across all our shots, the camera stays on **one side of the action axis**, the invisible line between the two main elements of the scene. Cross that line and the geography flips. Staying on one side is the difference between a shot list and a confusion.\n\n> **Content note:** the beat inherits Project A's policy. **Lead with the design question and the hook** — the space, the light, the moment — and treat any heavier historical or cultural layer as optional background. The design and the story carry the grade, not the sensitive context. Keep horror and comedy at the design level, as in Project B.\n\n**Motivated cameras are the whole grade of this project.** Every camera we place has a reason it is at that height, that distance, that angle, tied to the beat. The character is looking left, so the camera is where we see them look. The reveal is the point, so the wide shot comes before the close one. The pretty frame that is parked for no reason is the one we cut.\n\n> **Aside (further reading):** *Framed Ink* by Marcos Mateu-Mestre, **Chapter 4, \"Composing for Continuity.\"** \"The line,\" the point of reference, and why crossing it reads as a jump — that chapter is the entire continuity half of this project, spelled out with case studies. Read it before C1.",
    "brief": "*One small story, told with cameras that have a reason to be where they are.*\n\n## The brief\n\nProject A gave us a place. Project B gave us a subject. This is where they meet and something small actually *happens*.\n\nWe block a short scene. We place our subject in our world. We move a camera through it with a reason. This is previs, the cheap storyboard, and it is the closest we get in this track to how a real production validates a scene before anyone touches final work. No Grease Pencil. No animation. Just still frames, in order, that tell a beat. That is the capstone.\n\n## What we are making\n\nWe take the **story beat from Project A** and place our **B subject** inside it. We block the scene at rough scale. We set **motivated cameras** — an establishing shot plus two or three beats. We keep **180-degree continuity** across every shot. We present it as a **shot-sequence contact sheet** with static frames, labeled, in story order.\n\nWe are not making a film. We are making the *proof* that the scene works before it becomes one.\n\n## The prompt\n\n**The beat comes from Project A's beat bank.** It inherits our world and our tone. Pick the **P1 shortlist beat** we already chose, with its fantastical hook. If we are in the Nordic theme, that might be a spirit emerging from the fjord mist. If East Asian, a lantern ceremony at dawn in the mountain temple. If Sahel, a caravan arriving at the cliffside library as the last light fades. We know ours.\n\n**The continuity requirement.** Across all our shots, the camera stays on **one side of the action axis**, the invisible line between the two main elements of the scene. Cross that line and the geography flips. Staying on one side is the difference between a shot list and a confusion.\n\n> **Content note:** the beat inherits Project A's policy. **Lead with the design question and the hook** — the space, the light, the moment — and treat any heavier historical or cultural layer as optional background. The design and the story carry the grade, not the sensitive context. Keep horror and comedy at the design level, as in Project B.\n\n**Motivated cameras are the whole grade of this project.** Every camera we place has a reason it is at that height, that distance, that angle, tied to the beat. The character is looking left, so the camera is where we see them look. The reveal is the point, so the wide shot comes before the close one. The pretty frame that is parked for no reason is the one we cut.\n\n> **Aside (further reading):** *Framed Ink* by Marcos Mateu-Mestre, **Chapter 4, \"Composing for Continuity.\"** \"The line,\" the point of reference, and why crossing it reads as a jump — that chapter is the entire continuity half of this project, spelled out with case studies. Read it before C1.\n\n## Guardrail menu\n\nEvery tool is **available**, never a hard dependency. Manual fallbacks keep the requirement intact if one is down.\n\n| Tool / technique | What it does for this project | Manual fallback |\n|---|---|---|\n| **Quick Sheet renderer** | Builds the **shot-sequence contact sheet** in one render | Render each camera to PNG, number them, lay them into a labeled grid in a 2D app |\n| **Variant / sequence composer** | Sequence mode for arranging the shot sheet | Assemble the frames by hand in a 2D app |\n| **File / scene auditor** | Checks naming, orphan data, collection hygiene | Manually rename, purge orphans, confirm every collection has a purpose |\n| **Add-on allow-list** | Smart UV Project, BlenderKit, a studio light kit, optionally Node Tools | Reuse the props and materials from A and B; light with a three-point rig from lamps |\n| **Paintover** | Design accents over the blockout, in a 2D app | Any 2D app: **Photoshop, Procreate, Clip Studio** — the skill is the paintover, not the app |\n| **Render** | **EEVEE** for iteration; Cycles-class for hero passes | Bump EEVEE samples and GI, or run a longer Cycles-class pass |\n\nBlender is **5.x** all term. This project mostly *re-uses* what A and B taught us, plus two new ideas: motivated cameras and 180-degree continuity.\n\n> **Aside (further reading):** *Dream Worlds: Production Design for Animation* by Hans Bacher, **Chapter 6, \"Camera Rules.\"** The shot sizes, the 180-degree invisible line, the floor plans for movement and continuity. Pair it with the *Framed Ink* continuity chapter above.\n\n## Deliverables\n\n- A **previs blockout** of the scene, with our A environment and our B subject placed, at rough scale.\n- **Motivated cameras**, an establishing shot plus 2 to 3 beats, each chosen for the beat.\n- **180-degree continuity** maintained across all shots, the camera stays on one side of the action axis.\n- **Paintover accents** that add design intent over the blockout.\n- A **light / mood turn across the sequence**, with lighting and mood changing deliberately from beat to beat to carry the emotional turn. We **name the turn**: what changes, how it changes, and why it is the right turn.\n- A **shot-sequence contact sheet**, a sequence of still frames in story order, each labeled with type and purpose.\n- A clean **.blend**, auditor-checked.\n\nMotion, full animation, and 4K are not required. This is a sequence of stills that tells a beat. The label on each frame matters as much as the frame — *establishing, beat, reveal* — because that is how a production reads it.\n\n## Checkpoints\n\nTwo in-class checkpoints, each gating on a **working artifact**, not the clock.\n\n### C1 — Shot list / story-beats review (Wk 10)\n\n- **What to show:** our shot list, with the beats in order, the type and purpose of each, where each camera sits relative to the action axis, and the **emotional turn of the beat** (the mood at the start and where it goes).\n- **Pass question:** does the list **tell the beat in order**, with each shot motivated.\n- **Self-check:**\n  1. Read the shots in order. Where does the story *move*, and which shot is doing the moving?\n  2. Draw the action axis on a napkin. Which side is every camera on?\n  3. Which single shot, cut, would we lose nothing by removing? Cut it.\n  4. What is the emotional turn of the beat? Name it. That turn is the target our light plan will hit by C2.\n\n### C2 — Blockout + camera review (Wk 12)\n\n- **What to show:** the blocked scene with cameras placed, the 180-degree line holding, and the light / mood turn set.\n- **Pass question:** is the camera **motivated and continuous**.\n- **Self-check:**\n  1. For each camera, name its motivation — what in the scene justifies it being exactly there.\n  2. Where is the line, and did we stay on one side?\n  3. If the frames play in order, does the scene read as one continuous moment?\n  4. Can we **name the light / mood turn**, and does the contact sheet show it legibly?\n\n### Delivery C (Wk 14, final crit)\n\nThe full contact sheet, the paintover accents, the clean .blend, and the talk-through. **Wk 13 is the grace week** — catch-up, polish, or absorbing an emergency. No hard gate. Nothing lands on a cliff.\n\nAt the final crit, the talk-through covers the story we told: what the beat was, why each camera, and what we cut. That talk-through *is* a graded deliverable, and it is where the design thinking shows.\n\n> **Aside (further reading):** *Setting the Scene: The Art & Evolution of Animation Layout* by Fraser MacLean, **Chapter 7, \"The Story Reel and Beyond.\"** The story reel to the virtual camera is the exact lineage of what previs is. Good context for why this project exists.\n\n## Assessment focus\n\nFor this project the four rubric dimensions land like this:\n\n- **Design range:** the shots are a *sequence* of different framings and purposes, not the same wide shot three times.\n- **Decision quality:** every camera is motivated, the 180-degree line is respected, and the genre and tone from A and B reads clearly through the choices.\n- **Execution + presentation:** the contact sheet is labeled and in story order, the light / mood turn reads legibly across the frames, the paintover adds intent, and the .blend is clean.\n- **Iteration evidence:** C1 to C2 to delivery is a visible climb. The shot list got cut and re-ordered. The weak cameras got removed. The process is legible in what survived.\n\nThe bar is one line: **a stranger watching our frames in order should understand the beat, the tone, and why the camera is where it is.** If they do, we have done it.\n\n## Revisit (spacing hook)\n\nRemember that scale problem from Project A, where we had to decide whether the library reads as *grand* or as *a hallway*. It is back, wearing a different hat. Now it is not the space deciding — it is the **camera**. A wide lens from close in makes a small room feel vast. A long lens from far away makes a courtyard feel cramped. Same muscle, new tool.\n\nAnd remember the directional-study test from A and B — is each shot a different *choice*. That test is now our whole shot list. We have been practicing it for a month. Use it.\n\n*This is the last project. After the final crit, Semester 4 is where the polish and the portfolio happen. For now, we just have to prove the ideas work. They do. Show me.*\n\n---\n\n**Three lines to close, specific to this week:**\n- **What we did:** we took our A beat and B subject, blocked the scene, and placed a motivated camera on the right side of the line.\n- **What we learned:** a camera with a reason beats a camera that is just pretty, and the line is the geography the audience trusts.\n- **What we would try next:** cutting the weakest shot and seeing if the beat still lands, because it probably will.\n\n*If the frame will not do what we want, that is a lens or a position question, not a you thing. Move the camera, re-render, compare. Ask.*",
    "rubric": "*One small story, told with cameras that have a reason to be where they are. Fall 2026. This is the rubric for Project C, the capstone. Read it like a conversation, not a form.*\n\n## How this term is graded\n\nThe term is split across three projects, weighted to keep the work steady from start to finish:\n\n- **Project A = 30%** of the term grade\n- **Project B = 30%** of the term grade\n- **Project C = 40%** of the term grade\n\nProject C carries the most weight because it is the heaviest build. The split makes sure we invest effort throughout the term, not just at the end.\n\nEach project is scored on a 100-point scale. The final submission score becomes the project score, which is then weighted by the project percentage above. A 75 out of 100 on Project C contributes 30 points (75 * 0.40) toward the term total.\n\n## How Project C is scored\n\nEvery project splits 50/50 between checkpoints and the final submission:\n\n- **Checkpoints = 50% of the project score** (50 points available)\n- **Final Submission = 50% of the project score** (50 points available)\n\nThis means checkpoints are not a formality. Half our project grade is locked in before the final delivery, and that is intentional. We want the climb to be visible, and we want the process to carry weight.\n\n## What we are delivering (checklist)\n\nHold ourselves to this list before the final crit. If a line is missing, that is a finding, and it is the best possible time to find it.\n\n- A **previs blockout of the scene**, with our A environment and our B subject placed, at rough scale. A place and a thing, doing a small thing together.\n- **Motivated cameras**, an establishing shot plus two or three beats, each chosen for the beat, not by default. The character is looking left, so the camera is where we see them look.\n- **180-degree continuity** across all shots, the camera stays on one side of the action axis. The geography the audience trusts.\n- **Paintover accents**, re-used from Project A, that add design intent over the blockout.\n- A **deliberate light / mood turn across the sequence**, with lighting and mood changing from beat to beat to carry the story's emotional turn, and we can name what changes, how, and why.\n- A **shot-sequence contact sheet**, static by design, still frames in story order, each labeled with type and purpose. The one that demonstrates the light / mood turn, in order.\n- A clean **.blend**, auditor-checked. Named, organized, no orphan data.\n- A **talk-through at the final crit**, covering what the beat was, why each camera, what we cut, and the light / mood turn. This talk-through *is* a graded deliverable.\n\n## Checkpoints\n\nCheckpoints are due **Wednesday after the assignment**. We mark them **Thursday**. This timing is not flexible.\n\nEach checkpoint has exactly **one criterion**: the focus of that week's lesson. We score it out of 25 points, so two checkpoints give us the 50 checkpoint points total.\n\n### C1: Shot list / story-beats review (Wk 10) | 25 pts\n\n**Criterion:** Does the shot list **tell the beat in order**, with each shot motivated?\n\nThis is the only thing we are looking for at this stage. Not the render quality, not the materials, not the lighting. Just: does the sequence read as a story, with each camera earning its place?\n\n- **20 to 25 pts:** The shots are in story order, each with a clear type and purpose. The action axis is drawn and respected. The emotional turn of the beat is named. The sequence moves.\n- **15 to 19 pts:** The list has the right shots but the order does not yet read as a story. One or two cameras lack a stated motivation. The emotional turn is not yet named.\n- **1 to 14 pts:** The list reads as a pile of nice framings with no sequence. The action axis is missing or crossed. There is no emotional turn identified.\n\n### C2: Blockout + camera review (Wk 12) | 25 pts\n\n**Criterion:** Is the camera **motivated and continuous**, or is it parked in pretty spots?\n\nAt this stage the scene is blocked and the cameras are placed. The question is whether the geography holds and the cameras have reasons for being where they are.\n\n- **20 to 25 pts:** Every camera has a named motivation. The 180-degree line holds across all shots. The light / mood turn is set and legible on the contact sheet. The scene reads as one continuous moment.\n- **15 to 19 pts:** Most cameras are motivated but one or two feel parked. The line mostly holds but there is a wobble. The light / mood turn is started but not yet fully legible.\n- **1 to 14 pts:** The cameras lack motivation. The line is crossed and the geography flips. The light / mood turn is not set or not visible. The frames read as disconnected moments.\n\n## Final Submission Criteria\n\nThe final submission is scored out of 100 points. Those 100 points are then halved to give us the 50 points for the final submission portion of the project grade. Here are the four criteria:\n\n### 1. Adherence to Reference Material | 30 pts\n\n**Why it matters:** Directors look at this first. Can we take a brief, research it, and deliver work that matches the assigned style and world? This is the core job skill.\n\nWe are graded on how well our scene lives inside the world we built in Project A, with the subject we designed in Project B. Does the beat carry through from the environment to the previs? Does the genre and tone read consistently? Is the beat from Project A's beat bank legible in the final sequence? The reference world is our north star, not a suggestion.\n\n### 2. Presentation | 30 pts\n\n**Why it matters:** Directors look at this second. Can we make our work legible to someone who has not seen the process? A great idea trapped behind a messy deliverable does not land.\n\nThis covers the shot-sequence contact sheet, the labels on each frame, the light / mood turn reading clearly across the sequence, the paintover accents, the talk-through, and how cleanly the .blend is organized. The presentation is communication, not decoration. A stranger watching our frames in order should understand the beat, the tone, and why the camera is where it is.\n\n### 3. Design Innovation | 20 pts\n\n**Why it matters:** This is the cool factor. Did we bring something to the table that makes us stand out, even within the reference constraints? Directors want work that surprises, and they want to hire people who do that.\n\nWe are looking for smart choices that go beyond the brief without violating it. A camera angle that tells the beat more clearly than a head-on shot. A light / mood turn that carries emotional weight. A shot sequence that re-orders the expected beats into something that reads better. A detail in the paintover that says \"this was a real place\" without reading as clutter.\n\n### 4. Organization | 20 pts\n\n**Why it matters:** Quality of life. Someone else needs to be able to open our file and follow along. Clean names, sorted collections, a readable node graph. This is not busywork. It is how we keep our own sanity.\n\nThe file auditor runs before delivery. If the auditor flags issues, those are fixable, and fixing them before we deliver is part of the grade. Cut shots shown as *killed*, not hidden, count toward this dimension.\n\n## Summary\n\n| Component | Points | Weight |\n|---|---|---|\n| Checkpoint C1 | 25 pts | 25% of project grade |\n| Checkpoint C2 | 25 pts | 25% of project grade |\n| Final Submission (100 pts, halved) | 50 pts max | 50% of project grade |\n| **Total Project C** | **100 pts** | **40% of term grade** |\n\nThe grade is not the render. The grade is the thinking we can defend, the decisions we can explain, and the evidence that we got there by working, not by luck. Everything else in this document is just the shape of that, aimed at our scene.\n\n## Self-assess before we hand it over\n\nAnswer these in our three-line reflection, honestly, before we hand the work over. The instructor reads them and tells us where the view matches and where it does not. That comparison is worth more than either one alone.\n\n- **What changed between our C1 shot list and our delivery, and why?** If the answer is \"we made it prettier,\" that is execution. If it is \"we cut the weak shot and re-ordered the rest and the beat moved,\" that is design.\n- **For each camera, what is the motivation, and does the 180-degree line hold across all of them?** If a camera is parked in a pretty spot for no reason, name it.\n- **Which of our shots is the weakest, and what specifically is weak about it?** Naming our own weak work, precisely, is the whole of decision quality.\n- **What is the light / mood turn, and can we defend it?** Name what changes from beat to beat, how it changes, why it is the right turn, and what we held so the scene still reads as one.\n- **What would we change with another week?** A student who says \"we are done\" has stopped looking. A student who names one specific next move is still thinking.\n\n---\n\n**One line to carry out of this rubric:** the grade is not the render. The grade is the thinking we can defend, the decisions we can explain, and the evidence that we got there by working, not by luck. And on C, the one line that does the most work: **motivated is the whole grade of this project.** A stranger watching our frames in order should understand the beat, the tone, and why the camera is where it is.",
    "guardrails": [
      {
        "tool": "Quick Sheet renderer",
        "does": "Builds the **shot-sequence contact sheet** in one render",
        "fallback": "Render each camera to PNG, number them, lay them into a labeled grid in a 2D app"
      },
      {
        "tool": "Variant / sequence composer",
        "does": "Sequence mode for arranging the shot sheet",
        "fallback": "Assemble the frames by hand in a 2D app"
      },
      {
        "tool": "File / scene auditor",
        "does": "Checks naming, orphan data, collection hygiene",
        "fallback": "Manually rename, purge orphans, confirm every collection has a purpose"
      },
      {
        "tool": "Add-on allow-list",
        "does": "Smart UV Project, BlenderKit, a studio light kit, optionally Node Tools",
        "fallback": "Reuse the props and materials from A and B; light with a three-point rig from lamps"
      },
      {
        "tool": "Paintover",
        "does": "Design accents over the blockout, in a 2D app",
        "fallback": "Any 2D app: **Photoshop, Procreate, Clip Studio** — the skill is the paintover, not the app"
      },
      {
        "tool": "Render",
        "does": "**EEVEE** for iteration; Cycles-class for hero passes",
        "fallback": "Bump EEVEE samples and GI, or run a longer Cycles-class pass"
      }
    ],
    "deliverables": [
      "A **previs blockout** of the scene, with our A environment and our B subject placed, at rough scale.",
      "Motivated cameras**, an establishing shot plus 2 to 3 beats, each chosen for the beat.",
      "180-degree continuity** maintained across all shots, the camera stays on one side of the action axis.",
      "Paintover accents** that add design intent over the blockout.",
      "A **light / mood turn across the sequence**, with lighting and mood changing deliberately from beat to beat to carry the emotional turn. We **name the turn**: what changes, how it changes, and why it is the right turn.",
      "A **shot-sequence contact sheet**, a sequence of still frames in story order, each labeled with type and purpose.",
      "A clean **.blend**, auditor-checked."
    ],
    "checkpoints": [
      {
        "id": "C1",
        "week": 10,
        "name": "Shot list / story-beats review",
        "body": "- **What to show:** our shot list, with the beats in order, the type and purpose of each, where each camera sits relative to the action axis, and the **emotional turn of the beat** (the mood at the start and where it goes).\n- **Pass question:** does the list **tell the beat in order**, with each shot motivated.\n- **Self-check:**\n  1. Read the shots in order. Where does the story *move*, and which shot is doing the moving?\n  2. Draw the action axis on a napkin. Which side is every camera on?\n  3. Which single shot, cut, would we lose nothing by removing? Cut it.\n  4. What is the emotional turn of the beat? Name it. That turn is the target our light plan will hit by C2."
      },
      {
        "id": "C2",
        "week": 12,
        "name": "Blockout + camera review",
        "body": "- **What to show:** the blocked scene with cameras placed, the 180-degree line holding, and the light / mood turn set.\n- **Pass question:** is the camera **motivated and continuous**.\n- **Self-check:**\n  1. For each camera, name its motivation — what in the scene justifies it being exactly there.\n  2. Where is the line, and did we stay on one side?\n  3. If the frames play in order, does the scene read as one continuous moment?\n  4. Can we **name the light / mood turn**, and does the contact sheet show it legibly?"
      },
      {
        "id": "Delivery C",
        "week": 14,
        "name": "Delivery C",
        "body": "The full contact sheet, the paintover accents, the clean .blend, and the talk-through. **Wk 13 is the grace week** — catch-up, polish, or absorbing an emergency. No hard gate. Nothing lands on a cliff.\n\nAt the final crit, the talk-through covers the story we told: what the beat was, why each camera, and what we cut. That talk-through *is* a graded deliverable, and it is where the design thinking shows.\n\n> **Aside (further reading):** *Setting the Scene: The Art & Evolution of Animation Layout* by Fraser MacLean, **Chapter 7, \"The Story Reel and Beyond.\"** The story reel to the virtual camera is the exact lineage of what previs is. Good context for why this project exists."
      }
    ],
    "source": {
      "brief": "lessons/semester-3/briefs/brief-c-scene-previs-blockout.md",
      "rubric": "lessons/semester-3/rubrics/rubric-c-scene.md"
    },
    "order": 3
  }
],
  reference: [
  {
    "id": "ref-navigation-and-shortcuts",
    "title": "Blender Navigation & Shortcuts",
    "section": "blender",
    "covers": "The \"I forgot the key\" cheat sheet: viewport, selection, transform, edit-mode, snapping, shading, file ops.",
    "for": [
      "Wk 1 setup",
      "and every week you forget a key"
    ],
    "body": "*The \"I forgot the key\" page. Find the category, grab the key, get back to the block. You will not memorize all of these, and you do not have to. You are not being tested, you are just trying to stop fighting the mouse.*\n\n**5.x note up front:** these are the standard Blender keys and they are stable into 5.x. The one real change to know is that the **primary rotate is middle-drag** (or the rotate mouse button, if you set one), because right-click is your context-menu / confirm button, not the orbit key unless you rebind it. Everything else here is the long-running set. If a key feels wrong, it is a preferences thing, not a broken thing, and it is one click away in the input settings.\n\n## Viewport navigation\n\n| Key / action | What it does | When you want it |\n|---|---|---|\n| **Middle-drag** | Orbit (rotate) the view around the pivot | Walk around the blockout to check it from the side and the back |\n| **Wheel** | Zoom in / out | Pull closer to a detail, or back out to see the whole room |\n| **Shift + middle-drag** | Pan the view left/right/up/down | Slide the whole frame to reframe without changing the angle |\n| **Ctrl + middle-drag** | Zoom (move the view straight in and out) | Step in or out without the orbit tilt |\n| **Numpad 7 / 1 / 3** | Top / front / right view (orthographic) | Line up shapes on a flat axis, the modeling workhorse |\n| **Ctrl + Numpad 7 / 1 / 3** | Bottom / back / left view | Check the back and the underside, the parts that always surprise you |\n| **Numpad / (Slash)** | Local view (isolate what is selected) | Focus on one prop or one part of the set without the rest in the way |\n| **Numpad 0** | Camera view (enter the active camera) | See the frame exactly as the camera will render it |\n| **N panel, View tab** | Align View, Pivot Point, Camera Bounds | Snap the view to a selected face, or fit the frame to the selection |\n\n**Orbit tip:** orbit is centered on the **pivot**, not the screen center. If the view is spinning around the wrong point, set the pivot to *Selected* or *Median Point* in the N panel before you drag. That one setting fixes most \"why is it spinning weird\" moments.\n\n## Selection\n\n| Key | What it does | When you want it |\n|---|---|---|\n| **Left-click** | Select a single object (or element in edit mode) | The default, pick the one thing you are about to change |\n| **Shift + left-click** | Toggle an object's selection (add or remove) | Build a multi-selection one object at a time |\n| **Left-drag (box select)** | Select everything the box touches | Grab a whole cluster of props or a face region in one motion |\n| **A** | Select all in the active collection | Before a scene-wide operation |\n| **Alt + A** | Deselect all | The fast reset before you pick the right thing |\n| **Select > Select Linked** (or **Ctrl + left-click**) | Select everything linked to the selection (same mesh/material data) | Find all the objects that share one material or one mesh, so a change hits them all |\n| **Select > Select by Type** | Select every object of a type (mesh, light, camera, empty) | Gather all the lights, or all the cameras, at once |\n\n## Transform (object mode)\n\n| Key | What it does |\n|---|---|\n| **G** | Move (grab) |\n| **R** | Rotate |\n| **S** | Scale |\n| **Enter** | Confirm the transform |\n| **Esc** | Cancel and snap back to where it was |\n| **Type a number after a key** | Set a precise value, then Enter. So **G Z 2 Enter** moves the object 2 units up |\n| **X / Y / Z after the key** | Lock to one axis. **G X** moves only along X |\n| **0 after the key** | Lock to the view axis (screen-aligned). **S 0** scales flat to the camera |\n\n**The precise-value trick is the one worth keeping:** the moment you want exact numbers instead of eye-balling, type the number right after the key. It is how you get a figure to exactly 1.75 m without nudging for ten minutes. And **Esc** is your safety net, because a cancelled transform is a transform that never happened.\n\n## Edit-mode modeling\n\nThese apply while you are in **Edit Mode** (toggle with **Tab**). See the [Modeling page](ref-modeling.md) for when to use each.\n\n| Key | What it does |\n|---|---|\n| **Tab** | Toggle Object / Edit Mode |\n| **1 / 2 / 3** | Switch to vertex / edge / face select |\n| **E** | Extrude (pull a new face or edge out) |\n| **I** | Inset (shrink a face inward, making a rim) |\n| **Ctrl + R** | Loop cut (add an edge loop across a region) |\n| **K** | Knife (draw a cut across faces by hand) |\n| **X** | Delete menu (vertex/edge/face) |\n| **F** | Fill (create a face from selected edges or verts) |\n| **J** | Connect Path (bridge the selected edge/vert chain) |\n| **M** | Merge (join selected verts into one point) |\n| **W** | Context menu (specials: bevel, subdivide, poke, etc.) |\n| **Ctrl + B** | Bevel the selected edges or verts |\n\n## Snapping + proportional editing\n\n| Key / control | What it does | When you want it |\n|---|---|---|\n| **Snapping toolbar (magnet icon)** | Snap move/rotate/scale to grid, verts, faces, or a target | Seat a prop exactly onto a surface, or align two faces flush |\n| **O** | Toggle proportional editing (nearby verts follow the one you move) | Soften a shape instead of moving a single hard vertex |\n| **Scroll wheel (with O on)** | Change the proportional falloff radius | Make the soft influence smaller or larger |\n\nProportional editing is the difference between a hard block and a rounded one. Turn it on, move a few central verts, and the surrounding shape follows with a soft falloff. It is the cheapest way to stop a box from looking like a box.\n\n## Object and collection operations\n\n| Key | What it does |\n|---|---|\n| **Ctrl + D** | Duplicate (full copy, its own data) |\n| **Ctrl + Shift + D** | Linked duplicate (new object sharing the same mesh data) |\n| **Ctrl + J** | Join selected objects into one |\n| **Shift + A** | Add menu (mesh, light, camera, empty, and more) |\n| **M** | Move to collection |\n| **Shift + P** | Parent menu (object, empty, to selection) |\n| **Alt + P** | Clear parent (with or without keeping the transform) |\n\n**Full vs linked duplicate is the one that saves files:** a full copy is a brand-new mesh you can edit independently. A linked duplicate is a new object that shares the same mesh data, so editing the data in one updates all of them. For a row of identical columns or a set of repeated props, the linked duplicate is the move, because it stays one piece of data to keep clean. See [File hygiene](ref-file-hygiene-and-tools.md) for why that matters to the audit.\n\n## Render and viewport shading\n\n| Key | What it does |\n|---|---|\n| **Z** | Shading menu — pick Solid / Wireframe / Material Preview / Rendered |\n| **Shift + Z** | Toggle Wireframe on / off |\n| **Alt + Z** | Toggle X-Ray |\n| **F11** | Quick render preview (current frame, temporary window) |\n| **F12** | Render the current frame to the Image Editor, the real render |\n| **Ctrl + F12** | Render the whole animation (every frame) |\n| **K** (in edit mode) | Knife cut, not a render key. Do not confuse the two, it is the most common mix-up on this page |\n\nThe shading modes are a speed dial, and they all live in the **Z** menu, not on number keys. **Solid** is for blocking and massing, it is cheap and fast. **Material Preview** is for checking a material without a full render. **Rendered** is for seeing the real thing, and it is the one that costs time. Start cheap, finish honest, and only spend the rendered view on the frames you are keeping.\n\n## Common file operations\n\n| Key | What it does |\n|---|---|\n| **Ctrl + O** | Open a .blend file |\n| **Ctrl + S** | Save |\n| **Ctrl + Shift + S** | Save As (new name or new location) |\n| **File > External Data > Pack Resources** | Bundle images and external files into the .blend (no default key) |\n| **File > External Data > Unpack Resources** | Unpack back to external files (no default key) |\n\n**Packing is the delivery habit:** before you hand a file to anyone, **File > External Data > Pack Resources** pulls the loose images and textures into the .blend so it travels as one file instead of one file plus a folder that might not come with it. See the [File hygiene page](ref-file-hygiene-and-tools.md) for the full pre-delivery pass.\n\n> **Aside (further reading):** *The Complete Guide to Blender Graphics: Computer Modeling & Animation, Volume 1* by Blain J., **Chapter 3, \"Navigate and Save,\"** covers the viewport navigation and the save workflow in depth. It is an older edition, so a few panel positions will have drifted in 5.x, but the keys are the stable set. Use it for the reasoning, and trust this page for the current keys.\n\n*If a key has gone out of your head, this is the page. If it has moved, it is a 5.x thing. Ask.*",
    "source": "lessons/semester-3/reference/ref-navigation-and-shortcuts.md",
    "order": 1
  },
  {
    "id": "ref-modeling",
    "title": "Modeling",
    "section": "blender",
    "covers": "Primitives, box modeling, hard-surface (the prop and vehicle path), edit-mode, modifiers, non-destructive workflow, collections, scale recap, funpack notes.",
    "for": [
      "A (Wk 2 blockout)",
      "B (Wk 5 to 7 subject)"
    ],
    "body": "*How to turn a box into a thing, and how to keep the thing editable while you do it. This page is the working vocabulary for Project A's blockout and Project B's subject. The goal is never a perfect model, it is a model that reads and still lets you change your mind.*\n\n## Primitives (the starting blocks)\n\nAdd them with **Shift + A > Mesh**. They are the raw material for almost everything, and a good blockout is usually a handful of these placed and scaled, not a sculpted masterpiece.\n\n| Primitive | Use it for |\n|---|---|\n| Cube | Walls, floors, plinths, props, the base of almost any box-modeling job |\n| Plane | Floors, flat panels, a sky card |\n| Cylinder | Columns, lamps, vessels, legs, the round stuff |\n| Cone / UV sphere | Roofs, domes, heads, the round and the pointed |\n| Torus | Rings, rims, handles |\n\n**Start big, cut small.** The habit that separates a blockout from a mess is to place the large masses first (walls, floor, the big volumes), then the medium, then the one small thing. You are building a place in sizes, not decorating a shape. That is the same move as the [scale and massing lesson](../lessons/wk-02-a-blockout-scale-hierarchy.md), just done with primitives.\n\n## Box modeling: the blockout-to-refine workflow\n\nBox modeling is the discipline of starting from a cube and shaping it into an object through a small set of repeatable moves. It is the fastest way to get a believable mass without getting lost in detail, and it is exactly the right tool for a blockout, where the point is the *shape and the size*, not the surface.\n\nThe loop, in order:\n\n1. **Place the cube** at the right scale and the right spot. If the base size is wrong, nothing after it fixes it, so size it first.\n2. **Extrude** the faces you need to grow. Extrude is the engine of box modeling. It is how a cube becomes a table, a column becomes a pillar with a capital, a block becomes a room with a doorway.\n3. **Inset** the faces that need a rim or a recessed panel. Inset is the fast way to add thickness and detail without modeling it by hand.\n4. **Loop cut** to add edge loops where the shape needs to bend or bevel. You add loops before you shape, because you cannot bend a face that has no edges to bend along.\n5. **Bevel** the hard edges to catch light and stop the shape reading as a cardboard box. A small bevel does most of the \"this looks 3D\" work.\n6. **Refine** only where the eye will land. Detail on the focal point, suggestion everywhere else.\n\nThe rule that keeps it fast: **the shape is decided at the block stage, the surface is decided at the refine stage.** Do not bevel and detail a shape you are about to throw away. Get the mass right first, and the detail is a small job, not a big one.\n\n## Hard-surface modeling (the prop and vehicle path)\n\nA hard-surface subject is the prop, the vehicle, the machine, the piece of architecture that plays a prop. It is built from **flat surfaces and sharp, beveled edges** and from **separated loose parts**, not from the continuous rounded loops an organic subject is made of. The bevel is the whole read. A hard edge that catches a thin line of light is what tells the eye this is a machined thing, and without it a hard-surface model reads as a cardboard box, which is the same failure the box-modeling bevel step is trying to avoid.\n\nThe four-step workflow, in order:\n\n1. **Gather references.** Orthographic and multi-view first, a front, a side, and a 3/4, not a single angle. A blockout from one photo is a guess about the other angles.\n2. **Separate the parts.** A gun is a receiver, a stock, a barrel, and a magazine. A vehicle is a hull, a cabin, and a set of wheels. Each is its own object, or clearly separated, and you do not weld them into one blob.\n3. **Block out the masses** at the right scale. This is the [start big, cut small](#box-modeling-the-blockout-to-refine-workflow) rule applied to a subject, the parent part first, then the parts that attach to it.\n4. **Increase detail last.** Bevels, panel lines, bolts, screws, and vents, and only where the eye will land. Most of the modeling time lands here, and it is the step that should not have started until the mass is right.\n\nThe hard-surface jobs have their own reach-for list. These build on the [modifier table](#modifiers) a few sections down, where the detail lives, so the names here are the point and the settings are there:\n\n| Hard-surface job | Tool | When to reach for it |\n|---|---|---|\n| Cut a doorway, a hole, a panel line | **Boolean** | When one shape should cut another, a port in the receiver, a gap between the rails |\n| Give a flat panel a real thickness | **Solidify** | Armor plating, a cover, a shell that needs to be more than a flat face |\n| Repeat bolts, fins, vents, a row of windows | **Array** | Anything that repeats along a line, and that should stay editable |\n| Get the clean beveled edge that defines the read | **Subdivision Surface** (with a bevel) | Soften a hard shape into a rounded form, protected by a bevel and a loop cut so it does not go blobby |\n| Center and rotate parts precisely | **3D Cursor** | Snapping an origin, rotating about a point, the precision anchor for assembly |\n\n**Loose parts stay loose.** The defining habit of hard-surface modeling is that parts are separate objects you assemble, not one merged mesh. That keeps each part editable on its own, and it matches the [collections](#collections) and linked-duplicate habits already on this page, a set collection of separate, named parts rather than one flat merged blob.\n\nThis is the **Project B** path for a prop or vehicle subject (and the props in A), and it is exactly why the funpack and turnaround requirement holds, the parts and the silhouette have to read from every angle, so the separation and the bevels are not decoration, they are the design.\n\nThe rule that keeps it honest is the same one as the box-modeling loop: **the shape is decided at the block stage, the surface at the refine stage.** Separate the parts, get the masses right, and the bevels and the bolts become a small job, not a rebuild.\n\n## Edit-mode essentials\n\nEdit Mode (toggle with **Tab**) is where the shape work happens. Three element levels, switch with **1 / 2 / 3**:\n\n- **Faces** (**3**) for extruding, insetting, and filling.\n- **Edges** (**2**) for loop cuts, bevels, and the edge-flow work.\n- **Verts** (**1**) for precise placement and merging.\n\nThe core tools, with the key for each, live on the [Navigation & Shortcuts page](ref-navigation-and-shortcuts.md#edit-mode-modeling): extrude (**E**), inset (**I**), loop cut (**Ctrl + R**), knife (**K**), delete (**X**), fill (**F**), merge (**M**), bevel (**Ctrl + B**). The modeling decision is *which one to use and when*, and that is the part this page is for.\n\n**When to use which:** extrude grows the shape. Inset adds a rim. Loop cut adds the edges a shape needs to bend along, and you add them *before* you bend. Bevel softens an existing edge. The order matters, because a bevel on a face that has not been loop-cut yet is a bevel you will regret.\n\n## Modifiers\n\nA modifier is a live, non-destructive operation stacked on an object. It changes how the object *shows* without changing the base mesh, which means you can edit the base mesh and the modifier follows. That is the whole point, and it is why a good workflow keeps modifiers alive as long as it can.\n\n| Modifier | What it does | Typical use |\n|---|---|---|\n| **Bevel** | Rounds or flattens edges | Turn a hard box into a believable prop |\n| **Array** | Repeats an object along an axis | A row of columns, a rack of shelves, a line of windows |\n| **Mirror** | Mirrors geometry across an axis | Model half a symmetrical subject and get the other half for free |\n| **Subdivision Surface** | Smooths the mesh into rounded curves | Soften a hard shape into a rounded form, the character-softening move |\n| **Boolean** | Cuts one object's shape out of another | A doorway in a wall, a hole in a panel |\n\n**A 5.0 note on the Array.** In 5.0 there are two entries in the Add Modifier menu that both do repetition. **Array** is the rebuilt one, and it repeats by **Shape**, a line, a circle, a curve, or a transform, with an offset of **Relative**, **Offset**, or **Endpoint**. **Array (Legacy)** is the old behavior, a fixed count or a fit-to-length with a relative or constant offset, and it is the one the older books describe. For the term, a row of columns or a rack of shelves is the classic **Array (Legacy)** job, and you will usually reach for that one. If you see both in the menu and cannot tell them apart, that is a 5.0 thing, and the difference is the Shape menu at the top of the modifier.\n\n**Apply vs keep is the decision that matters.** A modifier is *live* while it sits in the stack, and you can change its settings or delete it at any time. *Applying* it (right-click the modifier > Apply, or the Object menu) bakes it into the base mesh and makes it permanent. (Do not confuse this with **Ctrl + A**, which applies *transforms*, not modifiers.) The rule of thumb:\n\n- **Keep it live** while you are still deciding. You want to be able to change the bevel width or the array count, so leave it a modifier.\n- **Apply it when you are done** and the shape is set, or when a later step needs the real geometry (like UV unwrapping). Applying a bevel before you unwrap is the move that makes the unwrap behave.\n\nApplying too early costs you the ability to change your mind. Keeping it live too long costs you nothing but a little render time, and a file that is slightly harder to audit. When in doubt, keep it live until the design is set, then apply.\n\n## Non-destructive workflow\n\nTwo habits keep a model editable and a file clean:\n\n- **Modifiers stay live** until the shape is decided (see above). The base mesh is always there, underneath the stack, ready to be reshaped.\n- **Linked duplicates instead of full copies** for repeated geometry. A linked duplicate (**Ctrl + Shift + D**) is a new object that shares the same mesh data, so editing the data in one updates every linked object, and the file holds one piece of data instead of ten. For a row of identical columns or a set of repeated props, this is the move. A full duplicate (**Ctrl + D**) is for when you genuinely want an independent copy you will change on its own.\n\nThe test is simple: if you change the shape of one, do you want the rest to change too? Yes, linked. No, full. It is the same question the [file hygiene page](ref-file-hygiene-and-tools.md) asks about orphan data, just earlier.\n\n## Collections\n\nA collection is a folder of objects in the Outliner. They organize the scene, and they control what renders, what is selectable, and what the eye has to look through.\n\n- **Create a collection** by right-clicking the Outliner, or by adding one from the collection menu. Give it a name that says what it is: `10_set`, `20_light`, `30_cam`, `40_props`.\n- **Move objects in and out** with **M** (move to collection), or by dragging. A prop that does not belong in the set collection belongs in the props collection, and the moment it does, the scene is easier to read.\n- **Toggle visibility** with the eye icon, and **isolate** with the solo icon, to check one group without the rest in the way.\n\nThe [Starter Scene](ref-file-hygiene-and-tools.md) already gives you a clean collection set. If you are not using it, build the same structure by hand, because a scene with one flat list of forty objects is a scene you will never find your way around in.\n\n## Proportional editing\n\n**O** toggles proportional editing, where moving a vertex drags its neighbors with a soft falloff. It is the difference between a hard-edged block and a rounded form, and it is the cheapest way to stop a subject from looking like a stack of boxes. Turn it on, move a few central verts, and scroll the wheel to size the influence. Use it to *soften*, not to *reshape*, because the reshape belongs to the extrude and the loop cut, and the soften belongs here. For a character subject in Project B, this is how a block stops being a mannequin and starts being a figure.\n\n## Scale, proportion, and hierarchy (recap)\n\nThis is the Project A, Week 2 move, restated because the modeling page is where it lives in practice:\n\n- **Scale is a comparison, not a measurement.** A figure is the anchor, and the room is sized against it. Get the figure to about 1.7 to 1.8 m and let the space react.\n- **Proportion is where a thing stops being geometry and starts being a place (or a subject).** The large, medium, and small masses give it a body, and the mix is what makes it read.\n- **Hierarchy is the eye path.** One focal point, the strongest value or the clearest shape, and a line that walks the eye there.\n\nYou model the masses first, and the modeling is in service of the scale and the hierarchy, not the other way around. The box modeling is the *how*, and the scale and the point are the *why*.\n\n## Funpack and turnaround notes (Project B)\n\nA funpack is a subject shown from front, side, back, and usually 3/4, so a production artist could rebuild it from the sheet alone. The modeling notes specific to that:\n\n- **Model the whole subject, including the back.** The back view is part of the design, not an afterthought, and if it is a mystery, the design is not finished.\n- **Keep the proportions consistent from every angle.** A subject that is the right size from the front but the wrong size from the side is not built, it is guessed.\n- **Check the silhouette before the surface.** Flatten the subject to solid black and ask what you see. If the silhouette does not read, no material fixes it, and that is the B1 test.\n- **Edge flow matters for a clean turnaround.** Clean, readable loops keep the subject from turning into a soup when it is smoothed or deformed. Topology is a *quality* bar here, not a gate, the design reads first, but clean loops make the difference between a sheet and a mess.\n\n> **Aside (further reading, figure):** *Figure Drawing: Design and Invention* by Michael Hampton, **Chapter 1, \"Gesture Drawing.\"** The reason a figure reads as a figure and not a statue is the gesture, the single line of the pose, and the \"about to...\" weight of it. Even in 3D, a subject with a strong gesture reads better than one built from clean but lifeless forms. This is the chapter to keep open when your character subject starts looking like a mannequin.\n\n> **Aside (further reading, box modeling):** *The Complete Guide to Blender Graphics: Computer Modeling & Animation, Volume 1* by Blain J., **Chapters 5 (\"Editing Objects\") and 7 (\"Editing with Modifiers\").** These two chapters are the box-modeling and modifier vocabulary in full, extrude, inset, loop cut, bevel, and the modifier stack. It is an older edition, so the panel layout will have drifted in 5.x, but the moves are stable. Use it for the reasoning, and trust the shortcuts page for the current keys.\n\n> **Aside (further reading, hard-surface modeling):** *Blender 3D Incredible Models: A Comprehensive Guide to Hard-Surface Modeling, Procedural Texturing, and Rendering* by Arijan Belec, **Chapter 1 (\"Introducing Hard Surface Modeling\") and Chapter 3 (\"Adding More Details with Polygon Modeling and Modifiers\")** (and, for a from-scratch hard-surface build, Chapter 5, \"Modeling a Sci-Fi Race Ship\"). Chapter 1 is the vocabulary of the read, hard-surface versus organic, the flat surfaces, the sharp beveled edges, the short broken loops, and the loose parts, plus the four-step workflow the section above is built on. Chapter 3 is the detailing move, the 3D Cursor as the precision anchor and the Boolean, Subdivision Surface, Solidify, and Array modifiers doing the hard-surface jobs. The book targets **Blender 2.93/3.0 (2022)** and is **Cycles-centric**, so use it for the reasoning, not as a click-by-click map, the panel layout will have drifted in 5.x.\n\n*If the shape is wrong, that is a block-stage problem, not a surface one. Fix the mass, and the detail becomes a small job. If a panel has moved, that is a 5.x thing. Ask.*",
    "source": "lessons/semester-3/reference/ref-modeling.md",
    "order": 2
  },
  {
    "id": "ref-lighting",
    "title": "Lighting & mood",
    "section": "blender",
    "covers": "Light types, three-point, AO, cast shadows, highlights, rim, HDRI, color temperature, day/night, and the light/mood turn across a sequence.",
    "for": [
      "A2 (Wk 3)",
      "B heroes (Wk 7)",
      "C light-turn (Wk 12)"
    ],
    "body": "*How light makes a shape read, and how the choice of light is a decision you can defend. This page is the vocabulary for the Week 3 \"make it read\" move, the Week 7 hero pair, and the Week 12 light-turn across a sequence. Light is the first of the three systems (light, material, palette) that have to agree, and it does the most of the work.*\n\n## Light types\n\nAdd a light with **Shift + A > Light**. Each type behaves differently, and the choice of type is a decision, not a default.\n\n| Type | How it behaves | When you want it |\n|---|---|---|\n| **Point** | Emits in all directions from a single dot, with falloff | Bulbs, lanterns, candles, a practical light in a scene |\n| **Area** | Emits from a flat rectangular plane, soft by nature | The default key and fill, because it reads like a softbox and gives soft, controllable shadows |\n| **Sun** | Parallel rays from one direction, no falloff, an infinite source | Daylight, the outdoor key, a hard directional light with crisp shadows |\n| **Spot** | Emits a cone from a single point, with a hard or soft edge | A focused beam, a work light, a stage spot, a lamp aimed at one thing |\n\nThe one to reach for most of the time is the **area** light. It is soft enough to read as a real source, controllable enough to shape, and it is what a three-point rig is built from. The **sun** is for outdoors. The **point** and the **spot** are for practicals, the lights you can see in the frame.\n\n## Light settings (the dials, in 5.0)\n\nEvery light has a small set of dials in the **Light** tab of the Properties editor, and the names are the thing a student on 5.0 actually sees, so here they are straight:\n\n| Dial | What it does | The read |\n|---|---|---|\n| **Power** | The light's energy, in watts. The **sun** uses **Strength** instead, in watts per square metre | The main brightness dial for a point, an area, and a spot. Bigger number, brighter light |\n| **Radius** | The physical size of the source | The softness dial. A bigger source gives softer shadows and a broader, dimmer highlight, the cast-shadow control in the section below |\n| **Color / Temperature** | The tint, either a color or a blackbody temperature in kelvins | The mood dial. A warm temperature is the day move, a cool one is the night move, the whole color-temperature section |\n| **Angle** (spot) | The width of the spot's cone, in degrees | How tight or how wide the beam is. The spot's hard outer edge |\n| **Blend** (spot) | How soft the edge of the cone is | The soft edge on a spot. The older editions had a **Spread** control for this, and that word is gone in 5.0 |\n| **Shape / Size** (area) | The shape of an area light, a square, a rectangle, a disk, or an ellipse, and its size | The softbox shape. A long, thin area light reads as a window or a strip light, a square one as a softbox |\n\nThe read is the same as the [cast-shadow section](#cast-shadows-hard-vs-soft) below: the light's **size** (its **Radius**, or an area light's **Size**) is what makes a shadow soft or hard, and its **Power** or **Strength** is what makes it bright. Get those two right and the light is doing its job, and the rest of the dials are fine-tuning.\n\n## Three-point lighting\n\nThree lights, three jobs. This is the rig the [Starter Scene](ref-file-hygiene-and-tools.md) hands you, and it is the fastest way to make a subject or a set read as three-dimensional.\n\n| Light | Job | Where it sits |\n|---|---|---|\n| **Key** | The main light, the one that defines the form and the primary shadow | 45 degrees off-axis, a little above the subject, the brightest of the three |\n| **Fill** | Softens the key's shadows, lifts the darks, reduces contrast | Opposite the key, lower intensity, no shadow of its own usually |\n| **Rim (back)** | Separates the subject from the background with a bright edge | Behind and above, aimed at the back of the subject, so the silhouette reads |\n\nStart with the key, and let it do the work. Add the fill only to the degree the shadows are too deep. Add the rim when the subject is melting into the background. The balance between the three is the contrast, and the contrast is the mood. High key is a bright, low-contrast read, low key is a dark, high-contrast one, and both are decisions, not accidents.\n\n## Ambient occlusion (AO)\n\nAmbient occlusion is the soft darkening that happens where shapes meet, in the corners, the crevices, the places where the sky cannot reach. It is not a light, it is a *shadow that is always there*, and it is what makes a corner feel like a corner and a junction feel like two things touching.\n\n- It is on by default in **Material Preview** and in the render, and it is one of the cheapest ways to add depth.\n- Too much AO reads as grime, too little reads as flat. The amount is a dial, not a toggle.\n- It does the \"this is a real place\" work in a blockout, because even a clay render with AO reads as a space with depth.\n\n## Cast shadows: hard vs soft\n\nA cast shadow is where a form blocks a light, and its edge is either **hard** or **soft**. The two controls that decide it are the **size of the light** and the **distance from the subject**.\n\n- **A small light, or a light far away, gives a hard shadow** with a crisp edge. A sun is essentially a tiny light infinitely far away, so its shadows are hard.\n- **A large light, or a light close to the subject, gives a soft shadow** with a feathered edge. A large area light up close is a softbox, and its shadows melt.\n\nHard shadows read as bright, direct, and confident (midday sun). Soft shadows read as overcast, indoor, or gentle (cloud cover, a big window). The shadow edge is doing as much of the mood as the color, and it is the first thing to check when a light \"looks wrong\" and you cannot say why.\n\n## Highlights\n\nA highlight is where a surface catches a light and reads as bright, and it is the part of the render that tells you what the surface is *made of*. A highlight's shape and size are governed by the material's **roughness** and the light's size, and that is the whole of the [materials page](ref-materials-texturing.md) meet the lighting page.\n\n- **A smooth, low-roughness surface gives a tight, bright highlight.** It reads as clean, new, or wet.\n- **A rough, high-roughness surface gives a broad, dim highlight.** It reads as used, matte, or worn.\n- **A hard light gives a small, sharp highlight. A soft light gives a broad, gentle one.**\n\nThe highlight is the evidence that the material is real. If you are checking whether a surface reads as the thing it is supposed to be, look at the highlight first, because the highlight is where the material answers the light.\n\n## Rim / back light\n\nThe rim light is the bright edge that separates a form from the background, and it is the cheapest way to say *this is a solid thing, not a card*. It is the **rim** in the three-point rig, and it is the single most useful light for a subject that is melting into its set.\n\n- Place it behind and above, aimed at the back of the subject, so the edge glows and the silhouette reads.\n- It does not need to be bright. A low-intensity rim that just *separates* is often better than a bright one that blows out the edge.\n- In a night scene, a rim is often the only light that makes the subject legible at all, and that is a lot of the reason a night hero works.\n\n## HDRI (the world)\n\nThe **world** is the environment around the scene, and an **HDRI** is a 360-degree photograph used as that environment. It provides the ambient light and the reflections, and it is the fastest way to give a scene a believable light direction and a believable color cast.\n\n- Set the HDRI in the **World** settings (the globe icon). It becomes both the background and the light source.\n- **Strength** controls how much light the HDRI contributes. Turn it up or down to make it the key or the fill.\n- **Mapping** lets you rotate the HDRI so the sun is where you want it, without re-picking a file.\n- You can hide the HDRI from the camera (so it lights the scene but does not show as the background) while keeping it as the light, which is the move for a scene that has its own sky or its own set behind the subject.\n\nAn HDRI is a *starting light*, not a finished one. It gives you the direction and the ambient, and you then add the key and the rim on top of it to shape the subject. A scene lit only by an HDRI reads as generic, because the HDRI is a photograph of somewhere else, and your subject needs a light that is *about* it.\n\n## Color temperature\n\nColor temperature is how warm or how cool a light reads, measured in kelvins, and it is the single biggest mood lever in a scene. The scale runs from warm (low numbers, orange) to cool (high numbers, blue).\n\n- **Warm light** (lower kelvins) reads as day, golden hour, firelight, or a lamp. It is intimate and grounded.\n- **Cool light** (higher kelvins) reads as night, shade, overcast, or a cold interior. It is quiet and distant.\n- A **warm key against a cool fill** (or the reverse) is the classic two-temperature setup, and the contrast between the two is what makes a scene feel designed instead of flat.\n\nThe temperature is doing most of the *when* work in a scene. A warm key says *day or golden hour*, a cool key says *night or shade*, and the difference between a sequence that reads as one moment and one that reads as several is very often just the temperature holding or breaking. That is the whole of the Week 12 move, and it is a light decision, not a render decision.\n\n## Light mood\n\nA light mood is the whole system together: the light direction, the temperature, the hard-or-soft shadows, the contrast, and the palette it sits on. It is the *feel* of the scene, and it is what makes a set read as a place at a particular moment.\n\n- A mood is a **decision about the whole**, not a setting. A warm, soft, low-contrast read and a cool, hard, high-contrast read are two moods, and the difference is the light, the material response, and the palette moving together.\n- The test for a mood is the one from Week 3: is this a *direction*, or a parameter? A parameter is one knob nudged. A direction is the whole system moved.\n- Name the mood before you build it. If you cannot say what the moment is, the mood is not real yet, and that is the finding, not the failure.\n\n## Day and night (Project B, Week 7)\n\nThe two hero renders in Project B, a day pass and a night pass, are the same subject under two moods, and the test is that they are two *genuine* directions, not the same render with the exposure nudged.\n\n- **Day:** a sun or a bright sky as the key, a cool fill from the sky, a rim that separates the subject, and a warm or neutral temperature. The subject is lit by the world around it.\n- **Night:** a single motivated key (a lamp, a moon, a practical), a cool or dark fill, and a rim that is often the only thing making the subject legible. The subject is lit by one thing, and the darkness is part of the design.\n- The material responds differently to each. A surface that reads as used and matte in the day reads as dark and hard-edged at night, and the highlight that told you the material was real in the day is the thing that survives the night. That is why the day-and-night pair is the proof that the subject *lives in light*, not just in one light.\n\n## Designing a light / mood turn across a sequence (Project C, Week 12)\n\nIn Project C the light does not just describe a scene, it *carries a story turn*. The idea is that the light and the mood deliberately change, beat to beat, so the audience feels the scene move, the moment shift, the story turn. The line gives the sequence its direction, and the mood turn gives it its *when*, and together they make the frames read as one continuous moment instead of a set of stills.\n\n- **Name the turn before you light it.** What changes from beat one to beat two? The temperature shifts from warm to cool. The contrast deepens. The light source changes from a wide sky to a single lamp. Say it in one line, because a turn you can name is a turn you can build.\n- **Change the whole system, not one knob.** A mood turn is light plus temperature plus palette moving together, the same rule as the Week 3 direction, applied across the sequence instead of across studies. If you only move the exposure, you have made a parameter, not a turn.\n- **Hold what should hold.** The turn is deliberate, which means part of the design is deciding what *does not* change. The key direction might hold while the temperature turns. The point of reference holds while the mood shifts. The audience follows the turn because there is something constant to follow it against.\n- **Check it on the contact sheet.** The contact sheet is where a mood turn either reads or breaks. Laid out in order, the frames should feel like one scene moving through a change, and if one frame reads as a different day, that frame is the odd one out, and that is the finding the Week 12 checkpoint is for.\n\n> **Aside (further reading):** *How to Render: The Fundamentals of Light and Shadow and Reflectivity* by Scott Robertson and Thomas Bertling, **Chapter 2, \"Light Types and Casting Shadows.\"** This is the chapter that defines the vocabulary this whole page is built on, value change, hard and soft light, decay, occlusion, rim and half-light, multiple lights, and the cast-shadow construction. The hard-or-soft and the rim and the occlusion are the same words your light rig is speaking in Blender. A strong read of this chapter before Week 3 pays off all three projects, and the cast-shadow section is the one to have open when a shadow edge is not doing what you want.\n\n*If the light looks wrong and you cannot say why, check the shadow edge first, because that is where the light is lying. If a panel has moved, that is a 5.x thing. Ask, and we'll find the mood together.*",
    "source": "lessons/semester-3/reference/ref-lighting.md",
    "order": 3
  },
  {
    "id": "ref-materials-texturing",
    "title": "Materials & texturing",
    "section": "blender",
    "covers": "Principled BSDF, value as the read, image vs procedural textures, edge wear / damage / normal maps, palette, and how materials respond to light.",
    "for": [
      "A2 (Wk 3)",
      "B materials + heroes (Wk 7)"
    ],
    "body": "*How a surface answers the light, and how the choice of surface is a decision you can defend. A material is the answer to *what is this made of, and why should I trust it*. This page is the vocabulary for the Week 3 \"make it read\" move and the Week 7 material directions and hero pair. The material is the second of the three systems (light, material, palette) that have to agree, and it does the \"this is real\" work.*\n\n## The Principled BSDF\n\nThe **Principled BSDF** is the standard material node in Blender, the one that comes pre-wired when you create a material, and the one you will use for almost everything this term. It is a single node with a set of inputs, and most of the work of a believable material is setting a handful of those inputs on purpose.\n\nThe inputs that do most of the work:\n\n| Input | What it controls | The read |\n|---|---|---|\n| **Base Color** | The surface's color in flat, even light | What the thing *is* in color, before the light gets involved |\n| **Roughness** | How much the surface scatters light instead of reflecting it cleanly | The single biggest read. Rough reads soft and used, smooth reads clean and new |\n| **Metallic** | Whether the surface reflects like a metal or like a dielectric (non-metal) | Metal reflects color, non-metal reflects white. Getting this wrong is the most common material error |\n| **IOR** | Index of refraction: how the reflection is shaped, and how glass and transmission bend light | The highlight's sharpness and the \"wetness\" of the surface. For glass, the bend. Default 1.5 |\n\n**The 5.0 layout (OpenPBR).** In 5.0 the node is built on the **OpenPBR** model, so the sockets you see are the top-level dials above, plus **Alpha** (transparency) and **Normal**. Everything else, subsurface, specular strength, coat, sheen, transmission, and emission, sits in **collapsed layer groups** under the node. You will rarely open them this term, and when you do, the two that matter are the **Emission** group (a color and a strength, for a glowing surface) and the **Specular** group, if a reflection reads too weak or too strong. The flat socket list from the 2.9x books, with a bare \"Specular\" slider on top, is gone, and that is the main thing that looks different in 5.0.\n\n**Roughness does most of the work.** A rough surface diffuses the light and reads soft and worn. A smooth surface catches it and reads clean and new. The same lamp in tarnished, rough brass reads as *lived-in*, and the same lamp in clean, smooth plastic reads as *just made*. One of them serves your beat and one does not, and that difference is a material *direction*, not a default. When a material looks off and you cannot say why, the roughness is the first dial to check.\n\n## Value: the core read\n\nBefore color, before texture, the first thing a material says is its **value**, how light or how dark it is. Value is the read your eye takes in at a glance, and it is the bridge between the material and the [1-2-3 read](../lessons/wk-03-a-lighting-materials.md) the composition depends on.\n\n- **A dark material reads as mass and weight.** It anchors a scene and reads as solid.\n- **A light material reads as air and distance.** It recedes and reads as light.\n- **The contrast between values is what makes a scene read.** A scene of all-mid values reads as flat, and a scene with a clear bright, mid, and dark reads as a place with depth.\n- **Value holds under any light.** A material that reads as dark in the day reads as dark at night, and the value is the thing that survives the change of light. That is why value is the core read, and why a material with a clear value is a material that works under any mood.\n\nThe test is the squint test. Squint at the render until the color falls away, and ask what you see in the values. If the values do not carry the read, the color is doing work it should not have to, and the material is hiding a weak value structure.\n\n## Image textures vs procedural textures\n\nA material gets its surface detail from one of two sources, and the choice between them is a decision with real trade-offs.\n\n| Approach | How it works | When you want it |\n|---|---|---|\n| **Image texture** | A photograph or painted image mapped onto the surface via UV coordinates | Realistic detail, a specific look, a texture you found or painted. The most common path for believable surfaces |\n| **Procedural texture** | A pattern generated from math nodes, noise, voronoi, wave, and the like | Repeatable detail, a stylized look, or a texture you want to tweak without re-importing an image |\n\n**Image textures** need a **UV unwrap**, the process of laying the 3D surface flat so the 2D image can be mapped onto it correctly. Without a clean unwrap, an image texture stretches and smears, and the surface reads as wrong. The [funpack subject in Project B](../lessons/wk-05-b-funpack-workflow.md) and the hero props are the places a clean unwrap matters, because the surface is the point. **Smart UV Project** (on the allow-list) is the fast path to a usable unwrap, and a hand unwrap is the fallback when you need the seams to land in a specific place.\n\n**Procedural textures** are the path for detail you want to *control* rather than *find*. A noise texture for grime, a wave texture for water, a voronoi for a cracked surface. They are infinite, tweakable, and resolution-independent, and they are the right tool for a stylized surface or for detail that has to repeat. The trade-off is that they take more setup, and for a term that is about the *decision* and not the *detail*, an image texture is usually the faster route to a believable surface, and procedural is the tool for when the image is not the point.\n\nThe decision is the same shape as every other decision this term: what is the surface *for*? If it is for realism, find or paint an image. If it is for style or for repeatable detail, build it procedurally. Either is right, and neither is a default.\n\n## Advanced texturing: edge wear, damage, and normal maps\n\nThis is the advanced path, for when a believable image is not the point and you want *control* over the surface detail. It is also the **Project B prop and vehicle** texture, the thing that makes a prop read as used and real, not painted-on. It pushes the \"what is it made of, and why should I trust it\" test at the top of this page to its used-and-real end, and it is the material that *answers the light*, the highlight on a worn edge, so it works with the [lighting page](ref-lighting.md) and the day/night response section below.\n\n**Edge wear and edge masks.** The idea is that wear gathers on the edges, the bevels and the corners, so a worn edge is where the surface gives up first. You can generate an **edge mask**, a map that is bright on the edges, and drive a wear layer with it: exposed metal on a painted surface, brighter edges on a dark object. The standard build for it is a small node family, **Mix, Math (Power), Noise Texture, ColorRamp, and Bump**, but the node graph is not the point. The point is the *shape of the idea*, a mask that says \"here the surface is thin,\" and a dial that says \"how much wear, and how sharp.\"\n\n**Procedural damage.** The same noise and contrast dials as the [procedural texture](#image-textures-vs-procedural-textures) section, now aimed at damage rather than a repeating pattern. A noise texture plus a color ramp gives you grime, rust, and dirt pooling in the crevices, and the noise scale and the ramp contrast are the two dials that turn a clean surface into a used one.\n\n**Normal maps and decals: apparent detail without geometry.** A normal map is a *faked* surface detail, bumps, panel lines, carbon fiber, fine texture, that does not add a single vertex. It is how you raise the apparent detail without modeling it, and it is the bridge to **texture painting** and to **decals**, a small painted image, often a transparent PNG, stamped onto a surface for a logo, a sticker, or a worn patch. Normal maps and decals are the \"apparent detail without geometry\" path, and they are the fast way to get a surface to read as built without a high-poly model behind it.\n\n**The bake caveat.** The textbook way to *get* these maps, the edge mask, the normal map, the curvature, is to **bake** them in **Cycles**. In the EEVEE workhorse you more often **paint** the wear or use a **procedural** version of it, and that is fine for the term, the point is the read, not the pipeline.\n\n## Palette: limited and harmonious\n\nA **palette** is the set of colors a design uses, and a limited palette is a small number of colors that work together, rather than every color the eye can find. A limited palette is a decision, and it is what keeps a scene or a subject from reading as random.\n\n- **Limit the palette on purpose.** Three to five colors, chosen, beat twelve colors found. The eye reads a limited palette as designed, and a wide palette as cluttered.\n- **Harmony is the relationship.** A palette is not a list of colors, it is a set of colors in a relationship, complementary, analogous, warm-over-cool, or a single hue in different values and saturations. The relationship is the design, and the individual colors are the material.\n- **Value does the heavy lifting, not hue.** A palette can hold with very little hue, if the values are clear, and a palette with strong values reads as designed even in grayscale. That is the same value principle as above, applied to a set of colors instead of one surface.\n- **The palette is part of the mood.** The palette moves with the light and the material as one system, the same rule as the Week 3 direction. A warm palette and a cool palette are two moods, and the palette is the third of the three systems that have to agree.\n\nFor a mood board, the palette is the deliverable: three to five swatches that say *why this look*. The [palette extractor](ref-file-hygiene-and-tools.md) pulls them from a render, or you pick them by eye in your 2D app, and the requirement is the same either way, a small set of colors that hold together.\n\n## How materials read under light\n\nA material does not exist without a light, and the surface *response* is the material plus the light together. This is where the [lighting page](ref-lighting.md) and this one meet, and it is the part that decides whether a surface reads as the thing it is.\n\n- **Roughness plus light size = the highlight.** A rough surface under a soft light gives a broad, dim highlight. A smooth surface under a hard light gives a tight, bright one. The highlight is where the material answers the light, and it is the evidence the surface is real.\n- **The same material reads differently under different lights.** A matte surface in hard sunlight reads as used and textured, and the same surface in soft overcast reads as flat and even. The material did not change, the light did, and the read changed with it.\n- **Metal needs a reflection to be metal.** A metallic surface with nothing to reflect reads as dark and flat, and that is the most common reason a metal looks wrong. Give it something to reflect, a world, a bright shape, a light, and the metal reads.\n\nThe check is always the response, not the setting. You are not grading the roughness value, you are grading the highlight, the way the surface catches the light, and whether that catches the way the thing is supposed to.\n\n## Day and night material response (Project B)\n\nThe day-and-night hero pair is also a material test, because the surface response changes with the light, and the material has to hold under both.\n\n- **In the day, the material is lit by the world.** The full surface reads, the roughness and the color are both visible, and the highlight is broad and even. The material says *what it is* in full.\n- **At night, the material is lit by one thing.** The surface falls into shadow, and only the part the key touches reads. The highlight that proved the material was real in the day is the thing that survives the night, and the rest of the surface recedes into value. A material that works in the day but vanishes at night is a material that was hiding in a lucky setup, and the night pass is where you find out.\n- **The value is what holds.** The color can shift with the temperature, and the highlight can change with the light, but the value is the constant, and it is the reason a material with a clear value works under any mood. That is the day-and-night pair's real test: does the subject *live in light*, or does it only work in one?\n\n> **Aside (further reading):** *3D Environment Design with Blender* by Abdelilah Hamdani, **Chapter 2, \"The Basics of Realistic Texturing in Blender.\"** This is the chapter for the Principled BSDF vocabulary, the base color, the roughness, and the metallic, and for why roughness in particular does most of the work in making a surface read as one material or another. It is a recent edition, so it is closer to 5.x than the older books, and the node names line up with what you will see. Use it for the reasoning, not as a click-by-click map, because the panel may have shifted a little.\n\n> **Aside (further reading, advanced texturing):** *Blender 3D Incredible Models: A Comprehensive Guide to Hard-Surface Modeling, Procedural Texturing, and Rendering* by Arijan Belec, **Chapter 4 (\"Texturing and Rendering the FN SCAR\"), Chapter 6 (\"Texture Painting the Sci-Fi Race Ship\"), and Chapter 12 (\"Texturing the Tank\").** Chapter 4 builds the edge mask in Cycles, bakes it to an edge map, and uses it to drive per-material edge wear. Chapter 6 bakes normal maps (Cycles Selected-to-Active) and adds texture painting and decal PNG stickers to raise apparent detail without geometry. Chapter 12 is the procedural wear and rust node graphs, edge masks combined with Mix, Math (Power), Noise Texture, ColorRamp, and Bump. The book targets **Blender 2.93/3.0 (2022)** and is **Cycles-centric**, so the baking path is Cycles, in the EEVEE workhorse you more often fake the same wear procedurally or painted, and the panel layout will have drifted in 5.x.\n\n*If a material looks off and you cannot say why, check the roughness and the highlight first, because that is where the surface is lying. If a node is somewhere the reference does not show, that is a 5.x thing. Ask.*",
    "source": "lessons/semester-3/reference/ref-materials-texturing.md",
    "order": 4
  },
  {
    "id": "ref-camera-composition",
    "title": "Camera & composition",
    "section": "blender",
    "covers": "Focal length, motivated cameras, the 180-degree line, depth, composition, contact sheet, and carrying a mood turn.",
    "for": [
      "C (Wk 10 to 12)"
    ],
    "body": "*Why a camera is where it is, and how a frame reads at a glance. This page is the vocabulary for Project C, the motivated camera, the 180-degree line, and the contact sheet. The camera is the third of the systems, after light and material, and in Project C it is the one that turns a set of frames into a story.*\n\n## Camera basics\n\nAdd a camera with **Shift + A > Camera**. Two things define it, and both are decisions:\n\n- **Focal length** (the lens). A short, wide focal length (say 24 mm) sees a lot of the scene and exaggerates depth, making a small room feel vast. A long focal length (say 80 mm) sees a narrow slice and compresses depth, making a courtyard feel cramped. The lens is a *feeling*, not a measurement, and it is one of the biggest mood levers you have.\n- **Framing** (what is in the frame and where). The position and the angle decide what the eye sees first and what it is allowed to ignore. Framing is the composition, and composition is the design.\n\nThe focal length is the one that quietly does a lot of the *scale* work. Remember the Week 2 move, where a figure is the anchor and the room is sized against it? The lens does the same thing at the frame level. A wide lens from close in makes a small room read as grand, and a long lens from far away makes a courtyard read as tight. Same space, different lens, different story. That is the scale problem wearing a different hat, and it is the whole of the Week 12 revisit.\n\n## Motivated cameras (Project C, Week 10)\n\nA motivated camera is a camera that is *there for a reason you can defend*. The reason is tied to the beat, the one thing that happens in the scene. \"I liked how it looked\" is not a motivation. The character is looking left, so the camera is where we see them look. The reveal is the point, so the wide shot comes before the close one.\n\n- **Name the beat before you place the camera.** The camera serves the beat, and if you cannot say what the beat is, the camera has nothing to serve, and it is parked, not motivated.\n- **The test is the eye's first stop.** In the frame, name the one thing the eye goes to first. If it is the subject at the moment it matters, the camera is motivated. If it is a pretty corner, the camera is parked, and that is the finding.\n- **Every camera needs a one-sentence why.** *Why this camera and not somewhere else?* If you can answer it without re-reading the file, the camera is motivated. If you cannot, it is a guess, and a guess is what the C1 checkpoint is for.\n\nThe difference is the difference between a journalist and a tourist. A tourist photographs the view, the one that looks good. A journalist photographs the story, the one that is *about* something. The frame looks good because it is about the beat, not because the angle happened to be pretty. That is the whole of the motivated camera, and it is a decision, not a default.\n\n## The 180-degree rule / the line (Project C, Week 11)\n\nThe line is the invisible axis that runs through the action, the line between the subject and the thing it is looking at, or the line of the action itself. When the cameras stay on **one side** of that line, the subject keeps its direction, and the audience follows. When a camera crosses the line, the subject flips, and the audience stumbles, even if they cannot say why.\n\n- **The line is the action axis.** Name it before you place the second camera. The line between the djinn and the text. The line of the walk, from the door to the table. Both cameras have to stay on the same side of it.\n- **Crossing the line is a jump cut.** The subject flips direction from one shot to the next, and the audience feels the flip without being able to name it. That is the stumble, and it is the whole of continuity.\n- **The point of reference is what holds the cut.** It is the one thing in the frame that does not move, the table, the door, the light, and if it is consistent across the cut, the line holds. If it is different in each frame, the cut stumbles, and that is the finding.\n- **You can cross the line on purpose,** if you reset the geography first, usually with an establishing shot that re-anchors the audience. But it is a deliberate move, not an accident, and an accidental crossing reads as a mistake.\n\nThe line is the cheapest, most invisible, and most important thing in a sequence, because it is the thing the audience feels without seeing. It is the difference between a scene that leads and one that confuses, and it is a decision, not a default.\n\n## Depth: foreground, midground, background\n\nA frame with only one plane reads as a card, and a frame with three planes reads as a place. The three planes are the depth, and they are the cheapest way to make a scene feel real.\n\n- **Foreground** is the near plane, the thing closest to the camera. A branch, a shoulder, a piece of the set in front of the subject. It frames the shot and adds the sense that the camera is *in* the space, not in front of it.\n- **Midground** is where the subject lives, the plane the eye lands on. The beat happens here.\n- **Background** is the far plane, the context, the world behind the subject. It says *where* the beat is happening, and it is where the atmospheric perspective and the value falloff do their work.\n\nThe move is to keep all three, and to keep them at different values, so the eye can separate them. A foreground that is darker than the midground, and a background that recedes in value, gives the frame the depth it needs without a single extra light. This is the same massing principle as the Week 2 move, applied to the frame instead of the set: large, medium, small, near, subject, far.\n\n## Composition\n\nComposition is how the frame is organized, and it is the design of the read. The tools:\n\n- **Rule of thirds.** Divide the frame into a three-by-three grid, and place the key element on a line or an intersection, not in the dead center. Off-center placement reads as dynamic, and dead-center reads as static, and both are choices.\n- **Leading lines.** A line in the frame, a wall, a path, a row of shelves, that walks the eye to the subject. The eye follows lines the way a hand follows a rail, and a leading line is the cheapest way to direct the read.\n- **Negative space.** The empty space around the subject, and it is not wasted, it is the read. Negative space gives the subject room to breathe, and it says *this is the only thing that matters here*. A frame that is too full has no room for the eye, and a frame with negative space has a point.\n- **Silhouette.** The flat shape of the subject against the background, and it is the test that a design reads before any color or detail. If the silhouette does not read, the frame does not read, and that is the B1 and C1 test in one move.\n\nThe one principle under all of them is the **quick read**: a composition you can take in at a glance. The eye goes to one thing first, and that thing is the point. If the eye has to search, the composition is working against you, and the fix is to make the point stronger, not to add more to the frame.\n\n## Contact sheet (Project C, Week 12)\n\nA contact sheet is the sequence of still frames laid out in story order, each labeled with its type and purpose, so the whole scene reads at a glance. It is the proof of the sequence, and it is where the line and the mood either hold or break.\n\n- **Lay the frames in story order,** the order they cut, not the order you made them. The sheet is read as a sequence, and the order is the story.\n- **Label each frame.** *Establishing, beat, reveal.* The label matters as much as the frame, because that is how a production reads the sheet, and an unlabeled frame is a guess.\n- **Squint and read it as one scene.** Do the frames look like they happen at the same time, in the same light, or do they look like several days? If several, the mood is breaking, and the contact sheet is where you find the odd one out.\n- **The sheet is the quick read of the whole sequence.** It is the same quick-read principle as a single frame, applied to the sequence. If the sheet reads as one scene at a glance, the line and the mood are both there.\n\nThe [Quick Sheet renderer](ref-file-hygiene-and-tools.md) builds the sheet in one pass, or you render each camera to its own PNG and lay them into a labeled grid in your 2D app. Same sheet, more steps. The requirement is the same either way, a sequence that reads as one scene at a glance.\n\n## Carrying a light / mood turn across the sequence\n\nIn Project C the camera does not just frame the scene, it carries the turn. The light and the mood deliberately change, beat to beat, and the camera is the vehicle that makes the change read as a move instead of a jump. This is the light/mood turn from the [lighting page](ref-lighting.md#designing-a-light--mood-turn-across-a-sequence-project-c-week-12), seen from the camera side.\n\n- **The camera positions the turn.** A wide establishing shot sets the *when* and the *where*, and a closer shot narrows the eye to the moment the turn happens. The move from wide to close is itself a part of the story, because it is the audience leaning in.\n- **Hold what should hold across the cut.** The line holds, the point of reference holds, and the key direction holds, while the temperature or the contrast turns. The turn reads as a move because there is something constant to move against, and the camera is what keeps that constant in frame.\n- **The sequence is a song, the line is the melody, and the mood is the key.** The line is the order of the notes, and the mood is the key that makes the notes read as one song. Both have to be there, and the mood is the one that makes the melody *one song*. That is the Week 12 test, and the contact sheet is where you check it.\n\n> **Aside (further reading):** *Framed Ink: Drawing and Composition for Visual Storytellers* by Marcos Mateu-Mestre, **Chapter 4, \"Composing for Continuity.\"** This is the chapter that spells out the line, the point of reference, and why crossing the line reads as a jump, with case studies. It is the entire continuity half of Project C, and it is short. Pair it with **Chapter 3, Part 2, \"Working with Motion,\"** for the camera-motivation and the establishing-shot ideas that the Week 10 lesson is built on. Both chapters are the working rules for exactly what you are doing in C, and they are worth a read before C1.\n\n*If the eye goes to a pretty corner instead of the beat, that is not an angle problem, that is a motivation problem, and we'll find the beat together. If a panel has moved, that is a 5.x thing. Ask.*",
    "source": "lessons/semester-3/reference/ref-camera-composition.md",
    "order": 5
  },
  {
    "id": "ref-rendering",
    "title": "Rendering",
    "section": "blender",
    "covers": "EEVEE as the workhorse, Cycles for hero passes, the EEVEE settings that matter, sampling, denoise, the Quick Sheet, hero-pass workflow.",
    "for": [
      "A hero (Wk 4)",
      "B heroes (Wk 7)",
      "C (Wk 12 to 14)"
    ],
    "body": "*How to get a frame out, and when to spend the time on it. The rule for the whole term is in one line: **EEVEE is the workhorse, Cycles is for the hero passes.** This page is the vocabulary for that rule, and for the settings that actually matter, and for the hero-pass workflow that A, B, and C all close with.*\n\n## The two engines\n\nBlender has two render engines, and the term uses both for different jobs.\n\n| Engine | What it is | When you use it |\n|---|---|---|\n| **EEVEE** | A real-time engine, fast enough to see the result as you change things | Daily iteration, blocking, the directional studies, the contact sheet, the fast read |\n| **Cycles** | A path-tracing engine, slow but physically accurate | The hero passes only, the final render you commit to |\n\nThe reason is the feedback loop. EEVEE is fast enough that you can change a light or a material and see the result in seconds, and that speed is what lets you *find the response*, the moment the light or the material stops being a default and becomes a decision. Cycles is honest about the physics, but it is slow, and if you iterate in Cycles you spend the whole term waiting for the render instead of making the decision. So you find the decision in EEVEE, and you commit to it in Cycles. That is the whole rule, and it is the 60/40 tilt, thinking fast, rendering honest.\n\n**5.x note:** in 5.0 the engine you want is just **EEVEE**, the real-time engine that used to ship as **EEVEE Next** in 4.2 to 4.4. It is the one in the render-engine menu, and it is the one this page is about. The older books talk about the legacy EEVEE and about panel names that have since shifted, and the ideas are stable even though the labels moved. That is a version thing, not a you thing.\n\n## The EEVEE settings that matter\n\nThese are the dials that decide whether an EEVEE render reads as a real scene or as a block. You do not need to touch most of the settings, you need to know these.\n\n| Setting | What it does | The read |\n|---|---|---|\n| **Shadows** | Whether lights cast shadows, and how sharp and how soft they are | The cast shadow is where a form says it has weight. In 5.0 the shadow settings, ray count, overblur, and resolution, live under the **Shadows** sub-panel |\n| **Raytracing** | Reflections and indirect light traced in real time, the 5.0 replacement for the old screen-space approximation | The two reads that used to be separate panels now live here: the reflections (the old **Screen Space Reflections**) and the **ambient occlusion**, now a method under **Raytracing > Fast GI Approximation**. Turn it on for the reflective read and the corner-darkening read |\n| **Sampling (samples)** | How many samples per pixel | More samples, less noise. For EEVEE, a low number is enough for the fast read, and you bump it for the ones you keep |\n| **Glare (compositor)** | A soft glow around bright areas | The old **Bloom** panel. In 5.0 the glow is a **Glare** node in the compositor, a post step, not an EEVEE dial |\n\nThe habit is to start with the defaults, and to change only the dials that serve the read. If the render is flat, it is usually a shadow or an ambient-occlusion problem, not a sample problem. If a shiny surface reads as flat, it is a raytracing problem, not a material problem. If the bright areas are not glowing, it is a glare problem, and the fix is in the compositor. Find the read that is missing, and change the one dial that serves it, and leave the rest alone.\n\n## When to switch to Cycles\n\nThe hero pass is the moment you switch to Cycles, and it is the one you commit to. The reasons to switch:\n\n- **The hero render in Project A** (Week 4), the one that carries the location. It is the final image, and it deserves the honest engine.\n- **The two hero renders in Project B** (Week 7), the day and the night pair. The subject lives in light, and the hero pass is where the subject is proven under two moods.\n- **The final scene in Project C** (Week 14), the finished frame that closes the capstone.\n\nThe rule is simple: **iterate in EEVEE, commit in Cycles.** Do not iterate in Cycles, because you will spend the term waiting, and do not commit in EEVEE if the hero pass needs the honest reflections and the honest light that only Cycles gives. The one exception is when EEVEE with high samples and GI is enough for the read, in which case the EEVEE pass *is* the hero, and that is a fine decision to make, as long as you made it on purpose. The default is Cycles for the hero, and the exception is a decision you can defend.\n\n## Resolution and sampling\n\nTwo numbers that decide the quality and the cost of a render:\n\n- **Resolution** is the size of the image, in pixels. The render resolution is set in the render properties, and it is the size of the final image. For a study, a lower resolution is enough, because the read is the point, not the pixel count. For a hero pass, the full resolution, because the hero is the image you keep. A 4K render of a study is a waste, and a low-res hero is a missed opportunity, so match the resolution to the job.\n- **Sampling** is the number of samples per pixel, and it is the noise-vs-time trade-off. More samples, less noise, more time. For EEVEE, a low sample count is enough for the fast read, and you bump it for the frames you keep. For Cycles, the hero pass gets the full sample count, and you let it run, because the hero is the one you wait for.\n\n## Denoise\n\n**Denoising** is the pass that cleans the noise out of a render, especially a Cycles render with a low sample count. It is on by default in most setups, and it is the difference between a render that reads as clean and one that reads as grainy. In 5.0 the Cycles denoiser has three options, **Automatic**, **OpenImageDenoise**, and **OptiX**, and **Automatic** is the right default, it picks the best one for your GPU. You do not need to change it unless a render keeps a soft, smeared look, in which case a different denoiser is the first thing to try.\n\n- A Cycles hero pass with a moderate sample count plus denoise gives you the honest look at a fraction of the time of a full-sample render, and that is the normal hero workflow.\n- Denoise does the most work at the low end, cleaning up a low-sample render. At a high sample count there is less noise to clean, and the denoise does less.\n- If a render reads as grainy in the darks, that is a sample-or-denoise problem, not a light problem, and the fix is more samples or a stronger denoise, in that order.\n\n## The Quick Sheet renderer (busywork tool)\n\nThe **Quick Sheet renderer** builds a contact sheet of multiple frames in one pass, either multiple angles or multiple lights or multiple moods, at low samples. It is the tool behind the Week 3 directional studies and the Week 12 sequence sheet, because it lets you see the whole set side by side and pick the one that serves the beat.\n\n- **What it does:** renders a grid of frames, each from a different camera or under a different light, in one pass, at low samples for speed.\n- **When the course uses it:** the Week 3 directional studies (three to five moods on one blockout), and the Week 12 shot-sequence contact sheet (the frames in story order).\n- **Manual fallback (if it is down):** set up the cameras by hand, render each to its own PNG, number them, and lay them into a labeled grid in your 2D app. Same sheet, more steps, and the requirement does not change. The sheet is the point, and the tool is just the fast way to get it.\n\nThe Quick Sheet is a decision tool, not a render tool. Its job is to let you *see the set together* and pick the winner, and that is the whole of the Week 3 and Week 12 moves. The render is the proof, and the pick is the decision.\n\n## Hero pass workflow (A Week 4, B Week 7, C Week 14)\n\nThe hero pass is the same move in all three projects, because the hero is the same thing: the one render you commit to, the image that carries the project. The workflow:\n\n1. **Find the decision in EEVEE.** Iterate the light, the material, and the palette in EEVEE until the read is right, until the frame is a *direction* you can defend, not a default. This is the fast work, and it is where the 60 of the 60/40 lives.\n2. **Set the frame.** Lock the camera, the focal length, and the composition. The hero is a decided frame, and the composition is the design, so get it right before you spend the render time.\n3. **Switch to Cycles.** Set the engine to Cycles, set the resolution to the hero size, set the samples to the full count, and make sure denoise is on.\n4. **Render the hero.** Let it run. This is the one you wait for, because it is the one you keep, and the honest engine is doing the work that EEVEE approximated.\n5. **Check the response, not the setting.** Look at the highlight, the cast shadow, the rim, the way the material answers the light. If the read is right, the hero is done. If the read is wrong, that is a light or a material problem, and you go back to EEVEE to fix it, not to the Cycles settings.\n\nFor **Project A** (Week 4), the hero is the location, and the paintover that follows is the proof that you can see past the render, the 2D pass that fixes what the 3D got wrong. For **Project B** (Week 7), the heroes are the day and the night pair, and the test is that the subject lives in light under both moods. For **Project C** (Week 14), the hero is the finished scene, and it is the frame that closes the capstone, the one that says *this is the story, decided.*\n\n> **Aside (further reading):** *Shading, Lighting, and Rendering with Blender EEVEE* by Sammie Crowder, **Chapter 4, \"Non-Physical Rendering.\"** This is the chapter for the render settings that matter, sampling, ambient occlusion, bloom, and screen space reflections, and for the reasoning behind each of them. **Caveat:** it targets legacy EEVEE on Blender 3.0, so the UI and some of the light behaviors will differ in 5.x, and the settings panel will have moved. Use it for the reasoning, why a setting reads the way it does, not as a click-by-click map. The ideas are stable, the labels are not.\n\n*If the render is flat, that is a shadow or an AO problem, not a sample problem, and the fix is one dial, not a re-render. If a setting has moved, that is a 5.x thing. Ask, and we'll find the honest render together.*",
    "source": "lessons/semester-3/reference/ref-rendering.md",
    "order": 6
  },
  {
    "id": "ref-file-hygiene-and-tools",
    "title": "File hygiene & tools",
    "section": "blender",
    "covers": "Naming, collections, orphan purge, packing, the file/scene auditor, and the single spec for every busywork tool with its manual fallback.",
    "for": [
      "Every delivery week",
      "and whenever a tool is down"
    ],
    "body": "*How to keep a file clean enough to hand to someone else, and where every on-hand tool is spec'd with its manual fallback. A clean file is not a prettier file, it is a file that does not lie about what is in it, and it is the deliverable every project closes with. This page is the checklist, and the single place the four busywork tools are described, because a tool being down should never cost you the deliverable.*\n\n## Naming conventions\n\nA name is a promise about what a thing is, and a well-named file is a file you can find without opening it. The conventions the course uses:\n\n- **Collections are numbered and named by purpose:** `00_world`, `10_set`, `20_light`, `30_cam`, `40_props`. The number sets the order, and the name says what is in it.\n- **Objects are named by what they are, not by a counter.** A `column_03` is a name that tells you nothing. A `library_column` is a name that does. If two objects need the same name, the number is the tie-breaker, not the whole name.\n- **Files are named by project and week:** `a-environment_wk3-a2.blend`, `c-scene_wk12-c2.blend`. The project letter, the subject, and the week are in the name, so a file from three weeks ago is still findable.\n\nThe test is the handoff test: if you handed this file to a production artist, could they find the light, the camera, and the subject without asking you? If yes, the naming is working. If they would have to ask, the naming is not done, and that is the finding, not the failure.\n\n## Collections hygiene\n\nA collection is a folder of objects, and a healthy file has a small number of collections that each have a purpose. The hygiene rules:\n\n- **Every collection has a job.** A collection that is a catch-all, the place you dump the things that do not fit, is not a collection, it is a junk drawer. Either give it a purpose or merge it into one that has one.\n- **Every object lives in a collection.** An object that is in the scene but in no collection is an object that will be lost, and the outliner is where you find the strays. Move it into the right collection, or delete it if it is not used.\n- **Keep the set and the props separate.** The set collection is the architecture, and the props collection is the movable detail. Keeping them apart is what makes a scene editable, because you can hide the props and work the set, and vice versa.\n\nThe [Starter Scene](ref-file-hygiene-and-tools.md#busywork-tools-overview) gives you the collection structure on purpose. If you are not using it, build the same structure by hand, because a scene with one flat list of forty objects is a scene you will never find your way around in.\n\n## Orphan data and the purge\n\n**Orphan data** is the data that is no longer attached to anything, a material that no object uses, a mesh that no object references, a texture that no material points to. It is the dead weight in a file, and it is what makes a file slow and hard to read, and it is the thing the audit catches.\n\nThe purge, in order:\n\n1. **Select the objects** you want to check, or the whole scene for a full pass.\n2. **Clear parents** with **Alt + P**, choosing to keep the transform so the objects do not jump. A parented object that is no longer needed by its parent is a stray, and clearing the parent is the first step to finding the orphans it leaves behind.\n3. **Purge orphans** from the outliner, or with the orphan-data purge, which deletes the data blocks that no object references. This is the step that actually removes the dead weight.\n\nThe test after the purge is the file size. If the file got smaller without losing anything you can see, you removed orphans, and that is a win. If the file got smaller and something changed, you removed something that was still in use, and that is the finding, and it is a five-minute fix because it is a block, not a finish.\n\n## Packing images\n\nA .blend file references its images and textures by path, and if those files are loose on disk, the .blend is not a complete file, it is a file plus a folder that might not come with it. **Packing** pulls the external files into the .blend so it travels as one.\n\n- **Pack** with **File > External Data > Pack Resources** (no default key), which bundles the images into the .blend.\n- **Unpack** with **File > External Data > Unpack Resources** (no default key), which writes them back out as external files.\n- **Before delivery, pack.** A packed .blend is a self-contained file, and it is the one you hand to someone, because it does not depend on a folder that might not be there.\n\nThe exception is a very large texture set, where packing makes the .blend heavy, and in that case the fallback is to deliver the .blend plus the packed image folder, with a note that says so. But the default is pack, because a self-contained file is a file that does not lie about what is in it.\n\n## The file / scene auditor (busywork tool)\n\nThe **file / scene auditor** is the on-hand tool that runs the pre-delivery pass automatically, checking naming, orphan data, and collection hygiene in one go. It is the checklist above, run as a tool, and it is the thing that stands between a working file and a clean one.\n\n- **What it does:** checks the file against the conventions, flags the unnamed objects, the orphan data, the purpose-less collections, and the loose images, and tells you what to fix before delivery.\n- **When the course uses it:** before every delivery, A (Week 4), B (Week 9), and C (Week 14), because a clean .blend is a deliverable in every project, not a bonus.\n- **Manual fallback (if it is down):** run the checklist by hand. Rename the strays, purge the orphans, confirm each collection has a purpose, and pack the images. The auditor is just the fast way to run the same checks, and the checks do not change when the tool is down. That is the whole point of a manual fallback, the requirement is intact, the tool is just the means.\n\n## Busywork tools overview\n\nThe four on-hand tools, spec'd in one place, with the manual fallback for each. Every tool is **available, never a hard dependency**, because a tool being down should never cost you the deliverable, and the fallback is the proof that it does not.\n\n| Tool | What it does | When the course uses it | Manual fallback (if it is down) |\n|---|---|---|---|\n| **Starter Scene** | One click: organized collections, a camera plus a three-point light rig, sane EEVEE and render settings, naming conventions | Wk 1 setup, and the base for every project's file | Start from a fresh file; build a `00_world`, `10_set`, `20_light`, `30_cam` collection set by hand; add a camera and a key/fill/rim from the lamp menu |\n| **Funpack / turnaround generator** | Places cameras around a subject and renders a labeled 3-view grid, front, side, back, and often 3/4, in one pass | Project B, the funpack (Wk 5 to 7) | Set up 3 to 4 cameras around the subject on a common center, render each to PNG, and lay them into a labeled grid in your 2D app |\n| **Quick Sheet renderer** | Builds a contact sheet of multiple frames, angles, lights, or moods, at low samples, in one pass | Project A directional studies (Wk 3), Project B variants, Project C sequence sheet (Wk 12) | Render each camera or variant to its own PNG, number them, and lay them into a labeled grid in your 2D app |\n| **File / scene auditor** | Checks naming, orphan data, and collection hygiene before delivery | Before every delivery, A (Wk 4), B (Wk 9), C (Wk 14) | Manually rename the strays, purge the orphans, confirm each collection has a purpose, and pack the images |\n\n**The pattern behind every fallback:** the tool is the fast way to do a job, and the manual path is the slow way to do the *same* job. The requirement is the job, not the tool, and that is why a tool being down is never a reason to miss a deliverable. If the Quick Sheet is down, you still make the sheet, by hand. If the auditor is down, you still run the checks, by hand. The sheet is the point, and the tool is just the means.\n\n## The pre-delivery pass, in order\n\nThe full pass, whether you run it with the auditor or by hand, in the order that keeps it fast:\n\n1. **Rename the strays.** Every object and every collection has a name that says what it is.\n2. **Purge the orphans.** Clear the parents, delete the dead data, and confirm the file size dropped without losing anything visible.\n3. **Check the collections.** Every collection has a purpose, and every object lives in one.\n4. **Pack the images.** The file travels as one, not one plus a folder.\n5. **Save and name the file.** `project_subject_wkNN-checkpoint.blend`, so the file from three weeks ago is still findable.\n\nA file that passes this is a file you can hand to a production artist, and that is the bar, because the deliverable is not the render, it is the render plus the file that proves you could see what you were doing.\n\n> **Aside (further reading):** *The Complete Guide to Blender Graphics: Computer Modeling & Animation, Volume 1* by Blain J., **Chapter 19, \"The Outliner and Collections.\"** This is the short chapter on the outliner and the collection system, and it is the reasoning behind why collections are the organizing unit of a Blender file. It is an older edition, so the outliner layout will have shifted a little in 5.x, but the idea, that a file is organized by collections and that the outliner is where you find the strays, is stable. Use it for the reasoning, and trust this page for the current pass.\n\n*If a file is messy, that is not a you thing, that is a habit thing, and the habit is five minutes of the pass before delivery. If a panel has moved, that is a 5.x thing. Ask.*",
    "source": "lessons/semester-3/reference/ref-file-hygiene-and-tools.md",
    "order": 7
  }
],
  shortcuts: [
  {
    "id": "create-add",
    "category": "create",
    "key": "Shift + A",
    "label": "Add a new object (mesh, light, camera, empty, and more)",
    "order": 1
  },
  {
    "id": "create-duplicate",
    "category": "create",
    "key": "Shift + D",
    "label": "Duplicate the selected object",
    "order": 2
  },
  {
    "id": "create-join",
    "category": "create",
    "key": "Ctrl + J",
    "label": "Join the selected objects into a single one",
    "order": 3
  },
  {
    "id": "create-array",
    "category": "create",
    "key": "Modifiers > Array",
    "label": "Array modifier: repeat the object in a row or column",
    "order": 4
  },
  {
    "id": "create-subdivide",
    "category": "create",
    "key": "Modifiers > Subdivision Surface",
    "label": "Subdivision Surface modifier: smooth, dense geometry",
    "order": 5
  },
  {
    "id": "hs-extrude",
    "category": "hard-surface",
    "key": "E",
    "label": "Extrude the selected faces, edges, or vertices (Edit Mode)",
    "order": 6
  },
  {
    "id": "hs-inset",
    "category": "hard-surface",
    "key": "I",
    "label": "Inset the selected faces (Edit Mode)",
    "order": 7
  },
  {
    "id": "hs-bevel",
    "category": "hard-surface",
    "key": "Ctrl + B",
    "label": "Bevel the selected edges (Edit Mode)",
    "order": 8
  },
  {
    "id": "hs-loopcut",
    "category": "hard-surface",
    "key": "Ctrl + R",
    "label": "Loop Cut: add an edge loop (Edit Mode)",
    "order": 9
  },
  {
    "id": "hs-fill",
    "category": "hard-surface",
    "key": "F",
    "label": "Fill the selected boundary with a face (Edit Mode)",
    "order": 10
  },
  {
    "id": "mat-new",
    "category": "materials",
    "key": "N > Material > New",
    "label": "Create a new material slot",
    "order": 11
  },
  {
    "id": "mat-assign",
    "category": "materials",
    "key": "L > Assign",
    "label": "Assign the active material to the selected faces (Edit Mode)",
    "order": 12
  },
  {
    "id": "mat-preview",
    "category": "materials",
    "key": "Z > Material Preview",
    "label": "Viewport shading: Material Preview",
    "order": 13
  },
  {
    "id": "mat-rendered",
    "category": "materials",
    "key": "Z > Rendered",
    "label": "Viewport shading: Rendered (live texture preview)",
    "order": 14
  },
  {
    "id": "coll-local",
    "category": "collections",
    "key": "/ (Numpad Slash)",
    "label": "Local View: isolate the selection",
    "order": 15
  },
  {
    "id": "coll-new",
    "category": "collections",
    "key": "Outliner > New Collection",
    "label": "Create a new collection",
    "order": 16
  },
  {
    "id": "coll-hide",
    "category": "collections",
    "key": "H / Alt + H",
    "label": "Hide selected / hide all except the selected",
    "order": 17
  },
  {
    "id": "coll-unhide",
    "category": "collections",
    "key": "Alt + A",
    "label": "Unhide all hidden objects",
    "order": 18
  },
  {
    "id": "cam-make",
    "category": "cameras",
    "key": "Ctrl + Alt + Numpad 0",
    "label": "Make the selected object the active camera",
    "order": 19
  },
  {
    "id": "cam-view",
    "category": "cameras",
    "key": "Numpad 0",
    "label": "View through the active camera",
    "order": 20
  },
  {
    "id": "cam-frame",
    "category": "cameras",
    "key": "Numpad .",
    "label": "Frame the selection to fit the view",
    "order": 21
  },
  {
    "id": "cam-border",
    "category": "cameras",
    "key": "Camera > Camera Border",
    "label": "Toggle the camera border (safe frame and margin)",
    "order": 22
  },
  {
    "id": "light-add",
    "category": "lights",
    "key": "Shift + A > Light",
    "label": "Add a light (Point, Sun, Spot, Area)",
    "order": 23
  },
  {
    "id": "light-color",
    "category": "lights",
    "key": "Light Data > Color",
    "label": "Set a light's colour",
    "order": 24
  },
  {
    "id": "light-power",
    "category": "lights",
    "key": "Light Data > Power",
    "label": "Set a light's strength (Watts)",
    "order": 25
  },
  {
    "id": "light-world",
    "category": "lights",
    "key": "World Properties",
    "label": "World background and ambient lighting",
    "order": 26
  },
  {
    "id": "render-still",
    "category": "render",
    "key": "F12",
    "label": "Render the current view (still frame)",
    "order": 27
  },
  {
    "id": "render-anim",
    "category": "render",
    "key": "Ctrl + F12",
    "label": "Render the animation (frame sequence)",
    "order": 28
  },
  {
    "id": "render-save",
    "category": "render",
    "key": "Image Editor > Save As",
    "label": "Save the rendered image to disk",
    "order": 29
  }
],
  checklist: [
  {
    "id": "sub-renders",
    "category": "submission",
    "subCategory": "file-format",
    "text": "All renders must be .png files",
    "order": 1
  },
  {
    "id": "sub-naming",
    "category": "submission",
    "subCategory": "naming-convention",
    "text": "File naming convention: Lastname_Firstname_ANV6_wk#_v###.filetype",
    "order": 2
  },
  {
    "id": "sub-prefixes",
    "category": "submission",
    "subCategory": "object-prefixes",
    "text": "Blender prefixes: COL_ collections, P_ props, C_ characters, L_ lights, CAM_ cameras",
    "order": 3
  },
  {
    "id": "sub-naming-all",
    "category": "submission",
    "subCategory": "object-prefixes",
    "text": "Name all objects on creation",
    "order": 4
  },
  {
    "id": "dp-el-line",
    "category": "elements",
    "subCategory": "line",
    "text": "Line: a mark with length and direction that guides the eye.",
    "environment": "Edges, wires, and leading lines in a 3D scene create the visual paths the viewer follows.",
    "order": 5
  },
  {
    "id": "dp-el-shape",
    "category": "elements",
    "subCategory": "shape",
    "text": "Shape: a flat, two-dimensional area with a distinct boundary.",
    "environment": "The flat faces and the silhouette of a form define its shape, the first thing the eye reads.",
    "order": 6
  },
  {
    "id": "dp-el-form",
    "category": "elements",
    "subCategory": "form",
    "text": "Form: the three-dimensional mass that gives weight and volume.",
    "environment": "Blockout and massing build the form first; it carries the read before any surface is added.",
    "order": 7
  },
  {
    "id": "dp-el-value",
    "category": "elements",
    "subCategory": "value",
    "text": "Value: the light-to-dark scale that carries the read before colour.",
    "environment": "Lighting and shadow set the value structure that makes a scene readable at a glance.",
    "order": 8
  },
  {
    "id": "dp-el-colour",
    "category": "elements",
    "subCategory": "colour",
    "text": "Colour: hue, saturation, and intensity used to separate, unify, or signal.",
    "environment": "The palette and accent hues steer attention and set the mood of the space.",
    "order": 9
  },
  {
    "id": "dp-el-texture",
    "category": "elements",
    "subCategory": "texture",
    "text": "Texture: surface quality that signals material, age, and wear.",
    "environment": "Materials and surface detail sell the physicality of an environment.",
    "order": 10
  },
  {
    "id": "dp-el-space",
    "category": "elements",
    "subCategory": "space",
    "text": "Space: the area between and around forms, read through depth cues.",
    "environment": "Overlap, scale falloff, and atmospheric perspective create the sense of depth in a 3D scene.",
    "order": 11
  },
  {
    "id": "dp-pr-balance",
    "category": "principles",
    "subCategory": "balance",
    "text": "Balance: the distribution of visual weight so the frame feels intentional.",
    "environment": "Asymmetric versus symmetric massing and prop placement keep a composition feeling deliberate.",
    "order": 12
  },
  {
    "id": "dp-pr-contrast",
    "category": "principles",
    "subCategory": "contrast",
    "text": "Contrast: the juxtaposition of opposites that creates tension and emphasis.",
    "environment": "Value, colour, scale, and texture contrast create the focal points that draw the eye.",
    "order": 13
  },
  {
    "id": "dp-pr-emphasis",
    "category": "principles",
    "subCategory": "emphasis",
    "text": "Emphasis: the single point where the eye lands first and longest.",
    "environment": "A hero element, a pool of light, or a colour accent anchors the scene's focal point.",
    "order": 14
  },
  {
    "id": "dp-pr-rhythm",
    "category": "principles",
    "subCategory": "rhythm",
    "text": "Rhythm: the repeated, patterned movement that leads the eye through the frame.",
    "environment": "Repeating arches, columns, or props create a visual beat the eye travels along.",
    "order": 15
  },
  {
    "id": "dp-pr-repetition",
    "category": "principles",
    "subCategory": "repetition",
    "text": "Repetition: recurring shapes, colours, or motifs that create unity.",
    "environment": "Reusing a small set of forms and colours ties a whole environment together.",
    "order": 16
  },
  {
    "id": "dp-pr-scale",
    "category": "principles",
    "subCategory": "scale-proportion",
    "text": "Scale and Proportion: the relative size of parts to each other and to a body reference.",
    "environment": "Sizing a room against a mannequin and props against one another makes scale believable.",
    "order": 17
  },
  {
    "id": "dp-pr-unity",
    "category": "principles",
    "subCategory": "unity",
    "text": "Unity: the sense that all the parts belong to one coherent whole.",
    "environment": "A shared palette, light direction, and material family unify the scene into a single place.",
    "order": 18
  },
  {
    "id": "ac-sil-1",
    "category": "artistic-silhouette",
    "text": "Does the main shape read clearly at a distance, before any colour or detail?",
    "order": 19
  },
  {
    "id": "ac-sil-2",
    "category": "artistic-silhouette",
    "text": "Is the outline distinctive, not a generic lump or box?",
    "order": 20
  },
  {
    "id": "ac-sil-3",
    "category": "artistic-silhouette",
    "text": "Does the negative space inside the silhouette feel intentional?",
    "order": 21
  },
  {
    "id": "ac-col-1",
    "category": "artistic-colour",
    "text": "Does our palette stay to a small, deliberate family of hues?",
    "order": 22
  },
  {
    "id": "ac-col-2",
    "category": "artistic-colour",
    "text": "Is there a clear warm-versus-cool or light-versus-dark contrast doing the work?",
    "order": 23
  },
  {
    "id": "ac-col-3",
    "category": "artistic-colour",
    "text": "Does colour lead the eye to the focal point, not just decorate?",
    "order": 24
  },
  {
    "id": "ac-edg-1",
    "category": "artistic-edges",
    "text": "Are the hard edges placed where the shape changes and the soft ones where it melts?",
    "order": 25
  },
  {
    "id": "ac-edg-2",
    "category": "artistic-edges",
    "text": "Do the edge transitions read as deliberate, not accidental?",
    "order": 26
  },
  {
    "id": "ac-edg-3",
    "category": "artistic-edges",
    "text": "Is the silhouette edge crisp where we need a strong read and soft where we need distance?",
    "order": 27
  },
  {
    "id": "ac-comp-1",
    "category": "artistic-composition",
    "text": "Is there one clear focal point the eye lands on first?",
    "order": 28
  },
  {
    "id": "ac-comp-2",
    "category": "artistic-composition",
    "text": "Do the leading lines (walls, floor, props) pull toward that focal point?",
    "order": 29
  },
  {
    "id": "ac-comp-3",
    "category": "artistic-composition",
    "text": "Does everything in frame earn its place, with no clutter stealing the read?",
    "order": 30
  },
  {
    "id": "ac-val-1",
    "category": "artistic-value",
    "text": "Does the light-dark contrast carry the story before colour does?",
    "order": 31
  },
  {
    "id": "ac-val-2",
    "category": "artistic-value",
    "text": "Does the lighting motivate the space and the time of day?",
    "order": 32
  },
  {
    "id": "ac-val-3",
    "category": "artistic-value",
    "text": "Is the value separation strong enough to read at a glance, not just in the details?",
    "order": 33
  },
  {
    "id": "ac-res-1",
    "category": "artistic-research",
    "text": "Do we have real references for the forms, materials, and mood?",
    "order": 34
  },
  {
    "id": "ac-res-2",
    "category": "artistic-research",
    "text": "Can we point to a reference for the one choice we are least sure about?",
    "order": 35
  },
  {
    "id": "ac-res-3",
    "category": "artistic-research",
    "text": "Does the design reflect what the references teach, not just what looks good alone?",
    "order": 36
  },
  {
    "id": "ac-org-1",
    "category": "artistic-organization",
    "text": "Are the collections and objects named so the outliner tells the story?",
    "order": 37
  },
  {
    "id": "ac-org-2",
    "category": "artistic-organization",
    "text": "Is the file organized so a teammate (or future us) could open it and find the parts?",
    "order": 38
  },
  {
    "id": "ac-org-3",
    "category": "artistic-organization",
    "text": "Are the materials, lights, and camera named consistently with the scene?",
    "order": 39
  },
  {
    "id": "ac-env-1",
    "category": "artistic-environment",
    "text": "Skybox Template",
    "link": "#skybox-template",
    "order": 40
  }
],
  "artistic-checklist": [
  {
    "id": "ac-sil-1",
    "category": "silhouette",
    "text": "Does the main shape read clearly at a distance, before any colour or detail?",
    "order": 1
  },
  {
    "id": "ac-sil-2",
    "category": "silhouette",
    "text": "Is the outline distinctive, not a generic lump or box?",
    "order": 2
  },
  {
    "id": "ac-sil-3",
    "category": "silhouette",
    "text": "Does the negative space inside the silhouette feel intentional?",
    "order": 3
  },
  {
    "id": "ac-col-1",
    "category": "colour",
    "text": "Does our palette stay to a small, deliberate family of hues?",
    "order": 4
  },
  {
    "id": "ac-col-2",
    "category": "colour",
    "text": "Is there a clear warm-versus-cool or light-versus-dark contrast doing the work?",
    "order": 5
  },
  {
    "id": "ac-col-3",
    "category": "colour",
    "text": "Does colour lead the eye to the focal point, not just decorate?",
    "order": 6
  },
  {
    "id": "ac-edg-1",
    "category": "edges",
    "text": "Are the hard edges placed where the shape changes and the soft ones where it melts?",
    "order": 7
  },
  {
    "id": "ac-edg-2",
    "category": "edges",
    "text": "Do the edge transitions read as deliberate, not accidental?",
    "order": 8
  },
  {
    "id": "ac-edg-3",
    "category": "edges",
    "text": "Is the silhouette edge crisp where we need a strong read and soft where we need distance?",
    "order": 9
  },
  {
    "id": "ac-comp-1",
    "category": "composition",
    "text": "Is there one clear focal point the eye lands on first?",
    "order": 10
  },
  {
    "id": "ac-comp-2",
    "category": "composition",
    "text": "Do the leading lines (walls, floor, props) pull toward that focal point?",
    "order": 11
  },
  {
    "id": "ac-comp-3",
    "category": "composition",
    "text": "Does everything in frame earn its place, with no clutter stealing the read?",
    "order": 12
  },
  {
    "id": "ac-val-1",
    "category": "value",
    "text": "Does the light-dark contrast carry the story before colour does?",
    "order": 13
  },
  {
    "id": "ac-val-2",
    "category": "value",
    "text": "Does the lighting motivate the space and the time of day?",
    "order": 14
  },
  {
    "id": "ac-val-3",
    "category": "value",
    "text": "Is the value separation strong enough to read at a glance, not just in the details?",
    "order": 15
  },
  {
    "id": "ac-res-1",
    "category": "research",
    "text": "Do we have real references for the forms, materials, and mood?",
    "order": 16
  },
  {
    "id": "ac-res-2",
    "category": "research",
    "text": "Can we point to a reference for the one choice we are least sure about?",
    "order": 17
  },
  {
    "id": "ac-res-3",
    "category": "research",
    "text": "Does the design reflect what the references teach, not just what looks good alone?",
    "order": 18
  },
  {
    "id": "ac-org-1",
    "category": "organization",
    "text": "Are the collections and objects named so the outliner tells the story?",
    "order": 19
  },
  {
    "id": "ac-org-2",
    "category": "organization",
    "text": "Is the file organized so a teammate (or future us) could open it and find the parts?",
    "order": 20
  },
  {
    "id": "ac-org-3",
    "category": "organization",
    "text": "Are the materials, lights, and camera named consistently with the scene?",
    "order": 21
  },
  {
    "id": "ac-env-1",
    "category": "environment",
    "text": "Skybox Template",
    "link": "#skybox-template",
    "order": 22
  }
],
  "design-principles": [
  {
    "id": "dp-el-line",
    "category": "elements",
    "text": "Line: a mark with length and direction that guides the eye.",
    "environment": "Edges, wires, and leading lines in a 3D scene create the visual paths the viewer follows.",
    "order": 1
  },
  {
    "id": "dp-el-shape",
    "category": "elements",
    "text": "Shape: a flat, two-dimensional area with a distinct boundary.",
    "environment": "The flat faces and the silhouette of a form define its shape, the first thing the eye reads.",
    "order": 2
  },
  {
    "id": "dp-el-form",
    "category": "elements",
    "text": "Form: the three-dimensional mass that gives weight and volume.",
    "environment": "Blockout and massing build the form first; it carries the read before any surface is added.",
    "order": 3
  },
  {
    "id": "dp-el-value",
    "category": "elements",
    "text": "Value: the light-to-dark scale that carries the read before colour.",
    "environment": "Lighting and shadow set the value structure that makes a scene readable at a glance.",
    "order": 4
  },
  {
    "id": "dp-el-colour",
    "category": "elements",
    "text": "Colour: hue, saturation, and intensity used to separate, unify, or signal.",
    "environment": "The palette and accent hues steer attention and set the mood of the space.",
    "order": 5
  },
  {
    "id": "dp-el-texture",
    "category": "elements",
    "text": "Texture: surface quality that signals material, age, and wear.",
    "environment": "Materials and surface detail sell the physicality of an environment.",
    "order": 6
  },
  {
    "id": "dp-el-space",
    "category": "elements",
    "text": "Space: the area between and around forms, read through depth cues.",
    "environment": "Overlap, scale falloff, and atmospheric perspective create the sense of depth in a 3D scene.",
    "order": 7
  },
  {
    "id": "dp-pr-balance",
    "category": "principles",
    "text": "Balance: the distribution of visual weight so the frame feels intentional.",
    "environment": "Asymmetric versus symmetric massing and prop placement keep a composition feeling deliberate.",
    "order": 8
  },
  {
    "id": "dp-pr-contrast",
    "category": "principles",
    "text": "Contrast: the juxtaposition of opposites that creates tension and emphasis.",
    "environment": "Value, colour, scale, and texture contrast create the focal points that draw the eye.",
    "order": 9
  },
  {
    "id": "dp-pr-emphasis",
    "category": "principles",
    "text": "Emphasis: the single point where the eye lands first and longest.",
    "environment": "A hero element, a pool of light, or a colour accent anchors the scene's focal point.",
    "order": 10
  },
  {
    "id": "dp-pr-rhythm",
    "category": "principles",
    "text": "Rhythm: the repeated, patterned movement that leads the eye through the frame.",
    "environment": "Repeating arches, columns, or props create a visual beat the eye travels along.",
    "order": 11
  },
  {
    "id": "dp-pr-repetition",
    "category": "principles",
    "text": "Repetition: recurring shapes, colours, or motifs that create unity.",
    "environment": "Reusing a small set of forms and colours ties a whole environment together.",
    "order": 12
  },
  {
    "id": "dp-pr-scale",
    "category": "principles",
    "text": "Scale and Proportion: the relative size of parts to each other and to a body reference.",
    "environment": "Sizing a room against a mannequin and props against one another makes scale believable.",
    "order": 13
  },
  {
    "id": "dp-pr-unity",
    "category": "principles",
    "text": "Unity: the sense that all the parts belong to one coherent whole.",
    "environment": "A shared palette, light direction, and material family unify the scene into a single place.",
    "order": 14
  }
],
  downloads: [
  {
    "id": "mannequin",
    "title": "Mannequin Blender File",
    "description": "Temp link for the base mannequin model.",
    "url": "#mannequin-temp",
    "type": "blend"
  },
  {
    "id": "skybox",
    "title": "Skybox Blender File",
    "description": "Temp link for the skybox template.",
    "url": "#skybox-temp",
    "type": "blend"
  }
],
  "weekly-guides": {
  "wk-01": {
    "title": "Week 01: Foundations in Blender",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Creating & Editing Basic Shapes",
        "description": "Add primitive meshes and edit them in Edit Mode to build simple geometry. Every Blender scene starts with shapes.",
        "steps": [
          "Press Shift+A to open the Add menu in the 3D Viewport",
          "Select Mesh, then choose Cube, Sphere, Cylinder, or Plane",
          "Enter Edit Mode with Tab to select faces, edges, or vertices",
          "Extrude faces with E, then click to confirm the direction and length",
          "Use Ctrl+R to add loop cuts for extra geometry detail",
          "Press I to inset selected faces for clean, flush paneling",
          "Return to Object Mode with Tab to place and scale the shape"
        ],
        "hotkeys": [
          {
            "key": "Shift+A",
            "action": "Open the Add menu to insert new objects",
            "imageUrl": "",
            "description": "The single most-used shortcut in Blender"
          },
          {
            "key": "Tab",
            "action": "Toggle between Object Mode and Edit Mode",
            "imageUrl": "",
            "description": "Required before editing individual mesh elements"
          },
          {
            "key": "E",
            "action": "Extrude the selected geometry",
            "imageUrl": "",
            "description": "Pulls new faces outward from selected elements"
          },
          {
            "key": "Ctrl+R",
            "action": "Add a loop cut",
            "imageUrl": "",
            "description": "Inserts an edge loop for extra topology"
          },
          {
            "key": "I",
            "action": "Inset selected faces",
            "imageUrl": "",
            "description": "Creates smaller, parallel faces inside the selection"
          }
        ],
        "expectations": "The teacher expects a scene with at least two distinct primitive shapes, each edited in Edit Mode to show extrusions and loop cuts. Geometry should be clean without overlapping or non-manifold edges."
      },
      {
        "id": "materials",
        "title": "Creating Basic Materials",
        "description": "Assign colour, roughness, and metalness to surfaces using the Shader Editor and Material Properties panel.",
        "steps": [
          "Open the Shader Editor workspace or use the Material Properties tab",
          "Click New under the Material section to create a material slot",
          "Set the Base Colour picker to a visible, contrasting colour",
          "Adjust Roughness (0 = mirror, 1 = fully matte) and Metallic (0 = dielectric, 1 = metal)",
          "Enter Edit Mode, select faces, then click Assign in the material slot",
          "Switch Viewport Shading to Material Preview (Z key) to see the result live"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle Viewport Shading modes",
            "imageUrl": "",
            "description": "Use Material Preview to see colour and roughness"
          },
          {
            "key": "N",
            "action": "Toggle the side panel (Material tab on right)",
            "imageUrl": "",
            "description": "Quickly access material settings without switching workspace"
          }
        ],
        "expectations": "Each shape should carry at least one named material with a clearly chosen colour. The teacher checks for intentional roughness and metallic values, not just defaults. Material Preview mode must be demonstrated during the lesson."
      },
      {
        "id": "lighting",
        "title": "Lighting Your Scene",
        "description": "Add and position lights so your shapes are readable, dimensional, and visually interesting.",
        "steps": [
          "Press Shift+A > Light > Area Light or Sun Light",
          "Position the light above and slightly in front of your geometry",
          "Open Light Properties and set Colour to a warm or cool tone",
          "Adjust Power (Watts) so highlights are visible but not blown out",
          "Add a second fill light on the opposite side at lower power for depth",
          "Toggle World Properties to set a subtle background or HDRI"
        ],
        "hotkeys": [
          {
            "key": "Shift+A",
            "action": "Add a new light object",
            "imageUrl": "",
            "description": "Opens the same Add menu used for meshes"
          }
        ],
        "expectations": "The teacher looks for a key/fill two-light setup with deliberate colour choices. Shadows should read clearly. Overexposed or flat lighting will be flagged."
      },
      {
        "id": "framing",
        "title": "Framing & Camera Setup",
        "description": "Place a camera to compose a deliberate shot rather than relying on the default viewport view.",
        "steps": [
          "Shift+A > Camera to add a camera object to the scene",
          "Move and rotate the camera to frame your shapes nicely",
          "Press Ctrl+Alt+Numpad 0 to make your camera the active camera",
          "Press Numpad 0 to view through the camera",
          "Press Numpad . to frame the selection in the current view",
          "In Camera Properties, enable Camera Border to check safe framing"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "View through the active camera",
            "imageUrl": "",
            "description": "Essential for checking your final composition"
          },
          {
            "key": "Numpad .",
            "action": "Frame the selection",
            "imageUrl": "",
            "description": "Quickly recenters the viewport on selected objects"
          },
          {
            "key": "Ctrl+Alt+Numpad 0",
            "action": "Assign selected camera as active",
            "imageUrl": "",
            "description": "Required step before rendering"
          }
        ],
        "expectations": "The teacher expects a deliberate camera angle that shows the shapes clearly. The camera border should be used to verify framing. Composition should avoid extreme cropping or awkward dead space."
      },
      {
        "id": "rendering",
        "title": "Rendering Your Scene",
        "description": "Produce a final still image using the active camera and save it to disk.",
        "steps": [
          "Ensure a camera is assigned as active (Ctrl+Alt+Numpad 0)",
          "Open Render Properties and confirm the engine (Eevee or Cycles)",
          "Set output resolution (1920x1080 is a good starting point)",
          "Press F12 to render the still image",
          "In the Image Editor that opens, click Image > Save As",
          "Name the file with your name and week number, save as PNG or JPEG"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render the current frame",
            "imageUrl": "",
            "description": "Produces a high-quality still from the active camera"
          },
          {
            "key": "Ctrl+F12",
            "action": "Render an animation sequence",
            "imageUrl": "",
            "description": "Not needed for Week 01, but good to know"
          }
        ],
        "expectations": "A clean, readable render is expected. The teacher checks that lighting, materials, and framing all appear correctly in the final image. The file must be saved and submitted."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "The essential keyboard shortcuts every Seneca 3D student should memorise in Week 01.",
        "steps": [
          "Memorise the top three: Shift+A, Tab, and G/R/S (grab, rotate, scale)",
          "Use Z to cycle shading modes for checking your work",
          "Press / (Numpad Slash) to isolate the selection in Local View",
          "Press Alt+A to unhide everything if objects go missing",
          "Practice these until they feel automatic before Week 02"
        ],
        "hotkeys": [
          {
            "key": "G / R / S",
            "action": "Grab (move), Rotate, Scale",
            "imageUrl": "",
            "description": "The three fundamental transform tools"
          },
          {
            "key": "Shift+D",
            "action": "Duplicate selected object",
            "imageUrl": "",
            "description": "Faster than Shift+D from the Add menu"
          },
          {
            "key": "Alt+A",
            "action": "Unhide all objects",
            "imageUrl": "",
            "description": "Recovers hidden geometry quickly"
          },
          {
            "key": "/",
            "action": "Toggle Local View",
            "imageUrl": "",
            "description": "Isolates the selection for focused editing"
          }
        ],
        "expectations": "The teacher expects students to use shortcuts naturally during the lesson, not mouse-click everything. Slow, deliberate mouse navigation will be noted as an area for improvement."
      }
    ]
  },
  "wk-02": {
    "title": "Week 02: Blockout, Scale & Shape Hierarchy",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Blocking the Environment",
        "description": "Block one environment in three variations using only large, medium, and small volumes. No detail, no textures. The mannequin file drops in as the scale anchor.",
        "steps": [
          "Pick a theme and its three location types from the lesson brief",
          "Drop the mannequin or a 1.7-meter stand-in as the scale reference",
          "Block large volumes: walls, floor, the big shapes of the space",
          "Block medium volumes: desks, columns, plinths, shelves",
          "Place one small object at the focal point to give the eye a landing spot",
          "Test scale by moving the anchor closer, farther, and to the center",
          "Cut one competitor that steals the eye from the focal point",
          "Save as a-environment_wk2-a1.blend with clean collections"
        ],
        "hotkeys": [
          {
            "key": "Shift+D",
            "action": "Duplicate to block repeating elements",
            "imageUrl": "",
            "description": "Fast way to add columns, shelves, or repeated props"
          },
          {
            "key": "S",
            "action": "Scale selected objects",
            "imageUrl": "",
            "description": "Resize walls, props, or the anchor to test proportions"
          },
          {
            "key": "M",
            "action": "Move selected items to a collection",
            "imageUrl": "",
            "description": "Keep large, medium, and small volumes organized"
          },
          {
            "key": "Ctrl+A",
            "action": "Apply transforms",
            "imageUrl": "",
            "description": "Lock in scale and rotation before moving on"
          }
        ],
        "expectations": "The teacher expects three variations of one environment, each with a scale anchor, a named focal point, a clear hierarchy of large-medium-small volumes, and one competitor cut."
      },
      {
        "id": "materials",
        "title": "Material Placeholders for Blockout",
        "description": "Assign simple colours to block volumes so the value contrast at the focal point reads during the study stage. No textures yet.",
        "steps": [
          "Create three material slots: one for the focal point, one for the background, one for the midground",
          "Set base colour to establish value contrast: brightest or darkest on the focal point",
          "Leave roughness at the default for now; textures arrive next week",
          "Switch to Material Preview (Z) to verify the value read"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle to Material Preview",
            "imageUrl": "",
            "description": "Verify value contrast without rendering"
          },
          {
            "key": "N",
            "action": "Open side panel for material assignment",
            "imageUrl": "",
            "description": "Quick access to the Material Properties tab"
          }
        ],
        "expectations": "Materials should be simple colour placeholders that establish value contrast. The teacher checks that the focal point is the strongest value in each variation."
      },
      {
        "id": "lighting",
        "title": "Designing for Light",
        "description": "This week we do not light the scene yet, but we shape geometry so next week's light lands on purpose. Think about which surfaces will catch or throw cast shadows.",
        "steps": [
          "Review the Starter Scene light rig and note where the key light will sit",
          "Shape edges and planes that will catch cast shadows when the key arrives",
          "Keep surfaces simple; the light will carve the detail next week",
          "If a surface feels too flat, add a subtle bevel or depth break now"
        ],
        "hotkeys": [
          {
            "key": "Shift+A > Light",
            "action": "Temporarily add a test light",
            "imageUrl": "",
            "description": "Preview how the blockout will react to a key light"
          }
        ],
        "expectations": "The teacher looks for blockout geometry that is designed to react to light. Surfaces that are all flat or all detailed will be flagged. The blockout should be a stage ready for light."
      },
      {
        "id": "framing",
        "title": "Camera for the Blockout Check",
        "description": "Place a camera to check whether the eye path in each variation leads clearly to the focal point.",
        "steps": [
          "Add a camera and frame it to show the focal point in each variation",
          "Use Numpad 0 to view through the camera and check composition",
          "Verify the focal point sits in a strong position within the frame",
          "Use Numpad . to reframe if the focal point is cut off"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "View through the active camera",
            "imageUrl": "",
            "description": "Check how the blockout reads from the camera angle"
          },
          {
            "key": "Ctrl+Alt+Numpad 0",
            "action": "Set active camera",
            "imageUrl": "",
            "description": "Assign the camera before checking the frame"
          }
        ],
        "expectations": "The teacher expects each variation to be checked from a camera angle that shows the eye path clearly. The focal point should be legible and well-placed in the frame."
      },
      {
        "id": "rendering",
        "title": "Blockout Check Render",
        "description": "Quick renders to verify the blockout reads before Checkpoint A1.",
        "steps": [
          "Press F12 for a quick EEVEE render of each variation",
          "Check that the focal point reads in all three variations",
          "Save the file with clean collections and no orphans",
          "Submit by Wednesday for Checkpoint A1 review"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render current frame",
            "imageUrl": "",
            "description": "Quick check of how each variation reads"
          }
        ],
        "expectations": "A blockout render that shows three distinct variations, each with a readable focal point and clear scale. Rough is fine; the decisions must be clear."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Essential shortcuts for blocking environments efficiently.",
        "steps": [
          "Use G/R/S to position and scale block volumes quickly",
          "Press Shift+D to duplicate repeating elements like shelves or columns",
          "Use M to sort objects into large, medium, and small collections",
          "Press Ctrl+A to apply transforms before moving to the next variation",
          "Practice these until the blockout feels fast, not fussy"
        ],
        "hotkeys": [
          {
            "key": "G / R / S",
            "action": "Grab, Rotate, Scale",
            "imageUrl": "",
            "description": "Position block volumes without the transform gizmo"
          },
          {
            "key": "Shift+D",
            "action": "Duplicate selected object",
            "imageUrl": "",
            "description": "Fast repetition for columns, shelves, props"
          },
          {
            "key": "M",
            "action": "Move to collection",
            "imageUrl": "",
            "description": "Organize by volume size"
          },
          {
            "key": "Ctrl+A",
            "action": "Apply all transforms",
            "imageUrl": "",
            "description": "Lock in position before continuing"
          },
          {
            "key": "/",
            "action": "Toggle Local View",
            "imageUrl": "",
            "description": "Isolate a variation for focused blocking"
          }
        ],
        "expectations": "The teacher expects students to navigate the blockout workflow with shortcuts, not mouse clicks. File organization using collections will be noted."
      }
    ]
  },
  "wk-03": {
    "title": "Week 03: Lighting, Materials & Skyboxes",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Reviewing the Blockout",
        "description": "The blockout is already set. This week we review it under light, material, and sky to confirm the shapes carve correctly.",
        "steps": [
          "Open the A1 blockout file from Week 02",
          "Confirm the focal point is still legible in each variation",
          "If a shape reads flat under light, note it for the details week",
          "Do not model new geometry this week; the blockout is locked"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle shading modes",
            "imageUrl": "",
            "description": "Check solid vs material preview vs rendered"
          }
        ],
        "expectations": "The teacher expects the blockout to survive the lighting pass. If a shape reads flat, it is noted for Week 04. No new geometry is added this week."
      },
      {
        "id": "materials",
        "title": "Principled BSDF Materials & Colour Palette",
        "description": "Set base colour and roughness on surfaces using the three-layer palette: Central colour, Secondary colour, and Accent colour.",
        "steps": [
          "Open the Principled BSDF in the Shader Editor",
          "Set the Central colour on the majority of surfaces to establish mood",
          "Set the Secondary colour on midground elements to separate depth",
          "Set the Accent colour on the focal point to draw the eye",
          "Adjust roughness: high for worn surfaces, low for clean ones",
          "Check in Material Preview (Z) that the palette reads"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle to Material Preview",
            "imageUrl": "",
            "description": "Verify palette read without full render"
          },
          {
            "key": "N",
            "action": "Open side panel",
            "imageUrl": "",
            "description": "Access Principled BSDF sliders quickly"
          }
        ],
        "expectations": "Each variation should carry a coherent three-layer palette. The teacher checks that Central, Secondary, and Accent colours agree with the theme and serve the focal point."
      },
      {
        "id": "lighting",
        "title": "The Three-Lamp Rig",
        "description": "Place a key light, a fill light, and a rim light to carve the blockout shapes and make the focal point read.",
        "steps": [
          "Place the key light aimed at the focal point, at an angle to cast shape shadows",
          "Place the fill light on the opposite side at lower intensity",
          "Place the rim light behind and above to separate the subject from the background",
          "Check that shadows fall with depth, not flatly",
          "Move the key, not the camera, if the focal point disappears"
        ],
        "hotkeys": [
          {
            "key": "Shift+A > Light",
            "action": "Add a lamp",
            "imageUrl": "",
            "description": "Insert key, fill, or rim lights"
          },
          {
            "key": "G / R / S",
            "action": "Position and aim lights",
            "imageUrl": "",
            "description": "Adjust light placement without the gizmo"
          }
        ],
        "expectations": "A deliberate three-lamp rig with the key light carving the focal point. The teacher checks for shadow depth, not just brightness. Flat or overexposed lighting will be flagged."
      },
      {
        "id": "framing",
        "title": "Camera & Composition Check",
        "description": "Frame the lit variation to confirm the read holds from the camera angle.",
        "steps": [
          "View through the camera (Numpad 0) and check the focal point",
          "Verify the lighting read works through the lens",
          "Adjust the camera position if the focal point is cropped or lost",
          "Enable Camera Border in Camera Properties to check safe framing"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check the final read from the camera"
          },
          {
            "key": "Numpad .",
            "action": "Frame selection",
            "imageUrl": "",
            "description": "Recenter on the focal point"
          }
        ],
        "expectations": "The teacher expects the focal point to read clearly through the camera lens. The composition should show depth created by the three-lamp rig."
      },
      {
        "id": "rendering",
        "title": "Render & Check the Read",
        "description": "Render one fully set-up variation to confirm the read before Checkpoint A1.",
        "steps": [
          "Render with EEVEE for speed or Cycles for quality",
          "Check that the focal point reads, the material agrees with the light, and the sky agrees with the scene",
          "If one thing is wrong, adjust it and re-render",
          "Save as a-environment_wk3-a1.blend"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce the checkpoint render"
          }
        ],
        "expectations": "One fully set-up variation that reads as a place, not shapes in a gray void. The teacher checks lighting, materials, and skybox coherence."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Essential shortcuts for lighting and material workflow.",
        "steps": [
          "Use Shift+A to add lights quickly",
          "Use G/R/S to position and aim lamps without the gizmo",
          "Press Z to cycle shading modes and check the material read",
          "Press F12 for quick renders during setup",
          "Press N to open the side panel for light and material properties"
        ],
        "hotkeys": [
          {
            "key": "Shift+A",
            "action": "Add menu",
            "imageUrl": "",
            "description": "Insert lights and other objects"
          },
          {
            "key": "Z",
            "action": "Cycle shading modes",
            "imageUrl": "",
            "description": "Toggle between solid, material preview, and rendered"
          },
          {
            "key": "N",
            "action": "Toggle side panel",
            "imageUrl": "",
            "description": "Quick access to properties"
          },
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Check the final read"
          }
        ],
        "expectations": "The teacher expects students to iterate quickly using shading modes and render checks. Slow workflow will be noted."
      }
    ]
  },
  "wk-04": {
    "title": "Week 04: Details, Variations & Lighting Impressions",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Adding Quick Details",
        "description": "Add three small details to the Project A winner where the eye needs something to lock onto. Small edges, not big props.",
        "steps": [
          "Identify three flat surfaces in the winner that need an edge to lock onto",
          "Model a ledge on a flat wall, a seam on a flat floor, or depth in a flat corner",
          "Think about what props belong to the chosen timeframe",
          "Render after each detail to confirm it earns its spot",
          "Keep details small; a bevel or bump often does more work than a new prop"
        ],
        "hotkeys": [
          {
            "key": "E",
            "action": "Extrude to add detail geometry",
            "imageUrl": "",
            "description": "Pull new faces for ledges, seams, or depth breaks"
          },
          {
            "key": "Ctrl+B",
            "action": "Bevel selected edges",
            "imageUrl": "",
            "description": "Add subtle edge detail quickly"
          },
          {
            "key": "I",
            "action": "Inset faces",
            "imageUrl": "",
            "description": "Create flush paneling or surface breaks"
          }
        ],
        "expectations": "Three details added that land where the eye is already looking. The teacher checks that each detail does work, not just decoration."
      },
      {
        "id": "materials",
        "title": "Material Consistency Check",
        "description": "Verify that the material palette still holds after details are added. No new materials are needed unless a detail demands one.",
        "steps": [
          "Check that new details carry the existing material palette",
          "If a detail needs a different roughness, adjust the Principled BSDF",
          "Confirm the Central/Secondary/Accent colour system is intact"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Material Preview",
            "imageUrl": "",
            "description": "Quick check of material read"
          }
        ],
        "expectations": "The teacher expects the material palette to remain coherent. New details should not introduce palette chaos."
      },
      {
        "id": "lighting",
        "title": "Lighting Impressions: Angling for Shape",
        "description": "Move the key light to graze surfaces, check shadows, and confirm objects earn their shape through light angles, not brightness.",
        "steps": [
          "Move the key light until it grazes a surface and casts a shape shadow",
          "Adjust the fill to lift one corner the key left dark",
          "Pull the rim until a form separates from the background",
          "Render after each move to check the shape read",
          "The key grazes, the fill lifts, the rim separates: three moves, three jobs"
        ],
        "hotkeys": [
          {
            "key": "G / R",
            "action": "Position and rotate the key light",
            "imageUrl": "",
            "description": "Angle the light for grazing shadows"
          },
          {
            "key": "N",
            "action": "Side panel for light power",
            "imageUrl": "",
            "description": "Adjust fill and rim intensity"
          }
        ],
        "expectations": "Lighting that shapes objects through angle, not just brightness. The teacher checks for grazing shadows, lifted corners, and rim separation."
      },
      {
        "id": "framing",
        "title": "Testing a Variation",
        "description": "Shift the key light thirty degrees, move the camera, or shift the palette to test whether the focal point survives.",
        "steps": [
          "Shift the key light thirty degrees and render",
          "Check whether the focal point stays strong or vanishes",
          "If it survives, the hierarchy is real. If not, reinforce it",
          "Save both the base and the variation with separate names"
        ],
        "hotkeys": [
          {
            "key": "Shift+D",
            "action": "Duplicate the light to test a new angle",
            "imageUrl": "",
            "description": "Quick comparison of two light setups"
          },
          {
            "key": "F12",
            "action": "Render the variation",
            "imageUrl": "",
            "description": "Check the survival of the focal point"
          }
        ],
        "expectations": "A variation that proves the hierarchy is real, not lucky. The teacher checks that the focal point survives the shifted setup."
      },
      {
        "id": "rendering",
        "title": "Render Both Passes",
        "description": "Render the details pass and the variation pass to confirm both reads.",
        "steps": [
          "Render the details pass with EEVEE or Cycles",
          "Render the variation pass",
          "Compare the two: does the focal point hold in both?",
          "Save as a-environment_wk4-details.blend and a-environment_wk4-variation.blend"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce both passes"
          }
        ],
        "expectations": "Two renders showing the scene before and after the variation. The teacher checks that the hierarchy survives the test."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for detail modeling and lighting iteration.",
        "steps": [
          "Use E to extrude detail geometry",
          "Use Ctrl+B for quick bevels on edges",
          "Use G/R to angle lights for grazing shadows",
          "Use Shift+D to duplicate lights for comparison",
          "Use F12 to render after every move"
        ],
        "hotkeys": [
          {
            "key": "E",
            "action": "Extrude",
            "imageUrl": "",
            "description": "Add detail geometry"
          },
          {
            "key": "Ctrl+B",
            "action": "Bevel",
            "imageUrl": "",
            "description": "Quick edge detail"
          },
          {
            "key": "G / R",
            "action": "Position and rotate",
            "imageUrl": "",
            "description": "Angle lights"
          },
          {
            "key": "Shift+D",
            "action": "Duplicate",
            "imageUrl": "",
            "description": "Compare light setups"
          }
        ],
        "expectations": "The teacher expects rapid iteration between detail placement, light angling, and render checks."
      }
    ]
  },
  "wk-05": {
    "title": "Week 05: Project B Kickoff - The Funpack & Turnaround",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Blocking a Subject in Three Views",
        "description": "Pick a character or prop and block its volumes from front, side, and back. The subject must hold together as a sculpture, not just a picture.",
        "steps": [
          "Write the one-sentence what it is about",
          "Block volumes: head, mass, base using simple primitives",
          "Build the front view, then turn it to check the side and back",
          "Fix the volume, not the surface, if the side or back reads weak",
          "Check the overall silhouette at each of the three views",
          "Start one expression or variant",
          "Save as b-subject_wk5-b1.blend"
        ],
        "hotkeys": [
          {
            "key": "Shift+A > Mesh",
            "action": "Add primitives for blocking",
            "imageUrl": "",
            "description": "Insert cubes, spheres, and cylinders for volumes"
          },
          {
            "key": "Tab",
            "action": "Toggle Edit Mode",
            "imageUrl": "",
            "description": "Edit individual mesh volumes"
          },
          {
            "key": "S",
            "action": "Scale volumes",
            "imageUrl": "",
            "description": "Resize head, mass, and base proportions"
          },
          {
            "key": "/",
            "action": "Toggle Local View",
            "imageUrl": "",
            "description": "Isolate the subject for focused blocking"
          },
          {
            "key": "Ctrl+Numpad 1/3/7",
            "action": "Snap to front, side, top views",
            "imageUrl": "",
            "description": "Check each view accurately"
          }
        ],
        "expectations": "A subject blocked into a three-view turnaround with a legible silhouette from every angle. The teacher checks that the side and back are built, not guessed."
      },
      {
        "id": "materials",
        "title": "Material Placeholders for the Subject",
        "description": "Assign simple colours to the subject volumes so the silhouette reads in the viewport. No textures yet.",
        "steps": [
          "Create one material slot for the subject",
          "Set a base colour that contrasts with the background",
          "Set a moderate roughness so the viewport read is clear",
          "Switch to Material Preview to confirm the silhouette"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Material Preview",
            "imageUrl": "",
            "description": "Check silhouette read"
          }
        ],
        "expectations": "A simple material that makes the subject legible in the viewport. The teacher checks contrast against the background."
      },
      {
        "id": "lighting",
        "title": "Basic Subject Lighting",
        "description": "Set a simple three-lamp rig on the subject so the volumes read clearly for the turnaround.",
        "steps": [
          "Place a key light to illuminate the front volume",
          "Place a fill light on the opposite side",
          "Place a rim light behind to separate from the background",
          "Check that all three views read clearly under the rig"
        ],
        "hotkeys": [
          {
            "key": "Shift+A > Light",
            "action": "Add lamps",
            "imageUrl": "",
            "description": "Insert the three-lamp rig"
          }
        ],
        "expectations": "A lighting rig that makes the subject volumes readable from all three views. The teacher checks for clear separation of head, mass, and base."
      },
      {
        "id": "framing",
        "title": "Three-View Camera Setup",
        "description": "Set up the camera to frame the subject for the three-view sheet: front, side, and back.",
        "steps": [
          "Frame the front view with the camera centered on the subject",
          "Check the side and back views through the camera or viewport snaps",
          "Verify the silhouette reads as one shape in each view",
          "Use Numpad 1, 3, 7 to snap between views"
        ],
        "hotkeys": [
          {
            "key": "Ctrl+Numpad 1/3/7",
            "action": "Snap to front/side/top",
            "imageUrl": "",
            "description": "Check views accurately"
          },
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check the turnaround frame"
          }
        ],
        "expectations": "Three camera views showing the subject as a legible sculpture. The teacher checks silhouette clarity at each angle."
      },
      {
        "id": "rendering",
        "title": "Turnaround Render",
        "description": "Render the three-view sheet and the started variant for Checkpoint B1.",
        "steps": [
          "Render the front, side, and back views",
          "Render the one started expression or variant",
          "Check that the silhouette holds across all views",
          "Save the file cleanly for B1 on Wednesday"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce turnaround renders"
          }
        ],
        "expectations": "A three-view sheet showing the subject from every angle, plus one started variant. The teacher checks volume decisions, not surface polish."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for subject blocking and three-view workflow.",
        "steps": [
          "Use Shift+A to add primitive volumes",
          "Use Tab to toggle Edit Mode for volume shaping",
          "Use Ctrl+Numpad 1/3/7 to snap between views",
          "Use / to isolate the subject in Local View",
          "Use Ctrl+A to apply transforms on each volume"
        ],
        "hotkeys": [
          {
            "key": "Shift+A",
            "action": "Add primitives",
            "imageUrl": "",
            "description": "Block volumes quickly"
          },
          {
            "key": "Tab",
            "action": "Edit Mode",
            "imageUrl": "",
            "description": "Shape individual volumes"
          },
          {
            "key": "Ctrl+Numpad 1/3/7",
            "action": "Snap to views",
            "imageUrl": "",
            "description": "Front, side, top accuracy"
          },
          {
            "key": "/",
            "action": "Local View",
            "imageUrl": "",
            "description": "Isolate the subject"
          },
          {
            "key": "Ctrl+A",
            "action": "Apply transforms",
            "imageUrl": "",
            "description": "Lock in volume decisions"
          }
        ],
        "expectations": "The teacher expects efficient use of view snapping and local view during the blockout workflow."
      }
    ]
  },
  "wk-06": {
    "title": "Week 06: Expression, Variants & Silhouette Check",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Building Expressions on the Volume",
        "description": "Give the B1 subject a chosen expression and two or three variants. Build the face on the volume, not on top of it.",
        "steps": [
          "Re-read the one-sentence what it is about",
          "Build the chosen expression that serves the beat",
          "Make two or three real variants, not nudges of the first",
          "Each variant must be a choice we could have shipped",
          "Build on the existing volume; if the face feels pasted on, fix the volume underneath"
        ],
        "hotkeys": [
          {
            "key": "Tab",
            "action": "Edit Mode",
            "imageUrl": "",
            "description": "Shape the face on the volume"
          },
          {
            "key": "E",
            "action": "Extrude for expression detail",
            "imageUrl": "",
            "description": "Pull new geometry for mouth or eye shapes"
          },
          {
            "key": "G / R / S",
            "action": "Position, rotate, scale facial features",
            "imageUrl": "",
            "description": "Adjust expression without adding geometry"
          }
        ],
        "expectations": "A chosen expression plus two or three real variants, each serving the one-sentence about. The teacher checks that the face is built on the volume."
      },
      {
        "id": "materials",
        "title": "Material Consistency Across Variants",
        "description": "Ensure the material read holds across all expression variants.",
        "steps": [
          "Check that each variant reads with the same material palette",
          "If the expression changes the volume shape, verify the material still agrees",
          "No new materials needed unless a variant demands it"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Material Preview",
            "imageUrl": "",
            "description": "Quick check across variants"
          }
        ],
        "expectations": "The teacher checks that all variants carry a consistent material read. Inconsistency will be flagged."
      },
      {
        "id": "lighting",
        "title": "Lighting the Face",
        "description": "Verify the three-lamp rig still reads the face correctly across all variants.",
        "steps": [
          "Check the key light on each expression variant",
          "Adjust the fill if a variant creates new shadows that hide the face",
          "Check the rim still separates the subject from the background"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Adjust light properties quickly"
          }
        ],
        "expectations": "Lighting that reads every variant clearly. The teacher checks for shadow depth on the face without overexposure."
      },
      {
        "id": "framing",
        "title": "Silhouette Check",
        "description": "Turn each variant to the side, squint, and read the outer shape. The face must not change what the subject is.",
        "steps": [
          "Turn each variant to the side view",
          "Squint and read the outer shape as one shape",
          "If the face changed the subject, pull the face back until the silhouette carries again",
          "Label each variant in the file"
        ],
        "hotkeys": [
          {
            "key": "Ctrl+Numpad 3",
            "action": "Side view",
            "imageUrl": "",
            "description": "Check silhouette from the side"
          },
          {
            "key": "Z > B",
            "action": "Wireframe overlay",
            "imageUrl": "",
            "description": "Check silhouette against the wireframe"
          }
        ],
        "expectations": "A silhouette check passed on every variant. The teacher checks that the outer shape still reads as the subject, not the face."
      },
      {
        "id": "rendering",
        "title": "Render the Expression Sheet",
        "description": "Render each variant for Checkpoint B2.",
        "steps": [
          "Render the chosen expression and all variants",
          "Check each render for silhouette legibility",
          "Save the one-sentence why this one for each variant",
          "Save as b-subject_wk6-b2.blend"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce expression renders"
          }
        ],
        "expectations": "An expression sheet with a chosen face and two or three real variants. The teacher checks decision quality, not polish."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for expression and variant workflow.",
        "steps": [
          "Use Tab to enter Edit Mode for face shaping",
          "Use E to extrude expression detail",
          "Use Ctrl+Numpad 3 to check the side silhouette",
          "Use Shift+D to duplicate a variant and modify it",
          "Use Z to cycle shading modes and check the read"
        ],
        "hotkeys": [
          {
            "key": "Tab",
            "action": "Edit Mode",
            "imageUrl": "",
            "description": "Shape expressions"
          },
          {
            "key": "E",
            "action": "Extrude",
            "imageUrl": "",
            "description": "Add facial detail"
          },
          {
            "key": "Ctrl+Numpad 3",
            "action": "Side view",
            "imageUrl": "",
            "description": "Silhouette check"
          },
          {
            "key": "Shift+D",
            "action": "Duplicate variant",
            "imageUrl": "",
            "description": "Start a new variant"
          }
        ],
        "expectations": "The teacher expects efficient variant creation and silhouette checking using shortcuts."
      }
    ]
  },
  "wk-07": {
    "title": "Week 07: Materials & Day/Night Heroes",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Subject Geometry Review",
        "description": "The subject geometry is locked. This week we verify it reads under genuinely different light.",
        "steps": [
          "Open the B2 subject file",
          "Verify the chosen expression and silhouette hold",
          "No new geometry this week; the focus is material and light",
          "If a surface reads flat under the new light, note it for polish week"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle shading modes",
            "imageUrl": "",
            "description": "Verify geometry read"
          }
        ],
        "expectations": "The subject geometry is locked. The teacher checks that it survives the material and light changes without needing new geometry."
      },
      {
        "id": "materials",
        "title": "Principled BSDF Material Direction",
        "description": "Set base colour and roughness to serve the one-sentence about. One or two directions, not five.",
        "steps": [
          "Re-read the one-sentence what it is about",
          "In the Principled BSDF, set base colour and roughness to serve the sentence",
          "If the sentence says lived-in, use rough, tarnished materials",
          "If it says new, use smooth, clean materials",
          "Test the material direction against both day and night lights"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Access Principled BSDF sliders"
          },
          {
            "key": "Z",
            "action": "Material Preview",
            "imageUrl": "",
            "description": "Quick material check"
          }
        ],
        "expectations": "A material direction that serves the one-sentence about. The teacher checks for intentional roughness and base colour choices."
      },
      {
        "id": "lighting",
        "title": "Day/Night Hero Pair",
        "description": "Render two heroes: a warm wide day hero and a cool tight night hero. The night hero is the proof of portability.",
        "steps": [
          "Set the day hero: warm key, soft fill, gentle rim",
          "Render the day hero and check the 1-2-3 read",
          "Set the night hero: cool key, tight fill, strong rim",
          "Render the night hero and check the focal part under the rim",
          "If the focal part vanishes at night, the material is doing the silhouette job; fix it"
        ],
        "hotkeys": [
          {
            "key": "Shift+D",
            "action": "Duplicate the light setup",
            "imageUrl": "",
            "description": "Quick switch between day and night rigs"
          },
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Adjust colour temperature and power"
          }
        ],
        "expectations": "Two genuinely different hero renders. The teacher checks that the subject reads as the same subject in both day and night."
      },
      {
        "id": "framing",
        "title": "Camera Framing for Heroes",
        "description": "Frame each hero to show the subject clearly against the background.",
        "steps": [
          "Frame the day hero to show the subject in its home light",
          "Frame the night hero to show the subject under the rim",
          "Use Numpad 0 to verify the read through the camera",
          "Check that the subject separates from the background in both"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check hero framing"
          },
          {
            "key": "Numpad .",
            "action": "Frame selection",
            "imageUrl": "",
            "description": "Recenter on the subject"
          }
        ],
        "expectations": "Hero framing that shows the subject clearly in both day and night. The teacher checks separation from the background."
      },
      {
        "id": "rendering",
        "title": "Final Hero Renders",
        "description": "Render the day and night heroes with Cycles or clean EEVEE.",
        "steps": [
          "Set the render engine to Cycles for quality or EEVEE for speed",
          "Render the day hero at full resolution",
          "Render the night hero at full resolution",
          "Check both renders for the 1-2-3 read and rim separation",
          "Save as b-subject_wk7-heroes.blend with day and night labeled"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce final hero renders"
          }
        ],
        "expectations": "Two hero renders that prove the subject is portable. The teacher checks that the subject reads the same in both."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for material and hero render workflow.",
        "steps": [
          "Use N to open the side panel for material and light settings",
          "Use Shift+D to duplicate light rigs for day/night comparison",
          "Use Z to cycle shading modes during material setup",
          "Use F12 for quick render checks",
          "Use G/R/S to fine-tune light placement"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Quick property access"
          },
          {
            "key": "Shift+D",
            "action": "Duplicate",
            "imageUrl": "",
            "description": "Copy light rigs"
          },
          {
            "key": "Z",
            "action": "Cycle shading",
            "imageUrl": "",
            "description": "Check material read"
          },
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Check hero passes"
          }
        ],
        "expectations": "The teacher expects efficient iteration between material setup, lighting changes, and render checks."
      }
    ]
  },
  "wk-08": {
    "title": "Week 08: Self-Directed Review & Polish",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Reviewing All Projects",
        "description": "No new geometry this week. Open all project files and review shapes, silhouettes, and volume decisions.",
        "steps": [
          "Open the Project A environment file and check the blockout shapes",
          "Open the Project B subject file and check the volume and expression",
          "If a shape reads weak, note it for the polish pass",
          "No new modeling; the focus is review and cleanup"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle shading modes",
            "imageUrl": "",
            "description": "Review shapes in solid and wireframe"
          }
        ],
        "expectations": "A honest review of all projects. The teacher checks that the student identifies weak shapes and plans for them."
      },
      {
        "id": "materials",
        "title": "Material Cleanup",
        "description": "Review all material slots and remove unused ones. Check that each project carries a consistent palette.",
        "steps": [
          "Remove unused materials from all project files",
          "Check that the palette is consistent across each project",
          "Label materials clearly if they are not already"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Access material list"
          }
        ],
        "expectations": "Clean material slots with no unused entries. The teacher checks for file hygiene."
      },
      {
        "id": "lighting",
        "title": "Lighting Review",
        "description": "Check that all lighting rigs are clean and intentional. Remove any test lights.",
        "steps": [
          "Review all lights in each project file",
          "Remove test lights and keep only the intentional rig",
          "Label the key, fill, and rim lights if they are not already"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Check light list"
          }
        ],
        "expectations": "Clean lighting rigs with labeled lights. The teacher checks for intentionality, not just brightness."
      },
      {
        "id": "framing",
        "title": "Camera Review",
        "description": "Check all camera angles and confirm the focal point reads in each.",
        "steps": [
          "Review each camera angle in both projects",
          "Confirm the focal point reads through the camera",
          "Fix any framing that crops the focal point"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Review framing"
          }
        ],
        "expectations": "Clean camera framing across all projects. The teacher checks that the focal point survives every angle."
      },
      {
        "id": "rendering",
        "title": "Final Review Renders",
        "description": "Render both projects one more time to confirm the reads.",
        "steps": [
          "Render the environment hero",
          "Render the subject day and night heroes",
          "Check all renders for legibility",
          "Save all files cleanly"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce review renders"
          }
        ],
        "expectations": "Clean renders showing both projects are ready for the next phase. The teacher checks file hygiene and read clarity."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for review and cleanup workflow.",
        "steps": [
          "Use Z to cycle shading modes during review",
          "Use N to access property panels quickly",
          "Use Numpad 0 to check camera framing",
          "Use F12 to produce review renders"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle shading",
            "imageUrl": "",
            "description": "Review modes"
          },
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Property access"
          },
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check framing"
          }
        ],
        "expectations": "The teacher expects efficient review workflow using shading modes and camera checks."
      }
    ]
  },
  "wk-09": {
    "title": "Week 09: Project C Kickoff - Character & Scene",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Blocking a Character in Environment",
        "description": "Pick a character and place them in a simple environment. The character must feel like they belong, not pasted in.",
        "steps": [
          "Write the one-sentence what it is about",
          "Block the character volumes: head, mass, base",
          "Block the environment with three planes: floor, wall, ceiling",
          "Place the character in the environment and check the relationship",
          "If the character feels pasted, move the environment or the character until they agree",
          "Save as c-character-scene_wk9-c1.blend"
        ],
        "hotkeys": [
          {
            "key": "Shift+A > Mesh",
            "action": "Add primitives",
            "imageUrl": "",
            "description": "Block character and environment volumes"
          },
          {
            "key": "G / R / S",
            "action": "Position and scale",
            "imageUrl": "",
            "description": "Adjust character and environment placement"
          },
          {
            "key": "/",
            "action": "Local View",
            "imageUrl": "",
            "description": "Isolate the character or environment"
          }
        ],
        "expectations": "A character placed in an environment that feels like a relationship, not a paste job. The teacher checks the connection between character and space."
      },
      {
        "id": "materials",
        "title": "Simple Materials for Both",
        "description": "Assign simple materials to the character and environment that agree with each other.",
        "steps": [
          "Set a base colour for the character that contrasts with the environment",
          "Set a base colour for the environment that supports the character",
          "Adjust roughness on both so the viewport read is clear",
          "Check in Material Preview that the relationship holds"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Material Preview",
            "imageUrl": "",
            "description": "Check material read"
          }
        ],
        "expectations": "Materials that establish a clear character-environment relationship. The teacher checks contrast and coherence."
      },
      {
        "id": "lighting",
        "title": "Integrated Lighting",
        "description": "Set a lighting rig that serves both the character and the environment.",
        "steps": [
          "Place the key light to illuminate both character and environment",
          "Place the fill to lift shadows in the environment without flattening the character",
          "Place the rim to separate the character from the environment",
          "Check that the light unifies the scene"
        ],
        "hotkeys": [
          {
            "key": "Shift+A > Light",
            "action": "Add lamps",
            "imageUrl": "",
            "description": "Insert integrated lights"
          }
        ],
        "expectations": "Lighting that unifies character and environment. The teacher checks for scene cohesion, not just individual reads."
      },
      {
        "id": "framing",
        "title": "Camera Framing the Relationship",
        "description": "Frame the shot to show the character in their environment.",
        "steps": [
          "Frame the shot to include both the character and the environment",
          "Check that the character is the focal point but the environment supports it",
          "Use Numpad 0 to verify the read through the camera"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check relationship framing"
          },
          {
            "key": "Numpad .",
            "action": "Frame selection",
            "imageUrl": "",
            "description": "Recenter on the character"
          }
        ],
        "expectations": "A framing that shows the character-environment relationship. The teacher checks that the character is the focal point."
      },
      {
        "id": "rendering",
        "title": "Checkpoint C1 Render",
        "description": "Render the character in environment for Checkpoint C1.",
        "steps": [
          "Render the scene with EEVEE or Cycles",
          "Check that the character reads as the focal point",
          "Save as c-character-scene_wk9-c1.blend"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce C1 render"
          }
        ],
        "expectations": "A render showing the character placed in their environment. The teacher checks the relationship, not polish."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for character-environment blocking.",
        "steps": [
          "Use Shift+A to add volumes",
          "Use G/R/S to position and scale",
          "Use / to isolate character or environment",
          "Use Numpad 0 to check framing",
          "Use Ctrl+A to apply transforms"
        ],
        "hotkeys": [
          {
            "key": "Shift+A",
            "action": "Add primitives",
            "imageUrl": "",
            "description": "Block volumes"
          },
          {
            "key": "G / R / S",
            "action": "Transform",
            "imageUrl": "",
            "description": "Position and scale"
          },
          {
            "key": "/",
            "action": "Local View",
            "imageUrl": "",
            "description": "Isolate elements"
          },
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check framing"
          }
        ],
        "expectations": "The teacher expects efficient blocking workflow using shortcuts."
      }
    ]
  },
  "wk-10": {
    "title": "Week 10: Camera Angles & Story Beats",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Reviewing the Relationship",
        "description": "The character-environment relationship is set. This week we test it from multiple angles.",
        "steps": [
          "Open the C1 file",
          "Verify the character and environment read together",
          "No new geometry; the focus is camera and story",
          "If a shape reads weak from a new angle, note it for polish"
        ],
        "hotkeys": [
          {
            "key": "Ctrl+Numpad 1/3/7",
            "action": "Snap to views",
            "imageUrl": "",
            "description": "Check the relationship from multiple angles"
          }
        ],
        "expectations": "The teacher checks that the relationship survives multiple camera angles."
      },
      {
        "id": "materials",
        "title": "Material Read Under Camera Changes",
        "description": "Verify the materials still hold when the camera angle changes.",
        "steps": [
          "Check the material read from each new camera angle",
          "If the character blends into the environment from one angle, note it",
          "No new materials needed"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Material Preview",
            "imageUrl": "",
            "description": "Quick check"
          }
        ],
        "expectations": "Materials that hold across camera angles. The teacher checks for consistency."
      },
      {
        "id": "lighting",
        "title": "Lighting for Each Angle",
        "description": "Adjust the lighting rig for each camera angle to maintain the read.",
        "steps": [
          "Move the key light for each new angle to maintain the read",
          "Check the fill and rim for each angle",
          "Save the lighting setup per angle"
        ],
        "hotkeys": [
          {
            "key": "G / R",
            "action": "Position lights",
            "imageUrl": "",
            "description": "Adjust per angle"
          }
        ],
        "expectations": "Lighting that supports each camera angle. The teacher checks for intentional light placement."
      },
      {
        "id": "framing",
        "title": "Three Story Angles",
        "description": "Set up three camera angles that tell a story beat: wide, medium, close.",
        "steps": [
          "Set the wide shot to establish the environment and place the character",
          "Set the medium shot to show the character in the environment",
          "Set the close shot to focus on the character's expression",
          "Check that each angle serves the one-sentence about",
          "Label each camera in the file"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check each angle"
          },
          {
            "key": "Shift+D",
            "action": "Duplicate camera",
            "imageUrl": "",
            "description": "Start a new angle"
          }
        ],
        "expectations": "Three camera angles that tell a story beat. The teacher checks that each angle serves the narrative."
      },
      {
        "id": "rendering",
        "title": "Render the Story Sheet",
        "description": "Render all three angles for Checkpoint C2.",
        "steps": [
          "Render the wide, medium, and close shots",
          "Check that the story beat reads across all three",
          "Save as c-character-scene_wk10-c2.blend"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce story renders"
          }
        ],
        "expectations": "A three-angle story sheet. The teacher checks narrative coherence, not polish."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for multi-angle camera workflow.",
        "steps": [
          "Use Shift+D to duplicate cameras for new angles",
          "Use Numpad 0 to check each camera",
          "Use G/R/S to position cameras",
          "Use F12 to render each angle"
        ],
        "hotkeys": [
          {
            "key": "Shift+D",
            "action": "Duplicate camera",
            "imageUrl": "",
            "description": "Start new angles"
          },
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check angles"
          },
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce renders"
          }
        ],
        "expectations": "The teacher expects efficient multi-angle workflow using camera duplication and checks."
      }
    ]
  },
  "wk-11": {
    "title": "Week 11: Polish Pass & Details",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Adding Polish Details",
        "description": "Add small details where the eye needs something to lock onto. Details on the volume, not on top of it.",
        "steps": [
          "Review the character and environment for flat surfaces",
          "Add a ledge, seam, or depth break where the eye needs to lock on",
          "Keep details small and intentional",
          "Render after each detail to confirm it does work"
        ],
        "hotkeys": [
          {
            "key": "E",
            "action": "Extrude",
            "imageUrl": "",
            "description": "Add detail geometry"
          },
          {
            "key": "Ctrl+B",
            "action": "Bevel",
            "imageUrl": "",
            "description": "Add edge detail"
          }
        ],
        "expectations": "Details that do work, not decoration. The teacher checks that each detail lands where the eye is already looking."
      },
      {
        "id": "materials",
        "title": "Material Polish",
        "description": "Refine the materials with subtle roughness and colour adjustments.",
        "steps": [
          "Adjust roughness on surfaces that read too flat or too noisy",
          "Check the palette consistency across the scene",
          "Add subtle variation where needed"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Access material settings"
          }
        ],
        "expectations": "Refined materials that serve the scene. The teacher checks for intentional roughness and colour choices."
      },
      {
        "id": "lighting",
        "title": "Lighting Polish",
        "description": "Fine-tune the lighting rig for the final read.",
        "steps": [
          "Adjust the key light to graze surfaces for shape shadows",
          "Lift the fill to reveal detail without flattening",
          "Check the rim separation across all angles"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Adjust light properties"
          }
        ],
        "expectations": "Polished lighting that supports all three camera angles. The teacher checks for intentionality."
      },
      {
        "id": "framing",
        "title": "Camera Polish",
        "description": "Fine-tune the camera framing for each angle.",
        "steps": [
          "Check the wide shot for proper environment framing",
          "Check the medium shot for character-environment balance",
          "Check the close shot for expression clarity",
          "Adjust as needed"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check framing"
          }
        ],
        "expectations": "Clean framing across all angles. The teacher checks for proper balance."
      },
      {
        "id": "rendering",
        "title": "Polished Renders",
        "description": "Render all three angles with polished details.",
        "steps": [
          "Render the wide, medium, and close shots with Cycles or clean EEVEE",
          "Check all renders for the final read",
          "Save as c-character-scene_wk11-polish.blend"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce polished renders"
          }
        ],
        "expectations": "Polished renders showing the final character-environment scene. The teacher checks detail quality and lighting."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for polish workflow.",
        "steps": [
          "Use E and Ctrl+B to add details",
          "Use N to access material and light settings",
          "Use Numpad 0 to check framing",
          "Use F12 to render polished passes"
        ],
        "hotkeys": [
          {
            "key": "E",
            "action": "Extrude",
            "imageUrl": "",
            "description": "Add details"
          },
          {
            "key": "Ctrl+B",
            "action": "Bevel",
            "imageUrl": "",
            "description": "Edge detail"
          },
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Settings access"
          },
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Polished renders"
          }
        ],
        "expectations": "The teacher expects efficient polish workflow using detail and render shortcuts."
      }
    ]
  },
  "wk-12": {
    "title": "Week 12: Final Assembly & Hero Renders",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Final Shape Review",
        "description": "Do one final shape review across all projects. No new modeling; just confirm everything reads.",
        "steps": [
          "Open Project A, B, and C files",
          "Check all shapes and silhouettes one final time",
          "If something reads weak, note it but do not model new geometry"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle shading modes",
            "imageUrl": "",
            "description": "Final shape review"
          }
        ],
        "expectations": "A final confirmation that all shapes read correctly. The teacher checks for readiness."
      },
      {
        "id": "materials",
        "title": "Final Material Review",
        "description": "Do one final material review. Remove unused slots and confirm palettes.",
        "steps": [
          "Remove any unused materials from all files",
          "Check that each project has a clean material list",
          "Label materials clearly"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Access material list"
          }
        ],
        "expectations": "Clean material lists across all files. The teacher checks for file hygiene."
      },
      {
        "id": "lighting",
        "title": "Final Lighting Review",
        "description": "Confirm all lighting rigs are clean and labeled.",
        "steps": [
          "Review all lights in all project files",
          "Remove test lights",
          "Confirm key, fill, and rim are labeled"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Check light list"
          }
        ],
        "expectations": "Clean lighting rigs across all files. The teacher checks for intentionality."
      },
      {
        "id": "framing",
        "title": "Final Camera Review",
        "description": "Confirm all camera angles are clean and the focal points read.",
        "steps": [
          "Review all camera angles in all files",
          "Confirm the focal point reads in each",
          "Fix any remaining framing issues"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Final camera check"
          }
        ],
        "expectations": "Clean camera framing across all files. The teacher checks for readiness."
      },
      {
        "id": "rendering",
        "title": "Final Hero Renders",
        "description": "Render all hero images with Cycles at full quality.",
        "steps": [
          "Set Cycles render settings to high quality",
          "Render all hero images: environment, subject day and night, character scene wide/medium/close",
          "Check all renders for the final read",
          "Save all files cleanly"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce final hero renders"
          }
        ],
        "expectations": "Final hero renders of all three projects. The teacher checks quality and readiness for delivery."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for final review and rendering.",
        "steps": [
          "Use Z to cycle shading modes for final review",
          "Use N for property access",
          "Use Numpad 0 for camera checks",
          "Use F12 for final renders"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle shading",
            "imageUrl": "",
            "description": "Final review"
          },
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Property access"
          },
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Final renders"
          }
        ],
        "expectations": "The teacher expects efficient final review workflow."
      }
    ]
  },
  "wk-13": {
    "title": "Week 13: Self-Directed Study & Portfolio Prep",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Self-Directed Shape Study",
        "description": "Study one shape or silhouette that you find difficult. Practice it in isolation.",
        "steps": [
          "Pick one shape or silhouette that you struggled with during the term",
          "Block it in isolation using simple primitives",
          "Check it from multiple angles",
          "Practice until it reads clearly"
        ],
        "hotkeys": [
          {
            "key": "Shift+A",
            "action": "Add primitives",
            "imageUrl": "",
            "description": "Block practice shapes"
          },
          {
            "key": "Ctrl+Numpad 1/3/7",
            "action": "Snap to views",
            "imageUrl": "",
            "description": "Check from multiple angles"
          }
        ],
        "expectations": "A practiced shape that the student found difficult. The teacher checks for self-directed learning."
      },
      {
        "id": "materials",
        "title": "Self-Directed Material Study",
        "description": "Practice one material type that you want to improve.",
        "steps": [
          "Pick one material type you want to study",
          "Create a test sphere and apply the material",
          "Adjust base colour and roughness to understand the behaviour",
          "Test under different lighting"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Access material settings"
          },
          {
            "key": "Z",
            "action": "Material Preview",
            "imageUrl": "",
            "description": "Quick check"
          }
        ],
        "expectations": "A practiced material study. The teacher checks for self-directed learning."
      },
      {
        "id": "lighting",
        "title": "Self-Directed Lighting Study",
        "description": "Practice one lighting setup that you want to improve.",
        "steps": [
          "Pick one lighting scenario you want to study",
          "Set up a simple scene and practice the rig",
          "Experiment with key, fill, and rim positions",
          "Render to check the results"
        ],
        "hotkeys": [
          {
            "key": "Shift+A > Light",
            "action": "Add lamps",
            "imageUrl": "",
            "description": "Practice lighting rigs"
          },
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Check results"
          }
        ],
        "expectations": "A practiced lighting setup. The teacher checks for self-directed learning."
      },
      {
        "id": "framing",
        "title": "Self-Directed Framing Study",
        "description": "Practice one camera angle or composition technique.",
        "steps": [
          "Pick one composition technique you want to study",
          "Set up a simple scene and practice the framing",
          "Check the read through the camera"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Check framing"
          }
        ],
        "expectations": "A practiced framing technique. The teacher checks for self-directed learning."
      },
      {
        "id": "rendering",
        "title": "Study Renders",
        "description": "Render your practice studies for portfolio preparation.",
        "steps": [
          "Render all practice studies",
          "Check the renders for quality",
          "Save for portfolio use"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce study renders"
          }
        ],
        "expectations": "Practice renders ready for portfolio inclusion. The teacher checks for self-directed improvement."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for self-directed study.",
        "steps": [
          "Use Z to cycle shading modes during practice",
          "Use N for property access",
          "Use Numpad 0 for camera checks",
          "Use F12 for render checks"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle shading",
            "imageUrl": "",
            "description": "Review modes"
          },
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Property access"
          },
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Render checks"
          }
        ],
        "expectations": "The teacher expects efficient self-directed study workflow."
      }
    ]
  },
  "wk-14": {
    "title": "Week 14: Final Delivery & Crit",
    "namingConventions": {
      "fileFormat": "Lastname_Firstname_ANV6_wk#_v###.filetype",
      "renderExtension": "All renders must be saved as .png files",
      "blenderPrefixes": [
        {
          "prefix": "COL_",
          "meaning": "Collections"
        },
        {
          "prefix": "P_",
          "meaning": "Props (placed objects)"
        },
        {
          "prefix": "C_",
          "meaning": "Characters"
        },
        {
          "prefix": "ENV_",
          "meaning": "Environment elements"
        },
        {
          "prefix": "CAM_",
          "meaning": "Camera objects"
        },
        {
          "prefix": "LIT_",
          "meaning": "Light objects"
        },
        {
          "prefix": "MAT_",
          "meaning": "Materials"
        }
      ]
    },
    "sections": [
      {
        "id": "shapes",
        "title": "Final Shape Confirmation",
        "description": "Do one last shape review across all deliverable projects. Confirm silhouettes read clearly.",
        "steps": [
          "Open all deliverable project files",
          "Check all shapes and silhouettes one final time",
          "Confirm everything reads for the final delivery"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle shading modes",
            "imageUrl": "",
            "description": "Final shape confirmation"
          }
        ],
        "expectations": "Final confirmation that all shapes are ready for delivery. The teacher checks for completeness."
      },
      {
        "id": "materials",
        "title": "Final Material Confirmation",
        "description": "Confirm all materials are clean and labeled.",
        "steps": [
          "Check all material slots one final time",
          "Remove any remaining unused materials",
          "Confirm all materials are labeled"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Final material check"
          }
        ],
        "expectations": "Clean material lists across all deliverables. The teacher checks for file readiness."
      },
      {
        "id": "lighting",
        "title": "Final Lighting Confirmation",
        "description": "Confirm all lighting rigs are clean and intentional.",
        "steps": [
          "Review all lights one final time",
          "Confirm key, fill, and rim are labeled and intentional",
          "Remove any remaining test lights"
        ],
        "hotkeys": [
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Final light check"
          }
        ],
        "expectations": "Clean lighting rigs across all deliverables. The teacher checks for readiness."
      },
      {
        "id": "framing",
        "title": "Final Camera Confirmation",
        "description": "Confirm all camera angles are clean and focal points read.",
        "steps": [
          "Review all camera angles one final time",
          "Confirm focal points read clearly in each",
          "Fix any remaining framing issues"
        ],
        "hotkeys": [
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Final camera confirmation"
          }
        ],
        "expectations": "Clean camera framing across all deliverables. The teacher checks for readiness."
      },
      {
        "id": "rendering",
        "title": "Final Delivery Renders",
        "description": "Render all final deliverable images with Cycles at maximum quality.",
        "steps": [
          "Set Cycles to maximum quality settings",
          "Render all deliverable images",
          "Check all renders for final quality",
          "Save all files cleanly with final naming conventions"
        ],
        "hotkeys": [
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Produce final delivery renders"
          }
        ],
        "expectations": "Final delivery renders of all projects at maximum quality. The teacher checks for portfolio readiness."
      },
      {
        "id": "shortcuts",
        "title": "Effective Shortcuts",
        "description": "Shortcuts for final delivery workflow.",
        "steps": [
          "Use Z to cycle shading modes for final review",
          "Use N for property access",
          "Use Numpad 0 for camera checks",
          "Use F12 for final renders"
        ],
        "hotkeys": [
          {
            "key": "Z",
            "action": "Cycle shading",
            "imageUrl": "",
            "description": "Final review"
          },
          {
            "key": "N",
            "action": "Side panel",
            "imageUrl": "",
            "description": "Property access"
          },
          {
            "key": "Numpad 0",
            "action": "Camera view",
            "imageUrl": "",
            "description": "Final camera check"
          },
          {
            "key": "F12",
            "action": "Render",
            "imageUrl": "",
            "description": "Final delivery renders"
          }
        ],
        "expectations": "The teacher expects efficient final delivery workflow."
      }
    ]
  }
}
};
