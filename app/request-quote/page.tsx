import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function RequestQuotePage() {
  return (
    <div>
      <div className="relative h-[300px] bg-gray-900">
        <Image
          src="/placeholder.svg"
          alt="Request a Quote"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white container mx-auto px-4">
          <nav className="text-sm breadcrumbs mb-4">
            <ol className="flex items-center space-x-2">
              <li><Link href="/">Home</Link></li>
              <li className="before:content-['>'] before:mx-2">Request a Quote</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold">Request a Quote</h1>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <Input id="phone" name="phone" type="tel" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <Input id="company" name="company" />
              </div>

              <div>
                <label htmlFor="partNumber" className="block text-sm font-medium text-gray-700 mb-1">Part Number</label>
                <Input id="partNumber" name="partNumber" required />
              </div>

              <div>
                <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700 mb-1">Manufacturer</label>
                <Select name="manufacturer">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a manufacturer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abb">ABB</SelectItem>
                    <SelectItem value="allen-bradley">Allen-Bradley</SelectItem>
                    <SelectItem value="siemens">Siemens</SelectItem>
                    <SelectItem value="ge">GE</SelectItem>
                    <SelectItem value="honeywell">Honeywell</SelectItem>
                    <SelectItem value="schneider">Schneider Electric</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" name="message" rows={4} />
              </div>

              <Button type="submit" className="w-full">Submit Quote Request</Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+91962516820</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>sales@krinternational</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>PiyushCity Bhiwadi</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

