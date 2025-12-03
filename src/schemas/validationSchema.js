import * as Yup from "yup";

export const title = Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Title is required');

export const description =  Yup.string()
    .min(10, 'Too Short!')
    .max(150, 'Too Long!')
    .required('Description is required');

export const tag = Yup.mixed()
    .oneOf(['urgent', 'in_progress', 'completed', 'need_attention' ], 'Invalid tag')
    .required('Tag is required');

export const assign = Yup.mixed()
    .oneOf(['halyna', 'dmytro', 'tetiana', 'artem'], 'Please select responsible person')
    .required('Field is required');


const validationSchema = Yup.object({title, description, tag, assign})

export default validationSchema;