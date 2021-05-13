import React from 'react';

import { Container } from '../../../extFtStyles';

const Footer = () => (
  <Container>
    <span>&copy; {new Date().getFullYear()} Loql</span>
  </Container>
);

export default Footer;
