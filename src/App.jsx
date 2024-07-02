
const  App=()=> {


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-600 text-white w-full py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">BoostNow 🚀</h1>
        <p className="text-lg mb-2">
          To reach a specific audience, it's essential to establish a strong online presence for your business.
        </p>
        <p className="text-lg">What does your business do? Let us know how we can help you grow!</p>
      </header>

      <section className="my-8 w-11/12 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">Web Development</li>
          <li className="mb-2">Data Analysis</li>
          <li className="mb-2">Digital Marketing</li>
          <li className="mb-2">Social Media Marketing</li>
        </ul>
      </section>

      <section className="my-8 w-11/12 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="business" className="block text-sm font-medium text-gray-700">
              Your Business
            </label>
            <input
              type="text"
              id="business"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              How can we help you?
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  )
}

export default App
