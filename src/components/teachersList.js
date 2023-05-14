import { useQuery } from "@apollo/client";
import { GET_TEACHERS } from "../queries/queries";

export default function TeacherList() {
  const { loading, error, data } = useQuery(GET_TEACHERS);
  // console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.teachers.map(({ id, name }) => (
    <option value={id} key={id}>
      {name}
    </option>
  ));
}
