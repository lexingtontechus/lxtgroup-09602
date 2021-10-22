import React from 'react';
import _ from 'lodash';

import Action from './Action';
import { htmlToReact } from '../utils';

export default class Footer extends React.Component {
    render() {
        const config = _.get(this.props, 'config');
        const footer = _.get(config, 'footer');
        const hasNav = _.get(footer, 'has_nav');
        const navLinks = _.get(footer, 'nav_links');
        const hasSocial = _.get(footer, 'has_social');
        const socialLinks = _.get(footer, 'social_links');
        const copyright = _.get(footer, 'content');
        const links = _.get(footer, 'links');

        return (
            <footer className="site-footer">
                <div className="container container--lg">
                    {((hasNav && !_.isEmpty(navLinks)) || (hasSocial && !_.isEmpty(socialLinks))) && (
                        <div className="site-footer__nav">
                            {hasNav && !_.isEmpty(navLinks) && (
                                <ul className="site-footer__menu menu">
                                    {_.map(navLinks, (action, index) => (
                                        <li key={index}>
                                            <Action action={action} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {hasSocial && !_.isEmpty(socialLinks) && (
                                <ul className="site-footer__social menu">
                                    {_.map(socialLinks, (action, index) => (
                                        <li key={index}>
                                            <Action action={action} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                    <div className="site-footer__copyright">
                        {copyright && <span>{htmlToReact(copyright)}</span>}
                        {_.map(links, (action, index) => (
                            <Action key={index} action={action} />
                        ))}
                    </div>
                </div>
                                    <div style="position:relative;z-index:2147483647">
                        <minymon-body enableFeed="true" enableTalk="true" idsString="MWFkZmVkMjctYmM0Ny00ZjgyLWEwMGQtYjI2ODUyOWUzY2JkLmR0YVZOeWd1UG1wRHl5dHpqWFRaZA==" infoTitle="Hi there!" theme="gray">
                        <minymon-feedback description="Your message will be sent to the owner of this site." mid="1adfed27-bc47-4f82-a00d-b268529e3cbd" theme="gray" uid="dtaVNyguPmpDyytzjXTZd">
                    </minymon-feedback>
                </minymon-body>
                </div>

            /</footer>
        );
    }
}
