import * as actionTypes from '../action-types';

export const sortUp = (items) => {
  return {
      type: actionTypes.sortUp,
      payload: items
    }
}
export const sortDown = (items) => {
  return {
      type: actionTypes.sortDown,
      payload: items
    }
}
export const sortNamesUp = (items) => {
  return {
      type: actionTypes.sortNamesUp,
      payload: items
    }
}
export const sortNamesDown = (items) => {
  return {
      type: actionTypes.sortNamesDown,
      payload: items
    }
}
export const sortLastNamesUp = (items) => {
  return {
      type: actionTypes.sortLastNamesUp,
      payload: items
    }
}
export const sortLastNamesDown = (items) => {
  return {
      type: actionTypes.sortLastNamesDown,
      payload: items
    }
}
export const sortEmailUp = (items) => {
  return {
      type: actionTypes.sortEmailUp,
      payload: items
    }
}
export const sortEmailDown = (items) => {
  return {
      type: actionTypes.sortEmailDown,
      payload: items
    }
}
export const sortPhoneUp = (items) => {
  return {
      type: actionTypes.sortPhoneUp,
      payload: items
    }
}
export const sortPhoneDown = (items) => {
  return {
      type: actionTypes.sortPhoneDown,
      payload: items
    }
}