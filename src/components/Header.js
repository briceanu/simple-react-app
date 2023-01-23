import React from 'react';
import styled from 'styled-components';
import earth from '../assets/earth.svg';

const HeaderContainer = styled.header`
  padding: 2rem 0;
  background-color: #f55a5a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;
const Logo = styled.img`
  width: clamp(1.9rem, 3vw, 3rem);
  height: clamp(1.9rem, 3vw, 3rem);
  margin: 0.8rem;
`;
const Title = styled.h1`
  font-size: clamp(1.9rem, 3vw, 3rem);
  color: white;
`;
function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo src={earth} />
        <Title>my travel journal.</Title>
      </HeaderContainer>
    </>
  );
}

export default Header;
