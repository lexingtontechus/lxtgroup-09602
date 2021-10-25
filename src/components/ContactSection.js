import React from 'react';
import _ from 'lodash';

export default class ContactSection extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const title = _.get(section, 'title');

        return (
            <section className="section">
                <div className="container container--md">
                <div class="convertful-148367"></div>
                </div>
            </section>
        );
    }
}
