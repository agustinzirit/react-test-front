import { types } from '../types/types'

export const queryReducer = (state = [], action) => {
  switch (action.type) {
    case types.success:
      return [...state, { text: action.payload.text, palindrome: action.payload.palindrome }]
      break
    case types.error:
      return []
      break

    default:
      return state
      break
  }
}
