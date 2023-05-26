import { gql } from "@apollo/client";

export interface IUserList {
  /** 每页多少条*/
  offset?: number;
  /** 当前页*/
  limit?: number;
  /** 查询条件*/
  where?: any;
}

const USER_GQL = {
  LIST: gql`
    query GetUsers(
      $limit: Int = 10
      $offset: Int = 0
      $where: users_bool_exp = {}
    ) {
      values: users(offset: $offset, limit: $limit, where: $where) {
        id
        name
      }
      count: users_aggregate(where: $where) {
        aggregate {
          count
        }
      }
    }
  `,
};

export default USER_GQL;
