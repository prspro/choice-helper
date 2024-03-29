export interface IChoiceThemeData {
  id: string;
  slug: string;
  name: string;
  color: "theme1" | "theme2" | "theme3";
  isEditing: boolean;
  list: IChoice[];
  choiceStoryList: IChoiceStory[];
}

export interface IChoiceStory {
  date: number;
  options: IChoice[];
}

export interface IChoice {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IThemeFormValues {
  name: string;
  fieldList: {
    id: string;
    value: string;
  }[];
}
