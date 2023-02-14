import {takeLatest, put, call} from 'redux-saga/effects';
import Toast from 'react-native-toast-message';

import {apiClient} from '../../../services/ApiClient';

import {
  getMenuListRequest,
  getMenuListSuccess,
  getMenuListFailed,
  createOrderRequest,
  createOrderSuccess,
  createOrderFailed,
} from './actions';

// Get menu list
function* getMenuListWorker() {
  try {
    const response = yield call(() =>
      apiClient.get('/33af17a7-9985-4dc8-a3ca-436fb23f3c6a'),
    );
    const {data} = response;
    yield put(getMenuListSuccess(data));
  } catch (err) {
    Toast.show({type: 'error', text1: 'Error', text2: err.message});
    yield put(getMenuListFailed(err));
  }
}

// Create order
function* createOrderWorker({payload}) {
  try {
    const {menu} = payload;

    const response = yield call(() =>
      apiClient.post('/8ab81728-b62c-44f2-bce3-1d118502d405', {
        menu,
      }),
    );
    const {data} = response;
    Toast.show({
      type: 'success',
      text1: 'Success 👋',
      text2: 'The menu is ordered successfully 🍔',
    });
    yield put(createOrderSuccess(data));
  } catch (err) {
    Toast.show({type: 'error', text1: 'Error', text2: err.message});
    yield put(createOrderFailed(err));
  }
}

export default function* () {
  yield takeLatest(getMenuListRequest, getMenuListWorker);
  yield takeLatest(createOrderRequest, createOrderWorker);
}
