import Vue from 'vue';

var vm = new Vue({
    el:'#app',
    data(){
        return {
            title:'this is title',
            info:{
                data:{
                    name:111
                }
            }
        }
    }
})
vm.info.data.name
// console.log(vm.title);