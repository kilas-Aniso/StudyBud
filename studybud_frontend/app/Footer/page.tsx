import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] text-[#2E1A47]">
      
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="footer-div-1">
            <h1 className="text-5xl font-bold text-[#2E1A47]">
              Study<span className="text-yellow-500">Bud</span>
            </h1>
            <p className="mt-2 text-gray-600 text-lg max-w-sm">
              Find resources and connect wth a peer to study with <br />
    
            </p>
          </div>

          <div className="footer-div-3 text-lg">
            <h3 className="text-2xl text-[#2E1A47] font-semibold">Quick Links</h3>
            <p className="text-gray-700">Home</p>
            <p className="text-gray-700">Our Programs</p>
            <p className="text-gray-700">Resources</p>
            <p className="text-gray-700">Find a Studybuddy</p>
          </div>


          <div className="footer-div-3 text-lg">
            <h3 className="text-2xl text-[#2E1A47] font-semibold">Contact Us</h3>
            <p className="text-gray-700">Email: contact@studybud.ca</p>
            <p className="text-gray-700">Phone: 365-654-321</p>
            <div className="flex space-x-3 mt-2">

            </div>
          </div>

          <div className="footer-div-3 text-lg">
            <h3 className="text-2xl text-[#2E1A47] font-semibold">Social Media</h3>
            <p className="text-gray-700">Insragram</p>
            <p className="text-gray-700">Discord</p>
            <p className="text-gray-700">Linkedin</p>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        <p className="text-center text-gray-600 text-lg">
          &copy; {new Date().getFullYear()} StudyBud all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
