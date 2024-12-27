import '../styles/components/CategoryItem.css';

const CategoryItem = (props) => {
  return (
    <article
      className={`${props.classN ? props.classN + ' ' : ''}category-item`}
      onClick={() => props.onClick(props.category.id)}
    >
      <img src={props.category.src} alt="" className="category-item__image" />
      <p className="category-item__title">{props.category.title}</p>
    </article>
  );
};

export default CategoryItem;
