import React from 'react'

const Contact: React.FC = () => {
    return (
        <>
            <section className="contact_section">
                <div className="container">
                    <div className="flex_me">
                        <div className="col">
                            <div className="d-flex d-md-block"><img src="/media/2201/careful_icon.svg" alt=""> <span>Warning of fraudulent messages</span></div>
                            <p>We warn our dear customers not to deal with fraudulent email messages which impersonate Saudi Post</p>
                            <div className="section_btns d-block d-md-inline mx-auto mx-md-0"><a href="/en/caution/" className="btn primary_btn waves-effect waves-light">Find out more</a> <a style="display: none;" href="/en/underconstruction/" className="btn_noBG">Help and Support</a></div>
                        </div>
                        <div className="col">
                            <div className="d-flex d-md-block"><img src="/media/2202/contact_no.svg" alt=""> <span>Our customer service center</span></div>
                            <p>You may contact us via our toll free number at <a style="color: #00c8e1;" href="tel:19992">19992</a>, from outside KSA <a style="color: #00c8e1;" href="tel:+966112898888">+966112898888</a> for any requests, inquiries and feedback.</p>
                            <div className="section_btns d-block d-md-inline mx-auto mx-md-0"><a href="/en/customer-service/" className="btn primary_btn waves-effect waves-light">Contact Us</a></div>
                        </div>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Contact