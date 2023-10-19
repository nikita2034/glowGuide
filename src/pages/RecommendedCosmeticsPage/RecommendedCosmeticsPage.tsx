import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import styles from "./RecommendedCosmeticsPage.module.scss";
import { ProductType } from "../../components/Product/Product";

function RecommendedCosmeticsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data: ProductType[]) => {
        setProducts(data);
      })
      .catch((error) => {
        alert(`Error loading products, ${error}`);
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Результат</div>
      <div className={styles.desc}>
        Мы подобрали для вас наиболее подходящие средства
      </div>
      <div className={styles.products_gallery}>
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            image={product.image}
            oldPrice={product.oldPrice}
            price={product.price}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <div className={styles.pagination_element_active}>1</div>
        <div className={styles.pagination_element}>2</div>
        <div className={styles.pagination_element}>3</div>
        <div className={styles.pagination_element}>...</div>
        <div className={styles.pagination_element}>13</div>
      </div>
    </div>
  );
}

export default RecommendedCosmeticsPage;
