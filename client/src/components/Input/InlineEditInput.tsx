import React, { useState, ChangeEvent } from 'react';

interface InlineEditProps {
    value: string;
    onSave: (newValue: string) => void;
}

const InlineEditInput: React.FC<InlineEditProps> = ({ value, onSave }) => {
    const [isEditing, setEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        setEditing(false);
        onSave(editedValue);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEditedValue(e.target.value);
    };

    return (
        <div className="">
            {isEditing ? (
                <div className='w-full'>
                    <input
                        type="text"
                        value={editedValue}
                        onChange={handleInputChange}
                        className="rounded text-2xl w-max font-bold mr-2 outline-none"
                    />
                    <button
                        onClick={handleSaveClick}
                        className="bg-green-500 text-white border-none py-1 px-2 cursor-pointer outline-none "
                    >
                        Save
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex items-center">
                    <p className=" text-2xl font-bold mr-4 py-1 " >{editedValue}</p>
                    <button
                        onClick={handleEditClick}
                        className=" rounded border-none py-1 px-2 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-4 h-4 mx-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default InlineEditInput;