import { Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-green-400">
              C&C Stump Grinding and More 
            </h3>
            <p className="text-gray-400 mb-2">Licensed & Insured</p>
            <p className="text-gray-400">Professional Stump Grinding Services</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Orange County</li>
              <li>Lake County</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <a
              href="tel:407-448-1647"
              className="flex items-center gap-2 text-brand-blue-400 hover:text-brand-blue-300 font-semibold mb-2"
            >
              <Phone className="h-4 w-4" />
              407-448-1647
            </a>
            <p className="text-gray-400">Owner: Chris Linzey</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} C&C Stump Grinding and More, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
