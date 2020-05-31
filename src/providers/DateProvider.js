import React, {createContext, useEffect, useState} from 'react'

import firebaseApp from '../base.js'

export const DateContext = createContext({ date: null });

const DateProvider = ({children}) => {

  const [dates, setDates] = useState([]);
  const [date, setDate] = useState('');

  useEffect( () => {
    const fetchdata = async () => {
      const dataRef = await firebaseApp.database().ref('WODS');
      dataRef.on('value', function(snapshot) {
        const state = snapshot.val();
        setDates(Object.keys(state));
      });
    };
    fetchdata();
  }, []);

  useEffect( () => {
    if (dates.length>0) {
      const arrDates = []
      dates.forEach( date => {
        let d = new Date(date).getTime()
        arrDates.push(d);
      })

      const today = new Date().getTime();
      const closest = arrDates.reduce((acc, item) => {
        if( acc - today < item - today) return acc
        else return item;
      });
      console.log(closest);
      setDate(closest);
    }
  }, [dates]);


    return (
      <>
        <DateContext.Provider value={date}>
          {children}
        </DateContext.Provider>
      </>
    )

}

export default DateProvider
