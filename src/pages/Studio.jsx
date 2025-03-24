import CategoryPage from './CategoryPage';

const studioProducts = [
  {
    id: 'st1',
    name: 'Align™ High-Rise Pant 25"',
    price: 98,
    colors: ['Black', 'Navy', 'Green', 'Pink'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW5DVHS_069953_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Yoga'
  },
  {
    id: 'st2',
    name: 'Align™ Tank Top',
    price: 58,
    colors: ['Black', 'White', 'Pink', 'Blue'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW1DSPS_069005_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Tops'
  },
  {
    id: 'st3',
    name: 'Nulu and Mesh Yoga Bra Light Support',
    price: 68,
    colors: ['Black', 'Pink', 'Green'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW2DXHS_069013_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Bras'
  },
  {
    id: 'st4',
    name: 'The Yoga Mat 5mm',
    price: 88,
    colors: ['Black', 'Blue', 'Pink'],
    image: 'https://images.lululemon.com/is/image/lululemon/LU9CISS_026458_3?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Equipment'
  },
  {
    id: 'st5',
    name: 'Align™ High-Rise Short 6"',
    price: 68,
    colors: ['Black', 'Navy', 'Pink'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW7BG3S_069122_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Shorts'
  },
  {
    id: 'st6',
    name: 'Groove Super-High-Rise Flared Pant',
    price: 118,
    colors: ['Black', 'Navy', 'Gray'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW5FG2S_031382_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Yoga'
  },
  {
    id: 'st7',
    name: 'Manduka Yoga Block',
    price: 20,
    colors: ['Black', 'Cork'],
    image: 'https://images.lululemon.com/is/image/lululemon/LU9AC4S_069222_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Equipment'
  },
  {
    id: 'st8',
    name: 'Align™ Long Sleeve Shirt',
    price: 78,
    colors: ['Black', 'White', 'Navy'],
    image: 'https://images.lululemon.com/is/image/lululemon/LW3HF6S_069888_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'Tops'
  }
];

const studioFilters = ['Yoga', 'Tops', 'Bras', 'Shorts', 'Equipment'];

export default function Studio() {
  return (
    <CategoryPage 
      title="Studio Collection"
      description="Movement-focused apparel and accessories designed for yoga, pilates, and barre."
      filters={studioFilters}
      products={studioProducts}
      bannerImage="https://images.lululemon.com/is/image/lululemon/gbl_March_2022_wk4_W_Motherhood_Align_Collection-Banner_Desktop?$desktop$"
    />
  );
} 