/* 

-redux template
-redux middleware, applyMiddleware, redux-logger, 

*/


const { createStore, bindActionCreators, combineReducers, applyMiddleware } = require('redux')
		, logger = require('redux-logger').createLogger()

// actions
const CAKE_ORDERED = 'CAKE_ORDERED'
    , CAKE_RESTOCKING = 'CAKE_RESTOCKING'
    , ICECREAM_ORDERED = 'ICECREAM_ORDERED'
    , ICECREAM_RESTOCKING = 'ICECREAM_RESTOCKING'


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
const initialCakeState = {
	numOfCakes: 10,
	numOfIceCreams: 20
}
const initialIceCreamState = {
	numOfCakes: 10,
	numOfIceCreams: 20
}


// reducer func
const cakeReducer = (state = initialCakeState, action) => {
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

const IceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
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

// ===================================
// store logics
// ===================================

// combine reducer
const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: IceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => {})  

// console.log('updated state', store.getState())

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const action = bindActionCreators(
	{ orderCake, restockCake, orderIceCream, restockIceCream },
	store.dispatch
)

action.orderCake()
// action.orderCake()
// action.orderCake()
// action.restockCake(3)
// action.orderIceCream()
// action.orderIceCream()
// action.orderIceCream()
// action.restockIceCream(3)

unsubscribe();
