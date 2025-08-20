import React from 'react'

const Footer = () => {
    const current = new Date().getFullYear();
  return (
   <footer class="bg-gray-100 py-6">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-gray-600">
          &copy; {current} Learn English. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
