import React from 'react';
import Carousel from 'nuka-carousel';
import ProductsListing from './ProductsListing';
import data from '../../data/featured.json';

export default class Slider extends React.Component {
  render() {
    return (
      <Carousel slidesToShow={3} slidesToScroll={1} cellSpacing={20}>
        <ProductsListing products={data.products} className="container" />
      </Carousel>
    );
  }
}