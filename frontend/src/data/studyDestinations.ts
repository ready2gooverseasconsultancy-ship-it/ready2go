import { countryImages } from './countryImages';
import asiaImage from '../assets/images/sinagpore.png';

export type StudyDestinationKey =
  | 'usa'
  | 'canada'
  | 'uk'
  | 'germany'
  | 'ireland'
  | 'australia'
  | 'new-zealand'
  | 'europe'
  | 'asia';

export type StudyDestinationData = {
  title: string;
  shortTitle: string;
  slug: string;
  heroImage: string;
  tagline: string;
  overview: string;
  quickFacts: string[];
  whyStudy: string[];
  topUniversities: string[];
  popularCourses: string[];
  admissionProcess: string[];
  visaProcess: string[];
  costAndScholarships: {
    tuition: string;
    living: string;
    scholarship: string;
    note: string;
  };
};

export const studyDestinationTabs: { key: StudyDestinationKey; label: string }[] = [
  { key: 'usa', label: 'USA' },
  { key: 'canada', label: 'Canada' },
  { key: 'uk', label: 'United Kingdom' },
  { key: 'germany', label: 'Germany' },
  { key: 'ireland', label: 'Ireland' },
  { key: 'australia', label: 'Australia' },
  { key: 'new-zealand', label: 'New Zealand' },
  { key: 'europe', label: 'Europe' },
  { key: 'asia', label: 'Asia' },
];

export const studyDestinations: Record<StudyDestinationKey, StudyDestinationData> = {
  usa: {
    title: 'Study in the USA',
    shortTitle: 'USA',
    slug: 'study-in-usa',
    heroImage: countryImages.usa,
    tagline: "The United States of America has been a global leader in the field of education and boasts of a lion's share of top ranked universities according to all major international rankings. Few countries offer as many high ranked universities and noble laureate academia, as USA does.",
    overview:
      "The United States of America has been a global leader in the field of education and boasts of a lion's share of top ranked universities according to all major international rankings. Few countries offer as many high ranked universities and noble laureate academia, as USA does.",
    quickFacts: [
      'USA hosts more than a million international students',
      "Over 25% of world's top 100 universities are in the USA",
      'Post-study stay back visas (OPT) up to 3 years for STEM programs',
      'Internships (CPT) up to 12 months while studying',
      'Merit Based & Need Based Scholarships',
    ],
    whyStudy: [
      'Choose from a huge range of majors, minors, and research-led programs.',
      'Build practical experience through internships, labs, and co-op style learning.',
      'Access globally recognized degrees that support long-term career growth.',
      'Enjoy strong campus support services for international students.',
    ],
    topUniversities: [
      'Harvard University',
      'MIT',
      'Stanford University',
      'University of California, Berkeley',
      'Columbia University',
      'University of Michigan',
    ],
    popularCourses: ['Computer Science', 'Business Analytics', 'Engineering', 'Data Science', 'Medicine', 'Finance'],
    admissionProcess: [
      'Shortlist your preferred universities and compare entry requirements.',
      'Prepare transcripts, SOP, LORs, and English proficiency scores.',
      'Apply within deadlines and track your admission decisions.',
      'Confirm your seat by accepting the offer and paying the deposit.',
    ],
    visaProcess: [
      'Receive your I-20 from the selected university.',
      'Pay the SEVIS fee and complete the DS-160 application.',
      'Book and attend the visa interview with supporting documents.',
      'Once approved, prepare for travel and university reporting.',
    ],
    costAndScholarships: {
      tuition: 'USD 20,000 - 55,000 per year',
      living: 'USD 12,000 - 20,000 per year',
      scholarship: 'Merit, athletic, and need-based awards are commonly available',
      note: 'Costs vary by university, program level, and city.',
    },
  },
  canada: {
    title: 'Study in Canada',
    shortTitle: 'Canada',
    slug: 'study-in-canada',
    heroImage: countryImages.canada,
    tagline: "A country that offers a truly dynamic education system with some of the world's best universities, a high standard of living & a promising future, Canada is undoubtedly amongst the most popular and ideal study destinations in the world.",
    overview:
      "A country that offers a truly dynamic education system with some of the world's best universities, a high standard of living & a promising future, Canada is undoubtedly amongst the most popular and ideal study destinations in the world.",
    quickFacts: [
      'Among the Safest Countries Globally',
      'Hands-on learning',
      'Paid Internships Available',
      'Post Study Work Visa up to 3 Years',
      'Excellent Immigration Opportunities',
    ],
    whyStudy: [
      'Benefit from globally respected public institutions and career-focused diplomas.',
      'Work while studying in many programs and gain Canadian experience.',
      'Enjoy multicultural cities and a high standard of living.',
      'Choose from diplomas, undergraduate, and graduate pathways.',
    ],
    topUniversities: [
      'University of Toronto',
      'University of British Columbia',
      'McGill University',
      'University of Waterloo',
      'McMaster University',
      'University of Alberta',
    ],
    popularCourses: ['Computer Applications', 'Business', 'Health Sciences', 'Engineering', 'Supply Chain', 'Public Policy'],
    admissionProcess: [
      'Select programs based on academic profile and career goals.',
      'Prepare academic records, English scores, and application documents.',
      'Apply to colleges or universities and wait for the offer letter.',
      'Pay tuition deposit and arrange your study permit file.',
    ],
    visaProcess: [
      'Receive an offer letter and prepare proof of funds.',
      'Submit your study permit application and biometrics.',
      'Provide medicals and additional documents if requested.',
      'Get your passport stamped and prepare for arrival in Canada.',
    ],
    costAndScholarships: {
      tuition: 'CAD 15,000 - 35,000 per year',
      living: 'CAD 10,000 - 18,000 per year',
      scholarship: 'Entrance scholarships, bursaries, and merit awards are available',
      note: 'Colleges generally offer lower tuition than many university programs.',
    },
  },
  uk: {
    title: 'Study in the United Kingdom',
    shortTitle: 'United Kingdom',
    slug: 'study-in-uk',
    heroImage: countryImages.uk,
    tagline: "With an academic reputation built on centuries old heritage, The UK is home to some of the world's oldest universities that consistently rank among the highest in the world. Universities in UK have a rich legacy of welcoming international students for centuries and are known to offer an unforgettable student experience as they know the needs and aspirations of their students very well.",
    overview:
      "With an academic reputation built on centuries old heritage, The UK is home to some of the world's oldest universities that consistently rank among the highest in the world. Universities in UK have a rich legacy of welcoming international students for centuries and are known to offer an unforgettable student experience as they know the needs and aspirations of their students very well.",
    quickFacts: [
      "The UK undertakes 5% of the world's scientific research and produces 14% of the world's most frequently cited papers",
      'UK welcomes over 400,000 students every year',
      'Post study work visa of 2 years',
      "12 of world's top 100 universities are in The UK (QS World Rankings 2023)",
      '14 of the best student cities in the world are in The UK (QS Best Student Cities 2023)',
    ],
    whyStudy: [
      'Learn in a compact, high-intensity academic structure with strong outcomes.',
      'Study at institutions with historic reputations and global employer recognition.',
      'Access a diverse international student network across major cities.',
      'Choose from professionally focused and research-oriented programs.',
    ],
    topUniversities: [
      'University of Oxford',
      'University of Cambridge',
      'Imperial College London',
      'University College London',
      'University of Edinburgh',
      "King's College London",
    ],
    popularCourses: ['Law', 'Business Management', 'Computer Science', 'Engineering', 'Media', 'Finance'],
    admissionProcess: [
      'Pick the university and course that best matches your profile.',
      'Prepare SOP, transcripts, references, and English test scores.',
      'Submit your UCAS or direct application where applicable.',
      'Accept the offer and complete the pre-CAS or enrollment requirements.',
    ],
    visaProcess: [
      'Receive your CAS from the institution.',
      'Complete the visa application and pay the health surcharge.',
      'Attend biometrics and submit supporting documents.',
      'Travel after visa approval and arrival planning.',
    ],
    costAndScholarships: {
      tuition: 'GBP 12,000 - 28,000 per year',
      living: 'GBP 9,000 - 15,000 per year',
      scholarship: 'University scholarships, Commonwealth awards, and merit funding',
      note: "Master's programs are often shorter, which can reduce total cost.",
    },
  },
  germany: {
    title: 'Study in Germany',
    shortTitle: 'Germany',
    slug: 'study-in-germany',
    heroImage: countryImages.germany,
    tagline: 'Germany is a top study destination known for world-class universities, affordable tuition at public institutions, and strong pathways into engineering, research, and technology careers.',
    overview:
      'Germany is a top study destination known for world-class universities, affordable tuition at public institutions, and strong pathways into engineering, research, and technology careers.',
    quickFacts: [
      'Many public universities offer very low or no tuition fees',
      'Strong reputation in engineering, technology, and applied sciences',
      'Large number of English-taught programs at master\'s level',
      'Excellent internship and research opportunities',
      'Access to Europe-wide career and travel opportunities',
    ],
    whyStudy: [
      'Study in one of Europe\'s most respected higher education systems.',
      'Benefit from affordable tuition and strong academic value.',
      'Build experience through research projects and industry connections.',
      'Explore a multicultural environment with a strong economy.',
    ],
    topUniversities: [
      'Technical University of Munich',
      'Ludwig Maximilian University of Munich',
      'Heidelberg University',
      'RWTH Aachen University',
      'Humboldt University of Berlin',
      'University of Freiburg',
    ],
    popularCourses: ['Engineering', 'Automotive', 'Computer Science', 'Business', 'Data Science', 'Architecture'],
    admissionProcess: [
      'Choose a university and program that matches your academic background.',
      'Prepare transcripts, language scores, motivation letter, and supporting documents.',
      'Apply through the university portal or centralized application system where required.',
      'Accept the offer and plan for enrollment and residence formalities.',
    ],
    visaProcess: [
      'Receive your admission offer and arrange proof of funds.',
      'Prepare health insurance, accommodation, and passport documents.',
      'Apply for the German student visa or residence permit.',
      'Travel after approval and complete local registration on arrival.',
    ],
    costAndScholarships: {
      tuition: 'EUR 0 - 5,000 per year at many public institutions',
      living: 'EUR 10,000 - 13,000 per year',
      scholarship: 'DAAD scholarships and university funding options are widely available',
      note: 'Living costs vary by city, with Munich and Berlin often higher than smaller cities.',
    },
  },
  ireland: {
    title: 'Study in Ireland',
    shortTitle: 'Ireland',
    slug: 'study-in-ireland',
    heroImage: countryImages.ireland,
    tagline: "Set yourself on a path of a global career with one of the world's most dynamic & advanced education systems. Foster your creativity & entrepreneurship in universities that are developing world class graduates to address challenges of today and the future.",
    overview:
      "Set yourself on a path of a global career with one of the world's most dynamic & advanced education systems. Foster your creativity & entrepreneurship in universities that are developing world class graduates to address challenges of today and the future.",
    quickFacts: [
      "Europe's fastest growing economy",
      'Ranked #10 Globally for High-Quality Scientific Research',
      'Post Study Work Visa up to 2 Years',
      'All Universities Globally Ranked among top 5%',
      'Ranked as the 13th most peaceful place on Earth',
    ],
    whyStudy: [
      'Gain access to a career-oriented education system with modern teaching styles.',
      'Study in a safe, student-friendly environment with English-language instruction.',
      'Benefit from strong links to technology, finance, and life sciences industries.',
      'Build an international career in a country with a growing economy.',
    ],
    topUniversities: [
      'Trinity College Dublin',
      'University College Dublin',
      'University of Galway',
      'University College Cork',
      'Dublin City University',
      'University of Limerick',
    ],
    popularCourses: ['Computer Science', 'Data Analytics', 'Business', 'Cybersecurity', 'Pharmaceutical Sciences', 'MBA'],
    admissionProcess: [
      'Choose a university and review course-specific requirements.',
      'Submit transcripts, SOP, references, and test scores.',
      'Receive and accept the admission offer.',
      'Arrange fee payment and pre-departure preparation.',
    ],
    visaProcess: [
      'Receive your offer letter and pay the deposit if required.',
      'Prepare financial documents, insurance, and passport details.',
      'Apply for the Irish visa and respond to any clarification requests.',
      'Collect the visa, book travel, and arrive before classes begin.',
    ],
    costAndScholarships: {
      tuition: 'EUR 10,000 - 25,000 per year',
      living: 'EUR 8,000 - 14,000 per year',
      scholarship: 'University scholarships and merit support are available',
      note: 'Costs are generally moderate compared to some other English-speaking countries.',
    },
  },
  australia: {
    title: 'Study in Australia',
    shortTitle: 'Australia',
    slug: 'study-in-australia',
    heroImage: countryImages.australia,
    tagline: "A network of world leading universities, outstanding learning & research facilities, inspiring lectures from brilliant instructors & unparalleled academic excellence, Australian education system offers them all with an exceptional student experience & qualifications that are valued world over.",
    overview:
      "A network of world leading universities, outstanding learning & research facilities, inspiring lectures from brilliant instructors & unparalleled academic excellence, Australian education system offers them all with an exceptional student experience & qualifications that are valued world over.",
    quickFacts: [
      "7 of World's Top 100 Universities",
      'Choose from over 22,000 Courses across 1,100 Institutions',
      '7 of the Best Student Cities in the World (QS Best Student Cities 2023)',
      'More than A$300 Million Invested in Scholarships for International Students',
      'Australian Universities have Produced 15 Nobel Laureates',
    ],
    whyStudy: [
      'Study in a country known for quality teaching and strong student support.',
      'Gain access to industry-based learning, internships, and research.',
      'Enjoy a balanced lifestyle with multicultural cities and safe campuses.',
      "Choose from diplomas, bachelor's, master's, and research pathways.",
    ],
    topUniversities: [
      'University of Melbourne',
      'Australian National University',
      'University of Sydney',
      'University of Queensland',
      'Monash University',
      'University of New South Wales',
    ],
    popularCourses: ['Business', 'Engineering', 'Nursing', 'IT', 'Hospitality', 'Environmental Science'],
    admissionProcess: [
      'Match your profile with suitable university and course options.',
      'Prepare transcripts, English scores, and supporting documents.',
      'Apply and receive an offer letter / COE.',
      'Complete fee payment and pre-visa preparation.',
    ],
    visaProcess: [
      'Gather COE, OSHC, finances, and study intent documents.',
      'Submit the student visa application online.',
      'Provide biometrics or medicals when required.',
      'Receive the visa grant and plan your travel.',
    ],
    costAndScholarships: {
      tuition: 'AUD 20,000 - 45,000 per year',
      living: 'AUD 20,000 - 25,000 per year',
      scholarship: 'Large scholarship pool across public universities',
      note: 'Fees vary widely by course, institution, and city.',
    },
  },
  'new-zealand': {
    title: 'Study in New Zealand',
    shortTitle: 'New Zealand',
    slug: 'study-in-new-zealand',
    heroImage: countryImages.newZealand,
    tagline: 'New Zealand offers world class education system, qualifications that are valued globally, an unmatchable lifestyle and friendly & welcoming natives. This island country has abundant natural beauty, breathtaking landscapes and picturesque coastlines that make studying in New Zealand an adventurous experience.',
    overview:
      'New Zealand offers world class education system, qualifications that are valued globally, an unmatchable lifestyle and friendly & welcoming natives. This island country has abundant natural beauty, breathtaking landscapes and picturesque coastlines that make studying in New Zealand an adventurous experience.',
    quickFacts: [
      'New Zealand universities are ranked in the top 3% in the world',
      'Only country in the world to have all its universities in the global top 500',
      'Over 20,000 international students from 160 countries',
      '8 state-funded universities, 16 Institutes of Technology and Polytechnics (ITPs) & 550 Private Training Establishments (PTEs)',
      'Post-study work visa up to three years and good permanent residency prospects',
    ],
    whyStudy: [
      'Experience a learner-focused education system with smaller class sizes.',
      'Study in a peaceful country with a strong reputation for quality living.',
      'Build a pathway to global career options with internationally recognized degrees.',
      'Access research, technology, and applied-learning opportunities.',
    ],
    topUniversities: [
      'University of Auckland',
      'University of Otago',
      'Victoria University of Wellington',
      'University of Canterbury',
      'Massey University',
      'University of Waikato',
    ],
    popularCourses: ['IT', 'Business', 'Agriculture', 'Tourism', 'Health Sciences', 'Engineering'],
    admissionProcess: [
      'Select your program and check the qualification requirements.',
      'Prepare transcripts, English scores, and supporting documents.',
      'Submit your application and receive an offer.',
      'Accept the offer and complete any pre-arrival steps.',
    ],
    visaProcess: [
      'Organize your offer letter, financials, and medical insurance.',
      'Apply for the student visa with complete documentation.',
      'Respond to visa queries or medical requests if needed.',
      'After approval, book travel and arrive for orientation.',
    ],
    costAndScholarships: {
      tuition: 'NZD 22,000 - 35,000 per year',
      living: 'NZD 15,000 - 20,000 per year',
      scholarship: 'University grants and merit-based scholarships are available',
      note: 'Smaller student intakes can mean more personalized support.',
    },
  },
  europe: {
    title: 'Study in Europe',
    shortTitle: 'Europe',
    slug: 'study-in-europe',
    heroImage: countryImages.germany,
    tagline: "Home to thousands of universities and institutions, Europe has some of the world's strongest economies and offers excellent learning and research opportunities that make studying here a life changing & rewarding experience.",
    overview:
      "Home to thousands of universities and institutions, Europe has some of the world's strongest economies and offers excellent learning and research opportunities that make studying here a life changing & rewarding experience.",
    quickFacts: [
      "18 Universities among World's Top 100",
      'Low Tuition Fee',
      'Schengen Visa - Passport to Europe',
      'Post Study Work Opportunity up to 2 Years',
      'High Academic Standards & Cutting Edge Research',
    ],
    whyStudy: [
      'Compare programs across several countries and academic systems.',
      'Take advantage of lower tuition options in many public universities.',
      'Enjoy access to excellent research environments and innovation hubs.',
      'Experience a rich multicultural environment with strong travel connectivity.',
    ],
    topUniversities: [
      'University of Amsterdam',
      'Technical University of Munich',
      'KU Leuven',
      'University of Copenhagen',
      'ETH Zurich',
      'University of Bologna',
    ],
    popularCourses: ['Engineering', 'Business', 'International Relations', 'Design', 'Computer Science', 'Life Sciences'],
    admissionProcess: [
      'Select country, institution, and course based on academic fit.',
      'Prepare transcripts, language scores, and motivation letters.',
      "Apply directly or through the institution's application portal.",
      'Complete enrollment and accommodation planning after admission.',
    ],
    visaProcess: [
      'Receive your admission or acceptance letter.',
      'Prepare proof of funds, housing, and insurance documents.',
      'Apply for the relevant student visa or residence permit.',
      'Travel after approval and complete local registration if required.',
    ],
    costAndScholarships: {
      tuition: 'EUR 3,000 - 20,000 per year',
      living: 'EUR 8,000 - 15,000 per year',
      scholarship: 'Country-specific grants and university funding options are available',
      note: 'Costs vary significantly by country and whether the institution is public or private.',
    },
  },
  asia: {
    title: 'Study in Asia',
    shortTitle: 'Asia',
    slug: 'study-in-asia',
    heroImage: asiaImage,
    tagline: 'Biggest continent in the world is increasingly becoming a global education powerhouse and a growing number of international students are choosing to study in Asia.',
    overview:
      'Biggest continent in the world is increasingly becoming a global education powerhouse and a growing number of international students are choosing to study in Asia.',
    quickFacts: [
      '26 Asian Universities among Top 100 Globally',
      "Study in World's Booming Economies",
      'Affordable Education & Living',
      'Flexible Entry Requirements',
      'Gateway to Universities in US, UK & Australia',
    ],
    whyStudy: [
      'Enjoy affordable education without compromising on academic value.',
      'Study in rapidly developing economies with strong industry demand.',
      'Choose from a wide range of English-taught programs.',
      'Gain a global perspective with diverse international peer groups.',
    ],
    topUniversities: [
      'National University of Singapore',
      'Nanyang Technological University',
      'University of Hong Kong',
      'Peking University',
      'Tsinghua University',
      'Seoul National University',
    ],
    popularCourses: ['Computer Science', 'Business', 'Artificial Intelligence', 'Engineering', 'Hospitality', 'Finance'],
    admissionProcess: [
      'Decide the country and institution based on your budget and goals.',
      'Prepare educational documents, language proof, and essays where needed.',
      'Apply directly through the university portal or an authorized partner.',
      'Confirm your enrollment after receiving the offer.',
    ],
    visaProcess: [
      'Receive the admission confirmation and fee receipt.',
      'Prepare funds, accommodation, and passport documents.',
      'Submit the student visa application for the chosen country.',
      'Complete travel formalities once the visa is granted.',
    ],
    costAndScholarships: {
      tuition: 'USD 3,000 - 20,000 per year',
      living: 'USD 4,000 - 12,000 per year',
      scholarship: 'Merit funding and university discounts are common in several destinations',
      note: 'Costs vary widely by country, city, and institution ranking.',
    },
  },
};

export const defaultStudyDestinationKey: StudyDestinationKey = 'usa';

