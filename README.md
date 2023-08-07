# JC-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Fernando Herrera

## Ejemplo

```js
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'jc-product-card';
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
