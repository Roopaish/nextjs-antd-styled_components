import type { NextPage } from "next";
import Icon from "../assets/icons";
import IconButton from "../components/style/button/icon.style";

import { Button, Col, Collapse, Row } from "antd";
import DefaultLayout from "../layout/default.layout";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import { CaretRightOutlined } from "@ant-design/icons";
import PanelHeader from "../components/Panel/panel-header";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>Antd components</h1>
        <h2>Collapse</h2>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header={<PanelHeader />}
            key="1"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header={
              <PanelHeader
                author="Sam Wilson"
                action="Directed the project"
                date="2022-09-09"
              />
            }
            key="2"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="This is panel header 3"
            key="3"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </DefaultLayout>
  );
};

export default Home;
