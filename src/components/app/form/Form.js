import { useFormik } from 'formik'
import './form.css'

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Обязательное поле!';
    } else if (values.name.length < 2) {
        errors.name = 'Минимум 2 символа для заполнения'
    }

    if (!values.email) {
        errors.email = 'Обязательное поле!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Неправильный email адрес'
    }

    return errors;
}
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
        validate,
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
            <label>Валюта</label>
            <select className="inp" name="currency" value={formik.values.currency} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="">Выберите валюту</option>
                <option value="USD">USD</option>
                <option value="KZT">KZT</option>
                <option value="RUB">RUB</option>
            </select>
            <label>Ваше сообщение</label>
            <textarea className="inp" name="text" value={formik.values.text} onChange={formik.handleChange} onBlur={formik.handleBlur} />

            <label>
                <input id="radio" type="checkbox" name="terms" value={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                Сошлошаетесь с политикой конфидициальности
            </label>

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