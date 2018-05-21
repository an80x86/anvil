import { combineReducers } from 'redux';
import artists from './artist_reducer';
import menus from './menu_reducer';
import users from './user_reducer';

const rootReducer = combineReducers({
    artists, menus, users
})

export default rootReducer;
