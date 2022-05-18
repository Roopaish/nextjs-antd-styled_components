import styled from "styled-components";
import { Layout } from "antd";
const { Sider, Header, Content, Footer } = Layout;

const DefaultHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
  background: white;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
`;

const DefaultSider = styled(Sider)`
  background-color: white;
  padding-top: 84px;
  overflow: auto,
  height: 100vh,
  position: fixed,
  left: 0,
  top: 0,
  bottom: 0,
`;

const DefaultContent = styled(Content)`
  min-height: 100vh;
  margin: 20px;
  margin-top: 84px;
  padding: 20px;
  background: white;
`;

const DefaultFooter = styled(Footer)``;

export { DefaultHeader, DefaultSider, DefaultContent, DefaultFooter };
