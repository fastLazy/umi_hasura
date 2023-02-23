import { Link, Outlet } from "umi";

import apClient, { ApolloProvider } from "@/utils/apClient";

export default function Layout() {
  return (
    <ApolloProvider client={apClient}>
      <Outlet />
    </ApolloProvider>
  );
}
