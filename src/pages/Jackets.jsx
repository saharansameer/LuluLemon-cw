import CategoryPage from './CategoryPage';

const jacketsProducts = [
  {
    id: 'j1',
    name: 'Define Jacket Luon®',
    price: 118,
    colors: ['Black', 'White', 'True Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW4AWLS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 'j2',
    name: 'Down For It All Jacket',
    price: 198,
    colors: ['Black', 'Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM4AMZS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 'j3',
    name: 'Wunder Puff Jacket',
    price: 298,
    colors: ['Black', 'White', 'Everglade Green'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW4CACS_070613_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 'j4',
    name: 'Surge Warm Full Zip',
    price: 148,
    colors: ['Black', 'Navy', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM3CZOS_031382_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 'j5',
    name: 'Another Mile Jacket',
    price: 128,
    colors: ['Black', 'Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW4BT6S_068578_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 'j6',
    name: 'Down For It All Jacket',
    price: 169,
    originalPrice: 228,
    colors: ['Black', 'Gray', 'Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW4CA7S_031382_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Sale'
  },
  {
    id: 'j7',
    name: 'Scuba Oversized Full Zip',
    price: 89,
    originalPrice: 118,
    colors: ['Black', 'White', 'Pink'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW3HTLS_069806_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Sale'
  }
];

const jacketsFilters = ['Women\'s', 'Men\'s', 'Sale'];

export default function Jackets() {
  return (
    <CategoryPage 
      title="Jackets & Outerwear"
      description="Weather-ready outerwear designed for warmth, protection, and style in any conditions."
      filters={jacketsFilters}
      products={jacketsProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/gbl_01022023_OTM_NA_HP_D_SUBHERO_Jackets?$desktop$"
    />
  );
} 