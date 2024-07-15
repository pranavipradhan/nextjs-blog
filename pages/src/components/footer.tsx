import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="flex_me">

                        <div className="col flex_me accordion js-accordion">
                            <div className="col footer_sitemap_col accordion__item js-accordion-item">
                                <span className="accordion-header js-accordion-header">SPL</span>
                                <ul className="accordion-body js-accordion-body">
                                    <li>
                                        <a href="/en/about/" target="">About the Organization</a>
                                    </li>
                                    <li>
                                        <a href="/en/about/president-message/" target=""> Speech of His Excellency the President</a>
                                    </li>
                                    <li>
                                        <a href="/en/about/board-of-directors/" target="">Board of Directors</a>
                                    </li>
                                    <li>
                                        <a href="/en/about/leaders/" target="">Leaders</a>
                                    </li>
                                    <li>
                                        <a href="/en/underconstruction/" target="">Organizational Chart</a>
                                    </li>
                                    <li>
                                        <a href="/en/about/saudi-post-strategy/" target="">Saudi Post Strategy</a>
                                    </li>
                                    <li>
                                        <a href="/en/about/corporate-social-responsibility" target="">Corporate Social Responsibility</a>
                                    </li>
                                    <li>
                                        <a href="/en/about/portfolio-of-investments/" target="">Investment Portfolio</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer_sitemap_col accordion__item js-accordion-item">
                                <span className="accordion-header js-accordion-header">Media Center</span>
                                <ul className="accordion-body js-accordion-body">
                                    <li>
                                        <a href="/en/media-center/news/" target="">News</a>
                                    </li>
                                    <li>
                                        <a href="/en/media-center/news/" target="">Events</a>
                                    </li>
                                    <li>
                                        <a href="/en/about/awards-and-achievements" target="">Awards and Achievements</a>
                                    </li>
                                    <li>
                                        <a href="/en/media-center/media-gallery/" target="">Image library</a>
                                    </li>
                                    <li>
                                        <a href="/en/media-center/video-library/" target="">Video library</a>
                                    </li>
                                    <li>
                                        <a href="/en/media-center/media-kit" target="">Saudi Post identity</a>
                                    </li>
                                    <li>
                                        <a href="/media/3366/anuual-report-2021-v2.pdf" target="">Annual report</a>
                                    </li>
                                    <li>
                                        <a href="/en/data/open-data/" target="">Open Data</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer_sitemap_col accordion__item js-accordion-item">
                                <span className="accordion-header js-accordion-header">Others</span>
                                <ul className="accordion-body js-accordion-body">
                                    <li>
                                        <a href="/en/branches/" target="">Our Branches</a>
                                    </li>
                                    <li>
                                        <a href="https://career.splonline.com.sa/en/ " target="_blank">Recruitment</a>
                                    </li>
                                    <li>
                                        <a href="/en/about/upcoming-tenders/" target="">Tenders</a>
                                    </li>
                                    <li>
                                        <a href="/en/prohibited-items/" target="">Prohibited Items</a>
                                    </li>
                                    <li>
                                        <a href="/media/3687/compensation_policy_en.pdf" target="">Compensation policy</a>
                                    </li>
                                    <li>
                                        <a href="/en/quality-policy/" target="">Quality Policy</a>
                                    </li>
                                    <li>
                                        <a href="/media/3586/executive-regulations-for-postal-services.pdf" target="">Executive Regulations For Postal Services</a>
                                    </li>
                                    <li>
                                        <a href="/media/3587/rights-obligations.pdf" target="">Client&#39;s rights and responsibilities</a>
                                    </li>
                                    <li>
                                        <a href="/en/administration-fee/" target="">Administration fee</a>
                                    </li>
                                    <li>
                                        <a href="/media/3647/abandoned-mail-policy.pdf" target="_blank">Abandoned Mail Policy</a>
                                    </li>
                                    <li>
                                        <a href="/en/sla" target="">Service Level Agreement</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer_sitemap_col accordion__item js-accordion-item">
                                <span className="accordion-header js-accordion-header">Related Sites</span>
                                <ul className="accordion-body js-accordion-body">
                                    <li>
                                        <a href="https://mot.gov.sa/en/Pages/default.aspx" target="_blank">Ministry of Transport and Logistic Service</a>
                                    </li>
                                    <li>
                                        <a href="https://tga.gov.sa/?lang=en" target="_blank">Transport General Authority</a>
                                    </li>
                                    <li>
                                        <a href="https://www.absher.sa" target="_blank">Absher</a>
                                    </li>
                                    <li>
                                        <a href="http://www.ersal.sa/Ersal/en.html" target="_blank">Ersal </a>
                                    </li>
                                    <li>
                                        <a href="http://naqelexpress.com/" target="_blank">Naqel</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="col">
                            <div className="flex_me social_links">
                                <a href="https://www.facebook.com/SPL.KSA.online" target="_blank" rel="nofollow noreferrer noopener" > <Image src="/images/facebook.svg" alt="https://www.facebook.com/SPL.KSA.online" /></a>
                                <a href="https://twitter.com/SPL_KSA_online" target="_blank" rel="nofollow noreferrer noopener"  > <Image src="/images/twitter-x.svg" style={{height:'34px'}} alt="https://twitter.com/SPL_KSA_online" /></a>
                                <a href="https://www.youtube.com/user/saudipostch?feature=results_main" target="_blank" rel="nofollow noreferrer noopener"  > <Image src="/images/youtube.svg" alt="https://www.youtube.com/user/saudipostch?feature=results_main" /></a>
                                <a href="https://www.linkedin.com/company/spl-ksa-online" target="_blank" rel="nofollow noreferrer noopener" > <Image src="/images/linkedin.svg" alt="https://www.linkedin.com/company/spl-ksa-online" /></a>
                                <a href="https://instagram.com/spl_ksa_online?igshid=bv6ew3eo4lui" target="_blank" rel="nofollow noreferrer noopener" > <Image src="/images/instagram.svg"  alt="https://instagram.com/spl_ksa_online?igshid=bv6ew3eo4lui" /></a>
                                <a href="https://api.whatsapp.com/send?phone=966112898888" target="_blank" rel="nofollow noreferrer noopener"> <Image src="/images/whatsapp.png" width={22} height={22} alt="966112898888" /></a>
                            </div>

                            <div className="download-apps">
                                <a href="https://play.google.com/store/apps/details?id=sa.com.SP"><Image src="/images/google_play_btn.svg" alt="" width={136} height={40}/></a>
                                <a href="https://apps.apple.com/sa/app/saudi-post/id494312967"><Image src="/images/app_store_btn.svg" alt="" width={136} height={40}/></a>
                            </div>
                            <div className="mt-4">
                                <a href="https://splonline.com.sa/media/2444/vat-certificate.pdf" target="_blank" rel="nofollow noreferrer noopener">
                                    <Image src="/images/vat-logo.png" alt="" width={74} height={95} className="img-fluid" />
                                </a>

                            </div>
                        </div>

                    </div>
                    <div className="flex_me align-items-center copyright">
                        <ul>
                            <li><a href="/en/terms-of-service/">Terms of Service </a></li>
                            <li><a href="/en/privacy-policy/">Privacy </a></li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <p className="mr-4">© 2024 All rights reserved to  Saudi Post | SPL</p>
                            <a href="https://www.vision2030.gov.sa/ar" target="_blank"><Image src="/images/v2030.png" width={100} height={67} className="img-fluid" alt="Vision 2030" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer