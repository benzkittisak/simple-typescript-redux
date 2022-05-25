import { combineReducers } from "redux";
import repositoriesReducer from './repositories.reducer';


const reducer = combineReducers({
    repositories: repositoriesReducer
});

export default reducer;