import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="border border-[#e2e2e2] p-4 rounded-md shadow-md">
            <div className="">
                <div className="flex">
                    <img src=""/>
                    <button type="button" className="text-primary">Coming Soon</button>
                </div>
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Tools: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card title="Start advertisement" description="Description for Card 1" />
            <Card title="Topic research" description="Description for Card 2" />
            <Card title="SEO content template" description="Description for Card 3" />
            <Card title="SEO writing assistant" description="Description for Card 4" />
        </div>
    );
};

export default Tools;