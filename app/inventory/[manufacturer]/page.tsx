'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import InventoryTable from '@/components/inventory-table'
import { manufacturers, manufacturerDescriptions } from '@/lib/inventory-data'

interface ManufacturerInfo {
  products: string[];
  services: string[];
  features: string[];
}

const manufacturerInfo: Record<string, ManufacturerInfo> = {
  SIEMENS: {
    products: [
      'Simatic S5 Systems',
      'PCS 7 Components',
      'TXP (T2000 and SP99-T3000) Teleperm',
      'FUM Controllers',
      'Simadyn D Systems',
      'Sinamics Drives'
    ],
    services: [
      'System Repairs',
      'Component Testing',
      'Warranty Support',
      'Asset Recovery',
      'Technical Consultation',
      'Upgrade Assistance'
    ],
    features: [
      'Full warranty on all parts',
      'Unused and remanufactured options',
      'Cash offers for unwanted systems',
      'Expert technical support',
      'Fast turnaround times',
      'Global shipping available'
    ]
  },
  // Add more manufacturers here...
}

export default function ManufacturerPage({ params }: { params: { manufacturer: string } }) {
  const [searchTerm, setSearchTerm] = useState('')
  const manufacturer = manufacturers.find(m => m.toLowerCase() === params.manufacturer.toLowerCase())

  if (!manufacturer) {
    notFound()
  }

  const info = manufacturerInfo[manufacturer] || manufacturerInfo.SIEMENS

  const handleReset = () => {
    setSearchTerm('')
  }

  return (
    <div>
      <div className="relative h-[300px] bg-gray-900">
        <Image
          src="/placeholder.svg"
          alt={manufacturer}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white container mx-auto px-4">
          <nav className="text-sm breadcrumbs mb-4">
            <ol className="flex items-center space-x-2">
              <li><Link href="/">Home</Link></li>
              <li className="before:content-['>'] before:mx-2">
                <Link href="/inventory">Inventory</Link>
              </li>
              <li className="before:content-['>'] before:mx-2">{manufacturer}</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold">MANUFACTURER : {manufacturer}</h1>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="info">More Info</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              {manufacturerDescriptions[manufacturer]}
            </p>

            <div className="grid gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Select defaultValue={manufacturer.toLowerCase()}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select manufacturer" />
                  </SelectTrigger>
                  <SelectContent>
                    {manufacturers.map((m) => (
                      <SelectItem key={m} value={m.toLowerCase()}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input 
                  type="search" 
                  placeholder="Search By Part or Model Number" 
                  className="flex-1"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="secondary" onClick={handleReset}>
                  Reset
                </Button>
                <Button>
                  Search Inventory
                </Button>
              </div>

              <InventoryTable manufacturer={manufacturer} searchTerm={searchTerm} />
            </div>
          </TabsContent>

          <TabsContent value="info">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Products</h3>
                <ul className="space-y-2">
                  {info.products.map((product, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  {info.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-2">
                  {info.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild>
                <Link href="/request-quote">Request a Quote</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

