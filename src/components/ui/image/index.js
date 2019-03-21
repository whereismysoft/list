import React, { Component } from 'react';
import classnames from 'classnames'; 

import styles from './styles.css';

export default class Icon extends Component {
    render() {
        return (
            <div className={classnames(styles['iconBlock'], this.props.isActive && styles['isActive'])}>
                <img className={styles['iconBlock--img']} src={this.props.src}/>
            </div>
        )
    }
}
