import * as React from "react";
import { toast } from "sonner";

export const useAppwrite = (fn) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fn();

      setData(res);
    } catch (error) {
      toast.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};
