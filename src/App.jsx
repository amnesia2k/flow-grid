import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getData } from "./helpers/api";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { status, error, data } = useQuery({
    queryKey: ["githubRepoData"],
    queryFn: getData,
  });

  if (status === "pending") {
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl text-zinc-800">
        Loading...
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl text-zinc-800">
        {`An error occurred: ${error?.message}`}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl text-zinc-800">
        No data found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-5 items-center justify-center min-h-screen">
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>
      <strong>✨ {data?.stargazers_count}</strong>
      <strong>🍴 {data?.forks_count}</strong>
    </div>
  );
}
