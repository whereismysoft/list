import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.css';

export default class Card extends Component {
    render() {
        console.log(this.props)
        return (
            <div className={classnames(styles['card'], styles[this.props.type])}>
                <div className={styles['card--header']}>
                    <div className={styles['card--index']}>{this.props.idx}</div>
                    <div className={styles['card--title']}>{this.props.title}</div>
                </div>
                <div className={styles['card--pointsBlock']}>
                    {
                        this.props.attributes.map(
                            (item, index) => <div key={index} className={styles['card--point']}>{item}</div>
                        )
                    }
                </div>
                <div className={styles['card--description']}>{this.props.description}</div>
            </div>
        )
    }
}
