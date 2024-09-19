import Image from 'next/image';
import Address from '@/components/Address';
import Rate from '@/components/Rate';
export default function Home() {
  return (
    <div className="min-h-screen text-black pt-[0.4rem]">
      <section className="w-full px-[0.2rem] py-[0.1rem]">
        <Image
          src="images/logo3.jpg"
          alt=""
          width={353}
          height={342}
          className="w-full"
        />
      </section>
      <section className="w-full px-[0.24rem] py-[0.16rem] flex flex-col gap-y-[0.08rem]">
        <div className="text-[0.24rem] leading-[0.3rem]">小龙坎</div>
        <Rate />
        <p className="text-[0.12rem] leading-[0.1452rem] pb-[0.08rem] border-b-[0.01rem] border-[#E3E2E280]">
          重庆连锁火锅店，用牛油和新鲜的食材做的绝品火锅，味道香辣 价格便宜
        </p>
        <Address color="black" />
      </section>
    </div>
  );
}
