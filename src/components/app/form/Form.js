import { useFormik } from 'formik';
import * as Yup from 'yup';
import './form.css';

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        validationSchema: Yup.object({
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
                
                
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Отправить пожертвование</h2>
            <label>Ваше имя</label>
            <input className="inp" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
            <label>Ваше почта</label>
            <input className="inp" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
            <label>Количество</label>
            <input className="inp" type="number" name="amount" value={formik.values.amount} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.amount && formik.touched.amount ? <div>{formik.errors.amount}</div> : null}
            <label>Валюта</label>
            <select className="inp" name="currency" value={formik.values.currency} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="">Выберите валюту</option>
                <option value="USD">USD</option>
                <option value="KZT">KZT</option>
                <option value="RUB">RUB</option>
            </select>
            {formik.errors.currency && formik.touched.currency ? <div>{formik.errors.currency}</div> : null}
            <label>Ваше сообщение</label>
            <textarea className="inp" name="text" value={formik.values.text} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.text && formik.touched.text ? <div>{formik.errors.text}</div> : null}
            <label>
                <input id="radio" type="checkbox" name="terms" value={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                Сошлошаетесь с политикой конфидициальности
            </label>
            {formik.errors.terms && formik.touched.terms ? <div>{formik.errors.terms}</div> : null}
            <button type="submit">Отправить</button>
            <button type="reset">Очистить</button>
        </form>
    )
}

export default Form;
// function onSubmit(e) {
    //     e.preventDefault()
    //     const results = new FormData(e.target);
    //     const obj = {};
    //     results.forEach((el, i) => obj[i] = el);
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(obj)
    //     })
    //         .then(data => data.json())
    //         .then(arr => console.log(arr))
    // }