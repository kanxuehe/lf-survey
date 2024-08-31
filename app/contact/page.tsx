import { WixMediaImage } from '@app/components/Image/WixMediaImage';
export default function Page() {
  return (
    <div className="flex flex-col sm:flex-row sm:mx-10 lg:mx-20 sm:mt-20 mt-10 gap-x-20 justify-center items-center">
      <div>
        <h1 className="text-3xl sm:text-5xl mb-5">联系我们</h1>
        <p className="mb-5 text-gray-500">欢迎联系我们，我们将竭诚为您服务。</p>
        <h4 className="mb-2">联系地址</h4>
        <p className="mb-5 text-gray-500">浙江省杭州市滨江区浙农科创园</p>
        <h4 className="mb-2">邮箱</h4>
        <p className="mb-5 text-gray-500">联系邮箱：LFSurvey@163.com</p>
      </div>
      <div>
        <div className="w-[320px] h-[320px]">
          <WixMediaImage
            media="/static/images/QRcode.png"
            objectFit="cover"
            sizes="20vw"
            disableZoom={true}
          />
        </div>
      </div>
    </div>
  );
}
