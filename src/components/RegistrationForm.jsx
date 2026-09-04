import {useForm} from "react-hook-form";
import {Button} from "@mui/material";
import {FormInput} from "./FormInput/FormInput.jsx";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup
    .object({
        name: yup.string().required().min(2).max(20),
        email: yup.string().email("Введите корректный email").required(),
        password: yup
            .string()
            .required("Пароль обязателен")
            .min(6, "Пароль должен содержать минимум 6 символов")
            .matches(/(?=.*[A-ZА-Я])/, "Пароль должен содержать хотя бы одну заглавную букву"),
        confirmPassword: yup
            .string()
            .required("Подтвердите пароль")
            .oneOf([yup.ref("password")], "Пароли не совпадают"),
        birthDate: yup
            .date()
            .typeError("Введите корректную дату")
            .required("Дата рождения обязательна")
            .max(new Date(), "Дата рождения не может быть в будущем")
            .min(new Date("1900-01-01"), "Вы уверены, что вы вампир? :)"),
        gender: yup.string().oneOf(["мужской", "женский"]).required(),
        phone: yup.string()
            .required("Введите номер телефона")
            .matches(
            /^\+7\(\d{3}\)\d{2}-\d{3}-\d{2}$/,
            "Введите номер в формате +7(XXX)XX-XXX-XX"
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
            <Button type="submit" variant="outlined" size="large" sx={{background: "#fff", height: 55, width: 250}}>Отправить</Button>
        </form>
    )
}