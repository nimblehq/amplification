import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringFilter;
  userId?: StringNullableFilter;
};
