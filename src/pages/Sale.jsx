import CategoryPage from './CategoryPage';

const saleProducts = [
  {
    id: 'sa1',
    name: 'Wunder Train High-Rise Tight 25"',
    price: 89,
    originalPrice: 118,
    colors: ['Black', 'Navy', 'Green', 'Red'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW5CR7S_068684_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 'sa2',
    name: 'Down For It All Jacket',
    price: 169,
    originalPrice: 228,
    colors: ['Black', 'Gray', 'Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW4CA7S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 'sa3',
    name: 'Metal Vent Tech Short Sleeve Shirt 2.0',
    price: 58,
    originalPrice: 78,
    colors: ['Gray', 'Black', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM3DK7S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 'sa4',
    name: 'ABC Pant Classic 32"',
    price: 99,
    originalPrice: 128,
    colors: ['Black', 'Navy', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM5426S_036763_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 'sa5',
    name: 'Energy Bra Medium Support',
    price: 39,
    originalPrice: 58,
    colors: ['Black', 'White', 'Pink'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW2EB9S_068605_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 'sa6',
    name: 'Pace Breaker Linerless Short 7"',
    price: 49,
    originalPrice: 68,
    colors: ['Black', 'Gray', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM7B81S_069417_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 'sa7',
    name: 'Scuba Oversized Full Zip',
    price: 89,
    originalPrice: 118,
    colors: ['Black', 'White', 'Pink'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW3HTLS_069806_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 'sa8',
    name: 'License to Train Short 7"',
    price: 69,
    originalPrice: 88,
    colors: ['Black', 'Navy', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM7BM7S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  }
];

const saleFilters = ['Women\'s', 'Men\'s', 'Accessories'];

export default function Sale() {
  return (
    <CategoryPage 
      title="We Made Too Much"
      description="Great gear at special prices. Because once it's gone, it's gone."
      filters={saleFilters}
      products={saleProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/gbl_Feb8_EVM_WMTM_NA_BN_D?$desktop$"
    />
  );
} 