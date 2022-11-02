import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
      />
      <OptionColor
        colors={props.colors}
        prepareColorClassName={props.prepareColorClassName}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />
      <Button handleSubmit={props.handleSubmit} className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ProductForm;
