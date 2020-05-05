import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { getProducts } from './products.reducer';
import { IRootState } from 'app/shared/reducers';
import { log } from 'react-jhipster';

export interface IProductPageProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export const ProductPage = (props: IProductPageProps) => {
  useEffect(() => {
    log('ProductPage props:', props);
    props.getProducts();
  }, []);

  const renderProducts = () => {
    const { products } = props;
    const items = products
      ? products.map(p => (
          <li key={p.id}>
            {p.name}-{p.price}
          </li>
        ))
      : [];

    return items;
  };

  return (
    <>
      <h3>Product list</h3>
      <ul>{renderProducts()}</ul>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  products: state.product.products
});
const mapDispatchToProps = { getProducts };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
