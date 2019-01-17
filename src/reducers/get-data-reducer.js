import * as actionTypes from '../action-types';

export default ( state = {} , action ) => {
  switch(action.type){
    case actionTypes.getData:
      return {
          ...state,
          items: [...action.payload]
      };
    case actionTypes.sortUp:
        return {
          sortedUp: true ,
          items: action.payload.items.sort( (a,b) => {
            return a.id - b.id
          })
        };
    case actionTypes.sortDown:
      return {
        sortedDown: true ,
        items: action.payload.items.sort( (a,b) => {
          return b.id - a.id
        })
      };
    case actionTypes.sortNamesUp: 
      return {
        sortedByNamesUp: true , 
        items: action.payload.items.sort( (a,b) => {
          return  a.firstName.localeCompare(b.firstName)
        })
      }
    case actionTypes.sortNamesDown: 
      return {
        sortedByNamesDown: true , 
        items: action.payload.items.sort( (a,b) => {
          return  b.firstName.localeCompare(a.firstName)
        })
      }
    case actionTypes.sortLastNamesUp: 
      return {
        sortedByLastNamesUp: true , 
        items: action.payload.items.sort( (a,b) => {
          return  a.lastName.localeCompare(b.lastName)
        })
      }
    case actionTypes.sortLastNamesDown: 
      return {
        sortedByLastNamesDown: true , 
        items: action.payload.items.sort( (a,b) => {
          return  b.lastName.localeCompare(a.lastName)
        })
      }
    case actionTypes.sortEmailUp: 
      return {
        sortedByEmailUp: true , 
        items: action.payload.items.sort( (a,b) => {
          return  a.email.localeCompare(b.email)
        })
      }
    case actionTypes.sortEmailDown: 
      return {
        sortedByEmailDown: true , 
        items: action.payload.items.sort( (a,b) => {
          return  b.email.localeCompare(a.email)
        })
      }
    case actionTypes.sortPhoneUp: 
      return {
        sortedByPhoneUp: true , 
        items: action.payload.items.sort( (a,b) => {
          return  a.phone.localeCompare(b.phone)
        })
      }
    case actionTypes.sortPhoneDown: 
      return {
        sortedByPhoneDown: true , 
        items: action.payload.items.sort( (a,b) => {
          return  b.phone.localeCompare(a.phone)
        })
      }
    default: 
      return state;
  }
}