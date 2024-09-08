import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className="w-full sm:h-[15.625vw] sm:bg-[url('/static/images/contact/contact-bg.png')] bg-cover" />
      <div className="content py-10">
        <div className="flex">
          <Image
            src="static/images/contact/position2.png"
            alt=""
            width={120}
            height={120}
            className="w-[120px] h-[120px]"
          />
          <div className="ml-16 mr-44">
            <p className="my-5">地址：浙江省杭州市滨江区浙农科创园1幢808室</p>
            <p>邮箱：LFSurvey@163.com</p>
          </div>
          <div className="flex gap-x-4">
            <div>
              <Image
                src="static/images/home/QRcode1.png"
                alt=""
                width={150}
                height={150}
              />
              <div className="text-center mt-2">扫描添加客服</div>
            </div>
            <div>
              <Image
                src="static/images/home/QRcode1.png"
                alt=""
                width={150}
                height={150}
              />
              <div className="text-center mt-2 leading-5">
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
          className="w-full h-full mt-10"
        />
      </div>
      {/* <div>
        <div className="w-[320px] h-[320px]">
          <WixMediaImage
            media="static/images/contact/QRcode.png"
            objectFit="cover"
            sizes="20vw"
            disableZoom={true}
          />
        </div>
      </div> */}
    </>
  );
}
