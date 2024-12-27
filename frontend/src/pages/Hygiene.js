import highQualityProducts from '../assets/high-quality-products.jpg';
import firePan from '../assets/fire-in-the-pan.jpg';
import certificate1 from '../assets/certificate-1.jpg';
import certificate2 from '../assets/certificate-2.jpg';
import certificate3 from '../assets/certificate-3.jpg';

import '../styles/Hygiene.css';
import InfoBlock from '../components/InfoBlock';

const infoBlocks = [
  {
    title: 'Продукти найвищої якості',
    images: [
      {
        src: highQualityProducts,
        alt: "Фото шматків м'яса",
      },
    ],
    description: [
      'Ми обираємо постачальників, які відповідають нашим строгим вимогам. Кожен інгредієнт проходить перевірку на свіжість і походження. Ми не використовуємо напівфабрикати або продукти, які не відповідають стандартам харчової безпеки.',
    ],
  },
  {
    title: 'Контроль на кожному етапі',
    images: [
      {
        src: firePan,
        alt: 'Вогонь на сковороді',
      },
    ],
    description: [
      'Від кухні до видачі замовлення. Наші кухарі дотримуються всіх правил приготування їжі, щоб ти міг бути впевнений: те, що ти їси, – це найкраще, що ми можемо запропонувати.',
    ],
  },
  {
    title: 'Гігієнічні стандарти',
    images: [
      {
        src: certificate1,
        alt: 'Сертифікат 1',
      },
      {
        src: certificate2,
        alt: 'Сертифікат 2',
      },
      {
        src: certificate3,
        alt: 'Сертифікат 3',
      },
    ],
    description: [
      'Гігієна для нас – це не лише важлива частина роботи, а справжня перевага. Ми горді тим, що наша кухня завжди відповідає всім гігієнічним нормам і стандартам, встановленим санітарними службами.',
      'Усі наші співробітники регулярно проходять медичні огляди та тренінги з харчової безпеки. Ми маємо офіційні сертифікати, які підтверджують відповідність наших процесів міжнародним стандартам HACCP та іншим локальним вимогам.',
      'Регулярні перевірки – наша кухня постійно проходить незалежні перевірки та аудит, щоб гарантувати безпеку і чистоту процесу приготування їжі.',
    ],
  },
];

const Hygiene = () => {
  return (
    <section className="hygiene__container">
      <div className="hygiene__title">
        <h1 className="hygiene__heading heading">Інформація про якість</h1>
        <p className="hygiene__title-paragraph paragraph">
          Ми в Ситні знаємо, що якість – це основа будь-якої гарної страви. Тому
          наші стандарти – це не просто слова, а конкретні дії на кожному етапі:
          від закупівлі продуктів до моменту, коли їжа потрапляє на твій стіл.
        </p>
      </div>

      {infoBlocks.map((item) => (
        <InfoBlock className="hygiene__info-block" block={item} />
      ))}
    </section>
  );
};

export default Hygiene;
