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
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
                    </link>
                    <script id="convertful-api" src="https://app.convertful.com/Convertful.js?owner=6615" async></script>
                <script 
                    src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie_svg.min.js" 
                    type="text/javascript">
                </script>
                <script 
                    src="https://api.minymon.com/minymon.js" 
                    defer
                    type="text/javascript">
                </script>
                    </Head>
                <body {...this.helmetBodyAttrComponents}>
                    <Main />
                    <NextScript />
                    <div style="position:relative;z-index:2147483647">
                <minymon-body enableFeed="true" enableTalk="true" idsString="MWFkZmVkMjctYmM0Ny00ZjgyLWEwMGQtYjI2ODUyOWUzY2JkLmR0YVZOeWd1UG1wRHl5dHpqWFRaZA==" infoTitle="Hi there!" theme="gray">
                    <minymon-feedback description="Your message will be sent to the owner of this site." mid="1adfed27-bc47-4f82-a00d-b268529e3cbd" theme="gray" uid="dtaVNyguPmpDyytzjXTZd">
                    </minymon-feedback>
                </minymon-body>
                </div>

                </body>
            </Html>
        );
    }
}
