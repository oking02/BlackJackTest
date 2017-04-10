/**
 * Created by oking on 10/04/2017.
 */
// @flow

import { createStore } from 'redux';
import { rootReducer } from './reducers';


export default () => {
    return createStore(rootReducer)
}