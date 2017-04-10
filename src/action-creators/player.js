/**
 * Created by oking on 10/04/2017.
 */

// @flow

import type { Player, AppState, Deck, Card, Action } from '../types/types';
import { DEALER_ADD_CARD, DEALER_BUST, DEALER_STICK, DEALER_RESET } from '../actions/dealer';
import { PLAYER_ADD_CARD, PLAYER_BUST, PLAYER_STICK, PLAYER_RESET } from '../actions/player';

export function addCard (isDealer: boolean, card: Card):  Action {

    // Quite Hacky need rethinking
    if (card.value.name === "Ace") {
        let isOne = window.confirm("You  have drawn an ace.\nClick ok to use the value 1\nClick cancel to use the value 11");

        if (isOne) {
            card.value.value = 1;
        } else {
            card.value.value = 11;
        }

    }

    if (isDealer) {
        return {
            type: DEALER_ADD_CARD,
            payload: card
        }
    }  else {
        return {
            type: PLAYER_ADD_CARD,
            payload: card
        }
    }
}

export function setStick(isDealer: boolean):  Action  {
    if (isDealer) {
        return {
            type: DEALER_STICK,
        }
    }  else {
        return {
            type: PLAYER_STICK,
        }
    }
}

export function setBust(isDealer: boolean):  Action  {
    if (isDealer) {
        return {
            type: DEALER_BUST,
        }
    }  else {
        return {
            type: PLAYER_BUST,
        }
    }
}

export function reset(isDealer: boolean):  Action  {
    if (isDealer) {
        return {
            type: DEALER_RESET,
        }
    }  else {
        return {
            type: PLAYER_RESET,
        }
    }
}