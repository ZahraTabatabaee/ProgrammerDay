import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "~/types";
import {
  getAllQuestion,
  getOneQusetion,
  sendQuestionResult,
} from "./questions.actions";

const initialState: { questions: Question[] } = { questions: [] };

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
    },
    updateQuestion(state, action: PayloadAction<Question>) {
      const question = action.payload;

      const questionIndex = state.questions.findIndex(
        (questionIn) => questionIn.id === question.id
      );
      state.questions[questionIndex] = question;
    },
  },
});

export const questionActions = {
  ...questionSlice.actions,
  getAllQuestion,
  getOneQusetion,
  sendQuestionResult,
};
export const questionReducer = questionSlice.reducer;
