const redux = require("redux")
const createStore = redux.createStore

const buy_cake = "BUY_CAKE"
function buyCake(){
    return {
        type : buy_cake,
        info : "first redux action"
    }
}

//initial state value
const initialState = {
    numOfCakes : 10
}

//reducer function with two arguments
const reducer = (state = initialState, action)=>{
    switch (action.type){
        case BUY_CAKE : 
            return {
                ...state,
                numOfCakes : state.numOfCakes-1
            };
        default : return state
    }

}