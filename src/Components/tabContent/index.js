import { Tabs } from 'antd';
import React from 'react';
import './tabcontent.scss'

const { TabPane } = Tabs
const TabContent = (props) => {
  return (
    <div className="tabcontent">
      <Tabs defaultActiveKey="1">
        <TabPane tab="DASHBOARD" key="1">

        </TabPane>
        <TabPane tab="TEAMS" key="2">

        </TabPane>
        <TabPane tab="ANALYTICS" key="3">

        </TabPane>
        <TabPane tab="BILLING" key="4">

        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabContent;