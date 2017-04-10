/**
 * Created by oking on 10/04/2017.
 */
import deck from './deck';
import player from './player';
import dealer from './dealer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    deck,
    player,
    dealer
});

export { rootReducer };