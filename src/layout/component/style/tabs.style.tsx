import { Tabs } from "antd";
import styled from "styled-components";

const { TabPane } = Tabs;

const TabsWrap = styled(Tabs)`
  padding: 12px;
  height: 320px;
`;

interface ContentProps {
  flex?: boolean;
}

const TabContent = styled.div<ContentProps>`
  flex-direction: column;
  justify-content: center;
  display: ${({ flex = true }) => (flex ? "flex" : "block")};
  align-items: center;
  height: 240px;
  width: 100%;
  overflow: auto;
`;

export { TabsWrap, TabContent };
