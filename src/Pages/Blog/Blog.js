import React from "react";
import "./Blog.css";
import blogImg1 from "../../assets/blog-1.jpg";
import blogImg2 from "../../assets/blog-2.jpg";

// blog section--private route
const Blog = () => {
    return (
        // blog start
        <div className="blog-container">
            <div className="row container mx-auto">
                <hr className="hr" />
                <h1 className="about-title"> RECENT BLOG POSTS</h1>
                <h3 className="about-sub-title my-4">
                    Stay Motivated, read the weekly blog articles.
                </h3>
            </div>
            {/* blog container */}
            <div className="row container g-4 px-5 mx-auto mb-5">
                {/* blog---1 */}
                <div className="col-lg-6 col-md-12 p-4 blog">
                    <img src={blogImg1} alt="" />
                    <h5 className="blog-sub-title">21 Feb. 2018</h5>
                    <h5 className="blog-sub-title">
                        By: admin / Dental, / Treatment Comment: 0
                    </h5>
                    <hr className="blog-hr" />
                    <h3 className="blog-title">
                        How Often Should I Replace My Toothbrush?
                    </h3>

                    <p className="blog-text ">
                        Most dentists, and the American Dental Association (ADA), recommend changing your toothbrush every 3 months. Overtime, toothbrushes go through normal wear and tear and become less effective with removing plaque from teeth and gums. Studies have found that around 3 months is when the bristles break down and lose effectiveness.

                        One other consideration we don’t typically think about (and probably don’t like to think about) is that germs can hide and build up in toothbrush bristles. This makes it important to replace your toothbrush after you’ve had a cold, or risk possible reinfection.

                        Fungus and bacteria can also develop in the bristles if not taken care of properly. After use, make sure you rinse off and dry your toothbrush thoroughly, storing uncovered in an upright position and keeping it away from other used toothbrushes. When traveling, be sure to cover your toothbrush head to protect it and reduce the spread of germs.
                    </p>
                    <button className="blog-btn">Read More</button>
                </div>
                {/* blog---2*/}
                <div className="col-lg-6 col-md-12 p-4">
                    <img src={blogImg2} alt="" />
                    <h5 className="blog-sub-title">21 Feb. 2018</h5>
                    <h5 className="blog-sub-title">
                        By: admin / Psychology, / Treatment Comment: 0
                    </h5>
                    <hr className="blog-hr" />
                    <h3 className="blog-title">
                    Medicaid Dental Benefits Basics
                    </h3>

                    <p className="blog-text ">
                        While it would take the rest of the year to dig through all of the rules and regulations surrounding Medicaid, we dug up a few basic things you may not know about Medicaid dental benefits.

                        Medicaid dental benefits are not required for adults – while 46 states and the District of Columbia offer some level of Medicaid dental benefits for adults, not all states do. Which brings us to our next fact.
                        Medicaid dental benefits vary by state – in some cases widely.

                    </p>
                    <button className="blog-btn">Read More</button>
                </div>


            </div>
        </div>
    );
};

export default Blog;