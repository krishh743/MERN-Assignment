import React, { useState } from 'react';
import { Popover, ConfigProvider, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import BLOG_REPORT from '../../../assets/blog_report.png';
import DELETE from '../../../assets/delete.png';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { TooltipPlacement } from 'antd/es/tooltip';
import SeoModal from './SeoModal';

interface SidePopupProps {
  handleDeleteBlog: any;
  handleRestorePost: any; // report or restore
  secondOption: string;
  placement: TooltipPlacement; //position of popup
  deleteText: string;
  id?: number;
  isPost?: boolean;
}

const content = (
  handleDeleteBlog: () => void,
  handleRestorePost: () => void,
  secondOption: string,
  deleteText: string,
  thirdText: string,
  handleSetSeo: () => void
) => (
  <div className="flex flex-col gap-2 px-4">
    <div className=" ">
      <button
        className="flex items-center rounded-full py-0 hover:border-primary hover:text-primary "
        onClick={() => {
          handleDeleteBlog();
        }}
      >
        <img src={DELETE} height={20} width={20} alt="Delete" />
        <span className="flex text-sm gap-x-2 px-4 py-1 whitespace-nowrap">
          {deleteText}
        </span>
      </button>
    </div>
    <div>
      <button
        onClick={() => {
          handleRestorePost();
        }}
        className="flex items-center rounded-full py-0 hover:border-primary hover:text-primary"
      >
        {/* <img src={BLOG_REPORT} height={20} width={20} alt="BLOG_REPORT" /> */}
        <EditOutlined style={{ fontSize: '20px' }} />
        <span className="flex text-sm gap-x-2 px-4 py-1 whitespace-nowrap">
          {secondOption}
        </span>
      </button>
    </div>
    <div>
      <button
        onClick={() => {
          handleSetSeo();
        }}
        className="flex items-center rounded-full py-0 hover:border-primary hover:text-primary"
      >
        <img src={BLOG_REPORT} height={20} width={20} alt="BLOG_REPORT" />
        <span className="flex text-sm gap-x-2 px-4 py-1 whitespace-nowrap">
          {thirdText}
        </span>
      </button>
    </div>
  </div>
);

const buttonWidth = 80;

const SidePopup: React.FC<SidePopupProps> = ({
  handleDeleteBlog,
  handleRestorePost,
  secondOption,
  deleteText,
  placement,
  id,
  isPost,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [addSeo, setAddSeo] = useState(false);

  const showModal = () => {
    setModalOpen(true);
    setPopoverVisible(false);
  };

  const hideSubmit = () => {
    handleDeleteBlog();
    setModalOpen(false);
  };

  const hideModal = () => {
    setModalOpen(false);
  };

  const showSeoModal = () => {
    setAddSeo(true);
    setPopoverVisible(false);
  };

  const closeSeoModal = () => {
    setAddSeo(false);
  };

  return (
    <ConfigProvider
      button={{
        style: { width: buttonWidth, margin: 4 },
      }}
    >
      <div className="demo">
        <div style={{ width: buttonWidth, float: 'inline-start' }}>
          <Popover
            placement={placement}
            content={() =>
              content(
                showModal,
                handleRestorePost,
                secondOption,
                deleteText,
                'Set SEO',
                showSeoModal
              )
            }
            trigger="click"
            visible={popoverVisible}
            onVisibleChange={(visible) => setPopoverVisible(visible)}
          >
            <div className="flex items-center justify-center border border-gray-700 w-7 h-7 rounded-full">
              <EllipsisOutlined />
            </div>
          </Popover>
        </div>
      </div>

      <Modal
        title=""
        open={modalOpen}
        onOk={hideSubmit}
        onCancel={hideModal}
        closable={false}
        okText="Yes"
        cancelText="NO"
      >
        <div className="flex justify-center items-center gap-x-5 py-10">
          <span className="text-yellow-400">
            <ExclamationCircleOutlined style={{ fontSize: '20px' }} />
          </span>
          <span className="font-medium text-lg">
            Are you sure want to delete ?
          </span>
        </div>
      </Modal>
      <SeoModal
        closeModal={closeSeoModal}
        visible={addSeo}
        id={id as number}
        isPost={isPost}
      />
    </ConfigProvider>
  );
};

export default SidePopup;
