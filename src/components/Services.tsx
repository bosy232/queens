import React from 'react';
import { Heart, Users, Activity, Clock } from 'lucide-react';

interface ServicesProps {
  selectedService: string;
  onServiceSelect: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ selectedService, onServiceSelect }) => {
  const services = [
    { id: 'obstetrics', name: 'Obstetrics & Gynecology', icon: Heart },
    { id: 'pediatrics', name: 'Pediatrics & Neonatology', icon: Users },
    { id: 'surgery', name: 'General Surgery', icon: Activity },
    { id: 'emergency', name: 'Emergency Care', icon: Clock },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onServiceSelect(service.id)}
              className={`p-6 rounded-lg text-left transition-all ${
                selectedService === service.id
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-pink-50'
              }`}
            >
              <service.icon className={`w-8 h-8 mb-4 ${
                selectedService === service.id ? 'text-white' : 'text-primary'
              }`} />
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;