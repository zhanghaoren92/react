
export const detail = ({url,dataName,id,type,stateName}) => dispatch=>{
  // baseUrl = https://uncle9.top
  // url /api/detail
  // 必选_id=5c98d2ca47e42666660c2847
  // 必传 dataName=follow

  dispatch( {type:'VIEW_LOADING',payload:true});

  fetch(
    baseUrl + url + '?dataName'+ dataName +'&_id'+id
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:type,payload:{stateName,data}});
      dispatch({type:'VIEW_LOADING',payload:false});
    }
  );
};