/* ================================================================
   PROJECT DATA — single source of truth.

   Both the homepage grid and the generated per-project pages read from
   this file. After editing, run:

       node build.js

   to regenerate the standalone project pages under /<id>/.

   ↓↓↓  PASTE YOUR GOOGLE DRIVE LINKS HERE  ↓↓↓
   Every project has a `links:` array. Paste a URL into a slot's
   `url: ''` and a button with that slot's `label` appears on the
   project page. Leave a url empty and its button stays hidden.
================================================================ */
const PROJECTS = [
  {
    id: 'dugtrio',
    blurb: "The world's only robot with three shooters on a turret — three independent flywheels fire at once instead of bottlenecking on sorting.",
    title: 'Dugtrio',
    year: '2025–26',
    meta: 'FTC DECODE · Team 6417 Blu Cru',
    cats: ['mechatronics', 'controls', 'mechanical'],
    tags: [['Mechatronics','mechatronics'], ['Controls','controls']],
    img: 'images/DUGTRIO.png',
    summary: "The world's only robot with three shooters mounted on a turret. Where most teams shoot one ball at a time and bottleneck on sorting, Dugtrio fires three at once — or completes a motif deliberately — using three independent flywheels.",
    points: [
      'Placed 2nd out of 8,000+ teams globally and 1st in the US',
      '1st in the Chesapeake region · FTC Worlds Inspire Award',
      'Led mechanical design and fabrication across 150+ iterations'
    ],
    stats: [
      ['2nd', 'in the world'],
      ['3', 'independent flywheels'],
      ['150+', 'design iterations'],
      ['90%', 'more artifacts scored (V2)']
    ],
    sections: [
      {
        heading: 'Triple Flywheel Shooter',
        points: [
          'Three independent flywheels allow shooting from any distance — three shots at once, or meticulous motif completion',
          'Steel flywheels add rotational inertia, preserving speed and increasing shot consistency',
          'Independent flywheels increased accuracy by 40%',
          'Linked hoods freed up servos for tilt, making the turret 70% faster',
          'Custom "rider bearings" reduce friction; sprung wiring permits full 360° rotation'
        ]
      },
      {
        heading: 'Intake & Transfer',
        points: [
          'Full-bot-width intake with an optimized ramp profile that removes dead zones — "touch it, own it"',
          'Intake geometry forces artifacts to auto-align, giving the driver room for error',
          'V2 went channel-less with custom molded mecanum rollers and Teflon: over 70% faster pickup',
          'Countersprung elevator linkage balances gravity — V2 needs less than half the torque of V1',
          'Surgical tubing acts as a one-way door; a virtual four-bar kicker keeps the transfer short enough to turret while moving'
        ]
      },
      {
        heading: 'Drivetrain & Endgame',
        points: [
          'A 50 lb six-wheel drivetrain, chosen over mecanum through tradeoff analysis — getting pushed while shooting three artifacts was the key risk',
          'Central traction wheels provide pushing power; omni-wheels keep turning smooth',
          'Two-stage serpentine belt drive allows tighter packaging, with motors low to reduce center of mass',
          'Endgame tilt uses a 1:8 gearbox to tilt the 50 lb robot, doubles as a parking brake, and overcenters to stay up even without power'
        ]
      },
      {
        heading: 'Software & Controls',
        points: [
          'Auto-aim for both turret and shooter using linear interpolation',
          'Custom AI ball detection enables driverless intaking',
          'Custom Pure Pursuit pathing algorithm developed for the six-wheel drive'
        ]
      },
      {
        heading: 'Design Process',
        points: [
          'Requirements analysis drove every subsystem — each game observation mapped to a design consequence',
          'Brainstorming sprints and 12+ prototypes in PLA, polycarbonate, and cardboard',
          'Finite Element Analysis optimized pocketing to reduce deformation by 4x',
          'Multibody modeling and master sketches in Onshape enabled fast top-down changes',
          'Failure Mode and Effects Analysis after each competition; version control enabled experimentation'
        ]
      }
    ],
    links: [
      { label: 'Files', url: '' }
    ]
  },
  {
    id: 'blastoise',
    blurb: 'All-in-one robot that intakes and scores with a single 34-inch telescoping arm, eliminating the transfer mechanism entirely.',
    title: 'Blastoise',
    year: '2024–25',
    meta: 'FTC Into the Deep · Team 6417 Blu Cru',
    cats: ['mechatronics', 'controls', 'mechanical'],
    tags: [['Mechatronics','mechatronics'], ['Controls','controls']],
    img: 'images/BLASTOISE_MTI.jpg',
    summary: 'An all-in-one robot that intakes and scores with a single telescoping arm, eliminating the need for a transfer mechanism entirely. Evolved from our States robot, Wartortle.',
    points: [
      'Peaked at 7th Offensive Power Rating worldwide',
      'Finished 9/64 at the World Championship',
      'Placed 13th of 40 at the Multinational Tech Invitational'
    ],
    stats: [
      ['7th', 'Offensive Power Rating'],
      ['34 in', 'arm extension'],
      ['6 sec', 'sample cycles'],
      ['L3', 'hang']
    ],
    sections: [
      {
        heading: 'Telescoping Arm',
        points: [
          'Three-stage telescoping tube system with 34 inches of extension',
          'Cascade-strung with two sets of strings — the second is a backup that improves consistency',
          'Custom bearing blocks constrain both the inside and outside of the tubes',
          'Chain-and-sprocket pivot with a custom tensioner at a 152.7:1 ratio — 39 RPM, 205.2 kg·cm of torque',
          'Pivot is over 80% custom; the arm is pocketed to reduce weight'
        ]
      },
      {
        heading: 'End Effector',
        points: [
          'All-in-one intake/outtake removes the transfer mechanism entirely, embodying the KISS principle',
          'Active/passive combination: a belt-driven spinner for fast intaking plus a sample-conforming latch for reliable scoring',
          'Four degrees of freedom — pitch control for multiple scoring angles, rotating wrist for roll control from either side',
          'Sample-aligning geometry and a limit switch detect and square up blocks',
          'A scissor-linkage pusher (225 mm extension) was added after Qual 1 to reach vertical blocks at the submersible edge'
        ]
      },
      {
        heading: 'Two-Stage Hang',
        points: [
          'One-of-a-kind passively sprung two-stage hanger with magnetic hooks',
          'Level 2 uses a sprung bungee cord for instant extension, bracing on the submersible to minimize required torque',
          'Level 3 uses the extension\'s own speed to throw the magnetic hooks up, with a separate high-torque motor lifting the robot',
          'A dual-purpose servo acts as both latch and high-torque retraction winch'
        ]
      },
      {
        heading: 'Drivetrain',
        points: [
          'Custom CNC-machined plates with motors embedded into the sides to save space',
          'Motors lowered to drop center of mass, validated in Onshape center-of-mass simulation before building',
          'Two dead-wheel odometry pods for localization',
          'Polycarbonate covers and ramps stop samples falling into the robot'
        ]
      },
      {
        heading: 'Software',
        points: [
          'Affine transformation matrix inverse kinematics relate robot center to end-effector position',
          'Cubic Hermite splines smoothly control end-effector pathing',
          'Custom point-to-point PID pathing replaced Road Runner, which was slow and did not correct at the end of trajectories',
          'AprilTag localization corrects odometry drift, using a linked list of past positions to extrapolate around reading latency',
          'Voltage compensation normalizes motor power to 12V so behavior stays consistent as the battery drains'
        ]
      }
    ],
    links: [
      { label: 'Files', url: '' }
    ]
  },
  {
    id: 'recycla',
    title: 'Recycla',
    year: '2024–25',
    meta: 'Personal project',
    cats: ['mechatronics', 'mechanical', 'manufacturing'],
    tags: [['Mechatronics','mechatronics'], ['Manufacturing','manufacturing']],
    img: 'images/Recycla.png',
    summary: 'Bottle-to-filament recycler that turns used plastic bottles into usable 3D-printer filament.',
    points: [
      'Custom extruder assembly paired with a planetary gearbox',
      '90% faster than comparable open-source designs'
    ],
    links: [
      { label: 'Files', url: '' }
    ]
  },
  {
    id: 'diffy-pto',
    title: 'Differential Power Takeoff',
    year: '2024',
    meta: 'Mechanism design',
    cats: ['mechanical'],
    tags: [['Mechanical Design','mechanical']],
    img: 'images/Diffy PTO.png',
    summary: 'Multi-input gearbox that enables dynamic torque sharing between synchronized output mechanisms.',
    points: [],
    links: [
      { label: 'Files', url: '' }
    ]
  },
  {
    id: 'linear-odo',
    title: 'Linear Odometry',
    year: '2023–24',
    meta: 'Robot localization',
    cats: ['mechatronics', 'controls'],
    tags: [['Controls','controls'], ['Mechatronics','mechatronics']],
    img: 'images/Linear Odo.png',
    summary: 'Robust, high-precision linear-rail-based robot localization designed to hold accuracy in a high-vibration environment.',
    points: [],
    links: [
      { label: 'Files', url: '' }
    ]
  },
  {
    id: 'cycloidal',
    title: 'Cycloidal Gearbox',
    year: '2026',
    meta: 'Mechanism design',
    cats: ['mechanical', 'manufacturing'],
    tags: [['Mechanical Design','mechanical'], ['Manufacturing','manufacturing']],
    img: '',
    summary: 'Bearing-based 3D-printed gearbox for high-torque, low-backlash power transmission.',
    points: [],
    links: [
      { label: 'Files', url: '' }
    ]
  },
  /* --- Hidden for now: bambu. Delete this comment wrapper (and restore the trailing comma) to bring it back. ---
  {
    id: 'bambu',
    title: 'Bambu Lab',
    meta: 'Summer 2026 · Work experience',
    cats: ['mechatronics', 'mechanical', 'product'],
    tags: [['Product','product'], ['Mechatronics','mechatronics']],
    img: '',
    summary: 'Developed toolchangers and toolheads for 3D printers.',
    points: [],
    links: [
      { label: 'Files', url: '' }
    ]
  }
  --- end bambu --- */
  {
    id: 'nostopharma',
    title: 'Pipsqueak',
    year: '2026',
    meta: 'Nostopharma',
    cats: ['mechatronics', 'product', 'research'],
    tags: [['Mechatronics','mechatronics'], ['Product','product']],
    img: '',
    summary: 'Leading design of a 3-axis automated pipetting platform that generates experimental chemical compound variants.',
    points: [
      'Managing a client-facing contractor project end to end',
      'Owning requirements, CAD, prototyping, and design reviews'
    ],
    links: [
      { label: 'Project write-up', url: '' }
    ]
  },
  {
    id: 'jhu',
    title: 'Nanoparticle Drug Delivery',
    year: '2025',
    meta: 'Johns Hopkins School of Medicine',
    cats: ['research'],
    tags: [['Research','research']],
    img: '',
    summary: 'Interned with the Green Group, focusing on ocular nanoparticle drug delivery.',
    points: [
      'Ran a full in-vitro study on drug efficacy under varying storage conditions',
      'Presented findings at the BMES 2025 Annual Conference',
      'Co-authored a publication on ovarian cancer immune-profiling'
    ],
    links: [
      { label: 'Publication', url: '' },
      { label: 'BMES Poster', url: '' }
    ]
  },
  {
    id: 'geneimmune',
    title: 'Influenza Protein Purification',
    year: '2024',
    meta: 'GeneImmune Biotechnology LLC',
    cats: ['research'],
    tags: [['Research','research']],
    img: '',
    summary: 'Measured and purified influenza proteins to supply research labs with the materials needed to help prevent future flu outbreaks.',
    points: [],
    links: [
      { label: 'Publication', url: '' }
    ]
  },
  /* --- Hidden for now: team-usa. Delete this comment wrapper (and restore the trailing comma) to bring it back. ---
  {
    id: 'team-usa',
    title: 'FIRST Global — Team USA',
    meta: '2021–Present · Captain, FTC 6417/19818',
    cats: ['misc'],
    tags: [['Misc','misc']],
    img: '',
    summary: 'Selected as one of five members of Team USA, representing 70,000+ competitors at the FIRST Global Challenge.',
    points: [
      'Oversaw all aspects of a 20-member organization',
      'Coordinated the mechanical, software, and outreach subteams',
      'Guided all engineering and operational decisions'
    ],
    links: [
      { label: 'Files', url: '' }
    ]
  }
  --- end team-usa --- */
  {
    id: 'minime',
    blurb: 'A robotics kit that costs 60 cents to make, designed as the lowest-barrier first step into STEM for kids aged 4–10.',
    title: 'MiniMe',
    year: '2025',
    meta: 'Rockville Science Center · STEM outreach',
    cats: ['product', 'manufacturing', 'misc'],
    tags: [['Product','product'], ['Manufacturing','manufacturing']],
    img: '',
    summary: 'A robotics kit that costs 60 cents to make, designed as the lowest-possible-barrier first step into STEM for kids aged 4–10.',
    points: [
      '400+ kits donated, reaching 100+ kids',
      'Distributed free at the Rockville Science Center'
    ],
    stats: [
      ['60¢', 'cost to make'],
      ['400+', 'kits donated'],
      ['4–10', 'age range']
    ],
    sections: [
      {
        heading: 'Why 60 Cents Matters',
        points: [
          'Keeping the unit cost at 60¢ makes the initiative financially self-sustaining — kits can be given away free indefinitely',
          'Low cost means no gatekeeping: easy, accessible, and a genuinely fun "first step in the door"',
          'Designed to be handed out at science-center events rather than requiring a program signup'
        ]
      },
      {
        heading: 'Part of a Pipeline',
        points: [
          'MiniMe is the entry point of a four-stage STEM ladder: MiniMe (ages 3–12) → RSC classes (5–12) → FLL (8–12) → Green Gang JV team (13–16)',
          'Structured technical skills at later stages build directly on the initial MiniMe exposure',
          'Offseason goal is to partner with other FTC teams and expand MiniMe globally'
        ]
      }
    ],
    links: [
      { label: 'Files', url: '' }
    ]
  },
  /* --- Hidden for now: kenya-uganda. Delete this comment wrapper (and restore the trailing comma) to bring it back. ---
  {
    id: 'kenya-uganda',
    blurb: "Launched Uganda's FIRST Tech Challenge region — building the coaching and competition infrastructure, not just running a workshop.",
    title: 'Kenya–Uganda Robotics Initiative',
    meta: 'Winter 2025–Present · Curriculum Developer & Educational Program Lead',
    cats: ['misc'],
    tags: [['Misc','misc']],
    img: 'images/UG BOT.png',
    summary: "Launched Uganda's FIRST Tech Challenge region from scratch — not just teaching a workshop, but building the coaching and competition infrastructure for the program to run without us.",
    points: [
      'Raised $6,000+ individually toward the program',
      'Taught basic robotics to 400+ students, half of them girls',
      'Visited 7+ schools across the region'
    ],
    stats: [
      ['400+', 'students reached'],
      ['50%', 'were girls'],
      ['$10K', 'raised to launch the region'],
      ['7+', 'schools visited']
    ],
    sections: [
      {
        heading: 'Launching the Region',
        points: [
          'Three team members traveled to Uganda in summer 2025 to start a new FTC region',
          '$10,000 raised in total to establish the region — $6,000+ of it individually',
          'Ran FTC camps for coaches as well as students, so the program could sustain itself locally',
          'Visited 7+ schools to grow FTC and support the FLL program launched previously',
          'Half of the 400+ students reached were girls'
        ]
      }
    ],
    quote: {
      text: "Blu Cru's tireless efforts have been instrumental in transforming our vision into reality.",
      cite: 'Hannah Mellon Kenyangi, FIRST Uganda Director'
    },
    links: [
      { label: 'Files', url: '' }
    ]
  }
  --- end kenya-uganda --- */
];

// Usable both in the browser (as a global) and from build.js under Node.
if (typeof module !== 'undefined' && module.exports) module.exports = PROJECTS;
