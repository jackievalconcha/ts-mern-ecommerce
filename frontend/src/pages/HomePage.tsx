import { Link } from 'react-router-dom'
import { sampleProducts } from '../data'
import { Col, Row } from 'react-bootstrap'

export default function HomePage() {
  return (
    <Row>
      {sampleProducts.map((product) => (
        <Col key={product.slug} sm={6} md={3} lg={3}>
          <Link to={'product/' + product.slug}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h6>{product.name}</h6>
            <p>${product.price}</p>
          </Link>
        </Col>
      ))}
    </Row>
  )
}
