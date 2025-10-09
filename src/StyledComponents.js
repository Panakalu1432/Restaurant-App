import styled from 'styled-components'

export const CategoryContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid #e5e7eb;
  scrollbar-width: none;
 
`

export const CategoryList = styled.ul`
  display: flex;
  gap:10px;
  min-width: max-content;
  padding:5px;
  list-style: none;
`

export const CategoryButton = styled.button`
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  padding-bottom: 0.4rem;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  color: #4b5563;
  cursor: pointer;
  

  ${({active}) =>
    active &&
    `
      border-bottom: 2px solid #ef4444;
      color: #dc2626;
    `}

  &:hover {
    color: #ef4444;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`
export const Container = styled.div`
    padding:15px;
    width:100%;

    

`
