import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import Image from 'next/image';
const serverList = [
  {
    img: 'static/images/home-2.png',
    title: '问卷调查网站',
    desc: '提供问卷调查网站开发对接，api接入，问卷数据播报机器人服务。',
  },
  {
    img: 'static/images/home-3.png',
    title: '联盟网站后台',
    desc: '提供联盟网站后台开发，api对接等服务，与合作伙伴共同发展业务。',
  },
  {
    img: 'static/images/home-4.png',
    title: '联系我们',
    desc: '产品介绍',
  },
];

export default function Home() {
  return (
    <div className="mx-auto relative">
      <div className="text-center w-full relative">
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
          <div className="h-[370px] relative">
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
      </section>
    </div>
  );
}
