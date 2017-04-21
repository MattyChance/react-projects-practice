import React, { Component } from 'react';

const TableContent = (props) => {

  const campersArr = props.campers

  const camperList = campersArr.map( (camper, index) => {
    return(
    <tr key={index}>
        <td>{index + 1}</td>
        <td><img src={camper.img} /></td>
        <td>{camper.username}</td>
        <td>{camper.alltime}</td>
        <td>{camper.recent}</td>
    </tr>
    )
  })

  return (
    <tbody>{camperList}</tbody>
  )
}

export default TableContent
