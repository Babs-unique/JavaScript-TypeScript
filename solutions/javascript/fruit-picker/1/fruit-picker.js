/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */
export function onSuccess() {
  notify({ message: 'SUCCESS' });
}

/**
 * @return void
 */
export function onError() {
  notify({ message: 'ERROR' })
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
/*   const query = {
  variety: string,
  quantity: number,
}; */
  order(query, onSuccessCallback, onErrorCallback)
  
}
  orderFromGrocer(
  { variety: 'pear', quantity: 12 },
    onSuccess,
     onError,
);

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
     const query = {
  variety: variety,
  quantity: quantity,
}; 
  orderFromGrocer(query, onSuccess , onError)
}
postOrder('peach', 100);
