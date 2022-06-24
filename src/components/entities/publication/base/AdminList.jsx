import React from 'react'
import '../../../../css/entities/admin/AdminList.css';

const AdminList = ({ data }) => {
  return (
    <>
      <table className="table table-bordered border-dark">
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Ubication</th>
            <th scope="col">Category</th>
            <th scope="col">User</th>
          </tr>
        </thead>
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
      </table>
    </>
  )
}

export default AdminList