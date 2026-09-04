import {Controller} from "react-hook-form";
import {TextField} from "@mui/material";

export const FormInput = ({ name, control, ...rest }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    {...rest}
                    error={!!error}
                    helperText={error?.message}
                />
            )}
        />
    );
};