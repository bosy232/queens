import { type FC } from 'react';
import { Building, Users, Award, Clock } from 'lucide-react';

const About: FC = () => {
  const stats = [
    { icon: Building, value: '4', label: 'Operating Theaters' },
    { icon: Users, value: '50+', label: 'Medical Specialists' },
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Emergency Care' },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Queens Royal Hospital</h2>
            <p className="text-gray-600 mb-6">
              Since our establishment, Queens Royal Hospital has been at the forefront of medical excellence in New Cairo. Our state-of-the-art facility combines cutting-edge technology with compassionate care to provide the best possible outcomes for our patients.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of highly qualified medical professionals is dedicated to delivering personalized healthcare services in a warm, family-friendly environment. With four modern operating theaters and round-the-clock emergency services, we ensure that quality healthcare is always accessible.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-pink-50 p-6 rounded-lg text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;