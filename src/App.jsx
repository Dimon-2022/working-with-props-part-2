import React from "react";
import "./index.css";

//Rus
// 1 - Создать динамически столько компонентов Card, сколько объектов в массиве с данными. +++
// 2 - Использовать данные массива для передачи значений в пропсы компонентов. ++++
// 3 - Создать динамически теги на основе массива с тегами. ++++
// 4 - Использовать условный рендеринг для проверки свойства archived. Если archived: true, карточка не будет рендериться.+++

//Eng
// 1 - Dynamically create as many Card components as there are objects in the data array.
// 2 - Use the data from the array to pass values to the component props.
// 3 - Dynamically create tags based on the tags array.
// 4 - Use conditional rendering to check the archived property. If archived: true, the card will not be rendered.

const cardData = [
  {
    title: "Мокка",
    description: "Развиваем финтех-продукт для международного рынка",
    date: "24 апреля 2024",
    imageUrl: "/img-1.jpeg",
    tags: ["#финтех", "#международный", "#рынок"],
    archived: false,
  },
  {
    title: "Деньги Вперед",
    description: "Фронтенд и бэкенд для сервиса выплат зарплат по запросу",
    date: "16 января 2024",
    imageUrl: "/img-2.jpeg",
    tags: ["#финансы", "#сервис", "#выплаты"],
    archived: false,
  },
  {
    title: "ResolHR",
    description: "Помогли HR-tech-стартапу с кастомизацией для VIP-клиентов",
    date: "10 октября 2023",
    imageUrl: "/img-3.jpeg",
    tags: ["#HR", "#кастомизация", "#VIP"],
    archived: true,
  },
  {
    title: "ActivePlatform",
    description: "Интеграция Adobe и развитие платформы комплексной подписки",
    date: "10 ноября 2022",
    imageUrl: "/img-4.jpeg",
    tags: ["#интеграция", "#платформа", "#подписка"],
    archived: false,
  },
  {
    title: "START",
    description: "Разработали платформу A/B тестов для стримингового сервиса",
    date: "22 сентября 2022",
    imageUrl: "/img-5.jpeg",
    tags: ["#A/B тесты", "#стриминг", "#платформа"],
    archived: false,
  },
  {
    title: "Mindbox",
    description:
      "Поддерживаем редизайн платформы автоматизированного маркетинга",
    date: "21 сентября 2022",
    imageUrl: "/img-6.jpeg",
    tags: ["#маркетинг", "#редизайн", "#автоматизация"],
    archived: false,
  },
];

export default function App() {
  return (
    <>
      <h1>Blog</h1>
      <CardContainer />
    </>
  );
}

function CardContainer() {
  return (
    <div className="card-container">
      {cardData.map(
        (item, index) => !item.archived && <Card cardObj={item} key={index} />
      )}
    </div>
  );
}

function Card({ cardObj }) {
  const { imageUrl, title, description, date, tags } = cardObj;

  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-date">{date}</p>
        <CardTags tags={tags} />
      </div>
    </div>
  );
}

function CardTags({ tags }) {
  return (
    <div className="card-tags">
      {tags.map((tag) => (
        <CardTag key={tag} name={tag} />
      ))}
    </div>
  );
}

function CardTag({ name }) {
  return <span className="card-tag">{name}</span>;
}
