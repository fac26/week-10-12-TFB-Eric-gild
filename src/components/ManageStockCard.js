import Image from 'next/image';
import ButtonQuantity from '@components/ButtonQuantity';
import { useState } from 'react';

export default function ManageStockCard(props) {
  const { item } = props;
  const [quantity, setQuantity] = useState(item.fields.quantity);
  const foodItemName = item.fields.name;

  const handleDecrease = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);

    const updatedMenuItems = JSON.parse(localStorage.getItem('menu-items')).map(
      (item) => {
        if (item.id === props.item.id) {
          item.fields.quantity = newQuantity;
        }
        return item;
      }
    );

    localStorage.setItem('menu-items', JSON.stringify(updatedMenuItems));
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    const updatedMenuItems = JSON.parse(localStorage.getItem('menu-items')).map(
      (item) => {
        if (item.id === props.item.id) {
          item.fields.quantity = newQuantity;
        }
        return item;
      }
    );

    localStorage.setItem('menu-items', JSON.stringify(updatedMenuItems));
  };

  return item ? (
    <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg'>
      {
        <div className='mx-auto max-w-md'>
          <h3 className='font-cursive text-4xl'>
            {foodItemName.toUpperCase()}
          </h3>
          <div className='flex flex-row gap-6 w-5/6 h-5/6'>
            <div className=' flex items-center justify-center'>
              <img
                src={item.fields.image[0].url}
                className=''
                alt='chicken sandwich'
                width={200}
                height={200}
              />
            </div>
            {/* <p>hey: {JSON.stringify(item.fields)}</p> */}
            <div className='flex flex-col gap-2 w-full'>
              <div className='flex flex-row items-center'>
                <ButtonQuantity
                  buttonName={'-'}
                  onClick={handleDecrease}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
                <p className='font-sans text-l mx-4'>{quantity}</p>
                <ButtonQuantity
                  buttonName={'+'}
                  onClick={handleIncrease}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  ) : (
    <p>loading</p>
  );
}
