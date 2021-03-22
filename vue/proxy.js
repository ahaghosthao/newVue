/**
 * 实现 vm.xxx 实例中的 data 中的对应的 xxx 的数据
 * @param {} vm 
 * @param {*} target 
 * @param {*} key 
 */
function proxyData(vm,target,key){
    console.log("******proxyData*********")
    Object.defineProperty(vm,key,{
        get:function(){
            return vm[target][key]
        },
        set:function(newValue){
            vm[target][key] = newValue; 
        } 
    })
}

export {
    proxyData
}