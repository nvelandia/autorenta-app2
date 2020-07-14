import { actionNames } from "../utils/constants/actionConstants";

//Action Creator
export const incrementCounter = (action) => ({
  type: actionNames.incrementCounter
})

export const decrementCounter = () => ({
  type: actionNames.decrementCounter
})