import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { withApollo } from '../../lib/withApollo';
import {
  // useGetProductsQuery,
  useMeQuery,
} from '../../graphql/generated/graphql';
import {
  // getServerPageGetProducts,
  ssrGetProducts,
} from '../../graphql/generated/page';

function Home() {
  const { data: me } = useMeQuery();

  return (
    <div className="text-violet-500">
      <h1>Hello World</h1>
      {/* <pre>{JSON.stringify(data.products, null, 2)}</pre> */}

      <pre>ok: {JSON.stringify(me, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  // getServerPageGetProducts({}, ctx)
  getServerSideProps: async () => ({
    props: {},
  }),
});

export default withApollo(ssrGetProducts.withPage()(Home));
