import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import ItemDetails from './ItemDetails';

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 10px #e8e8e8;
`;

const TitleRow = styled.div`
  display: flex;
  padding: 20px;
`;

const ItemName = styled.div`
  flex: 1;
`;

const Expiration = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const InventoryListItem = ({ inventoryItem }) => {
  const [open, setOpen] = useState(true);

  const click = () => {
    setOpen(!open);
  };

  return (
    <ListItem>
      <TitleRow onClick={click}>
        <ItemName>
          {inventoryItem.item.name}
        </ItemName>

        <Expiration>
          {moment(Number(inventoryItem.expiration)).fromNow()}
        </Expiration>
      </TitleRow>

      {open && <ItemDetails inventoryItem={inventoryItem} />}
    </ListItem>
  );
};

InventoryListItem.propTypes = {
  inventoryItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default InventoryListItem;
