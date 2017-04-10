/**
 * Created by oking on 10/04/2017.
 */
// @flow

import {Card, Suits, Values, Player, PLAYING_STATUS, BUST_STATUS, STUCK_STATUS} from '../types/types';
import { PLAYER_ADD_CARD, PLAYER_BUST, PLAYER_STICK, PLAYER_RESET } from '../actions/player';

export function addCardToPlayer(card: Card, player: Player): Player {

    let cards: Array<Card> = player.cards;
    cards.push(card);

    let newTotal = cards.reduce((sum: number, c: Card) => {
        let cardValue: CardValue = c.value;
        return sum + cardValue.value;
    }, 0);

    return {
        cards,
        score: newTotal,
        status: player.status,
        win: player.win
    }

}

export function findBackjackWinner(player: Player, dealer: Player): string {

    if (player.status === BUST_STATUS) {
        return 'Dealer Wins';
    } else {

            if (dealer.status === BUST_STATUS){
                return 'Player Wins';
            } else {

                if (player.score === dealer.score) {
                    return 'Draw'
                } else if (player.score > dealer.score) {
                    return 'Player Wins'
                } else {
                    return 'Dealer Wins'
                }
            }

    }

}