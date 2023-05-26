import { Table } from "antd";
import USER_GQL from "@/gql/userGql";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [dataList, setDataList] = useState([]);

  const [selectApi] = useLazyQuery(USER_GQL.LIST, {
    fetchPolicy: "network-only",
    variables: {
      limit: 10,
      offset: 0,
    },
    onCompleted(data) {
      setDataList(data.values);
    },
  });

  useEffect(() => {
    selectApi();
  }, []);

  return (
    <>
      <Table
        rowKey={"id"}
        columns={[
          {
            title: "id",
            dataIndex: "id",
          },
          {
            title: "姓名",
            dataIndex: "name",
          },
        ]}
        dataSource={dataList}
        pagination={false}
      />
    </>
  );
};

export default IndexPage;
