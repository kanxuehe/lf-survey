import Image from 'next/image';
export const Logo = () => {
  return (
    <Image
      src="/static/images/logo.png"
      alt="Picture of the author"
      width={160}
      height={30}
    />
  );
};
