import { createContext, useContext } from 'react';

const FeedbackContext = createContext();

export function useFeedback() {
  return useContext(FeedbackContext);
}

export default FeedbackContext;
