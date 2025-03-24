import CategoryPage from './CategoryPage';

const accessoriesProducts = [
  {
    id: 'a1',
    name: 'Everywhere Belt Bag',
    price: 38,
    colors: ['Black', 'Pink', 'Blue', 'Green'],
    image: 'https://images.lululemon.com/is/image/lululemon/LU9BU5S_3385_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Bags'
    
  },
  {
    id: 'a2',
    name: 'Fast and Free Running Hat',
    price: 38,
    colors: ['Black', 'White', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LU9BFFS_0002_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Hats'
  },
  {
    id: 'a3',
    name: 'The Yoga Mat 5mm',
    price: 88,
    colors: ['Black', 'Blue', 'Pink'],
    image: 'https://images.lululemon.com/is/image/lululemon/LU9CISS_026458_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Yoga'
  },
  {
    id: 'a4',
    name: 'Set of 6 Hair Ties',
    price: 12,
    colors: ['Black', 'Multicolor'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW9DB6S_058275_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Hair Accessories'
  },
  {
    id: 'a5',
    name: 'License to Train Backpack 19L',
    price: 148,
    colors: ['Black', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LU9B15S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Bags'
  },
  {
    id: 'a6',
    name: 'The Hot/Cold Bottle 24oz',
    price: 44,
    colors: ['Silver', 'Black', 'White'],
    image: 'https://images.lululemon.com/is/image/lululemon/LU9BA8S_0002_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Water Bottles'
  },
  {
    id: 'a7',
    name: 'Crossbody Camera Bag',
    price: 78,
    colors: ['Black', 'Beige'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW9FN6S_066854_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Bags'
  },
  {
    id: 'a8',
    name: 'Double Roller Yoga Mat',
    price: 18,
    colors: ['Black'],
    image: 'https://images.lululemon.com/is/image/lululemon/LU9BTES_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Yoga'
  }
];

const accessoriesFilters = ['Bags', 'Hats', 'Yoga', 'Hair Accessories', 'Water Bottles'];

export default function Accessories() {
  return (
    <CategoryPage 
      title="Accessories"
      description="Complete your active look with our versatile accessories, designed for performance and style."
      filters={accessoriesFilters}
      products={accessoriesProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/gbl-wk35-10-23-W-Fall-Accessories-Collection-Page-Banner-Desk?$desktop$"
    />
  );
} 