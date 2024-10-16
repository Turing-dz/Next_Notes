//1.yarn init -y
//2.yarn add redux
//3. store(reducer)------------>reducer(state,action)-------->action
const redux=require('redux');

//1.reducer(state,action)
function reducer(state={counter:0},action){
    switch(action.type){
        case 'INCREMENT':
            return {...state,counter:state.counter+1}
        case 'DECREMENT':
            return {...state,counter:state.counter-1}
        case 'ADD_NUMBER':
            return {...state,counter:state.counter+action.num}
        case 'SUB_NUMBER':
            return {...state,counter:state.counter-action.num}
    }
}
//2.store(reducer)
const store=redux.createStore(reducer)
//3.action(type,...params)
const action1={type:"INCREMENT"}
const action2={type:"DECREMENT"}
const action3={type:"ADD_NUMBER",num:6}
const action4={type:"SUB_NUMBER",num:8}

//subscribe
store.subscribe(()=>{
    console.log(store.getState().counter)
})


//4.dispatch
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);