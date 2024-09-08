'use client';
import Image from 'next/image';
import { useState } from 'react';

const CustomerService = () => {
  const [isShow, SetIsShow] = useState<boolean>(false);
  const handleClick = () => {
    console.log(112);
  };
  return (
    <div
      className=" sm:hidden w-[0.88rem] h-[0.88rem] rounded-s-[0.04rem] flex flex-col gap-y-[6px] items-center justify-center bg-white fixed top-[4.7rem] right-[4px] z-10 cursor-pointer
      shadow-sm
      shadow-[rgba(1,12,26,0.3)]
      "
      onClick={() => SetIsShow(!isShow)}
    >
      <Image
        src="static/images/home/customer-service.png"
        alt="customer-service"
        width={40}
        height={40}
        className="w-[0.4rem] h-[0.4rem]"
      />
      <span className="text-[0.16rem] leading-[0.16rem]">联系客服</span>

      {isShow && (
        <Image
          src="static/images/home/contact-QRcode.png"
          alt="customer-service"
          width={150}
          height={300}
          className="absolute -left-[0.96rem] top-0 w-[1.5rem] h-auto"
        />
      )}
    </div>
  );
};
export default CustomerService;
