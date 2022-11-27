export type Steps = {
  step: number;
  path: string;
  typeInput: string;
  title: string;
  description: string;
  key: string;
  validate: {
    value: any;
    message: string;
  };
}[];
