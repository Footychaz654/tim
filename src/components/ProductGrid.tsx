interface ProductGridProps {
  title?: string;
  category: string;
  showTitle?: boolean;
}

export default function ProductGrid({ title, category, showTitle = true }: ProductGridProps) {
  const getProductImages = (cat: string) => {
    const imagesByCategory: { [key: string]: string[] } = {
      latest: [
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      sale: [
        'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      botanical: [
        'https://images.pexels.com/photos/1047052/pexels-photo-1047052.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2061857/pexels-photo-2061857.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      exceptional: [
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      furniture: [
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      lighting: [
        'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      objects: [
        'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2061857/pexels-photo-2061857.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1047052/pexels-photo-1047052.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      interior: [
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      restoration: [
        'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    };

    return imagesByCategory[cat] || imagesByCategory.latest;
  };

  const images = getProductImages(category);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {showTitle && title && (
          <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">{title}</h2>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
