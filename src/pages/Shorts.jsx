import CategoryPage from './CategoryPage';

const shortsProducts = [
  {
    id: 's1',
    name: 'Align™ High-Rise Short 6"',
    price: 64,
    colors: ['Black', 'True Navy', 'Graphite Grey'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW7BG3S_069122_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 's2',
    name: 'Pace Breaker Short 7"',
    price: 68,
    colors: ['Red', 'Black', 'Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM7B81S_069417_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 's3',
    name: 'T.H.E. Short 9" Liner',
    price: 68,
    colors: ['Blue', 'Black', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM7B86S_066915_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Men\'s'
  },
  {
    id: 's4',
    name: 'Hotty Hot Low-Rise Short 4"',
    price: 58,
    colors: ['Black', 'White', 'Pink'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW7ARLT_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 's5',
    name: 'Fast and Free Short 6"',
    price: 74,
    colors: ['Black', 'Navy', 'Green'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW7CPPS_031382_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Women\'s'
  },
  {
    id: 's6',
    name: 'Pace Breaker Linerless Short 7"',
    price: 49,
    originalPrice: 68,
    colors: ['Black', 'Gray', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM7BM1S_038990_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Sale'
  },
  {
    id: 's7',
    name: 'License to Train Short 7"',
    price: 69,
    originalPrice: 88,
    colors: ['Black', 'Navy', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LM7BM5S_068839_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Sale'
  }
];

const shortsFilters = ['Women\'s', 'Men\'s', 'Sale'];

export default function Shorts() {
  return (
    <CategoryPage 
      title="Shorts Collection"
      description="Performance shorts designed for comfort, movement, and versatility for any activity."
      filters={shortsFilters}
      products={shortsProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/gbl_Aug22_TrainingMono_M_RunAndTrain_BIPOCGuyinShorts_D?$desktop$"
    />
  );
} 