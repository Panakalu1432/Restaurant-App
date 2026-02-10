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
  color: ${props => (props.$active ? '#ff0000' : '#333')};
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

/// sep

export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 5px;
    border: 1px;`
export const Cartnav = styled.div`
    text-align:center;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-right:35px;
    
    @media (max-width:768px) {
      margin-right:25px;
      
    }

`

export const CartWrapper = styled.div`
  position: relative;
  display: inline-block;
  color: #333;
  font-size: 26px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  
  position: absolute;
  top: 15px;
  right: 20px;

  @media (max-width: 768px) {
    font-size: 22px;
    top: 10px;
    right: 15px;
    margin-top:10px;
  }
`

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  min-height: 18px;

  @media (max-width: 768px) {
    top: -6px;
    right: -8px;
    font-size: 10px;
    min-width: 16px;
    min-height: 16px;
  }
`
export const HeadNav = styled.h1`
font-weight:bold;
font-size:18px;
 
`
export const ParaNav = styled.p`
    padding-right:8px;

`

export const FoodItemContainer = styled.ul`
    padding:15px;
    width:100%;
    list-style:none
    

`

export const DishCard = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 16px;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const DishLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const DishHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
`

export const VegIcon = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid green;
  border-radius: 3px;
  position: relative;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    background: green;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`
export const NonVegIcon = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid red;
  border-radius: 3px;
  position: relative;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    background: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`

export const Price = styled.p`
  font-weight: 600;
  color: #444;
  margin: 0;
`

export const Description = styled.p`
  font-size: 14px;
  color: #999;
  line-height: 1.4;
  margin: 4px 0 8px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const Calories = styled.p`
  color: #ff9900;
  font-weight: bold;
  font-size: 13px;
  align-self: flex-end;
  margin: 4px 0;

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`

export const DishRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
`

export const DishImage = styled.img`
  width: 110px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
  border-radius: 20px;
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  gap: 12px;
  width: fit-content;

  button {
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
`

export const CustomizationText = styled.p`
  color: #5f2eea;
  font-size: 13px;
  font-weight: 500;
  margin: 6px 0 0 0;
  cursor: pointer;
`
export const DishNotAv = styled.h3`
  color:red;
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1fa61f;
  border-radius: 25px;
  padding: 6px 10px;
  width: 90px;
  color: #fff;
  font-weight: bold;

  /* Shadow for lifted look */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    width: 75px;
    padding: 5px 8px;
  }
`

export const CartButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Count = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  min-width: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

// Not found

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const NotFoundImage = styled.img`
  width: 400px;
`
// Cart
