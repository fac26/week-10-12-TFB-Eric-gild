import style from '../styles/GreenButton.module.css';

const GreenButton = (props) => {
  return <button className={style.greenbutton}>{props.title}</button>;
};

export default GreenButton;
