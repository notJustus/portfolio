import { ApolloClient, InMemoryCache, HttpLink, gql, ApolloLink, Observable } from "@apollo/client";
import { mockData } from "./mockData";

const useMocks = process.env.NEXT_USE_MOCKS === "true";

const mockLink = new ApolloLink(() => {
  return new Observable(observer => {
    observer.next({ data: mockData });
    observer.complete();
  });
});

export const apolloClient = new ApolloClient({
  link: useMocks
    ? mockLink
    : new HttpLink({
        uri: `${process.env.NEXT_API_URL}`,
        fetchOptions: {
          next: { revalidate: 10 },
        },
      }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
    query: {
      fetchPolicy: "network-only",
    },
  },
});

export const GraphqlQuery = gql`
  {
    skills(orderBy: uniqueId_ASC) {
      uniqueId
      skill
      id
      proficient
      fieldType
      image {
        url
      }
      url
    }
    jobs(orderBy: from_DESC) {
      id
      company
      designation
      companyLinkedin
      companyUrl
      from
      to
      logo {
        url
      }
    }
    projects(orderBy: uniqueId_ASC) {
      id
      title
      uniqueId
      description
      demoLink
      videoUrl
      githubLink
      techStack {
        text
      }
      image {
        url
      }
    }
  }
`;
