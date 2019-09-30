export const actionTypes = {
  fetchingTransactionList: 'fetching-transaction-list',
  fetchedTransactionList: 'fetched-transaction-list',
  errorFetchingData: 'error-fetching-data',
  blockTransaction: 'block-transaction',
  approveTransaction: 'approve-transaction'
}

export const initialState = {
  suspiciousList: {},
  loading: false,
  error: false
}

export const transactionReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.fetchingTransactionList:
      return { ...state, loading: true,  error: false }
    case actionTypes.fetchedTransactionList:
      return { ...state, loading: false, error: false, suspiciousList: action.data }
    case actionTypes.errorFetchingData:
        return { ...state, loading: false, suspiciousList: {}, error: true }
    case actionTypes.blockTransaction:
    case actionTypes.approveTransaction:
      const { [action.data]: removedItem, ...newList } = state.suspiciousList
      return { ...state, loading: false, error: true, suspiciousList: newList }
    default:
      return state
  }
}