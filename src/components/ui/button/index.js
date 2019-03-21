import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.css';

export default class Button extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className={classnames(
                    styles['button'],
                    this.props.small && styles['isSmall'],
                    this.props.transparent && styles['transparent']
                )}
            >
                {this.props.children}
            </button>
        )
    }
}