import React from 'react'
import Layout from './layout'
import CardGrid from './components/cardGridWrapper'
import { TEMPLATES } from './constants/templates'

const HomePage: React.FC = () => {
  return (
    <Layout title="">
      <h1 className="text-4xl font-bold mt-10 ml-10">
        Welcome to <span className="text-blue-600">textiest.ai</span>
      </h1>
      <h2 className="text-2xl font-light mt-5 ml-10">
        Create amazing{' '}
        <strong className="text-blue-600">
          texts, presentation intros, academic papers, whole research article
          summaries or lengthening, blog posts, marketing copy, SEO content
        </strong>{' '}
        or whatever comes to your mind as text. With the ChatGPT engine.
      </h2>
      <CardGrid cards={TEMPLATES} />
    </Layout>
  )
}

export default HomePage
