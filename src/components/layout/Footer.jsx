import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

export function Footer() {
  const footerLinks = [
    {
      title: 'Help',
      links: ['Help Center', 'Order Status', 'Returns', 'Shipping', 'Size Charts', 'Contact Us']
    },
    {
      title: 'About lululemon',
      links: ['About Us', 'Careers', 'Sustainability', 'Investors', 'Affiliate Program', 'Community']
    },
    {
      title: 'STORE LOCATOR',
      links: ['Find a Store', 'Store Events', 'Store Offerings']
    }
  ];
  
  return (
    <footer className="bg-lulu-gray-light pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-lulu-gray-dark hover:text-lulu-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-lg font-bold mb-4">SIGN UP FOR EMAILS</h3>
            <p className="mb-4 text-lulu-gray-dark">Stay updated on new arrivals, offers & events</p>
            <form className="flex mb-6">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow p-2 border border-lulu-gray-medium focus:outline-none focus:border-lulu-black"
              />
              <button className="bg-lulu-black text-white px-4 py-2">
                →
              </button>
            </form>
            
            <div className="flex space-x-4">
              <a href="#" className="text-lulu-black hover:text-lulu-red">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-lulu-black hover:text-lulu-red">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-lulu-black hover:text-lulu-red">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-lulu-black hover:text-lulu-red">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-lulu-black hover:text-lulu-red">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-lulu-gray-medium mt-12 pt-8 text-sm text-lulu-gray-dark">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} lululemon athletica clone | For educational purposes only</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-lulu-black">Privacy Policy</a>
              <a href="#" className="hover:text-lulu-black">Terms of Use</a>
              <a href="#" className="hover:text-lulu-black">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
