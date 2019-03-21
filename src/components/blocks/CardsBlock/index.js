import React, { Component } from 'react';
import classnames from 'classnames';

import Card from 'ui/card';
import Icon from 'ui/image';
import Button from 'ui/button';

import styles from './styles.css';

export default class CardsBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typeOfGrid: 'list'
        }
    }
    render() {
        return (
            <div className={styles['cardsBlock']}>
                <div className={styles['cardsBlock--header']}>
                    <div className={styles['cardsBlock--title']}>Список объектов</div>
                    <div className={styles['cardsBlock--switchControl']}>
                        <Button onClick={() => this.setState({typeOfGrid: 'list'})} small transparent>
                            <Icon 
                                isActive={this.state.typeOfGrid === 'list' ? true : false}
                                src={require('assets/list.png')}
                            />
                        </Button>
                        <Button onClick={() => this.setState({typeOfGrid: 'block'})} small transparent>
                            <Icon
                                isActive={this.state.typeOfGrid === 'block' ? true : false}
                                src={require('assets/block.png')}
                            />
                        </Button>
                    </div>
                </div>
                <div className={styles['cardsBlock--content']}>
                    {this.props.cards.map(
                        (item, index) => <Card idx={index + 1} key={`${index}${item.title}`} {...item} />
                    )}
                </div>
            </div>
        )
    }
}
