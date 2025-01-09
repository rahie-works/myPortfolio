import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

export const ExperienceDateHeading = styled.p`
  animation: 1s ${simpleAnimation};
  transition: opacity 0.5s ease-in ease-out;
`;
