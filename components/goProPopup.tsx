import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

interface GoProPopupProps {
  onClose: () => void
}

const GoProPopup: React.FC<GoProPopupProps> = ({ onClose }) => {
  // @ts-ignore
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-11/12 md:w-1/3 p-2 md:p-8 z-10 relative bg-white rounded rounded-16">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-200 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-black text-3xl md:text-4xl text-center font-bold mb-0">
          There is no Pro Plan
        </h1>
        <div className="w-5/6 md:w-3/4 mx-auto my-4 text-justify text-gray-700">
          <p className="mb-2">
            {' '}
            I created sweetText.ai to be opensource and free. All its features
            are and will be forever free.
          </p>
          <p className="mb-2">
            {' '}
            But if you like and use sweet-text.ai, feel free to show your
            support by buying me a coffee. I of course appreciate that very
            much.
          </p>
          <p>
            {' '}
            Also if you have any questions or feature requests, don't be shy!
            Hit me up on{' '}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-purple-700 font-bold"
              href="https://www.linkedin.com/in/carlos-del-rio-frances/"
            >
              Linkedin
            </a>
          </p>
          <div className="mt-10 flex justify-center justify-items-center">
            <a href="https://ko-fi.com/carlesdelriofrances" target="_blank">
              <img
                height="36"
                style={{ border: 0, height: '36px' }}
                src="https://storage.ko-fi.com/cdn/kofi1.png?v=3"
                alt="Buy Me a Coffee at ko-fi.com"
              />
            </a>
          </div>
        </div>

        <button
          type="button"
          className="absolute top-2 right-4 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={onClose}
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default GoProPopup
