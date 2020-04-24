import React from 'react';
import Keg from './Keg';

const defaultKegList = [
  {
    name: "Beer name",
    brewery: "Brewery name",
    price:  "price",
    IBU: "bitterness",
    ABV: "alcohol content",
    Quantity: "50"
  },
  {
    name: "Beer name2",
    brewery: "Brewery name",
    price:  "price",
    IBU: "bitterness",
    ABV: "alcohol content",
    Quantity: "50"
  },
  {
    name: "Beer name3",
    brewery: "Brewery name",
    price:  "price",
    IBU: "bitterness",
    ABV: "alcohol content",
    Quantity: "50"
  }
]

function KegList(){
  return(
    <React.Fragment>
      <h1>KegList</h1>
      {defaultKegList.map((keg, index) =>
      <Keg 
        name={keg.name} 
        brewery={keg.brewery} 
        price={keg.price} 
        IBU={keg.IBU} 
        ABV={keg.ABV} />
      )}
    </React.Fragment>
  );
}

export default KegList;