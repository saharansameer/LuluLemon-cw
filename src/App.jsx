import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Accessories from './pages/Accessories';
import Shoes from './pages/Shoes';
import Studio from './pages/Studio';
import Sale from './pages/Sale';
import Leggings from './pages/Leggings';
import Shorts from './pages/Shorts';
import Tops from './pages/Tops';
import Jackets from './pages/Jackets';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/leggings" element={<Leggings />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
