import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { InputNumber } from "antd";
// import { removeItem, updateQuantity } from "../states/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function ProductTile({ ProductName, data, userId, status }) {
  const dispatch = useDispatch();
  const [subtotal, setsubtotal] = useState(data.subtotal);
  const price = data.price
    ? data.price
    : parseFloat(data.subtotal) / parseFloat(data.quantity);
  // function remove_item() {
  //   dispatch(removeItem({ userId: userId, productId: data.id?data.id:data.productId }));
  // }
  // const changeQuant = (value) => {
  //   setsubtotal(value * price);
  //   dispatch(
  //     updateQuantity({
  //       userId: userId,
  //       productId: data.id ? data.id : data.productId,
  //       quantity: value,
  //     })
  //   );
  // };
  return (
    <ol className="list-group ">
      <li className="list-group-item hover:shadow-md  border-info d-flex justify-content-between  mb-1 ">
        <Container>
          <Row>
            <Col sm={12} md={7} className="d-flex justify-content-start">
              <img src="/images/med.jpg" className=" w-20" alt={ProductName} />
              <div className="ml-2">
                <div className="fw-bold">{ProductName}</div>
                {price}
              </div>
            </Col>
            <Col
              sm={12}
              md={4}
              className="d-flex justify-content-between align-items-sm-center"
            >
              <div style={{ marginLeft: "5%" }}> {subtotal}</div>
              <InputNumber
                // onChange={changeQuant}
                min={1}
                max={10}
                defaultValue={data.quantity}
                disabled={status === "Review" || status === "Progressing"?false:true}
              />
              <span>
                <i
                  className={`far fa-trash-alt ${
                    status === "Review" || status === "Progressing"
                      ? "link-danger"
                      : "disabled"
                  } text-2xl `}
                  onClick={() => {
                    //TODO: remove item form online order or in-store order
                  }}
                ></i>
              </span>
            </Col>
          </Row>
        </Container>
      </li>
    </ol>
  );
}

export default ProductTile;
