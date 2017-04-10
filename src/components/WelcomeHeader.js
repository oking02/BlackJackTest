/**
 * Created by oking on 10/04/2017.
 */
import React, { Component } from 'react';

export const WelcomeHeader = (props) => {

    let begin = props.begin;

    return (
        <div className="welcome-header">
            <h1>Welcome to Blackjack</h1>

            <button onClick={begin} className="welcome-header__beginbtn">Begin Game</button>
        </div>
    )

};