import CardGrid from 'components/cardGridWrapper'
import { TEMPLATES } from 'constants/templates'
// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-10 ml-10">
        Welcome to <span className="text-blue-600">sweet-text.ai</span>
      </h1>
      <h2 className="text-2xl font-light mt-5 ml-10">
        Create amazing{' '}
        <strong>
          texts, presentation intros, academic papers, research articles,
          summaries or lengthening texts, marketing copy,
        </strong>{' '}
        or pretty much whatever comes to your mind as text. All powered by
        ChatGPT and the best promps on the web.
      </h2>
      <CardGrid TEMPLATES={TEMPLATES} />
    </div>
  )
}

export default HomePage
