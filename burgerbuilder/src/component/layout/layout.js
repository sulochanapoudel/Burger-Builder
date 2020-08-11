import React, { useState } from "react";
import { Table } from 'reactstrap';

import "./layout.css";

let Burger = () => {
  const [salad, setSalad] = useState([]);
  const [cheese, setCheese] = useState([]);
  const [meat, setMeat] = useState([]);
  const [becon, setBecon] = useState([]);

  const [beconprice, setBeconprice] = useState (0)

  let priceaddbecon = () => {
  if (beconprice < 20) { 
setBeconprice(beconprice+5)
  }
  }

  let priceremovebecon = ()=>{
    if (beconprice >0) {
      setBeconprice(beconprice-5)
      
    }
  }

  let addsalad = () => {
    if (salad.length < 4) {
      let add = [...salad, <div className="salad"> </div>];
      setSalad(add);
    }
  };

 console.log(salad);

  var deleteSalad = () => {
    if (salad.length > 0) {
      let decrease = [...salad];
      decrease.pop();
      setSalad(decrease);
    }
  };
  // console.log(salad);

  var addcheese = () => {
    if (cheese.length<4) {
      let addCheese = [...cheese, <div className="cheese"> </div>];
      setCheese(addCheese);
    }
  };

  var deletecheese = () => {
    if (cheese.length > 0) {
      let decreaseChes = [...cheese];
      decreaseChes.pop();
      setCheese(decreaseChes);
    }
  };
  // console.log(cheese);
  var addmeat = () => {
    if (meat.length < 4) {
      let add = [...meat, <div className="meat"> </div>];
      setMeat(add);
    }
  };
//  console.log(meat);
  var deletemeat = () => {
    if (meat.length > 0) {
      let decrease = [...meat];
      decrease.pop();
      setMeat(decrease);
    }
  };

  var addbecon = () => {
    if (becon.length < 4) {
      let add = [...becon, <div className="bacon"> </div>];
      setBecon(add);
    }
  };
  var deletebecon = () => {
    if (becon.length > 0) {
      let decrease = [...becon];
      decrease.pop();
      setBecon(decrease);
    }
  };

  // console.log(becon);

  
  return (
    <div className="box">
      <div className="bread-top"> </div>
  <div>{cheese.map((arg,index)=>{
    return(
    <div key={index}>{arg}</div>
    )
  })}</div>
  <div>{salad.map((arg,index)=>{
    return(
      <div key={index}>{arg}</div>
    )
  })}</div>
  <div>{meat.map((arg,index)=>{
    return(
      <div key={index}>{arg}</div>
    )
  })}</div>
  <div>{becon.map((arg,index)=>{
    return(
      <div key={index}>{arg}</div>
    )
  })}</div>
      <div className="bread-bottom"> </div>
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>#</th>
          <th>#</th>
          <th>price per item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td> <button
        onClick={() => {
          addsalad();
        }}
      >
        Add salad
      </button></td>
          <td><button
        onClick={() => {
          deleteSalad();
        }}
      >
        Delete Salad
      </button></td>
          <td>$5 per Salad</td>
        </tr>
        <tr>
          <th c>2</th>
          <td><button
        onClick={() => {
          addcheese();
        }}
      >
        Add Cheese
      </button>
      </td>
          <td><button
        onClick={() => {
          deletecheese();
        }}
      >
        Delete cheese
      </button></td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td><button
        onClick={() => {
          addbecon(); priceaddbecon();
        }}
      >
        Add Becon
      </button>
      </td>
          <td><button
        onClick={() => {
          deletebecon();priceremovebecon();
        }}
      >
        Delete Becon
      </button></td>
          <td>{beconprice}</td>
        </tr>
        <tr>
        <th scope="row">4</th>
          <td>  <button
        onClick={() => {
          addmeat();
        }}
      >
        Add Meat
      </button>
      </td>
          <td><button
        onClick={() => {
          deletemeat();
        }}
      >
        Delete Meat
      </button></td>
          <td>price</td>
        </tr>
        <tr>  <th scope="row">Total</th>
<td>{beconprice+10}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
};

export default Burger;
