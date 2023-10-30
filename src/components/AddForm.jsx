import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { contactCotentext } from '../context/ContactContextProvider';
import { useNavigate } from 'react-router-dom';

const AddForm = () => {

    const { addContact } = useContext(contactCotentext)

const navigate = useNavigate()
    const onFinish = (values) => {
        addContact(values)
        navigate('/contacts')
      };
    return(
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
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input contact name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Last Name"
      name="lastName"
      rules={[
        {
          required: true,
          message: 'Please input contacts Last Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      label="Phone Number"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Please input contact number!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Contacts Photo"
      name="imgUrl"
      rules={[
        {
          required: true,
          message: 'Please input contacts photo!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        ADD contact
      </Button>
    </Form.Item>
  </Form>
    )
}
export default AddForm;