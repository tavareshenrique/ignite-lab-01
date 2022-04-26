import { GetServerSidePropsContext, NextPage } from 'next';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export type ApolloClientContext = GetServerSidePropsContext;

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject
) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3332/graphql',
    fetch,
  });

  const cache = new InMemoryCache().restore(ssrCache ?? {});

  return new ApolloClient({
    link: from([httpLink]),
    cache,
  });
}

export const withPublicApollo = (Component: NextPage) =>
  function Provider(props: any) {
    const { apolloState } = props;

    return (
      <ApolloProvider client={getApolloClient(undefined, apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    );
  };
