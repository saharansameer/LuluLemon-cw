export function ProductShowcase({ title }) {
  const products = [
    {
      id: 1,
      name: 'Align™ High-Rise Pant 25"',
      price: 98,
      colors: ['Black', 'Navy', 'Red', 'Green'],
      image: 'https://images.lululemon.com/is/image/lululemon/LW5DVHS_069953_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
      id: 2,
      name: 'Metal Vent Tech Short Sleeve Shirt',
      price: 78,
      colors: ['Black', 'White', 'Blue'],
      image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'Down For It All Jacket',
      price: 198,
      colors: ['Black', 'Navy'],
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: 'Energy Bra',
      price: 52,
      colors: ['Pink', 'Black', 'Blue'],
      image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  
  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <a href="/products" className="text-black hover:text-red-600 underline text-sm md:text-base">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white group">
              <div className="relative overflow-hidden h-60 sm:h-72 md:h-80">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 md:px-6 md:py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Quick Add
                </button>
              </div>
              
              <div className="p-3 md:p-4">
                <h3 className="font-medium mb-1 md:mb-2 text-sm md:text-base">{product.name}</h3>
                <p className="mb-1 md:mb-2 text-sm md:text-base">${product.price}</p>
                
                <div className="flex gap-1 mt-1 md:mt-2">
                  {product.colors.map((color) => (
                    <div 
                      key={color}
                      className="w-3 h-3 md:w-4 md:h-4 rounded-full border" 
                      style={{ backgroundColor: color.toLowerCase() === 'white' ? 'white' : color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
