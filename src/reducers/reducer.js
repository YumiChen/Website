const reducer = (state=null,action)=>{
    return (action.payload === null || action.payload)?action.payload:state;
  }

module.exports = reducer;