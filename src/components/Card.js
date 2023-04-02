import Button from '@components/Button';
import { useRouter } from 'next/router';

export default function Card(props) {
  const { filters, item, collaborator, foodFilter } = props;
  const { dietaryRestriction = [] } = item;
  const filter = filters.find((filter) => filter.Name === foodFilter.Filter);
  const filterID = filter ? filter.ID : null;
  const foodItemName = item.name;
  const router = useRouter();

  const handleMoreInfoClick = () => {
    router.push({
      pathname: '/more-info',
      query: {
        item: JSON.stringify(item),
        collaborator: JSON.stringify(collaborator),
      },
    });
  };

  const matchesFilter = dietaryRestriction
    ? dietaryRestriction.some((restriction) => restriction === filterID)
    : false;

  if (foodFilter.Filter !== 'All' && !matchesFilter) return null;

  return (
    <div className='w-11/12 mx-auto max-w-screen-sm text-accentcolor1 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg'>
      <div className='mx-auto max-w-md'>
        <h3 className='font-cursive text-5xl'>
          {item && item.name && item.name.toUpperCase()}
        </h3>
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
            <Button buttonName={'More Info'} onClick={handleMoreInfoClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
