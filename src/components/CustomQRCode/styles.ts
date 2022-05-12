import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const QRCodeContainer = styled(motion.div)`
  z-index: 3;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px auto 6px;
  padding: 4px;
  width: 99%; // 100% will cause shifting issues
  height: auto;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 0 0 1px var(--qrcode-outline);
  canvas {
    display: block;
    max-width: 100%;
    width: 100% !important;
    height: auto !important;
  }
`;

export const PlaceholderKeyframes = keyframes`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`;
export const QRPlaceholder = styled(motion.div)`
  height: 0;
  padding-bottom: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    z-index: 4;
    content: '';
    position: absolute;
    inset: 0;
    transform: scale(1.5) rotate(45deg);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 50%,
      #ffffff,
      rgba(255, 255, 255, 0)
    );
    opacity: 0.75;
    background-size: 200% 100%;
    animation: ${PlaceholderKeyframes} 1000ms linear infinite both;
  }
`;

export const QRPlaceholderContent = styled(motion.div)`
  position: absolute;
  inset: 12px;
  background: repeat;
  background-size: 2.4% 2.4%;
  background-image: url("data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23EBEBEB'/%3E%3C/svg%3E%0A");

  &:before,
  &:after {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 30.5%;
    background: #fff;
  }
  &:after {
    z-index: 3;
    opacity: 0.8;
  }
`;
export const QRCodeSkeleton = styled(motion.div)`
  position: absolute;
  background: #ebebeb;
  border-radius: 9px;
  width: 13.5%;
  height: 13.5%;
  box-shadow: 0 0 0 3px white;
  &:before {
    content: '';
    position: absolute;
    inset: 8px;
    border-radius: 3px;
    background: inherit;
    box-shadow: 0 0 0 3px #fff;
  }
`;

export const LogoContainer = styled(motion.div)`
  z-index: 6;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoIcon = styled(motion.div)`
  position: relative;
  width: 25.7%;
  height: 25.7%;
  border-radius: 17px;
  overflow: hidden;
  &:before {
    pointer-events: none;
    z-index: 2;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  }
  svg {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    transform: scale(1.02); // fixes 1px gap in Safari
  }
`;