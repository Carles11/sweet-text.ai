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
;[
  '',
  '',
  '',
  '7g84-e3ae-cc22-7dc7',
  '8h95-f4bf-dd33-8cb8',
  '9i06-g5c0-ee44-9fad',
  '0j17-h7d1-ff55-0e09',
  '1k28-i8e2-0011-1f1c',
  '2l39-j9f3-1100-2a2b',
]

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
  // Add some more options as needed
]

const textTypes = [
  'Scientific Text',
  'Literary Text',
  'Technical Text',
  'Persuasive Text',
  'Informative Text',
]

const blogTypes = ['Technology', 'Health', 'Travel', 'Lifestyle', 'Finance']

const websiteSections = [
  'Home Page Content',
  'About Us',
  'Services/Products',
  'FAQs',
  'Contact Page',
]

export const TEMPLATES: Template[] = [
  {
    id: '5e62-c18c-0011-5fa5',
    title: 'Create a text',
    description: 'Generate a text based on your instructions.',
    command: 'Generate a text based on the following:',
    icon: faEdit,
    categories: ['text'],
    inputs: [
      {
        id: 'text-type',
        label: 'Text Type',
        placeholder: 'Select the type of your text.',
        type: 'select',
        options: textTypes,
      },
      {
        id: 'text-topic',
        label: 'Text topic',
        placeholder: 'Specify the topic or theme of the text.',
        type: 'text',
      },
      {
        id: 'text-tone',
        label: 'Tone of text',
        placeholder:
          'Select the tone for the text (casual, informative, formal, etc.).',
        type: 'select',
        options: tonOfVoiceOptions,
      },
      {
        id: 'paper-paragraphs',
        label: 'Number of paragraphs',
        placeholder: 'Enter the number of paragraphs your text should have.',
        type: 'number',
      },

      {
        id: 'paper-words',
        label: 'Number of words',
        placeholder: 'How many words should the abstract have in total.',
        type: 'number',
      },
    ],
  },
  {
    id: '3c49-af6a-ee00-3d83',
    title: 'Summarize a text',
    description: 'Summarize the length of your text.',
    command:
      'Summarize the following text. Keep the most relevant parts based on the key-words given.',
    icon: faEdit,
    categories: ['text'],
    inputs: [
      {
        id: 'text-type',
        label: 'Text Type',
        placeholder: 'Select the type of your text.',
        type: 'select',
        options: textTypes,
      },
      {
        id: 'text-tone',
        label: 'Tone of text',
        placeholder:
          'Select the tone for the text (casual, informative, formal, etc.).',
        type: 'select',
        options: tonOfVoiceOptions,
      },
      {
        id: 'key-words',
        label: 'Key Words',
        placeholder:
          'Name the for you most relevant features and the key words that shouldn´t be missing in the summarized text.',
        type: 'textarea',
      },
      {
        id: 'text-target',
        label: 'Add your text',
        placeholder: 'Paste here the text you need to summarize.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'e4cd-5a8b-hi67-3j4k',
    title: 'Enhance a text',
    description: 'Enhance the length of your text.',
    command: 'Enhance the length of your text.',
    icon: faEdit,
    categories: ['text'],
    inputs: [
      {
        id: 'text-type',
        label: 'Text Type',
        placeholder: 'Select the type of your text.',
        type: 'select',
        options: textTypes,
      },
      {
        id: 'text-topic',
        label: 'Text topic',
        placeholder: 'Specify the topic or theme of the text.',
        type: 'text',
      },
      {
        id: 'text-tone',
        label: 'Tone of text',
        placeholder:
          'Select the tone for the text (casual, informative, formal, etc.).',
        type: 'select',
        options: tonOfVoiceOptions,
      },
    ],
  },
  {
    id: 'b3fd-4a89-e567-1b2c',
    title: 'Email',
    description: 'Generate various types of email content.',
    command: 'Generate email content.',
    icon: faEnvelope,
    categories: ['email'],
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
        placeholder: 'Specify the  addressee of the email.',
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
    id: '1a79-8d7e-cc88-1e61',
    title: 'Email Subject Lines',
    description: 'Get your emails opened with irresistible subject lines.',
    command: 'Write Email Subject Lines. use the following : ',
    icon: faEnvelope,
    categories: ['email'],
    inputs: [
      {
        id: 'companyName',
        type: 'text',
        label: 'Company/Product Name',
        placeholder: 'SmartMailer',
      },
      {
        id: 'tone',
        type: 'text',
        label: 'Tone of voice',
        placeholder: 'Friendly',
      },
      {
        id: 'emailContent',
        type: 'textarea',
        label: 'What is your email about?',
        placeholder:
          'Introducing our latest online course on email marketing strategies. Early bird sign-ups get a 25% discount.',
      },
    ],
  },
  {
    id: '2b36-9e4f-dd99-2f72',
    title: 'Paper Introduction',
    description: 'Create a compelling introduction for a scientific paper.',
    command: 'Create a compelling introduction for a scientific paper.',
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
        placeholder: 'Select a tone.',
        type: 'select',
        options: tonOfVoiceOptions,
      },

      {
        id: 'paper-paragraphs',
        label: 'Number of paragraphs',
        placeholder: 'Enter the number of paragraphs the output should have.',
        type: 'number',
      },

      {
        id: 'paper-words',
        label: 'Number of words',
        placeholder: 'How many words should the abstract have in total.',
        type: 'number',
      },
    ],
  },
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
        placeholder: 'Select a tone.',
        type: 'select',
        options: tonOfVoiceOptions,
      },

      {
        id: 'paper-paragraphs',
        label: 'Number of paragraphs',
        placeholder: 'Enter the number of paragraphs your text should have.',
        type: 'number',
      },

      {
        id: 'paper-words',
        label: 'Number of words',
        placeholder: 'How many words should the abstract have in total.',
        type: 'number',
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
    categories: ['website'],
    inputs: [
      {
        id: 'website-section',
        label: 'Website Section',
        placeholder:
          'Select the section of the website (home, about us, services / products, FAQs, contact, etc.).',
        type: 'select',
        options: websiteSections,
      },
      {
        id: 'website-tone',
        label: 'Tone of Website',
        placeholder:
          'Select the desired tone for the website content (professional, friendly, informative, etc.).',
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
    id: '6f73-d29d-1100-6eb6',
    title: 'Blog post',
    description: 'Generate content for a blog post.',
    command: 'Generate blog post content.',
    icon: faGlobe,
    categories: ['website'],
    inputs: [
      {
        id: 'blog-post',
        label: 'Blog post',
        placeholder: 'Select the kind of blog post you need to generate.',
        type: 'select',
        options: blogTypes,
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

  // Add more categories and subcategories as needed
]
