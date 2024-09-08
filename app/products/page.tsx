import Image from 'next/image';
export default function Projects() {
  return (
    <>
      <div className="w-full h-[3.4rem] sm:h-[23.4375vw] bg-[url('/static/images/product/product-bg1.png')] bg-cover bg-center"></div>
      <section className="content pt-[0.5rem] flex flex-col sm:flex-row sm:justify-between  sm:py-24">
        <div className="max-w-[532px]">
          <div className="text-[0.2rem] leading-[0.2rem] text-center sm:text-[20px] sm:leading-[20px] text-[#333] font-normal sm:mb-12">
            问卷调查网站后台开发、API对接服务以及联盟网站后台对接
          </div>
          <div className="sm:hidden w-[3rem] h-[2px] bg-[#2859B6] mx-auto mt-[0.32rem] mb-[0.42rem]" />
          <p className=" mb-[0.3rem] sm:mb-0 text-[0.16rem] sm:text-[16px] text-[#666] leading-[0.36rem] sm:leading-6 font-light">
            在问卷调查网站后台开发，洛锋科技_Lfsurvey提供高度定制化的解决方案，帮助企业和机构轻松构建功能丰富、用户友好的在线调查平台，实现数据的快速收集与分析。
            <br />
            <br className="hidden sm:block" />
            在API对接方面，公司拥有一支专业的技术团队，擅长各类API接口的设计与实现，能够为客户提供稳定、高效的数据交互解决方案，助力企业实现不同系统间的无缝连接与数据共享。
            <br />
            <br className="hidden sm:block" />
            洛锋科技_Lfsurvey还擅长处理复杂的联盟网站后台对接项目。我们理解联盟成员间的合作需求，能够提供灵活多样的对接方案，确保联盟网站间的数据流通顺畅、资源共享高效，助力联盟成员共同成长。
          </p>
        </div>
        <Image
          src="static/images/product/product-bg2.png"
          alt=""
          width={600}
          height={360}
          className="w-[6rem] h-auto mx-auto object-contain sm:w-1/2"
        />
      </section>
    </>
  );
}
