/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVase = /* GraphQL */ `
  mutation CreateVase(
    $input: CreateVaseInput!
    $condition: ModelVaseConditionInput
  ) {
    createVase(input: $input, condition: $condition) {
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
export const updateVase = /* GraphQL */ `
  mutation UpdateVase(
    $input: UpdateVaseInput!
    $condition: ModelVaseConditionInput
  ) {
    updateVase(input: $input, condition: $condition) {
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
export const deleteVase = /* GraphQL */ `
  mutation DeleteVase(
    $input: DeleteVaseInput!
    $condition: ModelVaseConditionInput
  ) {
    deleteVase(input: $input, condition: $condition) {
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
