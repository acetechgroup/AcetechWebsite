import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  const [toggle, setToggle] = useState(1)
  function updateToggle(id) {
    setToggle(id)
  }

  const data = [
    {
      name: `Ashok Kumar`,
      img: `/Images/cus-img.png`,
      desig: `Director - GCKC Project`,
      review: `One of the best applications I have ever used. EMS is easy to use & extremely convenient. The best feature of EMS is the ability to download payment receipts & details of all my employees. I have not come across any other App with such features.`
    },
    {
      name: `Krishna Kiran Parvathaneni`,
      img: `/Images/cus-img.png`,
      desig: `Director - Teamwork Glass`,
      review: `Thank you Team EMS for your most innovative idea. This app substitutes the conventional and expensive biometric system for Manpower management which is always a challenge. Location based attendance and live location tracking are one of the best features of the app. Win-win situation for both employers as well as employees.`
    },
    {
      name: `Karan Kishin Thakur`,
      img: `/Images/cus-img.png`,
      desig: `Director - Almech facades`,
      review: `EMS app is very useful for maintaining all the details of my staff. We can monitor the staff’s attendance and maintain the full payment details in a single touch. The report generation by means of Excel is very convenient.`
    },
    {
      name: `Madhuri Akula`,
      img: `/Images/cus-img.png`,
      desig: `Director - Glozo india`,
      review: `This app is user-friendly and gives you all kinds of desired output. With the help of this app I can take accurate attendance, punch-in and out time without spending a lot of money for biometrics. It helps me to take out various reports like attendance, salary on my mobile. Overall this app has made mine and my team's life very easy. I highly recommend people to use this app.`
    },
    {
      name: `Dhanbir Suri`,
      img: `/Images/cus-img.png`,
      desig: `Director - Concretech india`,
      review: `Thank you Team EMS for your most innovative idea. This app substitutes the conventional and expensive biometric system for Manpower management which is always a challenge. Location based attendance and live location tracking are one of the best features of the app. Win-win situation for both employers as well as employees.`
    },
    {
      name: `Prakash Kumar Sharma`,
      img: `/Images/cus-img.png`,
      desig: `Pro. - Segriwal construction`,
      review: `This app is user-friendly and gives you all kinds of desired output. With the help of this app I can take accurate attendance, punch-in and out time without spending a lot of money for biometrics. It helps me to take out various reports like attendance, salary on my mobile. Overall this app has made mine and my team's life very easy. I highly recommend people to use this app.`
    },
    {
      name: `Mustafa Gulamali`,
      img: `/Images/cus-img.png`,
      desig: `Director - 4m facade`,
      review: `This app is user-friendly and gives you all kinds of desired output. With the help of this app I can take accurate attendance, punch-in and out time without spending a lot of money for biometrics. It helps me to take out various reports like attendance, salary on my mobile. Overall this app has made mine and my team's life very easy. I highly recommend people to use this app.`
    }
  ]

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500
  // };

  return (
    <div className='home-bg'>
      <div className='row g-0 home-bg-1'>
        <div className='col'>
          <div className='m-5'>
            <h1 className='fw-bold'>
              Simplify Employee Management
            </h1>
          </div>
          <div className='ps-5 pe-5'>
            <p>
              Meet the smartest employee management system to manage attendance, payroll, compliances, and many more.
            </p>
          </div>
          <div className='ps-5 pt-5 pe-5 pb-2'>
            <span className='me-4'>
              <select name="" id="" className='selecter-opt text-center'>
                <option value="">+91</option>
                <option value="">+62</option>
                <option value="">+63</option>
                <option value="">+27</option>
                <option value="">+60</option>
                <option value="">+65</option>
                <option value="">+880</option>
                <option value="">+230</option>
              </select>
            </span>
            <span>
              <input type="text" placeholder='Mobile Number' className='input-num' />
            </span>
          </div>
          <div className='mb-5'>
            <button className='ms-5 btn-1 p-2 fw-bold'>Get Started for free <i className="bi bi-arrow-right ms-2"></i></button>
          </div>
          <div className='icon-store-div'>
            <span className='ms-5 me-3'>Available on</span>
            <span className='me-3'><i className="bi bi-apple icon-store"></i></span>
            <span className='me-3'><i className="bi bi-google-play icon-store"></i></span>
            <span className='me-2'><i className="bi bi-tv-fill icon-store"></i></span>
          </div>
        </div>
        <div className='col'>
          <div className='m-5'>
            <img src="/Images/home-img.png" alt="" className='home-img-1' />
          </div>
        </div>
      </div>
      <div className='home-bg-2'>
        <div>
          <p className='fw-bold fs-4 pt-5 pb-4'>companies across various industries</p>
        </div>
        <div className='home-nav-bg-2'>
          <div className='pb-5 home-nav-1-bg-2'>
            <div className="row row-cols-2 row-cols-md-5 g-4 text-center">
              <div className='col customer-list'>
                <div className="card h-100 rounded-4 bg-secondary-subtle">
                  {/* <img src="/Images/Acetech-logo.png" alt="..." className='marqee-img' /> */}
                  <div className='banner-company'>
                  GCKC PROJECTS AND WORKS PVT LTD
                  </div>
                </div>
              </div>
              <div className='col customer-list'>
                <div className="card h-100 rounded-4 bg-secondary-subtle">
                  {/* <img src="/Images/Acetech-logo.png" alt="..." className='marqee-img' /> */}
                  <div className='banner-company'>
                  TeamWork Glass Solutions Pvt. Ltd.
                  </div>
                </div>
              </div>
              <div className='col customer-list'>
                <div className="card h-100 rounded-4 bg-secondary-subtle">
                  {/* <img src="/Images/Acetech-logo.png" alt="..." className='marqee-img' /> */}
                  <div className='banner-company'> 
                  Almech facades Pvt. Ltd
                  </div>
                </div>
              </div>
              <div className='col customer-list'>
                <div className="card h-100 rounded-4 bg-secondary-subtle">
                  {/* <img src="/Images/Acetech-logo.png" alt="..." className='marqee-img' /> */}
                  <div className='banner-company'>
                  Glozo india Pvt.Ltd
                  </div>
                </div>
              </div>
              <div className='col customer-list'>
                <div className="card h-100 rounded-4 bg-secondary-subtle">
                  {/* <img src="/Images/Acetech-logo.png" alt="..." className='marqee-img' /> */}
                  <div className='banner-company'>
                  Concretech india
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-bg-3'>
        <div className='text-center pt-5 fw-bold fs-3'>
          Enabling easier employee management
        </div>
        <div className='text-center pt-4'>
          Acetech work is built for businesses to provide an exceptional experience and scale employee management.
        </div>
        <div className='home-nav pt-5'>
          <div className='home-nav-1'>
            <div className=''>
              <ul className='nav nav-underline d-flex justify-content-center'>
                <li className='nav-item' onClick={() => updateToggle(1)}>
                  <div className={toggle === 1 ? "color-y" : "color-n"}>
                    <p className='nav-link text-dark fw-semibold ps-3 pe-3' role='button'>
                      <i className="bi bi-calendar pe-2"></i>
                      Track
                    </p>
                  </div>
                </li>
                <li className='nav-item' onClick={() => updateToggle(2)}>
                  <div className={toggle === 2 ? "color-y" : "color-n"}>
                    <p className='nav-link text-dark fw-semibold  ps-3 pe-3' role='button'>
                      <i className="bi bi-person pe-2"></i>
                      Manage
                    </p>
                  </div>
                </li>
                <li className='nav-item' onClick={() => updateToggle(3)}>
                  <div className={toggle === 3 ? "color-y" : "color-n"}>
                    <p className='nav-link text-dark fw-semibold  ps-3 pe-3' role='button'>
                      <i className="bi bi-layout-text-window pe-2"></i>
                      Process
                    </p>
                  </div>
                </li>
                <li className='nav-item' onClick={() => updateToggle(4)}>
                  <div className={toggle === 4 ? "color-y" : "color-n"}>
                    <p className='nav-link text-dark fw-semibold  ps-3 pe-3' role='button'>
                      <i className="bi bi-clipboard-check pe-2"></i>
                      Verify
                    </p>
                  </div>
                </li>
                <li className='nav-item' onClick={() => updateToggle(5)}>
                  <div className={toggle === 5 ? "color-y" : "color-n"}>
                    <p className='nav-link text-dark fw-semibold  ps-3 pe-3' role='button'>
                      <i className="bi bi-cash pe-2"></i>
                      Pay
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Trac container */}
            <div className={toggle === 1 ? "show-tab-container" : "tab-container"}>
              <div className=''>
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center ">
                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-person-fill-check fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Mobile Attendance</h5>
                        <p className="card-text mb-3">Selfie Attendance, Location Attendance, Attendance Report, Notifications</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-person-fill-x fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Roster Management</h5>
                        <p className="card-text mb-3">Multiple Company Shifts, Build Roster, Printable Roster</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-geo-alt fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Field Staff Location</h5>
                        <p className="card-text mb-3">Location Visit, Actual Time Spend, Time Spent</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-fingerprint fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Biometric Attendance</h5>
                        <p className="card-text mb-3">Acetech Work Biometric Attendance</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-calendar2-check fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Leave Management</h5>
                        <p className="card-text mb-3">Leave Policy, Leave Request, Approval, Custom Leaves</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* Trac container end */}
            {/* Manage container */}
            <div className={toggle === 2 ? "show-tab-container" : "tab-container"}>
              <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center ">
                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-cursor fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Team Communication</h5>
                        <p className="card-text mb-3">Broadcast, Chats, Notes, Notes Reports</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-calendar-check fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Automation Rules</h5>
                        <p className="card-text mb-3">Auto Half Day, Auto Present, Automatic Calculation</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-person fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Roles & Permissions</h5>
                        <p className="card-text mb-3">Employee, Attendance Manager, Branch Admin</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Manage container end */}
            {/* Process container */}
            <div className={toggle === 3 ? "show-tab-container" : "tab-container"}>
              <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center ">
                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-calculator fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Payroll</h5>
                        <p className="card-text mb-3">Salary Structure, Automatic Calculation, Fines, Overtime</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-clipboard2-check fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Taxes</h5>
                        <p className="card-text mb-3">Professional Tax, Labour Welfare Fund, Custom Taxes</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-file-text fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Compliances</h5>
                        <p className="card-text mb-3">Provident Fund, Employee's Insurance</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-currency-rupee fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Reimbursements</h5>
                        <p className="card-text mb-3">Food, Travelling, Custom Reimbursements</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* Process container end */}
            {/* Verify container */}
            <div className={toggle === 4 ? "show-tab-container" : "tab-container"}>
              <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center ">
                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-person-bounding-box fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Employee Identity</h5>
                        <p className="card-text mb-3">Basic Deatils, Employment Details, Biodata</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-file-earmark-plus fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Employee Onboarding</h5>
                        <p className="card-text mb-3">Self Onboard, Admin Approval Centralized Documents</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-person-vcard fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Employee Documents</h5>
                        <p className="card-text mb-3">Add Documents: Aadhar Card, Pan Card, Salary Slip</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* Verify container end */}
            {/* Pay container */}
            <div className={toggle === 5 ? "show-tab-container" : "tab-container"}>
              <div>
                <div className="row row-cols-1 row-cols-md-2 g-4 text-center ">
                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-calendar3 fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Pay Advance</h5>
                        <p className="card-text mb-3">Advance & Loans, Calculate Advance, Loan Reports</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <i className="bi bi-cash-stack fs-1 mt-4"></i>
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">Pay Salary</h5>
                        <p className="card-text mb-3">Account Verification, Direct Salary Deposits, Security</p>
                      </div>
                      <div className='p-4'>
                        <span className='btn-icon'>
                          Learn More <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* Pay container end */}
          </div>
        </div>
      </div>
      <div className='home-bg-4'>
        <div className='row row-cols-1 row-cols-md-2 g-0'>
          <div className='col img-app-1'>
            <img src="/Images/mobile-app1.png" alt="..." className='img-app' />
          </div>
          <div className='col'>
            <div className='home-bg-4-1'>
              Manage your employees smartly giving a less time
            </div>
            <div className='home-bg-li'>
              <li>Easy to use</li>
              Acetech Work is easy to use, with a simple and intuitive interface that makes navigating and handling its features effortless.
              <li>Secured and safe</li>
              With top-notch security and advanced encryption, our app ensures your data is protected and your privacy is respected.
              <li>Data backup 100%</li>
              Rest easy with 100% data backup, ensuring all your employee management information are automatically updated on cloud.
            </div>
            <div className='p-4'>
              <span className='btn-icon'>
                Create Account <i className="bi bi-arrow-right ms-2"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='home-bg-5 pt-3 pb-3'>
        <div className='home-nav'>
          <div className='home-nav-1'>
            <div className='fw-bold fs-1'>
              Customer stories
            </div>
            <div className='mt-4'>
              <Slider {...settings}>
                {data.map((d) => (
                  <div className='carousel-div'>
                    <div className='carousel-div-img'>
                      <img src={d.img} alt='' className='carousel-img' />
                    </div>
                    <div className='carousel-card'>
                      <div className='carousel-name'>{d.name}</div>
                      <div className='carousel-desig'>{d.desig}</div>
                      <div className='carousel-review'>{d.review}</div>
                      {/* <div className='mt-2'><span className='carousel-btn' role='button'>Read More..</span></div> */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className='home-bg-6'>
        <div className='home-nav-bg-6'>
          <div className='home-nav-1-bg-6'>
            <div className='text-white'>
              <div className='fs-1 fw-bold'>
                Ready to get started?
              </div>
              <div className='fw-bold fs-5'>
                Switch to Acetech Work for effortless emoployee management.
              </div>
              <div className='mt-4'>
                <span className='img-btn' role='button'>Connect With Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home