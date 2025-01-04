import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              KR Exports specializes in industrial control repairs and replacement parts, serving various industries worldwide.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link href="/inventory" className="hover:text-yellow-400 transition-colors">Inventory</Link></li>
              <li><Link href="/catalogue" className="hover:text-yellow-400 transition-colors">Catalogue</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:sales@krinternational" className="hover:text-yellow-400 transition-colors">sales@krinternational</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+91962516820" className="hover:text-yellow-400 transition-colors">+91962516820</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>PiyushCity Bhiwadi</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Industrial Control Repairs</li>
              <li>Replacement Parts</li>
              <li>System Maintenance</li>
              <li>Technical Support</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} KR Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

