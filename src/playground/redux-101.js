import { createStore } from 'redux';

const add = ({ a, b}) => {
  return a + b
}

console.log(add({a: 1, b: 12}))
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
})

const setCount = ({count} = {}) => ({
  type: "SET",
  count: count
})

const resetCount = () => ({
  type: "RESET"
})

// reducers

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      }
    case "RESET":
      return {
        count: state.count = 0
      }
    case "SET":
      return {
        count: action.count
      }
    default:
      return state;
  }
};


const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(setCount({ count: 1000 }));
store.dispatch(resetCount());
