import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Welcome to My App</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
