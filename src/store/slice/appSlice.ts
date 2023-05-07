import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IChoiceTheme {
  id: string;
  slug: string;
  name: string;
  list: IChoice[];
}

interface IChoice {
  id: string;
  value: string;
}

const initialState: { list: IChoiceTheme[] } = {
  list: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addChoiceTheme: (state, action: PayloadAction<IChoiceTheme>) => {
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
