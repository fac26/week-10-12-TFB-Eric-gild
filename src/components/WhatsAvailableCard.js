import Button from './Button';

export default function WhatsAvailableCard(props) {
  const { items } = props;
  console.log('items', items);
  return (
    <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg'>
      <div className='mx-auto max-w-md'>
        <ul className='flex flex-col'>
          {items ? (
            items.map((item) => (
              <li className='flex justify-between' key={item.id}>
                {item.fields.name}
                {item.fields.quantity}
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
      <Button buttonName={'Update'} buttonLink='/manage-food' />
    </div>
  );
}
