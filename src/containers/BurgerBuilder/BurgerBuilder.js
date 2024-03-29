import React, { Component } from 'react';
import Auxiliaty from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
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
        totalPrice:4,
        perchasable:true,
        purchasing:false
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
       this.updatePerchasable(ingredientsCopy)
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
        this.updatePerchasable(ingredientsCopy)
    }

    updatePerchasable=(ingredients)=>{
        const sum = Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum+el;
        },0)
        this.setState({perchasable:sum<=0})
    }

    updatePurchasing=()=>{
        this.setState({purchasing:true});
    }

    handleCancelOrder = () =>{
        this.setState({purchasing:false});
    }
    handleContinueOrder = () =>{
        alert('Continue clicked');
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
                <Modal show={this.state.purchasing} cancelOrder={this.handleCancelOrder}>
                    <OrderSummary ingredients={this.state.ingredients} total={this.state.totalPrice} cancelOrder = {this.handleCancelOrder} continueOrder={this.handleContinueOrder}/>
                </Modal>
                <BuildControls
                    added={this.addIngredient}
                    removed={this.removeIngredient}
                    price={this.state.totalPrice}
                    disabled={disableInfo}
                    perchasable={this.state.perchasable}
                    ordering={this.updatePurchasing}
                />
            </Auxiliaty>
        );
    }
}

export default BurgerBuilder;