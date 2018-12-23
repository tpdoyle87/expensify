import uuid from 'uuid';

// Add_expense
export const addExpense = (
  {
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: "ADD_EXPENSE",
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
// Remove_expense
export const removeExpense = (
  {
    id
  } = {}
) => ({
  type: "REMOVE_EXPENSE",
  id: id
})
// Edit_expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
})
