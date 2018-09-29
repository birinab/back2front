const initialState = {
  
  auth : false,
  

}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_AUTH":
    return Object.assign({},state, {auth:action.flag});

      
    default:
    return state;

}
};

export default rootReducer;