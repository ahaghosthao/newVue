import observe from "./observe";

function defineReactiveData(data,key,value){
    observe(value)
    Object.defineProperty(data,key,{
        get:function(){
            console.log('响应式数据')
            return value;
        },
        set:function(newValue){
            if(newValue = value) return ;
            value = newValue;
        }
    })

}
export default defineReactiveData