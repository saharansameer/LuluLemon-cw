export function FeaturedCategories() {
  const categories = [
    {
      title: 'Leggings',
      image: 'https://images.lululemon.com/is/image/lululemon/LW5FZES_069017_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      link: '/leggings'
    },
    {
      title: 'Shorts',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/shorts'
    },
    {
      title: 'Tops',
      image: 'https://images.lululemon.com/is/image/lululemon/LW1EZAS_026458_4?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      link: '/tops'
    },
    {
      title: 'Jackets',
      image: 'https://images.lululemon.com/is/image/lululemon/LW3IK9S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      link: '/jackets'
    }
  ];
  
  return (
    <section className="py-8 md:py-16">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((category) => (
            <a 
              key={category.title}
              href={category.link}
              className="group relative block rounded-lg overflow-hidden h-48 md:h-64"
            >
              <img 
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-lg md:text-xl font-bold">{category.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
