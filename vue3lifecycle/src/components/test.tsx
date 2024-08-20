import { ref, reactive } from "vue"
import fnPointDiv from "./fnPointDiv";
function Test() {
  /*
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
    */

    return <div>
      { fnPointDiv({one: <div>hello tsx</div>}) }
    </div>
}
export default Test