/**
 * Created by oking on 10/04/2017.
 */

// @flow

import type { CardValue, Card, Deck } from '../types/types';
import { Suits, Values } from '../types/types';
let shuffle = require('lodash.shuffle');

class DeckController {
    suits: Array<string>;
    values: Array<CardValue>;

    constructor () {
        this.suits = Suits;
        this.values = Values;
    }

    generateDeck (): Deck {

        let newDeck: Deck = [];

        this.suits.forEach((suit: string) => {

            this.values.forEach((value: CardValue) => {
                newDeck.push({
                    suit,
                    value
                })
            })

        });

        return shuffle(newDeck);
    }



}

export default DeckController;