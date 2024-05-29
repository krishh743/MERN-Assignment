import { Input } from 'antd';
import React, { useState } from 'react';
import AuthLayout from '../AuthLayout';
import ZEBRA_ICON from '../../../assets/logo.jpg';
// import GoogleIcon from '../../../assets/GoogleIcon.png';
import { getLoginApiCall } from '../../../actions/useAuth';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../../components/ui-elements/Loader/Loader';
const Login = () => {
  const router = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const handleApiCall = async (data: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const response = await getLoginApiCall(data);
      const token = response?.data?.data?.token;
      console.log(token,"token")
      if (!token) {
        Cookies.set('auth_token', token);
        router('/dashboard');
      }
      toast.success('Successfully logged in.');
    } catch (error) {
      console.error('API call error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const validationErrors = {
      email: '',
      password: '',
    };
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    if (Object.values(validationErrors).every((error) => !error)) {
      setIsLoading(true);
      const data = {
        email: formData.email,
        password: formData.password,
      };
      handleApiCall(data);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <AuthLayout>
      {!isLoading ? (
        <div className="min-h-screen   flex items-center gap-y-10 flex-col justify-center">
          <div className="bg-white  rounded-xl min-w-[500px] z-30 px-12 lg:px-8 py-5 xl:py-10 flex flex-col gap-y-1">
            <span className=" flex justify-center ">
              <img
                src={ZEBRA_ICON}
                alt="Logo"
                className="object-contain w-1/2"
              />
            </span>
            <h1 className="text-xl font-medium lg:font-normal lg:text-3xl mt-1 leading-10 text-gray-700 text-center w-full">
              {/* Welcome to Zebralearn */}
            </h1>
            <span className="text-sm lg:text-base text-center text-gray-500 flex justify-center">
              Welcome to Sapphire Team
            </span>
            <form onSubmit={handleSubmit} className="flex flex-col  gap-2 mt-2">
              <div className="col-span-1 flex-col flex gap-y-.5">
                <label className="text-base    pb-2">Email</label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  size="large"
                  className="rounded border border-gray-600"
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
              <div className="col-span-1 flex-col flex gap-y-.5">
                <label className="text-base    pb-2">Password</label>
                <Input.Password
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  size="large"
                  className="rounded border border-gray-600"
                />
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
                <span
                  // onClick={() => router('/auth/forgot-password')}
                  className="font-medium text-primary mt-1 cursor-pointer hover:text-darkPrimary"
                >
                  Forgot password?
                </span>
              </div>

              <span className="flex justify-center mt-4">
                <button
                  className="w-min p-1 rounded border hover:border-primary hover:text-primary hover:font-bold"
                  // onClick={() => router.push('/dashboard')}
                >
                  <span className="flex text-xs gap-x-2 px-4 py-1 whitespace-nowrap">
                    LOG IN
                    {/* <ArrowRightIcon className='w-4 h-4 text-white' /> */}
                  </span>
                </button>
              </span>
              {/* <p className="text-center text-sm">OR</p>*/}
              <span className="flex justify-center ">
                {/*<button
                // size={4}
                // variant={ButtonVariants.WHITE}
                className="w-min p-1 shadow-sm rounded border hover:border-primary "
                // onClick={handleGoogleSignIn}
              >
                <span className="flex text-gray-500 items-center font-medium gap-x-3 px-6  whitespace-nowrap">
                  <span className="w-5 h-4">
                    <img
                      src={GoogleIcon}
                      alt="GoogleLogo"
                      className="object-contain"
                    />
                  </span>
                  Login with Google
                </span>
              </button>*/}
              </span>
              <span className="flex justify-center ">
                {/*<button
                className="w-min p-1 shadow-sm bg-black rounded"
                onClick={() => router('/')}
              >
                <span className="flex text-white   items-center font-medium gap-x-3 px-8  whitespace-nowrap">
                  <span className="w-4">
                     <Image
                      src={EmailIcon}
                      alt='GoogleLogo'
                      className='object-contain'
                    />
                  </span>{' '}
                  Login with Apple
                </span>
              </button>*/}
              </span>
              <span className="text-center flex justify-center text-sm">
                Don’t have an account?{' '}
                <p
                  onClick={() => router('/signup')}
                  className="text-primary w-2 px-1 hover:font-bold hover:underline cursor-pointer"
                >
                  SignUp
                </p>
              </span>
              <span className="text-center text-sm">
                ©2023 - Sapphire. All rights reserved
              </span>
            </form>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </AuthLayout>
  );
};
export default Login;
