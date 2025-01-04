export interface Part {
  id: number;
  partNumber: string;
  manufacturer: string;
  status: 'In Stock' | 'Available' | 'Processing' | 'Contact for Details';
}

export const inventoryData: Part[] = [
  

  // Siemens Inventory Data (restored data)
  { id: 1, partNumber: '1 MODULE', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 2, partNumber: '3RV2011-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 3, partNumber: '3RV2021-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 4, partNumber: '3RV2021-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 5, partNumber: '3RV2031-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 6, partNumber: '3RV2031-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 7, partNumber: '3RV2041-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 8, partNumber: '3RV2041-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 9, partNumber: '3RV2111-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 10, partNumber: '3RV2121-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 11, partNumber: '3RV2121-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 12, partNumber: '3RV2131-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 13, partNumber: '3RV2131-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 14, partNumber: '3RV2141-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 15, partNumber: '3RV2141-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 16, partNumber: '3RV2901-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 17, partNumber: '3RV2901-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 18, partNumber: '3RV2911-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 19, partNumber: '3RV2911-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 20, partNumber: '3RV2921-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 21, partNumber: '3RV2921-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 22, partNumber: '3RV2931-1BB40', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 23, partNumber: '3RV2931-1BB41', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 24, partNumber: '6AV3607-1JC00-0AX0', manufacturer: 'SIEMENS', status: 'In Stock' },
{ id: 25, partNumber: '6AV3607-1JC00-0AX2', manufacturer: 'SIEMENS', status: 'In Stock' },

];

export const manufacturers = [
  'SIEMENS',
  'ABB',
  'ALLEN-BRADLEY',
  'SCHNEIDER',
  'HONEYWELL',
  'EMERSON',
  'ROCKWELL',
  'GE',
];

export const manufacturerDescriptions: { [key: string]: string } = {
  SIEMENS: 'Siemens offers a wide range of industrial control products and solutions.',
  ABB: 'ABB provides advanced automation and control technologies for various industries.',
  'ALLEN-BRADLEY': 'Allen-Bradley, a Rockwell Automation brand, offers innovative industrial automation solutions.',
  SCHNEIDER: 'Schneider Electric delivers energy and automation digital solutions for efficiency and sustainability.',
  HONEYWELL: 'Honeywell provides industry-leading automation control and industrial safety solutions.',
  EMERSON: 'Emerson offers automation solutions that drive safety, reliability, and efficiency.',
  ROCKWELL: 'Rockwell Automation delivers industrial automation and information technology.',
  GE: 'GE provides a broad range of industrial control and automation products.',
};

