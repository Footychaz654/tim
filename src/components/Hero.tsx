export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
            Fine Art & Antiques
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Exceptional 18th, 19th & 20th Century Decorative Arts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Featured antique"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Featured furniture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Featured lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
