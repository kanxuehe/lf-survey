import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <title>小龙坎</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,user-scalable=0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
        />
        <meta content="website" property="og:type" />
        <link rel="icon" href="images/logo.svg" />
      </head>
      <body className=" bg-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
