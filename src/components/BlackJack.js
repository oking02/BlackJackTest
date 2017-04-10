/**
 * Created by oking on 10/04/2017.
 */

// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Player, AppState, Deck } from '../types/types';
import  { PLAYING_STATUS } from '../types/types';
import { generateDeck } from '../action-creators/deck';
import { addCard } from '../action-creators/player';
import { findBackjackWinner } from '../card-utils/player-utils';

import { WelcomeHeader } from './WelcomeHeader';
import GamePlayer from './GamePlayer';

type State = {
    playing: boolean
}

type Props = {
    player: Player,
    dealer: Player,
    deck: Deck,
    generateDeck: () => Deck
}

class BlackJack extends Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            playing: false
        }

    }

    beginGame() {
        this.props.generateDeck();
        this.setState({playing: true});
    }

    resetGame() {
        this.setState({playing: false});
    }

    render () {

        let playing = this.state.playing;

        let player = this.props.player;
        let dealer = this.props.dealer;

        let playerStillPlaying = player.status === PLAYING_STATUS;
        let dealerStillPlaying = dealer.status === PLAYING_STATUS;

        let whoWon = '';

        if (!playerStillPlaying && !dealerStillPlaying) {
            whoWon = findBackjackWinner(player, dealer);
        }


        return (
            <div>
                {playing === false
                    ? (<WelcomeHeader begin={() => this.beginGame()}/>)
                    : (
                        <div className="game-container">
                            <h1>Welcome to Blackjack</h1>

                            <div className="players">
                                <GamePlayer isDealer={true}/>
                                <GamePlayer isDealer={false}/>
                            </div>

                            <h3>{whoWon}</h3>

                            <div>
                                <span className="reset-btn" onClick={() => { this.resetGame() }}>Reset</span>
                            </div>
                        </div>
                    )}
            </div>
        )

    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ generateDeck, addCard }, dispatch);
}

function mapStateToProps(state: AppState) {

    return {
        player: state.player,
        dealer: state.dealer
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlackJack);
