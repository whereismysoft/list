import { connect } from "react-redux";
import { createAction } from '../actions'
import * as constants from '../constants';

import App from './App';

const MapStateToProps = state => {
	return {
		cards: state.data
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
        unshiftLastCard: () => dispatch(createAction(constants.UNSHIFT_LAST_CARD)),
        pushFirstCard: () => dispatch(createAction(constants.PUSH_FIRST_CARD)),
        deleteFirstCard: () => dispatch(createAction(constants.DELETE_FIRST_CARD)),
        deleteLastCard: () => dispatch(createAction(constants.DELETE_LAST_CARD)),
        addNewItem: (item) => dispatch(createAction(constants.ADD_NEW_ITEM, item))
	}
}

export default connect(MapStateToProps, MapDispatchToProps)(App)