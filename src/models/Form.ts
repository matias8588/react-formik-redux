// Shape of form values
export interface IFormValues {
  email: string;
  password: string;
}

// The type of props MyForm receives
export interface IMyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}
