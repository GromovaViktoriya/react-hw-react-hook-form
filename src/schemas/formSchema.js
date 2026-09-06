import * as yup from "yup";

export const formSchema = yup
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