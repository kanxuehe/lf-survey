import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import Logo from '@app/components/Logo';
import Link from 'next/link';
const Header = () => (
  <>
    <header className="hidden sm:flex items-center justify-between content h-[88px]">
      <h1>
        <Link href="/">
          <Logo />
        </Link>
      </h1>
      <NavBar />
    </header>
    <header className="sm:hidden h-[0.8rem] flex items-center justify-center">
      <h1 className="text-center text-[#333] font-bold text-[0.3rem]">
        洛锋科技-LFSurvey
      </h1>
    </header>
  </>
);

export default Header;
