import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className="w-full h-[3.4rem] sm:h-[15.625vw] bg-[url('/static/images/contact/contact-bg2.png')] sm:bg-[url('/static/images/contact/contact-bg.png')] bg-cover" />
      <div className="sm:hidden flex items-center justify-center mt-[0.46rem] mb-[0.3rem]">
        <div className="w-[0.64rem] h-[2px] bg-[#2859B6]" />
        <div className="leading-[0.2rem] text-[0.2rem] font-normal text-[#333] mx-[0.3rem]">
          联系我们
        </div>
        <div className="w-[0.64rem] h-[2px] bg-[#2859B6]" />
      </div>
      <div className="content sm:py-10">
        <div className="flex flex-col sm:flex-row">
          <Image
            src="static/images/contact/position.png"
            alt=""
            width={120}
            height={120}
            className="hidden sm:block w-[120px] h-[120px]"
          />
          <div className="sm:ml-16 sm:mr-44">
            <p className="flex items-center text-[0.2rem] leading-[0.2rem] mb-[0.14rem] sm:my-5 sm:text-base">
              <Image
                src="static/images/contact/position.png"
                alt=""
                width={20}
                height={20}
                className="w-[0.2rem] h-[0.2rem] mr-[0.16rem] sm:hidden"
              />
              地址：浙江省杭州市滨江区浙农科创园1幢808室
            </p>
            <p className="flex items-center text-[0.2rem] leading-[0.2rem] mb-[0.34rem] sm:mb-0 sm:text-base">
              <Image
                src="static/images/contact/email.png"
                alt=""
                width={20}
                height={20}
                className="w-[0.2rem] h-[0.2rem] mr-[0.16rem] sm:hidden"
              />
              邮箱：LFSurvey@163.com
            </p>
          </div>
          <div className="flex gap-x-4 justify-around">
            <div>
              <Image
                src="static/images/home/QRcode1.png"
                alt=""
                width={150}
                height={150}
                className="w-[2rem] h-[2rem] mb-[0.14rem] sm:mb-0 sm:w-[150px] sm:h-[150px]"
              />
              <div className="text-center text-[0.2rem] leading-[0.2rem] sm:leading-[1rem] sm:text-base sm:mt-2">
                扫描添加客服
              </div>
            </div>
            <div>
              <Image
                src="static/images/home/QRcode1.png"
                alt=""
                width={150}
                height={150}
                className="w-[2rem] h-[2rem] mb-[0.14rem] sm:mb-0 sm:w-[150px] sm:h-[150px]"
              />
              <div className="text-center text-[0.2rem] leading-[0.25rem] sm:text-base sm:mt-2 sm:leading-5">
                关注公众号
                <br />
                了解更多资讯
              </div>
            </div>
          </div>
        </div>
        <Image
          src="static/images/contact/map.png"
          alt=""
          width={1200}
          height={42}
          className="w-full h-full mt-[0.38rem] sm:mt-10"
        />
      </div>
    </>
  );
}
