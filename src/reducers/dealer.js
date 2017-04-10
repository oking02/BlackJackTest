/**
 * Created by oking on 10/04/2017.
 */
// @flow

import { Suits, Values, PLAYING_STATUS, STUCK_STATUS, BUST_STATUS } from '../types/types';
import type { CardValue, Card, Deck, Action, Player } from '../types/types';
import { DEALER_ADD_CARD, DEALER_BUST, DEALER_STICK, DEALER_RESET } from '../actions/dealer';
import { addCardToPlayer } from '../card-utils/player-utils';

let intialState: Player = {
    cards: [],
    score: 0,
    status: PLAYING_STATUS,
    win: false
};

export default function dealerReducer(state: Player = intialState, action: Action): Deck {

    switch (action.type) {

        case DEALER_ADD_CARD:
            console.log(action.payload);
            return addCardToPlayer(action.payload, state);

        case DEALER_STICK:
            return Object.assign({}, state, {
                status: STUCK_STATUS
            });

        case DEALER_BUST:
            return Object.assign({}, state, {
                status: BUST_STATUS
            });

        case DEALER_RESET:
            return {
                cards: [],
                score: 0,
                status: PLAYING_STATUS,
                win: false
            };

        default:
            return state;
    }

}

