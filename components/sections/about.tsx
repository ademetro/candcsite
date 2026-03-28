import { Shield, Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your protection and peace of mind',
  },
  {
    icon: Award,
    title: 'Quality Service',
    description: 'Professional work with attention to detail on every job',
  },
  {
    icon: Users,
    title: 'Experienced Owner',
    description: 'Owner Chris Linzey personally oversees all projects',
  },
  {
    icon: Clock,
    title: 'Reliable & Timely',
    description: 'We show up on time and complete work as promised',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-brand-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="https://images.pexels.com/photos/5691546/pexels-photo-5691546.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional tree service equipment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose C&C Stump Grinding?
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in the industry, C&C Stump Grinding and More Inc provides professional, reliable stump removal services throughout Orange and Lake County. We take pride in delivering quality work and exceptional customer service on every job.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-100 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-brand-blue-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
