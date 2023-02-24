import { gql, useQuery } from "@apollo/client";

interface IUserList {
  /** 每页多少条*/
  offset?: number;
  /** 当前页*/
  limit?: number;
  /** 查询条件*/
  where?: any;
}
/** 查询用户列表（分页）*/
export const useGetUserList = (params?: IUserList) => {
  const GQL = gql`
    query GetUsers(
      $limit: Int = 10
      $offset: Int = 0
      $where: users_bool_exp = {}
    ) {
      users_aggregate(offset: $offset, limit: $limit, where: $where) {
        count: aggregate {
          count
        }
        values: nodes {
          id
          user_name
        }
      }
    }
  `;
  return useQuery(GQL, { variables: params });
};
