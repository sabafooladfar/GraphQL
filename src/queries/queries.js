import { gql } from "@apollo/client";

const GET_LESSONS = gql`
  query getLessonsQuery {
    lessons {
      name
      id
    }
  }
`;

const GET_TEACHERS = gql`
  query getTeachersQuery {
    teachers {
      name
      id
    }
  }
`;

const ADD_LESSON = gql`
  mutation addLesson($name: String!, $group: String!, $teacherId: ID!) {
    addLesson(name: $name, group: $group, teacherId: $teacherId) {
      name
      group
      teacherId
    }
  }
`;

export { GET_LESSONS, ADD_LESSON, GET_TEACHERS };
