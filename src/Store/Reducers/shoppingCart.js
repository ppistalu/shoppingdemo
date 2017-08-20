export const shoppingCart = (state={},action) => {
	switch(action.type){
		case('add'):
			let newState = {...state};
			if(newState[action.id]){
				newState[action.id]={quatity:action.qty+newState[action.id]["quatity"]}
				console.log(newState[action.id]["quatity"])
			} else{
				newState[action.id]={quatity:action.qty}
			}
			return newState;
		default: 
			return state;
	}
}