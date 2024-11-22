import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Exceptional Care, Personalized for You
            </h1>
            <p className="text-xl text-pink-100 mb-8">
              Leading the way in medical excellence with advanced technology and compassionate care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#appointment" className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-pink-50 transition-colors">
                Book Appointment
              </a>
              <a href="#services" className="border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors">
                Our Services
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80"
              alt="Hospital Staff"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;