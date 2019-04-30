const changeImg = (imgIndex)=>{
    return {
      type: "CHANGEIMG",
      payload: imgIndex
    };
  }

  module.exports = changeImg;