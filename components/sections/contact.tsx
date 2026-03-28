'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '407-448-1647',
    href: 'tel:407-448-1647',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'chris@candcstumpgrinding.com',
    href: 'mailto:chris@candcstumpgrinding.com',
  },
  {
    icon: MapPin,
    label: 'Service Areas',
    value: 'Orange & Lake County',
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-brand-green-50 to-brand-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to remove that stump? Contact us today for a free quote
            </p>
          </div>

          <Card className="border-2 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-brand-green-100 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-7 w-7 text-brand-green-700" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-brand-blue-600 hover:text-brand-blue-700 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-brand-green-600 to-brand-blue-600 rounded-xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Call Now for a Free Quote</h3>
                <p className="mb-6 text-green-50">
                  Licensed and insured professional stump grinding services
                </p>
                <a href="tel:407-448-1647">
                  <Button size="lg" className="bg-white text-brand-green-700 hover:bg-gray-100 text-lg px-8 py-6">
                    <Phone className="mr-2 h-5 w-5" />
                    407-448-1647
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
