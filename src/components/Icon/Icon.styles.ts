import styled from 'styled-components';

interface ImageProps {
  size?: string;
}

export const Image = styled.img<ImageProps>`
  width: ${({ size = '0.75rem' }) => size};
  height: ${({ size = '0.75rem' }) => size};
`;
