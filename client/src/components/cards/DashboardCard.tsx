import React from 'react';



const DashboardCard = (props: {
  cardTitle: string;
  cardTSubitle: string;
  cardImage: any;
  cardId: number; // Add a cardId prop
  selectBlogHandler: (id: number) => void; // Change the type of selectBlogHandler
}) => {

  const backgroundColors: {
    [key: number]: string; // Define an index signature
  } = {
    1: '#F4E9FF',
    2: '#E0F6FF',
    3: '#E4FFF4',
    4: '#E3EEFF',
  };
console.log(props.cardId)


  return (
    <div className=' p-4'>
      <div
    
        onClick={() => props.selectBlogHandler(props.cardId)}
        className='flex flex-col cursor-pointer items-center gap-4 px-4 border border-gray-200 rounded-xl shadow md:flex-row md:max-w-lg '
      >
        <div
          style={{backgroundColor: backgroundColors[props.cardId] || 'white' }}
          className='bg-[#F4E9FF] h-[60px] w-[60px] rounded-full flex items-center justify-center'
        >
          <img src={props.cardImage} alt='bulk' />
        </div>

        <div className='flex flex-col justify-between p-4 leading-normal'>
          <b className='mb-2 text-2xl text-black'>{props.cardTitle}</b>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {props.cardTSubitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
