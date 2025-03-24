export function Hero() {
  return (
    <section className="relative h-[70vh] max-h-[700px] bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_3_1_D_HP?wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
          alt="People wearing Lululemon"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-md bg-white/80 backdrop-blur-sm p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Movement for Life
            </h1>
            <p className="text-base md:text-lg mb-6">
              Engineered for performance, designed for comfort.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/women" className="btn-primary text-sm md:text-base transform hover:scale-105 hover:bg-red-600 transition-all duration-300 rounded">
                Shop Women
              </a>
              <a href="/men" className="btn-primary text-sm md:text-base transform hover:scale-105 hover:bg-red-600 transition-all duration-300 rounded">
                Shop Men
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
