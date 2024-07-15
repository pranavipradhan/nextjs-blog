import React from 'react'

const FindBranch: React.FC = () => {
    return (
        <>
            <section className="find_branch">
                <div className="SA_map_wrapper aos-init aos-animate" data-aos="fade-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="385.60400390625" viewBox="0 0 882 385.604" className="sa_map" preserveAspectRatio="xMidYMid slice">
                        <g id="Group_9" data-name="Group 9" transform="translate(0 6.604)">
                            <path id="Stroke_1" data-name="Stroke 1" d="M347,189.89l-56.311,5.2-35.466,37.414-21.316-8.3-42.963-2.186-3.5,11.22L164.043,243l-25.255-35.616-17.019-34.067-19.857-12.647L87.6,130.928l1.8-20.744L76.134,82.06,57.076,87.745,50.84,56.534,0,0" transform="translate(214 94)" fill="none" stroke="#153c3f" stroke-miterlimit="10" stroke-width="12" className="svg-elem-7"></path>
                            <path id="Stroke_2" data-name="Stroke 2" d="M337,182.784l-62.065,5.38-33.281,34.972-16.191-6.277-53.07-2.69-4.5,14.347L157.1,233l-19.789-27.8-17.99-35.868L99.534,156.78,87.841,132.569l1.8-20.624L71.161,72.938,54.56,77.87l-4.5-22.418L0,0" transform="translate(225 90)" fill="none" stroke="#00c8e1" stroke-miterlimit="10" stroke-width="12" className="svg-elem-8"></path>
                            <path id="Stroke_3" data-name="Stroke 3" d="M0,81.224H244.2l6.311-16.4,17.851.743,44.858-38.913-13.55-18.8L321.785,0l93.1,56.151,47.851,4.268,6.257,8.927,18.1,1.808,25.026,34.459-6.519,6.513,51.978,66.757,60.337,19.177,1.765,1.587-10.211,26.777-45.622,21.588-1.726.739V361h131.9L754.2,309.865H882" transform="translate(0 12)" fill="none" stroke="#153c3f" stroke-miterlimit="10" stroke-width="12" className="svg-elem-9"></path>
                            <path id="Stroke_5" data-name="Stroke 5" d="M882,310.877H749.728L689.543,362H572.912V267.457l45.1-21.333L632.4,208.4l-8.995-8.084-59.364-18.864-44.073-56.591,6.3-6.288-33.28-45.812-17.988-1.8-6.3-8.983-50.369-4.491L322.987,0,282.511,14.372,298.7,36.829,264.523,66.471l-21.308-.887-6.431,16.707H0" fill="none" stroke="#00c8e1" stroke-miterlimit="10" stroke-width="12" className="svg-elem-10"></path>
                        </g>
                    </svg>
                </div>                                <div className="container find_branch_container flex_me">

                    <div className="col"><span className="aos-init aos-animate" data-aos="fade-right" data-aos-delay="1500">With over 450 branches we’re here for you </span>
                        <p className="aos-init aos-animate" data-aos="fade-right" data-aos-delay="1500">Find your nearest SPL branch</p>
                       

                        <div className="track_trace branch_finder aos-init aos-animate" data-aos="fade-left" data-aos-delay="1200">
                            <span>Find a Saudi Post | SPL branch</span>
                            <p>Enter an address, town or city</p>
                            <div className="flex_me">
                                <div className="track_control">
                                    <input id="findBranchInput" type="text" placeholder="Search Here"/>

                                </div>
                                {/* <a onClick={branchesearch} href="#" className="btn primary_btn waves-effect waves-light" id="findBranchBtn">Search</a> */}
                            </div>


                            <a href="/en/nearest-branch/" className="btn_noBG">Nearest Branch</a>
                            <small className="text-muted" style={{lineHeight: '1.5', display: 'block'}}>An interactive map that enables you to know the branches of any area and the service providers closest to each neighborhood</small>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                </div>


            </section>
        </>
    )
}

export default FindBranch