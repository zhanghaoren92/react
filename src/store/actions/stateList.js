export const stateList=({url,type})=>dispatch=>{
    dispatch( {type:'VIEW_LOADING',payload:true});
    
    fetch(
        url,
        {
            method:'POST'
        }
        
    ).then(
        res=>res.json()
        
    ).then(
        data=>{
        dispatch({type:type,payload:data});
        dispatch({type:'VIEW_LOADING',payload:false});
        }
    );
}