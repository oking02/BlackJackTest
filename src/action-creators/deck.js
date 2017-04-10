/**
 * Created by oking on 10/04/2017.
 */

// @flow

import DeckController from '../card-utils/DeckController';
import type { CardValue, Card, Deck, Action } from '../types/types';
import { SET_DECK } from '../actions/deck';

export function generateDeck(): Action {
    let dc = new DeckController();

    return {
        type: SET_DECK,
        payload: dc.generateDeck()
    }
}

export function setDeck(deck: Deck): Action {
    return {
        type: SET_DECK,
        payload: deck
    }
}