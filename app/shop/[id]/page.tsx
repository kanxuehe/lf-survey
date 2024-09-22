'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Address from '@/components/Address';
import Rate from '@/components/Rate';
import { getShopInfo, IShop } from '@/apis';
export default function Home() {
  const params = useParams();
  const [info, setInfo] = useState<Partial<IShop>>({});
  useEffect(() => {
    getInfo();
  }, []);
  async function getInfo() {
    const { code, data } = await getShopInfo({ shopId: params.id });
    if (code === 200) {
      setInfo(data || {});
    }
  }
  return (
    <div className="min-h-screen text-black pt-[0.4rem]">
      <section className="w-full px-[0.2rem] py-[0.1rem]">
        <Image
          src={info.imageUrlList?.[0]}
          alt=""
          width={353}
          height={342}
          className="w-full"
        />
      </section>
      <section className="w-full px-[0.24rem] py-[0.16rem] flex flex-col gap-y-[0.08rem]">
        <div className="text-[0.24rem] leading-[0.3rem]">{info.name}</div>
        <Rate value={info.rating} />
        <p className="text-[0.12rem] leading-[0.1452rem] pb-[0.08rem] border-b-[0.01rem] border-[#E3E2E280]">
          {info.introduce}
        </p>
        <Address color="black" address={info.address} />
      </section>
    </div>
  );
}
