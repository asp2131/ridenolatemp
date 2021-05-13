import React from 'react';

import { Container } from './styles';

const Footer = () => (
  <Container>
    <span>&copy; {new Date().getFullYear()} Loql</span>
  </Container>
);

export default Footer;
