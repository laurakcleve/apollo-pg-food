import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
    }
  }
`;

export default function Items() {
  return (
    <Query query={GET_ITEMS}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;

        return (
          <React.Fragment>
            {data.items
              && data.items.map(item => (
                <p>{item.name}</p>
              ))}
          </React.Fragment>
        );
      }}
    </Query>
  );
}
