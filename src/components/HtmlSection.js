import React from 'react';
import _ from 'lodash';

import { markdownify, htmlToReact } from '../utils';

export default class HtmlSection extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');

        return (
            <section className="section">
                <div className="container container--md">
                    {title && <h2 className="section__title align-center">{title}</h2>}
                    {content && <div className="section__copy">{htmlToReact(content)}</div>}
                </div>
            </section>
        );
    }
}
