import React, { useState } from "react";
import { Table } from "reactstrap";

import "./layout.css";

let Burger = (props) => {
 
//   const[addcat, SetAddcat] = useState([<h5>Please add as per your requirement</h5>])

//   let deletecat = () =>{
// if (addcat > 1) {
//   let addCat=addcat.pop()
//   SetAddcat(addCat)
// }
// }
console.log(addcat);
  return (
    <div className="box">
      <div className="bread-top"> </div>
  {/* <div>{addcat.map((arg)=>{
return(
  <div>{arg} </div>

) */}
  })}</div>
        <div >

          {props?props.cheese:"".map((arg, index) => {
            return <div key={index}>{arg}</div>;
          })}
        </div>
          <div>
            {props?props.salad:"".map((arg, index) => {
              return <div key={index}>{arg}</div>;
            })}
          </div>
                <div>
                  {props?props.meat:"".map((arg, index) => {
                    return <div key={index}>{arg}</div>;
                  })}
                </div>
                  <div>
                    {props?props.becon:"".map((arg, index) => {
                      return <div key={index}>{arg}</div>;
                    })}
                </div>
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
            <td>
              {" "}
              <button
                onClick={() => {
                  props.addsalad();
                  props.saladaddPrice();
                  
                }}
              >
                Add salad
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  props.deleteSalad();
                  props.saladdeletePrice();
                  
                }}
              >
                Delete Salad
              </button>
            </td>
            <td>{props.saladPrice}</td>
          </tr>
          <tr>
            <th c>2</th>
            <td>
              <button
                onClick={() => {
                  props.addCheese();
                  props.cheeseaddPrice();
                }}
              >
                Add Cheese
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  props.deletecheese();
                  props.cheesedeletePrice();
                }}
              >
                Delete cheese
              </button>
            </td>
            <td>{props.cheesePrice}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <button
                onClick={() => {
                  props.addbecon();
                  props.priceaddbecon();
                }}
              >
                Add Becon
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  props.deletebecon();
                  props.priceremovebecon();
                }}
              >
                Delete Becon
              </button>
            </td>
            <td>{props.beconprice}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>
              {" "}
              <button
                onClick={() => {
                  props.addmeat();
                  props.priceaddmeat();
                }}
              >
                Add Meat
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  props.deletemeat();
                  props.priceremovemeat();
                }}
              >
                Delete Meat
              </button>
            </td>
            <td>{props.meatPrice}</td>
          </tr>
          <tr>
            {" "}
            <th scope="row">Total</th>
            <td>{props.beconprice + props.cheesePrice + props.meatPrice + props.saladPrice + 10}</td>
          </tr>
        </tbody>
      </Table>
      
    </div>
  );
};

export default Burger;
