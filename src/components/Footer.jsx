

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo & Réseaux sociaux */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              src="https://img.lovepik.com/freepng/32/33/97/93m58PICW31is53frb58PICj5_PIC2018.png_wh860.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <h1 className="text-xl font-bold">MRKT.AI</h1>
          </div>
          {/* Icônes Réseaux Sociaux */}
          <div className="flex space-x-3">
            <a href="#" className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM18 7.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/>
              </svg>
            </a>
            <a href="#" className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12A10 10 0 1 0 2 12a10 10 0 0 0 20 0ZM9 10.5v6h2v-6H9Zm1-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM13 9v1.5h1.5V9H17v6h-2v-3h-1v3h-2V9h1Z"/>
              </svg>
            </a>
            <a href="#" className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 15.5v-7l6 3.5-6 3.5Zm2-13A10 10 0 1 0 22 12 10 10 0 0 0 12 2Z"/>
              </svg>
            </a>
            <a href="#" className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.55 22c9.05 0 14-7.5 14-14v-.64A10 10 0 0 0 22 5.5a9.7 9.7 0 0 1-2.79.76 4.9 4.9 0 0 0 2.14-2.69 9.65 9.65 0 0 1-3.1 1.19A4.85 4.85 0 0 0 12 8.5a4.6 4.6 0 0 0 .13 1.11 13.7 13.7 0 0 1-10-5.1s-4 7.5 5 11a10.1 10.1 0 0 1-6 .21c2 5.5 9 6 13.5 3.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Sections du Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Solution</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Digital Marketing</li>
              <li>Social Media</li>
              <li>Ads</li>
              <li>SEO</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resource</h4>
            <ul className="space-y-2 text-gray-400">
              <li>News & Media</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Pricing</li>
              <li>Compare Us</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <hr className="border-gray-700 my-6" />

      {/* Bas du Footer */}
      <div className="flex flex-col md:flex-row justify-between text-gray-400 text-xs">
        <p>© 2000-2001, All rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Disclosure</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
