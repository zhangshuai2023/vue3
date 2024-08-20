import { ref, reactive, defineComponent } from "vue"

// 在 .tsx 中 使用 defineComponent 
export default defineComponent({ // 需要暴露出去
  setup(){
    const num1 = ref(1);
    const arr = reactive([1,2,3]);
    const obj = reactive({
      c: 333,
      d: 444
    });
    setTimeout(()=>{
      num1.value = 99;
    }, 1000);

    return <div>
            <h1>{ num1.value }</h1>
            <h2>{ obj.c }</h2>
    </div>
  }
})