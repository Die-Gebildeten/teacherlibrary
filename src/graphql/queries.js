/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
      id
      title
      subject
      description
      grade
      tag1
      tag2
      tag3
      tag4
      file
      createdAt
      updatedAt
    }
  }
`;
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subject
        description
        grade
        tag1
        tag2
        tag3
        tag4
        file
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
