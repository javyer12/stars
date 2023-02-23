import React from 'react';
import { useState, useEffect, useRef } from 'react'
import {
      Stack, Form, Button, Alert, Nav, Navbar, Container, NavDropdown,
      Offcanvas
} from "react-bootstrap"

export default function Header() {
      return (
            <div>
                  {/* {[ 'sm' ].map((expand: any) => ( */}
                  <Navbar bg="light" expand='sm'
                        className="mb-3">
                        <Container fluid>
                              <Navbar.Brand href="#">Daily NASA Photos</Navbar.
                                    Brand>
                              <Navbar.Toggle aria-controls=
                                    {`offcanvasNavbar-expand-sm`} />
                              <Navbar.Offcanvas
                                    id={`offcanvasNavbar-expand-sm`}
                                    aria-labelledby=
                                    {`offcanvasNavbarLabel-expand-sm`}
                                    placement="end"
                              >
                                    <Offcanvas.Body>
                                          <Nav className="justify-content-end        flex-grow-1 pe-3">
                                                <Nav.Link href="#action1">Daily Photo</
                                                Nav.Link>
                                                <Nav.Link href="#action2">Link</
                                                Nav.Link>
                                                <NavDropdown
                                                      title="Dropdown"
                                                      id=
                                                      {`offcanvasNavbarDropdown-
            expand-sm`}
                                                >
                                                      <NavDropdown.Item
                                                            href="#action3">Action</
                                                      NavDropdown.Item>
                                                      <NavDropdown.Item
                                                            href="#action4">
                                                            Another action
                                                      </NavDropdown.Item>
                                                      <NavDropdown.Divider />
                                                      <NavDropdown.Item
                                                            href="#action5">
                                                            Something else here
                                                      </NavDropdown.Item>
                                                </NavDropdown>
                                          </Nav>
                                          <Form className="d-flex">
                                                <Form.Control
                                                      type="search"
                                                      placeholder="Search"
                                                      className="me-2"
                                                      aria-label="Search"
                                                />
                                                <Button
                                                      variant="outline-success">Search
                                                </Button>
                                          </Form>
                                    </Offcanvas.Body>
                              </Navbar.Offcanvas>
                        </Container>
                  </Navbar>
                  {/* ))} */}
            </div>
      )
}