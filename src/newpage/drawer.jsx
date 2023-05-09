import React from 'react';

import { Button, Col, Drawer, Form, Input, Row,  Space } from 'antd';

const NewAccountPage = ({ visible, setVisible }) => {
  const onClose = () => {
    setVisible(false);
  }; 
  const [form] = Form.useForm();
  const onFinish = (values) => {
    form.resetFields();
    console.log(values);
    onClose();
  };
  return (
    <Drawer
    title="Create a new account"
    width={720}
    onClose={onClose}
    visible={visible}
    bodyStyle={{
      paddingBottom: 80,
    }}
    extra={
      <Space>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => form.submit()} type="primary">
          Submit
        </Button>
      </Space>
    }
  >
    
    <Form layout="vertical" hideRequiredMark
    onFinish={onFinish}
    form={form}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item

            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter user name',
              },
            ]}
          >
            <Input placeholder="Please enter user name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Please enter Email',
              },
              {
               type:"email"
              },
            ]}
          >
            <Input
              style={{
                width: '100%',
              }}
              
    
              placeholder="Please enter email"
            />
          </Form.Item>
        </Col>
      </Row>
      <Col span={24}>
          <Form.Item

            name="mobile"
            label="Mobile"
            rules={[
              {
                required: true,
                message: 'Please enter mobile number',
              },
              {
                type:"tel"
               },
            ]}
          >
            <Input placeholder="Please enter mobile number" />
          </Form.Item>
        </Col>
     
    </Form>
  </Drawer>
  );
};

export default NewAccountPage;
