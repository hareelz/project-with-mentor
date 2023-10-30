import React, { useContext } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { contactCotentext } from '../context/ContactContextProvider';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;
const ContactCard = (props) => {
    const {name, lastName, imgUrl, phone, id} = props
    const {deleteContact} = useContext(contactCotentext)
    const navigate = useNavigate()
    return (
        <Card
    style={{
      width: '19%',
      margin: '3%',
    }}
    cover={
      <img
        alt="example"
        src={`${imgUrl}`}
      />
    }
    actions={[
      <DeleteOutlined key="delete" onClick={() => deleteContact(id)}/>,
      <EditOutlined key="edit" onClick={() => navigate(`/edit/${id}`)}/>,
      
    ]}
  >
    <Meta
      title={`${name} ${lastName}`}
      description={`${phone}`}
    />
  </Card>
    )
}
export default ContactCard;