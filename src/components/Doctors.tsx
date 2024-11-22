import { type FC } from 'react';
import DoctorCard from './DoctorCard';

const Doctors: FC = () => {
  const doctors = [
    {
      name: 'Dr. Sherif El Aitany',
      specialty: 'Chief of Surgery',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Dr. Tarek Abdel Gawad',
      specialty: 'Head of Pediatrics',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Dr. Sarah Thompson',
      specialty: 'Obstetrics & Gynecology',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <section id="doctors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Doctors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;