import React from 'react'
import './Hero.css'


const Hero = () => {
    return(
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1><span className='primary-color'>GYM</span>nation</h1>
                        <h2>Community that enhances your</h2>
                        <h2><span className='primary-color'>workout experience</span></h2>
                    </div>
                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>
                                <h2 className='form-header'>Get Active Today!</h2>
                                <form action =''>
                                    <input type='text' placeholder='Username' className='username-input'></input>
                                    <input type='password' placeholder='Password'></input>
                                </form>
                                <a href='/'className='link link-1a'>Forgot Password?</a><br/>
                                <button className='btn-2 btn-2a'>Sign In</button>
                                <p className='create-account-txt'>Don't have an account? <a href='/'><span className='primary-color link'>Sign Up Now</span></a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero