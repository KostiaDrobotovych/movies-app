import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import Menu from '../Menu/Menu';
import s from './Header.module.css';

const sortArr = [
  { name: 'Popularity', sortUrl: 'popularity.desc' },
  { name: 'Top rated', sortUrl: 'vote_count.desc' },
  { name: 'Latest', sortUrl: 'release_date.desc' },
  { name: 'Now playing', sortUrl: 'revenue.desc' },
];

const Header = ({
  genres,
  search,
  handleSubmit,
  handleChange,
  handleMenuClick,
  menuOpen,
  getId,
}) => {
  const menuItemsSort = sortArr.map(el => (
    <NavLink
      key={el.name}
      className={s.link}
      onClick={() => {
        handleMenuClick();
        getId(el.id);
      }}
      to={`/movie/${el.sortUrl}`}
    >
      {el.name}
    </NavLink>
  ));

  const menuGenres = genres.map(el => (
    <NavLink
      key={el.id}
      className={s.link}
      onClick={() => {
        handleMenuClick();
        getId(el.id);
      }}
      to={`/genre/${el.id}`}
    >
      {el.name}
    </NavLink>
  ));

  return (
    <>
      <div className={s.container}>
        <MenuButton
          open={menuOpen}
          onClick={() => handleMenuClick()}
          color="white"
        />

        {!menuOpen && (
          <form onSubmit={handleSubmit} className={s.form__search}>
            <input
              className={s.search__input}
              onChange={handleChange}
              type="text"
              placeholder="Search"
              value={search}
            />
          </form>
        )}
      </div>
      <Menu open={menuOpen}>
        {
          <div className={s.categories__container}>
            <div className={s.categories__sort}>{[...menuItemsSort]}</div>
            <div className={s.categories__sort}>
              <h3>Genres:</h3>
              {[...menuGenres]}
            </div>
          </div>
        }
      </Menu>
    </>
  );
};

export default Header;
