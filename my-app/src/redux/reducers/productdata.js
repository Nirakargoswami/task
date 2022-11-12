import { PRODUCT_DATA,ADD_ITEM,REMOVE_ITEM} from "../actions/types";
const initialState = {
  productdata : "",
  cartidtem: []
}

export default function (state = initialState, action){
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case PRODUCT_DATA:
            return {
              ...state,
              productdata: payload,
              
            };
            case ADD_ITEM:
            state.cartidtem.push(payload)
             
              return {
                ...state,
                
                
              };
              case REMOVE_ITEM:
                return {
                  ...state,
                  cartidtem : payload
                 
                  
                };
          
          default:
            return state;
    }
}