import React from 'react';

export default function Footer(props) {
  return(
    <footer>
        <div className="container my-5">
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className="row">
                        <div className="col-8 col-lg-5">
                       <h2><strong style={{ color: props.mode === "dark" ? "#0D6EFD" : "#0D6EFD" }}>CodeIN</strong></h2>
                       <h4 className='mx-3 my-3'>About Us</h4>
                            <p className='mx-3'>This website will help you to solve the coding related problem in your college life and get knowledge from highly skilled mentors of your college.</p>
                        </div>
                        
                        <div className="col-6 col-lg-3">
                            <h4 className='text-center'>Navigation</h4>
                            <ul className="my-3 list-group list-group">
                            <a href="/home"><li className="text-center text-decoration-none">Home </li></a>
                            <a href="/prep"><li className="text-center">Contest</li></a>
                            <a href="/contest"><li className="text-center">Interview</li></a>
                            <a href="/discuss"><li className="text-center">Community</li></a>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h4 className='text-center'>Social Links</h4>
                            <ul className="my-3 list-group list-group">
                                <li className="list-group-item btn btn-primary mx-4"><i class="fa-brands fa-linkedin"> Linkedin</i></li>
                                <li className="list-group-item btn btn-primary mx-4"><i className="fa-brands fa-github"> Github</i></li>
                                <li className="list-group-item btn btn-primary mx-4"><i class="fa-brands fa-twitter"> Twitter</i></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-3'>
                        <p className="auth-text text-center w-100">Copyright © 2023 All rights reserved | CodeIN</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
  
};

