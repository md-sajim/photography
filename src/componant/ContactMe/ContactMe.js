import React from 'react';
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './ContactMe.css'


const ContactMe = () => {
    return (
        <div className='contact-body'>
            <div id="contact" class="add-padding border-top-color2">

                <div class="container text-center">

                    <div class="row mx-auto">

                        <div class="col-sm-6 col-md-5 text-right scrollimation fade-up d1">

                            <h1 class="big-text">CONTACT US TODAY!</h1>

                            <p class="lead">Fontend web Devoloper</p>

                            <p> JavaScript, Node.js, Express.js , HTML5, CSS, SQL, APIs, Git, GitHub/Bitbucket, WordPress, Heroku, Responsive/Mobile Development.</p>

                            <p>Please feel free to contact me with questions, comments or collaborations.</p>

                            <p>For more information, <a href="https://mdabutaleb.netlify.app/blog" target="_blank">visit my blog.</a></p>

                        </div>

                        {/* <!--=== Contact Form ===--> */}

                        <form id="contact-form" class="col-sm-6 col-md-offset-1 scrollimation fade-left d3" action="contact.php" method="post" novalidate>

                            <div class="form-group">
                                <label class="control-label" for="contact-name">Name</label>
                                <div class="controls">
                                    <input id="contact-name" name="contactName" placeholder="Your name" class="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name" />
                                    <i class="fa fa-user" />
                                </div>
                            </div>
                            {/* <!-- End name input --> */}

                            <div class="form-group">
                                <label class="control-label" for="contact-mail">Email</label>
                                <div class=" controls">
                                    <input id="contact-mail" name="email" placeholder="Your email" class="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address" />
                                    <i class="fa fa-envelope"></i>
                                </div>
                            </div>
                            {/* <!-- End email input --> */}

                            <div class="form-group">
                                <label class="control-label" for="contact-message">Message</label>
                                <div class="controls">
                                    <textarea id="contact-message" name="comments" placeholder="Your message" class="form-control requiredField" data-new-placeholder="Your message" rows="6" data-error-empty="Please enter your message"></textarea>
                                    <i class="fa fa-comment"></i>
                                </div>
                            </div>
                            {/* <!-- End textarea --> */}

                            <p><button name="submit" type="submit" class="btn btn-color2 btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i class="fa fa-paper-plane"></i>Send Message</button></p>
                            <input type="hidden" name="submitted" id="submitted" value="true" />

                        </form>
                        {/* <!-- End contact-form --> */}

                    </div>

                </div>

            </div>

            {/* <!-- ==============================================
            FOOTER
		=============================================== --> */}

            <footer id="main-footer" class="add-padding border-top-color2">

                <div class="container">

                    <p><a href="https://mdabutaleb.netlify.app/" target="_blank">VISIT MY SITS</a></p><br />

                    <ul class="social-links text-center">
                        <li><a href="https://twitter.com/mdabutalive" target="_blank"><FaTwitter /></a></li>
                        <li><a href="https://github.com/md-sajim" target="_blank"><FaGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/developer-md-abu-taleb/" target="_blank"><FaLinkedin /></a></li>
                    </ul>

                    <p class="text-center">&copy; 2023 - PHOTOGRAPHY</p>

                </div>

            </footer>
        </div>
    );
};

export default ContactMe;