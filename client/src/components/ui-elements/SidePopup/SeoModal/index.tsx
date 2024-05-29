/* eslint-disable react-hooks/exhaustive-deps */
import { XIcon } from '@heroicons/react/outline';
import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import {
  editBlogsApi,
  editSchoolDetailsApi,
} from '../../../../services/apiservices';

interface Props {
  visible: boolean;
  closeModal: () => void;
  id: number;
  isPost?: boolean;
}

const SeoModal: React.FC<Props> = ({ closeModal, visible, id, isPost }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    title: '',
    meta_description: '',
    keywords: '',
    author: '',
  });

  const onFinish = async (values: any) => {
    console.log('Form values:', values);
    try {
      if (isPost) {
        await editBlogsApi(String(id), formData);
      } else {
        await editSchoolDetailsApi(formData, id);
      }
      handleClose();
    } catch (error) {
      console.error('API call error:', error);
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      meta_description: '',
      keywords: '',
      author: '',
    });
    form.resetFields();
    closeModal();
  };

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      onFinish(form.getFieldsValue());
    } catch (error) {
      console.error('Validation error:', error);
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleKeyWords = useCallback(
  //   (fieldName: string) =>
  //     (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //       const { value } = e.target;
  //       const cleanedValue = value.replace(/\s+/g, ',');
  //       setFormData({ ...formData, [fieldName]: cleanedValue });
  //     },
  //   [formData]
  // );

  return (
    <Modal
      visible={visible}
      title={
        <div className="flex justify-between pb-2 border-b border-[#a8a6a6]">
          <span>SEO</span>{' '}
          <div className="flex justify-end">
            <XIcon
              onClick={() => handleClose()}
              className="w-5 h-5 text-gray-800 hover:text-gray-600 cursor-pointer"
            />
          </div>
        </div>
      }
      maskClosable={false}
      closable={false}
      footer={null}
      onCancel={handleClose}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
        initialValues={formData}
        className="flex flex-col gap-y-2"
      >
        <Form.Item
          label={<span className="font-medium">Author Name</span>}
          name="author"
          labelAlign="left"
          rules={[{ required: true, message: 'Please enter the Author Name' }]}
        >
          <Input
            className=""
            placeholder="Please provide Author Name"
            size="large"
            value={formData.author}
            onChange={(e) => handleInputChange('author', e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label={
            <span className="font-medium flex gap-x-1 items-center">
              Meta Title{' '}
              <p className="text-sm text-[#a09e9e]">(Minimum 64 characters)</p>
            </span>
          }
          name="title"
          labelAlign="left"
          rules={[
            { required: true, message: 'Please enter the meta title' },
            {
              min: 64,
              message: 'Meta title must be at least 64 characters',
            },
          ]}
        >
          <Input
            className=""
            showCount
            placeholder="Please provide meta title"
            size="large"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={
            <span className="font-medium flex gap-x-1 items-center">
              Meta Descriptions{' '}
              <p className="text-sm text-[#a09e9e]">
                {' '}
                (Minimum 120, Maximum 150 characters)
              </p>
            </span>
          }
          name="meta_description"
          rules={[
            { required: true, message: 'Please enter the description' },
            {
              min: 120,
              message: 'Description must be at least 120 characters',
            },
            { max: 150, message: 'Description must be at most 150 characters' },
          ]}
        >
          <Input.TextArea
            showCount
            placeholder="Please provide meta description"
            className="text-base focus:border-primary hover:border-primary"
            value={formData.meta_description}
            onChange={(e) =>
              handleInputChange('meta_description', e.target.value)
            }
          />
        </Form.Item>
        <Form.Item
          label={<span className="font-medium">Keywords</span>}
          name="keywords"
          rules={[{ required: true, message: 'Please enter the keywords' }]}
        >
          <Input
            placeholder="Please provide keywords"
            size="large"
            className="text-base focus:border-primary hover:border-primary"
            value={formData.keywords}
            onChange={(e) => handleInputChange('keywords', e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <span className="flex justify-end">
            <Button onClick={handleClose} className="w-min p-1 border-primary">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              type="primary"
              className="w-min p-1 text-white hover:text-white "
            >
              Submit
            </Button>
          </span>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SeoModal;
