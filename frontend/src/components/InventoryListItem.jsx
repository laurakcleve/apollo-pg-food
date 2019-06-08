import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import ItemDetails from './ItemDetails';

const StyledListItem = styled.li`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 10px #e8e8e8;
  width: 100%;

  .title-row {
    display: flex;
    padding: 20px;
  }
`;

const StyledItemName = styled.div`
  flex: 1;
`;

const StyledExpiration = styled.div`

`;

const InventoryListItem = ({ inventoryItem }) => {
  const [open, setOpen] = useState(true);

  const click = () => {
    setOpen(!open);
  };

  return (
    <StyledListItem>
      <div className="title-row" onClick={click}>
        <StyledItemName>
          {inventoryItem.item.name}
        </StyledItemName>

        <StyledExpiration>
          {moment(Number(inventoryItem.expiration)).fromNow()}
        </StyledExpiration>
      </div>

      {open && <ItemDetails inventoryItem={inventoryItem} />}
    </StyledListItem>
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
