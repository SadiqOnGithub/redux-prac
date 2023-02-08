const redux = require('redux');
const createStore = redux.createStore;

// actions
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKING = 'CAKE_RESTOCKING';

// action creator
function orderCake() {
	return {
		type: CAKE_ORDERED,
		payload: 1
	}
}

function restockCake(qty = 1) {
	return {
		type: CAKE_RESTOCKING,
		payload: qty
	}
}

// initial state
const initialState = {
	numOfCakes: 10,
	anotherProp: 0
}

// reducer func
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1
			}
		case CAKE_RESTOCKING:
			return {
				...state,
				numOfCakes: state.numOfCakes + action.payload
			}
		default:
			return state
	}
}


const store = createStore(reducer);

console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))
unsubscribe();
