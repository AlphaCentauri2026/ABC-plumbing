import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
              <p className="text-gray-800 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
