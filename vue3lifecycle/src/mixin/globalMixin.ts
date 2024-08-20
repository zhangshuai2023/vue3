import { ref,onMounted } from "vue";
export let popState=ref(true);
export function popClose(){
  popState.value=false;
}
export function globalMixin(){
  onMounted(()=>{
    console.log("请求了");
  })
}
