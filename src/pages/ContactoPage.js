import React from "react";
import "./../styles/components/pages/ContactoPage.css"
import {Form} from "react-bootstrap";

const ContactoPage = (props) => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <Form action="" method="" className="formulario">
          <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label htmlFor="telefono">Telefono</label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name=""></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </Form>
      </div>
      <div className="datos">
        <h2>Otras vias de comunicacion</h2>
        <p>
          Tambien puede contactarse con nosotros usando los siguientes medios
        </p>
        <ul>
          <li>Telefono: 43242354</li>
          <li>Email: tecnonews@mail.com</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
