import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { withPrefix } from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        const page = _.get(this.props, 'page');
        const pageTitle = _.get(page, 'title');
        const config = _.get(this.props, 'config');
        const configTitle = _.get(config, 'title');
        const favicon = _.get(config, 'favicon');
        const domain = _.trim(_.get(config, 'domain', ''), '/');
        const seo = _.get(page, 'seo');
        const seoTitle = _.get(seo, 'title');
        const title = seoTitle ? seoTitle : [pageTitle, configTitle].join(' | ');
        const seoDescription = _.get(seo, 'description', '');
        const seoRobots = _.get(seo, 'robots', []).join(',');
        const seoExtra = _.get(seo, 'extra', []).map((meta, index) => {
            const keyName = _.get(meta, 'keyName', 'name');
            const name = _.get(meta, 'name');
            if (!name) {
                return null;
            }
            const nameAttr = { [keyName]: name };
            const relativeUrl = _.get(meta, 'relativeUrl');
            let value = _.get(meta, 'value');
            if (!value) {
                return null;
            }
            if (relativeUrl) {
                if (!domain) {
                    return null;
                }
                value = domain + withPrefix(value);
            }
            return <meta key={index} {...nameAttr} content={value} />;
        });

        return (
            <React.Fragment>
                <Helmet>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={seoDescription} />
                    {!_.isEmpty(seoRobots) && <meta name="robots" content={seoRobots} />}
                    {seoExtra}
                    {favicon && <link rel="icon" href={withPrefix(favicon)} />}
                </Helmet>
                <div id="site-wrap" className="site">
                    <Header page={page} config={config} />
                    <main id="content" className="site-content">
                        {this.props.children}
                    </main>
                    <Footer config={config} />
                </div>
                <div style="position:relative;z-index:2147483647">
  <minymon-body enableFeed="true" enableTalk="true" idsString="MWFkZmVkMjctYmM0Ny00ZjgyLWEwMGQtYjI2ODUyOWUzY2JkLmR0YVZOeWd1UG1wRHl5dHpqWFRaZA==" infoTitle="Hi there!" theme="gray">
    <minymon-feedback description="Your message will be sent to the owner of this site." mid="1adfed27-bc47-4f82-a00d-b268529e3cbd" theme="gray" uid="dtaVNyguPmpDyytzjXTZd">
    </minymon-feedback>
  </minymon-body>
</div>
            </React.Fragment>
        );
    }
}
