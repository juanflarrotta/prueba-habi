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
    required: {
      value: string;
      message: string;
    };
  };
  optionsRadio: {
    text: string;
    options: [];
  }[];
}[];
