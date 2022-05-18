import { Input } from "antd";
import styled from "styled-components";

interface Props {
  hidden?: boolean;
}

const CustomInput = styled(Input)<Props>`
  width: ${({ hidden = false }) => (hidden ? "0px" : "150px")};
  opacity: ${({ hidden = false }) => (hidden ? "0" : "1")};
`;

export { CustomInput };
