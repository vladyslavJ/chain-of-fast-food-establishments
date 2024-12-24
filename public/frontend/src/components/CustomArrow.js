import '../styles/components/CustomArrow.css';

// needs to remove

const CustomArrow = (props) => {
  return (
    <button
      className={`${props.className} custom-arrow custom-arrow--${props.arrowType}`}
      onClick={props.onClick}
    >
      {props.arrowType === 'next' ? '&gt;' : '&lt;'}
    </button>
  );
};

export default CustomArrow;
