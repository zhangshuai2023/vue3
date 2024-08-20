import { ref, reactive, defineComponent } from "vue"
export default defineComponent({
  props:{
    toSetupTxsSon:String
  },
  setup(props){
    return ()=>{ // setup return 一个函数
      return(
        <div>
        <h1>{ props.toSetupTxsSon }</h1>
      </div>
      )
    } 
  }
});