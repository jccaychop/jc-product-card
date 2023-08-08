# JC-Product-Card-rp

Este es un paquete de pruebas de despliegue en NPM

### Curso: Fernando Herrera

## Ejemplo

```js
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'jc-product-card-rp';
```

```js
const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: './coffee-mug.png',
};
```

```js
<ProductCard
  product={product}
  initialValues={{
    count: 6,
    // maxCount: 10,
  }}
>
  {() => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
