export type Venture = {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  logo: string
  website?: string
}

export const ventureCategories = [
  'All',
  'Community',
  'Education',
  'Housing',
  'Finance',
  'Brand',
  'Visa',
  'Career',
] as const

export type VentureCategory = (typeof ventureCategories)[number]

export const ventures: Venture[] = [
  {
    id: 'open-atlas',
    name: 'Open Atlas',
    category: 'Community',
    tagline: 'Community · 10,000+ members',
    description:
      'A global community for high-skilled immigrants to mentor, network, and share resources — from visa pathways to career moves and everything in between.',
    logo: '/venture_logo/open-atlas.png',
    website: 'https://theopenatlas.org/',
  },
  {
    id: 'goupbroad',
    name: 'GoUpBroad',
    category: 'Education',
    tagline: 'Affordable College Counseling',
    description:
      'Affordable college counseling for students who want expert guidance without the Ivy League price tag. From school selection to essays, we keep it simple and accessible.',
    logo: '/venture_logo/Go-upbroad.png',
    website: 'https://goupbroad.com/',
  },
  {
    id: 'ivystrategist',
    name: 'IvyStrategist',
    category: 'Education',
    tagline: 'Ivy League MBA Counseling',
    description:
      'MBA admissions education for professionals with strong technical backgrounds — engineers, scientists, and operators who want to break into top-tier business programs.',
    logo: '/venture_logo/Ivy-Strategst.png',
  },
  {
    id: 'open-admits',
    name: 'Open Admits',
    category: 'Education',
    tagline: 'US High School Students',
    description:
      'Admissions consulting built for US high school students aiming for top universities — from course selection and extracurricular strategy to compelling applications.',
    logo: '/venture_logo/Open-admits.png',
    website: 'https://openadmits.com/',
  },
  {
    id: 'students-landing',
    name: 'Students Landing',
    category: 'Housing',
    tagline: 'Verified US Housing',
    description:
      'Virtual tours, deposits from abroad, and cosigner support — students lock in safe, verified housing remotely without falling for scams.',
    logo: '/venture_logo/Students-landing.png',
    website: 'https://studentslanding.com/',
  },
  {
    id: 'open-tax-advisors',
    name: 'Open Tax Advisors',
    category: 'Finance',
    tagline: 'Tax Filing',
    description:
      'Tax filing built for international workers, students, and visa holders — handling treaty benefits, cross-border rules, and nonresident filings accurately.',
    logo: '/venture_logo/Open-tax-advisors.png',
    website: 'https://opentaxadvisors.com/',
  },
  {
    id: 'shout-start',
    name: 'Shout Start',
    category: 'Brand',
    tagline: 'PR & Thought Leadership',
    description:
      'Earned media and narrative strategy that positions founders, researchers, and operators as recognized leaders in their fields.',
    logo: '/venture_logo/Shout-start.png',
    website: 'https://shoutstart.com/',
  },
  {
    id: 'visa-vibe',
    name: 'Visa Vibe',
    category: 'Visa',
    tagline: 'Talent Visa Intelligence',
    description:
      'Intelligence for EB-1A and other talent visa applications — AAO decisions, success patterns, and AI agents trained to think like a USCIS officer.',
    logo: '/venture_logo/visa-vibe.png',
  },
  {
    id: 'the-immigrant-academy',
    name: 'The Immigrant Academy',
    category: 'Education',
    tagline: 'Immigrants Settling in US',
    description:
      'Resources and community for women settling in the US — especially H-4 and H-4 EAD spouses navigating careers, finances, and life in a new country.',
    logo: '/venture_logo/the-immigrant-academy.png',
    website: 'https://theimmigrantacademy.com/',
  },
  {
    id: 'openhired',
    name: 'OpenHired',
    category: 'Career',
    tagline: 'Job Placement',
    description:
      'Job placement program for immigrants — tailored applications, interview coaching, and placement at visa-sponsoring companies. 1,500+ job seekers supported.',
    logo: '/venture_logo/open-hired.png',
    website: 'https://openhired.com/',
  },
  {
    id: 'open-invests',
    name: 'Open Invests',
    category: 'Finance',
    tagline: 'Investing for Immigrants',
    description:
      'A FINRA-registered representative focused on EB-5, real estate investments, and secondary shares of private companies.',
    logo: '/venture_logo/Open-invests.png',
    website: 'https://openinvests.com/',
  },
]
