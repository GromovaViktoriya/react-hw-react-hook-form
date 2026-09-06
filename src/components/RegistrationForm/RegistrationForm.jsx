import {useForm} from "react-hook-form";
import {Button, MenuItem} from "@mui/material";
import {FormInput} from "../FormInput/FormInput.jsx";
import {yupResolver} from "@hookform/resolvers/yup";
import {formSchema} from "../../schemas/formSchema.js";
import {useState} from "react";
import {ModalWindow} from "../ModalWindow/ModalWindow.jsx";


export const RegistrationForm = () => {
    const [data, setData] = useState(null)
    const [open, setOpen] = useState(false);

    const {control, handleSubmit} = useForm({
        resolver: yupResolver(formSchema),
    })

    const onSubmit = (data) => {
        setData(data)
        setOpen(true)
    }

    const handleClose = () => setOpen(false)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <FormInput name={"name"}
                           control={control}
                           label="Имя пользователя"
                           type="text"
                           sx={{background: "#fff", width: 250}}
                />
                <FormInput name={"email"}
                           control={control}
                           label="Электронная почта"
                           type="email"
                           sx={{background: "#fff", width: 250}}
                />
                <FormInput name={"password"}
                           control={control}
                           label="Пароль"
                           type="password"
                           sx={{background: "#fff", width: 250}}
                />
                <FormInput name={"confirmPassword"}
                           control={control}
                           label="Подтвердите пароль"
                           type="password"
                           sx={{background: "#fff", width: 250}}
                />
                <FormInput name={"birthDate"}
                           control={control}
                           type="date"
                           sx={{background: "#fff", width: 250}}
                />
                <FormInput
                    name="gender"
                    control={control}
                    label="Пол"
                    select={true}
                    sx={{background: "#fff", width: 250}}
                >
                    <MenuItem value="мужской">Мужской</MenuItem>
                    <MenuItem value="женский">Женский</MenuItem>
                </FormInput>
                <FormInput name={"phone"}
                           control={control}
                           label="Номер телефона"
                           type="phone"
                           sx={{background: "#fff", width: 250}}
                />
                <Button type="submit" variant="outlined" size="large"
                        sx={{background: "#fff", height: 55, width: 250}}>Зарегистрироваться</Button>
            </form>
            {data && <ModalWindow open={open} onClose={handleClose} data={data}/>}
        </>
    )
}