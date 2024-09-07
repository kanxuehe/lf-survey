import Image from 'next/image';
import Title from '@app/components/Title';
import Link from 'next/link';
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
  },
  {
    title: 'API对接服务',
    desc: '擅长各类API接口的设计与实现\n能够为客户提供稳定\n高效的数据交互解决方案',
    bg: 'static/images/home/pbg2.png',
  },
  {
    title: '联盟网站后台对接',
    desc: '拥有多项国家专利\n擅长复杂联盟网站后台高效对接\n实现无缝数据共享与互通',
    bg: 'static/images/home/pbg3.png',
  },
];

export default function Home() {
  return (
    <div className="mx-auto relative">
      <section className="w-full h-[33.85vw] flex items-center justify-center bg-[url('/static/images/home/bg1.png')] bg-cover">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl text-white mb-[56px]">
            洛锋科技LFSurvey 专注研发软件产品
          </h1>
          <p className="text-2xl text-white font-light mb-20 text-center">
            海外问卷调查渠道查软件开发服务
            <br />
            提供问卷调查网站开发和API接入等服务
          </p>
          <Link
            href="/products"
            className="flex items-center justify-center w-[140px] h-[40px] rounded-full border border-white text-white"
          >
            了解更多
          </Link>
        </div>
      </section>
      <section className="pt-[90px]">
        <Title enTitle="ABOUT US" title="关于我们" />
        <p className="mt-[60px] mb-[78px] leading-[36px] text-center font-light">
          洛锋科技_Lfsurvey，作为业界领先的软件开发企业，专注于软件相关产品的深度研发与创新，以其卓越的技术实力和丰富的行业经验
          <br />
          在软件开发领域树立了良好的口碑。公司自成立以来，便不断追求卓越，致力于通过技术革新推动行业发展，已成功获得多项国家发明专利，
          <br />
          这些专利的取得不仅是对公司技术实力的肯定，更是对未来技术探索方向的引领。
        </p>
        <div className="w-full h-[16vw] flex items-center justify-center bg-[url('/static/images/home/bg2.png')] bg-cover">
          <ul className="mx-auto sm:w-[1200px] flex justify-between">
            {aboutUs.map((item) => (
              <li className="flex flex-col items-center" key={item.title}>
                <div>
                  <span className="text-[60px] mr-2">{item.number}</span>
                  <span className="text-[18px] font-light">{item.unit}</span>
                </div>
                <p className="mt-[22px] text-[#999] text-lg">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="pt-[90px] pb-[100px]">
        <Title enTitle="PRODUCTS AND SERVICES" title="产品与服务" />
        <ul className="mx-auto mt-[60px] sm:w-[1200px] flex justify-between gap-x-[30px]">
          {products.map((item, index) => {
            return (
              <li
                className="relative flex-1 h-[640px] flex flex-col items-center"
                key={item.title}
              >
                <Image
                  src={item.bg}
                  alt=""
                  width={380}
                  height={640}
                  style={{ width: '380', height: 'auto' }}
                />
                <div className="flex flex-col justify-center bg-[#2859B6] absolute w-full h-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="text-white text-center text-2xl font-normal">
                    {item.title}
                  </div>
                  <p className="mt-8 text-white text-base font-light text-center whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="pt-[64px] pb-[55px] w-full h-[20.2vw] bg-[url('/static/images/home/bg3.png')] bg-contain">
        <Title enTitle="COOPERATIVE PARTNER" title="合作伙伴" />
        <ul className="mx-auto mt-[50px] sm:w-[1200px] flex justify-between gap-x-[40px] overflow-x-auto">
          {[...Array(18)].map((_item, index) => {
            return (
              <Image
                src={`static/images/partner-${index}.png`}
                key={index}
                alt=""
                width={220}
                height={120}
                style={{ width: '220px', height: '120px' }}
              />
            );
          })}
        </ul>
      </section>
      {/* <div className="text-center w-full relative">
        <div className="z-10 absolute top-0 left-0  h-[calc(100vh-176px)] sm:h-[calc(100vh-148px)] w-full bg-black opacity-50"></div>
        <div className="w-full h-[calc(100vh-176px)] sm:h-[calc(100vh-148px)]">
          <WixMediaImage
            media={'static/images/bg.png'}
            objectFit="cover"
            sizes="50vw"
            disableZoom={true}
          />
        </div>
        <div className="z-30 absolute top-1/3 right-[30px] sm:top-2/5 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h1 className="sm:text-[60px] sm:leading-[60px] mb-4">
            洛锋科技-LFSurvey
          </h1>
          <h2 className="sm:text-3xl">
            海外问卷调查渠道查
            <br />
            软件开发服务
          </h2>
        </div>
        <div className="z-20 flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
          <h3 className="flex-1 sm:text-xl py-4 px-8 text-center sm:text-left">
            LFSurvey专注研发软件产品，提供问卷调查网站开发和API接入等服务
          </h3>
          <a
            href="/contact"
            className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit"
          >
            了解更多
          </a>
        </div>
      </div>

      <div className="sm:h-[514px] flex pt-10 sm:pt-32 sm:gap-12 flex-col sm:flex-row ">
        <div className="basis-1/3">
          <div className="h-[250px] sm:h-[370px] relative">
            <WixMediaImage
              media="static/images/home-5.png"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">问卷调查网站开发</h3>
            <p className="my-6 text-sm text-gray-500">
              定制问卷网站，实现数据接入和播报功能
            </p>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="static/images/home-6.png"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">多项国家专利</h3>
            <p className="my-6 text-sm text-gray-500">
              联盟网站后台对接，实现数据共享和互通功能
            </p>
          </div>
        </div>
      </div>
      <section className="sm:my-20">
        <h2 className="text-3xl sm:text-5xl text-center my-10 font-site">
          合作伙伴
        </h2>
        <p className="text-center text-gray-500">
          LFSurvey海外问卷调查渠道查业务合作伙伴
        </p>
        <div className="columns-3 mx-5 mt-10 sm:columns-6 sm:mx-20 sm:mt-20">
          {[...Array(18)].map((_item, index) => {
            return (
              <Image
                src={`static/images/partner-${index}.png`}
                key={index}
                alt=""
                width={0}
                height={0}
                style={{ width: '200px', height: 'auto' }}
              />
            );
          })}
        </div>
      </section>
      <section className="flex flex-col sm:flex-row mx-5 sm:mx-20 mt-10">
        <h2 className="mb-10 sm:mb-0 basis-1/2 text-3xl sm:text-5xl font-site">
          洛锋科技介绍
        </h2>
        <div className="basis-1/2 flex flex-col gap-10">
          <p className="text-gray-500">
            洛锋科技_Lfsurvey是一家专注研发软件相关产品的软件开发公司，拥有多项国家发明专利和软件著作权以及商标。我们致力于问卷调查网站后台开发，api对接，联盟网站后台对接。
          </p>
          <div className="flex justify-between">
            <div>
              <p className="text-5xl font-bold text-purple-site mb-2">15000+</p>
              <span>可靠性强</span>
            </div>
            <div>
              <p className="text-5xl font-bold text-purple-site mb-2">100+</p>
              <span>专利技术领先</span>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[212px] sm:h-[424px] m-5 sm:m-20 rounded-3xl overflow-hidden">
        <WixMediaImage
          media="static/images/home-1.png"
          objectFit="cover"
          sizes="20vw"
          disableZoom={true}
        />
      </div>
      <section className="mx-5 sm:mx-20 mt-10">
        <h2 className="text-3xl sm:text-5xl text-center my-10  sm:mt-20 font-site">
          软件开发服务
        </h2>
        <p className="text-center text-gray-500">
          我们是一家软件开发公司，专注研发软件相关产品，拥有多项国家发明专利和软件著作权。
        </p>
        <ul className="flex flex-col gap-y-5 gap-x-5 sm:flex-row mt-5 sm:mt-20 ">
          {serverList.map((item) => {
            return (
              <li className="sm:basis-1/3" key={item.title}>
                <div className="h-[230px] sm:h-[280px] rounded-3xl overflow-hidden mb-4">
                  <WixMediaImage
                    media={item.img}
                    objectFit="cover"
                    sizes="20vw"
                    disableZoom={true}
                  />
                </div>
                <h5 className="mb-2  font-bold">{item.title}</h5>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </section> */}
    </div>
  );
}
