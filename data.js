/* All portfolio content lives here. Edit this file to update the site. */
window.PORTFOLIO = {
  name: "Sanket Khatri",
  title: "Senior iOS Developer",
  tagline: "I build native iOS apps that ship — and the tools that debug them.",
  location: "Ahmedabad, India",
  remote: "Open to remote",
  status: "Open to senior iOS roles",
  email: "sanketkhatri97@gmail.com",
  github: "https://github.com/sanketk2020",
  linkedin: "https://www.linkedin.com/in/sanket-khatri-62255017a/",
  languages: "English, Hindi, Gujarati",
  years: "6+",
  appsBuilt: 13,            // apps featured on the site (built from scratch or led)
  appsTotal: "20+",        // every app worked on
  appsOnStore: "10+",      // apps published to the App Store
  stars: 138,

  bio: [
    "Senior iOS developer with six years building native apps across fintech, healthcare, food delivery, ride-hailing and IoT.",
    "I came into iOS through a job-oriented course at TOPS Technologies in late 2019, joined Hyperlink Infosystem as a trainee in January 2020, and spent the next six years shipping client apps in Swift and UIKit: trading platforms, healthcare consultations, delivery and ride-hailing, each with its own real-time data, payments and edge cases.",
    "Since March 2026 I've been at E2logy Software Solutions, working on a large legacy Objective-C app for smart-home and IoT products. I investigate production crashes with Crashlytics, integrated a Flutter module using Add-to-App, and modernise features without destabilising an app people depend on.",
    "I own the parts most people avoid: App Store releases with their certificates and code signing, performance work in Instruments, and crashes that only reproduce on someone else's device. I review code, mentor juniors, and build my own tools when debugging gets tedious. That's where ScreenRadarKit came from."
  ],

  services: [
    { icon: "phone", color: "blue", title: "Native iOS apps", text: "New apps in Swift and UIKit with an architecture that survives growth, built from the first screen to a production-ready release." },
    { icon: "ship", color: "violet", title: "App Store publishing", text: "Certificates, provisioning profiles, code signing, TestFlight and App Store Connect submissions, handled end to end so every release goes out cleanly." },
    { icon: "wrench", color: "orange", title: "Legacy rescue", text: "Large Objective-C codebases that need modernising without breaking: crash triage with Crashlytics, performance work in Instruments, and Flutter modules added through Add-to-App." },
    { icon: "bolt", color: "green", title: "Real-time & payments", text: "Live data over Socket.IO and WebSockets, maps and location, and payments with Razorpay, Stripe, PayPal and in-app purchases." }
  ],

  process: [
    { title: "Read", text: "Requirements, edge cases, the feel" },
    { title: "Build", text: "Swift, UIKit, Objective-C" },
    { title: "Profile", text: "Instruments, Crashlytics, GCD" },
    { title: "Ship", text: "TestFlight, signing, App Store" }
  ],

  experience: [
    {
      role: "Senior Software Developer", company: "E2logy Software Solutions", initials: "E2", color: "indigo",
      place: "Ahmedabad · Full-time", dates: "Mar 2026 – Present", current: true,
      points: [
        "Maintain and extend a large legacy Objective-C enterprise app that powers smart-home and IoT connected-device products.",
        "Integrated a Flutter module into the Objective-C codebase using Add-to-App, so new features ship cross-platform without a rewrite.",
        "Find the root cause of client-reported issues and production crashes with Firebase Crashlytics.",
        "Modernise legacy features with cross-functional teams while keeping the app stable, in Agile with Azure Boards."
      ],
      tech: ["Objective-C", "Swift", "Flutter", "Dart", "Crashlytics", "Azure Boards"]
    },
    {
      role: "iOS Developer", company: "Hyperlink Infosystem", initials: "HI", color: "blue",
      place: "Ahmedabad · Full-time", dates: "Jun 2020 – Mar 2026",
      points: [
        "Delivered 10+ native iOS apps from concept to App Store launch across fintech, healthcare, food delivery, ride-hailing, travel and social.",
        "Integrated REST APIs, WebSockets, Socket.IO, Firebase, Google Maps SDK, push notifications and Zendesk for real-time workflows.",
        "Implemented in-app purchases, deep linking, social login, Razorpay payments and AWS S3 media uploads.",
        "Built VoIP calling with CallKit and PushKit.",
        "Owned App Store and TestFlight releases end to end: certificates, provisioning profiles and code signing.",
        "Profiled performance with Instruments and GCD, and improved crash-free sessions by tracking down crashes in Crashlytics.",
        "Reviewed code and mentored junior developers in Agile/Scrum teams."
      ],
      tech: ["Swift", "UIKit", "Alamofire", "Firebase", "Socket.IO", "Google Maps", "CallKit", "Core Data"]
    },
    {
      role: "iOS Trainee", company: "Hyperlink Infosystem", initials: "HI", color: "blue",
      place: "Ahmedabad", dates: "Jan 2020 – Jun 2020",
      points: ["Six-month in-house training in Swift, UIKit and team workflows, from single screens to API parsing, before moving onto client projects."],
      tech: ["Swift", "UIKit", "JSON"]
    },
    {
      role: "iPhone Application Developer course", company: "TOPS Technologies", initials: "TT", color: "teal",
      place: "Ahmedabad", dates: "2019",
      points: ["Job-oriented training in the foundations of native iOS: Swift, UIKit and Xcode."],
      tech: ["Swift", "Xcode"]
    }
  ],

  categories: [
    { id: "all", label: "All" },
    { id: "fintech", label: "Fintech" },
    { id: "delivery", label: "Delivery" },
    { id: "iot", label: "IoT" },
    { id: "health", label: "Health" },
    { id: "social", label: "Social" }
  ],

  projects: [
    {
      id: "investment-dojo", appStore: "https://apps.apple.com/us/developer/investment-dojo-inc/id1661073514", name: "Investment Dojo", cat: "fintech", label: "Fintech", years: "2023 – 2026", company: "Hyperlink", status: "Shipped",
      icon: "chart", color: ["#30d158", "#0a7d3b"], featured: true,
      summary: "Stock & crypto trading competitions",
      description: "A stock market simulator where users compete in live and delayed trading competitions across stocks and crypto. Live market data streams in over WebSockets, and the UI stays smooth and responsive while prices update.",
      features: ["Live and delayed trading competitions", "Leaderboards and rankings", "Portfolio tracking and trade history", "In-app chat"],
      tech: ["Swift", "UIKit", "WebSockets", "Socket.IO", "Firebase", "PayPal"]
    },
    {
      id: "foodini", appStore: "https://apps.apple.com/ae/app/foodini-porosit-ushqim-online/id1572458684", name: "Foodini", cat: "delivery", label: "Food delivery", years: "2021 – now", company: "Hyperlink", status: "Live",
      icon: "bag", color: ["#ff9f0a", "#ff5e00"], featured: true, impact: "#2 in Food & Drink in Albania",
      summary: "Customer and driver delivery apps",
      description: "A multi-sided delivery platform with customer and driver apps for ordering food and goods from stores and restaurants, built so customers, stores and drivers stay in sync in real time.",
      features: ["Ordering from stores and restaurants", "Order management", "Live driver tracking on Google Maps", "Real-time driver updates"],
      tech: ["Swift", "UIKit", "Google Maps", "Firebase", "Alamofire", "APNs"]
    },
    {
      id: "smart-residential", appStore: "https://apps.apple.com/sg/app/iplusliving/id1168612999", name: "iPlus / Fermax", cat: "iot", label: "IoT", years: "2026 – now", company: "E2logy", status: "Live", ongoing: true,
      icon: "house", color: ["#5e5ce6", "#2c2a9e"], featured: true,
      summary: "Smart-home, video intercom and VoIP calling",
      description: "An all-in-one smart-living and community platform for residents and building managers. Residents answer video intercom and doorbell calls over VoIP (built on the Linphone SDK), view IP cameras, open doors over Bluetooth (BLE) and manage smart-home devices. The legacy Objective-C app now embeds a Flutter module through Add-to-App.",
      features: ["VoIP audio and video calling with the Linphone SDK", "Video intercom and doorbell calls", "Live IP camera viewing", "Bluetooth (BLE) door access", "Smart-home device and community management", "Flutter module inside a native Objective-C app"],
      tech: ["Objective-C", "Linphone SDK", "Flutter", "VoIP", "BLE", "Add-to-App", "Platform Channels"]
    },
    {
      id: "payride", name: "Payride", cat: "delivery", label: "Ride-hailing", years: "2021", company: "Hyperlink", status: "Shipped",
      icon: "car", color: ["#ffd60a", "#ff9f0a"], featured: true,
      summary: "Ride booking for riders and drivers",
      description: "A ride-booking platform with separate customer and driver apps, handling real-time ride requests, location tracking and in-app navigation with Google Maps route guidance.",
      features: ["Real-time ride requests", "Live location and navigation", "Card, wallet and cash payments", "Promo codes and two-way ratings"],
      tech: ["Swift", "UIKit", "Google Maps", "Firebase", "APNs"]
    },
    {
      id: "wealth", appStore: "https://apps.apple.com/in/app/ivestor/id1628119841", name: "iVestor", cat: "fintech", label: "Fintech", years: "2025 – now", company: "Hyperlink", status: "Live",
      icon: "chart", color: ["#0a84ff", "#003d99"],
      summary: "Trading, IPOs, cards and savings",
      description: "A large-scale finance and investment app for stock trading, portfolio tracking, IPO subscriptions, digital cards and savings. I built feature modules, resolved production issues, and planned and prioritised work with product managers and backend teams.",
      features: ["Stock trading and portfolio tracking", "IPO subscriptions", "Digital cards and savings"],
      tech: ["Swift", "UIKit", "MVVM", "REST APIs"]
    },
    {
      id: "hvac", appStore: "https://apps.apple.com/us/app/daikin-remote-monitoring-sys/id1614806994", name: "DaikinRMS", cat: "iot", label: "IoT", years: "2026 – now", company: "E2logy", status: "Live", ongoing: true,
      icon: "thermo", color: ["#64d2ff", "#0a84ff"],
      summary: "24/7 HVAC health monitoring",
      description: "A cloud-based HVAC diagnostics platform that tracks system health around the clock, with predictive failure detection, real-time alerts for faults like refrigerant leaks, and logged performance metrics.",
      features: ["Predictive failure detection", "Real-time fault alerts", "Performance metrics"],
      tech: ["iOS", "Real-time alerts"]
    },
    {
      id: "care-blue", name: "Care Blue", cat: "health", label: "Healthcare", years: "2025", company: "Hyperlink", status: "Shipped",
      icon: "heart", color: ["#ff375f", "#c21843"],
      summary: "Health records and doctor consults",
      description: "Patients create and manage personal health records, upload reports and media for doctors to review, and pay for consultations, with push notifications for appointment updates.",
      features: ["Personal health records", "Secure report and media upload", "Paid consultations", "Appointment notifications"],
      tech: ["Swift", "UIKit", "Razorpay", "APNs"]
    },
    {
      id: "food-discovery", name: "Rapido & Rapido Driver", cat: "delivery", label: "Food delivery", years: "2024", company: "Hyperlink", status: "Shipped",
      icon: "fork", color: ["#ff6961", "#d63a2f"],
      summary: "Restaurant ordering and driver apps",
      description: "Two apps for a restaurant platform: Rapido, where customers search restaurants, browse cuisines, reserve dine-in tables and schedule orders, and Rapido Driver, which takes drivers to every pickup and drop-off on Google Maps. Both support several payment methods and multiple languages.",
      features: ["Restaurant search and cuisines", "Dine-in reservations and scheduled orders", "Driver app with live location on Google Maps", "Route guidance to pickups and drop-offs", "Card, wallet and cash on delivery", "Multiple languages"],
      tech: ["Swift", "UIKit", "Google Maps", "Localization"]
    },
    {
      id: "lugawash", name: "LugAwash", cat: "delivery", label: "On-demand", years: "2022", company: "Hyperlink", status: "Shipped",
      icon: "shirt", color: ["#40c8e0", "#007a99"],
      summary: "Laundry pickup and delivery",
      description: "A laundry service with paired customer and pickup-driver apps. Users schedule pickups and deliveries, and the full order lifecycle is tracked end to end.",
      features: ["Scheduled pickups and deliveries", "Order lifecycle management", "Live driver tracking", "Push updates"],
      tech: ["Swift", "UIKit", "Google Maps", "APNs"]
    },
    {
      id: "cor", name: "COR", cat: "social", label: "Business", years: "2025", company: "Hyperlink", status: "On hold",
      icon: "briefcase", color: ["#8e8e93", "#48484a"],
      summary: "Multi-role client management",
      description: "A client management system for organisations, employees and their clients, with role-based modules for project tracking, client communication and team coordination, including VoIP calls that ring like native phone calls through CallKit.",
      features: ["Role-based modules", "Project tracking", "VoIP calling with CallKit", "Real-time updates over Socket.IO", "Stripe payments"],
      tech: ["Swift", "UIKit", "CallKit", "VoIP", "Socket.IO", "Stripe"]
    },
    {
      id: "querify", name: "Querify", cat: "social", label: "Social", years: "2020", company: "Hyperlink", status: "Shipped",
      icon: "bubble", color: ["#bf5af2", "#7a2bb5"],
      summary: "Social Q&A",
      description: "A social Q&A app where users post structured questions and collect answers from friends and the wider community. I built it from scratch through to its App Store launch.",
      features: ["Structured questions", "Answers, comments and interactions", "Firebase backend"],
      tech: ["Swift", "UIKit", "Firebase", "Alamofire"]
    },
    {
      id: "tell99", name: "Tell99", cat: "social", label: "Public safety", years: "2020", company: "Hyperlink", status: "Shipped",
      icon: "shield", color: ["#ff453a", "#8a1c16"],
      summary: "Crime reporting with evidence",
      description: "Users report incidents with photo and video evidence and call emergency services directly, with secure uploads, incident locations on a map, and push alerts.",
      features: ["Incident reports with media", "One-tap emergency calls", "Incident map", "Push alerts"],
      tech: ["Swift", "UIKit", "Google Maps", "APNs"]
    },
    {
      id: "get-along", name: "Get Along", cat: "social", label: "Travel", years: "2020", company: "Hyperlink", status: "Shipped",
      icon: "map", color: ["#32d74b", "#1f8a35"],
      summary: "Group travel sharing",
      description: "A travel guidance and social sharing app where users create groups, share locations, upload photos and videos, and comment, with Google Maps for discovery.",
      features: ["Travel groups", "Location sharing", "Photo and video posts"],
      tech: ["Swift", "UIKit", "Google Maps", "Firebase"]
    }
  ],

  openSource: [
    {
      name: "ScreenRadarKit", kind: "Swift Package · iOS 13+", art: "assets/screenradarkit.svg",
      url: "https://github.com/sanketk2020/ScreenRadarKit",
      text: "A debug overlay that shows which UIViewController is on screen while you test. It detects screens with method swizzling, installs through SPM with one line of setup, and shows a navigation trail with optional time on each screen.",
      tech: ["Swift", "SPM", "Method swizzling", "UIKit"]
    },
    {
      name: "MacSpaceCleaner", kind: "macOS app", icon: "trash", color: ["#5ac8fa", "#0a6cd6"], stars: true,
      url: "https://github.com/sanketk2020/MacSpaceCleaner",
      text: "A lightweight macOS app that frees up disk space by clearing caches, temporary data and other files you don't need.",
      tech: ["Swift", "macOS"]
    },
    {
      name: "CipherDen", kind: "macOS utility", icon: "lock", color: ["#636366", "#1c1c1e"],
      url: "https://github.com/sanketk2020/CipherDen",
      text: "Encrypt and decrypt JSON or text with a password, entirely on your Mac, with a clean editor and one-tap copy.",
      tech: ["SwiftUI", "macOS"]
    }
  ],

  skills: [
    { group: "iOS & Apple platforms", items: [["Swift", 1], ["UIKit", 1], ["SwiftUI"], ["Combine"], ["Objective-C", 0, "Legacy"], ["Auto Layout"], ["Core Data"], ["Core Location"], ["Keychain"], ["GCD"], ["Memory management"], ["macOS apps"]] },
    { group: "Cross-platform", items: [["Flutter"], ["Dart"], ["Flutter Add-to-App"], ["Platform Channels"]] },
    { group: "Architecture", items: [["MVVM", 1], ["MVC", 1], ["Clean Architecture"], ["Modular architecture"], ["Dependency injection"]] },
    { group: "Networking & real-time", items: [["REST APIs", 1], ["JSON"], ["URLSession"], ["Alamofire"], ["WebSockets", 1], ["Socket.IO"]] },
    { group: "SDKs & integrations", items: [["Firebase", 1], ["Crashlytics", 1], ["FCM / APNs"], ["In-app purchases"], ["Deep linking"], ["Social login"], ["Razorpay"], ["Stripe"], ["PayPal"], ["Google Maps SDK"], ["CallKit & PushKit"], ["Linphone SDK (VoIP)"], ["Bluetooth (BLE)"], ["AWS S3"], ["Zendesk"]] },
    { group: "App Store & release", items: [["App Store Connect", 1], ["TestFlight", 1], ["Code signing", 1], ["Provisioning profiles"], ["Certificates & App IDs"], ["GitLab CI/CD"], ["Azure Pipelines"], ["Instruments"], ["Xcode", 1], ["Git"], ["Swift Package Manager"], ["CocoaPods"], ["JIRA"], ["Postman"]] },
    { group: "Ways of working & AI", items: [["Code review"], ["Mentoring juniors"], ["Agile / Scrum"], ["Claude Code"], ["OpenAI Codex"], ["ChatGPT"]] }
  ],

  education: [
    { title: "B.E. Computer Engineering", where: "Ahmedabad Institute of Technology (GTU)", when: "2015 – 2019", detail: "CGPA 7.42" },
    { title: "H.S.C.", where: "A-One High School (GSHSEB)", when: "2015" },
    { title: "S.S.C.", where: "A-One High School (GSEB)", when: "2013" }
  ],

  certificates: [
    { issuer: "Apple", title: "Apple Ads Certified", img: "assets/certificates/apple-ads.jpg", date: "2026", style: "apple" },
    { issuer: "Udemy", title: "Flutter & Dart — The Complete Guide", img: "assets/certificates/udemy-flutter-dart.jpg", date: "Jun 2026 · 30 hrs", style: "udemy", url: "https://ude.my/UC-17cb1867-0d94-4598-877a-fde32a6a18ca" },
    { issuer: "OpenAI Academy", title: "AI Foundations", img: "assets/certificates/openai-ai-foundations.jpg", date: "Aug 2026", style: "openai", url: "https://academy.openai.com/public/certificate/aj7rknlf21" },
    { issuer: "OpenAI Academy", title: "Applied AI Foundations", img: "assets/certificates/openai-applied-ai-foundations.jpg", date: "Aug 2026", style: "openai" },
    { issuer: "OpenAI Academy", title: "Agents and Workflows", img: "assets/certificates/openai-agents-and-workflows.jpg", date: "Aug 2026", style: "openai" },
    { issuer: "Anthropic", title: "Claude Code in Action", img: "assets/certificates/anthropic-claude-code-in-action.jpg", date: "2026", style: "anthropic" },
    { issuer: "Anthropic", title: "Claude Code 101", img: "assets/certificates/anthropic-claude-code-101.jpg", date: "2026", style: "anthropic" },
    { issuer: "Anthropic", title: "Claude Platform 101", img: "assets/certificates/anthropic-claude-platform-101.jpg", date: "2026", style: "anthropic" },
    { issuer: "Anthropic", title: "Claude 101", img: "assets/certificates/anthropic-claude-101.jpg", date: "2026", style: "anthropic" },
    { issuer: "Anthropic", title: "Introduction to Subagents", img: "assets/certificates/anthropic-intro-to-subagents.jpg", date: "2026", style: "anthropic" },
    { issuer: "Anthropic", title: "Introduction to Agent Skills", img: "assets/certificates/anthropic-intro-to-agent-skills.jpg", date: "2026", style: "anthropic" },
    { issuer: "Anthropic", title: "AI Fluency: Capabilities & Limitations", img: "assets/certificates/anthropic-ai-fluency-capabilities.jpg", date: "2026", style: "anthropic" },
    { issuer: "Anthropic × CodePath", title: "AI Fluency for Builders", img: "assets/certificates/anthropic-ai-fluency-for-builders.jpg", date: "2026", style: "anthropic" },
    { issuer: "Anthropic × PayPal", title: "AI Fluency for Small Businesses", img: "assets/certificates/anthropic-ai-fluency-small-businesses.jpg", date: "2026", style: "anthropic" },
    { issuer: "TOPS Technologies", title: "iPhone Application Developer", img: "assets/certificates/tops-iphone-developer.jpg", date: "Dec 2019", style: "tops" }
  ],

  /* Cover letter: shown on cover-letter.html and built as a PDF on download, dated the day it is downloaded. */
  coverLetter: {
    greeting: "Dear Hiring Team,",
    paragraphs: [
      "I am writing to express my interest in a Senior iOS Developer role. I bring six years of hands-on experience building, shipping and maintaining native iOS apps in Swift, UIKit and Objective-C.",
      "Since starting my career in January 2020, I have worked on 20+ apps across fintech, healthcare, food delivery and IoT. My work covers REST APIs, real-time socket features, Core Data, complex UI flows, crash debugging and performance optimisation. One of these apps, a food-delivery platform, reached #2 in Food & Drink in Albania.",
      "What sets me apart is App Store publishing. I own releases end to end: certificates, provisioning profiles, code signing, TestFlight and App Store Connect submissions. Today I also maintain a large Objective-C codebase for smart-home and IoT products, modernising it without destabilising it.",
      "I enjoy understanding the 'why' behind features, and I work closely with designers, backend teams and junior developers to deliver polished, stable apps.",
      "My CV is available to download on my portfolio, and I would welcome the chance to discuss how I can add value to your team.",
      "Thank you for your time and consideration."
    ],
    signoff: "Warm regards,"
  }
};
