'use client';

import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-brand-green-700 hover:text-brand-green-800 transition-colors"
            >
              C&C Stump Grinding
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-gray-700 hover:text-brand-green-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-gray-700 hover:text-brand-green-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="text-sm font-medium text-gray-700 hover:text-brand-green-600 transition-colors"
            >
              Service Areas
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-gray-700 hover:text-brand-green-600 transition-colors"
            >
              Contact
            </button>
            <a href="tel:407-448-1647">
              <Button className="bg-brand-blue-600 hover:bg-brand-blue-700">
                <Phone className="mr-2 h-4 w-4" />
                407-448-1647
              </Button>
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-sm font-medium text-gray-700 hover:text-brand-green-600"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-sm font-medium text-gray-700 hover:text-brand-green-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="text-left text-sm font-medium text-gray-700 hover:text-brand-green-600"
            >
              Service Areas
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-sm font-medium text-gray-700 hover:text-brand-green-600"
            >
              Contact
            </button>
            <a href="tel:407-448-1647" className="w-full">
              <Button className="w-full bg-brand-blue-600 hover:bg-brand-blue-700">
                <Phone className="mr-2 h-4 w-4" />
                407-448-1647
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
