

const Section = () => {
  return (
    <>
      {/*<!-- Hero -->*/}
        <section className="flex flex-col md:flex-row items-center px-8 py-16 md:py-24">
            <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Learn English 1-on-1 <br /> with your best-fit teacher
            </h1>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Sign up for a free trial
            </button>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Video/Image</span>
            </div>
            </div>
        </section>

        {/*<!-- Why choose us -->*/}
        <section className="px-8 py-16 bg-white">
            <h2 className="text-2xl font-bold text-center mb-10">Why choose us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Personalized teacher</h3>
                <p className="text-gray-600 text-sm mt-2">Find the perfect match for your goals</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Free trial</h3>
                <p className="text-gray-600 text-sm mt-2">Start with a free className before committing</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Flexible scheduling</h3>
                <p className="text-gray-600 text-sm mt-2">Book classes at times that suit you</p>
            </div>
            </div>
        </section>
    </>
  )
}

export default Section
