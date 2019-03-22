import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.css';

export default class Button extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                type={this.props.type}
                className={classnames(
                    styles['button'],
                    this.props.small && styles['isSmall'],
                    this.props.transparent && styles['transparent'],
                    this.props.withPadding && styles['withPadding'],
                    this.props.medium && styles['medium'],
                    this.props.withMarginTop && styles['marginTop'],
                    this.props.bold && styles['bold']
                )}
            >
                {this.props.children}
            </button>
        )
    }
}