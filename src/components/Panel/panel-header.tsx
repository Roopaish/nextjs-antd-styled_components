import { Col, Row } from "antd";
import { FC } from "react";

type Props = {
  author?: string;
  action?: string;
  date?: string;
};

const PanelHeader: FC<Props> = (props) => {
  const { author, action, date } = props;

  return (
    <Row
      gutter={16}
      justify="space-between"
      style={{ width: "100%" }}
      align="middle"
    >
      <Col>
        <h4>{author || "John Doe"}</h4>
      </Col>
      <Col>
        <h5>{action || "Place the project in action"}</h5>
      </Col>
      <Col>{date || "2022-01-20"}</Col>
    </Row>
  );
};

export default PanelHeader;
