import { ref, reactive } from "vue"
type propsType = {
  toTxsSon: String
}
// 函数形式的组件
function Test(props: propsType) {
    return <div>
        <h1>{ props.toTxsSon }</h1>
    </div>
}
export default Test