import CategoryPage from './CategoryPage';

const menProducts = [
  {
    id: 'm1',
    name: 'ABC Pant Classic 34"',
    price: 128,
    colors: ['Black', 'Navy', 'Gray', 'Green'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM5AQ9S_068684_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Pants'
  },
  {
    id: 'm2',
    name: 'Metal Vent Tech Short Sleeve Shirt 2.0',
    price: 78,
    colors: ['Gray', 'Black', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM3DK7S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Shirts'
  },
  {
    id: 'm3',
    name: 'City Sweat Pullover Hoodie',
    price: 118,
    colors: ['Black', 'Navy', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM3AUPS_036763_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Hoodies'
  },
  {
    id: 'm4',
    name: 'Pace Breaker Short 7"',
    price: 68,
    colors: ['Red', 'Black', 'Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM7B81S_069417_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Shorts'
  },
  {
    id: 'm5',
    name: 'Down For It All Jacket',
    price: 198,
    colors: ['Black', 'Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM4AMZS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Jackets'
  },
  {
    id: 'm6',
    name: 'Surge Warm Half Zip',
    price: 118,
    colors: ['Black', 'Navy', 'Green'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM4ASTS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Shirts'
  },
  {
    id: 'm7',
    name: 'Commission Pant Slim 34"',
    price: 128,
    colors: ['Green', 'Gray', 'Black'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM5BDGS_048432_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Pants'
  },
  {
    id: 'm8',
    name: 'T.H.E. Short 9" Liner',
    price: 68,
    colors: ['Blue', 'Black', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM7B86S_066915_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Shorts'
  }
];

const menFilters = ['Pants', 'Shorts', 'Shirts', 'Hoodies', 'Jackets'];

export default function Men() {
  return (
    <CategoryPage 
      title="Men's Collections"
      description="Engineered to technical perfection. Designed for high performance, comfort and durability."
      filters={menFilters}
      products={menProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/na_June24_wk4_M_MensRunBanner_D?$desktop$"
    />
  );
} 