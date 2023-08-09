import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
  {
    label: "4rd menu item",
    key: "4",
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};
interface Props {
  title: string;
  menuProps: MenuProps;
}
interface DropDownProps {
  title: string;
  menuProps: MenuProps;
}
const DropDown: React.FC<DropDownProps> = ({ title, menuProps }: Props) => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          {title}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);

export default DropDown;
