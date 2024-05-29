import React, { useState } from 'react';
import TabSwitcher from '../../components/Tabs-Switcher';
// import SchoolList from './schools-blog/school-list/SchoolList';
import Tools from '../../components/tools/Tools';

const SchoolPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: 'School Blog' },
    { id: 2, label: "Tool's" },
  ];

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className="">
      <div>
        <TabSwitcher
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        {activeTab === 1 && <>hello</>}
        {activeTab === 2 && <Tools />}
      </div>
    </div>
  );
};

export default SchoolPage;
