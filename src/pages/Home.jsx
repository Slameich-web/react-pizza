import React from 'react';
import NavBar from '../components/navBar';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';

function Home({ items }) {
    return (
      <div className="container">
        <div className="content__top">
          <NavBar
            onClickItem={(name) => console.log(name)}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />
          <Sort items={['популярности', 'цене', 'алфавит']} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;