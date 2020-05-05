import axios from 'axios';
import { ICrudGetAllAction } from 'react-jhipster';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IProduct } from 'app/shared/model/product.model';

export const ACTION_TYPES = {
  GET_PRODUCTS: 'product/GET_PRODUCTS',
  ERROR_MESSAGE: 'authentication/ERROR_MESSAGE'
};

const initialState = {
  loading: false,
  products: [] as any,
  errorMessage: null as string // Errors returned from server side
};

export type ProductState = Readonly<typeof initialState>;

// Reducer

export default (state: ProductState = initialState, action): ProductState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_PRODUCTS):
      return {
        ...state,
        loading: true
      };
    case FAILURE(ACTION_TYPES.GET_PRODUCTS):
      return {
        ...initialState,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.GET_PRODUCTS):
      return {
        ...state,
        loading: false,
        products: action.payload.data
      };

    default:
      return state;
  }
};

const apiUrl = 'services/products/api/products';

export const getProducts: ICrudGetAllAction<IProduct> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.GET_PRODUCTS,
    payload: axios.get<IProduct>(requestUrl)
  };
};
