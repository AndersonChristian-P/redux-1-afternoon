import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, { CLEAR_FIELDS, DELETE_RECIPE } from "./../../store"

class Home extends Component {
  constructor(props) {

    const reduxStore = store.getState()

    super(props);
    this.state = {
      recipes: reduxStore.recipes
    };
  }

  clearFields() {
    store.dispatch({ type: CLEAR_FIELDS })
  }

  deleteRecipe = (index) => {
    console.log(index)
    // store.dispatch({ type: DELETE_RECIPE, payload: index })
  }

  render() {

    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.recipeName}
          category={recipe.recipeCategory}
          authorFirst={recipe.authorFirstName}
          authorLast={recipe.authorLastName}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          deleteRecipe={this.deleteRecipe}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button onClick={() => this.clearFields()}>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;


// when I click Create New Recipe I want to clear the fields