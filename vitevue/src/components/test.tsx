import { ref, reactive } from "vue"
const a=ref("hello");
const arr=reactive([1,2,3])
function Test() {
    return <div>
        <h1>{ a }</h1>
        {
            arr.map((item, index)=>{
                if(!(index/2)){
                    return <h2>{ item }</h2>
                }                
            })
        }
    </div>
}