
# Dropdown Button Component for React/Next.js with TailwindCSS Styling

A highly customizable and accessible dropdown menu component for React/Next.js applications, styled with TailwindCSS. 


## Features

- **Customizable Button**: Add icons and text to the left and right of the button.
- **Dynamic Item Handling**: Automatically exclude the selected item from the dropdown list and sort remaining items alphabetically.
- **Accessibility**: Implements `aria-haspopup` and `aria-expanded` attributes to ensure better accessibility.
- **Stylish Design**: Built with TailwindCSS for responsive and consistent styling out of the box.
- **TypeScript Support**: Fully typed props and internal logic for type safety and better developer experience.


## Preview
The component renders a button with a dropdown menu that dynamically updates its content based on the selected item.
![image](https://github.com/user-attachments/assets/add9bf05-7468-4fe3-88f4-f371bbddb50e)
![image](https://github.com/user-attachments/assets/b9571ac3-f150-4fb2-9c83-5d3f291887e3)
![image](https://github.com/user-attachments/assets/247b6d6d-146b-4fb0-8d0a-3f7fd9b39c84)



## Installation

To use this component, ensure your project meets the following requirements:

- **React/Next.js**
- **TailwindCSS**
- **React-Icons** (optional)


```bash
  npm install react-icons
```
    
## Example usage
**1. Import the Component and Icons**
```typescript
"use client";
import React from 'react'
import Dropdown from '@/components/common/dropdownbutton';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';
import { SiSolana } from 'react-icons/si';
```
**2. Provide Data and Customize**
```typescript
const page = () => {
  const items = [
    { id: 1, text: 'BTC/USDT', icon: <FaBitcoin /> },
    { id: 2, text: 'ETH/USDT', icon: <FaEthereum /> },
    { id: 3, text: 'SOL/USDT', icon: <SiSolana /> },
];
  return (
    <div className="p-4 bg-black">
      <Dropdown 
        buttonIconLeft={<FaBitcoin />}
        buttonText="BTC/USDT"
        buttonIconRight={<RiArrowDownSLine />}
        items={items}
      />
    </div>
  )
}

export default page
```


## Contributing

Contributions are always welcome! Submit issues or pull requests for feature requests, bug fixes, or improvements.


## License

This project is licensed under the MIT License.

Happy coding!

