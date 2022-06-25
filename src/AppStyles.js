import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  /* max-width: 1200px; */
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
   
`;

export const Formular = styled.form`
  width: 800px;
  min-height: 800px;
  
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nadpis"
    "vyber"
    "prislusenstvi"
    "dny"
    "kalkulace";
  gap: 20px;
`;
export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  
  
  /* width: 100%; */
  background-color: lightgrey;
  padding: 20px;
  &:nth-child(1) {
    grid-area: nadpis;
  }
  &:nth-child(2) {
    grid-area: vyber;
  }
  &:nth-child(3) {
    grid-area: prislusenstvi;
  }
  &:nth-child(4) {
    grid-area: dny;
  }
  &:nth-child(5) {
    grid-area: kalkulace;
  }
`;
export const SectionTitle = styled.h2`
  color: black;
  font-size: 20px;
  margin: 0px;
  padding: 0;
  padding-bottom: 10px;
  justify-self: center;
  align-items: center;
`;
export const MainTitle = styled(SectionTitle)`
  font-size: 30px;
  align-self: center;
  justify-self: center;
  text-decoration: underline;
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap:20px;
`;

