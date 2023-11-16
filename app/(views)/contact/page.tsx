'use client'

import { emailSend } from 'utils/send-email'
import ContactForm from './form'

const Contact = () => {
  const handleSubmit = (
    data: Record<string, string>,
    resetForm: () => void
  ) => {
    console.log('submitting', data)

    emailSend(data, resetForm)
  }

  return (
    <section className="flex items-center bg-stone-100 lg:h-screen font-poppins dark:bg-gray-800 ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-11 md:px-6">
        <div className="mb-10 text-left">
          <h2 className="pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
            Let's Stay Connected
          </h2>
          <p className="text-sm dark:text-gray-400">
            Reach Out to Us – Let's Stay Connected for Inquiries, Support and
            Collaboration.{' '}
          </p>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full px-4 lg:w-1/2 mb-11 lg:mb-0">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-10 sm:w-1/2">
                <div className="max-w-xs mx-auto">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-700 rounded-full dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                    </svg>
                  </div>
                  <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                    Email
                  </h2>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
                  >
                    carles@crix.design
                  </a>
                </div>
              </div>
              <div className="w-full px-4 mb-10 sm:w-1/2">
                <div className="max-w-xs mx-auto">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-700 rounded-full dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                    </svg>
                  </div>
                  <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                    Phone
                  </h2>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
                  >
                    +56921881214
                  </a>
                </div>
              </div>
              <div className="w-full px-4 mb-10 sm:w-1/2">
                <div className="max-w-xs mx-auto">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-700 rounded-full dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>
                  </div>
                  <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                    Office
                  </h2>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
                  >
                    Santiago de Chile
                  </a>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="max-w-xs mx-auto">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-700 rounded-full dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-grid-3x3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"></path>
                    </svg>
                  </div>
                  <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                    Whatsapp
                  </h2>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
                  >
                    +491782871785
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <ContactForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
