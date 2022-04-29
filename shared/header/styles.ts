import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular';



export const HeaderWrapper = styled.header`
  background-color: rgba(255, 255, 255, 1);
  /* box-shadow: 0 2px 4px 0 rgba(0,0,0,.2); */
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 40px;
`

export const HeaderLink = styled.a`
  color: #943434;
  font-weight: 600;
  font-size: 18px;
`

export const LogoWrapper = styled.a`
  width: 200px;
  height: 80px;
  position: relative;
`

export const Bar = styled.div`
  position: fixed;
  z-index: 999;
  top: 9.9%;
  height: 6px;
  border-radius: 0px 2px 0px 0px;
  background: #fa5f5f;
  transition: all 0.3s ease-in-out;
`;

export const SearchButton = styled(Search)`
  color: #D72323;
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;
`;