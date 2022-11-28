export type Steps = {
  step: number;
  path: string;
  optionInputs: [];
  typeInput: string;
  title: string;
  optionsCheck: [];
  description: string;
  key: string;
  validate: {
    value: any;
    message: string;
  };
}[];
