/* 

-redux templates
-immer library example

*/


const { createStore } = require('redux');;
const { produce } = require('immer');

const initialState = {
	count: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return produce(state, draft => {
				draft.count++
			})
		case 'DECREMENT':
			return produce(state, draft => {
				draft.count--
			})
		default:
			return state
	}
}

const store = createStore(reducer)

console.log(store.getState());