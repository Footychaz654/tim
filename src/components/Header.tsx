import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen, currentPage, setCurrentPage }: HeaderProps) {
  const mainNav = [
    { label: 'Home', value: 'home' },
    { label: 'Interior Design', value: 'interior-design' },
    { label: 'Restoration', value: 'restoration' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  const categories = [
    'Latest',
    'Sale',
    'Botanical Art',
    'Furniture',
    'Vases',
    'Objects',
    'Pictures',
    'Prints',
    'Lighting',
    'Modern',
    'Exceptional',
    'Lamp Shades',
  ];

  const handleNavClick = (value: string) => {
    setCurrentPage(value);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className="text-2xl font-light tracking-wide text-gray-800 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            Timothy Langston
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {mainNav.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-sm tracking-wide transition-colors ${
                  currentPage === item.value
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="hidden lg:block border-t border-gray-200">
          <div className="flex items-center justify-center space-x-6 py-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleNavClick(category.toLowerCase().replace(' ', '-'))}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            {mainNav.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left py-2 ${
                  currentPage === item.value
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <div className="text-xs font-medium text-gray-500 mb-3">CATEGORIES</div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleNavClick(category.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left py-2 text-sm text-gray-600"
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
