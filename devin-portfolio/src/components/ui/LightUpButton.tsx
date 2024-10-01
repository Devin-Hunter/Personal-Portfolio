import React from 'react'

export const LightUpButton = ({
  title, icon, handleClick
}: {
  title: string; icon: React.ReactNode; handleClick?: () => void;
}) => {
  return (
    <button className="p-[3px] mt-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-lg" />
          <div className="px-8 py-3  bg-black rounded-[8px]  relative group transition duration-200 text-white hover:bg-transparent">
            <span style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
              {title} {icon}
            </span>
          </div>

    </button>
  )
}

