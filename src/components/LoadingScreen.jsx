import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${props => props.fadeOut ? '0' : '1'};
  transition: opacity 0.5s ease;
  pointer-events: ${props => props.fadeOut ? 'none' : 'auto'};
`;

const LoadingImage = styled.img`
  max-width: 300px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const LoadingScreen = () => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShow(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <LoadingContainer fadeOut={fadeOut}>
      <LoadingImage src="/src/assets/images/title.png" alt="Loading" />
    </LoadingContainer>
  );
};

export default LoadingScreen;