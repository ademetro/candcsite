import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const areas = [
  { name: 'Orange County', cities: ['Orlando', 'Winter Park', 'Apopka', 'Ocoee', 'Winter Garden'] },
  { name: 'Lake County', cities: ['Clermont', 'Leesburg', 'Mount Dora', 'Eustis', 'Tavares'] },
];

export function ServiceAreas() {
  return (
    <section id="areas" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proudly serving Orange and Lake County communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {areas.map((area) => (
            <Card key={area.name} className="border-2 hover:border-brand-blue-500 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-brand-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.name}</h3>
                    <ul className="space-y-2">
                      {area.cities.map((city) => (
                        <li key={city} className="text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-green-500" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Not sure if we service your area?{' '}
            <a href="tel:407-448-1647" className="text-brand-blue-600 hover:text-brand-blue-700 font-semibold">
              Give us a call
            </a>
            {' '}to find out!
          </p>
        </div>
      </div>
    </section>
  );
}
