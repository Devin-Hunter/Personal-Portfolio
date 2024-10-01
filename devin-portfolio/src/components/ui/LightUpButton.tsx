import React from 'react'

export const LightUpButton = ({
  title, handleClick
}: {
  title: string;  handleClick?: () => void;
}) => {
  return (
    <button className="p-[3px] mt-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-teal-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {title}
        </div>
    </button>
  )
}

