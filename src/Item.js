import React, { useState, memo } from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';

const Item = memo(({ user, onBorrar }) => {
  const [estilo, setEstilo] = useState(false);

  const onClickItem = (e) => {
    setEstilo((prevEstilo) => !prevEstilo);
    //recibe el estado previo y pone en estilo lo contrario a ese estado
    // si es true pone en false y viceversa
  };

  const iconClickItem = (e) => {
    onBorrar(e.target.id);
    //* al hacer click en el icono de la X , le enviamos el id hasta <App />
    //* para borrarlo del array users
  };
  return (
    <>
      <Flex my="5px">
        <Text
          className="list-group-item"
          onClick={onClickItem}
          key={user.id}
          as={estilo ? 'del' : ''}
        >
          {user.name}
        </Text>
        <Button size="xs" ml="20px" onClick={iconClickItem} id={user.id}>
          x
        </Button>
      </Flex>
    </>
  );
});

export default Item;
