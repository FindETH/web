import styled from 'styled-components';

export const PanelWrapper = styled.div`
  flex: 1;
`;

export const PanelContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  height: 0;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.03) 0 0 0 0.0625em, rgba(0, 0, 0, 0.05) 0 0.0625em 0 0,
    rgba(0, 0, 0, 0.1) 0 0.0625em 0.1875em 0;
`;

export const PanelContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
