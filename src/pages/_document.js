import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Helmet } from 'react-helmet';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        // see https://github.com/nfl/react-helmet#server-usage for more information
        // 'head' was occupied by 'renderPage().head', we cannot use it
        return { ...initialProps, helmet: Helmet.renderStatic() };
    }

    // should render on <html>
    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent();
    }

    // should render on <body>
    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent();
    }

    // should render on <head>
    get helmetHeadComponents() {
        return Object.keys(this.props.helmet)
            .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
            .map((el) => this.props.helmet[el].toComponent());
    }

    render() {
        // if you don't like Helmet but you still want to set properties on body use this
        // const pageProps = _.get(this.props, '__NEXT_DATA__.props.pageProps');
        return (
            <Html {...this.helmetHtmlAttrComponents}>
                <Head>{this.helmetHeadComponents}
                    
                    
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFBK2N3');</script>

                    
                </Head>
                <body {...this.helmetBodyAttrComponents}>
                    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFBK2N3"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
                      <Main />
                    <NextScript />
                </body>
                
            </Html>
        );
    }
}
