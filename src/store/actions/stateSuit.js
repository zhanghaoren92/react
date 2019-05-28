export const stateSuit=({url,type})=>dispatch=>{
    dispatch( {type:'VIEW_LOADING',payload:true});
    // dispatch( {type:'VIEW_FOOT',payload:false});
    // console.log(url)
    fetch(
        url
        // baseUrl + url + '?dataName'+ dataName +'&_id'+id
    ).then(
        res=>res.json()
    )
    .then(
        data=>{
        dispatch({type:type,payload:data});
        dispatch({type:'VIEW_LOADING',payload:false});
        }
    );
  }