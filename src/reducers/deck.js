/**
 * Created by oking on 10/04/2017.
 */
// @flow

import { Suits, Values } from '../types/types';
import type { CardValue, Card, Deck, Action } from '../types/types';
import { SET_DECK } from '../actions/deck';

export default function deckReducer(state: Deck = [], action: Action): Deck {

    switch (action.type) {

        case SET_DECK:
            return action.payload.slice();

        default:
            return state;
    }

}