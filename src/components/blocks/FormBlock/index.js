import React, { Component } from 'react';
import classnames from 'classnames';

import FormInput from 'ui/formInput';
import Button from 'ui/button';
import MultipleInput from 'blocks/MultipleInput';
import {deepCopy} from 'utils/copy';

import styles from './styles.css';

export default class FormBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            attributes: [],
            description: ''
        }
    }

    handleInputChange = (e, type) => {
        e.preventDefault();

        this.setState({
            [type]: e.target.value
        })
    }

    handleMultipleInput = (e, index) => {
        e.preventDefault();

        const copy = [...this.state.attributes];
        copy[index] = e.target.value;

        this.setState({
            attributes: copy
        })
    }

    addField = (e) => {
        e.preventDefault();

        const copy = deepCopy(this.state.attributes);
        copy.push('');

        this.setState({
            attributes: copy
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title) {
            alert('Пожалуйста, введите заголовок')
        } else {
            this.props.addNewItem(deepCopy(this.state));
            this.setState({
                title: '',
                attributes: [],
                description: ''
            })
        }
    } 

    render() {
        return (
            <div className={styles['form']}>
                <div className={styles['form--title']}>
                    Добавить новый объект
                </div>
                <form onSubmit={this.handleSubmit} className={styles['form--block']}>
                    <FormInput
                        type={'text'}
                        id={'title'}
                        labelText={'Заголовок *'}
                        value={this.state.title}
                        onChange={(e) => this.handleInputChange(e, 'title')}
                    />
                    <MultipleInput
                        title={'Добавить пункт'}
                        values={this.state.attributes}
                        id={'point'}
                        onChange={this.handleMultipleInput}
                        addField={this.addField}
                    />
                    <FormInput
                        type={'text'}
                        id={'description'}
                        labelText={'Описание'}
                        value={this.state.description}
                        onChange={(e) => this.handleInputChange(e, 'description')}
                    />
                    <Button type={'submit'} medium withMarginTop withPadding children={'добавить'}/>
                </form>
            </div>
        )
    }
}
