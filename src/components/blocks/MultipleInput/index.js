import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import FormInput from 'ui/formInput';
import Button from 'ui/button';

import styles from './styles.css';

export default class MultipleInput extends Component {
    render() {
        return (
            <fieldset className={styles['inputsBlock']}>
                <legend
                    className={styles['inputsBlock--legend']}
                >
                    <Button 
                        transparent small withPadding bold
                        onClick={this.props.addField}
                        children={this.props.title}
                    />
                </legend>
                {
                    this.props.values.map(
                        (item, index) => {
                            return (
                            <FormInput
                                key={index + this.props.id}
                                type={'text'}
                                id={this.props.id + index}
                                value={this.props.values[index]}
                                onChange={(e) => this.props.onChange(e, index)}
                            />
                        )}
                    )
                }
            </fieldset>
        )
    }
}

FormInput.propTypes = {
    values: PropTypes.array,
    type: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    addField: PropTypes.func
}
