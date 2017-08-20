const initialState = {
	1: {
		id:1,
		name: "Apple",
		price: "50",
		picture: "http://media.istockphoto.com/photos/fresh-red-apples-on-white-background-picture-id183422512?k=6&m=183422512&s=612x612&w=0&h=BSvOL3aFruJVgjJ2pp_bfGFwUXFEm0KEkpeL4hBqZeE="
	},
	2: {
		id:2,
		name: "Orange",
		price: "30",
		picture: "https://s-media-cache-ak0.pinimg.com/originals/50/91/3e/50913eeb04768a5b1fa9985c16704d96.jpg"
	},
	3: {
		id:3,
		name: "Banana",
		price: "15",
		picture: "https://onehdwallpaper.com/wp-content/uploads/2016/05/Fresh-Fruit-Banana-HD-Wallpaper-624x452.jpg"
	},
	4: {
		id:4,
		name: "Papaya",
		price: "50",
		picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGrALJYnGQ1uHCZnHv257NccJzqEMzXD0Y4KqG-ybz1N7j0bGCizphH0",
		discount: "Three for the price of two"
	},
}

//when the products will be fetched from the back-end, the initial state will be an empty object and the action will be adding the products
export const products = (state=initialState,action) => {
	return state;
}