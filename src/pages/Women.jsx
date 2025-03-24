import CategoryPage from './CategoryPage';

const womenProducts = [
  {
    id: 'w1',
    name: 'Align™ High-Rise Pant 25"',
    price: 98,
    colors: ['Black', 'Navy', 'Dark Olive', 'Mulled Wine'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW5DVHS_069953_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Pants'
  },
  {
    id: 'w2',
    name: 'Scuba Oversized Half-Zip Hoodie',
    price: 118,
    colors: ['Heathered Core Ultra Light Grey', 'Black', 'White', 'True Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW3HTOS_069032_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Sweaters'
  },
  {
    id: 'w3',
    name: 'Define Jacket Luon®',
    price: 118,
    colors: ['Black', 'White', 'True Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW4AWLS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Jackets'
  },
  {
    id: 'w4',
    name: 'Wunder Train High-Rise Tight 25"',
    price: 98,
    colors: ['Black', 'True Navy', 'Dark Olive'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW5CR7S_068684_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Pants'
  },
  {
    id: 'w5',
    name: 'Energy Bra Medium Support',
    price: 52,
    colors: ['Black', 'White', 'Pink Peony'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW2EB9S_069098_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Bras'
  },
  {
    id: 'w6',
    name: 'Align™ Tank Top',
    price: 58,
    colors: ['Black', 'White', 'Pink Blossom'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW1DSPS_069005_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Tops'
  },
  {
    id: 'w7',
    name: 'Align™ High-Rise Short 6"',
    price: 64,
    colors: ['Black', 'True Navy', 'Graphite Grey'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW7BG3S_069122_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Shorts'
  },
  {
    id: 'w8',
    name: 'Swiftly Tech Long Sleeve Shirt 2.0',
    price: 78,
    colors: ['Black', 'White', 'Race Pace Slate'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW3EYHS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Tops'
  }
];

const womenFilters = ['Pants', 'Shorts', 'Tops', 'Sweaters', 'Jackets', 'Bras'];

export default function Women() {
  return (
    <CategoryPage 
      title="Women's Collection"
      description="Technical athletic apparel designed for women who refuse compromise, featuring our innovative fabrics and technologies."
      filters={womenFilters}
      products={womenProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/gbl_LP_PCnav_apr22_W_Dresses?$desktop$"
    />
  );
} 