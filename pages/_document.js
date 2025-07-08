import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          
          {/* HTML Meta Tags */}
          <title>Naved Alam - Designer & Builder</title>
          <meta name="description" content="Portfolio of Naved Alam, showcasing work across UI/UX, branding, Web3, AI tools, and more." />
          <meta name="keywords" content="Naved Alam, Product Designer, Design Engineer, UI/UX, Web3, AI Tools, Design Systems, React, Tailwind CSS, Healthcare Design, Branding, Frontend Development, Design Portfolio" />
          
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-1LQ2XYJ9TW"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1LQ2XYJ9TW');
            `
          }} />
          <script async src="https://cdn.seline.com/seline.js" data-token="9152f6146242054"></script>
          {/* Favicon */}
          <link rel="icon" href="/favicon-light.svg" media="(prefers-color-scheme: light)" />
          <link rel="icon" href="/favicon-dark.svg" media="(prefers-color-scheme: dark)" />
          
          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://www.naved.xyz/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Naved Alam - Designer & Builder" />
          <meta property="og:description" content="Portfolio of Naved Alam, showcasing work across UI/UX, branding, Web3, AI tools, and more." />
          <meta property="og:image" content="https://www.naved.xyz/design/og-image.png" />
          
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="naved.xyz" />
          <meta property="twitter:url" content="https://www.naved.xyz/" />
          <meta name="twitter:title" content="Naved Alam - Designer & Builder" />
          <meta name="twitter:description" content="Portfolio of Naved Alam, showcasing work across UI/UX, branding, Web3, AI tools, and more." />
          <meta name="twitter:image" content="https://www.naved.xyz/design/og-image.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 