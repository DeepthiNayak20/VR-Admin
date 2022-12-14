import './SuperRequests.css'

const SuperRequests = () => {
  const requestData = [
    {
      id: 1,
      name: 'swwww',
      email: 'sfds@gmail.com',
      mobile: '3456746564',
    },
    {
      id: 2,
      name: 'bbbbb',
      email: 'sfds@gmail.com',
      mobile: '3456746564',
    },
    {
      id: 3,
      name: 'cccccc',
      email: 'sfds@gmail.com',
      mobile: '3456746564',
    },
  ]
  return (
    <div className="studentList-container">
      <div className="admin-requests">Requests</div>
      <div className="admin-form">
        <div className="tableContainer">
          {' '}
          <table className="tableItem">
            <tr className="tableTr">
              <th></th>
              <th>Name</th>
              <th>Email&nbsp;Id</th>
              <th>Mobile&nbsp;No</th>
              <th></th>
              <th></th>
            </tr>
            {requestData.map((item) => {
              console.log('item', item)
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td className=" btnApprove">
                    <button className="acceptBtn accept">Accept</button>
                  </td>
                  <td className=" btnApprove">
                    {' '}
                    <button className="acceptBtn reject">Reject</button>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default SuperRequests
