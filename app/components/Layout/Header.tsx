import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import Logo from '@app/components/Logo';
import Link from 'next/link';
const Header = () => (
  <header className="mx-auto flex items-center justify-between sm:w-[1200px] sm:h-[88px]">
    <h1 className="flex-1">
      <Link href="/">
        <Logo />
      </Link>
    </h1>
    <NavBar />
  </header>
);

export default Header;
