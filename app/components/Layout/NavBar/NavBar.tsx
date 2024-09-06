'use client';
import { NavLink } from './NavLink';
import { useCallback, useState } from 'react';
import type { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

const navbarItems = [
  { ref: '/', label: '首页' },
  { ref: '/products', label: '产品' },
  { ref: '/contact', label: '联系我们' },
];

const StyledNavLink = ({
  isActive,
  className,
  ...linkProps
}: LinkProps & {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <NavLink
    className={`${className ?? ''} ${
      isActive ? 'text-purple-site' : 'hover:text-purple-site'
    }`}
    {...linkProps}
  />
);

export function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathname = usePathname();
  const [linkRef, setLinkRef] = useState<LinkProps['href']>(pathname!);
  const toggleOpen = useCallback(
    () => setIsMenuShown(!isMenuShown),
    [isMenuShown]
  );
  return (
    <>
      {/* <button
        className="block md:hidden float-right relative z-50"
        onClick={toggleOpen}
      >
        <div className="space-y-1 absolute top-0 right-0 bg-purple-site p-2">
          {(isMenuShown
            ? [
                'rotate-45 translate-y-[6.5px]',
                'opacity-0 h-0',
                '-rotate-45 translate-y-[-6.5px]',
              ]
            : ['', '', '']
          ).map((className, index) => (
            <span
              key={index}
              className={
                'block h-[2px] w-4 bg-white transform transition duration-500 ease-in-out ' +
                className
              }
            ></span>
          ))}
        </div>
      </button> */}
      <nav
        className={`${
          isMenuShown
            ? 'max-md:w-full max-md:opacity-100'
            : 'max-md:w-0 max-md:opacity-0'
        } transition-all duration-500 ease-in-out md:block overflow-hidden max-md:absolute max-md:animate-sideways-once max-md:h-screen max-md:bg-white max-md:pt-24 z-40 top-0 right-0`}
      >
        <ul className="flex flex-col items-center md:flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-12 justify-end text-sm md:text-[15px] leading-[22px]">
          {navbarItems.map(({ ref, label }) => (
            <li key={ref} className="relative">
              <StyledNavLink
                isActive={ref === linkRef}
                href={ref}
                onClick={() => {
                  setLinkRef(ref);
                  setIsMenuShown(false);
                }}
              >
                {label}
              </StyledNavLink>
              <span className="absolute -bottom-5 md:hidden border-b-2 w-64 left-[calc(50%_-_theme(space.32))]" />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
