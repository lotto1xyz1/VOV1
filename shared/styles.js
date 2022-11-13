import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const SliderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  object-fit: cover;
  transition: 2s;
`;

export const SliderSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transformorigin: center;
  transformstyle: preserve-3d;
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(350px);
`;

export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;
