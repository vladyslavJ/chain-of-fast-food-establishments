import '../styles/components/CustomArrow.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CustomArrow = (props) => {
  return (
    <button
      className={`${props.className} custom-arrow custom-arrow--${
        props.arrowType
      } ${props.isPrimary ? 'custom-arrow--primary' : ''}`}
    >
      {props.arrowType === 'next' ? (
        <FaAngleRight className="custom-arrow__icon" />
      ) : (
        <FaAngleLeft className="custom-arrow__icon" />
      )}
    </button>
  );
};

export default CustomArrow;
