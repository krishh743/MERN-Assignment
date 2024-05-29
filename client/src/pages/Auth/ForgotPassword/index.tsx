// import { ArrowRightIcon } from '@heroicons/react/outline';
// import { Input } from 'antd';
// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import ReactCodeInput from 'react-code-input';
//
// import AuthLayout from '../AuthLayout';
// import ButtonDefault, { ButtonVariants } from '../../shared/basic/button';
// import { ShouldRender } from '../../shared/basic/ShouldRender';
//
// const ForgotPassword = () => {
//   const [forgotPasswordStep, setForgotPasswordStep] = useState(0);
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [password, setPassword] = useState({
//     reEnterPassword: '',
//     password: '',
//   });
//   const [passwordErrors, setPasswordErrors] = useState({
//     reEnterPassword: '',
//     password: '',
//   });
//   const [emailErrors, setEmailErrors] = useState({
//     email: '',
//   });
//
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//
//     if (name === 'registeredEmail') {
//       setEmail(value);
//     } else if (name === 'password' || name === 'reEnterPassword') {
//       setPassword({
//         ...password,
//         [name]: value,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };
//
//   const submitEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//
//     const validationErrors = {
//       email: '',
//     };
//     if (!email) {
//       validationErrors.email = 'Email is required';
//     } else if (!isValidEmail(email)) {
//       validationErrors.email = 'Invalid email';
//     }
//
//     setEmailErrors(validationErrors);
//
//     if (Object.values(validationErrors).every((error) => !error)) {
//       console.log(formData);
//       setForgotPasswordStep(1);
//     }
//   };
//
//   const submitPassword = (e: React.FormEvent) => {
//     e.preventDefault();
//
//     const validationErrors = {
//       reEnterPassword: '',
//       password: '',
//     };
//     if (!password.password) {
//       validationErrors.password = 'Password is required';
//     }
//     if (!password.reEnterPassword) {
//       validationErrors.reEnterPassword = 'Re-Enter Password is requires';
//     } else if (password.password !== password.reEnterPassword) {
//       validationErrors.reEnterPassword =
//         'Password didn`t matched! Please try again';
//     }
//
//     setPasswordErrors(validationErrors);
//
//     if (Object.values(validationErrors).every((error) => !error)) {
//       console.log(formData);
//       setForgotPasswordStep(3);
//     }
//   };
//   const isValidEmail = (email: string) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailRegex.test(email);
//   };
//
//   return (
//     <AuthLayout>
//       <div className='min-h-screen   flex items-center gap-y-10 flex-col justify-center'>
//         <div className='bg-white min-w-[400px] z-30 px-12 lg:px-8 py-5 xl:py-10 flex flex-col gap-y-1'>
//           <span className=' flex justify-center '>
//             {/* <Image
//               src={Logo}
//               alt='Logo'
//               className='object-contain h-7 w-full'
//             /> */}
//           </span>
//
//           <ShouldRender check={forgotPasswordStep === 0}>
//             <h1 className='text-xl font-medium lg:font-normal lg:text-3xl mt-1 leading-10 text-gray-700 text-center w-full'>
//               Forgot Password
//             </h1>
//             <form onSubmit={submitEmail} className='flex flex-col  gap-2 mt-5'>
//               <div className='col-span-1 flex-col flex gap-y-.5'>
//                 <label className='text-base    pb-2'>Registered email</label>
//                 <Input
//                   name='registeredEmail'
//                   value={email}
//                   onChange={handleChange}
//                   size='large'
//                   className='rounded-none border border-gray-600'
//                 />
//                 {emailErrors.email && (
//                   <p className='text-red-500'>{emailErrors.email}</p>
//                 )}
//               </div>
//
//               <span className='flex justify-center mt-2'>
//                 <ButtonDefault
//                   size={4}
//                   variant={ButtonVariants.PRIMARY}
//                   className='w-min p-1'
//                 >
//                   <span className='flex text-xs gap-x-2 px-4 py-1 whitespace-nowrap'>
//                     NEXT <ArrowRightIcon className='w-4 h-4 text-white' />
//                   </span>
//                 </ButtonDefault>
//               </span>
//               <span className='flex justify-center'>
//                 <span
//                   onClick={() => router.push('/auth/login')}
//                   className='text-center  text-primary  whitespace-nowrap px-1 hover:font-bold underline cursor-pointer text-sm'
//                 >
//                   GO BACK
//                 </span>
//               </span>
//
//               <span className='text-center text-sm'>
//                 ©2023 - Zebralearn. All rights reserved
//               </span>
//             </form>
//           </ShouldRender>
//           <ShouldRender check={forgotPasswordStep === 1}>
//             <h1 className='text-xl font-medium lg:font-normal lg:text-3xl mt-1 leading-10 text-gray-700 text-center w-full'>
//               Forgot Password
//             </h1>
//             <div className='flex justify-center py-5'>
//               <ReactCodeInput
//                 name='Opt'
//                 type='text' // Change the type to 'text'
//                 inputMode='tel'
//                 autoFocus={true}
//                 fields={6}
//                 onChange={(otp1) => {
//                   const numericValue = otp1.replace(/\D/g, '');
//                   setOtp(numericValue);
//                 }}
//                 value={otp}
//               />
//             </div>
//             <span className='flex justify-center mt-2'>
//               <ButtonDefault
//                 size={4}
//                 variant={ButtonVariants.PRIMARY}
//                 onClick={() => setForgotPasswordStep(2)}
//                 disabled={otp.length < 6}
//                 className='w-min p-1'
//               >
//                 <span className='flex text-xs gap-x-2 px-4 py-1 whitespace-nowrap'>
//                   NEXT <ArrowRightIcon className='w-4 h-4 text-white' />
//                 </span>
//               </ButtonDefault>
//             </span>
//             <span className='flex justify-center pt-2'>
//               <span
//                 onClick={() => router.push('/auth/login')}
//                 className='text-center  text-primary  whitespace-nowrap px-1 hover:font-bold underline cursor-pointer text-sm'
//               >
//                 GO BACK
//               </span>
//             </span>
//
//             <span className='text-center text-sm'>
//               ©2023 - Zebralearn. All rights reserved
//             </span>
//           </ShouldRender>
//           <ShouldRender check={forgotPasswordStep === 2}>
//             <h1 className='text-xl font-medium lg:font-normal lg:text-3xl mt-1 leading-10 text-gray-700 text-center w-full'>
//               Password Reset
//             </h1>
//             <form
//               onSubmit={submitPassword}
//               className='flex flex-col  gap-2 mt-5'
//             >
//               <div className='col-span-1 flex-col flex gap-y-.5'>
//                 <label className='text-base  pb-2'>Password</label>
//                 <Input.Password
//                   name='password'
//                   value={password.password}
//                   onChange={handleChange}
//                   size='large'
//                   className='rounded-none border border-gray-600'
//                 />
//                 {passwordErrors.password && (
//                   <p className='text-red-500'>{passwordErrors.password}</p>
//                 )}
//               </div>
//               <div className='col-span-1 flex-col flex gap-y-.5'>
//                 <label className='text-base  pb-2'>Re-Enter Password</label>
//                 <Input.Password
//                   name='reEnterPassword'
//                   value={password.reEnterPassword}
//                   onChange={handleChange}
//                   size='large'
//                   className='rounded-none border border-gray-600'
//                 />
//                 {passwordErrors.reEnterPassword && (
//                   <p className='text-red-500'>
//                     {passwordErrors.reEnterPassword}
//                   </p>
//                 )}
//               </div>
//
//               <span className='flex justify-center mt-2'>
//                 <ButtonDefault
//                   size={4}
//                   variant={ButtonVariants.PRIMARY}
//                   className='w-min p-1'
//                 >
//                   <span className='flex text-xs gap-x-2 px-4 py-1 whitespace-nowrap'>
//                     NEXT <ArrowRightIcon className='w-4 h-4 text-white' />
//                   </span>
//                 </ButtonDefault>
//               </span>
//               <span className='flex justify-center'>
//                 <span
//                   onClick={() => router.push('/auth/login')}
//                   className='text-center  text-primary  whitespace-nowrap px-1 hover:font-bold underline cursor-pointer text-sm'
//                 >
//                   GO BACK
//                 </span>
//               </span>
//
//               <span className='text-center text-sm'>
//                 ©2023 - Zebralearn. All rights reserved
//               </span>
//             </form>
//           </ShouldRender>
//           <ShouldRender check={forgotPasswordStep === 3}>
//             <h1 className='text-xl font-medium lg:font-normal lg:text-3xl mt-1 leading-10 text-gray-700 text-center w-full'>
//               Password Reset
//             </h1>
//             <span className='flex flex-col mt-4'>
//               <span className='text-center'>Your password is updated.</span>
//               <span className='flex justify-center text-center'>
//                 {' '}
//                 Go back to{' '}
//                 <p
//                   onClick={() => router.push('/auth/login')}
//                   className='text-primary w-10 px-1 hover:font-bold hover:underline cursor-pointer'
//                 >
//                   login
//                 </p>
//               </span>
//             </span>
//             <span className='text-center text-sm mt-2'>
//               ©2023 - Zebralearn. All rights reserved
//             </span>
//           </ShouldRender>
//         </div>
//       </div>
//     </AuthLayout>
//   );
// };
// export default ForgotPassword;

export {}
