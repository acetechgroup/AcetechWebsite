import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='head-body shadow'>
      <div id='menu'>
        <Link 
        to='/'
        className='nav-link' 
        >
        <div className='logo-main'>
        <div className='logo-bg1'>
          <img src="/Images/Acetech-logo-1.png" alt="Logo" className='logo-img' />
        </div>
        <div className='logo-bg2 flex-nowrap'>
          <span>Acetech Group</span>
        </div>
        </div>
        </Link>
        {/* Minimized menu icon */}

        <input type="checkbox" id='check' />
        <label htmlFor="check" className='checkbtn'>
          <i className='bi bi-list'></i>
        </label>

        {/* Minimized menu icon end */}

        <ul className='me-2 mt-2 pt-1'>
          <li>
            <NavLink 
              to="/about">
              About Us
            </NavLink>
          </li>
          <li><a href="#">Products <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li className='second-list'>
                <a href="#">
                  <span className='border rounded-5 p-2 body-tertiary'>
                    <i className="bi bi-calendar"></i>
                  </span> Track
                </a>
                <ul>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-person-fill-check fs-5"></i>
                        </span> Mobile Attendance
                      </div>
                      <div className='para-list row'>
                        Selfie Attendance, Location Attendance, Attendance Report, Notifications
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-person-fill-x fs-5"></i>
                        </span> Roster Management
                      </div>
                      <div className='para-list row'>
                        Multiple Company Shifts, Build Roster, Printable Roster
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-geo-alt fs-5"></i>
                        </span> Field Staff Location
                      </div>
                      <div className='para-list row'>
                        Location Visit, Actual Time Spend, Time Spent
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-fingerprint fs-5"></i>
                        </span> Biometric Attendance
                      </div>
                      <div className='para-list row'>
                        Acetech Work Biometric Attendance
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-calendar2-check fs-5"></i>
                        </span> Leave Management
                      </div>
                      <div className='para-list row'>
                        Leave Policy, Leave Request, Approval, Custom Leaves
                      </div>
                    </div>
                  </a>
                  </li>
                </ul>
              </li>
              <li className='second-list'>
                <a href="#">
                  <span className='border rounded-5 p-2 body-tertiary'>
                    <i className="bi bi-person"></i>
                  </span> Manage
                </a>
                <ul>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-cursor fs-5"></i>
                        </span> Team Communication
                      </div>
                      <div className='para-list row'>
                        Broadcast, Chats, Notes, Notes Reports
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-calendar-check fs-5"></i>
                        </span> Automation Rules
                      </div>
                      <div className='para-list row'>
                        Auto Half Day, Auto Present, Automatic Calculation
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-person fs-5"></i>
                        </span> Roles & Permissions
                      </div>
                      <div className='para-list row'>
                        Employee, Attendance Manager, Branch Admin
                      </div>
                    </div>
                  </a>
                  </li>
                </ul>
              </li>
              <li className='second-list'>
                <a href="#">
                  <span className='border rounded-5 p-2 body-tertiary'>
                    <i className="bi bi-layout-text-window"></i>
                  </span> Process
                </a>
                <ul>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-calculator fs-5"></i>
                        </span> Payroll
                      </div>
                      <div className='para-list row'>
                        Salary Structure, Automatic Calculation, Fines, Overtime
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-clipboard2-check fs-5"></i>
                        </span> Taxes
                      </div>
                      <div className='para-list row'>
                        Professional Tax, Labour Welfare Fund, Custom Taxes
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-file-text fs-5"></i>
                        </span> Compliances
                      </div>
                      <div className='para-list row'>
                        Provident Fund, Employee's Insurance
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-currency-rupee fs-5"></i>
                        </span> Reimbursements
                      </div>
                      <div className='para-list row'>
                        Food, Travelling, Custom Reimbursements
                      </div>
                    </div>
                  </a>
                  </li>
                </ul>
              </li>
              <li className='second-list'>
                <a href="#">
                  <span className='border rounded-5 p-2 body-tertiary'>
                    <i className="bi bi-clipboard-check"></i>
                  </span> Verify
                </a>
                <ul>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-person-bounding-box fs-5"></i>
                        </span> Employee Identity
                      </div>
                      <div className='para-list row'>
                        Basic Deatils, Employment Details, Biodata
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-file-earmark-plus fs-5"></i>
                        </span> Employee Onboarding
                      </div>
                      <div className='para-list row'>
                        Self Onboard, Admin Approval Centralized Documents
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-person-vcard fs-5"></i>
                        </span> Employee Documents
                      </div>
                      <div className='para-list row'>
                        Add Documents: Aadhar Card, Pan Card, Salary Slip
                      </div>
                    </div>
                  </a>
                  </li>
                </ul>
              </li>
              <li className='second-list'>
                <a href="#">
                  <span className='border rounded-5 p-2 body-tertiary'>
                    <i className="bi bi-cash"></i>
                  </span> Pay
                </a>
                <ul>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-calendar3 fs-5"></i>
                        </span> Pay Advance
                      </div>
                      <div className='para-list row'>
                        Advance & Loans, Calculate Advance, Loan Reports
                      </div>
                    </div>
                  </a>
                  </li>
                  <li><a href="#">
                    <div className='last-li'>
                      <div className=''>
                        <span className='border rounded-5 p-2 body-tertiary'>
                          <i className="bi bi-cash-stack fs-5"></i>
                        </span> Pay Salary
                      </div>
                      <div className='para-list row'>
                        Account Verification, Direct Salary Deposits, Security
                      </div>
                    </div>
                  </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Career</a></li>
          <li>
            <NavLink to="/contact-us">
              Contact Us
            </NavLink>
          </li>
          <li><a href="#">Sign In</a></li>
        </ul>

      </div>
    </div>
  )
}

export default Header