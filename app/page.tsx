import Image from 'next/image';
import Link from 'next/link';
import Title from '@app/components/Title';
const aboutUs = [
  {
    title: '行业经验',
    number: '10',
    unit: '年',
  },
  {
    title: '客户案例实力见证',
    number: '15000',
    unit: '+',
  },
  {
    title: '专利技术领先',
    number: '100',
    unit: '+',
  },
  {
    title: '合作经销商',
    number: '88',
    unit: '+',
  },
];
const products = [
  {
    title: '问卷调查网站后台开发',
    desc: '提供高度定制化的解决方案，\n构建功能丰富、用户友好的在线调查平台\n以及创新的问卷数据播报机器人服务',
    bg: 'static/images/home/pbg1.png',
    mbg: 'static/images/home/m-pbg1.png',
  },
  {
    title: 'API对接服务',
    desc: '擅长各类API接口的设计与实现\n能够为客户提供稳定\n高效的数据交互解决方案',
    bg: 'static/images/home/pbg2.png',
    mbg: 'static/images/home/m-pbg2.png',
  },
  {
    title: '联盟网站后台对接',
    desc: '拥有多项国家专利\n擅长复杂联盟网站后台高效对接\n实现无缝数据共享与互通',
    bg: 'static/images/home/pbg3.png',
    mbg: 'static/images/home/m-pbg3.png',
  },
];

export default function Home() {
  return (
    <div className="mx-auto relative">
      <section className="h-[3.4rem] w-full sm:h-[33.85vw] flex items-center justify-center bg-[url('/static/images/home/bg1.png')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-center">
          <h1 className="text-[0.32rem] leading-[0.32rem] mb-[0.4rem] font-bold text-white sm:text-5xl  sm:mb-[56px]">
            洛锋科技LFSurvey 专注研发软件产品
          </h1>
          <p className="text-[0.18rem] leading-[0.25rem] mb-[0.38rem] text-white text-center font-light sm:mb-20  sm:text-2xl">
            海外问卷调查渠道查软件开发服务
            <br />
            提供问卷调查网站开发和API接入等服务
          </p>
          <Link
            href="/products"
            className="flex items-center justify-center w-[1.4rem] h-[0.32rem] text-[0.16rem]  rounded-full border border-white text-white sm:w-[140px] sm:h-[40px] sm:text-base"
          >
            了解更多
          </Link>
        </div>
      </section>
      <section className="pt-[0.4rem] sm:pt-[90px]">
        <Title enTitle="ABOUT US" title="关于我们" />
        <p className="px-[0.4rem] mt-[0.46rem] mb-[0.4rem] text-[0.16rem] leading-[0.36rem] text-center font-light sm:mt-[60px] sm:mb-[78px] sm:leading-[36px] sm:text-base ">
          洛锋科技_Lfsurvey，作为业界领先的软件开发企业，专注于软件相关产品的深度研发与创新，以其卓越的技术实力和丰富的行业经验
          <br className="hidden sm:block" />
          在软件开发领域树立了良好的口碑。公司自成立以来，便不断追求卓越，致力于通过技术革新推动行业发展，已成功获得多项国家发明专利，
          <br className="hidden sm:block" />
          这些专利的取得不仅是对公司技术实力的肯定，更是对未来技术探索方向的引领。
        </p>
        <div className="w-full h-[16vw] flex items-center justify-center bg-[url('/static/images/home/bg2.png')] bg-cover">
          <ul className="content flex justify-between">
            {aboutUs.map((item) => (
              <li className="flex flex-col items-center" key={item.title}>
                <div>
                  <span className="text-[0.32rem] mr-[0.08rem] sm:text-[60px] sm:mr-2">
                    {item.number}
                  </span>
                  <span className="text-[0.14rem] sm:text-[18px] font-light">
                    {item.unit}
                  </span>
                </div>
                <p className="text-[0.16rem] sm:mt-[22px] leading-[0.16rem] text-[#999] sm:text-lg">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="pt-[0.3rem] pb-[0.4rem] sm:pt-[90px] sm:pb-[100px]">
        <Title enTitle="PRODUCTS AND SERVICES" title="产品与服务" />
        <ul className="content mt-[0.48rem] flex flex-col gap-y-[0.4rem] sm:flex-row sm:mt-[60px] sm:justify-between sm:gap-x-[30px]">
          {products.map((item) => {
            return (
              <li
                className="even:flex-row-reverse flex gap-x-[0.36rem] h-[1.8rem] sm:h-auto sm:even:flex-col sm:relative sm:flex-1 sm:max-h-[640px] sm:flex-col sm:items-center"
                key={item.title}
              >
                <Image
                  src={item.bg}
                  alt=""
                  width={0}
                  height={0}
                  className="hidden sm:block w-[3.2rem] h-auto sm:w-[380px] sm:h-auto"
                />
                <Image
                  src={item.mbg}
                  alt=""
                  width={0}
                  height={0}
                  className="sm:hidden w-[3.2rem] h-auto sm:w-[380px] sm:h-auto"
                />
                <div className="flex w-[3.2rem] h-[1.8rem] flex-col justify-center sm:bg-[#2859B6] sm:absolute sm:w-full sm:h-[42.18%] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
                  <div className="text-[0.28rem] text-[#333] sm:text-white sm:text-center sm:text-2xl font-normal">
                    {item.title}
                  </div>
                  <p className="text-[0.16rem] leading-[0.32rem] sm:mt-8 text-[#666] sm:text-white sm:text-base font-light sm:text-center whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="flex flex-col justify-center w-full pb-[0.52rem] sm:pb-0 sm:h-[20.2vw] sm:bg-[url('/static/images/home/bg3.png')] bg-cover">
        <Title enTitle="COOPERATIVE PARTNER" title="合作伙伴" />
        <ul className="content mt-[0.5rem] gap-[0.35rem] sm:mt-[50px] flex flex-wrap sm:flex-nowrap sm:gap-x-[40px] sm:overflow-x-auto sm:-mb-5 sm:pb-5 ">
          {[...Array(14)].map((_item, index) => {
            return (
              <li
                className="w-[2rem] h-[1.09rem] sm:w-[18.41%] sm:h-[6.3vw] max-w-[221px] max-h-[121px] min-w-[18.41%] min-h-[6.3vw] flex items-center justify-center overflow-hidden bg-white border-y border-[#D2D2D2]"
                key={index}
              >
                <Image
                  src={`static/images/partner/partner-${index}.png`}
                  alt=""
                  width={0}
                  height={0}
                  className="object-contain"
                  style={{ width: '100%', height: 'auto' }}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
