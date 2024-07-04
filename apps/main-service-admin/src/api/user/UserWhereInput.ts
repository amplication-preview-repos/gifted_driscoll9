import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  pages?: PageListRelationFilter;
  role?: RoleWhereUniqueInput;
  username?: StringFilter;
};
