import './Form.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormComponent = () => {
  const phoneRegExp = /\d+$/g;
  // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <>
      <h2 className="title form__title">Оформить заказ</h2>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          phone: '',
          textarea: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поля'),
          surname: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поля'),
          email: Yup.string().email('Неправильный  email адрес').required('Обязательное поля'),
          phone: Yup.string()
            .matches(phoneRegExp, 'Нужно обязательно число')
            .required('Обязательное поля'),
          textarea: Yup.string().min(5, 'Минимум 5 символа').required('Обязательное поля'),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(JSON.stringify(values, null, 2));
          resetForm({ values: '' });
        }}>
        <Form>
          <div className="form__block">
            <div className="form__item">
              <label htmlFor="nameInput">Имя</label>
              <Field
                className="form__input"
                id="nameInput"
                type="text"
                placeholder="Введите имя"
                name="name"
              />
              {<ErrorMessage className="_error" name="name" component="div" />}
            </div>
            <div className="form__item">
              <label htmlFor="surnameInput">Фамилия</label>
              <Field
                className="form__input"
                id="surnameInput"
                type="text"
                placeholder="Введите фамилию"
                name="surname"
              />
              {<ErrorMessage className="_error" name="surname" component="div" />}
            </div>
          </div>
          <div className="form__block">
            <div className="form__item">
              <label htmlFor="emailInput">Email</label>
              <Field
                className="form__input"
                id="emailInput"
                type="email"
                placeholder="Введите email"
                name="email"
              />
              {<ErrorMessage className="_error" name="email" component="div" />}
            </div>
            <div className="form__item">
              <label htmlFor="phoneInput">Телефон</label>
              <Field
                className="form__input"
                id="phoneInput"
                type="text"
                placeholder="Введите телефон"
                name="phone"
              />
              {<ErrorMessage className="_error" name="phone" component="div" />}
            </div>
          </div>
          <div className="form__item">
            <label htmlFor="textareaInput">Адрес доставки</label>
            <Field
              className="form__input"
              id="textareaInput"
              type="text"
              placeholder="Введите телефон"
              name="textarea"
              as="textarea"
            />
            {<ErrorMessage className="_error" name="textarea" component="div" />}
          </div>
          <button type="submit" className="btn form__btn">
            Отправить
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FormComponent;
