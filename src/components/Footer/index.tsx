import styled from "styled-components";
import { Container, Typography, Link as MuiLink } from "@mui/material";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  background-color: rgb(0, 0, 0); /* This is just an example color */
  padding: 1rem 0;
  .footer-text {
    @apply text-center text-gray-600;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; // Ensure the container takes full height of the footer
`;

const FooterLink = styled(MuiLink)`
  margin: 0 8px;
  @apply text-blue-500 hover:text-blue-700;
`;

const Copyright = styled.div`
  color: rgb(169, 169, 169);
  text-align: center;
  font-size: 14px;
  font-family: Roboto, arial, sans-serif;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Copyright>
          Copyright © 2023 Veritas Partners Asia - All Rights Reserved.{" "}
        </Copyright>
        {/* <Typography variant="body2" className="footer-text">
          <FooterLink href="#">Privacy Policy</FooterLink> |
          <FooterLink href="#">Terms & Conditions</FooterLink>
        </Typography> */}
      </Container>
    </StyledFooter>
  );
};

export default Footer;
