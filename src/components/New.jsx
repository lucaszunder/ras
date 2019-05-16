import React, { Component } from "react";
import { Form, Input, Scope } from "@rocketseat/unform";
import "../styles/New.css";
import { connect } from "react-redux";
import { handleAddProject } from "../actions/projects";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function New(props) {
  function handleSubmit(data) {
    const { dispatch } = props;
    try {
      dispatch(handleAddProject(data));
    } catch (err) {
      console.warn("Deu erro ", err);
    } finally {
      Swal.fire({
        position: "top-end",
        type: "success",
        title: "Seu dimensionamento foi gerado com sucesso",
        showConfirmButton: false,
        timer: 1500
      });
    }
    console.log(data);
    /**
     * {
     *   email: 'email@example.com',
     *   password: "123456"
     * }
     */
  }

  return (
    <Form className="Form" onSubmit={handleSubmit}>
      <Input name="name" placeholder="Nome do Sistema" type="text" />
      <Scope path="data">
        <Input
          className="kickass_field"
          name="tanques"
          placeholder="Nº de Tanques"
        />
        <Input name="volume" placeholder="Volume Unitário (m³)" />
        <Input name="densidade" placeholder="Densidade  " />
        <Input name="peso" placeholder="Peso Final" />
        <Input name="taxa" placeholder="Taxa de Arraçoamento" />
        <Input name="ca" placeholder="Conversão Alimentar" />
        <Input name="recirc" placeholder="Taxa de Recirculação" />
      </Scope>
      <button type="submit" class="btn">
        Dimensionar
      </button>
    </Form>
  );
}

export default connect()(New);
