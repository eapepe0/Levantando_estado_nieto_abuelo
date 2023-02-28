import React, { useState, useRef } from 'react';
import {
  Button,
  Input,
  Heading,
  Container,
  UnorderedList,
  Text
} from '@chakra-ui/react';

import Lista from './Lista';

export default function AppEjemploYT() {
  const initialUsers = [
    //* creamos unos usuarios de ejemplo
    { id: 1, name: 'Coloso' },
    { id: 2, name: 'Pepe' },
    { id: 3, name: 'Jose' },
    { id: 4, name: 'Monica' },
    { id: 5, name: 'Cintia' },
    { id: 6, name: 'Matias' },
    { id: 7, name: 'Gabriel' },
    { id: 8, name: 'Ivan' },
    { id: 9, name: 'Eduardo' }
  ];

  const [users, setUsers] = useState(initialUsers); //* ponemos los usuarios de ejemplo en users
  const [query, setQuery] = useState(''); //* aca guardamos la cadena de texto que vamos a filtrar
  const inputRef = useRef();

  const onChangeInput = (event) => {
    //* cada vez que cambia el input de "Buscar"
    setQuery(event.target.value); // ponemos el valor escrito en el input en query
  };

  const onSubmit = (event) => {
    //* si apretamos el boton Buscar no se borrara lo escrito
    event.preventDefault();

    //* sacamos el valor del 2do input , con useRef asi no tenemos una re-renderizacion cada vez que cambiamos las letras
    const value = inputRef.current.value; //* agregamos el valor a value
    if (value === '') return; //* si value llega vacio no hacemos nada

    setUsers((prev) => {
      return [...prev, { name: value, id: Date.now() }];
    });
    //*  retornamos un array [] con todos los valores previos (...prev) y le agregamos , un objeto {}
    //* con los valores name : el valor recolectado del input y con un id: generado por el Date.now()
    //* valor casi al azar

    inputRef.current.value = '';
    //* volvemos el valor de input a '' (nada)
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(query.toLowerCase());
    //* filtramos el el array de objetos (users) donde cada usuario (user) , devolvera
    //* si cada nombre de usuario(user.name) puesto en minuscula(toLowerCase) incluye(includes)
    //*
  });

  const onDeleteItem = (idBorrado) => {
    setUsers((prev) => prev.filter((data) => data.id !== Number(idBorrado)));
    //* ponemos en users, filtramos cada usuario , si cada id de usuario es distinto al id de usuario clickeado
  };
  return (
    <div>
      <Container>
        <Heading my="30px">Envio de datos desde nieto a abuelo</Heading>
        <form onSubmit={onSubmit}>
          <Text as="b"> Buscar : </Text>
          <Input
            mb="10px"
            type="search"
            onChange={onChangeInput}
            value={query}
          />
          <Text as="b">Nuevo Item:</Text>
          <Input mb="10px" type="text" ref={inputRef} />
          <Button mx="10px" type="submit" colorScheme="red">
            Agregar
          </Button>
        </form>
        <UnorderedList className="list-group" my="20px">
          <Lista mx="20px" users={filteredUsers} onFunction={onDeleteItem} />
        </UnorderedList>
      </Container>
    </div>
  );
}
