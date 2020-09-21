// Shape of form values
export interface FormValues {
  email: string;
  password: string;
}

export interface OtherProps {
  message: string;
}

// The type of props MyForm receives
export interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}
