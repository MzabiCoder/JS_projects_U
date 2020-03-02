export default (state, action) => {
    const {type,payload} = action 
    switch (type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(tran=>tran.id!==payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[...state.transactions,payload]
            }
        default:
            return state
    }
}