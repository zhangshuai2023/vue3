import { ref, reactive } from "vue"
function Test() {
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
export default Test