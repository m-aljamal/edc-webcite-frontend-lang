import styled from "styled-components"
export const EventListStyle = styled.div`
  margin: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 35px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`
