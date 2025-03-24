export function Navbar() {
  const navLinks = [
    { name: 'WOMEN', path: '/women' },
    { name: 'MEN', path: '/men' },
    { name: 'ACCESSORIES', path: '/accessories' },
    { name: 'SHOES', path: '/shoes' },
    { name: 'STUDIO', path: '/studio' },
    { name: 'SALE', path: '/sale' },
  ];
  
  return (
    <nav>
      <ul className="flex space-x-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.path}
              className="text-lulu-black hover:text-lulu-red font-medium transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
