import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Hammer, Trash2, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Stump Grinding',
    description: 'Professional stump grinding for most stumps of any size. We use commercial-grade equipment to grind stumps below ground level, leaving your property clean and ready for landscaping.',
  },
  {
    icon: Trash2,
    title: 'Debris Removal',
    description: 'Complete removal of all wood chips, debris, and grinding material. We haul away all waste, leaving your property clean and tidy.',
  },
  {
    icon: Sparkles,
    title: 'Property Cleanup',
    description: 'Thorough cleanup after stump removal. We ensure your yard is left in pristine condition, ready for your next project or landscaping plans.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive stump grinding and property cleanup solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-2 hover:border-brand-green-500 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-brand-green-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-brand-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
