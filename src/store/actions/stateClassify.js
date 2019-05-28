export const stateClassify=({url,id,type})=>dispatch=>{
    dispatch( {type:'VIEW_LOADING',payload:true});

    fetch(
        url+'?classify_id='+id
        
    ).then(
        res=>res.json()
        
    ).then(
        data=>{
        dispatch({type:type,payload:data});
        dispatch({type:'VIEW_LOADING',payload:false});
        }
    );
}