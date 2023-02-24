import React, { useEffect } from "react";
import { Table } from "antd";
import { useGetUserList } from "@/services/useIndexServices";

const IndexPage: React.FC = () => {
  const a = useGetUserList({
    limit: 1,
  });

  return (
    <>
      <Table />
    </>
  );
};

export default IndexPage;
