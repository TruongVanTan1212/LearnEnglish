import React from 'react'
import Link from 'next/link'
const pagedetail = () => {
  return (
    <div className='max-w-6xl mx-auto'>
                {/* <!-- Profile --> */}
            <section className="px-8 py-12 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
                <div className="flex-1 text-center">
                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold">Anna Smith</h2>
                <p className="text-gray-500">From UK | 5 years experience</p>
                <div className="text-yellow-500 mt-2">★★★★★</div>
                </div>
                <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">About me</h3>
                <p className="text-gray-700 mb-4">
                    I am an experienced English teacher specialized in IELTS and Business English. 
                    I have taught more than 300 students worldwide.
                </p>
                <h3 className="text-lg font-semibold mb-2">Specialties</h3>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>IELTS Preparation</li>
                    <li>Conversational English</li>
                    <li>Business English</li>
                </ul>
                <Link 
                    href="booking" 
                    className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Book a trial lesson
                </Link>
                </div>
            </section>
    </div>
  )
}

export default pagedetail
