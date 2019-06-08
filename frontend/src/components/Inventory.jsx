import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import InventoryListItem from './InventoryListItem';

const GET_INVENTORY = gql`
  query GetInventory {
    inventoryItems {
      id
      amount
      add_date
      expiration
      item {
        id
        name
        countsAs {
          id
          name
        }
      }
    }
  }
`;

const StyledInventory = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
`;

const Sidebar = styled.div`
  width: 280px;
  height: 1000px;
  background-color: #fff;
`;

const ItemList = styled.div`
  width: 100%;
  padding: 30px;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

const Inventory = () => (
  <Query query={GET_INVENTORY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return (
        <StyledInventory>
          <Sidebar />
          <ItemList>
            <ul>
              {data.inventoryItems
                && data.inventoryItems.map(inventoryItem => (
                  <InventoryListItem inventoryItem={inventoryItem} />
                ))}
            </ul>
          </ItemList>
        </StyledInventory>
      );
    }}
  </Query>
);

export default Inventory;
