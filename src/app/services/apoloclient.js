import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const WPClient = new ApolloClient({
    link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_WEBSTORIES_API_URL}graphql`, // Ensure URL correctness
        credentials: 'same-origin', // Adjust if using cross-origin
    }),
    cache: new InMemoryCache(), // Caching for efficient data fetching
});

export default WPClient;
