import { createStore } from "redux"


let initialState = {
  recipeName: "",
  recipeCategory: "",
  authorFirstName: "",
  authorLastName: "",
  ingredients: []
}

export const UPDATE_RECIPE_NAME = "UPDATE_RECIPE_NAME"
export const UPDATE_RECIPE_CATEGORY = "UPDATE_RECIPE_CATEGORY"
export const UPDATE_AUTHOR_FIRST_NAME = "UPDATE_AUTHOR_FIRST_NAME"
export const UPDATE_AUTHOR_LAST_NAME = "UPDATE_AUTHOR_LAST_NAME"
export const INGREDIENTS = "INGREDIENTS"

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RECIPE_NAME:
      return { ...state, recipeName: action.payload }
    case UPDATE_RECIPE_CATEGORY:
      return { ...state, recipeCategory: action.payload }
    case UPDATE_AUTHOR_FIRST_NAME:
      return { ...state, authorFirstName: action.payload }
    case UPDATE_AUTHOR_LAST_NAME:
      return { ...state, authorFirstName: action.payload }
    case INGREDIENTS:
      return { ...state, ingredients: [...state.ingredients, action.payload] }
    default:
      return state
  }
}

export default createStore(reducer)