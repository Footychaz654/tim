import { useState } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <ProductGrid title="Latest" category="latest" />
            <ProductGrid title="Sale" category="sale" />
            <ProductGrid title="Botanical Art" category="botanical" />
            <ProductGrid title="Exceptional" category="exceptional" />
          </>
        )}

        {currentPage === 'interior-design' && (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-light mb-12 text-gray-800">Interior Design</h1>
            <ProductGrid category="interior" showTitle={false} />
          </div>
        )}

        {currentPage === 'restoration' && (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-light mb-12 text-gray-800">Restoration</h1>
            <ProductGrid category="restoration" showTitle={false} />
          </div>
        )}

        {currentPage === 'furniture' && (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-light mb-12 text-gray-800">Furniture</h1>
            <ProductGrid category="furniture" showTitle={false} />
          </div>
        )}

        {currentPage === 'lighting' && (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-light mb-12 text-gray-800">Lighting</h1>
            <ProductGrid category="lighting" showTitle={false} />
          </div>
        )}

        {currentPage === 'objects' && (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-light mb-12 text-gray-800">Objects</h1>
            <ProductGrid category="objects" showTitle={false} />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-light mb-8 text-gray-800">About</h1>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Timothy Langston Fine Art & Antiques specializes in 18th, 19th, and 20th century decorative arts,
                with a particular focus on exceptional pieces that combine aesthetic beauty with historical significance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our collection includes carefully curated furniture, lighting, botanical art, and objects d'art,
                sourced from across Europe and beyond. Each piece is selected for its quality, provenance, and
                timeless appeal.
              </p>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="max-w-2xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-light mb-12 text-gray-800">Contact</h1>
            <div className="space-y-6 text-gray-700">
              <p>For inquiries about our collection or services, please get in touch.</p>
              <div className="mt-8">
                <p className="font-medium">Email:</p>
                <p className="text-gray-600">info@timothylangston.com</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
