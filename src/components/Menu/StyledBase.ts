import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  transition: top 0.1s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: 64px;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

export const Body = styled.div`
  position: relative;
  display: flex;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  margin-top: 64px;
  transition: margin-top 0.2s, margin-left 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  margin-left: 56px;
  max-width: 56px;
`;

export const LeftHeader = styled.div`
  display: flex;
`;

export const RightHeader = styled(LeftHeader)`
  margin-right: 16px;
`;
