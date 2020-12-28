const initialState = []
const fileHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fileHistory/added':
      return [...state, action.payload]
    case 'fileHistory/removed':
      return [...state.filter(historyItem => historyItem !== action.payload)]
    default:
      return state
  }
}

export default fileHistoryReducer