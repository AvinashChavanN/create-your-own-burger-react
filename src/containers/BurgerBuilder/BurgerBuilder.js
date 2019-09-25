import React, { Component } from 'react';
import Auxiliaty from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICES = {
    bacon:0.7,
    salad:1.2,
    cheese:0.5,
    meat:1.8
}
class BurgerBuilder extends Component {
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    }

    addIngredient = (type) =>{
       const currentValue = this.state.ingredients[type];
       const ingredientsCopy = {
           ...this.state.ingredients
       }
       ingredientsCopy[type] = currentValue+1;
       let totalPrice = this.state.totalPrice;
       totalPrice = totalPrice + INGREDIENT_PRICES[type];
       this.setState({ingredients:ingredientsCopy, totalPrice:totalPrice})
    }

    removeIngredient = (type) =>{
        const currentValue = this.state.ingredients[type];
        const ingredientsCopy = {
            ...this.state.ingredients
        }
        if(currentValue!==0){
            ingredientsCopy[type] = currentValue-1;
            let totalPrice = this.state.totalPrice;
            totalPrice = totalPrice - INGREDIENT_PRICES[type];
            this.setState({ingredients:ingredientsCopy, totalPrice:totalPrice})
        }
    }
    render(){

        const disableInfo = {
            ...this.state.ingredients
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key]<=0;
        }


        return(
            <Auxiliaty>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    added={this.addIngredient}
                    removed={this.removeIngredient}
                    price={this.state.totalPrice}
                    disabled={disableInfo}
                />
            </Auxiliaty>
        );
    }
}

export default BurgerBuilder;