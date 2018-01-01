const reducer = (state=null,action)=>{
    if(action.type == "CHANGEIMG" || action.type == "CHANGETONULL"){
      return action.payload;
    }else return state;
  }

module.exports = reducer;