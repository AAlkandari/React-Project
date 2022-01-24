import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Jam3ya from "./Jam3ya";

function Jam3yat() {
  useEffect(() => {
    getJam3yat();
  }, []);

  const [jam3yat, setJam3yat] = useState([]);
  const [loading, setLoading] = useState(false);

  const getJam3yat = async () => {
    try {
      const res = await axios.get(
        "https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya"
      );
      setJam3yat(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Fragment>
      <Row className="align-items-stretch">
        {loading &&
          jam3yat.map((jam3ya) => (
            <Col sm={12} md={6} lg={4} key={jam3ya.author.startDate}>
              <Jam3ya jam3ya={jam3ya} />
            </Col>
          ))}
      </Row>
    </Fragment>
  );
}

export default Jam3yat;
