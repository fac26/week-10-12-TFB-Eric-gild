import { useForm } from 'react-hook-form';

export default function Filter(props) {
  const { filters, foodFilter, setFoodFilter } = props;
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        setFoodFilter(data);
      })}
    >
      <select {...register('Filter')}>
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
      <button type='submit'>Filter</button>
    </form>
  );
}
