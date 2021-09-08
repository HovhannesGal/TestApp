import React, { useContext, useState } from "react";
import { NavLink, useLocation, useHistory, Link } from "react-router-dom";
import { LOGIN_Route, REGISTRATION_Route, SHOP_Route } from "../utils/constants";
import { observer } from "mobx-react-lite";
import { Context } from "../context";
import { Card, Container, Form, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const Register =() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_Route;
  
  
    
  
  
      return(
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
    >
        <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-3"
                    placeholder="Введите ваш email..."
                    
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите ваш пароль..."
                    
                    type="password"
                />
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_Route}>Войдите!</NavLink>
                        </div>
                    
                    <Button
                        variant={"outline-success"}
                      
                    >
                         'Регистрация'
                    </Button>
                </Row>
  
            </Form>
        </Card>
    </Container>
      );
  
  
  };
  
  export default observer(Register);