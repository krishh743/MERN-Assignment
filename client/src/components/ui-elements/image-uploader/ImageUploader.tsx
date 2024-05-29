import React, { useState, useEffect } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

interface ImageUploaderProps {
  maxFileCount?: number;
  uploadAction: string;
  onChange: (file: File | null) => void; // Change type to accept null
  defaultImage?: string | null; // Add this line
  clearImage?: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  maxFileCount = 5,
  uploadAction,
  onChange,
  defaultImage,
  clearImage = false,
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (defaultImage) {
      setFileList([
        {
          uid: '-1',
          name: 'defaultImage',
          status: 'done',
          url: defaultImage,
        },
      ]);
    }
  }, [defaultImage]);

  // const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  //   if (newFileList.length > 0) {
  //     onChange(newFileList[0].originFileObj as File);
  //   } else {
  //     onChange(null);
  //   }
  // };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    if (newFileList && newFileList.length > 0) {
      const firstFile = newFileList[0];

      if (firstFile && firstFile.originFileObj) {
        onChange(firstFile.originFileObj as File);
      } else {
        console.error('Unexpected file structure:', firstFile);
      }
    } else {
      onChange(null);
    }
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  console.log(clearImage, 'image bool');
  useEffect(() => {
    // Reset the fileList when the defaultImage changes

    setFileList([]);
    console.log('working');
    if (defaultImage) {
      setFileList([
        {
          uid: '-1',
          name: 'defaultImage',
          status: 'done',
          url: defaultImage,
        },
      ]);
    }
  }, [clearImage]);

  return (
    <ImgCrop rotationSlider>
      <Upload
        action={uploadAction}
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
        onPreview={onPreview}
      >
        {fileList.length < maxFileCount && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default ImageUploader;

// import React, { useState } from 'react';
// import { Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';
// import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

// interface ImageUploaderProps {
//   maxFileCount?: number;
//   uploadAction: string;
//   onChange: (file: File) => void; // Add this line
// }

// const ImageUploader: React.FC<ImageUploaderProps> = ({
//   maxFileCount = 5,
//   uploadAction,
//   onChange,
// }) => {
//   const [fileList, setFileList] = useState<UploadFile[]>([]);

//   const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//     // Assuming you want to pass the first file from the list to the parent component
//     if (newFileList.length > 0) {
//       onChange(newFileList[0].originFileObj as File);
//     }
//   };

//   const onPreview = async (file: UploadFile) => {
//     let src = file.url as string;
//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj as RcFile);
//         reader.onload = () => resolve(reader.result as string);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow?.document.write(image.outerHTML);
//   };

//   return (
//     <ImgCrop rotationSlider>
//       <Upload
//         action={uploadAction}
//         listType="picture-card"
//         fileList={fileList}
//         onChange={handleChange}
//         onPreview={onPreview}
//       >
//         {fileList.length < maxFileCount && '+ Upload'}
//       </Upload>
//     </ImgCrop>
//   );
// };

// export default ImageUploader;
