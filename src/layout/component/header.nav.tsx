import {
  SearchOutlined,
  BellOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, List, Popover, Tabs, Input, Modal } from "antd";
import { useState } from "react";
import { CustomInput } from "../../components/style/Input/input.style";
import { Nav } from "./style/nav.style";
import { TabContent, TabsWrap } from "./style/tabs.style";

const { TabPane } = Tabs;

const data = [
  {
    title: "you have been alerted 1",
  },
  {
    title: "you have been alerted 2",
  },
  {
    title: "you have been alerted 3",
  },
  {
    title: "you have been alerted 4",
  },
];

const NotificationPopover = () => {
  return (
    <TabsWrap defaultActiveKey="1" centered>
      <TabPane tab="Messages(0)" key="1">
        <TabContent>
          <BellOutlined style={{ fontSize: 76 }} />
          <span>No messages for now.</span>
        </TabContent>
      </TabPane>
      <TabPane tab="Alerts(4)" key="2">
        <TabContent flex={false}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Please check what you did wrong!"
                />
              </List.Item>
            )}
          />
        </TabContent>
      </TabPane>
      <TabPane tab="Warnings(0)" key="3">
        <TabContent>
          <WarningOutlined style={{ fontSize: 76 }} />
          <span>No warnings for now.</span>
        </TabContent>
      </TabPane>
    </TabsWrap>
  );
};

const HeaderNav = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Nav>
      <SearchOutlined onClick={showModal} />
      <Modal
        title="Search for something"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input />
      </Modal>
      <Popover
        placement="bottomRight"
        content={<NotificationPopover />}
        trigger="click"
      >
        <div style={{ cursor: "pointer" }}>
          <Badge size="small" count={5}>
            <BellOutlined />
          </Badge>
        </div>
      </Popover>
    </Nav>
  );
};

export default HeaderNav;
