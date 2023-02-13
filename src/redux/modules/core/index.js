import {combineActions, handleActions} from 'redux-actions';

import {
  getMenuListRequest,
  getMenuListSuccess,
  getMenuListFailed,
  createOrderRequest,
  createOrderSuccess,
  createOrderFailed,
} from './actions';

const defaultState = {
  loading: false,
  error: null,
  menuList: null,
};

export default handleActions(
  {
    [combineActions(getMenuListRequest, createOrderRequest)]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [getMenuListSuccess]: (state, {payload}) => ({
      ...state,
      loading: false,
      menuList: payload,
    }),
    [createOrderSuccess]: (state, {payload}) => ({
      ...state,
      loading: false,
    }),
    [combineActions(getMenuListFailed, createOrderFailed)]: (
      state,
      {payload},
    ) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  defaultState,
);
