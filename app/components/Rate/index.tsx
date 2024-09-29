import Image from 'next/image';

function Rate({ value }: { value: number }) {
  let hasHalf = false;
  if (value % 1 !== 0) {
    hasHalf = true;
  }
  let rate = Math.floor(value);
  if (rate > 5) {
    rate = 5;
  }
  if (rate < 0) {
    rate = 0;
  }
  return (
    <div className="h-[0.16rem] text-white text-[0.2rem] flex items-center gap-x-[0.025rem]">
      {Array.from({ length: rate }).map((_, index) => (
        <Image
          src="/images/star-full.svg"
          alt="star"
          width={16}
          height={16}
          key={index}
        />
      ))}
      {hasHalf && (
        <Image src="/images/star-half.svg" alt="star" width={16} height={16} />
      )}
      <span className="ml-[0.03rem] text-[#FE4D00] text-[0.16rem]">
        {value}
      </span>
    </div>
  );
}
export default Rate;
