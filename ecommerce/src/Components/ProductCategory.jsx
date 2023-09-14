import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";

function ProductCategory() {
  return (
    <ListGroup horizontal>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          All Category
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ListGroup.Item>This</ListGroup.Item>
      <ListGroup.Item>ListGroup</ListGroup.Item>
      <ListGroup.Item>renders</ListGroup.Item>
      <ListGroup.Item>horizontally!</ListGroup.Item>
    </ListGroup>
  );
}

export default ProductCategory;
