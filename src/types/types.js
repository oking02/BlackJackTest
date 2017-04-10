/**
 * Created by oking on 10/04/2017.
 */
// @flow
    
    /*
        Given more time i would probably use something like immutable.js
        for the data structures.

        Should really seperate these out
     */
    
export const Suits: Array<string> = ["Spade", "Heart", "Diamond", "Clubs"];

export type CardValue = {
    name: string,
    value: number
}

export const Values: Array<CardValue> = [
    {name: "Two", value: 2},
    {name: "Three", value: 3},
    {name: "Four", value: 4},
    {name: "Five", value: 5},
    {name: "Six", value: 6},
    {name: "Seven", value: 7},
    {name: "Eight", value: 8},
    {name: "Nine", value: 9},
    {name: "Ten", value: 10},
    {name: "Jack", value: 10},
    {name: "Queen", value: 10},
    {name: "King", value: 10},
    {name: "Ace", value: 1}
];

export type Card = {
    suit: string,
    value: CardValue
}

export type Deck = Array<Card>

export type Action = {
    type: string,
    payload?: any
}

export type Player = {
    cards: Array<Card>,
    score: number,
    status: string,
    win: boolean
}

export type AppState = {
    deck: Deck,
    player: Array<Card>,
    dealer: Array<Card>
}

export const PLAYING_STATUS = 'PLAYING_STATUS';
export const STUCK_STATUS = 'STUCK_STATUS';
export const BUST_STATUS = 'BUST_STATUS';
