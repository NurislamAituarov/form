import './Form.scss';
import './Form2.scss';
import bottomImg from '../../image/25243.png';
import eye from '../../image/eye.png';
import eyeShow from '../../image/eyeShow.png';

import { useEffect, useRef, useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import Spinner from '../spinner/Spinner';
import MyLoader from '../Error/Error';

const Form2 = () => {
  // console.log('render');
  const [dropdown, setDropdown] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [eyePassword, setEyePassword] = useState(false);

  const listItem = ['Конспекты по учебе', 'Фотоальбом', 'Дневник спортсмена'];
  const [selectItem, setSelectItem] = useState('Заметки путешественника');
  const refList = useRef();

  useEffect(() => {
    function dropdownHidden(e) {
      if (e.target !== refList.current) setDropdown(false);
    }
    dropdown
      ? window.addEventListener('click', dropdownHidden)
      : window.removeEventListener('click', dropdownHidden);

    return () => {
      window.removeEventListener('click', dropdownHidden);
    };
  }, [dropdown]);

  function dropdownTrigger() {
    setDropdown(!dropdown);
  }
  function selectedItem(item) {
    setSelectItem(item);
  }
  const request = async (object) => {
    const formItem = document.querySelector('.form2');
    const success = document.createElement('div');
    success.classList.add('success');
    success.innerHTML = 'Ваш запрос успешно отправлен';

    setLoader(true);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        console.log(data);
        formItem.append(success);
      })
      .catch((error) => {
        console.error('Произошла ошибка! Обновите страницу');
        setLoader(false);
        setError(true);
      })
      .finally(() => {
        // setEyePassword(false);
        setTimeout(() => {
          success.remove();
        }, 2000);
      });
  };

  const triggerEye = () => {
    const passwordItem = document.getElementById('password');

    setEyePassword((eyePassword) => !eyePassword);

    if (!eyePassword) {
      passwordItem.setAttribute('type', 'text');
    } else {
      passwordItem.setAttribute('type', 'password');
    }
  };

  return (
    <>
      <h2 className="title">Registration</h2>
      <Formik
        initialValues={{
          login: '',
          password: '',
          checkbox: '',
        }}
        validationSchema={Yup.object({
          login: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поля'),
          password: Yup.string()
            .matches(/\S/g, 'Уберите пробелы')
            .min(2, 'Минимум 2 символа')
            .required('Обязательное поля'),
          checkbox: Yup.boolean()
            .oneOf([true], 'Для отправки данных нужно ваше согласие на обработку данных')
            .required('Обязательно соглашение'),
        })}
        onSubmit={(values, { resetForm }) => {
          // console.log(JSON.stringify(values, null, 2));
          values['Заметки путешественника'] = selectItem;
          request(values);
          resetForm({
            values: '',
          });
          setSelectItem('Заметки путешественника');
        }}>
        <Form className="form2">
          <div className="form__item">
            <label htmlFor="login">Login</label>
            <Field
              className="form__input form2__input"
              type="text"
              name="login"
              id="login"
              placeholder="login"
            />
            {<ErrorMessage className="_error" name="login" component="div" />}
          </div>
          <div className="form__item">
            <label id="label__password" htmlFor="password">
              Passwords
              {!eyePassword ? (
                <img
                  onClick={triggerEye}
                  className="password__img"
                  width="15"
                  height="15"
                  src={eye}
                  alt="eye"
                />
              ) : (
                <img
                  onClick={triggerEye}
                  className="password__img"
                  width="15"
                  height="18"
                  src={eyeShow}
                  alt="eye"
                />
              )}
            </label>
            <Field
              className="form__input form2__input"
              type="password"
              id="password"
              placeholder="password"
              name="password"
            />

            {<ErrorMessage className="_error" name="password" component="div" />}
          </div>
          <div className="form__item">
            <label htmlFor="password">selected</label>
            <div
              onKeyPress={(e) => {
                if (e.code === 'Enter') {
                  dropdownTrigger();
                }
              }}
              ref={refList}
              onClick={dropdownTrigger}
              tabIndex={0}
              className="form__input form__select_btn">
              <p>{selectItem}</p>
              <img
                style={!dropdown ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0deg)' }}
                width="10"
                height="15"
                src={bottomImg}
                alt="img"
              />
              <ul style={dropdown ? { display: 'block' } : null} className="dropdown__list fade">
                {listItem.map((item) => {
                  return (
                    <li
                      onKeyPress={(e) => {
                        if (e.code === 'Enter') {
                          selectedItem(item);
                        }
                      }}
                      tabIndex={0}
                      onClick={() => selectedItem(item)}
                      className="dropdown__list_item"
                      key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="form__item form__item_checkbox">
            <Field className="form__input_checkbox" type="checkbox" id="checkbox" name="checkbox" />
            <label
              onKeyPress={(e) => {
                if (e.code === 'Enter') {
                }
              }}
              tabIndex={0}
              className="form__label_checkbox"
              htmlFor="checkbox">
              Согласие на обработку персональных данных
            </label>
            {<ErrorMessage className="_error" name="checkbox" component="div" />}
          </div>
          <button type="submit" className="btn">
            Отправить
          </button>
          {loader ? <div className="form__skeleton">{<Spinner />}</div> : null}
          {error ? <div className="form__skeleton">{<MyLoader />}</div> : null}
        </Form>
      </Formik>
    </>
  );
};
export default Form2;
