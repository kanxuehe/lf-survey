'use client';
import Image from 'next/image';
import { useState } from 'react';

const CustomerService = () => {
  const [isShow, SetIsShow] = useState<boolean>(false);
  return (
    <>
      <div
        className="w-[1.2rem] h-[1.2rem] rounded-[0.04rem] flex flex-col gap-y-[6px] items-center justify-center bg-white fixed top-[4.7rem] right-[4px] z-10 cursor-pointer
      shadow-sm shadow-[rgba(1,12,26,0.3)] sm:w-[88px] sm:h-[88px] sm:top-[298px] sm:right-[8px] sm:rounded-[4px]
      "
        onClick={() => SetIsShow(!isShow)}
      >
        <Image
          src="static/images/home/customer-service.svg"
          alt="customer-service"
          width={54}
          height={56}
          className="sm:hidden w-[0.54rem] h-[0.56rem] sm:w-10 sm:h-10"
        />
        <Image
          src="static/images/home/customer-service.png"
          alt="customer-service"
          width={54}
          height={56}
          className="hidden sm:block w-[0.54rem] h-[0.56rem] sm:w-10 sm:h-10"
        />
        <span className="text-[0.22rem] sm:text-[#333] leading-[0.3rem] sm:text-base sm:leading-[16px]">
          联系客服
        </span>
      </div>
      {isShow && (
        <div
          className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-40"
          onClick={() => SetIsShow(false)}
        >
          <div
            className="relative w-[4.32rem] bg-white rounded p-[0.3rem] sm:p-8 sm:w-auto sm:flex sm:gap-x-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="static/images/home/close.svg"
              alt="close"
              width={40}
              height={40}
              className="hidden sm:block absolute top-0 -right-[50px] w-[40px] h-[40px] cursor-pointer"
              onClick={() => SetIsShow(false)}
            />
            <div>
              <Image
                src="static/images/home/QRcode1.png"
                alt="QRcode1"
                width={368}
                height={368}
                className="w-full h-auto sm:w-[380px] sm:h-[380px]"
              />
              <p className="text-[0.24rem] text-center text-[#333] whitespace-nowrap sm:text-2xl">
                扫码添加客服
              </p>
            </div>
            <div>
              <Image
                src="static/images/home/QRcode2.png"
                alt="QRcode2"
                width={368}
                height={368}
                className="w-full h-auto sm:w-[380px] sm:h-[380px]"
              />
              <p className="text-[0.24rem] text-center text-[#333] whitespace-nowrap sm:text-2xl ">
                关注公众号了解更多资讯
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CustomerService;
