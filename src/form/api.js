// import { Table } from 'antd';
// import React from 'react';
// import { useState, useEffect } from 'react';

// const Api = () => {
//   const [data , setData]=useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>{
//    result.json().then((resp)=>{
//          console.log(resp)
//       setData(resp)
//      } )
//    }).catch((error) => console.log(error));
  
//   }, []);
// const columns=[
//     {
//         title:"s.no",
//         dataIndex:"id",
//     },
//     {
//         title:"title",
//         dataIndex:"title",
//     },
//     {
//       title:"Stock",
//       dataIndex:"body",
//   },
  
// ]

//   return (
//     <>
//    <div>
//       {data.length > 0 ? (
//         <Table columns={columns} dataSource={data} />
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//    </>
//   );
// }

// export default Api;
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Api = () => (

  fetch("http://localhost:4000/todo", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  }),


  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="userid"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Api;
