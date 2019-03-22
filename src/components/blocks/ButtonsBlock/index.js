import React, { Component } from 'react';

import Button from 'ui/button';

import styles from './styles.css';

export default class ButtonsBlock extends Component {
    render() {
        return (
            <div className={styles['buttonsBlock']}>
                <Button onClick={this.props.unshiftLastCard} children={'Добавить в начало'}/>
                <Button onClick={this.props.pushFirstCard} children={'Добавить в конец'}/>
                <Button onClick={this.props.deleteFirstCard} children={'Удалить первый'}/>
                <Button onClick={this.props.deleteLastCard} children={'Удалить последний'}/>
            </div>
        )
    }
}
