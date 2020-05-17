import {
  SET_SHOP_CATEGORIES,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCT_WTIH_CATEGORY_ID
} from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  productsSelected: [],
  products: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SHOP_CATEGORIES:
      const categories = action.payload;
      return {
        ...state,
        categories
      }
    case SET_SHOP_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case FILTER_PRODUCT_WTIH_CATEGORY_ID:
      console.log(action.payload);
      return {
        ...state,
        // selectedCategoryId
      }
    default: return state;
  }
}