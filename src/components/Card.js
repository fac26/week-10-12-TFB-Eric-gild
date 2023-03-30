import Button from './Button';

export default function Card(props) {
  const { item, collaborator } = props;
  const foodItemName = item.name;

  return (
    <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg'>
      <div className='mx-auto max-w-md'>
        <h3 className='font-cursive text-5xl'>{foodItemName.toUpperCase()}</h3>
        <div className='flex flex-row gap-6 w-5/6 h-5/6'>
          <div className=' flex items-center justify-center'>
            <img
              src={item.image[0].url}
              className=''
              alt={foodItemName}
              width={200}
              height={200}
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex-grow'>
              <p className='text-l font-sans overflow-hidden'>
                {collaborator.Name}
              </p>
            </div>
<<<<<<< HEAD
            <Button
              buttonName={'More Info'}
              buttonLink={{
                pathname: '/more-info',
                query: item, // the data
              }}
            />
=======
            <Button buttonName={'More Info'} buttonLink='/more-info' />
>>>>>>> main
          </div>
        </div>
      </div>
    </div>
  );
}
