import * as types from './type';

let reducer= (state,action)=>{
   
   // console.log('reducer',state)
    let {type,payload}=action;

    switch(type){

        case types.VIEW_NAV:
            return Object.assign({},state,{
                bNav:payload
            });
        case types.VIEW_FOOT:
        return Object.assign({},state,{
            bFoot:payload
        });
        case types.VIEW_LOADING:
        return Object.assign({},state,{
            bLoading:payload
        });
        case types.UPDATE_HOME:
            return Object.assign({},state,{
                home:payload
            });
        case types.CLEAR_HOME:
            return Object.assign({},state,{
                home:[]
        });
        case types.UPDATE_FOLLOW:
        return Object.assign({},state,{
            follow:payload
        });
        case types.UPDATE_USER:
        return Object.assign({},state,{
            user:payload
        });
        case types.UPDATE_DETAIL:
        return Object.assign({},state,{
           detail:payload
        });
        case types.UPDATE_COLUMN:
        return Object.assign({},state,{
           column:payload
        });

        case types.ADD_ITEM:
        let newBuy=[...state.buycar]
        let opt={...payload}
        let hasThisGoods=false;
        newBuy.map((item,index)=>{
            if(item.id===opt.id){
                item.num++
                hasThisGoods=true
            }
        })
        if(!hasThisGoods){
            newBuy.push(opt);
            console.log(newBuy)
        }
        return Object.assign({},state,{
           buycar:newBuy
        });

        case types.CHANGE_ITEM:
        let newBuy1=[...state.buycar]
        let  change={...payload}  
        newBuy1.map((item,index)=>{     
            if(item.id===change.id){
              item.num+=change.num   
              if(item.num<=1){
                item.num=1
              }      
            }
          }) 
      return Object.assign({},state,{buycar:newBuy1})

        case types.REMOVE_ITEM:
        let newBuy2=[...state.buycar]
        let clear={...payload}
        newBuy2.map((item,index)=>{
            if(item.id===clear.id){
                newBuy2.splice(index,1)    
              }
        })
        return Object.assign({},state,{
           buycar: newBuy2
        });


        case types.CLEAR_ITEM:
        let newBuy3=[...state.buycar]
            newBuy3=[]
        return Object.assign({},state,{buycar:newBuy3});


        default :
        return state;   
    }   
}
export default reducer;