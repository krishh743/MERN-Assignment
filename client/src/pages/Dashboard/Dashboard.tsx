  import React from 'react';
import BLOG_ICON_1 from '../../assets/images/dashboard-icons/live_session.png';
import BLOG_ICON_2 from '../../assets/images/dashboard-icons/bulk_email.png';
import BLOG_ICON_3 from '../../assets/images/dashboard-icons/newsletter.png';
import BLOG_ICON_4 from '../../assets/images/dashboard-icons/school .png';
import { useNavigate } from 'react-router-dom';

export const dashboardCardData = [
  {
    id: 1,
    image: BLOG_ICON_1,
    cardTitle: 'Bulk Email',
    cardSubTitle: 'Send 1 million mail in one go.',
  },
  {
    id: 2,
    image: BLOG_ICON_4,
    cardTitle: 'School',
    cardSubTitle: 'Send 1 million mail in one go.',
  },
  {
    id: 3,
    image: BLOG_ICON_2,
    cardTitle: 'Newsletter',
    cardSubTitle: 'Send 1 million mail in one go.',
  },
  {
    id: 4,
    image: BLOG_ICON_3,
    cardTitle: 'Live Session',
    cardSubTitle: 'Send 1 million mail in one go.',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const startBlogging = () => {
    navigate('/school');
  };

  return (
    <div className="p-2">
        <div className='flex justify-center mb-4'>
          <h1>Welcome to Sapphire </h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          {dashboardCardData.map((items, index) => (
            <div className={`mb-4`} key={index}>
              <div
                className={`flex flex-col cursor-pointer items-center gap-4 px-4 border border-lightgray shadow-md rounded-xl  md:flex-row md:max-w-lg ${
                  items.image === BLOG_ICON_4 ? 'bg-[#E0F6FF]' : ''
                }`}
              >
                <div
                  className={`${
                    items.image === BLOG_ICON_4 ? 'bg-[#fff]' : 'bg-[#E0F6FF]'
                  } h-[60px] w-[60px] rounded-full flex items-center justify-center`}
                >
                  <img src={items.image} alt="bulk" />
                </div>

                <div className="flex flex-col justify-between p-4 leading-normal">
                  <b className="mb-2 text-xl text-black">{items.cardTitle}</b>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Send 1 million mail in one go.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <div className="flex flex-col gap-3 justify-between p-10   rounded-xl shadow bg-[#E0F6FF] h-full">
            <div className="flex flex-col gap-8 bg-white rounded-2xl">
              <iframe
                // width="800"
                height="400"
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                title="YouTube Video"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
            <div className="flex flex-col gap-8">
              <b className="text-4xl text-left text-black">
                Grow your audience at 10x rate with us
              </b>
              <b className="text-2xl text-black">
                If you want to distribute email in a short time.
              </b>
              <div>
                <ol className="flex flex-col gap-4 list-disc pl-6 text-black">
                  <li>Send 1 million mail in one go.</li>
                  <li>It’s good for informing people at once.</li>
                  <li>Send 1 million mail in one go.</li>
                </ol>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                // onClick={startBlogging}
                className="border rounded-xl py-3 px-6 bg-white hover:border-primary hover:text-primary"
              >
                <b> Start Journey</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
