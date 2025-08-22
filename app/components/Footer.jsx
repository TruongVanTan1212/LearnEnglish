

const Footer = () => {
    const current = new Date().getFullYear();
  return (
   <footer className="bg-black mt-32 bottom-0 left-0 w-full">
      <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8 h-80">
        <p className="text-center text-sm text-white">
          &copy; {current} Learn English. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
