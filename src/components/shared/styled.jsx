import styled from "styled-components";

export const CardTitle = styled.div`
  font-size: 30px;
  font-family: Roboto, arial, sans-serif;
  margin-bottom: 12px;

  @media (max-width: 900px) {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  font-size: 22px;
  font-family: Roboto, arial, sans-serif;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  font-family: Roboto, arial, helvetica, sans-serif;
  font-weight: 700;
  margin: 48px 0;
  @media (max-width: 900px) {
    font-size: 36px;
  }
`;

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; // This is the key change
`;
