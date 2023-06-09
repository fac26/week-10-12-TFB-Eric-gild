import ButtonSmall from '@components/Button';
import { useRouter } from 'next/router';
import { cards } from '@styles/index.js';

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
    <div className={cards.containerDiv}>
      <h3 className={cards.headingSmall}>
        {item && item.name && item.name.toUpperCase()}
      </h3>
      <div className={cards.flexRowDiv}>
        <div className='flex flex-col gap-1 w-full'>
          <div className=''>
            <p className={cards.normalText}>{collaborator.Name}</p>
          </div>
          <ButtonSmall
            whiteBackground={'true'}
            buttonName={'More Info'}
            onClick={handleMoreInfoClick}
          />
        </div>
        <div className={cards.imageDiv}>
          <img
            src={item.image[0].url}
            className=''
            alt={foodItemName}
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
