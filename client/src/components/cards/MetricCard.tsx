import React, {FC} from 'react';
import {FiInfo} from 'react-icons/fi';
import {IoMdArrowDropup} from 'react-icons/io';

interface InfoCardProps {
    title: string;
    value: string;
    percentage: string;
    trend: string;
    trendColor: string;
    trendText: string;
}

const MetricCard: FC<InfoCardProps> = ({title, value, percentage, trend, trendColor, trendText}) => {
    return (
        <div className="bg-white p-6 rounded shadow-md">
            <div>
                <p className="flex text-lg font-semibold">
                    {title}
                    <span className="mx-2">
            <FiInfo/>
          </span>
                </p>
                <div className="flex justify-between items-center py-2">
                    <span className="text-3xl font-semibold">{value}</span>
                    <span className={`flex items-center rounded-xl py-2 px-4 font-semibold bg-[#DCFCE7] text-${trendColor}`}>
                            <IoMdArrowDropup/>
                           <span>{trend}</span>
                     </span>
                </div>
                <p>{trendText}</p>
            </div>
        </div>
    );
};

export default MetricCard;