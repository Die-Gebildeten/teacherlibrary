/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
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
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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
