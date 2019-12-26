import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';

import api from '../../../services/api';

import {addToCartSuccess, updateAmountSuccess} from './actions';

function* addToCart({id}) {
  // this is a generator
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id),
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    console.tron.log('mensagem');
    showMessage({
      message: 'O produto não está disponível na quantidade desejada',
      type: 'warn',
    });
    return;
  }
  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: response.data.price,
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({id, amount}) {
  if (amount <= 0) return;

  // const product = yield select(state => state.cart.find(p => p.id === id));

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    showMessage({
      message: 'O produto não está disponível na quantidade desejada',
      type: 'warn',
    });
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
