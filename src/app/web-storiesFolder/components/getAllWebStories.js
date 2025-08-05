import { gql } from "@apollo/client";

export const GET_ALL_WEB_STORIES = gql`
  query GET_ALL_WEB_STORIES {
    webStories(first: 1000) {
      nodes {
        title
        slug
        date
        isComment
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        content 
        author {
          node {
            name  
          }
        }
      }
    }
  }
`;
