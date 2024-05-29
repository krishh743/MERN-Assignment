import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { IoCreateOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import UserOne from '../assets/user.png';
import { Input, Modal } from 'antd';
import { createUserApi, userInfoApi } from '../services/apiservices';
import { AiOutlineClose } from 'react-icons/ai';
import { PiUsersThreeLight } from "react-icons/pi";
import { UserInfoInterface } from '../utills/interfaces/interface';

const DropdownUser = () => {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const[userInfo,setUserInfo] = useState<UserInfoInterface>()
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    password:'',
    userRole: 'Admin',
  });

  const handleCreateUser = () => {
    setModalOpen(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleApiCall = async (data: any) => {
    try {
      const response = await createUserApi(data);
      console.log(response, 'user created');
    } catch (error) {
      console.error('API call error:', error);
    }
  };

  const submitForm = () => {
    handleApiCall({
      name: formData.name,
      email: formData.emailId,
      password: formData.password,
      role_id: formData.userRole,
    });

    setFormData({
      name: '',
      emailId: '',
      password:'',
      userRole: '',
    });

    setModalOpen(false);
    // console.log(formData, 'formdata');
    // Perform other actions, e.g., send the FormData to the server
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(()=>{
    const getUserDetails = async () => {
      try {
        const response = await userInfoApi();
        setUserInfo(response?.data)
      } catch (error) {
        console.error('API call error:', error);
      }
    };
    getUserDetails()
  },[])

  // console.log(userInfo,"userInfo")

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleLogout = () => {
    // Cookies.remove('auth_token');
    navigate('/');
  };


  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
           {userInfo?.name}
          </span>
          <span className="block text-xs">User</span>
        </span>

        <span className="h-8 w-8 rounded-full flex items-center ">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s"} alt={""} className="rounded-full h-full w-full" />
        </span>

        <svg
          className={`hidden fill-current sm:block ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-48 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <CiUser className="text-xl" />
              My Profile
            </Link>
          </li>
          <li>
            <div
              onClick={handleCreateUser}
              className="flex items-center gap-3.5 cursor-pointer text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <IoCreateOutline className="text-xl" />
              Create User
            </div>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <PiUsersThreeLight className="text-xl" />
            
                All Users
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <IoSettingsOutline className="text-xl" />
              Account Settings
            </Link>
          </li>
          <div className="flex items-center justify-center">
        <button
          className="inline-flex items-center justify-center gap-2.5 py-2 px-10 rounded-md bg-[#FE5512] text-center font-bold text-white hover:bg-opacity-90"
          onClick={handleLogout}
        >
          <span>Logout</span>
        </button>
      </div>
        </ul>

        <Modal
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          onOk={submitForm}
          closeIcon={<></>}
          closable={false}
          width={500}
          centered
          footer={<></>}
        >
          <div className="">
            <div className=" px-6 py-6 rounded-t-xl">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <b className="text-2xl">Create user </b>
                </div>

                <AiOutlineClose
                  onClick={() => setModalOpen(false)}
                  style={{ fontSize: '26px', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-3 px-6">
              <b className="text-base text-[#4B4B4B]">Full Name</b>

              <Input
                placeholder="Enter Full Name"
                className="text-base focus:border-primary hover:border-primary"
                value={formData.name}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 px-6">
              <b className="text-base text-[#4B4B4B]">Email Id</b>

              <Input
                placeholder="Enter Email Id"
                className="text-base focus:border-primary hover:border-primary"
                value={formData.emailId}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInputChange('emailId', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 px-6">
              <b className="text-base text-[#4B4B4B]">Password</b>

              <Input
                placeholder="Enter your password"
                className="text-base focus:border-primary hover:border-primary"
                value={formData.password}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInputChange('password', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 px-6">
              <b className="text-base text-[#4B4B4B]">user role</b>

              <select
                className="p-2 rounded bg-white border"
                value={formData.userRole}
                onChange={(e:any) => handleInputChange('userRole', e.target.value)}
              >
                <option className="select-option">1</option>
                <option className="select-option">2</option>
                <option className="select-option">3</option>
              </select>
            </div>
          </div>
          <div className="flex items-center p-6 justify-center  space-x-2  border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => setModalOpen(false)}
              type="button"
              className="w-full text-black border rounded-lg p-2"
            >
              Cancel
            </button>
            <button
              type="button"
              className="w-full text-white bg-primary rounded-lg p-2 "
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </Modal>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
