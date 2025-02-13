'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ#']

const brands = {
  'A': [
    'AACO HEATING AND ELECTRIC MOTORS',
    'ABP-ANTRIEBSTECHNIK',
    'ACS CONTROL SYSTEM',
    'AE ADVANCED ENERGY',
    'AESSEAL',
    'AHP MERKLE',
    'AIRPOL',
    'ALCO CONTROLS (BRAND OF EMERSON)',
    'AB TRASMISSIONI ( FORMER AB BALBONI )',
    'AC-MOTOREN',
    'ADAMS LUBETECH',
    'AECO',
    'AFAG',
    'AIR TEK',
    'AKO REGELUNGSTECHNIK',
    'ALFA LAVAL',
    'ABISOFIX',
    'ACE / ACE CONTROLS',
    'ADVANCED MOTION CONTROLS',
    'AERZEN',
    'AFS AIRFILTER SYSTEME',
    'AIRON PNEUMATIC',
    'AL-KO',
    'ALFATEC FÖRDERSYSTEME',
    'APEX',
    'AQUAFLEX',
    'ASA HYDRAULIK',
    'ATP HYDRAULICS S.R.L',
    'AUTOMATION SERVICE',
    'AVENTICS',
    'AXEL LARSSON',
    'AXELENT',
    'AXFLOW'
  ],
  'B': [
    'B&R ELECTRONICS',
    'BADESTNOST',
    'BALLUFF',
    'BAUMER',
    'BECKER',
    'BECKHOFF PROZESSTECHNIK',
    'BEDIA',
    'BELL BELLOW',
    'BELLOWS OF AMERICA',
    'BENDER BELGIUM',
    'BLOCK TRANSFORMATOREN',
    'BLOHM + VOSS',
    'BONFIGLIOLI',
    'BORUSAN',
    'BOSCH (BRAND OF BOSCH REXROTH)',
    'BRINKMANN PUMPEN',
    'BURKERT CHRISTIAN (BRAND OF BÜRKERT)',
    'BURCKHARDT',
    'BRÜEL',
    'BAUSER',
    'BEI SENSORS',
    'BKE',
    'BRINKMANN PUMPEN',
    'BAUER',
    'BECKER ANTRIEBSTECHNIK',
    'BERTHOUD TECHNOLOGIES',
    'BETA UTENSILI',
    'BLAIN',
    'BLOHM',
    'BOSCH (BRAND OF BOSCH GROUP)',
    'BOSSARD',
    'BRÜDER',
    'BURKERT STEUERGERATE',
    'BUSCH'
  ],
  'C': [
    'CAB-CONTROL',
    'CAMOZZI (BRAND OF CAMOZZI)',
    'CAE ELEKTRONIK',
    'CAREL',
    'CEJN',
    'COILTECH',
    'COGNEX',
    'COEL MOTORI',
    'COMOSO',
    'COMPAIR (BRAND OF)',
    'COMPOOL',
    'CONTITECH',
    'COMER',
    'CROUZET (BRAND OF CUSTOM SENSORS)',
    'CAMOZZI CORPORATION',
    'CASA (BRAND OF ARTOS)',
    'CEJN INSTRUMENT',
    'CLOOS',
    'COMAT',
    'COSEL-PA',
    'COLORTRONIC',
    'COMMONWEALTH',
    'CONTRINEX',
    'COREMO OCMEA',
    'CRESSTO',
    'CROUZET'
  ],
  'D': [
    'DATASENSOR',
    'DAYTON ELECTRIC',
    'DKC',
    'DEUBLIN',
    'DESERT AIRE (BRAND OF)',
    'DESERT AIRE PREMIER',
    'DEUTSCH',
    'DICTAPHONE',
    'DIGIMATIC',
    'DIGITRONIC',
    'DENSO',
    'DOLD',
    'DPT DRIVES',
    'DUPLOMATIC AUTOMATION',
    'DYNAPAR',
    'DATASENSOR',
    'DANFOSS IND',
    'DELTA',
    'DEUBLIN (BRAND OF DEUBLIN)',
    'DESERT',
    'DEUTRONIC',
    'DISA',
    'DIGITALIA',
    'DESIREE ELECTRONIC',
    'DOLDHAM',
    'DRIVE SYSTEMS',
    'DUNGS',
    'DYNISCO',
    'DIGITAL',
    'DESTACO',
    'EATON',
    'EDWARDS',
    'EFECTOR',
    'ELECTRONIC POWER',
    'EMCO',
    'EMKA',
    'SETTIMA',
    'SIEMENS',
    'ELK',
    'ELECTRONIC ASSISTANCE'
  ]
}

export default function CataloguePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLetter, setSelectedLetter] = useState('A')

  const filteredBrands = searchTerm
    ? Object.values(brands).flat().filter(brand => 
        brand.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : brands[selectedLetter] || []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li className="text-gray-400 select-none">&gt;</li>
            <li className="text-gray-900">Brands</li>
          </ol>
        </nav>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="search"
            placeholder="Search brand ..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Alphabet Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {alphabet.map((letter) => (
            <Button
              key={letter}
              variant={selectedLetter === letter ? "default" : "outline"}
              className="w-10 h-10 p-0"
              onClick={() => {
                setSelectedLetter(letter)
                setSearchTerm('')
              }}
            >
              {letter}
            </Button>
          ))}
        </div>

        {/* Brands Grid */}
        {searchTerm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {filteredBrands.map((brand, index) => (
              <Link
                key={index}
                href={`/catalogue/${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                {brand}
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {selectedLetter && brands[selectedLetter] && (
              <div>
                <h2 className="text-4xl font-bold text-orange-500 mb-6">{selectedLetter}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {brands[selectedLetter].map((brand, index) => (
                    <Link
                      key={index}
                      href={`/catalogue/${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

