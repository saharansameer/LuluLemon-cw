import CategoryPage from './CategoryPage';

const leggingsProducts = [
  {
    id: 'l1',
    name: 'Align™ High-Rise Pant 25"',
    price: 98,
    colors: ['Black', 'Navy', 'Dark Olive', 'Mulled Wine'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW5DVHS_069953_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Yoga'
  },
  {
    id: 'l2',
    name: 'Wunder Train High-Rise Tight 25"',
    price: 98,
    colors: ['Black', 'True Navy', 'Dark Olive'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW5CR7S_068684_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Train'
  },
  {
    id: 'l3',
    name: 'Groove Super-High-Rise Flared Pant',
    price: 118,
    colors: ['Black', 'Navy', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW5FG2S_031382_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Yoga'
  },
  {
    id: 'l4',
    name: 'ABC Pant Classic 34"',
    price: 128,
    colors: ['Black', 'Navy', 'Gray', 'Green'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM5AQ9S_068684_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 'l5',
    name: 'Commission Pant Slim 34"',
    price: 128,
    colors: ['Green', 'Gray', 'Black'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM5BDGS_048432_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 'l6',
    name: 'Wunder Under High-Rise Tight 28"',
    price: 89,
    originalPrice: 118,
    colors: ['Black', 'Navy', 'Green', 'Red'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW5FUAS_026865_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Sale'
  }
];

const leggingsFilters = ['Yoga', 'Train', 'Men\'s', 'Sale'];

export default function Leggings() {
  return (
    <CategoryPage 
      title="Leggings & Pants"
      description="Shop our iconic leggings and pants with innovative fabrics designed for comfort and performance."
      filters={leggingsFilters}
      products={leggingsProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/gbl_Apr23_wk1_W_PDP_Launch-Groove_SHR_Flared_Pant_D?$desktop$"
    />
  );
} 