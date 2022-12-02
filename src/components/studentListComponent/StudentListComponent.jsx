import React from 'react'

const StudentListComponent = () => {
  return (
    <div>
      <table className="studentList-table">
        <thead className="table-head">
          <tr>
            <th>{''}</th>
            <th>Name</th>
            <th>Joined Date</th>
            <th>Course Title</th>

            <th>Conplated Date</th>
            <th>Status</th>
            <th>Subscribe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-bullet">&#x25A2;</td>
            <td className="student-table-name">
              <div className="table-name">
                <img
                  src={require('../../assets/Screenshot 2022-05-16 104609.png')}
                  alt=""
                  className="table-ProfilePic"
                />
                Deepthi Nayak
              </div>
            </td>
            <td className="table-joining"> 20/09/2022</td>
            <td className="table-course">
              <tr className="courseNameTr">
                The Ultimate Drawing Course - Beginner to Advanced
              </tr>
            </td>

            <td>
              <div className="table-status table-status-ongoing">
                20/09/2022
              </div>
            </td>
            <td className="table-subscribe">
              {'\u25CF'}
              {'\u2001'} completed
            </td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td className="table-bullet">&#x25A2;</td>
            <td className="student-table-name">
              <div className="table-name">
                <img
                  src={require('../../assets/Screenshot 2022-05-16 104609.png')}
                  alt=""
                  className="table-ProfilePic"
                />
                Deepthi Nayak
              </div>
            </td>
            <td className="table-joining"> 20/09/2022</td>
            <td className="table-course">
              <tr className="courseNameTr">
                Adobe After Effects: Complete Course from Novice to Expert
              </tr>
            </td>

            <td>
              <div className="table-status table-status-ongoing">
                20/09/2022
              </div>
            </td>
            <td className="table-subscribe">
              {'\u25CF'}
              {'\u2001'} completed
            </td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StudentListComponent
