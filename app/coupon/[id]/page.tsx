'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Address from '@/components/Address';
import Rate from '@/components/Rate';
import { getCouponInfo, ICoupon } from '@/apis';
import { useParams } from 'next/navigation';

export default function Detail() {
  const params = useParams();
  const [info, setInfo] = useState<Partial<ICoupon>>({});

  useEffect(() => {
    getInfo();
  }, []);
  async function getInfo() {
    const { code, data } = await getCouponInfo({ couponId: params.id });
    if (code === 200) {
      setInfo(data || {});
    }
  }
  return (
    <div className="relative min-h-screen bg-[#A43824] text-white">
      <Image
        src="/images/bg1.jpg"
        alt=""
        width={393}
        height={242}
        className="w-full"
      />
      <div className="absolute top-[2.11rem] w-full h-[1.3rem] rounded bg-[#A43824] p-[0.2rem] flex flex-col items-end gap-y-[0.08rem]">
        <Image
          src="/images/logo2.svg"
          alt=""
          width={92}
          height={92}
          className="absolute left-[0.2rem] -top-[0.46rem]"
        />
        <Rate />
        <Address color="white" address={info.address} />
        <p className="text-[0.12rem] leading-[0.1452rem] pt-[0.08rem] border-t-[0.01rem] border-[#E3E2E280]">
          重庆连锁火锅店，用牛油和新鲜的食材做的绝品火锅，味道香辣 价格便宜
        </p>
      </div>
      <div className="w-full px-[0.2rem] mt-[1.09rem] pb-[0.9rem]">
        <div className="w-full bg-white rounded overflow-hidden p-[0.14rem] pb-[0.45rem]">
          <Image
            src="/images/food.jpg"
            alt=""
            width={393}
            height={242}
            className="w-full"
          />
          <div className="h-[0.18rem] flex items-center justify-between px-[0.18rem] mt-[0.08rem]">
            <span className="text-[0.14rem] text-black">{info.couponName}</span>
            <span className="text-[0.14rem] text-[#FE4D00]">
              ¥{info.couponPrice}
            </span>
          </div>
          <div className="h-[0.12rem] flex items-center justify-between px-[0.18rem] mt-[0.08rem]">
            <span className="text-[0.1rem] text-[#999]">每人限购1份</span>
            <span className="text-[0.1rem] text-[#999] line-through">
              ¥{info.oriPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
