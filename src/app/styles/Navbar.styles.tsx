import styled from "styled-components";

export const MainNavbar = styled.main`
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: calc(var(--ten-px) * 2);
`;

export const Label = styled.h4`
  position: relative;
  font-family: "Black Ops One";
  font-size: 3.5rem;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 2px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${({ theme: { blue02 } }) => blue02};
  }

  &::before {
    top: 50%;
    left: calc(-100% - 10px);
  }

  &::after {
    top: 50%;
    left: calc(100% + 10px);
  }
`;
