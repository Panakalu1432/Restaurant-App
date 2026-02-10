import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: 'Roboto', sans-serif;
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1100px;
  margin: 32px auto;
  @media screen and (min-width: 768px) {
    align-items: flex-end;
  }
`

export const CartHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 16px;
`

export const RemoveAllButton = styled.button`
  background-color: transparent;
  color: #3b82f6;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px 16px;
  
  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }
`

export const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
  }
`

export const DishImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 16px;
  
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`

export const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 16px;
`

export const DishName = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 8px 0;
  
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const DishPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #0b69ff;
  margin: 0;
  
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

export const QuantityButton = styled.button`
  background-color: transparent;
  border: 1px solid #cbd5e1;
  color: #334155;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  
  &:hover {
    background-color: #e2e8f0;
  }
`

export const QuantityText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #334155;
  margin: 0 12px;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ef4444;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  padding: 8px;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #dc2626;
  }
  
  /* Desktop styling override */
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #ef4444;
  border-radius: 4px;
  padding: 6px 12px;
  
  &:hover {
    background-color: #fef2f2;
  }
`

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 32px;
`

export const EmptyCartImage = styled.img`
  width: 80%;
  max-width: 400px;
  margin-bottom: 24px;
`

export const EmptyCartText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #1e293b;
`
