import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

/**
 * @param {NextPageContext<any, AnyAction> & {renderPage: RenderPage}} ctx
 */
// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render
//
//   // Render app and page and get the context of the page with collected side effects.
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;
//
//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: App => props => sheets.collect(<App {...props} />)
//     });
//
//   const initialProps = await Document.getInitialProps(ctx);
//
//   return {
//     ...initialProps,
//     // styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       <React.Fragment key="styles">
//         {initialProps.styles}
//         {sheets.getStyleElement()}
//       </React.Fragment>
//     ]
//   };
// };

export default MyDocument;
