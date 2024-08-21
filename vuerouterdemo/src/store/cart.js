// 两种写法，组合式 api 和选项式 api
import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'

// 选项式
/*
export const useCartStore = defineStore("cart", {
  state: ()=>{ // cart 状态管理用到的一些 state
    return{
      cartList:[],
    }
  },
  getters:{ //类似计算属性
    allNum(){
      let _allNum = 0;
      this.cartList.forEach((item, index)=>{
        _allNum += item.num;
      });
    }
  },
  action:{
    addCartNum(goods){
      let _index=-1;
      this.cartList.forEach((item, index)=>{
        if(item.id == goods.id){
          _index=index;
        }
      });
      if(_index != -1){
        this.cartList[_index].num++;
      }else{
        goods.num = 1;
        this.cartList.push(goods);
      }
    },
    minusCartNum(id){
      this.cartList.forEach((item, index)=>{
        if(item.id == id){
          item.num --;
          if(item.num <= 0){
            this.cartList.splice(index, 1);
            return;
          }
        }
      });
    }
  }
});

*/

// 组合式

export const useCartStore = defineStore("cart", ()=>{
  let cartList = reactive([]);
  function addCartNum(goods){
    let _index=-1;
    cartList.forEach((item, index)=>{
      if(item.id == goods.id){
        _index=index;
      }
    });
    if(_index != -1){
      this.cartList[_index].num++;
    }else{
      goods.num = 1;
      this.cartList.push(goods);
    }
  };
  function minusCartNum(id){
    cartList.forEach((item, index)=>{
      if(item.id == id){
        item.num --;
        if(item.num <= 0){
          this.cartList.splice(index, 1);
          return;
        }
      }
    });
  };
  let allNum = computed(()=>{
    let _allNum = 0;
    cartList.forEach((item, index)=>{
      _allNum += item.num;
    });
    return _allNum;
  });
  return {cartList, addCartNum, minusCartNum, allNum};
});