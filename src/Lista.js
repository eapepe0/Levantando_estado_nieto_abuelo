import Item from './Item';
import { memo } from 'react';
import { UnorderedList } from '@chakra-ui/react';
const Lista = memo(({ users, onFunction }) => {
  return (
    <UnorderedList my="10px">
      {users.map((item) => (
        <Item key={item.id} user={item} onBorrar={onFunction} />
      ))}
    </UnorderedList>
  );
});

export default Lista;
