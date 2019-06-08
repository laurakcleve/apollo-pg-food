import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import InventoryListItem from './InventoryListItem';

const GET_INVENTORY = gql`
  query GetInventory {
    inventoryItems {
      id
      add_date
      expiration
      item {
        id
        name
      }
    }
  }
`;

const StyledInventory = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
`;

const StyledSidebar = styled.div`
  width: 280px;
  height: 1000px;
  background-color: #fff;
`;

const StyledItemList = styled.div`
  width: 100%;
  padding: 30px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const Inventory = () => (
  <Query query={GET_INVENTORY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return (
        <StyledInventory>
          <StyledSidebar />
          <StyledItemList>
            <ul>
              {data.inventoryItems
                && data.inventoryItems.map(inventoryItem => (
                  <InventoryListItem inventoryItem={inventoryItem} />
                ))}
            </ul>
          </StyledItemList>
        </StyledInventory>
      );
    }}
  </Query>
);

export default Inventory;
