const initialState = {
animal:{
	name:"Dog",
	latinName:"Canis lupus familiaris",
	dos:["lorem1","lorem2","lorem3"],
	donts:["lorem1","lorem2","lorem3"],
	Kingdom:"lorem1",
   Phylum: "facts[3]",
   Class : "facts[4]",
   Order : "facts[5]",
   CommonName : "facts[6]",
   ScientificName : "facts[7]",
   Location :"facts[8]",
   Diet :"facts[9]",
   Size :"facts[10]",
   NumberOfSpicies :"facts[11]",
   AverageLifeSpan :"facts[12]",
   ConservationStatus :"facts[13]",
   Colour :"facts[14]",
   SkinType : "facts[15]",
   FavouriteFood :"facts[16]",
   Habitat :"facts[17]",
   AverageLitterSize : "facts[18]",
   MainPrey : "facts[19]",
   Predators : "facts[20]",
   SpecialFeatures : "facts[21]"

},
  

}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   case "ANIMALS":
    return Object.assign({},state, {animals:action.animals});

      
    default:
    return state;

}
};

export default rootReducer;