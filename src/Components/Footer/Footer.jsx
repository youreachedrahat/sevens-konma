import React from 'react'
import logo from "../../assets/logo.png"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import HorizonalRule from '../HorizontalRule'
function FooterLinks() {
    return (
        <>
            <footer class="bg-primary">
                <div class="mx-auto w-[100%] ">
                    <HorizonalRule/>
                    <div class="md:flex md:justify-between w-[100%] px-8 py-6 lg:py-20">
                        <div class="mb-6 md:mb-0 flex flex-col gap-4 sm:gap-6 md:mr-6">
                            <Link to="/" class="mx-auto">
                                <img src={logo} class="w-[154px] sm:w-[276px] mx-auto" alt="Sevens Logo" />
                            </Link>
                            <div className="text-white text-center">
                                Sports Exchange/ Bookmaker/ Casino
                            </div>
                            <div className="flex flex-row items-center justify-around max-sm:w-full max-md:justify-center max-md:gap-3">
                                <img
                                    className="w-[2.81rem] max-sm:w-[36px] max-sm:h-[36px]"
                                    alt=""
                                    src="/social-media-icon-squarefacebook@2x.png"
                                />
                                <img
                                    className="w-[2.81rem] max-sm:w-[36px] max-sm:h-[36px]"
                                    alt=""
                                    src="/social-media-icon-squaretwitter@2x.png"
                                />
                                <img
                                    className="w-[2.81rem] max-sm:w-[36px] max-sm:h-[36px]"
                                    alt=""
                                    src="/social-media-icon-squareinstagram@2x.png"
                                />
                                <img
                                    className="w-[2.81rem] max-sm:w-[36px] max-sm:h-[36px]"
                                    alt=""
                                    src="/social-media-icon-squarelinkedin@2x.png"
                                />
                                <img
                                    className="w-[2.81rem] max-sm:w-[36px] max-sm:h-[36px]"
                                    alt=""
                                    src="/social-media-icon-squareyoutube@2x.png"
                                />
                            </div>

                        </div>
                        <div class="grid grid-cols-2 gap-8 lg:gap-[140px] sm:grid-cols-4 ">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white">Product</h2>
                                <ul class="text-white font-medium">
                                    <li class="mb-4">
                                        <HashLink smooth to="/#productFeature" class="hover:underline">Features</HashLink>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/" class="hover:underline">Pricing</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/" class="hover:underline">Case studies</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/" class="hover:underline">Reviews</Link>
                                    </li>
                                    <li>
                                        <Link to="/" class="hover:underline">Updates</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white">Company</h2>
                                <ul class="text-white font-medium">
                                    <li class="mb-4">
                                        <Link to="/aboutus" class="hover:underline ">About</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/" class="hover:underline ">Contact us</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/" class="hover:underline ">Careers</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/" class="hover:underline ">Culture</Link>
                                    </li>
                                    <li>
                                        <Link to="/" class="hover:underline">Blog</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white">Support</h2>
                                <ul class="text-white font-medium">
                                    <li class="mb-4">
                                        <Link to="/" class="hover:underline ">Getting started</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/#faq" class="hover:underline ">Help center</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/" class="hover:underline ">Server status</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/" class="hover:underline ">Report a Bug</Link>
                                    </li>
                                    <li>
                                        <Link to="/" class="hover:underline">Chat Support</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white">Downloads</h2>
                                <ul class="text-white font-medium">
                                    <li class="mb-4">
                                        <Link to="#" class="hover:underline">iOS</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="#" class="hover:underline">Android</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="#" class="hover:underline">Mac</Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="#" class="hover:underline">Windows</Link>
                                    </li>
                                    <li>
                                        <Link to="#" class="hover:underline">Chrome</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
      
            <div className="container2" />

            <div className="flex flex-row items-center bg-gold w-[100%] max-sm:px-5 h-[130px] sm:h-[148px">
              <div className="mx-auto max-sm:hidden">Copyright © 2023 Sevens Gaming | All Rights Reserved</div>
              <div className="mx-auto sm:hidden text-center text-white text-[16px] w-full p-0">Copyright © 2023 Sevens Gaming |
                <br />| All Rights Reserved |<br />
                Terms and Conditions | Privacy Policy</div>
            </div>
         
          <HorizonalRule/>
                </div>

            </footer>


        </>
    )
}

export default FooterLinks;