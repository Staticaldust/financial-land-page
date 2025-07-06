import { FC, HTMLInputTypeAttribute } from "react";
import {
  ChangeType,
  FormErrorType,
  OptionValueInterface,
} from "../../types/useFormTypes";
import {
  Breakpoint,
  Grid,
  MenuItem,
  SxProps,
  TextField,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import { Theme } from "@emotion/react";

type FormInputProps = {
  name?: string;
  errors: FormErrorType;
  options?: OptionValueInterface[];
  label?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  sx?: SxProps<Theme>;
  variant?: TextFieldVariants;
  value: unknown;
  textFieldProps?: TextFieldProps;
  onChange: (e: ChangeType) => void;
  breakPoint?: { [key in Breakpoint]?: number };
};

const FormInput: FC<FormInputProps> = ({
  label = "",
  name = "",
  options,
  errors,
  onChange,
  value,
  sx = {},
  breakPoint = { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 },
  disabled = false,
  required = true,
  type = "text",
  variant = "outlined",
  rows = 1,
  textFieldProps,
}) => {
  if (type === "select")
    return (
      <Grid item {...breakPoint}>
        <TextField
          sx={{ ...sx, "MuiSvgIcon-root": { right: "86%" } }}
          margin="dense"
          variant={variant}
          label={label}
          value={value}
          name={name}
          required={required}
          disabled={disabled}
          onChange={onChange}
          error={!!errors[name]}
          helperText={!!errors[name]}
          size="small"
          select
          fullWidth
          {...textFieldProps}
        >
          {options?.map((option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    );

  return (
    <Grid item {...breakPoint}>
      <TextField
        sx={sx}
        margin="dense"
        variant={variant}
        label={label}
        value={value}
        name={name}
        required={required}
        disabled={disabled}
        onChange={onChange}
        error={!!errors[name]}
        helperText={!!errors[name]}
        size="small"
        fullWidth
        type={type}
        rows={rows}
        multiline
        {...textFieldProps}
      />
    </Grid>
  );
};

export default FormInput;
