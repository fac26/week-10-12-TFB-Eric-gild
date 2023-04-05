import ButtonSmall from '@components/ButtonSmall';
import { useState } from 'react';
import { cards } from '@styles/index.js';

export default function ManageStockCard(props) {
  const { item, filters, foodFilter } = props;
  const [quantity, setQuantity] = useState(item.fields.quantity);
  const { menuCategories = [] } = item.fields;
  const filter = filters.find((filter) => filter.Name === foodFilter.Filter);
  const filterID = filter ? filter.ID : null;
  const foodItemName = item.fields.name;

  const matchesFilter = menuCategories
    ? menuCategories.some((category) => category === filterID)
    : false;

  if (foodFilter.Filter !== 'All' && !matchesFilter) return null;

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
    <div className={cards.containerDiv}>
      <h3 className={cards.headingSmall}>{foodItemName.toUpperCase()}</h3>
      <div className={cards.flexRowDiv}>
        <div className='flex flex-col gap-2 w-full items-center justify-between'>
          <div className='flex flex-row items-center my-auto'>
            <ButtonSmall
              whiteBackground={'true'}
              buttonName={'-'}
              onClick={handleDecrease}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <p className='font-sans text-l mx-4'>{quantity}</p>
            <ButtonSmall
              whiteBackground={'true'}
              buttonName={'+'}
              onClick={handleIncrease}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </div>
        <div className={cards.imageDiv}>
          <img
            src={item.fields.image[0].url}
            className=''
            alt='chicken sandwich'
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  ) : (
    <p>loading</p>
  );
}
