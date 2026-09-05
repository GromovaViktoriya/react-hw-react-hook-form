import {useForm} from "react-hook-form";
import {Button, MenuItem} from "@mui/material";
import {FormInput} from "./FormInput/FormInput.jsx";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup
    .object({
        name: yup.string().required("Введите ваше имя").min(2).max(20),
        email: yup.string().email("Введите корректный email").required("Введите email"),
        password: yup
            .string()
            .required("Введите пароль")
            .min(6, "Пароль должен содержать минимум 6 символов")
            .matches(/(?=.*[A-ZА-Я])/, "Пароль должен содержать хотя бы одну заглавную букву"),
        confirmPassword: yup
            .string()
            .required("Подтвердите пароль")
            .oneOf([yup.ref("password")], "Пароли не совпадают"),
        birthDate: yup
            .date()
            .typeError("Введите вашу дату рождения")
            .required("Введите вашу дату рождения")
            .max(new Date(), "Дата рождения не может быть в будущем")
            .min(new Date("1900-01-01"), "Вы уверены, что вы вампир? :)"),
        gender: yup.string().required("Выберете пол"),
        phone: yup.string()
            .required("Введите номер телефона")
            .matches(
            /^\+7\d{3}\d{2}\d{3}\d{2}$/,
            "Введите номер в формате +7XXXXXXXXXX"
        )
    })
    .required()

export const RegistrationForm = () => {
    const {control, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
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
                       type="phone"
                       sx={{background: "#fff", width: 250}}
            />
            <Button type="submit" variant="outlined" size="large" sx={{background: "#fff", height: 55, width: 250}}>Отправить</Button>
        </form>
    )
}