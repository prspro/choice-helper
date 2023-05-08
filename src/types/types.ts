export interface IChoiceThemeData {
  id: string;
  slug: string;
  name: string;
  list: IChoice[];
}

export interface IChoice {
  id: string;
  value: string;
}
