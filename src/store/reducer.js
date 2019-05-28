import * as types from './types'

//纯函数 == 不修改输入，输出可控，定返回

const reducer = (state,{type,payload}) => {
  // console.log('reducer',state,type,payload);
  // console.log(state)
  switch (type) {
    case types.VIEW_NAV:
      //payload 数据类型的校验
      return Object.assign({},state,{bNav:payload});
    case types.VIEW_FOOT:
      return {...state, bFoot:payload};
    case types.VIEW_LOADING:
      return {...state, bLoading:payload};
    case types.UPDATE_PRODUCT: 
      return {...state, list:payload};
    case types.UPDATE_PRODUCT2:
      return {...state, list2:payload};
    case types.CLEAR_PRODUCT:
      return {...state, [payload.dataName]:[]};
    case types.CLEAR_DETAIL:
      return {...state, page:[]};
    case types.UPDATE_PRODUCT: //要求payload过来的是个对象{type:xx,payload:{dataName,data}}==action
      return {...state, [payload.stateName]:payload.data};
    case types.CHECK_USER:
      return {...state, user:payload};
    case types.UPDATE_PAGE:
      return {...state,page:payload};
    case types.UPDATE_CLASSIFY:
      return {...state,classify:payload}
    case types.UPDATE_SUIT:
      return {...state,suit:payload};
    case types.UPDATE_CAR:
      return {...state,goods:payload}
    // case types.UPDATE_NUM:
    //   return {...state,goods:payload}



    case types.UPDATE_ADD:
      let goods2=state.goods;
      for(var i=0;i<goods2.length;i++){
        if(goods2[i].c_id==payload.cart_id){
          goods2[i].c_buy_num=payload.cart_clothe_num
        }
      }
      return {...state,goods:goods2}
    default:
      return state;
  }

};

export default reducer;