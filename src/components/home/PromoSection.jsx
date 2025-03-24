export function PromoSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container-custom">
        <div className="relative h-[40vh] md:h-[60vh] max-h-[600px] rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Lululemon promotion"
            className="w-full h-full object-cover object-center"
          />
          
          <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-10">
            <div className="max-w-xs md:max-w-md bg-white p-4 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">Take 30% Off Select Styles</h2>
              <p className="mb-4 md:mb-6 text-sm md:text-base">Limited time offer. Exclusions apply.</p>
              <a
                href="/sale"
                className="btn-primary inline-block text-sm md:text-base transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-lg"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
