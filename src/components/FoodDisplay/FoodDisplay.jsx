import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category ,searchText}) => {




  const { foodList } = useContext(StoreContext);
 const filteredfoofs= foodList.filter(food=>

  ((category==='All' || food.category === category) && food.name.toLowerCase().includes(searchText.toLowerCase())
)

);
 console.log(category);
 console.log(foodList);

  
  return (
    <div className="container">
      <div className="row">
        {filteredfoofs.length > 0 ? (
          filteredfoofs.map((food, index) => (
            
            <FoodItem key={index} name={food.name}
              description={food.description} 
              id={food.id}
              imageURL={food.imageURL}
              price={food.price}
              
              />

          ))
        ) : (
          <div className="text-center mt-4">
            <h4>NO veggies found</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay;