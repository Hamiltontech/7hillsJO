import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="7hills" href="/icon.png"></link>
      <meta name="theme-color" content="#090302" />
        <link
          href="https://fonts.googleapis.com/css2?family=Blinker:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;