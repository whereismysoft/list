import React, { Component } from 'react';


import styles from './styles.css';

export default class FormInput extends Component {
    render() {
        return (
            <label 
                className={styles['inputBlock']} 
                htmlFor={this.props.id}
            >
                {this.props.labelText}
                <input
                    type={this.props.type}
                    id={this.props.id}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </label>
        )
    }
}
