import Observer from './observer';
function observe (data){
    console.log("******observe*********")
    if(typeof data !== 'object' || data === null) return ;
    return new Observer(data);
}
export default observe;