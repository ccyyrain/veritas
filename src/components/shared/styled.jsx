import styled from "styled-components";

export const CardTitle = styled.div`
  font-size: 30px;
  font-family: Helvetica, arial, sans-serif;
  margin-bottom: 12px;
`;

export const Content = styled.div`
  font-size: 22px;
  font-family: Helvetica, arial, sans-serif;
`;

export const Title = styled.div`
  font-size: 48px;
  font-family: "League Spartan", arial, helvetica, sans-serif;
  font-weight: 700;
  margin: 48px 0;
`;

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; // This is the key change
`;