import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Icon from "../assets/icons";
import IconButton from "../components/style/button/icon.style";

import { Button } from "antd";
import DefaultLayout from "../layout/default.layout";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className={styles.container}>
        <IconButton type="dashed" icon={<Icon type="person" color="#000" />}>
          good
        </IconButton>
        <Button type="primary">Primary Button</Button>
      </div>
    </DefaultLayout>
  );
};

export default Home;
