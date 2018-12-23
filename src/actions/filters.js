// Set_text_filter
export const setTextFilter = (search = '') => ({
  type: "SET_TEXT_FILTER",
  search
})
// Sort by date
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
})
// Sort by amount
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
})
// Set start date
export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
})
// Set end date
export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
})
