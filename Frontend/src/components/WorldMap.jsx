import React from 'react';
import styled from 'styled-components';

const CountryElement = styled.div`
  position: absolute;
  background: #CCCCCC;
  border: 0.3072px solid #FFFFFF;
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
`;

const WorldMap = () => {
  const countries = [
    { code: 'AD', left: '48.75%', right: '51.21%', top: '52.87%', bottom: '47.08%' },
    { code: 'AE', left: '55.51%', right: '43.84%', top: '56.89%', bottom: '42.35%' },
    // ... Add all other countries
  ];

  return (
    <>
      {countries.map(country => (
        <CountryElement
          key={country.code}
          left={country.left}
          right={country.right}
          top={country.top}
          bottom={country.bottom}
        />
      ))}
    </>
  );
};

export default WorldMap;