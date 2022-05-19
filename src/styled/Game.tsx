import styled from 'styled-components'

export const StyledGame = styled.div`
  height: 75vh;
  max-height: 500px;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`

export const StyledWordContainer = styled.div`
  grid-row: 2;
  grid-column: 1/4;
  min-height: 200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const StyledInput = styled.input`
  font-size: 2rem;
  color: var(--main-text-color);
  text-align: center;
  padding: 1rem;
  background-color: var(--main-bg-color);
  border: 1px solid var(--main-text-color);
  border-radius: 0.4rem;
  margin: 2rem;
`

export const StyledScore = styled.p`
  font-size: 1.5rem;
`

export const StyledTimer = styled.p`
  font-size: 1.5rem;
  grid-column: 3;
`
