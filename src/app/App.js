import React, { Component } from 'react';

import ButtonsBlock from 'blocks/ButtonsBlock';
import CardsBlock from 'blocks/CardsBlock';

import styles from './styles.css';

export default class App extends Component {
    render() {
        return (
            <div className={styles['app']}>
                <ButtonsBlock />
                <CardsBlock cards={this.props.cards}/>
            </div>
        )
    }
}

//buttons
//cards
//form