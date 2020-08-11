import React, { useState } from "react";
import LayoutComponent from "../component/layout/layout";

let ContainerSalad = () => {
  const [salad, setSalad] = useState([]);
  const [cheese, setCheese] = useState([]);
  const [meat, setMeat] = useState([]);
  const [becon, setBecon] = useState([]);

  const [beconprice, setBeconprice] = useState(0);
  const [meatPrice, setMeatPrice] = useState(0);
  const [saladPrice, setSaladPrice] = useState(0);
  const [cheesePrice, setCheesePrice] = useState(0);

  // Function for Price of adding Cheese
  let cheeseaddPrice = () => {
    if (cheesePrice < 160) {
      setCheesePrice(cheesePrice + 40);
    }
  };
  // Function for Price for removing Cheese
  let cheesedeletePrice = () => {
    if (cheesePrice > 0) {
      setCheesePrice(cheesePrice - 40);
    }
  };

  // function for price for adding salad
  let saladaddPrice = () => {
    if (saladPrice < 120) {
      setSaladPrice(saladPrice + 30);
    }
  };

  // function for price for removing salad
  let saladdeletePrice = () => {
    if (saladPrice > 0) {
      setSaladPrice(saladPrice - 30);
    }
  };

  // function for price for adding meat
  let priceaddmeat = () => {
    if (meatPrice < 200) {
      setMeatPrice(meatPrice + 50);
    }
  };

  // function for price for removing meat
  let priceremovemeat = () => {
    if (meatPrice > 0) {
      setMeatPrice(meatPrice - 50);
    }
  };

  // function for price for adding becon
  let priceaddbecon = () => {
    if (beconprice < 20) {
      setBeconprice(beconprice + 5);
    }
  };
// console.log(becon)
  // function for price for removing becon
  let priceremovebecon = () => {
    if (beconprice > 0) {
      setBeconprice(beconprice - 5);
    }
  };

  // console.log(salad);
  // function for adding cheese
  var addcheese = () => {
    if (cheese.length < 4) {
      let addCheese = [...cheese, <div className="cheese"> </div>];
      setCheese(addCheese);
    }
  };

  // function for removing cheese
  var deletecheese = () => {
    if (cheese.length > 0) {
      let decreaseChes = [...cheese];
      decreaseChes.pop();
      setCheese(decreaseChes);
    }
  };
  // console.log(cheese);
  // function for adding meat
  var addmeat = () => {
    if (meat.length < 4) {
      let add = [...meat, <div className="meat"> </div>];
      setMeat(add);
    }
  };
  console.log(meat);
  // function for removing meat
  var deletemeat = () => {
    if (meat.length > 0) {
      let decrease = [...meat];
      decrease.pop();
      setMeat(decrease);
    }
  };
  // function for adding becon
  var addbecon = () => {
    if (becon.length < 4) {
      let add = [...becon, <div className="bacon"> </div>];
      setBecon(add);
    }
  };
  // function for remmoving becon
  var deletebecon = () => {
    if (becon.length > 0) {
      let decrease = [...becon];
      decrease.pop();
      setBecon(decrease);
    }
  };

  // function for adding salad
  let addsalad = () => {
    if (salad.length < 4) {
      let add = [...salad, <div className="salad"> </div>];
      setSalad(add);
    }
  };

  // console.log(salad);
  // function for removing salad
  var deleteSalad = () => {
    if (salad.length > 0) {
      let decrease = [...salad];
      decrease.pop();
      setSalad(decrease);
    }
  };

  return (
    <div>
      {" "}
      <LayoutComponent
        addsalad={addsalad}
        deleteSalad={deleteSalad}
        salad={salad}
        saladaddPrice={saladaddPrice}
        saladdeletePrice={saladdeletePrice}
        saladPrice={saladPrice}

        addCheese={addcheese}
        deletecheese={deletecheese}
        cheese= {cheese}
        cheesePrice={cheesePrice}
        cheeseaddPrice={cheeseaddPrice}
        cheesedeletePrice={cheesedeletePrice}


        addbecon={addbecon}
        deletebecon={deletebecon}
        beconprice={beconprice}
        becon={becon}
        priceaddbecon={ priceaddbecon}
        priceremovebecon={priceremovebecon}
        
        addmeat={addmeat}
        deletemeat={deletemeat}
        meat={meat}
        priceaddmeat={priceaddmeat}
        priceremovemeat={priceremovemeat}  
        meatPrice={meatPrice}  



      />
    </div>
  );
};

export default ContainerSalad;
