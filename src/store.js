import { createStore } from "redux"


let initialState = {
  recipeName: "",
  recipeCategory: "",
  authorFirstName: "",
  authorLastName: "",
  ingredients: [],
  instructions: [],
  recipes: []
}

export const UPDATE_RECIPE_NAME = "UPDATE_RECIPE_NAME"
export const UPDATE_RECIPE_CATEGORY = "UPDATE_RECIPE_CATEGORY"
export const UPDATE_AUTHOR_FIRST_NAME = "UPDATE_AUTHOR_FIRST_NAME"
export const UPDATE_AUTHOR_LAST_NAME = "UPDATE_AUTHOR_LAST_NAME"
export const INGREDIENTS = "INGREDIENTS"
export const INSTRUCTIONS = "INSTRUCTIONS"
export const RECIPES = "RECIPES"
export const CLEAR_FIELDS = "CLEAR_FIELDS"

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RECIPE_NAME:
      return { ...state, recipeName: action.payload }
    case UPDATE_RECIPE_CATEGORY:
      return { ...state, recipeCategory: action.payload }
    case UPDATE_AUTHOR_FIRST_NAME:
      return { ...state, authorFirstName: action.payload }
    case UPDATE_AUTHOR_LAST_NAME:
      return { ...state, authorLastName: action.payload }
    case INGREDIENTS:
      return { ...state, ingredients: [...state.ingredients, action.payload] }
    case INSTRUCTIONS:
      return { ...state, instructions: [...state.instructions, action.payload] }
    case RECIPES:
      const { recipeName, recipeCategory, authorFirstName, authorLastName, ingredients, instructions } = state
      const recipe = { recipeName, recipeCategory, authorFirstName, authorLastName, ingredients, instructions }
      return { ...state, recipes: [...state.recipes, recipe] }
    case CLEAR_FIELDS:
      return { ...state, recipeName: "", recipeCategory: "", authorFirstName: "", authorLastName: "", ingredients: [], instructions: [] }
    default:
      return state
  }
}

export default createStore(reducer)



// here's what going on with RECIPES | you enter vales for everything (recipeName, recipeCategory, etc) | const {....} = state pulls the values out of the object initialState after you enter everything | const recipe...picks up those values | now you're able to mash it into the state