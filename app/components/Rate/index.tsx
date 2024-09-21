import Image from 'next/image';

function Rate({ value }: { value: number | undefined }) {
  return (
    <div className="h-[0.16rem] text-white text-[0.2rem] flex items-center gap-x-[0.025rem]">
      <Image src="/images/star-full.svg" alt="star" width={16} height={16} />
      <Image src="/images/star-full.svg" alt="star" width={16} height={16} />
      <Image src="/images/star-full.svg" alt="star" width={16} height={16} />
      <Image src="/images/star-full.svg" alt="star" width={16} height={16} />
      <Image src="/images/star-half.svg" alt="star" width={16} height={16} />
      <span className="ml-[0.03rem] text-[#FE4D00] text-[0.16rem]">
        {value}
      </span>
    </div>
  );
}
export default Rate;
