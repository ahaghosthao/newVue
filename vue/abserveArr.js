import observe from "./observe";

function abserveArr(arr){
    for(var i =0 ;i<arr.length;i++){
        observe(arr[i])
    }
}
export default abserveArr;