/**
 * Created by oking on 10/04/2017.
 */

// @flow

import { Card, Suits, Values, Player, PLAYING_STATUS, STUCK_STATUS, BUST_STATUS } from '../types/types';
import { addCardToPlayer, findBackjackWinner } from './player-utils';

test("Add Card To Player Function", () => {

    let card1: Card = {
        suit: 'Heart',
        value: {
            name: "Two",
            value: 2
        }
    };

    let card2: Card = {
        suit: 'Diamond',
        value: {
            name: "King",
            value: 10
        }
    };

    let card3: Card = {
        suit: 'Spade',
        value: {
            name: "Seven",
            value: 7
        }
    };

    let player: Player = {
        cards: [card1, card2],
        status: PLAYING_STATUS,
        score: 12,
        win: false
    };

    let updatePlayer = addCardToPlayer(card3, player);

    expect(updatePlayer.cards.length).toBe(3);
    expect(updatePlayer.score).toBe(19);


});

test("Find Blackjack Winner Function Draw", () => {

    let player: Player = {
        cards: [],
        status: STUCK_STATUS,
        score: 21,
        win: false
    };

    let dealer: Player = {
        cards: [],
        status: STUCK_STATUS,
        score: 21,
        win: false
    };

    expect(findBackjackWinner(player, dealer)).toBe("Draw")
});

test("Find Blackjack Winner Function Player Win", () => {

    let player: Player = {
        cards: [],
        status: STUCK_STATUS,
        score: 16,
        win: false
    };

    let dealer: Player = {
        cards: [],
        status: STUCK_STATUS,
        score: 12,
        win: false
    };

    expect(findBackjackWinner(player, dealer)).toBe("Player Wins")
});

test("Find Blackjack Winner Function Dealer Win", () => {

    let player: Player = {
        cards: [],
        status: STUCK_STATUS,
        score: 16,
        win: false
    };

    let dealer: Player = {
        cards: [],
        status: STUCK_STATUS,
        score: 20,
        win: false
    };

    expect(findBackjackWinner(player, dealer)).toBe("Dealer Wins")
});

test("Find Blackjack Winner Function Dealer Win", () => {

    let player: Player = {
        cards: [],
        status: BUST_STATUS,
        score: 27,
        win: false
    };

    let dealer: Player = {
        cards: [],
        status: STUCK_STATUS,
        score: 20,
        win: false
    };

    expect(findBackjackWinner(player, dealer)).toBe("Dealer Wins")
});

test("Find Blackjack Winner Function Player Win 2", () => {

    let player: Player = {
        cards: [],
        status: STUCK_STATUS,
        score: 18,
        win: false
    };

    let dealer: Player = {
        cards: [],
        status: BUST_STATUS,
        score: 27,
        win: false
    };

    expect(findBackjackWinner(player, dealer)).toBe("Player Wins")
});