import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const About = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <div className='about-bg'>
            <div className='row row-cols-1 row-cols-md-2 g-0'>
                <div className='col d-flex justify-content-center align-items-center'>
                    <div className='m-4'>
                        <div className='fs-3 fw-bold mb-2 about-bg-text'>Employee Management for MSMEs</div>
                        <div className='fs-3 fw-bold mb-2 about-bg-text'>GPS Tracking Devices</div>
                        <div className='fs-3 fw-bold mb-2 about-bg-text'>Fuel Monitoring Solutions</div>
                        <div className='fs-3 fw-bold mb-2 about-bg-text'>Fleet Management Solutions</div>
                        <div className='fs-3 fw-bold mb-2 about-bg-text'>Garbege Waste Management System</div>
                        <div className='fs-5 fw-normal mb-2'>Many more solutions..</div>
                        <div className='mb-0 mt-5'>
                            <button className=' btn-1 p-2 fw-bold'>Get Started for free <i className="bi bi-arrow-right ms-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className='col d-flex justify-content-center align-items-center'>
                    <div className='m-0'>
                        <div className='mt-5 mb-0'>
                            <img src="/Images/about-bg-1.png" alt="..." className='about-img-1' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-4'>
                <div className="row row-cols-1 row-cols-md-4 g-4 text-center ">
                    <div className="col">
                        <div className="card h-100 rounded-4">
                            {/* <i className="bi bi-person-fill-check fs-1 mt-4"></i> */}
                            <div>
                                <img src="/Images/about-img-1.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Employee Management Solution</h5>
                                <p className="card-text mb-3">Manage Employee Attendance, Location, Attendance Report, Notifications, Payment, leaves and more in a sec.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details<i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-2.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">GPS Tracking Devices</h5>
                                <p className="card-text mb-3">We provide multifunctional, end-to-end GPS
                                    monitoring system for any transportation means
                                    including trucks, special vehicles, motor cars,
                                    passenger, and route vehicles.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-3.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Fuel Monitoring Solutions</h5>
                                <p className="card-text mb-3">The fuel management system is based on data available from an onboard computer or fuel level sensors, installed in the fuel tank of a vehicles.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-4.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Fleet Management Solutions</h5>
                                <p className="card-text mb-3">We make it possable to efficently plan the fleet operation, minimizing the fuel fraud, increasing the safety of freight transportation, and reducing the cost of vehicle depreciation.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-5.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Garbege Waste Management System</h5>
                                <p className="card-text mb-3">We helps track vehicles that collect and remove household waste, clean and water streets, remove snow etc.Plan the routes, detailed reports.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-6.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Vehicles Theft Management System</h5>
                                <p className="card-text mb-3">With the platfor, you always know where the vehicles of your fleet are located, are aware of their condition, and in case of a crime, you immediately receive an alarm notification.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-7.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Tire Pressure Management</h5>
                                <p className="card-text mb-3">Tire pressure monitoring system (TPMS) integrated with GPS tracking system is a powerful tool of
                                    fuel economy and driving safety. You don’t need to check tire pressure manually before trip
                                    onboard display will provide you all information about tire pressure and tire temperature.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-8.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Temperature And cold Chain Management</h5>
                                <p className="card-text mb-3">This temperature monitoring system has been designed specifically for ease of use and provides business owners with immediate access to real-time temperature data 24/7 and audit-ready reports at the click of a button, anytime or anywhere</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-9.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Delivery Monitoring Management</h5>
                                <p className="card-text mb-3">The web-version of the app ensure effective order placement, planning and distribution, Google maps-based routing, delivery process monitoring, and coordination. Logistics mobile app is designed for delivery men and mobile employees.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-10.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Fleet Maintenance & Management</h5>
                                <p className="card-text mb-3">We developed fleetrun for those who want to reduce fleet operation costs, avoid critical breakdowns, and reduce the time spent at the service station. Get notification on the upcoming and current services.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-11.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Live Video Surveillance Management</h5>
                                <p className="card-text mb-3">We brings together satellite monitoring and video surveillance in one platform for you to monitor staff, reduce accident rates, increase fuel economy, and improve safety on the road.</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 rounded-4">
                            <div>
                                <img src="/Images/about-img-12.png" className="card-img-top mt-2" alt="..."></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">Vehicle Monitoring Management</h5>
                                <p className="card-text mb-3">Real time vehicle tracking is the ultimate solution to boost fleet efficiency. Control unit location on the map. Monitor speed, fuel level, temperature and other parameters</p>
                            </div>
                            <div className='pb-4'>
                                <span className='btn-icon'>
                                    More Details <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-bg-2'>
                <div>
                    <p className='fw-bold fs-1 pt-4'>Our mission</p>
                </div>
                <div className='pb-4'>
                    <p className=''>Acetech Work is here to make work easier for all types of businesses and scale their employee management processes. </p>
                </div>
                <div className='about-nav-bg-2'>
                    <div className='pb-5 about-nav-1-bg-2'>
                        <div className="row row-cols-1 row-cols-md-5 g-3 text-center">
                            <div className='col mission-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-people-fill fs-1 mt-4"></i>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold mb-3">Customers at the center</h5>
                                        <p className="card-text mb-3">We put our customers at the center of every initiative we take. That’s why we’ve been here for them and their employees from day one.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col mission-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-puzzle-fill fs-1 mt-4"></i>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold mb-3">Deliver valuable solution</h5>
                                        <p className="card-text mb-3">It’s really about the value we can deliver to our customers. Company owners can leave this stress behind and focus on stepping up for their growth.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col mission-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-award-fill fs-1 mt-4"></i>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold mb-3">Trust in local businesses</h5>
                                        <p className="card-text mb-3">We believe in the power of local businesses, and the change they bring to the Indian market motivates us to play an impactful role in their journey.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col mission-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-wrench-adjustable-circle-fill fs-1 mt-4"></i>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold mb-3">Reducing maintenance</h5>
                                        <p className="card-text mb-3"> Maintenance costs, utilization efficiency, fleet maintenance, driving quality control, and a host of other data that is automatically processed and provided helps businesses grow.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col mission-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-bezier2 fs-1 mt-4"></i>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold mb-3">Intuitive management</h5>
                                        <p className="card-text mb-3">Our main motto is implementing an easier staff management platform to free companies from all the repetitive tasks of attendance, payroll, and more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


{/* Scrolling Trigger part */}

            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div className='about-bg-3'>
                <div>
                    <p className='fw-bold fs-1 pt-4'>A display of our growth</p>
                </div>
                <div className='pb-4'>
                    <p className=''>We optimize employee management for the long term and are thrilled to have them with us on this journey.</p>
                </div>
                <div className='about-nav-bg-2'>
                    <div className='pb-5 about-nav-1-bg-2'>
                        <div className="row row-cols-1 row-cols-md-5 g-3 text-center">
                            <div className='col groth-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-people fs-1 mt-4"></i>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold mb-3">
                                            {counterOn && 
                                            <CountUp 
                                                start={0} 
                                                end={16} 
                                                duration={2}
                                                delay={0}
                                            />}
                                            +
                                        </h5>
                                        <p className="card-text mb-3">Partners inside India</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col groth-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-geo fs-1 mt-4"></i>
                                    <div className="card-body">
                                    <h5 className="card-title fw-bold mb-3">
                                            {counterOn && 
                                            <CountUp 
                                                start={0} 
                                                end={7900} 
                                                duration={2}
                                                delay={0}
                                            />}
                                            +
                                        </h5>
                                        <p className="card-text mb-3">Units connected</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col groth-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-speedometer2 fs-1 mt-4"></i>
                                    <div className="card-body">
                                    <h5 className="card-title fw-bold mb-3">
                                            {counterOn && 
                                            <CountUp 
                                                start={0} 
                                                end={100} 
                                                duration={2}
                                                delay={0}
                                            />}
                                            +
                                        </h5>
                                        <p className="card-text mb-3">Million miles tracked daily</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col groth-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-award fs-1 mt-4"></i>
                                    <div className="card-body">
                                    <h5 className="card-title fw-bold mb-3">
                                            {counterOn && 
                                            <CountUp 
                                                start={0} 
                                                end={8} 
                                                duration={2}
                                                delay={0}
                                            />}
                                            +
                                        </h5>
                                        <p className="card-text mb-3">Years on the market</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col groth-list'>
                                <div className="card h-100 rounded-4">
                                    <i className="bi bi-share fs-1 mt-4"></i>
                                    <div className="card-body">
                                    <h5 className="card-title fw-bold mb-3">
                                            {counterOn && 
                                            <CountUp 
                                                start={0} 
                                                end={2300} 
                                                duration={2}
                                                delay={0}
                                            />}
                                            +
                                        </h5>
                                        <p className="card-text mb-3">devices supported on wialon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollTrigger>
{/* Scrolling Trigger part ends */}

        </div>
    )
}

export default About