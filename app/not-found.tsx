import Image from 'next/image';
export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-88px)]">
      <Image
        src="static/images/home/404.png"
        alt="404"
        width={500}
        height={500}
        className="w-full h-auto"
      />
    </div>
  );
}
