export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'

export function bookReducer(state, action) {
    switch(action.type) {
        case ADD_BOOK :
            return [...state, action.payload]
        case REMOVE_BOOK :
            return state.filter(item => item.id === action.payload ? null : item)
        default:
            return state
    }
}