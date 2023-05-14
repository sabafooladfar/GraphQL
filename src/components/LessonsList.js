import { useQuery } from "@apollo/client";
import { GET_LESSONS } from "../queries/queries";


export default function LessonList() {
  const { loading, error, data } = useQuery(GET_LESSONS);
  // console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.lessons.map(({ id, name }) => (
    <div key={id}>
      <h3>{name}</h3>
    </div>
  ));
}