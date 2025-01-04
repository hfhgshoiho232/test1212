import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { manufacturers } from '@/lib/inventory-data'

export default function InventoryPage() {
  return (
    <div>
      <div className="relative h-[300px] bg-gray-900">
        <Image
          src="/placeholder.svg"
          alt="Control Systems"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Multi-Brand Control Inventory</h1>
          <nav className="text-sm breadcrumbs">
            <ol className="flex items-center space-x-2">
              <li><Link href="/">Home</Link></li>
              <li className="before:content-['>'] before:mx-2">Inventory</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-2">Inventory</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-6">EXPLORE BY MANUFACTURERS :</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {manufacturers.map((manufacturer) => (
              <Link 
                key={manufacturer}
                href={`/inventory/${manufacturer.toLowerCase()}`}
                className="block"
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-[3/2] relative mb-4">
                      <Image
                        src="/placeholder.svg"
                        alt={manufacturer}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-center font-semibold text-blue-600">
                      {manufacturer}
                    </h4>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

