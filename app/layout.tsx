import './globals.css';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <title>
          洛锋科技-问卷调查网站开发与API对接服务 | LFSurvey-洛锋科技
        </title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,user-scalable=0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="洛锋科技是一家专注研发软件产品的软件开发公司，拥有多项国家发明专利和软件著作权，提供问卷调查网站开发，API对接等服务。联系我们：浙江省杭州市滨江区。"
        />
        <meta
          property="twitter:title"
          content="洛锋科技-问卷调查网站开发与API对接服务 | LFSurvey-洛锋科技"
        />
        <meta
          name="twitter:description"
          content="洛锋科技是一家专注研发软件产品的软件开发公司，拥有多项国家发明专利和软件著作权，提供问卷调查网站开发，API对接等服务。联系我们：浙江省杭州市滨江区。"
        />
        <meta
          property="og:title"
          content="洛锋科技-问卷调查网站开发与API对接服务 | LFSurvey-洛锋科技"
        />
        <meta
          property="og:description"
          content="洛锋科技是一家专注研发软件产品的软件开发公司，拥有多项国家发明专利和软件著作权，提供问卷调查网站开发，API对接等服务。联系我们：浙江省杭州市滨江区。"
        />
        <meta content="website" property="og:type" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="https://lfsurvey.com/" property="og:url" />
        <meta property="og:site_name" content="LFSurvey-洛锋科技" />
        <meta
          name="keywords"
          content="洛锋科技, 问卷调查网站开发, API对接服务 | LFSurvey-洛锋科技"
        />
        <link rel="icon" href="static/images/home/logo2.jpg" />
        <link rel="canonical" href="https://lfsurvey.com/" />
      </head>
      <body className="text-basic bg-white">
        <Header />
        <main className="bg-white pb-[0.98rem] sm:pb-0 sm:min-h-[calc(100vh-408px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
