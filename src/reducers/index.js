const initialState = {
	animal:{
		name: "Dog",
        Kingdom: "Animalia",
        latinName:"Canis lupus familiaris",
        Phylum: "Chordata",
        Class: "Mammalia",
        Order: "Carnivora",
        Family:"Canidae",
        Genus: "Canis",
        ScientificName: "Canis lupus familiaris",
        Type: "Mammal",
        Diet: "Carnivore",
        Size: "50cm (20in)",
        Weight:"30kg (65lbs)",
        TopSpeed: "50km/h (31mph)",
        Lifespan:"15 years",
        Lifestyle: "Solitary",
        dos: ["Pet", "Be nice and kind"],
        donts: ["Feed with sweets"]
    }


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