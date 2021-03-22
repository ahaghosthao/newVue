import { arrMethods } from './array';
import defineReactiveData from './defineReactive';
function Observer (data){
    console.log('******Observer data*********')
    if(Array.isArray(data) ){
        // 如果是数组的话，就需要重写对应的改变原数组的方法
        data.__proto__ = arrMethods;
        observeArr(data)
    }else{
        this.walk(data)
    }
}
Observer.prototype.walk = function(data){
    console.log("******walk data*********")
    var keys = Object.keys(data);

    for(var i = 0;i<keys.length;i++){
        var key = keys[i],
            value = data[key];
        defineReactiveData(data,key,value);
    }
}
export default Observer;