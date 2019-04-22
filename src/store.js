import { createStore } from "redux"


let initialState = {
  recipeName: "",
  recipeCategory: ""
}

export const UPDATE_RECIPE_NAME = "UPDATE_RECIPE_NAME"
export const UPDATE_RECIPE_CATEGORY = "UPDATE_RECIPE_CATEGORY"

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RECIPE_NAME:
      return { ...state, recipeName: action.payload }
    case UPDATE_RECIPE_CATEGORY:
      return { ...state, recipeCategory: action.payload }
    default:
      return state
  }
}

export default createStore(reducer)