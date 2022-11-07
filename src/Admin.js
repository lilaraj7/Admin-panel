import React, { useState } from "react";
import "./admin.css";
import { CgMenu } from "react-icons/cg";
import { FiSearch, FiMonitor } from "react-icons/fi";
import {
  AiFillHome,
  AiOutlineCalendar,
  AiFillSetting,
  AiFillShop,
  AiFillTag,
} from "react-icons/ai";
import { BiFileBlank } from "react-icons/bi";
import { BsFillBarChartFill, BsTelephonePlusFill } from "react-icons/bs";
import { MdUploadFile } from "react-icons/md";
import { HiPhotograph } from "react-icons/hi";
import { FaUserFriends, FaUserAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { Line, Pie } from "react-chartjs-2";
import gharlogo from "./assets/gharlogo.png";

import { Chart as ChartJS } from "chart.js/auto";

function Admin() {
  const [tomenu, setTomenu] = useState(false);
  return (
    <div>
      <nav>
        <div className="nav-lf">
          {/* <CgMenu onClick={() => setTomenu(true)} /> */}
          <CgMenu onClick={() => setTomenu(!tomenu)} /> 

          {/* <img src={gharlogo} alt='ghar' classname='gharlogos'/> */}
        </div>
        <div className="nav-rh">
          <h1>
            <span>Lila raj Chaudhary</span>
            <span>Manger setting</span>
          </h1>
          <FaUserAlt />
        </div>
      </nav>
      <div className="admin-main">
        {tomenu ? 
          <aside className="asides">
            <div className="admin-icon">
              <FiSearch />
            </div>
            <div className="admin-icon">
              <AiFillHome />
            </div>
            <div className="admin-icon">
              <BiFileBlank />
            </div>
            <div className="admin-icon">
              <BsFillBarChartFill />
            </div>
            <div className="admin-icon">
              {" "}
              <MdUploadFile />
            </div>
            <div className="admin-icon">
              {" "}
              <HiPhotograph />
            </div>
            <div className="admin-icon">
              <AiOutlineCalendar />
            </div>
            <div className="admin-icon">
              <FaUserFriends />
            </div>
            <div className="admin-icon">
              <AiFillSetting />
            </div>

            {/* <BiFileBlank/>
            <BsFillBarChartFill/>
            <MdUploadFile/>
            <GrGallery/>
            <AiOutlineCalendar/>
            <FaUserFriends/>
            <AiFillSetting/> */}

            {/* <CgMenu/> */}
          </aside>
        : null}

        <div className="main-admin-b">
          <div className="admin-top-card">
            <div className="admin-card-1">
              <div className="admin-card-title">
                <h3>TOTAL SALES</h3>
                <p>Rs 25,55,5555</p>
              </div>
              <div className="card-icons">
                <AiFillShop />
              </div>
            </div>
            <div className="admin-card-1">
              <div className="admin-card-title">
                <h3>TOTAL INCOME</h3>
                <p>Rs 25,55,5555</p>
              </div>
              <div className="card-icons">
                <AiFillTag />
              </div>
            </div>
            {/* <div className='admin-card-1'>
            <div className='admin-card-title'>
                <h3>TOTAL VISITORS</h3>
                <p>Rs 25,55,5555</p>
            </div>
            <div className='card-icons'>
                <AiFillShop/>
            </div>
          </div> */}
            <div className="admin-card-1">
              <div className="admin-card-title">
                <h3>TOTAL VIEWS</h3>
                <p>Rs 25,55,5555</p>
              </div>
              <div className="card-icons">
                <FiMonitor />
              </div>
            </div>
          </div>

          <div className="admin-chart ">
            <div className="admin-chart-1 ">
              <span className="charts-title">
                <h1>Sales Performance</h1>
                <p>
                  <AiFillSetting />
                </p>
              </span>
              <div>
                <Line
                  height={300}
                  width={600}
                  data={{
                    labels: [0, 1, 2, 3, 4],
                    datasets: [
                      {
                        label: "Numbers",
                        data: [10, 15, 2, 5, 9],
                        backgroundColor: "#6C9BD1",
                        borderWidth: 1,
                      },
                      {
                        label: "Quantity",
                        data: [13, 12, 9, 7, 6],
                        backgroundColor: "#0049ae",
                      },
                      {
                        label: "quality",
                        data: [11, 15, 10, 8, 9],
                        backgroundColor: "#e049ae",
                      },
                      {
                        label: "Quan",
                        data: [16, 12, 10, 11, 6],
                        backgroundColor: "#0049fae",
                      },
                    ],
                  }}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>
            <div className="admin-chart-1  ">
              <span className="charts-title">
                <h1>Top Category</h1>
              </span>
              <div>
                <Pie
                  height={300}
                  width={400}
                  data={{
                    labels: [
                      "electronics",
                      "toys",
                      "house",
                      "Tablets",
                      "Furniture",
                    ],

                    datasets: [
                      {
                        label: "Quantity",
                        data: [13, 12, 9, 7, 6],
                        backgroundColor: [
                          "#0049ae",
                          "red",
                          "green",
                          "yellow",
                          "grey",
                        ],
                      },
                    ],
                  }}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>
          </div>
          <h1>SALES PERFORMANCE</h1>
          <div className="admin-table">
            <table className="table">
              {/* <thead>
    <tr>
      <th scope="col">L</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>

    </tr>
  </thead> */}
              <tbody>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-light opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>
                      <p>Jenny Walter</p>
                    </span>
                  </th>
                  <td>
                    <span>
                      <p>19 september 2022</p>
                      <p>Joined</p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>+977-1234567890</p>
                      <p>
                        <BsTelephonePlusFill /> Phone Number
                      </p>
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Kalimati,Kathmandu</p>
                      <p>
                        <TiLocation /> Location
                      </p>
                    </span>
                  </td>
                  <td>
                    <button type="button" className="btn btn-light 	sm-1 opt">
                      Option
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn 	sm-1 btn-primary">
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
