import React from "react";

import { ItemDetails, ActionGroup, BlockBtn, AllowBtn } from "./styled";
import { makeRequest } from "../utils";
import { actionTypes } from "../../reducer";

export const ListItem = ({
  transactionId,
  senderId,
  receiverId,
  amount,
  dispatch
}) => {
  const blockTransaction = transactionId => {
    makeRequest(
      "suspicious/block",
      "suspicious",
      data => dispatch({ type: actionTypes.blockTransaction, data: transactionId }),
      () => dispatch({ type: actionTypes.errorFetchingData }),
      'POST',
      { transactionId }
    );
  };

  const allowTransaction = transactionId => {
    makeRequest(
      "suspicious/approve",
      "suspicious",
      data => dispatch({ type: actionTypes.blockTransaction, data: transactionId }),
      () => dispatch({ type: actionTypes.errorFetchingData }),
      'POST',
      { transactionId }
    );
  };

  return (
    <ItemDetails>
      <p>Transaction ID: {senderId}</p>
      <p>From User: {senderId}</p>
      <p>To User ID: {receiverId}</p>
      <p>Amount: ${amount}</p>
      <ActionGroup>
        <BlockBtn onClick={() => blockTransaction(transactionId)}>
          Block
        </BlockBtn>
        <AllowBtn onClick={() => allowTransaction(transactionId)}>
          Allow
        </AllowBtn>
      </ActionGroup>
    </ItemDetails>
  );
};
