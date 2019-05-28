
import * as types from './type';

export let asyncActionList=(url,dispatch,type)=>{
    // return {type:"VIEW_LOADING",payload:true},
    dispatch({type:types.VIEW_LOADING,payload:true});
    fetch(
       url
    ).then(
        res=>res.json()
    ).then(
        data=>{      
            dispatch({type:types.VIEW_LOADING,payload:false});
            dispatch({type:type,payload:data})
        }
       
    )
};



export let asyncActionDetail=(url,dispatch,type,index)=>{
    fetch(
       url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            dispatch({type:type,payload:data[index]})
        }
       
    );
    return {type:types.VIEW_LOADING,payload:true}
}

export let asyncActionFollow=(url,dispatch,type,index)=>{
    fetch(
       url
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            dispatch({type:type,payload:data[index]})
        }
       
    );
    return {type:types.VIEW_LOADING,payload:true}
}


export let asyncActionAuth=(url,type,username,password)=>(dispatch,getState)=>{
    
 
        dispatch({type:types.VIEW_LOADING,payload:true});
        
        fetch(
            url
         ).then(
             res=>res.json()
         ).then(
             data=>{
                 dispatch({type:types.VIEW_LOADING,payload:false})
                 dispatch({type:type,payload:data})
             }
            
         );
    }

   
   
