import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://amazed-barnacle-39.hasura.app/v1/graphql',
    headers : { 'x-hasura-admin-secret' : 'qRhMmvh77wdIUJEtAXD7J4OXnwJ3aN7TYgHKfLssfIAEFSFA3OrBt0iZZ46ajo2M'},
    cache: new InMemoryCache()
});

export default client;