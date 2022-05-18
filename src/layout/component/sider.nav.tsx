import { Menu, MenuProps } from "antd";
import Icon from "../../assets/icons";

const items: MenuProps["items"] = ["person","review"].map((iconType, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: (
      <span>
        <Icon type={iconType} color="black" strokeWidth="2" />
      </span>
    ),
    label: `SubNav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `Option${subKey}`,
      };
    }),
  };
});

const SiderNav = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{
        height: "100%",
        borderRight: 0,
        backgroundColor: "#001529",
        color: "white",
      }}
      items={items}
    />
  );
};

export default SiderNav;
