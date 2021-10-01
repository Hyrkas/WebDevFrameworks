import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    
    this.state = {
      foods: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  render()
  {
    const { applicationDescription, applicationName, } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.foods } />
      <button type="button" 
              onClick={
                () => this.setState(
                  {
                    foods: [...this.state.foods,{ id: 5, value: 'Cat Food', qty: 4, unit: 'x'}]
                    }
                    )
                    }>
                    Add 4 Cat Food
      </button>
      <button type="button" 
              onClick={
                () => this.setState(
                {
                  foods: [...this.state.foods,{ id: 6, value: 'Dog Food', qty: 3, unit: 'x'}]
                  }
                  )
                  }>Add 3 Dog Food
      </button>
      <button type="button"
              onClick={
                () => this.setState(
                  {
                    foods: [...this.state.foods,{ id: 7, value: 'Cigarettes', qty: 8, unit: 'x'}]
                    }
                    )
                    }>Add 8 Cigarettes
      </button>
      <button type="button"
               onClick={
                 () => this.setState(
                   {
                     foods: [...this.state.foods,{ id: 8, value: 'Beer', qty: 8, unit: 'x'}]
                     }
                     )
                     }>Add 8 Beers
      </button>
      
    </div>
  }
}

export default App;