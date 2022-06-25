import React from 'react'
import '../../../../css/entities/admin/AdminList.css';

const AdminList = ({ data }) => {
  return (
    <>
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.description}</td>
            <td>{data.ubication}</td>
            <td>{data.category}</td>
            <td>{data.user}</td>
          </tr>
    </>
  )
}

export default AdminList