import "./App.css";
import React, { Component } from "react";
import {
  PageContainer,
  Formular,
  FormSection,
  MainTitle,
  SectionTitle,
  InputDiv,
} from "./AppStyles";

import BikeType from "./components/BikeType";
import Accessories from "./components/Accessories";
import Calendar from "./components/Calendar";
import TotalPrice from "./components/TotalPrice";
import Comparison from "./components/Comparison";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      days: 5,
      extras: 1,
      limit: 0,

      accessories: {
        height: "190px",
      },
      calendar: {
        height: "163px",
      },
      bikes: [
        {
          id: "1",
          label: "Horské",
          price: 500,
          count: 0,
          checked: false,
        },
        {
          id: "2",
          label: "Dětské",
          price: 200,
          count: 0,
          checked: false,
        },
        { 
          id: "3",
          label: "Silniční",
          price: 1500,
          count: 0,
          checked: false,
        },
        {
          id: "4",
          label: "Gravel",
          price: 2500,
          count: 0,
          checked: false,
        },
      ],
    };
  }

  SelectBike = (event) => {
    let from = event.target.name;
    let index = parseInt(event.target.getAttribute("data-pos")) - 1;
    let bikes = [...this.state.bikes];
    if (from === "value") {
      let val = event.target.value;
      if (val < 1) val = 1;
      let item = { ...bikes[index], count: val };
      bikes[index] = item;
      if (val > 10) val = 10;
      item = { ...bikes[index], count: val };
      bikes[index] = item;
    } else {
      let val = event.target.checked;
      let item = { ...bikes[index], checked: val };
      bikes[index] = item;
    }
    this.setState({ bikes: bikes });
  };
  NumberOfDays = (event) => {
    this.setState({ days: event.target.value });
  };
  AddExtras = (event) => {
    this.setState({ extras: event.target.value });
  };

  TotalSum = () => {
    let checkedBikes = this.state.bikes.filter((bike) => bike.checked === true);
    let total = Math.floor(
      checkedBikes.reduce((a, v) => (a = a + v.price * v.count), 0) *
        this.state.days *
        this.state.extras
    );
    this.setState({ totalPrice: total });
  };
  MaximumLimit = (event) => {
    this.setState({ limit: event.target.value });
  };

  render() {

    return (
      <PageContainer>
        <Formular>
          <FormSection>
            <MainTitle>Kolosalon objednávka</MainTitle>
          </FormSection>
          <FormSection name="vyber">
            <SectionTitle>Výběr kol</SectionTitle>
            {/* VYBER TYPU KOLA */}
            <InputDiv>
              {this.state.bikes.map((bike) => 
                <BikeType
                  id={bike.id}
                  key={bike.id}
                  label={bike.label}
                  price={bike.price}
                  value={bike.count}
                  checked={bike.checked}
                  onChange={(event) => this.SelectBike(event)}
                />
              )}
            </InputDiv>
          </FormSection>
          <FormSection>
            {/* VYBER PRISLUSENSTVI */}
            <SectionTitle>Volba příslušenství</SectionTitle>
            <InputDiv>
              <Accessories
                onChange={(event) => this.AddExtras(event)}
              />
            </InputDiv>
          </FormSection>

          <FormSection>
            {/* DELKA ZAPUJCKY */}
            <SectionTitle>Délka zápůjčky</SectionTitle>
            <InputDiv>
              <Calendar
                onChange={(event) => this.NumberOfDays(event)}
              />
            </InputDiv>
          </FormSection>

          <FormSection>
            {/* VYSLEDNA CENA, SROVNANI */}
            <SectionTitle>Výsledná cena</SectionTitle>
            <TotalPrice
              onClick={() => this.TotalSum()}
              total={this.state.totalPrice}
              onChange={(event) => this.AddExtras(event)}
            />
            <Comparison
              onChange={(event) => this.MaximumLimit(event)}
              limit={this.state.limit}
              total={this.state.totalPrice}
            />
          </FormSection>
        </Formular>
      </PageContainer>
    );
  }
}
