import React from 'react';
import styled from 'styled-components';
import { IoMdPin } from 'react-icons/io';
import data from './data.js';

function Card() {
  return (
    <React.Fragment>
      <Section>
        <div className='container'>
          {data.map((item) => {
            return (
              <div className='card_container' key={item.id}>
                <img src={item.imageUrl} alt='Out Door pictures' />
                <div className='description_container'>
                  <div className='location'>
                    <IoMdPin className='point' />
                    {item.location}
                    <a target='blank' href={item.googleMapsUrl}>
                      View on google maps
                    </a>
                  </div>
                  <h3>{item.title}</h3>
                  <h4 className='date'>
                    {item.startDate} - {item.endDate}
                  </h4>
                  <p>{item.description}</p>
                  <hr />
                </div>
              </div>
            );
          })}
          <h2 id='select'>aopeifdmp eiod mpwqodm pqwod mpo</h2>
        </div>
      </Section>
    </React.Fragment>
  );
}
const Section = styled.section`
  color: #f55a5a;
  @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Lalezar&family=Pattaya&display=swap');
  .container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .card_container {
    display: grid;
    grid-template-columns: 500px 1fr;
    place-items: center;
    padding: 2rem;
    @media (width < 900px) {
      display: flex;
      flex-direction: column;
    }

    img {
      margin: 0 2rem;
      border-radius: 10px;
      width: 90%;
      object-fit: cover;
      transition: scale 400ms ease-in-out;
      &:hover {
        scale: 1.05;
      }
      @media (width < 900px) {
      }
    }
  }
  .description_container {
    display: flex;
    flex-direction: column;
  }
  h3 {
    padding-block-end: 1rem;
    font-family: 'Pattaya', sans-serif;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    padding: 0.5rem 2rem;
  }
  h4.date {
    font-family: 'Creepster', cursive;
    padding: 1rem 0;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    color: #5c5555;
  }
  p {
    font-family: 'Lalezar', cursive;
    letter-spacing: 0.09rem;
    font-size: 1.3rem;
    font-weight: 900;
    padding: 0.5rem 2rem;
    color: #a89797;
  }
  .location {
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 1.5rem;
    color: #705c5c;
    a {
      padding-left: 1rem;
    }
    padding: 0.5rem 2rem;
    .point {
      width: 20px;
      height: 20px;
      color: #705c5c;
    }
  }
`;

export default Card;
