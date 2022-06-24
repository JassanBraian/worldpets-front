import React from 'react'

const ListRows = ({ data }) => {
  return (<>
    <tbody>
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.description}</td>
        <td>{data.ubication}</td>
        <td>{data.category}</td>
        <td>{data.user}</td>
      </tr>
    </tbody>
      </>
  )
}

export default ListRows