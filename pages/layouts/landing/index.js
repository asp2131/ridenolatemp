import React from 'react';

import { Container, Call, Image, Main, About } from './styles';

// import landingImage from '../../assets';
// import placeholder from '../../assets';

const Landing = () => {
  return (
    <Container>
      <Image>
        <img src={'/ride-logo.png'} alt='Loql' cover center />
        <section>
          <h1>RideApp is New Orleans first on-demand economy company</h1>
          <p>
              A clean, frugal service for the whole community 
          </p>
        </section>
      </Image>
      <Main>
        <Call>
          <h1>Want to drive for us?</h1>
          <p>
            Register your driver's liscence today!{' '}
          </p>
          <a href='/register'>Register</a>
        </Call>

        <About>
          <div>
            <h2>Why RideApp?</h2>
          </div>
          <section>
            <ul>
              <li>
                <img src={'https://images.pexels.com/photos/1028742/pexels-photo-1028742.jpeg?cs=srgb&dl=pexels-acharaporn-kamornboonyarush-1028742.jpg&fm=jpg'} alt='' />
                <h4>We're on your side</h4>
                <p>
                  Unlike most transportation platforms, we don’t charge high
                  fees, or hold drivers to unreasonable &nbsp;
                  <a id='terms' href='/terms'>
                    terms &amp; conditions.
                  </a>
                </p>
              </li>
              <li>
                <img src={'https://images.pexels.com/photos/1071249/pexels-photo-1071249.jpeg?cs=srgb&dl=pexels-fox-1071249.jpg&fm=jpg'} alt='' />
                <h4>We’re transparent</h4>
                <p>
                  We’re open, transparent and obsessed with creating value for
                  businesses and communities.
                </p>
              </li>

              <li>
                <img src={'/blackfam3.jpeg'} alt='' />
                <h4>We’re a community too</h4>
                <p>
                  RideApp is a team of developers and profesionals doing all this because we think
                  it’s the right thing to do.
                </p>
              </li>
            </ul>
          </section>
          <div id='more'>
            <a id='about' href='/about'>
              More about us
            </a>
          </div>
        </About>
      </Main>
    </Container>
  );
};

export default Landing;
