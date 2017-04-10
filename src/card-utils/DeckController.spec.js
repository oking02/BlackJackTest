/**
 * Created by oking on 10/04/2017.
 */
// @flow

import DeckController from './DeckController';
import type { CardValue, Card, Deck } from '../types/types';
import { Suits, Values } from '../types/types';

test('Generate Deck Function', () => {
    let dc = new DeckController();

    let newDeck: Deck = dc.generateDeck();

    // Must be Array
    expect(Array.isArray(newDeck)).toBeTruthy();

    // Must be complete
    expect(newDeck.length).toBe(52);


    let spades: Array<Card> = newDeck.filter((card: Card) => {
        return card.suit === 'Spade';
    });

    let hearts: Array<Card> = newDeck.filter((card: Card) => {
        return card.suit === 'Heart';
    });

    let diamonds: Array<Card> = newDeck.filter((card: Card) => {
        return card.suit === 'Diamond';
    });

    let clubs: Array<Card> = newDeck.filter((card: Card) => {
        return card.suit === 'Clubs';
    });

    expect(spades.length).toBe(13);
    expect(hearts.length).toBe(13);
    expect(diamonds.length).toBe(13);
    expect(clubs.length).toBe(13);

    let twos: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Two';
    });

    let threes: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Three';
    });

    let fours: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Four';
    });

    let fives: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Five';
    });

    let sixes: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Six';
    });

    let sevens: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Seven';
    });

    let eights: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Eight';
    });

    let nines: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Nine';
    });

    let tens: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Ten';
    });

    let jacks: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Jack';
    });

    let queens: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Queen';
    });

    let kings: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'King';
    });

    let aces: Array<Card> = newDeck.filter((card: Card) => {
        return card.value.name === 'Ace';
    });

    expect(twos.length).toBe(4);
    expect(threes.length).toBe(4);
    expect(fours.length).toBe(4);
    expect(fives.length).toBe(4);
    expect(sixes.length).toBe(4);
    expect(sevens.length).toBe(4);
    expect(eights.length).toBe(4);
    expect(nines.length).toBe(4);
    expect(tens.length).toBe(4);
    expect(jacks.length).toBe(4);
    expect(queens.length).toBe(4);
    expect(kings.length).toBe(4);
    expect(aces.length).toBe(4);

});