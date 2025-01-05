import React from 'react'

function Footer() {
  return (
    <div className="mt-7" style={{minWidth:"300px"}}>

    <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
            <p className="text-sm">&copy; 2025. All rights reserved.</p>
            <ul className="flex justify-center mt-2">
                <li><a href="#" className="hover:text-gray-300 px-2">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300 px-2">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300 px-2">Contact Us</a></li>
            </ul>
        </div>
    </footer>
    </div>



  )
}

export default Footer