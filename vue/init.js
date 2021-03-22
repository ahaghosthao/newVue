import {proxyData} from './proxy';
import observe from './observe';
function initState(vm){
    console.log('******initState*********')
    var options = vm.$options;
    if(options.data){
        initData(vm);
    }
}

function initData(vm){
    console.log("******initData*********")
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'?data.call(vm):data||{}
    for(var key in data){
        proxyData(vm,'_data',key)
    }

    // 对数据进行观察
    observe(vm._data)
}
export {
    initState
}