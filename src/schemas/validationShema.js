import * as Yup from "yup";

export const name = Yup.string()
    .required('Name is required');

export const email =  Yup.string()
    .email("Invalid email format")
    .notRequired();

export const phone = Yup.mixed()
    .required("Phone is required")
    .test("is-valid-phone", "Invalid phone number", (value) => {
        return value && value.replace(/\D/g, "").length >= 10;  // мінімум 10 цифр
    })


const validationSchema = Yup.object({name, email, phone})

export default validationSchema;