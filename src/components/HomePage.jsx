import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [data, setData] = useState([]);
  const history = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function GetUser() {
    axios.get('https://62fb5bcde4bcaf535182ac53.mockapi.io/students').then((responce) => {
      setData(responce.data);
      console.log(responce.data)
    }).catch((error) => {
      setError(true)

    }).finally((loading) => {
      setLoading(false);
    })
  }

  useEffect(() => {
    GetUser();
  }, [])

  const NextPage = () => {
    return (
      history('/NextPage')
    )
  }


  return (
    <div>
      <h1>Welcome to the HomePage</h1>
      <button style={{ backgroundColor: 'red', border: "none", padding: "13px" }} onClick={NextPage}>CreateUser</button>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        {
          data.map((item, index) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>

                  </tr>

                </tbody>
              </>
            )
          })
        }
        {/* <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
       <td>Otto</td>
      <td>@mdo</td>
       <td>Otto</td>
      
    </tr>
   
  </tbody> */}
      </table>
    </div>
  )
}

export default HomePage;
