// pages/investor-diary/getinvestordiarydata.js

import { gql } from "@apollo/client";

export const GET_ALL_DIARIES = gql`
  query GetProducts {
  products {
    nodes {
      __typename
      id
      name
      description
      shortDescription
      purchasable
      image {
        sourceUrl
        altText
        title
      }
      ... on ProductWithPricing {
        price
        regularPrice
        salePrice
      }
      ... on VariableProduct {
        galleryImages {
          nodes {
            sourceUrl
            altText
            title
          }
        }
      }
      ... on SimpleProduct {
        price
        galleryImages {
          nodes {
            sourceUrl
            altText
            title
          }
        }
        metaData {
          key
          value
        }
      }
    }
  }
}
`;