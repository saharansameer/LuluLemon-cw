import CategoryPage from './CategoryPage';

const shoesProducts = [
  {
    id: 's1',
    name: 'Blissfeel Women\'s Running Shoe',
    price: 148,
    colors: ['Black', 'White', 'Pink', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW9FGDS_068090_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Running'
  },
  {
    id: 's2',
    name: 'Chargefeel Mid Women\'s Workout Shoe',
    price: 148,
    colors: ['Black', 'White', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW9EQ1S_062982_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Training'
  },
  {
    id: 's3',
    name: 'Strongfeel Women\'s Training Shoe',
    price: 128,
    colors: ['Black', 'White', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW9EMKS_065098_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Training'
  },
  {
    id: 's4',
    name: 'Restfeel Women\'s Slide',
    price: 58,
    colors: ['Black', 'White', 'Pink'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW9EF2S_070049_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Recovery'
  },
  {
    id: 's5',
    name: 'Cityverse Men\'s Shoe',
    price: 148,
    colors: ['Black', 'White', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM9AV8S_069070_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Casual'
  },
  {
    id: 's6',
    name: 'Blissfeel 2 Women\'s Running Shoe',
    price: 158,
    colors: ['Black', 'White', 'Green', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW9EPYS_061706_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Running'
  },
  {
    id: 's7',
    name: 'Chargefeel Low Women\'s Workout Shoe',
    price: 138,
    colors: ['Black', 'White', 'Yellow', 'Purple'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW9EQ0S_055203_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Training'
  },
  {
    id: 's8',
    name: 'Chargefeel Mid Men\'s Workout Shoe',
    price: 148,
    colors: ['Black', 'Gray', 'Green'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM9AVDS_067062_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Training'
  }
];

const shoesFilters = ['Running', 'Training', 'Recovery', 'Casual'];

export default function Shoes() {
  return (
    <CategoryPage 
      title="Shoes"
      description="Engineered for performance and comfort, our footwear collection is designed to support your active lifestyle."
      filters={shoesFilters}
      products={shoesProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/na_May15_wk5_W_Footwear_Strongfeel_Collection-Page-Banner-Desk?$desktop$"
    />
  );
} 