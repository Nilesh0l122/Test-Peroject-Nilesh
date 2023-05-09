import React, { useState } from 'react';
import { Button, Drawer, Form, Input } from 'antd';

const FormComponent = ({ asvisible, setasVisible }) => {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    name: 'Nilesh',
    email: 'sunokitaab@gmail.com',
    message: 'hello kese ho',
  });
 

  const handleSubmit = (values) => {
    handleHideDrawer();
    console.log(values);
  };

  const handleHideDrawer = () => {
    setasVisible(false);
  };
//   setInitialValues({
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     message: 'Hello, world!',
//   });

  return (
    <div>
      <Drawer
        title="Form Fields"
        placement="right"
        closable={true}
        onClose={handleHideDrawer}
        visible={asvisible}
        width={400}
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          initialValues={initialValues}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter a message' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default FormComponent;
