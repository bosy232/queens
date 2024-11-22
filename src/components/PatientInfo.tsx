import { type FC } from 'react';
import { CreditCard, FileText, Clock, Phone } from 'lucide-react';

const PatientInfo: FC = () => {
  const insuranceProviders = [
    'Aetna Health Insurance',
    'Blue Cross Blue Shield',
    'Cigna Healthcare',
    'United Healthcare',
    'Medicare & Medicaid',
  ];

  return (
    <section id="patient-info" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Patient Information</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Insurance & Payments</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <CreditCard className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Accepted Insurance Providers</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {insuranceProviders.map((provider) => (
                      <li key={provider}>{provider}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start mt-6">
                <FileText className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Payment Options</h4>
                  <p className="text-gray-600">
                    We accept cash, all major credit cards, and offer flexible payment plans for eligible patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Hospital Guidelines</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <Clock className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Visiting Hours</h4>
                  <p className="text-gray-600">
                    General wards: 10:00 AM - 8:00 PM<br />
                    ICU: 11:00 AM - 12:00 PM & 5:00 PM - 6:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Important Contacts</h4>
                  <div className="text-gray-600">
                    <p>Emergency: 123-456-7890</p>
                    <p>Reception: 123-456-7891</p>
                    <p>Patient Services: 123-456-7892</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;