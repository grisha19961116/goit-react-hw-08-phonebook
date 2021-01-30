import { Link } from 'react-router-dom';

const NavigationLink = ({ to, text, name, onClick }) => {
  return (
    <div>
      {name && <span>{name}</span>}
      <Link to={to} onClick={onClick && onClick}>
        {text}
      </Link>
    </div>
  );
};
export default NavigationLink;
