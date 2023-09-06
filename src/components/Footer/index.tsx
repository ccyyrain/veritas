import styled from "styled-components";
import { Container, Typography, Link as MuiLink } from "@mui/material";

const StyledFooter = styled.footer`
  background-color: #f5f5f5; /* This is just an example color */
  padding: 1rem 0;

  .footer-text {
    @apply text-center text-gray-600;
  }
`;

const FooterLink = styled(MuiLink)`
  margin: 0 8px;
  @apply text-blue-500 hover:text-blue-700;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Typography variant="body1" className="footer-text">
          Copyright © 2023 Veritas Partners Asia - All Rights Reserved.{" "}
        </Typography>
        {/* <Typography variant="body2" className="footer-text">
          <FooterLink href="#">Privacy Policy</FooterLink> |
          <FooterLink href="#">Terms & Conditions</FooterLink>
        </Typography> */}
      </Container>
    </StyledFooter>
  );
};

export default Footer;
