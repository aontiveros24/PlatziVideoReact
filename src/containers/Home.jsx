/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
// import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initalState';

const Home = ({ mylist, trends, originals, searching }) => {
  // const initialState = useInitialState(API);
  // return initialState.length === 0 ? <h1>Loading...</h1> : (
  return (
    <>
      <Search isHome />

      {searching?.length > 0 ? (
        <Categories title='Busqueda de videos'>
          <Carrousel>
            {searching?.map((item) => <CarrouselItem key={item.id} {...item} />)}
          </Carrousel>
        </Categories>
      ) : null}

      {/* el '?' antes de la variable es para verificar si esta definida, si lo quitas no funciona */}
      {mylist?.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrousel>
            {mylist?.map((item) => <CarrouselItem key={item.id} {...item} isList />)}
          </Carrousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrousel>
          {trends?.map((item) => <CarrouselItem key={item.id} {...item} />)}
        </Carrousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carrousel>
          {originals?.map((item) => <CarrouselItem key={item.id} {...item} />)}
        </Carrousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    searching: state.searching,
  };
};
// export default Home;
export default connect(mapStateToProps, null)(Home);
