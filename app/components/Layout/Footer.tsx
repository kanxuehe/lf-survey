'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './footer.css';
export const navbarItems = [
  { href: '/', label: '首页', icon: 'home' },
  { href: '/products', label: '产品', icon: 'product' },
  { href: '/contact', label: '联系我们', icon: 'my' },
];
const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <footer className="hidden sm:flex h-[320px] bg-[#1F1F1F]">
        <div className="mx-auto sm:w-[1200px] flex justify-between">
          <div className="pt-[95px]">
            <p className="text-4xl font-bold text-white mb-12">
              洛锋科技-LFSurvey
            </p>
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
      <footer className="sm:hidden fixed bottom-0 w-full h-[0.98rem] bg-[#2859B6] flex justify-around items-center">
        {navbarItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={`flex flex-col justify-center items-center gap-[0.04rem] ${
              pathname === item.href ? 'opacity-1' : 'opacity-50'
            }`}
          >
            <Image
              src={`static/images/footer/${item.icon}.png`}
              alt=""
              width={0}
              height={0}
              className="w-[0.48rem] h-[0.48rem]"
            />
            <div className="text-[0.2rem] text-white leading-[0.2rem]">
              {item.label}
            </div>
          </Link>
        ))}
      </footer>
    </>
  );
};

export default Footer;
