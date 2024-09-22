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
      className={`text-${color} text-[0.12rem] leading-[0.2rem] flex gap-[0.1rem]`}
    >
      {color === 'white' ? (
        <Image
          src="/images/position-white.svg"
          alt="location"
          width={20}
          height={20}
          className="w-[0.2rem] h-[0.2rem]"
        />
      ) : (
        <Image
          src="/images/position.svg"
          alt="location"
          width={20}
          height={20}
          className="w-[0.2rem] h-[0.2rem]"
        />
      )}
      {address}
    </div>
  );
}
export default Address;
