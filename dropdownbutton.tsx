import React, { useState, useEffect, ReactNode } from 'react';

interface DropdownItem {
  id: number;
  text: string;
  icon: ReactNode;
}

interface DropdownProps {
  buttonIconLeft: ReactNode;
  buttonText: string;
  buttonIconRight: ReactNode;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ buttonIconLeft, buttonText, buttonIconRight, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  useEffect(() => {
    setSelectedItem(items.find((item) => item.text === buttonText) || null);
  }, [buttonText, items]);

  const handleItemClick = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false); 
  };

  const dropdownItems = items
    .filter((item) => item.id !== selectedItem?.id)
    .sort((a, b) => a.text.localeCompare(b.text));

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Toggle Button */}
      <button
        className={`flex items-center bg-black text-white ${
          isOpen ? 'rounded-t-[12px] border-b-0' : 'rounded-[12px]'
        } border border-white antialiased focus:outline-none`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {/* Left Icon */}
        <span className="flex items-center justify-center px-2 py-1">
          {selectedItem?.icon || buttonIconLeft}
        </span>
        {/* Button Text */}
        <span className="mx-2 font-inter font-bold">
          {selectedItem?.text || buttonText}
        </span>
        {/* Right Icon with rotation for dropdown state */}
        <span
          className={`flex items-center justify-center px-2 py-1 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {buttonIconRight}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 bg-black border border-white border-t-0 antialiased rounded-b-[12px] z-10">
          <ul className="py-2">
            {dropdownItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center px-2 py-1 hover:bg-gray-800 cursor-pointer border-t border-gray-600 text-white"
                onClick={() => handleItemClick(item)}
              >
                {/* Item Icon */}
                <span className="flex items-center justify-center px-2 py-1">
                  {item.icon}
                </span>
                {/* Item Text */}
                <span className="mx-2 font-inter font-bold">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
