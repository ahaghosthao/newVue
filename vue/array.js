import abserveArr from "./abserveArr";
import ARR_METHODS from "./config";

var originMethods = Array.prototype;
var arrMethods = Object.create(originMethods);

ARR_METHODS.map(function(m) {
    arrMethods[m] = function(){
        var args = Array.prototype.slice.call(arguments);
        var result = originMethods[m].apply(this, args);
        var newArr;
        switch (m) {
            case 'push':
            case 'unshift':
                newArr = args;
                break;
            case 'splice':
                newArr = args.slice(2);
                break;
            default:
                break;
        }
        newArr && abserveArr(newArr);
        return result;
    }
})

export {
    arrMethods
}