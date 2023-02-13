import {createAction} from 'redux-actions';

import {GET_MENU_LIST, CREATE_ORDER} from './actionTypes';

export const getMenuListRequest = createAction(GET_MENU_LIST.REQUEST);
export const getMenuListSuccess = createAction(GET_MENU_LIST.SUCCESS);
export const getMenuListFailed = createAction(GET_MENU_LIST.FAILED);

export const createOrderRequest = createAction(CREATE_ORDER.REQUEST);
export const createOrderSuccess = createAction(CREATE_ORDER.SUCCESS);
export const createOrderFailed = createAction(CREATE_ORDER.FAILED);
