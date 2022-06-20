import {combineReducers} from 'redux-immutable';
import { reducer as recommendRenducer  } from '../pages/Discover/c-pages/recommend/store';
import { reducer as  playerReducer} from '../pages/player/store'; 
import { reducer as rankingReducer} from '../pages/Discover/c-pages/ranking/store'
import { reducer as songsReducer} from '../pages/Discover/c-pages/songs/store'
import { reducer as radioReducer } from '../pages/Discover/c-pages/djradio/store';
const cReducer=combineReducers({
  recommend:recommendRenducer,
  player:playerReducer,
  ranking:rankingReducer,
  songs:songsReducer,
  radio:radioReducer
 })
 export  default cReducer;
