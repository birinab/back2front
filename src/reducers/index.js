const initialState = {
animal:{
	name:"Dog",
	latinName:"Canis lupus familiaris",
	dos:["lorem1","lorem2","lorem3"],
	donts:["lorem1","lorem2","lorem3"],
	
},
  
  
  

}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   

      
    default:
    return state;

}
};

export default rootReducer;