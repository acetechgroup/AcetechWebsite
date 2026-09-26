import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import axios from 'axios'

const ContactUs = () => {

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  /*
  // Methord 1.........

  const handleSubmit = (e) => {
    e.preventDefault();

    // Our EmailJS service ID, templet Id, public key 
    const serviceId = 'service_5v010gy';
    const templetId = 'template_whq4dsd';
    const publicKey = 'eLqnhPesktRkm5c2R';

    // create a new object that contains dynamic templet params
    const templetParams = {
      form_name: name,
      from_company: companyName,
      from_mobile: mobile,
      from_email: email,
      to_name: 'Acetech Group',
      comments: comment
    };

    // Send the email using Emailjs
    emailjs.send(serviceId, templetId, templetParams, publicKey)
    .then((response) => {
      console.log('Email send sucessfully!!', response);
      setName('');
      setCompanyName('');
      setMobile('');
      setEmail('');
      setComment('');
    })
    .catch((error) => {
      console.log('Error Sending Email: ', error);
    });

  } */


  // 2nd methords...

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Our EmailJS service ID, templet Id, public key 
    const serviceId = 'service_5v010gy';
    const templateId = 'template_whq4dsd';
    const publicKey = 'eLqnhPesktRkm5c2R';

    // create an object with Emailjs serviceID TemplateID PublicKey and templet Params
    const data ={
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        form_name: name,
        from_company: companyName,
        from_mobile: mobile,
        from_email: email,
        to_name: 'Acetech Group',
        comments: comment
      }
    };

    // send the email using Emailjs
    try{
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setCompanyName('');
      setMobile('');
      setEmail('');
      setComment('');
    } catch(error){
      console.error(error);
    }

  }

  return (
    <div className='contact-bg'>
      <div className='text-center fw-bold fs-1'>Contact Us</div>
      <div className='contact-bg-1'>
        <div className='contact-bg-2'>
          <div className='row row-cols-1 row-cols-md-2 g-0'>
            <div className='col borderend border-dark-subtle p-5'>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label for="inputName" className="form-label fw-bold">Name</label>
                  <input 
                    type="name" 
                    className="form-control" 
                    id="inputName" 
                    aria-describedby="namelHelp" 
                    placeholder='Name' 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                  <label for="inputCompanyName" className="form-label fw-bold">Company Name</label>
                  <input 
                    type="name" 
                    className="form-control" 
                    id="inputCompanyName" 
                    aria-describedby="namelHelp" 
                    placeholder='Company Name' 
                    value={companyName}
                    onChange={(e)=> setCompanyName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                  <label for="inputMobile" className="form-label fw-bold">Mobile Number</label>
                  <input 
                    type="mobile" 
                    className="form-control" 
                    id="inputMobile" 
                    aria-describedby="mobilelHelp" 
                    placeholder='Mobile Number' 
                    value={mobile}
                    onChange={(e)=> setMobile(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                  <label for="inputEmail" className="form-label fw-bold">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="inputEmail" 
                    aria-describedby="emaillHelp" 
                    placeholder='Email' 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                  <label for="inputComments" className="form-label fw-bold">Comments</label>
                  <textarea 
                    className="form-control" 
                    placeholder="Leave a comment here.." 
                    id="inputComments" 
                    value={comment}
                    onChange={(e)=> setComment(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

              </form>

            </div>
            <div className='col ps-4 d-flex justify-content-center align-items-center'>
              <div className='m-5'>
                <div className='fw-bold fs-1 text-info'><i className="bi bi-headphones"></i></div>
                <div className='fw-bold fs-1'>Get in touch today</div>
                <div className='fw-bold fs-6 mt-2 mb-3'>Thanks for visiting! We hope that you have found what you needed on our website. If not, please feel free to contact us.</div>
                <div className='fw-bolder mb-3'>
                  <div className='mb-1'>
                    <i className="bi bi-telephone-fill me-2"></i> 8779673576
                  </div>
                  <div className='mb-1'><i className="bi bi-envelope-fill me-2"></i> info@acetechgroups.com</div>
                  <div className='d-flex'><i className="bi bi-geo-alt-fill me-2"></i> <div>Dive Pearl, Ground Floor, Airoli Sector-8a, Navi Mumbai, Maharastra - 400708</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs