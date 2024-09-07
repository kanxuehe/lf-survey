import './footer.css';
import Image from 'next/image';

const Footer = () => (
  <footer className="flex h-[320px] bg-[#1F1F1F]">
    <div className="mx-auto sm:w-[1200px] flex justify-between">
      <div className="pt-[95px]">
        <p className="text-4xl font-bold text-white mb-12">洛锋科技-LFSurvey</p>
        <p className="text-xl font-light text-white">海外问卷调查渠道查</p>
      </div>
      <div className="pt-[110px]">
        <p className="text-lg font-light text-white mb-12">
          联系邮箱：LFSurvey@163.com
        </p>
        <p className="text-lg font-light text-white">公众号：LFSurvey</p>
      </div>
      <div className="pt-[80px] flex gap-x-6">
        <p className="text-base font-normal text-white text-center">
          <Image
            width={130}
            height={130}
            alt=""
            src="static/images/home/QRcode1.png"
            className="mb-4"
          />
          扫描添加客服
        </p>
        <p className="text-base font-normal text-white text-center">
          <Image
            width={130}
            height={130}
            alt=""
            src="static/images/home/QRcode2.png"
            className="mb-4"
          />
          关注公众号
          <br />
          了解更多资讯
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
