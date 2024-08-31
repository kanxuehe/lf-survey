import { WixMediaImage } from '@app/components/Image/WixMediaImage';
const list = [
  {
    img: '/static/images/product-2.png',
    title: '业务描述',
    desc: '我们专注于问卷调查网站后台开发，api对接，联盟网站后台对接。产品包括问卷调查渠道查网站开发对接，api接入，问卷数据播报机器人。',
  },
  {
    img: '/static/images/product-3.png',
    title: '合作伙伴',
    desc: '我们的合作伙伴包括cint,yuno,notik,bitlabs,prodege,adgatemedia,pollfish,b2b,rom...。欢迎联系我们，地址：浙江省杭州市滨江区浙农科创园。',
  },
];
export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto bg-white px-6 sm:px-20">
      <section>
        <h1 className="text-center py-8 font-site">
          洛锋科技-海外问卷调查网站展示
        </h1>
        <p className="max-w-3xl text-sm text-center mx-auto text-gray-500">
          洛锋科技是一家软件开发公司，专注研发问卷调查网站后台开发和api对接。
        </p>
        <div className="mt-10 w-full h-[180px] sm:w-[858px] sm:h-[480px] mx-auto">
          <WixMediaImage
            className="overflow-hidden rounded-3xl"
            media="/static/images/product-1.png"
            objectFit="cover"
            sizes="50vw"
            disableZoom={true}
          />
        </div>
      </section>
      <section className="mt-10">
        <h1 className="py-8 font-site">洛锋科技LFSurvey网站项目</h1>
        <p className="max-w-3xl text-sm text-gray-500 mb-10">
          洛锋科技是一家软件开发公司，专注研发软件相关产品，
          <br />
          拥有多项国家发明专利和软件著作权以及商标。
        </p>
        <ul className="flex flex-col gap-y-10">
          {list.map((item) => {
            return (
              <li className="flex flex-col sm:flex-row gap-x-10">
                <div className="mb-10 sm:mb-0 sm:basis-1/2 sm:h-[360px] h-[264px] rounded-3xl overflow-hidden">
                  <WixMediaImage
                    media={item.img}
                    objectFit="cover"
                    sizes="20vw"
                    disableZoom={true}
                  />
                </div>
                <div className="sm:basis-1/2 flex flex-wrap flex-col justify-center">
                  <h3 className="mb-2 font-bold text-2xl">{item.title}</h3>
                  <p className="text-gray-500 break-all">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
