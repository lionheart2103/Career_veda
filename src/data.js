export const SITE = 'https://careerveda.in'
export const u = (p) => SITE + p
const IK = 'https://ik.imagekit.io/ojoijfoinsdnfoodsnf/careerveda/programs/'

export const nav = [
  ['Programs', '/programs'], ['Alumni', '/alumni'], ['Jobs', '/jobs'],
  ['Faculty', '/faculty'], ['Blog', '/blog'], ['About', '/about'],
]

export const chips = ['Personalized Learning', 'Expert Mentorship', 'Interview Support', 'Placement Focus', 'Verified Projects', 'Career Programs', 'Hiring Partners']

export const stats = [
  { n: 13000, suffix: '+', label: 'Successful Learners' },
  { n: 900, suffix: '+', label: 'Recruitment Partners' },
  { n: 86, suffix: '%', label: 'Average Salary Growth' },
  { n: 300, suffix: '+', label: 'Career Programs' },
  { n: 200, suffix: '+', label: 'Professional Mentors' },
]

export const programs = [
  { slug: 'product-management', tag: 'Most Popular', title: 'PG Program in Product Management', sub: 'Become a High-Impact Product Manager', desc: 'Lead the end-to-end lifecycle of digital products. Learn product strategy, customer discovery, user research, UX, agile delivery, product analytics, AI-powered product management and go-to-market planning through real-world case studies and a capstone project.', meta: ['6 Months', 'Live Online', 'Mentor-Led'], img: IK + 'product-management-6b8b2802.jpg?tr=w-720,f-auto,q-80' },
  { slug: 'data-analytics', tag: 'Career Starter', title: 'PG Program in Data Analytics with Generative AI', sub: 'Become a Data Analyst with AI Workflows', desc: 'Master the skills to transform raw data into actionable business insights. Learn Excel, SQL, Python, Power BI, Statistics, and Generative AI through live classes, hands-on projects, and real-world case studies to become an industry-ready Data Analyst.', meta: ['6 Months', 'Projects', 'Placement Focus'], img: IK + 'Data_analytics-ba31dcb9.jpg?tr=w-520,f-auto,q-80' },
  { slug: 'business-analytics', tag: 'In-Demand Skills', title: 'Post Graduate Program in Business Analytics with Generative AI', sub: 'Become a Business Analyst with AI Skills', desc: 'Build a successful career in Business Analytics by mastering in-demand analytical tools, Generative AI, and real-world business problem-solving. Learn through live mentor-led sessions, hands-on projects, industry case studies, and career-focused training designed to make you job-ready.', meta: ['6 Months', 'Live Online', '30+ Projects'], img: IK + 'Business_analytics_images-4145ed42.jpg?tr=w-520,f-auto,q-80' },
  { slug: 'investment-banking', tag: 'High Finance', title: 'PG Program in Investment Banking', sub: 'Master Financial Modeling & Valuation', desc: 'Master the world of Investment Banking with comprehensive training in financial modeling, M&A analysis, equity research, and deal execution. Learn from industry experts and build the skills needed to excel in top investment banks and financial institutions.', meta: ['6 Months', 'Live Online', 'Placement Focus'], img: IK + 'investing-banking-images-59ab0040.jpg?tr=w-420,f-auto,q-80' },
  { slug: 'data-science-ai', tag: 'Advanced Track', title: 'PG Program in Data Science with Generative AI', sub: 'Build AI, ML and Agentic AI Skills', desc: 'Master Data Science and Generative AI to become a complete AI professional. Learn data analysis, machine learning, deep learning, and cutting-edge generative AI models to solve real-world business problems.', meta: ['12 Months', 'AI Projects', 'Capstone'], img: IK + 'data-c3b60741.jpg?tr=w-800,f-auto,q-80' },
  { slug: 'gen-ai', tag: 'In-Demand Skills', title: 'PG Program in GEN AI', sub: 'Become a Generative AI Engineer', desc: 'Master Generative AI and transform your career with cutting-edge skills. Learn to build intelligent applications using the latest AI models, LLMs, and automation technologies.', meta: ['6 Months', 'Hands-On Labs', 'Certification Prep'], img: IK + 'ChatGPT-Image-Jul-13-2026-04_53_32-PM-fbacfde5.jpg?tr=w-1180,f-auto,q-80' },
]

export const faqs = [
  ['What programs does CareerVeda offer?', 'Programs span Investment Banking, Business Analytics, Data Analytics, Data Science with AI/ML and Agentic AI, CyberSecurity, Backend Development Engineering, and Data Engineering with Agentic & Gen AI. Each one is built around the tools and workflows employers are hiring for right now.'],
  ['What is the duration of these programs?', 'Duration varies by program and by the batch you join, since each track is scoped to the depth its role demands. Our admissions team can walk you through the exact schedule for the program you\'re considering.'],
  ['Do I get certifications after completing the program?', 'Yes. You earn an industry-aligned, globally recognized certification that validates your expertise, adds credibility to your resume, and helps you stand out with employers.'],
  ['Is there placement assistance provided?', 'Yes — placement support runs alongside the course rather than after it: resume support, LinkedIn optimization, mock interviews, soft skills training, referrals, and direct access to our 900+ hiring partners.'],
  ['What are the eligibility criteria to enroll?', 'Criteria depend on the program and on your background — some tracks assume prior experience, others are built for career changers starting fresh. Talk to our admissions team and they\'ll tell you which programs you\'re eligible for.'],
  ['Is this live online program or recorded lectures?', 'Classes are live and interactive, taught by expert instructors with time set aside for doubt clearing. Sessions are recorded too, so you can revisit anything you need to review.'],
  ['Can I pursue this program while working full time?', 'Yes — the schedule is designed for working professionals. Choose weekday or weekend batches, catch up through recordings, and continue at a pace that fits around your job.'],
  ['What kind of projects will I work on?', 'You build portfolio-ready projects and work through case studies drawn from real business challenges at leading companies — the kind of problems you\'d face in the role, not textbook exercises.'],
  ['What is the average salary hike after completing the program?', 'Learners report an average salary growth of 86%. Your own outcome depends on your experience, target role, and the market you\'re hiring into, so treat that as a benchmark rather than a promise.'],
  ['What support is available during the program?', 'You\'re assigned a personal mentor matched to your goals, with weekly guidance sessions, a career roadmap, and progress tracking. Live classes, doubt clearing, and skill workshops run throughout, and career support continues after you graduate.'],
]

export const discover = [
  ['About Us', u('/about')], ['Our Programs', u('/programs')], ['Job Openings', u('/jobs')], ['Alumni', u('/alumni')],
  ['Our Faculty', u('/faculty')], ['Our Blog', u('/blog')], ['Contact Us', u('/contact')], ['Enroll Now', u('/enroll')],
  ['Access Your LMS', 'https://careervedaopcprivatelimited.edmingle.com/'],
  ['Hire From Us', 'https://docs.google.com/forms/d/e/1FAIpQLSdAfc4cxb9x8ir9M3wcJ-WcsBZxPoLtVfAkN9OIYmVTh71dXA/viewform?usp=publish-editor'],
]
export const policies = [['Privacy Policy', u('/privacy-policy')], ['Refund Policy', u('/refund-policy')], ['Terms of Use', u('/terms')], ['Escalation Policy', u('/escalation-policy')]]
export const social = [
  ['LinkedIn', 'https://www.linkedin.com/company/careerveda-official/'],
  ['Instagram', 'https://www.instagram.com/_careerveda_'],
  ['Facebook', 'https://www.facebook.com/profile.php?id=61585569293075'],
]
export const WHATSAPP = 'https://wa.me/919217801191?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20CareerVeda%20programs.%0A%0A'
