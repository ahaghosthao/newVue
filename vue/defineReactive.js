import observe from "./observe";

function defineReactiveData(data,key,value){
    observe(value);
    Object.defineProperty(data,key,{
        get:function(){
            console.log('响应式数据')
            return value;
        },
        set:function(newValue){
            if(newValue = value) return ;
            // 新赋值的数据也需要去观察一下。
            observe(value)
            value = newValue;
        }
    })

}
export default defineReactiveData