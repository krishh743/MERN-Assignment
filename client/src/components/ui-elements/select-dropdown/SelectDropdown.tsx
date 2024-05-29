import React, { FC, ReactNode } from 'react';
import { Select } from 'antd';
// import { SelectValue } from 'antd/lib/select';

interface Option {
  value: string;
  label: ReactNode;
}

interface SelectDropdownProps {
  options: Option[];
  onChange?: any;
}

const SelectDropdown: FC<SelectDropdownProps> = ({ options, onChange }) => (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.props.children ?? '').toString().toLowerCase().includes(input.toLowerCase())}
    filterSort={(optionA, optionB) =>
      (optionA?.props.children ?? '').toString().toLowerCase().localeCompare((optionB?.props.children ?? '').toString().toLowerCase())
    }
    onChange={onChange}
  >
    {options.map(option => (
      <Select.Option key={option.value} value={option.value}>
        {option.label}
      </Select.Option>
    ))}
  </Select>
);

export default SelectDropdown;
