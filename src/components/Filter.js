import { useForm } from 'react-hook-form';
import ButtonLinkSmall from '@components/ButtonLinkSmall';

export default function Filter(props) {
  const { filters, foodFilter, setFoodFilter } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFoodFilter(data);
  };

  return (
    <div className='flex flex-col items-center justify-center w-11/12 mx-auto'>
      <form
        className='flex flex-row gap-2'
        onSubmit={handleSubmit((data) => {
          setFoodFilter(data);
        })}
      >
        <select
          {...register('Filter')}
          className='text-center bg-accentcolor2 text-gray-900 text-sm rounded-md block w-full font-sans h-8'
        >
          <option value='All'>All</option>
          {filters
            ? filters.map((filter) => (
                <option value={filter.Name} key={filter.ID}>
                  {filter.Name}
                </option>
              ))
            : null}
        </select>
        <div>
          <ButtonLinkSmall
            buttonName={'Filter'}
            ButtonOnClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
}
