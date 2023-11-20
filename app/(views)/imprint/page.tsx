import React from 'react'

const Imprint = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Welcome to the Imprint section of our website!
            </h2>
            <p>
              At Carles del Río Francés, we believe in building strong
              relationships with our visitors based on trust and transparency.
              That's why we want to introduce ourselves and provide you with all
              the necessary information about our company.
            </p>
            <p>
              My name is Carles del Río Francés, and I am excited to be the
              driving force behind this website. As a passionate professional, I
              am committed to delivering the highest level of service to our
              valued visitors.
            </p>
            <p>
              To ensure compliance with legal requirements, our VAT number is
              DE27571094. Our physical address is Elbestrasse 15, Frankfurt am
              Main, 60329, Hessen.
            </p>
            <p>
              If you have any questions or need assistance, please don't
              hesitate to contact us. You can reach us by phone at{' '}
              <span className="font-bold">+491782871785</span> or via email at{' '}
              <a href="mailto:carles@crix.design" className="text-blue-500">
                carles@crix.design
              </a>
              .
            </p>
            <p>
              Thank you for choosing our website. We appreciate your trust and
              look forward to serving you with excellence!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Imprint
