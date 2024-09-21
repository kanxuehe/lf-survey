import Image from 'next/image';
function Address({
  color = 'white',
  address,
}: {
  color: string;
  address: string | undefined;
}) {
  return (
    <div
      className={`text-${color} text-[0.12rem] h-[0.2rem] flex items-center gap-[0.1rem]`}
    >
      {color === 'white' ? (
        <Image
          src="/images/position-white.svg"
          alt="location"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src="/images/position.svg"
          alt="location"
          width={20}
          height={20}
        />
      )}
      {address}
      {/* 台東区上野7-3-2　TSDビル4階 */}
    </div>
  );
}
export default Address;
