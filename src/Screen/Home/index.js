import React, { useReducer, useEffect } from "react";

import { makeRequest } from "../utils";
import { transactionReducer, initialState, actionTypes } from "../../reducer";

import { Title, ListWrapper, Loading } from "./styled";
import { ListItem } from "./ListItem";

export const Home = () => {
  // using react useReducer so as not to over-engineer with redux
  // The app is simple enough and useReducer should be sufficient enough to manage the app state
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  useEffect(() => {
    const fetchTransaction = () => {
      makeRequest(
        "suspicious",
        "suspicious",
        data => {
          dispatch({
            type: actionTypes.fetchedTransactionList,
            data
          });
        },
        () => {
          dispatch({
            type: actionTypes.errorFetchingData
          });
        }
      );
    };
    
    dispatch({ type: actionTypes.fetchingTransactionList });
    fetchTransaction();
  }, []);

  return (
    <div>
      <Title>Suspicious transactions</Title>
      {state.loading && <Loading />}
      {!state.loading && (
        <ListWrapper>
          {Object.keys(state.suspiciousList).map(eachKeys => (
            <ListItem
              dispatch={dispatch}
              key={eachKeys}
              transactionId={eachKeys}
              senderId={state.suspiciousList[eachKeys].senderId}
              receiverId={state.suspiciousList[eachKeys].receiverId}
              amount={state.suspiciousList[eachKeys].amount}
            />
          ))}
        </ListWrapper>
      )}
    </div>
  );
};
