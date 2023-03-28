import Button from './Button';

export default function WhatsAvailableCard(props) {
  const { items } = props;
  return (
    <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg'>
      <h3 className='text-4xl'>CURRENTLY AVAILABLE</h3>
      <div className='mx-auto'>
        <ul className='flex flex-col font-sans'>
          {items ? (
            items.map((item) => (
              <li className='flex justify-between' key={item.id}>
                <span>{item.fields.name}</span>
                <span>{item.fields.quantity}</span>
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
      <div className='flex flex-col mb-10 mt-10 items-center'>
        <Button buttonName={'Update'} buttonLink='/manage-food' />
      </div>
    </div>
  );
}
