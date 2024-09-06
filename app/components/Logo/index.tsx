import Image from 'next/image';
const Logo = () => {
  return (
    <Image
      src="static/images/home/logo.png"
      alt="logo"
      width={180}
      height={48}
    />
  );
};
export default Logo;
