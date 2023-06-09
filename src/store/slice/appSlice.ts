import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChoiceThemeData, IChoice } from "../../types/types";

const initialState: { list: IChoiceThemeData[]; isOverlayShown: boolean } = {
  list: [],
  isOverlayShown: true,
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
    editChoiceTheme: (
      state,
      action: PayloadAction<{ id: string; slug: string; name: string }>
    ) => {
      state.list = state.list.map((theme) => {
        if (theme.id === action.payload.id) {
          return {
            ...theme,
            name: action.payload.name,
            slug: action.payload.slug,
          };
        } else {
          return theme;
        }
      });
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
    editChoiceInTheme: (
      state,
      action: PayloadAction<{
        themeId: string;
        choiceData: { id: string; value: string };
      }>
    ) => {
      state.list = state.list.map((choiceTheme) => {
        if (choiceTheme.id === action.payload.themeId) {
          return {
            ...choiceTheme,
            list: choiceTheme.list.map((choice) => {
              if (choice.id === action.payload.choiceData.id) {
                return {
                  ...choice,
                  value: action.payload.choiceData.value,
                };
              } else {
                return choice;
              }
            }),
          };
        } else {
          return choiceTheme;
        }
      });
    },
    toggleEditHandler: (
      state,
      action: PayloadAction<{ themeId: string; choiceId: string }>
    ) => {
      state.list = state.list.map((choiceTheme) => {
        if (choiceTheme.id === action.payload.themeId) {
          return {
            ...choiceTheme,
            list: choiceTheme.list.map((choice) => {
              if (choice.id === action.payload.choiceId) {
                return {
                  ...choice,
                  isEditing: !choice.isEditing,
                };
              } else {
                return choice;
              }
            }),
          };
        } else {
          return choiceTheme;
        }
      });
    },
    toggleOverlay: (state, action: PayloadAction) => {
      state.isOverlayShown = !state.isOverlayShown;
    },
    showOverlay: (state, action: PayloadAction) => {
      state.isOverlayShown = true;
    },
    hideOverlay: (state, action: PayloadAction) => {
      state.isOverlayShown = false;
    },
  },
});

export const {
  addChoiceTheme,
  removeChoiceTheme,
  editChoiceTheme,
  addChoiceToTheme,
  removeChoiceFromTheme,
  editChoiceInTheme,
  toggleEditHandler,
  toggleOverlay,
  showOverlay,
  hideOverlay,
} = appSlice.actions;
export default appSlice.reducer;
