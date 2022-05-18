import type { NextPage } from "next";
import Icon from "../assets/icons";
import IconButton from "../components/style/button/icon.style";

import { Button, Collapse } from "antd";
import DefaultLayout from "../layout/default.layout";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>Antd components</h1>
        <h2>Collapse</h2>
        <Collapse>
        <CollapsePanel 
        key="hello there"
        header= {<div>hello</div>}
        />
        </Collapse>
      </div>
    </DefaultLayout>
  );
};

export default Home;
