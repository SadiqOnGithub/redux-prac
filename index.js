/* 

-redux template
-multiple actions in single reducer

*/


const redux = require('redux');
const { createStore, bindActionCreators } = redux;

// actions
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKING = 'CAKE_RESTOCKING';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKING = 'ICECREAM_RESTOCKING';

// action creator
function orderCake(qty = 1) {
	return {
		type: CAKE_ORDERED,
		payload: qty
	}
}

function restockCake(qty = 1) {
	return {
		type: CAKE_RESTOCKING,
		payload: qty
	}
}

function orderIceCream(qty = 1) {
	return {
		type: ICECREAM_ORDERED,
		payload: qty
	}
}

function restockIceCream(qty = 1) {
	return {
		type: ICECREAM_RESTOCKING,
		payload: qty
	}
}

// initial state
const initialState = {
	numOfCakes: 10,
	numOfIceCreams: 20
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
		case ICECREAM_ORDERED:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1
			}
		case ICECREAM_RESTOCKING:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams + action.payload
			}
		default:
			return state
	}
}


const store = createStore(reducer);

console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const action = bindActionCreators(
	{ orderCake, restockCake, orderIceCream, restockIceCream },
	store.dispatch
)

action.orderCake()
action.orderIceCream()
action.orderCake()
action.orderIceCream()
action.orderCake()
action.orderIceCream()
action.restockCake(3)
action.restockIceCream(3)

unsubscribe();
