import React, { Component } from 'react';

import ButtonsBlock from 'blocks/ButtonsBlock';
import CardsBlock from 'blocks/CardsBlock';
import FormBlock from 'blocks/FormBlock';

import styles from './styles.css';

export default class App extends Component {
    render() {
        return (
            <div className={styles['app']}>
                <ButtonsBlock
                    unshiftLastCard={this.props.unshiftLastCard}
                    pushFirstCard={this.props.pushFirstCard}
                    deleteFirstCard={this.props.deleteFirstCard}
                    deleteLastCard={this.props.deleteLastCard}
                />
                <CardsBlock cards={this.props.cards}/>
                <FormBlock addNewItem={this.props.addNewItem}/>
            </div>
        )
    }
}

//buttons
//cards
//form