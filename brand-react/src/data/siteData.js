// SITE DATA — Single source of truth for all content
// Ready for future Supabase integration

export const siteConfig = {
  name: "Nandan Kumar Singh",
  tagline: "High Performance Coach",
  email: "hello@example.com",
  phone: "+91 62321 38581",
  location: "Raipur, Chhattisgarh",
  socials: {
    instagram: "https://www.instagram.com/coachnandan?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
    facebook: "#",
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/nandan-kumar-7a6771413/",
  },
};

export const navData = {
  logo: { name: "Nandan Kumar Singh", subtitle: "High Performance Coach" },
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Journey", href: "/journey" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Book Appointment", href: "/book-appointment" },
};

export const heroData = {
  eyebrow: "EXECUTIVE PRESIDENT'S TEAM LEADER",
  heading: ["A Journey of", "Wellness, Purpose & Leadership", "for Over", "15 Years."],
  description: "Starting in 2008 with ₹15,000/month to qualifying as Executive President's Team — empowering individuals and leaders to achieve physical vitality and sustainable success.",
  primaryCTA: { label: "Book Appointment", href: "/book-appointment" },
  secondaryCTA: { label: "Watch Success Stories", href: "#success-stories" },
  image: "/images/nandan_hero_blue.png",
  imageAlt: "Nandan Kumar Singh – High Performance Coach",
  stats: [
    { number: 15, suffix: "+", label: "Years Experience" },
    { number: 500, suffix: "+", label: "Lives Impacted" },
    { number: 100, suffix: "+", label: "Events Conducted" },
  ],
};

export const expertiseData = {
  eyebrow: "WHAT WE OFFER",
  heading: "Holistic Wellness",
  headingItalic: "Solutions",
  subtext: "Comprehensive pathways and science-backed support for your daily vitality.",
  items: [
    { id: "w1", icon: "Activity", title: "Weight Management" },
    { id: "w2", icon: "Dumbbell", title: "Sports Nutrition" },
    { id: "w3", icon: "Heart", title: "Daily Health" },
    { id: "w4", icon: "Zap", title: "Energy & Hydration" },
    { id: "w5", icon: "Sparkles", title: "Body & Skin Care" },
    { id: "w6", icon: "BookOpen", title: "Nutrition Education" },
    { id: "w7", icon: "Briefcase", title: "Business Opportunity" },
    { id: "w8", icon: "ShieldCheck", title: "Quality Assurance" },
  ],
};

export const corePillarsData = {
  eyebrow: "CORE PILLARS",
  heading: "Pathways to",
  headingItalic: "Excellence",
  subtext: "Choose your path to optimization, whether through health vitality, business growth, or immersive events.",
  items: [
    { id: "p1", title: "VITALITY", heading: "Health Coaching", description: "Holistic systems for physical vitality, personalized daily nutrition, and sustainable weight management programs.", cta: "Discover Now", href: "/health-coaching" },
    { id: "p2", title: "GROWTH", heading: "Business Coaching", description: "Scalable leadership strategies, financial growth opportunities, and dedicated mentorship for modern entrepreneurs.", cta: "Discover Now", href: "/business-coaching" },
    { id: "p3", title: "COMMUNITY", heading: "Events & Workshops", description: "Connect with community, join immersive workshops, leadership seminars, and transformational wellness experiences.", cta: "Discover Now", href: "/events-workshops" },
  ]
};

export const successStoriesData = {
  eyebrow: "SUCCESS STORIES",
  heading: "Real",
  headingItalic: "Transformations",
  subtext: "Leaders who reclaimed their health and optimized their professional trajectory.",
  cta: { label: "View All Stories", href: "#" },
  items: [
    { id: "s1", title: "Corporate Vitality", role: "Tech Executive, 45" },
    { id: "s2", title: "Empowered Leadership", role: "Founder & CEO" },
    { id: "s3", title: "Sustainable Growth", role: "Global Director" },
  ]
};

export const testimonialsData = {
  eyebrow: "MENTORSHIP & GRATITUDE",
  heading: "Standing on the Shoulders",
  headingItalic: "of Giants",
  subtext: "Deepest gratitude to the mentors and leadership who guided every step of the journey.",
  cta: { label: "Read Mentorship Journey", href: "/about" },
  items: [
    { id: "t1", quote: "Everything changed when I met Himanshu Sir, whose guidance introduced me to the importance of nutrition and a healthy lifestyle. The positive transformation in my mother's health became the turning point of my life.", name: "Himanshu Dase & Manisha Dase", role: "Millionaire Team 7500 · Coaches & Mentors", initial: "H" },
    { id: "t2", quote: "Deepest gratitude to my mentors whose vision, wisdom, and leadership showed me what is possible when right guidance, strong belief, and consistent effort come together.", name: "Pravesh Sobti & Divya Sobti", role: "Chairman's Club · Mentors", initial: "P" },
    { id: "t3", quote: "Heartfelt gratitude to my wonderful organization and the Corporate Team for their unwavering support, mentorship, and belief in me at every step of this journey.", name: "Corporate & Organization Team", role: "Herbalife India Leadership", initial: "C" },
  ]
};

export const eventsData = {
  eyebrow: "EVENTS",
  heading: "Upcoming",
  headingItalic: "Events",
  subtext: "Join us and transform together.",
  cta: { label: "Explore Events", href: "/events-workshops" },
  items: [
    // Blank for now. Whenever new events are announced, add them here:
    // { id: "ev1", month: "JUL", day: "24-26", type: "Virtual", title: "High-Performance Summit", location: "Online", spots: "Register Now", cta: "Register", image: "/images/event_1.jpg" },
  ]
};

export const locationData = {
  eyebrow: "LOCATION",
  heading: "Visit Our",
  headingItalic: "Office",
  description: "Located in the heart of Raipur, Chhattisgarh for accessible connectivity. We're open for strategic conversations and high-performance planning.",
  address: ["LIG 722", "DD Nagar Road", "Sector 2, DDU Nagar", "Amanaka", "Raipur", "Chhattisgarh 492010"],
  phone: "+91 62321 38581"
};

export const ctaData = {
  eyebrow: "FINAL CTA",
  headingLine1: "Your Transformation Starts",
  headingLine2: "With One Conversation.",
  subtext: "Whether you're looking to optimize your physical health or scale your leadership capabilities, the journey begins today.",
  cta: { label: "Book Appointment", href: "/book-appointment" },
  secondaryCta: { label: "Contact Us", href: "/contact" }
};

export const footerData = {
  brand: "Nandan Kumar Singh",
  description: "Pioneering the intersection of leadership excellence and sustainable well-being.\n15+ years of transforming high-performers.",
  cta: { label: "Book Appointment", href: "/book-appointment" },
  columns: [
    {
      heading: "Coaching",
      links: [
        { label: "About", subtitle: "Nandan's 15-year coaching journey", href: "/about" },
        { label: "Health Coaching", subtitle: "Physical vitality & mental clarity", href: "/health-coaching" },
        { label: "Business Coaching", subtitle: "Scalable leadership strategies", href: "/business-coaching" }
      ]
    },
    {
      heading: "Explore",
      links: [
        { label: "Journey", href: "/journey" },
        { label: "Events", href: "/events-workshops" },
        { label: "Success Stories", href: "#" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Featured Insights", href: "#" }
      ]
    },
    {
      heading: "Support",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Book Appointment", href: "/book-appointment" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    {
      heading: "Connect",
      social: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/nandan-kumar-7a6771413/", icon: "linkedin" },
        { label: "Instagram", href: "https://www.instagram.com/coachnandan?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==", icon: "instagram" },
        { label: "YouTube", href: "#", icon: "youtube" }
      ]
    }
  ],
  copyright: "© 2026 Nandan Kumar Singh. All rights reserved.",
  tagline: "High-Performance Coaching for Leaders."
};

export const aboutHeroData = {
  eyebrow: 'EXECUTIVE PERFORMANCE COACH',
  heading: ['Meet Nandan', 'Kumar Singh', '', ''],
  description: 'Bridging the gap between relentless corporate ambition and sustainable holistic wellness through 15+ years of strategic leadership and integrative health mastery.',
  primaryCTA: { label: 'Book a Session', href: '/book-appointment' },
  secondaryCTA: { label: 'Get in Touch', href: '/contact' },
  stats: [
    { number: 15, suffix: '+', label: 'Years Experience' },
    { number: 500, suffix: '+', label: 'Lives Impacted' },
    { number: 100, suffix: '+', label: 'Events Conducted' },
  ],
};

export const aboutStoryData = {
  heading: 'Where Purpose Meets Resilience',
  paragraphs: [
    'I started my professional journey in 2008 with a salary of ₹15,000 per month. During that period, I faced significant financial challenges, while my mother\'s health had also deteriorated considerably, with low energy levels and declining overall well-being. Everything changed when I met Himanshu Sir, whose guidance introduced me to the importance of nutrition and a healthy lifestyle. The positive transformation in my mother\'s health became the turning point that inspired me to pursue this field with passion and purpose.',
    'Determined to learn and grow, I attended multiple training programs and, after completing the Delhi Academy Training, I made the decision to qualify as a Supervisor. Soon after, I launched my own Nutrition Center. Through continuous learning, consistent effort, and a commitment to helping others achieve better health, I progressed to Global Expansion Team, President\'s Team, and today, Executive President\'s Team.',
    'This success is not mine alone. I am deeply grateful to my Coach Millionaire Team 7500 – Himanshu Dase & Manisha Dase, mentor Chairman\'s Club – Pravesh Sobti & Divya Sobti, heartfelt gratitude to my wonderful organization, and the Corporate Team for their unwavering support, mentorship, and belief in me. Their encouragement has played a crucial role in every step of my journey. "When the right guidance, strong belief, and consistent effort come together, no beginning is ever too small."'
  ]
};

export const timelineData = {
  heading: 'Milestones & Progression',
  items: [
    { year: '2026', title: "Executive President's Team", description: "Qualified as Executive President's Team, conducting 100+ events and mentoring wellness coaches and leaders nationally and globally." },
    { year: '2021', title: "President's Team Leadership", description: "Achieved President's Team status, empowering hundreds of independent wellness associates across regions to build sustainable practices." },
    { year: '2015', title: 'Global Expansion Team (GET)', description: 'Advanced to Global Expansion Team through continuous learning, team building, and community health initiatives.' },
    { year: '2009', title: 'Supervisor & First Nutrition Center', description: 'Completed Delhi Academy Training, qualified as a Supervisor, and established his first local Nutrition Center.' },
    { year: '2008', title: 'The Struggle & Turning Point', description: 'Began professional journey earning ₹15,000/month. Met Coach Himanshu Sir; mother\'s health transformation through nutrition inspired his lifelong purpose.' }
  ]
};

export const missionVisionData = {
  items: [
    { title: 'Mission', description: 'To equip leaders with the physiological and psychological tools needed to lead with clarity, compassion, and uncompromising energy.' },
    { title: 'Vision', description: 'A corporate world where human vitality is recognized as the ultimate competitive advantage and the foundation of ethical leadership.' },
    { title: 'Core Values', items: ['Scientific Rigor', 'Radical Transparency', 'Holistic Balance'] }
  ]
};

export const certificationsData = {
  heading: 'Leadership Credentials & Impact',
  stats: [
    { number: 15, suffix: '+', label: 'Years Experience' },
    { number: 500, suffix: '+', label: 'Lives Transformed' },
    { number: 100, suffix: '+', label: 'Events Conducted' }
  ],
  items: [
    { title: "Executive President's Team", description: "Top-Tier Leadership & Organizational Mentorship" },
    { title: "Delhi Academy Training", description: "Graduate & Qualified Supervisor Leadership" },
    { title: "Wellness & Business Mentor", description: "15+ Years Dedicated Community Transformation" }
  ]
};

export const aboutCtaData = {
  eyebrow: 'FINAL CTA',
  headingLine1: 'Ready to Elevate',
  headingLine2: 'Your Vitality?',
  subtext: 'Join an exclusive cohort of high-performing leaders who have redefined their path to success. Limited consultation slots available.',
  cta: { label: 'Book a Consultation', href: '/book-appointment' },
  secondaryCta: { label: 'Contact Us', href: '/contact' }
};

export const eventsHeroData = {
  eyebrow: 'LIVE EXPERIENCES',
  heading: ['Events That', 'Inspire Growth', '', ''],
  description: 'Bridging the gap between corporate excellence and holistic wellness through transformative live experiences.',
  primaryCTA: { label: 'View Upcoming Schedule', href: '#upcoming-events' },
  secondaryCTA: { label: 'Book Nandan', href: '#book' },
  stats: [
    { number: 100, suffix: '+', label: 'Events Conducted' }
  ],
};

export const eventTypesData = {
  eyebrow: 'TRANSFORMATIVE EXPERIENCES',
  heading: 'Transformative Modalities',
  subtext: 'Designed for leaders who demand both high performance and deep internal clarity.',
  items: [
    { title: 'SEMINARS', heading: 'Strategic Leadership Seminars', description: 'Half-day executive seminars focused on leadership psychology, strategic thinking, decision making, and organizational excellence.', cta: 'Explore Curriculum', href: '#seminars' },
    { title: 'WORKSHOPS', heading: 'Focus & Flow Workshops', description: 'Interactive workshops teaching deep work, focus management, productivity, and executive performance.', cta: 'Learn More', href: '#workshops' },
    { title: 'LEADERSHIP', heading: 'Annual Leadership Summits', description: 'Exclusive networking and leadership events bringing together entrepreneurs, executives, and visionaries.', cta: 'Request Invite', href: '#inquiry' },
    { title: 'WELLNESS', heading: 'The Zen CEO Series', description: 'Executive wellness experiences combining mindfulness, stress management, recovery, and holistic performance.', cta: 'View Series', href: '#wellness' }
  ]
};

export const upcomingEventsPageData = {
  heading: 'Upcoming Experience Schedule',
  subtext: 'Stay tuned! New events and experiences will be announced here soon.',
  items: []
};

export const eventGalleryData = {
  heading: 'Moments of Impact',
  items: [
    { title: 'Audience Engagement & Book Signing',          image: '/images/event_crowd.jpg',           position: '65% 24%'   },
    { title: 'Associate Development Retreat – Seminar',     image: '/images/event_retreat_seminar.jpg', position: 'center center' },
    { title: 'Ambassador Academy 2026',                     image: '/images/ambassador_academy.jpg',    position: 'center 32%'   },
    { title: 'Nandan Kumar – Stage Presentation',           image: '/images/nandan_stage.jpg',          position: 'center 10%'   },
    { title: "President's Team – Conference Hall",          image: '/images/event_large_hall.jpg',      position: 'center center' },
    { title: 'Associate Development Retreat – Jaipur',     image: '/images/event_adr_jaipur.jpg',      position: 'center 20%'   },
    { title: 'Retreat Group Photo',                         image: '/images/event_retreat_group.jpg',   position: 'center 25%'   },
    { title: 'Millionaire Team Award',                      image: '/images/event_award.jpg',           position: 'center 18%'   },
    { title: 'BR NutriShala Coaching Session',              image: '/images/event_nutrishala.jpg',      position: 'center 50%'   },
    { title: 'Panel at Event – Writing Notes',              image: '/images/event_writing.jpg',         position: 'center 22%'   },
    { title: 'Community Book Gift Ceremony',                image: '/images/event_book_gift.jpg',       position: 'center center' },
    { title: 'Online Webinar – 132 Participants',           image: '/images/event_online.jpg',          position: 'center 25%'   },
    { title: 'Formal Gala – Award Night',                   image: '/images/event_formal_gala.jpg',     position: 'center 15%'   }
  ]
};

export const bookNandanData = {
  heading: 'Invite Nandan to Your Event',
  subtext: 'Bring world-class leadership and wellness expertise to your next conference, summit, retreat, or corporate event.',
  features: [
    { title: 'Customized Keynotes', description: 'Tailored presentations based on your organization\'s goals.' },
    { title: 'Interactive Workshops', description: 'Practical sessions with actionable leadership frameworks.' },
    { title: 'VIP Executive Networking', description: 'Exclusive networking and mentoring opportunities.' }
  ]
};

export const bookingFormData = {
  heading: 'Booking Inquiry',
  eventTypes: [
    'Corporate Keynote',
    'Leadership Workshop',
    'Wellness Retreat',
    'Business Conference',
    'Virtual Event'
  ],
  cta: 'Submit Request'
};

export const eventsCtaData = {
  eyebrow: 'FINAL CTA',
  headingLine1: 'Create an',
  headingLine2: 'Unforgettable Experience',
  subtext: "Whether it's a corporate conference, leadership summit, executive retreat, or wellness event, let's create an experience that inspires lasting transformation.",
  cta: { label: 'Book Appointment', href: '/book-appointment' },
  secondaryCta: { label: 'Contact Office', href: '/contact' }
};

export const contactHeroData = {
  eyebrow: 'Availability: Open for Q3 2025',
  heading: ['Let\'s', 'Connect', '', ''],
  description: 'Whether you\'re looking to redefine your leadership style or optimize your team\'s performance, let\'s start a conversation that matters.',
  primaryCTA: { label: 'Send Inquiry', href: '#inquiry' },
  secondaryCTA: { label: 'Book Appointment', href: '#inquiry' },
  stats: [],
};

export const contactCardsData = [
  { icon: 'Mail', title: 'Email Us', info: 'hello@nandankumar.com', href: 'mailto:hello@nandankumar.com' },
  { icon: 'Phone', title: 'Call Directly', info: '+91 62321 38581', href: 'tel:+916232138581' },
  { icon: 'MapPin', title: 'Visit Office', info: 'LIG 722, DD Nagar Rd\nSector 2\nDDU Nagar\nAmanaka\nRaipur\nChhattisgarh\n492010' }
];

export const socialSectionData = {
  heading: 'Follow Performance Insights',
  quote: '"Clarity is the ultimate sophisticated power."',
  platforms: [
    { label: 'LinkedIn', icon: 'Briefcase', href: 'https://www.linkedin.com/in/nandan-kumar-7a6771413/' },
    { label: 'Instagram', icon: 'Camera', href: 'https://www.instagram.com/coachnandan?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==' },
    { label: 'YouTube', icon: 'Video', href: '#' },
    { label: 'Website', icon: 'Globe', href: '#' }
  ]
};

export const contactFormData = {
  heading: 'Start the Conversation',
  services: [
    'Executive Leadership Coaching',
    'Health Coaching',
    'Business Coaching',
    'Corporate Workshop',
    'Speaking Engagement',
    'Personal Consultation'
  ],
  cta: 'Send Inquiry'
};

export const mapSectionData = {
  heading: 'Visit Our Office',
  address: [
    'LIG 722, DD Nagar Rd',
    'Sector 2',
    'DDU Nagar',
    'Amanaka',
    'Raipur',
    'Chhattisgarh',
    '492010'
  ],
  workingHours: [
    { days: 'Monday – Saturday', hours: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', hours: 'By Appointment Only' }
  ]
};

export const contactCtaData = {
  eyebrow: 'FINAL CTA',
  headingLine1: 'Your Next',
  headingLine2: 'Breakthrough Starts Here.',
  subtext: 'Whether you\'re ready to improve your health, strengthen your leadership, or transform your business, the first step begins with a single conversation.',
  cta: { label: 'Book Appointment', href: '#inquiry' },
  secondaryCta: { label: 'Call Now', href: 'tel:+916232138581' }
};

export const bookingHeroData = {
  eyebrow: 'EXECUTIVE CONSULTATION',
  heading: ['Book Your', 'Session', '', ''],
  description: 'Elevate your performance through strategic coaching tailored for modern leadership, wellness, and business growth.',
  primaryCTA: { label: 'Start Booking', href: '#booking-wizard' },
  secondaryCTA: { label: 'Contact Us', href: '/contact' },
  stats: [],
};

export const whyBookData = {
  heading: 'Why Book a Personal Consultation?',
  description: 'Every consultation is designed to understand your goals, identify challenges, and create a personalized strategy for your health, leadership, and professional growth.',
  items: [
    { title: 'Personalized Wellness Strategy', description: 'Receive a customized roadmap tailored to your lifestyle and goals.' },
    { title: 'Executive Leadership Guidance', description: 'Develop high-performance habits that improve focus, productivity, and decision-making.' },
    { title: 'Business Growth Mentorship', description: 'Learn scalable strategies to grow your business with confidence.' },
    { title: 'Long-Term Accountability', description: 'Stay committed with structured coaching and measurable progress.' }
  ]
};

export const appointmentFormData = {
  heading: 'Schedule Your Consultation',
  description: 'Complete the form below and our team will contact you to confirm your appointment.',
  types: [
    'Health Coaching',
    'Business Coaching',
    'Executive Leadership Coaching',
    'Corporate Consultation',
    'Speaking Engagement'
  ],
  modes: [
    'Online Meeting',
    'Office Visit'
  ],
  cta: 'Book Appointment'
};

export const consultationProcessData = {
  heading: 'What Happens Next?',
  steps: [
    { title: 'Submit Your Request', description: 'Complete the booking form with your preferred schedule.' },
    { title: 'Confirmation', description: 'Our team will review your request and contact you within 24 hours.' },
    { title: 'Consultation', description: 'Meet with Nandan Kumar Singh online or in person.' },
    { title: 'Transformation Plan', description: 'Receive a personalized action plan designed for your goals.' }
  ]
};

export const consultationBenefitsData = {
  heading: 'Every Appointment Includes',
  items: [
    { icon: 'UserCircle', label: 'Personal Assessment' },
    { icon: 'Map', label: 'Goal Mapping' },
    { icon: 'Activity', label: 'Health & Performance Review' },
    { icon: 'FileText', label: 'Action Plan' },
    { icon: 'Star', label: 'Priority Support' },
    { icon: 'MessageCircle', label: 'Follow-up Guidance' }
  ]
};

export const appointmentCtaData = {
  eyebrow: 'FINAL CTA',
  headingLine1: 'Your Transformation',
  headingLine2: 'Begins Today.',
  subtext: 'Whether your goal is better health, stronger leadership, or greater business success, your journey starts with a single conversation.',
  cta: { label: 'Book Appointment', href: '#schedule' },
  secondaryCta: { label: 'Contact Us', href: '/contact' }
};

export const journeyHeroData = {
  eyebrow: 'THE JOURNEY',
  heading: ['From Ambition', 'To Impact', '', ''],
  description: 'A journey of leadership, resilience, transformation, and purpose spanning over 15 years of empowering people to achieve greater health, clarity, and success.',
  primaryCTA: { label: 'Explore Timeline', href: '#timeline' },
  secondaryCTA: { label: 'Book Appointment', href: '/book-appointment' },
  stats: [],
};

export const journeyIntroData = {
  heading: 'Every Great Transformation Begins With A Challenge.',
  paragraphs: [
    'Long before coaching leaders and entrepreneurs, Nandan experienced the same pressures, burnout, and uncertainty faced by thousands of professionals today.',
    'His personal journey became the foundation of a mission dedicated to helping others achieve sustainable success without sacrificing their well-being.'
  ]
};

export const journeyTimelineData = {
  heading: 'Milestones That Shaped The Mission',
  items: [
    { year: '2015', title: 'The Beginning', description: 'Started the wellness coaching journey with a vision to help individuals achieve better health, stronger leadership, and meaningful growth.', image: '/images/nandan_milestone1.jpg' },
    { year: '2016', title: 'First Community', description: 'Built the first wellness community and began mentoring individuals seeking better health and lifestyle balance across Raipur.', image: '/images/nandan_milestone2.jpg' },
    { year: '2017', title: 'Coaching Certification', description: 'Completed advanced coaching certifications, combining executive leadership with holistic health science for a unified methodology.', image: '/images/nandan_milestone3.jpg' },
    { year: '2018', title: 'The Wellness Shift', description: 'Expanded into nutrition science and performance psychology, creating sustainable growth systems for professionals and entrepreneurs.', image: '/images/nandan_milestone4.jpg' },
    { year: '2019', title: 'Growing Network', description: 'Built a thriving network of wellness associates and coaches, empowering them to create their own independent wellness businesses.', image: '/images/nandan_milestone5.jpg' },
    { year: '2020', title: 'Hosted First Event', description: 'Successfully organized and hosted the first major live event, leading engaging workshops and sharing valuable insights with a dedicated community in person.', image: '/images/nandan_milestone6.jpg' },
    { year: '2021', title: 'Expanding Impact', description: 'Conducted 100+ events, workshops, and seminars, working with leaders, entrepreneurs, and professionals across multiple industries.', image: '/images/nandan_milestone7.jpg' },
    { year: '2022', title: 'Milestone Recognition', description: 'Received recognition for transforming 500+ lives through wellness coaching and business mentorship, becoming a trusted name in the coaching industry.', image: '/images/nandan_milestone8.jpg' },
    { year: '2026', title: 'Global Reach', description: 'Expanded coaching programs, workshops, and events internationally, continuing to transform lives through the intersection of wellness and leadership.', image: '/images/nandan_milestone9.jpg' },
    { year: '2026', title: 'Kerala Wellness & Leadership Tour', description: 'Hosted an exclusive leadership immersion and wellness retreat across Kerala, uniting high-performance leaders for mindfulness, cultural rejuvenation, and purposeful growth amidst the tea hills of Munnar.', image: '/images/nandan_milestone10.jpg' }
  ]
};

export const journeyPhilosophyData = {
  heading: 'Lessons Learned Along The Way',
  items: [
    { title: 'Health Fuels Performance', description: 'True success begins with physical vitality and mental clarity.' },
    { title: 'Leadership Starts Within', description: 'The strongest leaders are those who master themselves before leading others.' },
    { title: 'Growth Requires Balance', description: 'Sustainable achievement comes from balancing ambition with well-being.' }
  ]
};

export const journeyImpactData = {
  heading: 'A Journey Measured By Lives Changed',
  stats: [
    { number: 15, suffix: '+', label: 'Years of Experience' },
    { number: 500, suffix: '+', label: 'Lives Impacted' },
    { number: 100, suffix: '+', label: 'Events Conducted' },
    { number: 0, suffix: 'Multiple', label: 'Businesses Built', isText: true }
  ]
};

export const journeyPhotoGalleryData = {
  heading: 'Moments That Defined The Journey',
  items: [
    { title: 'Early Days', image: '/images/journey_portrait.jpg' },
    { title: 'Exploring The World', image: '/images/journey_dubai.jpg' },
    { title: 'International Journey', image: '/images/journey_vietnam.jpg' },
    { title: 'Living The Mission', image: '/images/journey_living.jpg' },
    { title: 'On Stage', image: '/images/nandan_stage.jpg' },
    { title: 'Speaking & Impact', image: '/images/speaking_image.png' },
    { title: 'Mentoring Sessions', image: '/images/mentoring_image.png' },
    { title: 'Formal Leadership', image: '/images/event_sofa_formal.jpg' },
    { title: 'Executive Presence', image: '/images/event_formal_seated.jpg' },
    { title: 'Kerala Wellness Tour', image: '/images/nandan_milestone10.jpg' }
  ]
};

// journeyData — used by the Journey timeline section on the Home page
export const journeyData = {
  eyebrow: 'THE JOURNEY',
  heading: 'Milestones of',
  headingItalic: 'Growth & Impact',
  milestones: [
    { id: 'j1', year: '2008', title: 'The Humble Start', text: 'Started earning ₹15,000/month. Transformed mother\'s health through nutrition guidance under Coach Himanshu Sir, sparking a lifelong purpose.' },
    { id: 'j2', year: '2009', title: 'Supervisor & Nutrition Center', text: 'Completed Delhi Academy Training, qualified as a Supervisor, and launched his first Nutrition Center.' },
    { id: 'j3', year: '2015', title: 'Global Expansion Team', text: 'Expanded community wellness and leadership mentoring, achieving Global Expansion Team status.' },
    { id: 'j4', year: '2026', title: "Executive President's Team", text: "Qualified as Executive President's Team, conducting 100+ events and empowering thousands of lives through health and business mentorship." }
  ],
  cta: { label: 'View Full Journey', href: '/journey' }
};

export const journeyQuoteData = {
  quote: '"When the right guidance, strong belief, and consistent effort come together, no beginning is ever too small."',
  author: 'Nandan Kumar Singh'
};

export const journeyCtaData = {
  eyebrow: 'FINAL CTA',
  headingLine1: 'Your Journey',
  headingLine2: 'Starts Today.',
  subtext: 'Every transformation begins with a single decision. Take the first step toward better health, stronger leadership, and lasting success.',
  cta: { label: 'Book Appointment', href: '/book-appointment' },
  secondaryCta: { label: 'Contact Us', href: '/contact' }
};

export const healthCoachingHeroData = {
  eyebrow: 'EXECUTIVE VITALITY',
  heading: ['Optimal Health', 'For High', 'Performance', ''],
  description: 'Holistic systems for physical vitality, personalized daily nutrition, and sustainable weight management programs tailored for the demands of leadership.',
  primaryCTA: { label: 'Start Transformation', href: '/book-appointment' },
  secondaryCTA: { label: 'Our Philosophy', href: '#protocol' },
  stats: [],
};

export const healthCoachingProtocolData = {
  eyebrow: 'THE PERFORMANCE PROTOCOL',
  heading: 'Science-Backed Systems',
  headingItalic: 'For Leaders',
  subtext: 'Our holistic methodology targets the root causes of executive burnout, delivering sustained energy, mental clarity, and physical resilience.',
  items: [
    { id: "hc1", title: "Personalized Nutrition", description: "Data-driven dietary frameworks designed to stabilize energy levels throughout the workday." },
    { id: "hc2", title: "Sustainable Weight Management", description: "Practical, long-term strategies that integrate seamlessly into a busy executive schedule." },
    { id: "hc3", title: "Stress Mitigation", description: "Advanced physiological and psychological techniques to reduce cortisol and improve recovery." },
    { id: "hc4", title: "Sleep Optimization", description: "Protocols to enhance restorative sleep, ensuring peak cognitive function every morning." }
  ],
  cta: { label: 'Book Your Strategy Call', href: '/book-appointment' }
};

export const healthCoachingProgramsData = {
  eyebrow: 'OUR PROGRAMS',
  heading: 'Tailored Transformation',
  headingItalic: 'Pathways',
  subtext: 'Choose the coaching system that aligns with your current goals and lifestyle.',
  items: [
    { title: 'Executive Reset', heading: '30-Day Intensive', description: 'A rapid reset protocol to eliminate fatigue and establish baseline habits for sustainable vitality.', cta: 'Learn More', href: '/book-appointment' },
    { title: 'Vital Leader', heading: '90-Day Transformation', description: 'Our signature program combining deep nutritional restructuring, fitness programming, and stress management.', cta: 'Secure Your Spot', href: '/book-appointment' },
    { title: 'Mastery Elite', heading: 'Annual Partnership', description: 'Ongoing concierge-level coaching for continuous optimization and peak performance longevity.', cta: 'Apply Now', href: '/book-appointment' }
  ]
};

export const healthCoachingCtaData = {
  eyebrow: 'FINAL CTA',
  headingLine1: 'Take Command Of',
  headingLine2: 'Your Vitality.',
  subtext: 'Elite performance requires an elite foundation. Partner with us to optimize your health and unlock your full potential as a leader.',
  cta: { label: 'Start Transformation', href: '/book-appointment' },
  secondaryCta: { label: 'Contact Us', href: '/contact' }
};

export const businessCoachingHeroData = {
  eyebrow: '15+ YEARS OF EXPERIENCE',
  heading: ['Build a Stronger', 'Business and', 'Lead With Confidence.', ''],
  description: 'High-performance coaching that bridges the gap between corporate leadership and holistic wellness for the modern executive.',
  primaryCTA: { label: 'Book Appointment', href: '/book-appointment' },
  secondaryCTA: { label: 'View Programs', href: '#services' },
  stats: [
    { number: 150, suffix: '+', label: 'Leaders Coached' }
  ],
};

export const businessCoachingServicesData = {
  eyebrow: 'SERVICES',
  heading: 'Business Coaching',
  headingItalic: 'Services',
  subtext: 'Comprehensive business and wellness systems designed for sustainable growth.',
  items: [
    { id: "bc1", title: "Personalized Wellness Guidance", description: "Understand clients' wellness goals, recommend suitable nutrition solutions, and build sustainable daily habits.", cta: "Learn More", href: "#services" },
    { id: "bc2", title: "Weight Management Coaching", description: "Support structured transformation programs through accountability, progress tracking, and personalized coaching.", cta: "Learn More", href: "#services" },
    { id: "bc3", title: "Active Lifestyle Support", description: "Guide clients toward healthier routines, balanced nutrition, and long-term fitness habits.", cta: "Learn More", href: "#services" },
    { id: "bc4", title: "Community Wellness Activities", description: "Build engaged wellness communities through educational workshops, wellness challenges, and collaborative growth.", cta: "Learn More", href: "#services" },
    { id: "bc5", title: "Customer Care & Follow-Up", description: "Provide ongoing support, regular follow-ups, and personalized recommendations based on progress.", cta: "Learn More", href: "#services" },
    { id: "bc6", title: "Nutrition Education", description: "Teach healthy eating habits, hydration strategies, wellness tips, and practical nutrition education.", cta: "Learn More", href: "#services" },
    { id: "bc7", title: "Entrepreneurship & Opportunity", description: "Empower individuals to build an independent wellness business while developing leadership, communication, and business management skills.", cta: "Learn More", href: "#services" }
  ]
};

export const highPerformanceFrameworkData = {
  eyebrow: 'THE CORE',
  heading: 'The High-Performance',
  headingItalic: 'Framework',
  subtext: 'My coaching methodology combines business strategy, leadership development, and wellness systems to help professionals scale sustainably without sacrificing health or balance.',
  items: [
    { year: 'Step 1', title: 'Personal Mentorship', description: 'One-on-one business strategy aligned with structured wellness systems.' },
    { year: 'Step 2', title: 'Team Building', description: 'Develop leadership skills and build a thriving community of independent associates.' },
    { year: 'Step 3', title: 'Sustainable Systems', description: 'Create scalable business processes that encourage long-term growth without burnout.' }
  ]
};

export const provenResultsData = {
  eyebrow: 'PROVEN RESULTS',
  heading: 'Transformational',
  headingItalic: 'Success',
  subtext: 'Leaders who have integrated our systems to achieve extraordinary results.',
  cta: { label: 'View All Case Studies', href: '#' },
  items: [
    { id: "pr1", role: "Independent Practice", title: "Scaling Wellness Outreach", description: "Expanded community wellness initiatives to over 200 active participants while mentoring 15+ independent wellness coaches.", stat: "150+", label: "Leaders Coached", button: "Read Case Study" },
    { id: "pr2", role: "Leadership", title: "Regional Team Development", description: "Successfully organized corporate wellness workshops and community programs impacting more than 500 lives.", button: "Read Case Study" }
  ]
};

export const complianceSectionData = {
  eyebrow: 'IMPORTANT NOTICE',
  heading: 'Compliance &',
  headingItalic: 'Transparency',
  subtext: 'Our commitment to ethical coaching practices and transparent business operations.',
  items: [
    { id: "c1", title: "No Medical Claims", description: "Wellness coaching focuses on lifestyle education, nutrition guidance, and healthy habit development. It does not diagnose, treat, or cure medical conditions." },
    { id: "c2", title: "No Income Guarantees", description: "Business success depends on each individual's dedication, consistency, effort, and leadership. Income varies from person to person." }
  ]
};

export const faqSectionData = {
  eyebrow: 'SUPPORT',
  heading: 'Frequently Asked',
  headingItalic: 'Questions',
  subtext: 'Clarity on our coaching programs and business systems.',
  items: [
    { question: 'How does the independent wellness business work?', answer: 'It is a structured business opportunity that allows you to mentor others, build a community, and grow a sustainable practice by helping people achieve their wellness goals.' },
    { question: 'What training is provided to new associates?', answer: 'We provide comprehensive training on nutrition science, coaching methodologies, business development, and community leadership to ensure you have the tools for success.' },
    { question: 'Can I do this alongside my current profession?', answer: 'Yes, many of our most successful leaders started part-time, building their practice sustainably before transitioning to a full-time commitment.' }
  ]
};

export const businessCoachingCtaData = {
  eyebrow: 'FINAL CTA',
  headingLine1: 'Accelerate',
  headingLine2: 'Your Growth',
  subtext: 'Ready to strengthen your leadership, expand your impact, and build a sustainable business? Let\'s create your personalized roadmap together.',
  cta: { label: 'Book Appointment', href: '/book-appointment' },
  secondaryCta: { label: 'Contact Office', href: '/contact' }
};
