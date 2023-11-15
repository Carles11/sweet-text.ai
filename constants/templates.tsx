import {
  faFileLines,
  faFire,
  faLightbulb,
  faTerminal,
  faBookOpen,
  faEnvelope,
  faBuilding,
  faPencilAlt,
  faLink,
  faShare,
  faBullhorn,
  faGlobe,
  faEdit,
} from '@fortawesome/free-solid-svg-icons'

export type TemplateInput = {
  id: string
  label: string
  placeholder: string
  type: 'text' | 'textarea' | 'select' | 'number'
  options?: string[]
}

export type Template = {
  id: string
  title: string
  description: string
  command: string
  inputs: TemplateInput[]
  icon: any
  categories: string[]
}

const tonOfVoiceOptions = [
  'Friendly and Professional',
  'Conversational and Trustworthy',
  'Informative and Persuasive',
  'Formal and Authoritative',
  'Casual and Approachable',
  'Humorous and Playful',
  'Sincere and Empathetic',
  'Educational and Instructive',
  'Technical and Precise',
  'Inspiring and Motivational',
  'Neutral and Objective',
  'Friendly and Enthusiastic',
  'Direct and Concise',
  'Storytelling and Narrative',
  'Analytical and Data-driven',
  // Add more options as needed
]
export const TEMPLATES: Template[] = [
  {
    id: 'a6dc-0f21-c102-6c22',
    title: 'Paper Abstract',
    description: 'Create a compelling abstract for a scientific paper.',
    command: 'Create a compelling abstract for a scientific paper.',
    icon: faFileLines,
    categories: ['science'],
    inputs: [
      {
        id: 'paper-title',
        label: 'Paper Title',
        placeholder:
          'Dynamic Changes in Brain Connectivity: A Functional Magnetic Resonance Imaging Study',
        type: 'text',
      },
      {
        id: 'key-features',
        label: 'Key Features',
        placeholder:
          'Name the features and words that should appear in the abstract.',
        type: 'textarea',
      },
      {
        id: 'tone-of-voice',
        label: 'Tone of Voice',
        placeholder: 'Select a tone...',
        type: 'select',
        options: tonOfVoiceOptions,
      },

      {
        id: 'paper-paragraphs',
        label: 'Number of Paragraphs',
        placeholder: 'Enter the number of paragraphs...',
        type: 'number',
      },

      {
        id: 'paper-words',
        label: 'Number of Words',
        placeholder: 'How many words should the abstract have in total.',
        type: 'number',
      },
    ],
  },
  {
    id: 'b3fd-4a89-e567-1b2c',
    title: 'Email',
    description: 'Generate various types of email content.',
    command: 'Generate email content.',
    icon: faEnvelope,
    categories: ['communication'],
    inputs: [
      {
        id: 'email-type',
        label: 'Email Type',
        placeholder:
          'Select the type of email (formal, informal, sales, etc.).',
        type: 'select',
        options: [
          'Formal Business',
          'Informal',
          'Sales Outreach',
          'Job Application',
          'Networking',
        ],
      },
      {
        id: 'email-recipient',
        label: 'Email Recipient',
        placeholder: 'Specify the recipient of the email.',
        type: 'text',
      },
      {
        id: 'email-tone',
        label: 'Tone of email',
        placeholder: 'Select the tone for the email content .',
        type: 'select',
        options: tonOfVoiceOptions,
      },
      {
        id: 'email-purpose',
        label: 'Email Purpose',
        placeholder: 'Specify the purpose of the email.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'c2af-8d3e-fg45-3h6i',
    title: 'Marketing Text',
    description: 'Generate marketing content for various purposes.',
    command: 'Generate marketing content.',
    icon: faBullhorn,
    categories: ['marketing'],
    inputs: [
      {
        id: 'marketing-type',
        label: 'Marketing Type',
        placeholder:
          'Select the type of marketing content (ad copy, social media, product descriptions, etc.).',
        type: 'select',
        options: [
          'Ad Copy',
          'Social Media Posts',
          'Product Descriptions',
          'Email Campaigns',
          'Landing Page Content',
        ],
      },
      {
        id: 'marketing-target',
        label: 'Target Audience',
        placeholder: 'Describe the target audience for the marketing content.',
        type: 'textarea',
      },
      {
        id: 'marketing-tone',
        label: 'Tone of Marketing',
        placeholder:
          'Select the tone for the marketing content (persuasive, informative, friendly, etc.).',
        type: 'select',
        options: tonOfVoiceOptions,
      },
    ],
  },
  {
    id: 'd7bc-9f4a-g345-4i2j',
    title: 'Website Text',
    description: 'Generate content for different sections of a website.',
    command: 'Generate website content.',
    icon: faGlobe,
    categories: ['web'],
    inputs: [
      {
        id: 'website-section',
        label: 'Website Section',
        placeholder:
          'Select the section of the website (home, about us, services/products, FAQs, contact, etc.).',
        type: 'select',
        options: [
          'Home Page Content',
          'About Us',
          'Services/Products',
          'FAQs',
          'Contact Page',
        ],
      },
      {
        id: 'website-tone',
        label: 'Tone of Website',
        placeholder:
          'Select the tone for the website content (professional, friendly, informative, etc.).',
        type: 'select',
        options: tonOfVoiceOptions,
      },
      {
        id: 'website-elements',
        label: 'Key Website Elements',
        placeholder:
          'Specify key elements that should be included in the content (keywords, features, etc.).',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'e4cd-5a8b-hi67-3j4k',
    title: 'Blog',
    description: 'Generate content for blog posts.',
    command: 'Generate blog content.',
    icon: faEdit,
    categories: ['writing'],
    inputs: [
      {
        id: 'blog-type',
        label: 'Blog Type',
        placeholder:
          'Select the type of blog post (how-to guides, opinion pieces, product reviews, industry insights, listicles, etc.).',
        type: 'select',
        options: [
          'How-to Guides',
          'Opinion Pieces',
          'Product Reviews',
          'Industry Insights',
          'Listicles',
        ],
      },
      {
        id: 'blog-topic',
        label: 'Blog Topic',
        placeholder: 'Specify the topic or theme of the blog post.',
        type: 'text',
      },
      {
        id: 'blog-tone',
        label: 'Tone of Blog',
        placeholder:
          'Select the tone for the blog post (casual, informative, formal, etc.).',
        type: 'select',
        options: tonOfVoiceOptions,
      },
    ],
  },
  // Add more categories and subcategories as needed
]
