import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://possible-polecat-32.hasura.app/v1/graphql',
    headers : { 'x-hasura-admin-secret' : 'UdfFd0R2NfvKYtT72jd1fQHRJYwVdTqdgKrq4RxVstdjC8tTikcVESq4vryhpgd2'},
    cache: new InMemoryCache()
});

export default client;