import gql from "graphql-tag";

export default gql`
  query GET_POSTS($first: Int) {
    posts(first: $first) {
      edges {
        node {
          id
          title
          work {
            title
            number
            date
            description
            gallery {
              src: mediaItemUrl
            }
          }
        }
      }
    }
  }
`;
