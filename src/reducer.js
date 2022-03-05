export const initialState = {
basket: [],
user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);
//its basically incrementing all of the prices inside of the basket and start to 0 and it returns that number

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER": // only purpose is too se user logged in or logged out
        return {
            ...state,
            user: action.user,
        }
        case 'ADD_TO_BASKET':
     // Logic to adding item to basket
     return {
          ...state, 
          basket: [...state.basket, action.item], 
        }; 
        //This whole return statement means first you returning the current state and adding item with the current state
     
     case 'REMOVE_FROM_BASKET':
         //Logic for Removing item from basket

         //we cloned the basket
        let newBasket =  [...state.basket];

        
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
            );

        if(index >= 0) {
            //item exist in basket, remove it...
            newBasket.splice(index, 1);
            
        } else {
            console.warn(
                `Cant remove product (id: ${action.id}) as its not in basket`
            );
        }
         
         return { 
             ...state,
              basket: newBasket, 
            }
         
         default:
             return state;
    }
};

export default reducer;