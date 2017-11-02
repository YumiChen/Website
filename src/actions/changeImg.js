const changeImg = (event)=>{
    let img = event.target.getAttribute("data-key");
    return {
      type: "CHANGEIMG",
      payload: img
    };
  }

  module.exports = changeImg;