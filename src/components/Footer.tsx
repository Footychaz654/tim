import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-light text-gray-800 mb-4">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Specializing in fine art and antiques from the 18th, 19th, and 20th centuries.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('interior-design')}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Interior Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('restoration')}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Restoration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('furniture')}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Furniture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('lighting')}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Lighting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('objects')}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Objects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('botanical-art')}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Botanical Art
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light text-gray-800 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:info@timothylangston.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Timothy Langston Fine Art & Antiques. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
