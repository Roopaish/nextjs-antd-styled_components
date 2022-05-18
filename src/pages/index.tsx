import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Icon from "../assets/icons";
import IconButton from "../components/style/button/icon.style";

import { Button } from "antd";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <IconButton type="dashed" icon={<Icon type="person" color="#000" />}>
        good
      </IconButton>
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default Home;
