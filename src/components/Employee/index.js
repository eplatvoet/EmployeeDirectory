import React from "react";

function Employee(props) {
    return (
      <table class="table">
          <thead>
              <tr>
                  <th scope="col">Image:</th>
                  <th scope="col">Name:</th>
                  <th scope="col">Email:</th>
                  <th scope="col">Phone:</th>
                  <th scope="col">Dept:</th>
                  <th scope="col">Birthday:</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th scope="row"><img src={props.image} alt={props.name} height="60px" width="auto" /></th>
                  <td>{props.name}</td>
                  <td>{props.email}</td>
                  <td>{props.phone}</td>
                  <td>{props.dept}</td>
                  <td>{props.birthday}</td>
              </tr>
          </tbody>
      </table>  
    )
}

export default Employee;
