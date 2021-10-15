import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import './form.css';

const CustomForm = () => {

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Минимум 2 символа')
                    .required('Обязательное поля'),
                email: Yup.string()
                    .email('Неправильный еmail адрес')
                    .required('Обязательное поля'),
                amount: Yup.number()
                    .min(5, 'Не менее 5')
                    .required('Обязательное поля'),
                currency: Yup.string().required('Выберите валюту'),
                text: Yup.string()
                    .min(10, "не менее 10 символов"),
                terms: Yup.boolean()
                    .required('Необходима согласия')
                    .oneOf([true], 'Необходима согласия')
            })}
            onSubmit={(values, { resetForm }) => {
                console.log(JSON.stringify(values, null, 2))
                resetForm({ values: '' })
            }}
        >
            <Form>
                <h2>Отправить пожертвование</h2>
                <label>Ваше имя</label>
                <Field className="inp" type="text" name="name" />
                {<ErrorMessage className="error" name="name" component="div" />}

                <label>Ваше почта</label>
                <Field className="inp" type="email" name="email" />
                {<ErrorMessage className="error" name="email" component="div" />}

                <label>Количество</label>
                <Field className="inp" type="number" name="amount" />
                {<ErrorMessage className="error" name="amount" component="div" />}

                <label>Валюта</label>
                <Field className="inp" name="currency" as="select">
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="KZT">KZT</option>
                    <option value="RUB">RUB</option>
                </Field>
                {<ErrorMessage className="error" name="currency" component="div" />}
                <label>Ваше сообщение</label>
                <Field className="inp" name="text" as="textarea" />
                {<ErrorMessage className="error" name="text" component="div" />}
                <label>
                    <Field id="radio" type="checkbox" name="terms" />
                    Сошлошаетесь с политикой конфидициальности
                </label>
                {<ErrorMessage className="error" name="terms" component="div" />}
                <button type="submit">Отправить</button>
                <button type="reset">Очистить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;
