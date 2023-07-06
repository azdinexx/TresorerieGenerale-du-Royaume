import { Link } from 'react-router-dom';

function Button({ label }) {
  return (
    <Link to={label}>
      <button className=' hidden  sm:block'>{label}</button>
    </Link>
  );
}

export default Button;
