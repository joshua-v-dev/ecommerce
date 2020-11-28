import React, {useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  useEffect(() => {}, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xlg={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
