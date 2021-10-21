/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVase = /* GraphQL */ `
  query GetVase($id: ID!) {
    getVase(id: $id) {
      id
      painter
      shape
      entry
      location
      v_num
      notes
      height
      diameter
      plate
      reference
      description
      createdAt
      updatedAt
    }
  }
`;
export const listVases = /* GraphQL */ `
  query ListVases(
    $filter: ModelVaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        painter
        shape
        entry
        location
        v_num
        notes
        height
        diameter
        plate
        reference
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
