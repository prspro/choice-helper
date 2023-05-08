import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChoiceThemeData, IChoice } from "../../types/types";


const initialState: { list: IChoiceThemeData[] } = {
  list: [
    {
      id: "0",
      slug: "name-one",
      name: "name1",
      list: [
        {id: "0", value: "valu1"},
        {id: "1", value: "value2"},
      ]
    },
    {
      id: "1",
      slug: "name-two",
      name: "name2",
      list: [
        {id: "0", value: "value3"},
        {id: "1", value: "value4"},
      ]
    }
  ],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addChoiceTheme: (state, action: PayloadAction<IChoiceThemeData>) => {
      state.list.push(action.payload);
    },
    removeChoiceTheme: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((entry) => entry.id !== action.payload);
    },
    addChoiceToTheme: (
      state,
      action: PayloadAction<{ id: string; choiceItem: IChoice }>
    ) => {
      state.list = state.list.map((entry) => {
        if (entry.id === action.payload.id) {
          return {
            ...entry,
            list: [...entry.list, action.payload.choiceItem],
          };
        } else {
          return entry;
        }
      });
    },
    removeChoiceFromTheme: (
      state,
      action: PayloadAction<{ themeId: string; choiceId: string }>
    ) => {
      state.list = state.list.map((choiceTheme) => {
        if (choiceTheme.id === action.payload.themeId) {
          return {
            ...choiceTheme,
            list: choiceTheme.list.filter(
              (choice) => choice.id !== action.payload.choiceId
            ),
          };
        } else {
          return choiceTheme;
        }
      });
    },
  },
});

export const { addChoiceTheme } = appSlice.actions;
export default appSlice.reducer;
