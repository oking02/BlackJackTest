/**
 * Created by oking on 10/04/2017.
 */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Player, AppState, Deck, Card, Action } from '../types/types';
import {  PLAYING_STATUS, STUCK_STATUS, BUST_STATUS } from '../types/types';
import { addCard, setStick, setBust, reset } from '../action-creators/player';
import { setDeck } from '../action-creators/deck';

type Props = {
    player:  Player,
    deck: Deck,
    isDealer:  boolean,
    playerFinished?: boolean,
    playerScore?: number,
    addCard: (isDealer: boolean, card: Card) => Action,
    setStick: (isDealer: boolean) => Action,
    setBust: (isDealer: boolean) => Action,
    reset: (isDealer: boolean) => Action,
    setDeck: (deck: Deck) => Action
}

/**
 * Component Contains Logic for a single Player. Used for both player and dealer.
 *
 */
class GamePlayer extends Component {
    props: Props;

    constructor() {
        super();
    }

    hit () {
        let deck: Deck = this.props.deck;
        let cardToAdd: Card = deck.shift();
        this.props.setDeck(deck);
        this.props.addCard(this.props.isDealer, cardToAdd);
    }

    stick () {
        this.props.setStick(this.props.isDealer);
    }

    componentWillReceiveProps(props: Props, prevState: any) {
        if (props.player.score > 21 && props.player.status !== BUST_STATUS) {
            this.props.setBust(props.isDealer);
            return;
        }

        // This might be better handled outside the component.
        if (props.isDealer && props.player.status === PLAYING_STATUS && props.playerFinished) {

            // Stick if you are at 21.
            if (props.player.score === 21) {
                props.setStick(props.isDealer);
                return
            }

            // Stick if the player goes bust.
            if (props.playerScore > 21) {
                props.setStick(props.isDealer);
                return
            }

            let playerDiff = 21 - props.playerScore;
            let dealerDiff = 21 - props.player.score;

            // If you are closer than a stuck player, also stick. ELSE get card
            if (dealerDiff < playerDiff) {
                props.setStick(props.isDealer);
            } else {
                let deck: Deck = props.deck;
                let cardToAdd: Card = deck.shift();
                props.setDeck(deck);
                props.addCard(props.isDealer, cardToAdd);
            }

        }
    }

    // Set up the player initial hand. Different is you are a dealer.
    componentDidMount() {
        let deck: Deck = this.props.deck;
        if (this.props.isDealer) {
            let cardToAdd1: Card = deck.pop();
            this.props.addCard(this.props.isDealer, cardToAdd1);
        } else {
            let cardToAdd1: Card = deck.pop();
            let cardToAdd2: Card = deck.pop();
            this.props.addCard(this.props.isDealer, cardToAdd1);
            this.props.addCard(this.props.isDealer, cardToAdd2);
        }

        this.props.setDeck(deck);
    }

    componentWillUnmount() {
        this.props.reset(this.props.isDealer);
    }

    render () {

        let player: Player = this.props.player;

        return  (
            <div className="player">
                <header className="player__header">
                    {this.props.isDealer
                        ? <div>Dealer</div>
                        : <div>Player</div>}
                </header>

                <div className="player__cards">
                    <div className="player__cards__score">
                        <div>Cards: {player.cards.length}</div>
                        <div>Score: {player.score}</div>
                    </div>
                    <div className="player__cards__cards">
                        {player.cards.map((card: Card) => {
                            return <CardView key={`${card.suit}-${card.value.name}`} card={card}/>
                        })}
                    </div>
                </div>
                {this.props.player.status === PLAYING_STATUS
                ?   (
                        <div className="player__actions">
                            <button onClick={() => this.hit()} className="player__actions__button player__actions__button--green">Hit</button>
                            <button onClick={() => this.stick()} className="player__actions__button player__actions__button--grey">Stick</button>
                        </div>
                    )
                :
                    this.props.player.status === STUCK_STATUS
                        ?
                    (
                        <div>
                            <h3>Player Stuck With a score of {player.score}</h3>
                        </div>
                    ): (
                        <div>
                            <h3>Player Bust With a score of {player.score}</h3>
                        </div>
                    )}


            </div>
        )

    }

}

const CardView = (props) => {

    let card: Card = props.card;

    return (
        <div className="card">
            <div>{card.suit}</div>
            <div>{card.value.name}</div>
        </div>
    )

};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  addCard, setStick, setBust, setDeck, reset }, dispatch);
}

function mapStateToProps(state: AppState, ownProps: Props) {

    if (ownProps.isDealer) {
        return {
            player: state.dealer,
            deck: state.deck,
            isDealer: ownProps.isDealer,
            playerFinished: state.player.status !== PLAYING_STATUS,
            playerScore: state.player.score
        }
    } else {
        return {
            player: state.player,
            deck: state.deck,
            isDealer: ownProps.isDealer
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayer);
