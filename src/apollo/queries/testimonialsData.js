import { gql } from "@apollo/client";

export const GET_TESTIMONIALS = gql`
query{
  testimonialsCollection {
    items{
      productName
      storeName
	  profileUrl
	  profileName
	  rating
	  description
    }
  }
}
`
