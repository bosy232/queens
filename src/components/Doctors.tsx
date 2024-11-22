import { type FC } from 'react';
import DoctorCard from './DoctorCard';

const Doctors: FC = () => {
  const doctors = [
    {
      name: 'Dr. Mohamed Yehia',
      specialty: 'Obstetrics & Gynecology',
      image: 'https://i.ytimg.com/vi/6B7OoUcNl-A/maxresdefault.jpg',
    },
    {
      name: 'Dr. Sherif Yehia',
      specialty: 'Obstetrics & Gynecology',
      image: 'https://i.ytimg.com/vi/54KG-sag-Hs/hqdefault.jpg',
    },
    {
      name: 'Dr. Amr Helmy',
      specialty: 'Obstetrics & Gynecology',
      image: 'https://i.ytimg.com/vi/_A_sSjifPTM/maxresdefault.jpg',
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