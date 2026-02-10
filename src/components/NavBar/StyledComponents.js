import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 72px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 1000;
  
  @media screen and (min-width: 768px) {
    padding: 0 48px;
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const LogoText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #f97316;
  margin: 0;
  
  span {
    color: #334155;
  }
`

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`

export const StyledCartLink = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #334155;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #f97316;
  }
`

export const CartCountBadge = styled.span`
  background-color: #e2e8f0;
  color: #334155;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
`

export const LogoutButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`
