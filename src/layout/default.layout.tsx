import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Layout, Grid, Drawer } from "antd";
import { FC, useState } from "react";
import Icon from "../assets/icons";
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
        <Icon type="logo" /> <h1>NextJS Antd Demo</h1>
      </DefaultHeader>
      <Layout>
        {breakpoints.md && (
          <DefaultSider>
            <SiderNav />
          </DefaultSider>
        )}
        <DefaultContent>{children}</DefaultContent>
        <DefaultFooter>Footer</DefaultFooter>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
