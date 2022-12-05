export type Steps = {
  step: number;
  path: string;
  optionInputs: [];
  typeInput: string;
  title: string;
  description: string;
  key: string;
  validate: {
    required: {
      value: boolean;
      message: string;
    };
  };
  optionsRadio: {
    text: string;
    options: [];
  }[];
}[];
