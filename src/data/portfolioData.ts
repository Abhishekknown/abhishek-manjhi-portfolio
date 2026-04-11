export interface Project {
  id: string;
  number: string;
  title: string;
  location: string;
  industry: string;
  tags: string[];
  description: string;
  outcome: string;
  liveUrl: string;
  liveLabel: string;
  client: string;
  role: string;
  platform: string;
  challenge: {
    heading: string;
    body: string;
    blocks: string[];
    businessGoal: string;
  };
  goals: string[];
  constraints: string[];
  myRole: string[];
  discovery: {
    heading: string;
    body: string;
    insight: string;
  };
  strategy: {
    heading: string;
    principles: { title: string; body: string }[];
  };
  process: {
    heading: string;
    steps: { title: string; body: string }[];
  };
  keyDecisions: {
    heading: string;
    decisions: { title: string; before: string; after: string }[];
  };
  solution: {
    heading: string;
    body: string;
    placeholders: string[];
  };
  outcomes: {
    heading: string;
    items: string[];
  };
}

export const projects: Project[] = [
  {
    id: "skooltag",
    number: "01",
    title: "Skooltag — School Uniform Platform",
    location: "Delhi, India · D2C E-Commerce",
    industry: "D2C E-Commerce · EdTech · School Retail",
    tags: ["E-Commerce", "Consumer Mobile", "D2C", "0→1", "Brand Identity"],
    description: "A Delhi-based school uniform retailer needed a complete product to replace third-party vendor dependency. Designed a 5-step onboarding flow targeting near-zero drop-off, a bundled package feature as the primary acquisition mechanic, and the full brand system — from logo to print collateral.",
    outcome: "→ Live and in use across Delhi schools",
    liveUrl: "https://skooltag.com",
    liveLabel: "skooltag.com",
    client: "Student Junction / Skooltag",
    role: "Sole Designer — Brand Identity, UX, UI, Marketing Assets",
    platform: "Mobile-first web + app",
    challenge: {
      heading: "A school uniform retailer with no product, no brand, and a hard deadline.",
      body: "Delhi schools operate under a local government policy that designates approved school uniform vendors. Student Junction wanted to become one of those approved vendors — and compete with Amazon and local shops by owning the relationship directly with families through a digital-first platform.\n\nThe problem: there was no product. No brand. No flow. Nothing. Just a business case and a category.\n\nThe stakes were real:",
      blocks: [
        "Market timing: Back-to-school seasons are concentrated. Missing launch meant missing a full year of revenue.",
        "Trust gap: Families buying school uniforms for their children needed to trust a new brand immediately — before the first purchase.",
        "Discovery friction: A school uniform catalogue has complexity: multiple schools, classes, genders, and item types. Without smart product architecture, the experience collapses into confusion."
      ],
      businessGoal: "Design a product experience that could drive first-time purchases among Delhi school families, reduce reliance on third-party platforms, and position Skooltag as the preferred official vendor channel."
    },
    goals: [
      "Deliver near-zero drop-off at first session through a frictionless onboarding flow",
      "Design a personalised product catalogue that reduces browsing friction",
      "Introduce a bundled uniform package as the primary acquisition mechanic to improve average order value",
      "Build a complete brand system capable of supporting both digital and physical launch materials"
    ],
    constraints: [
      "Sole designer: No design team. No research ops. Every decision — from logo colour to onboarding copy — started and ended with one person.",
      "Early-stage startup: Limited runway. Fast iteration expected. No room for extended discovery phases or multiple design sprints.",
      "Physical + digital in parallel: Print materials (pamphlets, banners, in-school signage) needed to be designed alongside the digital product — not after."
    ],
    myRole: [
      "Brand identity from scratch (logo, colour system, typography)",
      "Complete UX: user flows, information architecture, onboarding design",
      "Complete UI: production-ready screens across mobile and web",
      "Go-to-market materials: pamphlets, banners, signage"
    ],
    discovery: {
      heading: "Understanding how Delhi school families actually shop.",
      body: "The uniform catalogue has inherent segmentation logic: school → class → section → gender → item type. Families don't want to browse a generic catalogue — they want to see exactly what their child needs, instantly. Third-party platforms (Amazon, local vendors) offered no personalisation. That was the differentiation lever.",
      insight: "The product's job in the first 60 seconds was not to sell — it was to prove it knew exactly what this family needed before they had to search for it."
    },
    strategy: {
      heading: "Three principles. Everything flowed from them.",
      principles: [
        {
          title: "Compress the path to relevance.",
          body: "Don't show families a catalogue. Take them through a 5-question guided setup that ends with a pre-filtered, personalised product dashboard — showing only what their child actually needs."
        },
        {
          title: "Make the bundle the obvious choice.",
          body: "A 20% discount on complete uniform packages wasn't just a promotion — it was the default framing. Families buying piecemeal should feel like they're doing it the hard way."
        },
        {
          title: "Build a brand that earns trust before the purchase.",
          body: "The visual identity needed to feel like a school — familiar, structured, clean — but modern enough to compete with digital-first brands."
        }
      ]
    },
    process: {
      heading: "How the work actually happened.",
      steps: [
        {
          title: "Onboarding Flow Architecture",
          body: "Mapped the full decision tree: school → class → section → gender → uniform items → personalised catalogue. Validated the logic with the founding team against the actual product catalogue data."
        },
        {
          title: "Wireframes",
          body: "Low-fi wireframes for the 5-step onboarding, the personalised catalogue, the product detail page, cart, and checkout. Focus on decision points and friction reduction."
        },
        {
          title: "Bundle Feature Design",
          body: "Designed the bundled package as a pinned recommendation at the top of the personalised catalogue — visually distinct, with the 20% saving prominently surfaced."
        },
        {
          title: "Brand Identity",
          body: "Logo, colour system, typography. Built to work across mobile screens, pamphlets, and banner-scale print."
        },
        {
          title: "UI Design",
          body: "Full production screens. Mobile-first. Designed in Figma with a component library to support engineering handoff."
        },
        {
          title: "Go-to-Market Assets",
          body: "Pamphlets, banners, and in-school signage designed to drive awareness within school compounds and nearby neighbourhoods."
        }
      ]
    },
    keyDecisions: {
      heading: "The calls that mattered most — and why.",
      decisions: [
        {
          title: "5-step guided onboarding vs. browsable catalogue",
          before: "What we could have done: A standard e-commerce catalogue with filters — familiar, low development risk.",
          after: "What we chose: A guided setup because families in this category don't want to browse — they want to be told what their child needs. The setup removes decision fatigue entirely and delivers a personalised experience instantly."
        },
        {
          title: "Bundle as primary SKU, not an upsell",
          before: "What most platforms do: Treat bundles as an add-on recommendation after the customer has already started building their own cart.",
          after: "What we chose: Make the bundle the default recommendation — surfaced first, priced clearly, with savings prominently visible. This aligned with the startup's core KPI (average order value per household) rather than individual item sales."
        }
      ]
    },
    solution: {
      heading: "What shipped.",
      body: "The solution was a cohesive product system — not just screens. Every touchpoint, from the digital onboarding flow to the pamphlet a family picks up outside school gates, was designed to work together.",
      placeholders: [
        "Onboarding Step 1–5 — Progressive flow",
        "Personalised catalogue — Post-onboarding dashboard",
        "Bundle recommendation — Primary acquisition card",
        "Product detail page",
        "Brand identity — Logo, colours, typography",
        "Print collateral — Pamphlet and banner"
      ]
    },
    outcomes: {
      heading: "What came out of it.",
      items: [
        "Product is live: skooltag.com — actively in use across Delhi schools.",
        "Approved vendor status: Skooltag operates as one of Delhi's officially approved school uniform vendors under local government policy — a key business milestone the product directly enabled.",
        "5-step onboarding: Designed to deliver a fully personalised catalogue in under 60 seconds — eliminating the browsing overhead that causes drop-off on generic e-commerce platforms.",
        "Complete brand system: Logo, full visual identity, and go-to-market materials — deployed across both digital and physical channels at launch."
      ]
    }
  },
  {
    id: "stratalite",
    number: "02",
    title: "Stratalite / Pacific Coast Contracting",
    location: "Vancouver, BC · B2B Professional Services",
    industry: "B2B Professional Services · Construction · Canada",
    tags: ["B2B Web Platform", "Professional Services", "Canada", "UX + Visual Design"],
    description: "A Vancouver-based contracting firm needed a web presence that could close B2B leads. Delivered the complete UX, visual design system, and production-ready assets for a professional services platform — built remotely for an international client, live and actively used.",
    outcome: "→ Live at stratalite.ca · B2B lead generation platform",
    liveUrl: "https://stratalite.ca",
    liveLabel: "stratalite.ca",
    client: "Pacific Coast Contracting (PCC) / Stratalite",
    role: "UX Designer & Visual Design Lead",
    platform: "Web",
    challenge: {
      heading: "A Vancouver-based contracting firm needed a web presence that could close B2B leads.",
      body: "Pacific Coast Contracting is a professional services business operating in Vancouver's contracting market. B2B contracting is a trust-intensive category — clients are making significant financial commitments and need to feel confident before they even make contact.\n\nThe problem:\n- No web presence that matched the company's actual calibre of work\n- Potential leads arriving at an experience that undersold the brand\n- No design system — every asset created from scratch with no standards",
      blocks: [
        "Credibility gap: The existing digital presence (or lack thereof) didn't reflect the quality of their physical work.",
        "Lead friction: Prospects had no clear path to understanding services or initiating contact.",
        "Brand inconsistency: No unified visual language across digital touchpoints."
      ],
      businessGoal: "Build a web platform that generates qualified B2B leads by establishing credibility, communicating service scope, and making it easy for prospects to take the next step."
    },
    goals: [
      "Build a brand-credible web presence that closes the gap between what PCC delivers and how they appear online",
      "Design a UX that moves B2B visitors through the credibility-to-contact journey without friction",
      "Deliver a production-ready visual design system the client can scale on"
    ],
    constraints: [
      "Remote engagement: Built for an international client with specific local market needs.",
      "B2B trust requirements: High bar for visual polish and professional communication.",
      "Lead-gen focus: Every page must serve the ultimate goal of conversion to contact."
    ],
    myRole: [
      "Complete UX — site structure, page hierarchy, user flows",
      "Visual design system — typography, color, component standards",
      "Production-ready design assets for dev handoff"
    ],
    discovery: {
      heading: "Understanding the Vancouver B2B contracting market.",
      body: "B2B professional services requires a different conversion logic than consumer products — trust-building precedes contact, not the other way around. Contracting firms typically win leads through referral networks; a website's job is to validate, not generate cold traffic.",
      insight: "A visual design that reads as polished, intentional, and premium creates instant differentiation in a category where most competitors look like 2009 WordPress sites."
    },
    strategy: {
      heading: "Three principles. Everything flowed from them.",
      principles: [
        {
          title: "Credibility before content.",
          body: "B2B visitors scan for signals of legitimacy before reading anything. The visual design, imagery, and layout must communicate 'serious firm' within 3 seconds."
        },
        {
          title: "Make the services page do selling work.",
          body: "A services section shouldn't just list what PCC does — it should help a prospect self-identify their need and see PCC as the obvious answer."
        },
        {
          title: "Remove contact friction entirely.",
          body: "No vague 'get in touch' forms buried in the footer. Contact options visible throughout, with a clear CTA attached to every service section."
        }
      ]
    },
    process: {
      heading: "How the work actually happened.",
      steps: [
        { title: "Client discovery and scope definition", body: "Initial workshops to understand business goals and target audience." },
        { title: "Site architecture and page hierarchy", body: "Defining the sitemap and content flow for optimal lead generation." },
        { title: "Wireframes", body: "Homepage, services, about, and contact page structure." },
        { title: "Visual direction and design system", body: "Defining typography, colors, and UI components." },
        { title: "Full UI Design", body: "Production-ready screens for all pages." },
        { title: "Dev handoff", body: "Comprehensive handoff via Figma." }
      ]
    },
    keyDecisions: {
      heading: "The calls that mattered most — and why.",
      decisions: [
        {
          title: "Premium visual language vs. standard industry look",
          before: "Most contracting sites are utilitarian and dated.",
          after: "We chose a premium, architectural aesthetic to instantly signal high-end capability and professionalism."
        }
      ]
    },
    solution: {
      heading: "What shipped.",
      body: "A complete, professional web presence that positions Stratalite as a leader in the Vancouver contracting market.",
      placeholders: [
        "Homepage — Credibility and lead-gen focus",
        "Services overview — Self-identification logic",
        "Project gallery — Proof of work",
        "Contact flow — Frictionless lead capture"
      ]
    },
    outcomes: {
      heading: "What came out of it.",
      items: [
        "Product is live: stratalite.ca — actively used by the client.",
        "Full visual design system: Delivered and handed off for future scaling.",
        "Production-ready assets: Used directly in the live product launch."
      ]
    }
  },
  {
    id: "manbal",
    number: "03",
    title: "Manbal.ai — Campus Connect App",
    location: "Early-stage AI Startup · India",
    industry: "Consumer Mobile · EdTech · Campus Networking",
    tags: ["Consumer Mobile", "EdTech", "Campus Networking", "0→1"],
    description: "Designed end-to-end UX for a skill-based campus networking app — onboarding, peer discovery, and alumni access flows — for an early-stage AI startup targeting verified university communities. Zero to production-ready screens. No template. No handoffs from another designer.",
    outcome: "→ 0→1 product · Designed from blank canvas to production screens",
    liveUrl: "https://manbal.ai",
    liveLabel: "Manbal.ai",
    client: "Manbal.ai",
    role: "Lead UX Designer",
    platform: "Mobile app (iOS/Android)",
    challenge: {
      heading: "Building a community product and need UX from zero?",
      body: "University students have a problem that LinkedIn doesn't solve: they want to connect with peers on their own campus — by skill set, interest, or project need — within a trusted, closed community.\n\nManbal.ai was built to solve this. A gated campus networking app, accessible only to verified university members, modelled on a Slack-style closed cluster with a skill-discovery layer.",
      blocks: [
        "New category: No direct competitor to model after.",
        "Verification friction: Onboarding had to verify university membership without killing completion rates.",
        "Immediate value: Skill-based peer discovery had to be useful from the first session."
      ],
      businessGoal: "Design a complete 0→1 mobile UX for a campus-gated professional networking app that drives high engagement within verified university communities."
    },
    goals: [
      "Design an onboarding flow that verified campus membership without excessive friction",
      "Create a skill-based profile system that made peer discovery genuinely useful",
      "Build the full campus cluster experience — peer discovery, direct connection, alumni access",
      "Take the product from zero to production-ready screens"
    ],
    constraints: [
      "Early-stage startup: High ambiguity and fast iteration required.",
      "Gated community: Strict verification requirements for all users.",
      "Mobile-first: Optimized for on-campus, on-the-go usage."
    ],
    myRole: [
      "User research with student personas",
      "Core user journey design: onboarding, discovery, profile, connection",
      "All screens from wireframe to production UI",
      "Translation of user insights into product decisions"
    ],
    discovery: {
      heading: "Understanding how students actually connect on campus.",
      body: "Student persona research informed the flow design. The product targeted verified university students — campus-specific trust was a core feature, not just a design detail. Alumni access was a distinct user type with a different value proposition.",
      insight: "Students value skill-based discovery over generic networking; they want to find 'the person who knows React' on their campus, not just 'a student'."
    },
    strategy: {
      heading: "Three principles. Everything flowed from them.",
      principles: [
        {
          title: "Trust through verification.",
          body: "Ensure every user is a verified member of the campus community to maintain high signal-to-noise ratio."
        },
        {
          title: "Skill-first discovery.",
          body: "Prioritize skills and interests in profiles to facilitate meaningful project-based connections."
        },
        {
          title: "Frictionless onboarding.",
          body: "Minimize steps to get into the campus cluster while maintaining verification integrity."
        }
      ]
    },
    process: {
      heading: "How the work actually happened.",
      steps: [
        { title: "User research", body: "Interviews and surveys with university students to define personas." },
        { title: "Journey mapping", body: "Defining the core paths for students and alumni." },
        { title: "Wireframing", body: "Iterative design of the onboarding and discovery flows." },
        { title: "Visual design", body: "Creating a modern, campus-centric UI language." },
        { title: "Prototyping", body: "High-fidelity prototypes for user testing and feedback." },
        { title: "Production UI", body: "Final screens for engineering implementation." }
      ]
    },
    keyDecisions: {
      heading: "The calls that mattered most — and why.",
      decisions: [
        {
          title: "Skill-based vs. Department-based discovery",
          before: "Traditional campus directories are organized by major or year.",
          after: "We chose skill-based discovery to better support the 'project-based' way students actually want to collaborate."
        }
      ]
    },
    solution: {
      heading: "What shipped.",
      body: "A complete mobile UX that enables verified campus networking and skill-based peer discovery.",
      placeholders: [
        "Onboarding & Verification flow",
        "Skill-based profile system",
        "Peer discovery dashboard",
        "Campus cluster messaging"
      ]
    },
    outcomes: {
      heading: "What came out of it.",
      items: [
        "0→1 product design: From blank canvas to production-ready screens.",
        "Verified community UX: Successfully balanced security with onboarding speed.",
        "Skill-discovery engine: A unique peer-to-peer connection model for campuses."
      ]
    }
  }
];

export const services = [
  {
    number: "01",
    title: "Product Design (0→1)",
    body: "Taking products from concept to production-ready. User flows, information architecture, wireframes, UI, and design system — all coordinated with your engineering team."
  },
  {
    number: "02",
    title: "UX Audit & Flow Repair",
    body: "Something in your product is leaking users. I'll diagnose what's broken in your onboarding, dashboard, or conversion flow — and redesign it with business outcomes in mind."
  },
  {
    number: "03",
    title: "Design-Led Product Management",
    body: "For teams that need someone who can write PRDs, define feature scope, run stakeholder alignment, and sit between design and engineering without things falling apart."
  },
  {
    number: "04",
    title: "Design System & Handoff",
    body: "Figma component libraries, documented patterns, and dev-ready handoff that reduces revision cycles and makes your design scalable as the team grows."
  },
  {
    number: "05",
    title: "Brand Identity for New Products",
    body: "Logo, visual system, and go-to-market design assets — built to support launch, not just look good in a deck."
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    body: "I start by understanding your business goal, your users, and what's already been tried. Stakeholder interviews, product audit, and scope definition."
  },
  {
    number: "02",
    title: "Research & Diagnosis",
    body: "For redesigns: analytics review, heuristic evaluation, user journey audit. For 0→1 work: user persona definition, competitor benchmarking, flow mapping."
  },
  {
    number: "03",
    title: "Strategy & Structure",
    body: "Before touching Figma, I define the design principles guiding the work and the information architecture supporting the flows."
  },
  {
    number: "04",
    title: "Design & Iteration",
    body: "Wireframes → UI exploration → prototypes → feedback loops. I share work early and often so nothing is a surprise at the end."
  },
  {
    number: "05",
    title: "Dev Collaboration & Handoff",
    body: "I work directly with your developers. Component libraries, redlines, Figma specs — and I stay in the loop during implementation to protect design intent."
  },
  {
    number: "06",
    title: "Review & Iteration",
    body: "Post-launch or post-handoff, I review what shipped against what was designed and flag anything worth refining."
  }
];

export const testimonials = [
  {
    quote: "Abhishek was one of the most structured designers I've worked with. He asked the right product questions before opening Figma — and what he shipped was grounded in actual business logic, not just aesthetics.",
    author: "[Founder / Client Name]",
    role: "[Title], [Company]"
  },
  {
    quote: "Working with Abhishek on the dev handoff was different from most design collaborations. He understood our constraints, adapted the design accordingly, and stayed involved until it was built correctly.",
    author: "[Engineer / Tech Lead]",
    role: "[Title], [Company]"
  },
  {
    quote: "He took our product from zero — no brand, no flows, no screens — and gave us something that looked like a company that had been building for years.",
    author: "[Founder / Client Name]",
    role: "[Title], [Company]"
  }
];

export const faqs = [
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes — two of my three live products were 0→1 builds at early-stage startups. I'm comfortable with ambiguity, limited resources, and the pressure to ship fast."
  },
  {
    question: "Can you work directly with developers?",
    answer: "That's actually one of the stronger parts of how I work. With a CS engineering background, I understand technical constraints and can make trade-off decisions without slowing the team down."
  },
  {
    question: "Do you do research, or just design?",
    answer: "Both. For redesigns, I start with a diagnostic phase — reviewing analytics, auditing the existing flow, and identifying where users are losing confidence. Design without diagnosis is just guessing."
  },
  {
    question: "What if we only need one specific flow redesigned?",
    answer: "That works. A lot of my engagements are focused — onboarding repair, dashboard restructure, or a conversion-critical page. We don't need to redesign the whole product to fix the part that's broken."
  },
  {
    question: "Are you available for full-time PM roles?",
    answer: "Yes — I'm actively exploring design-led PM roles at product-first companies. If that's relevant to you, let's talk."
  },
  {
    question: "What does your design handoff process look like?",
    answer: "Figma component libraries, annotated specs, and documented interaction patterns. I stay available during development to answer questions and review what's being built — not just hand over files and disappear."
  }
];
