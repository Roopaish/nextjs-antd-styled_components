import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Layout, Grid, Drawer, Row, Col } from "antd";
import { FC, useState } from "react";
import Icon from "../assets/icons";
import HeaderNav from "./component/header.nav";
import SiderNav from "./component/sider.nav";
import {
  DefaultContent,
  DefaultFooter,
  DefaultHeader,
  DefaultSider,
} from "./style/wrap.style";
const { useBreakpoint } = Grid;

interface LayoutProps {
  children: any;
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const breakpoints = useBreakpoint();

  const showDrawer = () => {
    setDrawerVisibility(true);
  };
  const closeDrawer = () => {
    setDrawerVisibility(false);
  };

  return (
    <Layout>
      <DefaultHeader>
        {!breakpoints.md && (
          <MenuOutlined style={{ fontSize: 20 }} onClick={showDrawer} />
        )}
        <Drawer
          title="Antd NextJS"
          placement="left"
          closable={false}
          onClose={closeDrawer}
          visible={drawerVisibility}
          extra={<CloseOutlined onClick={closeDrawer} />}
        >
          <SiderNav />
        </Drawer>

        <Row justify="center" align="middle" gutter={16}>
            <Icon type="logo" />
            <h1 style={{paddingLeft: 12, marginTop: 12}} >NextJS Antd</h1>
        </Row>

        <HeaderNav />
      </DefaultHeader>
      <Layout>
        {breakpoints.md && (
          <DefaultSider>
            <SiderNav />
          </DefaultSider>
        )}
        <DefaultContent>{children}</DefaultContent>
        <DefaultFooter>
          <Row>
            <Col flex="100px">@roopaish</Col>
            <Col flex="auto">Fill Rest</Col>
          </Row>
        </DefaultFooter>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
