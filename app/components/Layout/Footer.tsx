import './footer.css';
import Image from 'next/image';

const Footer = () => (
  <footer className="m-h-56 leading-7 font-site">
    <div className="flex flex-col sm:flex-row">
      <div className="w-full bg-blue-site text-white p-6 sm:pl-24">
        <div className="flex flex-col sm:flex-row justify-between text-sm font-helvetica">
          <div className="basis-1/3 border-b border-white pb-4">
            <h2 className="mt-4 text-2xl sm:mt-0 sm:text-3xl font-bold">
              公司简介
            </h2>
            <p className="mt-6">洛锋科技-LFSurvey</p>
            <p className="mt-6">海外问卷调查渠道查</p>
          </div>
          <div className="basis-1/3 border-b border-white pb-4">
            <h2 className="mt-4 text-2xl sm:mt-0 sm:text-3xl font-bold">
              产品咨询
            </h2>
            <p className="mt-6">LFSurvey@163.com</p>
            <p className="mt-6">公众号：LFSurvey</p>
          </div>
          <div className="basis-1/3 border-b border-white pb-4">
            <h2 className="mt-4 text-2xl sm:mt-0 sm:text-3xl font-bold">
              联系我们
            </h2>
            <Image
              className="mt-2.5"
              src="/static/images/QRcode.png"
              alt="二维码"
              width={140}
              height={140}
            />
          </div>
        </div>
        <p className="mt-5">浙ICP备2024076862号-2</p>
      </div>
    </div>
    <div className="mx-auto text-center sm:text-xs mt-6">
      <p className="font-default mb-6">© 2024. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
