export const stateAdd=({url,id,type})=>dispatch=>{
    // dispatch( {type:'VIEW_LOADING',payload:true});
    fetch(
        url+'?c_id='+id
        // baseUrl + url + '?dataName'+ dataName +'&_id'+id
    ).then(
        res=>res.json()
    )
    .then(
        data=>{
        dispatch({type:type,payload:data});
        // dispatch({type:'VIEW_LOADING',payload:false});
        }
    );
  }