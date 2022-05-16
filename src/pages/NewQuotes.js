import { Fragment, useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuotes = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const newInputHandler = (inputData) => {
    sendRequest(inputData);
  };

  return (
    <Fragment>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={newInputHandler}
      />
      ;
    </Fragment>
  );
};

export default NewQuotes;
