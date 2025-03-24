import CategoryPage from './CategoryPage';

const topsProducts = [
  {
    id: 't1',
    name: 'Align™ Tank Top',
    price: 58,
    colors: ['Black', 'White', 'Pink Blossom'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW1DSPS_069005_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 't2',
    name: 'Swiftly Tech Long Sleeve Shirt 2.0',
    price: 78,
    colors: ['Black', 'White', 'Race Pace Slate'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW3EYHS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 't3',
    name: 'Metal Vent Tech Short Sleeve Shirt 2.0',
    price: 78,
    colors: ['Gray', 'Black', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM3DK7S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 't4',
    name: 'Surge Warm Half Zip',
    price: 118,
    colors: ['Black', 'Navy', 'Green'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM4ASTS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 't5',
    name: 'Align™ Long Sleeve Shirt',
    price: 78,
    colors: ['Black', 'White', 'Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW3HF6S_069888_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 't6',
    name: 'Scuba Oversized Half-Zip Hoodie',
    price: 118,
    colors: ['Heathered Core Ultra Light Grey', 'Black', 'White', 'True Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW3HTOS_069032_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 't7',
    name: 'City Sweat Pullover Hoodie',
    price: 118,
    colors: ['Black', 'Navy', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM3AUPS_036763_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 't8',
    name: 'Metal Vent Tech Short Sleeve Shirt 2.0',
    price: 58,
    originalPrice: 78,
    colors: ['Gray', 'Black', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW3IIYS_068578_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Sale'
  }
];

const topsFilters = ['Women\'s', 'Men\'s', 'Sale'];

export default function Tops() {
  return (
    <CategoryPage 
      title="Tops Collection"
      description="Performance tops designed for comfort and style during any activity."
      filters={topsFilters}
      products={topsProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/gbl_April23_W_Run_Speed_Up_Training_D?$desktop$"
    />
  );
} 