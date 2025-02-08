import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ["githubRepoData"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.github.com/repos/amnesia2k/capstone-film-radar"
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      return res.json();
    },
  });

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl text-zinc-800">
        Loading...
      </div>
    );
  }

  if (error) {
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
