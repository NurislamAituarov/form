import FormComponent from '../form/Form';
import Form2 from '../form/Form2';

import './Main.scss';

const Main = () => {
  return (
    <main>
      <div className="block__orders">
        <h2 className="title">Состав заказа</h2>
        <div className="block__orders_products">
          <div className="block__orders_description">
            <div className="block__orders__left">Товары в заказе</div>
            <div className="block__orders__right">
              <p>количество</p>
              <p>стоимость</p>
            </div>
          </div>
          <div className="block__orders_selected">
            <div className="block__orders__left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="block__orders__right">
              <p>3 единицы</p>
              <p>329 000 руб.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block__form">
        <FormComponent />
        <Form2 />
      </div>
    </main>
  );
};

export default Main;
