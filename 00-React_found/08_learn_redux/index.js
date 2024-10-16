import store from './store/index.js'
import {addAction,subAction} from './store/actionCreators.js'
store.subscribe(()=>{
    console.log(store.getState().counter)
})
// store.dispatch(addAction(4))
// store.dispatch(subAction(2))
//计时-中间件
function dispatchAndLogging(action){
    console.log("前",action)
    store.dispatch(action)
    console.log("后",store.getState())
}
dispatchAndLogging(addAction(4))
dispatchAndLogging(addAction(2))