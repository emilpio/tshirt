import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  // console.log(currentSize);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.clear();
    console.log('Product summary');
    console.log('↓▬▬↓▬▬↓▬▬↓▬▬↓▬▬↓');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice(props.basePrice));
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  };

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = () => {
    const foundSize = props.sizes.find((size) => size.name === currentSize);
    return props.basePrice + foundSize.additionalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage
        name={props.name}
        title={props.title}
        currentColor={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          colors={props.colors}
          sizes={props.sizes}
          handleSubmit={handleSubmit}
          prepareColorClassName={prepareColorClassName}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  getPrice: PropTypes.func,
};
export default Product;
