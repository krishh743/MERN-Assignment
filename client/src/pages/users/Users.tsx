import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { getAlluserApi } from '../../services/apiservices';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  roles: string[];
}
const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleApiCall = async () => {
    try {
      const response = await getAlluserApi();
      const userData = response?.data?.data?.data || [];
      setUsers(userData);
    } catch (error) {
      console.error('API call error:', error);
    }
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Roles',
      dataIndex: 'roles',
      key: 'roles',
      render: (roles: string[]) => (
        <>
          {roles &&
            roles.map((role) => (
              <Tag color="blue" key={role}>
                {role}
              </Tag>
            ))}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: User) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} />;
};

export default Users;
