export interface IChoiceThemeData {
  id: string;
  slug: string;
  name: string;
  isEditing: boolean;
  list: IChoice[];
}

export interface IChoice {
  id: string;
  value: string;
}

export interface IThemeFormValues {
  name: string;
  fieldList: {
    id: string;
    value: string;
  }[];
}
