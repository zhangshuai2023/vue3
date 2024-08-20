import { ref, reactive, defineComponent } from "vue"
export default defineComponent({
  props:{
    toSetupTxsSon:String
  },
  setup(props, context){
    return ()=>{ // setup return 一个函数
      context.emit('setupTxsSon', 'i am setupTsxSon');
      return(
        <div>
        <h1>{ props.toSetupTxsSon }</h1>
      </div>
      )
    } 
  }
});