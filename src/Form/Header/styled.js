import styled from "styled-components";

export const StyledHeader = styled.h1`
  max-width: 300px;
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
  margin: 8px auto;
  padding: 32px 0 0;
  line-height: 0.88;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 200px;
    font-size: 30px;
    padding: 22px 0 0;
  }
`;