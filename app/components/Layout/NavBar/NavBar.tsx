'use client';
import { NavLink } from './NavLink';
import { useCallback, useState } from 'react';
import type { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export const navbarItems = [
  { href: '/', label: '首页' },
  { href: '/products', label: '产品' },
  { href: '/contact', label: '联系我们' },
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
      isActive ? 'text-[#2859B6]' : 'hover:text-[#2859B6]'
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
      <nav
        className={`${
          isMenuShown
            ? 'max-md:w-full max-md:opacity-100'
            : 'max-md:w-0 max-md:opacity-0'
        } h-full  transition-all duration-500 ease-in-out  overflow-hidden max-md:absolute max-md:animate-sideways-once max-md:h-screen max-md:bg-white max-md:pt-24 z-40 top-0 right-0`}
      >
        <ul className="h-full flex flex-col items-center md:flex-row gap-10 min-[900px]:gap-5 justify-end text-sm md:text-[16px] leading-[22px] font-medium">
          {navbarItems.map(({ href, label }) => (
            <li
              key={href}
              className={`relative flex items-center h-full px-8 ${
                href === linkRef ? 'border-b-2 border-[#2859B6]' : ''
              }`}
            >
              <StyledNavLink
                isActive={href === linkRef}
                href={href}
                onClick={() => {
                  setLinkRef(href);
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
