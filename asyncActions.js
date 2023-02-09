/*
  - redux async actions template
*/

const { createStore } = require('redux')

// initial state
const initialSate = {
	loading: false,
	users: [],
	error: ''
}

// actions
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
    , FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
    , FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


// action creator
const fetchUserRequest = () => {
	return {
		type: FETCH_USERS_REQUESTED
	}
}
    , fetchUserSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCEEDED,
		payload: users
	}
}
    , fetchUserFailure = (error) => {
	return {
		type: FETCH_USERS_FAILED,
		payload: error
	}
}


// reducer
const reducer = (state = initialSate, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUESTED:
			return {
				...state,
				loading: true
			}
		case FETCH_USERS_SUCCEEDED:
			return {
				loading: false,
				users: action.payload,
				error: ''
			}
		case FETCH_USERS_FAILED:
			return {
				loading: false,
				users: [],
				error: action.payload
			}
		default:
			return state;
	}
}


// store logic
const store = createStore(reducer);

console.log(store.getState());