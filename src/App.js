import "./App.css";
import { PageContainer, Form, FormSection, MainTitle, SectionTitle, AccessoriesMain, TypesMain, CheckButton, TotalMain, TotalMainInput, Compare } from "./AppStyles";

import { useReducer, useState, useEffect } from "react";
// initialState pro useReducer
const defaultOrder = {
  mountain: false,
  numMount: 1,
  kids: false,
  numKids: 1,
  road: false,
  numRoad: 1,
  gravel: false,
  numGravel: 1,
  accessoriesRoof: false,
  accessoriesTowbar: false,
  accessoriesNone: false,
  time: "",
  budget: 0,
};

// reducer funkce pro useReducer
function setOrder(order, action) {
  switch (action.type) {
    case "update_text":
      return { ...order, [action.key]: action.value };
    case "update_number":
      return { ...order, [action.key]: parseFloat(action.value) };
    case "update_mountain":
      return { ...order, mountain: !order.mountain };
    case "update_kids":
      return { ...order, kids: !order.kids };
    case "update_road":
      return { ...order, road: !order.road };
    case "update_gravel":
      return { ...order, gravel: !order.gravel };
    default:
      return order;
  }
}

function App() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [showFinalPrice, setShowFinalPrice] = useState(0); //need 2nd render using useEffect
  const [checked, setChecked] = useState(0);

  //state orders managed by useReducer hook
  const [order, dispatch] = useReducer(setOrder, defaultOrder);

  useEffect(() => {
    let newFinalPrice = getFinalPrice(order);
    setShowFinalPrice(newFinalPrice);
  }, [order]);

  const getFinalPrice = (order) => {
    let priceMountain = 0;
    let priceKids = 0;
    let priceRoad = 0;
    let priceGravel = 0;

    if (order.mountain) {
      priceMountain = order.numMount * 500;
    }
    if (order.kids) {
      priceKids = order.numKids * 200;
    }
    if (order.road) {
      priceRoad = order.numRoad * 1500;
    }
    if (order.gravel) {
      priceGravel = order.numGravel * 2500;
    }

    let thisBasePrice = (priceMountain + priceKids + priceRoad + priceGravel) * order.time;
    let thisFinalPrice = thisBasePrice;

    if (order.accessories === 0.05) {
      thisFinalPrice += thisBasePrice * 0.05;
    } else if (order.accessories === 0.1) {
      thisFinalPrice += thisBasePrice * 0.1;
    }

    setFinalPrice(thisFinalPrice);
    /* console.log(thisFinalPrice); */
    return thisFinalPrice;
  };

  const checkPrice = (order) => {
    console.log(order.budget);
    if (order.budget >= finalPrice) {
      let checkOK = 1;
      setChecked(checkOK);
    } else {
      let checkNOK = 2;
      setChecked(checkNOK);
    }
    /* console.log(checked); */
  };

  return (
    <PageContainer>
      <Form>
        <FormSection name="title">
          <MainTitle>
            <u>Bike rental</u>
          </MainTitle>
        </FormSection>
        <FormSection name="options">
          <SectionTitle>Types of Bicycles</SectionTitle>
          <TypesMain>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="mountain" style={{ cursor: "pointer" }}>
                {" "}
                <h4 style={{ marginBottom: 0 }}>Mountain</h4>
                500 Kc/day
              </label>
              <div style={{ textAlign: "center" }}>
                <input
                  type="checkbox"
                  id="mountain"
                  onChange={() => {
                    dispatch({
                      type: "update_mountain",
                    });
                  }}
                />
                <input
                  style={{ width: 60 }}
                  type="number"
                  min="0"
                  id="numMount"
                  value={order.numMount}
                  onChange={(e) => {
                    dispatch({
                      type: "update_number",
                      value: e.target.value,
                      key: "numMount",
                    });
                  }}
                />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="kids" style={{ cursor: "pointer" }}>
                {" "}
                <h4 style={{ marginBottom: 0 }}>Kids</h4>
                200 Kc/day
              </label>
              <div>
                <input
                  type="checkbox"
                  id="kids"
                  onChange={(e) => {
                    dispatch({
                      type: "update_kids",
                    });
                  }}
                />
                <input
                  style={{ width: 60 }}
                  type="number"
                  id="numKids"
                  min="0"
                  value={order.numKids}
                  onChange={(e) => {
                    dispatch({
                      type: "update_number",
                      value: e.target.value,
                      key: "numKids",
                    });
                  }}
                />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="road" style={{ cursor: "pointer" }}>
                {" "}
                <h4 style={{ marginBottom: 0 }}>Road</h4>
                1500 Kc/day
              </label>
              <div>
                <input
                  type="checkbox"
                  id="road"
                  min="0"
                  onChange={() => {
                    dispatch({
                      type: "update_road",
                    });
                  }}
                />
                <input
                  style={{ width: 60 }}
                  type="number"
                  id="numRoad"
                  min="0"
                  value={order.numRoad}
                  onChange={(e) => {
                    dispatch({
                      type: "update_number",
                      value: e.target.value,
                      key: "numRoad",
                    });
                  }}
                />
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <label htmlFor="gravel" style={{ cursor: "pointer" }}>
                {" "}
                <h4 style={{ marginBottom: 0 }}>Gravel</h4>
                2500 Kc/day
              </label>
              <div>
                <input
                  type="checkbox"
                  id="gravel"
                  onChange={() => {
                    dispatch({
                      type: "update_gravel",
                    });
                  }}
                />
                <input
                  style={{ width: 60 }}
                  type="number"
                  id="numGravel"
                  min="0"
                  value={order.numGravel}
                  onChange={(e) => {
                    dispatch({
                      type: "update_number",
                      value: e.target.value,
                      key: "numGravel",
                    });
                  }}
                />
              </div>
            </div>
          </TypesMain>
        </FormSection>
        <FormSection name="accessories">
          <SectionTitle>Accessories</SectionTitle>
          <AccessoriesMain>
            <div>
              <h4 style={{ marginBottom: 2 }}>Roof bike carrier</h4>
              <input
                type="radio"
                name="accessories"
                id="accessoriesRoof"
                value={0.05}
                onChange={(e) => {
                  dispatch({
                    type: "update_number",
                    value: e.target.value,
                    key: "accessories",
                  });
                }}
              />
              <label htmlFor="accessoriesRoof" style={{ cursor: "pointer" }}>
                5% from total price
              </label>
            </div>
            <div>
              <h4 style={{ marginBottom: 2 }}>Towbar bike rack</h4>
              <input
                type="radio"
                name="accessories"
                id="accessoriesTowbar"
                value={0.1}
                onChange={(e) => {
                  dispatch({
                    type: "update_number",
                    value: e.target.value,
                    key: "accessories",
                  });
                }}
              />
              <label htmlFor="accessoriesTowbar" style={{ cursor: "pointer" }}>
                10% from total price
              </label>
            </div>
            <div>
              <h4 style={{ marginBottom: 2 }}>Bike carrier</h4>
              <input
                type="radio"
                name="accessories"
                id="accessoriesNone"
                value={0}
                defaultChecked
                onChange={(e) => {
                  dispatch({
                    type: "update_number",
                    value: e.target.value,
                    key: "accessories",
                  });
                }}
              />
              <label htmlFor="accessoriesNone" style={{ cursor: "pointer" }}>
                Without
              </label>
            </div>
          </AccessoriesMain>
        </FormSection>
        <FormSection name="time">
          <SectionTitle>Duration</SectionTitle>
          <div style={{ textAlign: "center" }}>
            <select
              id="time"
              style={{ width: 150, textAlign: "center" }}
              onChange={(e) => {
                dispatch({
                  type: "update_text",
                  value: e.target.value,
                  key: "time",
                });
              }}
            >
              <option value={0}>not selected</option>
              <option value={1}>1 day</option>
              <option value={2}>2 days</option>
              <option value={7}>1 week</option>
              <option value={14}>2 weeks</option>
            </select>
          </div>
        </FormSection>
        <FormSection name="calculation">
          <SectionTitle>Total price</SectionTitle>
          <TotalMain>
            <label>Final price:</label>
            <input type="text" id="finalPrice" style={{ width: 140, textAlign: "center", fontSize: "30px" }} value={showFinalPrice} disabled />
            <label>What is your budget?</label>
            <TotalMainInput
              type="number"
              id="budget"
              min="0"
              value={order.budget}
              onChange={(e) => {
                dispatch({
                  type: "update_number",
                  value: e.target.value,
                  key: "budget",
                });
              }}
            />
            <Compare type="text" id="answer" disabled value={checked === 1 ? "Your budget is OK" : "Offer more!"} checked={checked} />
            <CheckButton
              checked={checked}
              onClick={() => {
                checkPrice(order);
              }}
            >
              Budget checker
            </CheckButton>
          </TotalMain>
        </FormSection>
      </Form>
    </PageContainer>
  );
}

export default App;
