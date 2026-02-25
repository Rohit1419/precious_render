/**
 * Sanity Seed Script
 * Populates Sanity with initial content from hardcoded component defaults.
 *
 * Prerequisites:
 *   1. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local
 *   2. Run: bun scripts/seed-sanity.ts
 *
 * This script is idempotent — run it multiple times safely (uses createOrReplace).
 */

// Bun automatically loads .env.local — no dotenv needed.
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || projectId === "your_project_id_here") {
  console.error("❌  Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local first");
  process.exit(1);
}
if (!token || token === "your_write_token_here") {
  console.error("❌  Set SANITY_API_WRITE_TOKEN in .env.local first");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

/**
 * Replace the published document AND delete its draft so that Sanity Studio
 * always shows the freshly seeded content instead of a stale draft.
 */
async function upsert(doc: Record<string, unknown>) {
  const id = doc._id as string;
  await client.createOrReplace(doc);
  // Delete draft if it exists — ignore 404
  await client.delete(`drafts.${id}`).catch(() => null);
}

async function seed() {
  console.log("🌱  Starting Sanity seed...");
  console.log(`   Project: ${projectId}  |  Dataset: ${dataset}`);

  // ─── siteSettings ────────────────────────────────────────────────────────
  await upsert({
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Precious Render",
    tagline: "Specializing in photorealistic jewelry renders, CAD-to-catalog workflows, and on-demand jewelry manufacturing support for brands worldwide",
    contactEmail: "contact@preciousrender.com",
    contactPhone: "+91 XXXXX-XXXXX",
    address: "Mumbai, Maharashtra, India",
    socialLinks: {
      instagram: "https://instagram.com/preciousrender",
      linkedin: "https://linkedin.com/company/preciousrender",
      whatsapp: "https://wa.me/91XXXXXXXXXX",
      youtube: "https://youtube.com/@preciousrender",
    },
    navItems: [
      { _key: "nav1", label: "Services", href: "#services" },
      { _key: "nav2", label: "Portfolio", href: "#portfolio" },
      { _key: "nav3", label: "Process", href: "#process" },
      { _key: "nav4", label: "Pricing", href: "#pricing" },
      { _key: "nav5", label: "Blog", href: "#blog" },
      { _key: "nav6", label: "Contact", href: "#contact" },
    ],
    footerLinkGroups: [
      {
        _key: "group1",
        title: "Services",
        links: [
          { _key: "l1", name: "Still Images", href: "#services" },
          { _key: "l2", name: "360° Animations", href: "#services" },
          { _key: "l3", name: "Marketing Videos", href: "#services" },
          { _key: "l4", name: "On-Body Visuals", href: "#services" },
        ],
      },
      {
        _key: "group2",
        title: "Company",
        links: [
          { _key: "l5", name: "About Us", href: "#about" },
          { _key: "l6", name: "Portfolio", href: "#portfolio" },
          { _key: "l7", name: "Process", href: "#process" },
          { _key: "l8", name: "Testimonials", href: "#testimonials" },
        ],
      },
      {
        _key: "group3",
        title: "Resources",
        links: [
          { _key: "l9", name: "Blog", href: "/blog" },
          { _key: "l10", name: "Pricing", href: "#pricing" },
          { _key: "l11", name: "FAQ", href: "#faq" },
          { _key: "l12", name: "Contact", href: "#contact" },
        ],
      },
    ],
  });
  console.log("  ✓ siteSettings");

  // ─── hero ─────────────────────────────────────────────────────────────────
  await upsert({
    _id: "hero",
    _type: "hero",
    headlinePrefix: "From CAD to",
    headlineHighlight: "Catalog-Ready",
    headlineSuffix: "Renders in Days",
    staticLeadText: "Photorealistic 3D jewelry renders that sell — without a single piece of physical inventory",
    rotatingWords: ["Rings", "Necklaces", "Bracelets", "Earrings", "Pendants"],
    primaryCtaLabel: "See Our Work",
    primaryCtaHref: "#portfolio",
    secondaryCtaLabel: "Get a Free Quote",
    secondaryCtaHref: "#contact",
  });
  console.log("  ✓ hero");

  // ─── features ────────────────────────────────────────────────────────────
  await upsert({
    _id: "features",
    _type: "features",
    sectionTitle: "Why Precious Render?",
    sectionDescription: "Industry-leading photorealistic jewelry renders that drive sales and reduce costs.",
    ctaLabel: "Get Started",
    ctaHref: "#contact",
    features: [
      { _key: "f1", title: "Photorealistic Quality", description: "Ray-traced renders indistinguishable from premium photography — every facet, every reflection, every sparkle captured perfectly.", icon: "zap" },
      { _key: "f2", title: "Jewelry Specialists", description: "Purpose-built for gold, platinum, diamonds and gemstones. We understand how precious metals and stones behave under light.", icon: "gem" },
      { _key: "f3", title: "CAD-Ready Workflow", description: "Send us your Rhino 3dm files — we handle the rest. No physical samples needed.", icon: "camera" },
      { _key: "f4", title: "360° Animations", description: "Turntable and cinematic videos that show every angle, giving customers the confidence to buy online.", icon: "video" },
      { _key: "f5", title: "Fast Turnaround", description: "Test renders in 24-48 hours. Full catalogs of 50-500 SKUs delivered in 2-4 weeks.", icon: "clock" },
      { _key: "f6", title: "Unlimited Revisions", description: "We iterate until the render matches your vision exactly — no extra cost on premium plans.", icon: "settings" },
    ],
  });
  console.log("  ✓ features");

  // ─── problemSolution ─────────────────────────────────────────────────────
  await upsert({
    _id: "problemSolution",
    _type: "problemSolution",
    problemHeading: "Why Traditional Jewelry Inventory Is Holding You Back",
    problemSubtitle: "Physical inventory comes with hidden costs that eat into your profits and slow down your growth",
    painPoints: [
      { _key: "p1", title: "High Upfront Costs", body: "Manufacturing 1000 jewelry pieces costs ₹50L-₹2Cr before your first sale. That capital is locked in metal and stones.", riskLabel: "Risk: Unsold inventory becomes dead capital" },
      { _key: "p2", title: "Storage & Insurance", body: "Storing finished inventory requires security and insurance cost-adding ₹2-5L annually to your overhead.", riskLabel: "Risk: Theft, damage, or degradation of precious materials" },
      { _key: "p3", title: "Slow Market Response", body: "Spotted a trending design on Instagram? By the time you manufacture 500 pieces, the trend has moved on.", riskLabel: "Risk: Overproduction of unpopular designs" },
    ],
    solutionBadge: "The Virtual Inventory Revolution",
    solutionHeading: "From CAD to Catalog - Without Stock",
    solutionBody: "What if you could showcase 1000+ jewelry designs to customers without manufacturing a single piece? With photorealistic 3D rendering, your entire catalog exists digitally-ready to be produced only when customers place orders.",
    solutionCtaLabel: "Get Started",
    solutionCtaHref: "#contact",
    compareBeforeLabel: "CAD",
    compareAfterLabel: "Render",
    benefits: [
      { _key: "b1", icon: "layers", title: "Infinite Showcase", description: "Display 5000 designs on your website using 360° renders and videos-customers see every detail as if the piece was already made." },
      { _key: "b2", icon: "dollar-sign", title: "Zero Capital Lock-In", description: "Instead of investing ₹50L in inventory, spend ₹2-5L on renders. Manufacture only confirmed orders. Save 70-90% upfront costs." },
      { _key: "b3", icon: "flask", title: "Test Before Manufacturing", description: "Launch new collections virtually. Track engagement and pre-orders. Manufacture only winning designs based on real customer interest." },
    ],
    caseStudyLabel: "Real Results",
    caseStudyHeading: "Mumbai Jeweler Cuts Inventory by 80%",
    caseStudyQuote: "We used to manufacture 500 pieces per collection and pray they'd sell. Now we render 2000 designs, customers pre-order their favorites, and we manufacture on-demand. Our working capital freed up by ₹45 lakhs.",
    caseStudyName: "Rajesh Sharma",
    caseStudyBusiness: "Diamond Palace",
    caseStudyStats: [
      { label: "80% reduction in inventory costs" },
      { label: "300% increase in design variety" },
      { label: "28-day faster time-to-market" },
    ],
    comparisonHeading: "The Process Comparison",
    traditionalHeading: "Traditional Model",
    traditionalSteps: ["Design 50 pieces", "Manufacture all upfront (₹50L)", "Store & insure inventory", "Hope customers buy", "Liquidate unsold stock at loss"],
    traditionalResult: "Result: 30-40% unsold inventory",
    virtualHeading: "Virtual Inventory Model",
    virtualBadge: "RECOMMENDED",
    virtualSteps: ["Design 5000+ CAD files", "Render photorealistic images (₹2.5L)", "Upload to website/Instagram", "Customers order specific designs", "Manufacture confirmed orders only"],
    virtualResult: "Result: 0% unsold stock, 100% profit",
    closingCtaHeading: "Ready to Build Your Virtual Jewelry Showroom?",
    closingCtaBody: "We specialize in creating photorealistic 3D renders that look identical to finished jewelry-so realistic, customers can't tell the difference. Here's how we help you transition to virtual inventory:",
    closingCtaLabel: "Get Started",
    closingCtaHref: "#contact",
  });
  console.log("  ✓ problemSolution");

  // ─── services ────────────────────────────────────────────────────────────
  await upsert({
    _id: "services",
    _type: "services",
    badge: "What We Offer",
    sectionTitle: "Our Rendering Services",
    sectionDescription: "Every service is purpose-built for jewelry — from clean product shots to cinematic brand films.",
    services: [
      { _key: "s1", title: "Still Product Images", description: "High-resolution renders for e-commerce listings, catalogues and campaigns.", icon: "camera", features: ["Multiple metal/gem variants", "White or custom backgrounds", "High-res PNG & JPG delivery"] },
      { _key: "s2", title: "360° Turntable Animations", description: "Smooth rotations that let shoppers inspect every facet from any angle.", icon: "video", features: ["12-36 frame turntables", "Optimised for Shopify & WooCommerce", "MP4 and GIF formats"] },
      { _key: "s3", title: "On-Body Visuals", description: "Composite renders showing jewelry on hand, wrist, neck or ear models.", icon: "user", features: ["Realistic skin & shadow integration", "Multiple model options", "Scale-accurate placement"] },
      { _key: "s4", title: "Cinematic Marketing Videos", description: "30-90 second brand films with motion graphics, lighting FX and custom titles.", icon: "film", features: ["Custom storyline & art direction", "Instagram Reels / Stories optimised", "Unlimited revisions on premium plan"] },
      { _key: "s5", title: "CAD Redesign", description: "Don't have a 3dm file? We design jewelry in Rhino from scratch or reference images.", icon: "pen-tool", features: ["Rhino 3dm delivery", "2-3 business day turnaround", "Seamless handover to rendering"] },
      { _key: "s6", title: "Measurement Images", description: "Technical dimension renders used for accurate buyer sizing guides.", icon: "ruler", features: ["Annotated top / side views", "Accurate to CAD geometry", "High-res PNG delivery"] },
    ],
  });
  console.log("  ✓ services");

  // ─── portfolioConfig ─────────────────────────────────────────────────────
  await upsert({
    _id: "portfolioConfig",
    _type: "portfolioConfig",
    badge: "Our Portfolio",
    sectionTitle: "Featured Projects",
    categories: [
      { _key: "c1", id: "still", label: "Still Images", description: "Clean, high-quality product shots focused on clarity, detail, and perfect lighting for e-commerce." },
      { _key: "c2", id: "classic", label: "Classic Animations", description: "Elegant 360-degree rotations and simple movements to showcase the full geometry of your designs." },
      { _key: "c3", id: "creative", label: "Creative Animations", description: "Dynamic motion graphics and cinematic storytelling to elevate your brand marketing." },
      { _key: "c4", id: "onbody", label: "On-Body Visuals", description: "Realistic visualizations of jewelry worn on models to help customers visualize scale and style." },
    ],
  });
  console.log("  ✓ portfolioConfig");

  // ─── process ─────────────────────────────────────────────────────────────
  await upsert({
    _id: "process",
    _type: "process",
    badge: "How It Works",
    sectionTitle: "From CAD File to Catalog — in 4 Steps",
    sectionDescription: "A streamlined workflow that gets your jewelry online fast, without physical samples.",
    steps: [
      { _key: "st1", icon: "file-code", title: "Submit Your CAD File", description: "Send us your Rhino 3dm files via our secure upload portal. No physical samples needed — ever." },
      { _key: "st2", icon: "palette", title: "Choose Materials & Style", description: "Select metal colour, gemstone variants, background style, and any brand guidelines to follow." },
      { _key: "st3", icon: "eye", title: "Review Test Renders", description: "Receive sample renders within 24-48 hours. Request any adjustments before full production begins." },
      { _key: "st4", icon: "download", title: "Receive Final Assets", description: "Download production-ready images and videos, optimised for your website, social, and print." },
    ],
  });
  console.log("  ✓ process");

  // ─── testimonials ────────────────────────────────────────────────────────
  await upsert({
    _id: "testimonials",
    _type: "testimonials",
    badge: "Client Testimonials",
    sectionTitle: "What Our Clients Say",
    sectionDescription: "Don't just take our word for it. Here's what our clients say about working with us.",
    footerLabel: "Trusted by businesses of all sizes",
    testimonials: [
      { _key: "t1", name: "Priya Mehta", title: "E-commerce Director, Glitz Jewelry Mumbai", quote: "Precious Render transformed our entire catalog of 2000+ rings. The photorealistic quality exceeded our expectations, and customers can't tell the difference from professional photography. Our online sales increased 45%.", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" },
      { _key: "t2", name: "Rajesh Sharma", title: "Owner, Diamond Palace", quote: "The turnaround time was incredible-500 SKU renders delivered in just 2 weeks without compromising quality. The team's expertise in jewelry-specific lighting made every diamond sparkle perfectly.", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" },
      { _key: "t3", name: "Ananya Desai", title: "Marketing Manager, Heritage Jewellers", quote: "The Instagram marketing videos they created for our new collection went viral-over 200K views! The cinematic animations captured the luxury feel we wanted and drove massive traffic to our store.", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" },
      { _key: "t4", name: "Neha Kapoor", title: "Founder, Luxora Fine Jewelry", quote: "Their on-body jewelry renders look so natural-customers love seeing how pieces look when worn. This has significantly reduced our return rates and increased buyer confidence for high-ticket items.", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" },
      { _key: "t5", name: "Vikram Singh", title: "Creative Director, Royal Gems Export", quote: "Working with a team that understands both rendering and jewelry manufacturing made all the difference. They knew exactly how to handle complex gem cuts and metal finishes.", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" },
    ],
    companyLogos: [
      { _key: "logo1", name: "Emerald", invertOnDark: false },
      { _key: "logo2", name: "Kohira", invertOnDark: false },
      { _key: "logo3", name: "Limelight", invertOnDark: true },
      { _key: "logo4", name: "Uare", invertOnDark: true },
      { _key: "logo5", name: "Andor", invertOnDark: true },
    ],
  });
  console.log("  ✓ testimonials");

  // ─── pricing ─────────────────────────────────────────────────────────────
  await upsert({
    _id: "pricing",
    _type: "pricing",
    badge: "Pricing Plans",
    sectionTitle: "Transparent Pricing",
    sectionDescription: "Choose the plan that fits your business. All plans include photorealistic quality and dedicated support.",
    footerText: "Need a custom solution? Contact us for a personalized quote.",
    footerCtaLabel: "Contact Us",
    footerCtaHref: "#contact",
    plans: [
      {
        _key: "plan1",
        name: "Essential Product Catalogue",
        description: "Perfect starter bundle for high-converting product listings across all metal colors.",
        price: "₹4,499",
        highlighted: false,
        features: ["3 x 360° turntable videos", "12 x high-res JPG renders", "12 x high-res PNG renders", "Clean studio lighting", "Photoreal metals & gems", "1 revision", "2-3 week delivery"],
        ctaLabel: "Get Started",
        ctaHref: "#contact",
      },
      {
        _key: "plan2",
        name: "Complete E-Commerce Powerhouse",
        description: "A complete end-to-end workflow from CAD to final on-body visuals for serious e-commerce brands.",
        price: "₹9,999",
        highlighted: true,
        features: ["CAD designing included", "3 x 360° turntable videos", "12 x high-res JPG renders", "12 x high-res PNG renders", "1 high-res on-body image", "2 measurement images", "Premium studio lighting", "Ultra-realistic materials", "5-7 day delivery", "Unlimited revisions"],
        ctaLabel: "Get Started",
        ctaHref: "#contact",
      },
      {
        _key: "plan3",
        name: "Cinematic Brand Storytelling",
        description: "Cinematic video experiences crafted to showcase your jewelry as a luxury hero product.",
        price: "₹49,999+",
        highlighted: false,
        features: ["30-60 sec cinematic video", "Custom storyline + Art direction", "Multiple cinematic & macro shots", "Cinematic lighting setup", "Ultra-realistic materials with FX", "Optional On-body visuals add-on", "7-10 day delivery", "Unlimited revisions"],
        ctaLabel: "Get Started",
        ctaHref: "#contact",
      },
    ],
  });
  console.log("  ✓ pricing");

  // ─── faq ─────────────────────────────────────────────────────────────────
  await upsert({
    _id: "faq",
    _type: "faq",
    badge: "FAQ",
    sectionTitle: "Frequently Asked Questions",
    sectionDescription: "Find answers to common questions about our jewelry rendering services.",
    faqs: [
      { _key: "q1", question: "What is the Virtual Inventory Model?", answer: "Digital 3D renders showcase your entire catalog without physical inventory. Customers browse and order specific pieces-you manufacture only what's sold." },
      { _key: "q2", question: "How long does it take to complete a project?", answer: "Test renders in 24-48 hours. Full projects (50-500 SKUs) in 2-4 weeks. Rush delivery available for additional fee." },
      { _key: "q3", question: "How much can I save with virtual inventory?", answer: "Reduce inventory costs by 70-90%. Instead of ₹50L upfront manufacturing, invest ₹2-5L in renders and manufacture only confirmed orders." },
      { _key: "q4", question: "Are the files compatible with my website?", answer: "Yes. We deliver 360° videos (MP4), high-res images (PNG/JPG), and on-body composites optimized for Shopify, WooCommerce, Amazon, and custom sites." },
      { _key: "q5", question: "Do I need to send physical jewelry?", answer: "Zero physical inventory. Designs exist as digital files only. Manufacture on-demand when customers order. Eliminates unsold stock, storage costs, and insurance." },
      { _key: "q6", question: "What file formats do you accept?", answer: "Only Rhino 3dm files are accepted. We do not accept JewelCAD, OBJ, FBX, STL or others. We can create the CAD model from scratch for a fee (2-3 business day turnaround)." },
      { _key: "q7", question: "How long does rendering take for animations?", answer: "Rendering time for Creative Marketing Animations depends on the theme's complexity and duration, typically ranging from 1 to 3 weeks." },
      { _key: "q8", question: "Can you match my brand style?", answer: "Yes. Send us reference images of your existing photography style, lighting preferences, and product presentation. We'll match your aesthetic across the entire catalog." },
      { _key: "q9", question: "Do you offer rush services?", answer: "Yes, for an additional fee (typically 25-50% premium). Rush projects are prioritized in our render queue." },
      { _key: "q10", question: "What can be customized in the renders?", answer: "Material adjustments (metal finish, gemstone appearance), lighting setup (brightness, direction, reflections), camera angles, and positioning." },
      { _key: "q11", question: "Do you create social media content?", answer: "Yes. We create 15-60 second cinematic videos optimized for Instagram Reels, Stories, and Feed posts with animations, graphics, and text overlays." },
    ],
  });
  console.log("  ✓ faq");

  // ─── sample blogPosts ─────────────────────────────────────────────────────
  const blogSamples = [
    { _id: "blog-1", title: "Complete Guide: Virtual Jewelry Inventory for Modern Jewelers", category: "guide", readTime: "10 min read", excerpt: "Learn how to transition your jewelry business from traditional physical inventory to a lean virtual inventory model using 3D renders.", coverImageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop", author: "Precious Render Team" },
    { _id: "blog-2", title: "CAD to Catalog: Launch 1000 Designs Without Manufacturing", category: "workflow", readTime: "8 min read", excerpt: "A step-by-step walkthrough of the CAD-to-catalog workflow that lets jewelers list thousands of designs without manufacturing a single piece.", coverImageUrl: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2070&auto=format&fit=crop", author: "Precious Render Team" },
    { _id: "blog-3", title: "Reduce Jewelry Inventory Costs by 70%: Case Study", category: "case-study", readTime: "6 min read", excerpt: "How a Mumbai-based jeweler slashed inventory investment from ₹50L to ₹2.5L using photorealistic 3D renders and on-demand manufacturing.", coverImageUrl: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2070&auto=format&fit=crop", author: "Precious Render Team" },
  ];

  for (const post of blogSamples) {
    await upsert({
      ...post,
      _type: "blogPost",
      slug: { current: post._id.replace("blog-", "").replace(/-/g, "-") + "-" + post._id.split("-")[1] },
      publishedAt: new Date().toISOString(),
    });
  }
  console.log("  ✓ blogPosts (3 samples)");

  console.log("\n✅  Seed complete! Open http://localhost:3000/studio to verify.");
}

seed().catch((err) => {
  console.error("❌  Seed failed:", err.message);
  process.exit(1);
});
