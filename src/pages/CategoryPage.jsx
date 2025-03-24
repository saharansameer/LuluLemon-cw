import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CategoryPage({ title, description, filters, products, bannerImage }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={bannerImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl max-w-2xl">{description}</p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
              <button
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'All' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter('All')}
              >
                All
              </button>
              {filters.map(filter => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full ${
                    activeFilter === filter 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-full">
              <span>Sort By</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <button className="w-full py-2 bg-black text-white font-semibold">Quick Add</button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <div className="flex gap-2 my-1">
                    {product.colors.map((color, index) => (
                      <div 
                        key={index}
                        title={color}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.toLowerCase() }}
                      ></div>
                    ))}
                  </div>
                  <div className="mt-1">
                    {product.originalPrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 font-medium">${product.price}</span>
                        <span className="text-gray-500 line-through">${product.originalPrice}</span>
                      </div>
                    ) : (
                      <span className="font-medium">${product.price}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 