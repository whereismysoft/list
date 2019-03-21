import { connect } from "react-redux";

import App from './App';

const MapStateToProps = state => {
	return {
		cards: state.data
	}
}

const MapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(MapStateToProps, MapDispatchToProps)(App)