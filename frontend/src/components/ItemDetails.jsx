import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const StyledItemDetails = styled.div`
  padding: 20px;
  border-top: 1px solid #ccc;
`;

const StyledAddDate = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.darkerGrey};
`;

const ItemDetails = ({ inventoryItem }) => (
  <StyledItemDetails>
    <StyledAddDate>
      Added
      {' '}
      {moment(Number(inventoryItem.add_date)).format('M/D/YY')}
    </StyledAddDate>
  </StyledItemDetails>
);

ItemDetails.propTypes = {
  inventoryItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ItemDetails;
