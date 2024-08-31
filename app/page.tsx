import { WixMediaImage } from '@app/components/Image/WixMediaImage';
const serverList = [
  {
    img: '/static/images/home-2.png',
    title: '问卷调查网站',
    desc: '提供问卷调查网站开发对接，api接入，问卷数据播报机器人服务。',
  },
  {
    img: '/static/images/home-3.png',
    title: '联盟网站后台',
    desc: '提供联盟网站后台开发，api对接等服务，与合作伙伴共同发展业务。',
  },
  {
    img: '/static/images/home-4.png',
    title: '联系我们',
    desc: '产品介绍',
  },
];
export default function Home() {
  return (
    <div className="mx-auto relative">
      <div className="text-center w-full relative">
        <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
        <video autoPlay muted loop className="w-full h-[200px] sm:h-fit">
          <source
            src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h1 className="sm:text-[60px] sm:leading-[60px] mb-4">
            洛锋科技-LFSurvey
          </h1>
          <h2 className="sm:text-3xl">
            海外问卷调查渠道查
            <br />
            软件开发服务
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
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
              media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
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
              media="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
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
      <h2 className="text-3xl sm:text-5xl text-center my-10  sm:mt-20 font-site">
        合作伙伴
      </h2>
      <p className="text-center">LFSurvey海外问卷调查渠道查业务合作伙伴</p>
      {/* <div
        // className="flex flex-col sm:flex-row gap-8 sm:justify-between items-center font-site"
        // className="container mx-auto max-w-screen-6xl overflow-x-auto grid grid-cols-[1fr, 2fr, 1fr] gap-4"
      >
        {[...Array(20)].map((_item, index) => {
          return (
            // <div className="float-left">
            <Image
              className="float-left"
              src={`/static/images/partner-${index}.png`}
              alt=""
              width={200}
              height={200}
            />
            // </div>
          );
        })}
      </div> */}
      <section className="flex flex-col sm:flex-row sm:mx-20">
        <h2 className="basis-1/2 text-3xl sm:text-5xl font-site">
          洛锋科技介绍
        </h2>
        <div className="basis-1/2 flex flex-col gap-10">
          <p className="text-gray-500">
            洛锋科技_Lfsurvey是一家专注研发软件相关产品的软件开发公司，拥有多项国家发明专利和软件著作权以及商标。我们致力于问卷调查网站后台开发，api对接，联盟网站后台对接。
          </p>
          <div className="flex gap-10">
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
      <div className="h-[424px] sm:m-20 rounded-3xl overflow-hidden">
        <WixMediaImage
          media="/static/images/home-1.png"
          objectFit="cover"
          sizes="20vw"
          disableZoom={true}
        />
      </div>
      <section>
        <h2 className="text-3xl sm:text-5xl text-center my-10  sm:mt-20 font-site">
          软件开发服务
        </h2>
        <p className="text-center text-gray-500">
          我们是一家软件开发公司，专注研发软件相关产品，拥有多项国家发明专利和软件著作权。
        </p>
        <ul className="sm:m-20 flex gap-4">
          {serverList.map((item) => {
            return (
              <li className="basis-1/3 ">
                <div className="h-[280px] rounded-3xl overflow-hidden mb-4">
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
