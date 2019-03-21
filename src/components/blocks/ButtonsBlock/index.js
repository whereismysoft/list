import React, { Component } from 'react';

import Button from 'ui/button';

import styles from './styles.css';

export default class ButtonsBlock extends Component {
    render() {
        return (
            <div className={styles['buttonsBlock']}>
                <Button onClick={() => alert()} children={'Добавить в начало'}/>
                <Button children={'Добавить в конец'}/>
                <Button children={'Удалить первый'}/>
                <Button children={'Удалить последний'}/>
            </div>
        )
    }
}
