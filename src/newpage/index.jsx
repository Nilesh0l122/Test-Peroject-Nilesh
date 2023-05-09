import React, { useState } from 'react';

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import NewAccountPage from './drawer'
import FormComponent from './form'
const HomePage = (props) => {
  
  const [visible, setVisible] = useState(false);
  const [asvisible, setasVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const handleShowDrawer = () => {
    setasVisible(true);
  }

  return (
    <>
      
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}
      style={{ margin: '10px' }}
      >
        Create new account
      </Button>
      <NewAccountPage visible={visible} setVisible={setVisible} />




      <Button  icon={<PlusOutlined />} type="primary" onClick={handleShowDrawer}>Open Form</Button>
      <FormComponent asvisible={asvisible} setasVisible={setasVisible}  />
    </>
  );
};

export default HomePage;
