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
    },
    {
      id: "2",
      slug: "name-3",
      name: "name3",
      list: [
        {id: "0", value: "value3"},
        {id: "1", value: "value4"},
      ]
    },
    {
      id: "3",
      slug: "name-4",
      name: "name4",
      list: [
        {id: "0", value: "value3"},
        {id: "1", value: "value4"},
      ]
    },
    {
      id: "4",
      slug: "name-5",
      name: "name5",
      list: [
        {id: "0", value: "value3"},
        {id: "2", value: "asdas"},
        {id: "3", value: "sss"},
        {id: "4", value: "dgsgsd"},
        {id: "5", value: "sdvsd"},
        {id: "6", value: "xxxv"},
        {id: "7", value: "dxx"},
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
