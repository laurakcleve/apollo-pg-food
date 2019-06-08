import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const StyledItemDetails = styled.div`
  display: flex;
  padding: 20px;  
  border-top: 1px solid #ccc;
`;

const AddDate = styled.div`
  flex: 1;
`;

const CountsAs = styled.div`
  flex: 1;
`;

const Amount = styled.div`
  flex: 1;
`;

const DetailTitle = styled.div`
  margin-bottom: 6px;
  color: ${props => props.theme.colors.darkerGrey};
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
`;

const DetailContent = styled.div`
  color: ${props => props.theme.colors.darkestGrey};
`;

const EditButton = styled.button`
  width: 55px;
  height: 25px;
  background-color: ${props => props.theme.colors.yellowGreen}; 
  border: 1px solid ${props => props.theme.colors.darkYellowGreen};
  border-radius: 4px;
  color: ${props => props.theme.colors.darkYellowGreen};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;

const ItemDetails = ({ inventoryItem }) => (
  <StyledItemDetails>
    <AddDate>
      <DetailTitle>
        Added
      </DetailTitle>

      <DetailContent>
        {moment(Number(inventoryItem.add_date)).format('M/D/YY')}
      </DetailContent>
    </AddDate>

    <CountsAs>
      {inventoryItem.item.countsAs.length > 0 && (
        <>
          <DetailTitle>
            Counts as
          </DetailTitle>

          <DetailContent>
            {inventoryItem.item.countsAs.map(genericItem => (
              <span>{genericItem.name}</span>
            ))}
          </DetailContent>
        </>
      )}
    </CountsAs>

    <Amount>
      {inventoryItem.amount && (
        <>
          <DetailTitle>
            Amount
          </DetailTitle>

          <DetailContent>
            {inventoryItem.amount}
          </DetailContent>
        </>
      )}
    </Amount>

    <EditButton>
      Edit
    </EditButton>
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
