import React from 'react'
import Select from 'react-select'

function SelectSearch(country) {
   
      const option = {country}  
  return (
    <div>




  <Select options={country} />

    </div>
  )
}

export default SelectSearch