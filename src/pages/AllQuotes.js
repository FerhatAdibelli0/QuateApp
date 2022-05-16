import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NotFound from "./NotFound";


const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedData,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedData.length === 0) {
    return (
      <div className="centered">
        <NotFound />
      </div>
    );
  }
  if (status === "completed" && error) {
    return <div className="centered">Something went wrong</div>;
  }

  return (
    <div>
      <QuoteList quotes={loadedData} />
    </div>
  );
};

export default AllQuotes;
