import React from 'react';
import { Calendar, Phone, Search } from 'lucide-react';

const AppointmentForm = () => {
  return (
    <section id="appointment" className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
            <p className="text-xl text-pink-100 mb-8">
              Schedule your visit with our expert medical team today.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                <span>Flexible scheduling options</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <span>24/7 support available</span>
              </div>
              <div className="flex items-center">
                <Search className="w-6 h-6 mr-3" />
                <span>Find the right specialist for you</span>
              </div>
            </div>
          </div>
          <form className="bg-white text-gray-900 rounded-lg p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Request Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;