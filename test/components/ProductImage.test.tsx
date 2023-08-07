import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('Productimage', () => {
  test('debe mostrar el componente correctamente, con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente correctamente, con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage img="https://custom-imagen.jpg" />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
