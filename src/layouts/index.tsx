import { Link, Outlet } from "umi";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.URI,
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": process.env.SECRET ?? "",
  },
});

export default function Layout() {
  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
}
