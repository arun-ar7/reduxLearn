const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const buy_cake = "BUY_CAKE";
const buy_ice_cream = "BUY_ICE_CREAM";
function buyCake() {
  return {
    type: buy_cake,
    info: "first redux action",
  };
}
function buyIceCreams() {
  return {
    type: buy_ice_cream,
    info: "second redux action",
  };
}

//initial state value

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

//reducer function with two arguments
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case buy_cake:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case buy_ice_cream:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case buy_cake:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case buy_ice_cream:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial State : ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state : ", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();
store.dispatch(buyCake());
