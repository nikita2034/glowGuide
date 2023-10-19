import React from "react";
import styles from "./Product.module.scss";

export interface ProductType {
  image: string;
  title: string;
  oldPrice: string;
  price: string;
}

function Product({ image, title, oldPrice, price }: ProductType) {
  return (
    <div className={styles.container}>
      <div className={styles.block_image}>
        <img src={image} alt="product photo" className={styles.image} />
        <img src="./Vector.svg" className={styles.icon_favorite} />
      </div>

      <div className={styles.title}>{title}</div>
      <div className={styles.block_price}>
        {oldPrice ? <div className={styles.oldPrice}>{oldPrice}</div> : null}
        <div className={styles.price}>{price}руб</div>
      </div>
    </div>
  );
}

export default Product;
