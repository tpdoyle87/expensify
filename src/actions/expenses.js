import database  from '../firebase/firebase';

// component calls action generator
// action generator returns object
// componnent dispatches object
// return store changes

// component calls action generator
// action generator returns a function
// componnent dispatches function (?)
// function runs ( has the ability to dispatch other actions and do whatever it wants)

// Add_expense
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {description, note, amount, createdAt}
    database.ref('expenses').push(expense).then((snapshot) => {
      dispatch(addExpense({
        id: snapshot.key,
        ...expense
      }));
    })
  }
}
// Remove_expense
export const removeExpense = ({id}) => ({
  type: "REMOVE_EXPENSE",
  id: id
})

export const startRemoveExpense = ({ id }) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`).remove()
    dispatch(removeExpense({id}))
  }
}
// Edit_expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
})

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`).update(updates)
    dispatch(editExpense(id, updates))
  }
}

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((expense) => {
        expenses.push({
          id: expense.key,
          ...expense.val()
        })
      })
      dispatch(setExpenses(expenses))
    })
  }
}
