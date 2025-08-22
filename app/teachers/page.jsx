"use client";
import Link from 'next/link';
import React from 'react'
import{ useState } from 'react';
import { BsChevronCompactDown } from "react-icons/bs";      

const pages = () => {

const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
}
  return (
    <div className='max-w-6xl mx-auto'>
        
    {/* <!-- Filter section --> */}
    <h1 className="text-2xl font-bold mb-6">Teacher Filter</h1>
        {/* <!-- Filters --> */}
        <div className="flex gap-4 mb-8">
            {/* <!-- Dropdown 1 --> */}
            <div className="relative group">
            <button className="border px-8 py-2 rounded bg-white flex">Recure <BsChevronCompactDown className='ml-3'/></button>
            <div className="absolute hidden group-hover:block bg-white border rounded mt-1 p-3 shadow-md z-10">
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2"
                        checked={isChecked}
                        onChange={handleCheckboxChange} />
                        Option 1
                </label>
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}/> 
                        Option 2
                
                </label>
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}/>
                         Option 3
                
                </label>
            </div>
            </div>

            {/* <!-- Dropdown 2 --> */}
            <div className="relative group">
            <button className="border px-4 py-2 rounded bg-white flex">Suppos <BsChevronCompactDown className='ml-3' /></button>
            <div className="absolute hidden group-hover:block bg-white border rounded mt-1 p-3 shadow-md z-10">
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2"
                        checked={isChecked}
                        onChange={handleCheckboxChange} />
                        Option 1
                </label>
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}/> 
                        Option 2
                
                </label>
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}/>
                         Option 3
                
                </label>
            </div>
            </div>

            {/* <!-- Dropdown 3 --> */}
            <div className="relative group">
            <button className="border px-4 py-2 rounded  bg-white flex">Print <BsChevronCompactDown className='ml-3'/></button>
            <div className="absolute hidden group-hover:block bg-white border rounded mt-1 p-3 shadow-md z-10">
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2"
                        checked={isChecked}
                        onChange={handleCheckboxChange} />
                        Option 1
                </label>
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}/> 
                        Option 2
                
                </label>
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}/>
                         Option 3
                
                </label>
            </div>
            </div>

            {/* <!-- Dropdown 4 --> */}
            <div className="relative group">
            <button className="border px-4 py-2 rounded  bg-white flex">Roam <BsChevronCompactDown className='ml-3'/></button>
            <div className="absolute hidden group-hover:block bg-white border rounded mt-1 p-3 shadow-md z-10">
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2"
                        checked={isChecked}
                        onChange={handleCheckboxChange} />
                        Option 1
                </label>
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}/> 
                        Option 2
                
                </label>
                <label className="block">
                    <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}/>
                         Option 3
                
                </label>
            </div>
            </div>
        </div>

    {/* <!-- Teacher cards --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* <!-- Card --> */}
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
        <div className="bg-gray-200 aspect-video rounded flex items-center justify-center">
          <span className="text-3xl">▶</span>
        </div>
        <h2 className="font-semibold mt-3">Chantry</h2>
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex text-yellow-500">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Học thử miễn phí
                </button>
          <span className="text-gray-500">17.890</span>
        </div>
      </div>

      {/* <!-- Card copy --> */}
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
        <div className="bg-gray-200 aspect-video rounded flex items-center justify-center">
          <span className="text-3xl">▶</span>
        </div>
        <h2 className="font-semibold mt-3">Chantry</h2>
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex text-yellow-500">★★★★★</div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Học thử miễn phí
                </button>
          <span className="text-gray-500">12.000</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
        <div className="bg-gray-200 aspect-video rounded flex items-center justify-center">
          <span className="text-3xl">▶</span>
        </div>
        <h2 className="font-semibold mt-3">Chantry</h2>
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex text-yellow-500">★★★★★</div>
              <Link 
                    href="/teachers"
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Học thử miễn phí
              </Link>
          <span className="text-gray-500">9.800</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default pages
