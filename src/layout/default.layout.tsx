import { Layout } from "antd";
import { FC } from "react";
import {
  DefaultContent,
  DefaultFooter,
  DefaultHeader,
  DefaultSider,
} from "./style/wrap.style";

interface LayoutProps {
  children: any;
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Layout>
      <DefaultSider>Sider</DefaultSider>
      <Layout>
        <DefaultHeader>Header</DefaultHeader>
        <DefaultContent>{children}</DefaultContent>
        <DefaultFooter>Footer</DefaultFooter>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
