/**
 * Created by oking on 10/04/2017.
 */
// @flow

import { Suits, Values, PLAYING_STATUS, STUCK_STATUS, BUST_STATUS } from '../types/types';
import type { CardValue, Card, Deck, Action, Player } from '../types/types';
import { PLAYER_ADD_CARD, PLAYER_BUST, PLAYER_STICK, PLAYER_RESET } from '../actions/player';
import { addCardToPlayer } from '../card-utils/player-utils';

let intialState: Player = {
    cards: [],
    score: 0,
    status: PLAYING_STATUS,
    win: false
};

export default function playerReducer(state: Player = intialState, action: Action): Deck {

    switch (action.type) {

        case PLAYER_ADD_CARD:
            return addCardToPlayer(action.payload, state);

        case PLAYER_STICK:
            return Object.assign({}, state, {
                status: STUCK_STATUS
            });

        case PLAYER_BUST:
            return Object.assign({}, state, {
                status: BUST_STATUS
            });

        case PLAYER_RESET:
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

