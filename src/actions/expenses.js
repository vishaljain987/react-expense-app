import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => {
  return async (dispatch, getState)=>{
    const uid = getState().auth.uid;
    const response = await database.ref(`users/${uid}/expenses`).push({description, note, amount, createdAt});
    console.log('addExpense....', response);
    dispatch({
      type: 'ADD_EXPENSE',
      expense: {
        id: response.key,
        description,
        note,
        amount,
        createdAt
      }
    })
  }
};

//SET_EXPENSE
export const setExpense = ()=>{
  return async (dispatch, getState)=>{
    const uid = getState().auth.uid;
    const response = await database.ref(`users/${uid}/expenses`).once('value');
    const expenses = [];
    response.forEach(childSnapShot=>{
      expenses.push({id:childSnapShot.key, ...childSnapShot.val()});
    })
    console.log('Inside setExpense...',expenses.length);
    dispatch({type:'SET_EXPENSE', expenses});
  }
}
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => {
  return async (dispatch, getState)=>{
    const uid = getState().auth.uid;
    const response = await database.ref(`users/${uid}/expenses/${id}`).remove();
    dispatch({type: 'REMOVE_EXPENSE', id});
  }
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return async (dispatch, getState)=>{
    const uid = getState().auth.uid;
    const response = await database.ref(`users/${uid}/expenses/${id}`).update(updates);
    dispatch({type: 'EDIT_EXPENSE', id, updates});
  }
};
