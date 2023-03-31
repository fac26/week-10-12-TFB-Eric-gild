import { useForm } from 'react-hook-form';
import Button from 'components/Button';

export default function Filter(props) {
  const { filters, foodFilter, setFoodFilter } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFoodFilter(data);
  };

  return (
    <div className='flex flex-col items-center'>
      <form
        onSubmit={handleSubmit((data) => {
          setFoodFilter(data);
        })}
      >
        <select
          {...register('Filter')}
          className='bg-accentcolor3 text-gray-900 text-sm rounded-md block w-full font-sans h-8 mb-3'
        >
          <option value='All'>All</option>
          {filters
            ? filters.map((filter) => (
                <option value={filter.Name} key={filter.ID}>
                  {filter.Name}
                </option>
              ))
            : null}
          <option value='Test'>Test</option>
        </select>
        <Button buttonName={'Filter'} ButtonOnClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
}
