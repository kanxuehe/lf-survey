import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import { Logo } from '@app/components/Logo/Logo';

const Header = () => (
  <>
    <header className="w-full my-6 px-2 sm:px-8">
      <div className="flex h-header sm:items-center sm:gap-8">
        <h2 className="flex-1">
          <a
            href="/"
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6"
          >
            <Logo />
          </a>
        </h2>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
