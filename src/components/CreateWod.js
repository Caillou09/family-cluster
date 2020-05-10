import React, {useState} from 'react'
import styled from 'styled-components'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateWod = ({className}) => {

  const [startDate, setStartDate] = useState(new Date())

  const handleChange = date => {
    setStartDate(date)
  }

  return (
    <>
      <form className={className}>
        <label>
        Date du Wod
          <DatePicker
            selected={startDate}
            onChange={(event) => handleChange(event)}>
          </DatePicker>
        </label>
      </form>
    </>
  )
}

export default CreateWod
