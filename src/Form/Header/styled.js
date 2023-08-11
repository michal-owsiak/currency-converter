import styled from "styled-components";

export const StyledHeader = styled.h1`
  max-width: 300px;
  font-size: 38px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
  margin: 8px auto;
  padding: 35px 0 0;
  line-height: 0.88;
`;