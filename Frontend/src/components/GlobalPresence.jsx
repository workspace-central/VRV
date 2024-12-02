import React from 'react';
import styled from 'styled-components';
import WorldMap from './WorldMap'; // We'll need to create this component separately

const GlobalPresenceSection = styled.section`
  position: absolute;
  width: 1280px;
  height: 1049px;
  left: calc(50% - 1280px/2);
  top: 3209px;
  background: #100C08;
`;

const Title = styled.h2`
  position: absolute;
  width: 481px;
  height: 54px;
  left: 16px;
  top: 49px;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 48px;
  line-height: 113%;
  color: #F5F5F5;
`;

const Description = styled.p`
  position: absolute;
  width: 649px;
  height: 44px;
  left: 23px;
  top: 128px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #F5F5F5;
`;

const MapContainer = styled.div`
  position: absolute;
  width: 620px;
  height: 497.77px;
  left: calc(50% - 620px/2);
  top: calc(50% - 497.77px/2 + 31.39px);
`;

const StatBox = styled.div`
  position: absolute;
  color: #F5F5F5;
  font-family: 'Inter';
`;

const DigitalNumber = styled.div`
  font-family: 'Digital Numbers';
  font-weight: 400;
  font-size: 48px;
  line-height: 113%;
  color: #F5F5F5;
`;

const DashedLine = styled.div`
  position: absolute;
  border: 2px dashed rgba(245, 245, 245, 0.6);
  transform: ${props => props.rotation || 'none'};
  width: ${props => props.width}px;
  height: 0;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`;

const GlobalPresence = () => {
  return (
    <GlobalPresenceSection>
      <Title>Our Global Presence</Title>
      <Description>
        We serve clients worldwide, offering innovative solutions backed by a network of experts 
        and local partners to deliver tailored support for every region.
      </Description>

      <MapContainer>
        <WorldMap /> {/* This will contain all the country elements */}
      </MapContainer>

      {/* Stats Boxes */}
      <StatBox style={{ left: '34px', top: '321px' }}>
        <DigitalNumber>200</DigitalNumber>
        <p>International clients, including Fortune 500 companies and government agencies.</p>
      </StatBox>

      <StatBox style={{ left: '935px', top: '586px' }}>
        <p>Recognized as a trusted leader in cybersecurity innovation and excellence, 
           we have a valuation reaching</p>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span style={{ fontFamily: 'Poppins', fontSize: '48px' }}>$</span>
          <DigitalNumber>400</DigitalNumber>
          <span>Million</span>
        </div>
      </StatBox>

      <StatBox style={{ left: 'calc(50% - 434px/2)', top: '845px' }}>
        <p>Provides Proactive Monitoring with rate</p>
        <DigitalNumber>500,000+</DigitalNumber>
        <p>hours of annual threat surveillance, ensuring real-time, consistent defense 
           against cyber risks for optimal security.</p>
      </StatBox>

      {/* Dashed Lines */}
      <DashedLine width={263} left={166} top={348} />
      <DashedLine width={144.06} left={306} top={758} />
      <DashedLine width={109.03} left={633.49} top={840.03} rotation="rotate(-90deg)" />
      {/* Add remaining dashed lines... */}
    </GlobalPresenceSection>
  );
};

export default GlobalPresence;