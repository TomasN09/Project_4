import styled from "styled-components";

//--------------OBECNE--------------------------------//
export const PageContainer = styled.div`
  display: flex;
  /* max-width: 1200px; */
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
  background-image: url("/projects/project_4/background-img.jpeg");
  alt: "background-image";
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Form = styled.form`
  width: 800px;
  min-height: 800px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "options"
    "accessories"
    "time"
    "calculation";
  gap: 20px;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: rgba(218, 223, 225, 0.9);
  padding: 20px;
  border-radius: 20px;

  &:nth-child(1) {
    grid-area: title;
  }
  &:nth-child(2) {
    grid-area: options;
  }
  &:nth-child(3) {
    grid-area: accessories;
  }
  &:nth-child(4) {
    grid-area: time;
  }
  &:nth-child(5) {
    grid-area: calculation;
  }
`;
//----------------------HLAVICKA section--------------------//
export const SectionTitle = styled.h2`
  color: black;
  font-size: 20px;
  margin: 0px;
  padding: 0;
  padding-bottom: 10px;
  text-align: center;
  align-self: center;
  justify-self: center;
`;

export const MainTitle = styled(SectionTitle)`
  font-size: 30px;
  align-self: center;
  justify-self: center;
`;
//-----------------VYBER section---------------------------------//
export const TypesMain = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
//-----------------PRISLUSENSTVI section-----------------------------//
export const AccessoriesMain = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

//-----------------VYPOCET section-------------------------------//

export const TotalMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalMainInput = styled.input`
  width: 140px;
  text-align: center;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const CheckButton = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 150px;
  border-radius: 10px;
  ${(props) => {
    if (props.checked === 1) {
      return `
            background-color: rgba(0,100,0,0.7);
         `;
    } else if (props.checked === 2) {
      return `
            background-color: rgba(255,0,0,0.7);
         `;
    }
  }}
`;

export const Compare = styled.input`
  font-weight: bold;
  text-align: center;
  width: 140px;
  ${(props) => {
    if (props.checked === 1) {
      return `
            background-color: rgba(0,100,0,0.3);

         `;
    } else if (props.checked === 2) {
      return `
          background-color: rgba(255,0,0,0.3);
         `;
    }
  }}
`;
