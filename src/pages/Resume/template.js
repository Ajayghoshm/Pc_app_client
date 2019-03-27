import React, { Component } from 'react'
import "./main.css"

class template extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div id="resume_body">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-9 text-center" id="right">
                            <div id="page" className="droid" contentEditable="true">
                                <div className="row" style={{ marginBottom: '10px' }}>
                                    <div className="col-sm-12">
                                        <div style={{ display: 'inline-block' }} id="image_box">
                                            <img src="images/iitg_logo.png" height={80} width={80} />
                                        </div>
                                        <div id="info" style={{ display: 'inline-block' }}>
                                            <h2 id="contentName">{this.props.profile.name.f_name+" "+this.props.profile.name.l_name}</h2>
                                            <h5 id="contentRoll">Roll Number : {this.props.profile.ktu_no}</h5>
                                            <h5 id="contentCourse">B.Tech - Computer Science Engineering</h5>
                                            <h5 id="contentBranch">XXX Engineering</h5>
                                            <h5 id="contentMinor">Minor in XXX</h5>
                                            <h5 id="contentCollege">Govt. Model Engineering College</h5>
                                        </div>
                                        <div id="contact" style={{ float: 'right', display: 'inline-block' }}>
                                            +91-{this.props.profile.phone.no_1}<br />
                                            {this.props.profile.email.email_1}<br />
                                            hello@mec.ac.in<br />
                                            <span className="light" id="contactLink1">www.linkedin.com/in/xyz123<br /></span>
                                            <span className="light" id="contactLink2">github.com/xyz123<br /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="section" id="sectionEducation">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Education</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul" className="list-unstyled">
                                        <li id="resume_li" id="resume_li">
                                            <table className="table customBordered" id="educationTable">
                                                <tbody><tr>
                                                    <td className="header"><strong>Year</strong></td>
                                                    <td className="header"><strong>Degree / Certificate</strong></td>
                                                    <td className="header"><strong>Institute / Board</strong></td>
                                                    <td className="header"><strong>CGPA/Percentage</strong></td>
                                                </tr>
                                                    <tr>
                                                        <td>2014 - Present</td>
                                                        <td>B.Tech</td>
                                                        <td>Govt. Model Engineering College</td>
                                                        <td>{this.props.profile.tcgpa}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2014</td>
                                                        <td>Senior secondary</td>
                                                        <td>CBSE board</td>
                                                        <td>97.0%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2012</td>
                                                        <td>Secondary</td>
                                                        <td>CBSE board</td>
                                                        <td>10.0</td>
                                                    </tr>
                                                </tbody></table>
                                        </li>
                                    </ul>
                                </div>
                                <div className="section" id="sectionExperience">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Experience</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul">
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">XYZ Engineer at 'ABC'</div>
                                                <div className="time right">May 2016 - July 2016</div>
                                            </div>
                                            <div>
                                                <div className="link right">www.abc.in</div>
                                                <div className="text">Analysed app usage statistics to recommend items based on user's preference.</div>
                                            </div>
                                        </li>
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">XYZ Engineer at 'ABC'</div>
                                                <div className="time right">Dec 2015</div>
                                            </div>
                                            <div>
                                                <div className="link right">www.abc.in</div>
                                                <div className="text">Designed methods to improve the existing unit test mechanism.</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="section" id="sectionPublications">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Publications</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul">
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">Advanced analysis of damping motion</div>
                                                <div className="time right">PCES 2010</div>
                                            </div>
                                            <div>
                                                <div className="mentor">Mentors</div>
                                            </div>
                                        </li>
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">Efficient ranking of search results</div>
                                                <div className="time right">LOCS 2010</div>
                                            </div>
                                            <div>
                                                <div className="mentor">Mentors</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="section" id="sectionProjects">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Projects</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul">
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">Project title</div>
                                                <div className="time right">Ongoing</div>
                                            </div>
                                            <div>
                                                <div className="mentor tab">Project Mentor</div>
                                            </div>
                                            <div>
                                                <div className="text">Graphical interface to share files over institute's network.</div>
                                            </div>
                                        </li>
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">Project title</div>
                                                <div className="time right">Apr 2016</div>
                                            </div>
                                            <div>
                                                <div className="mentor tab">Dr. XYZ, Associate Professor, Dept. of XXX, IIT Guwahati</div>
                                                <div className="link right">goo.gl/link</div>
                                            </div>
                                            <div>
                                                <div className="text">Graphical interface to share files over institute's network.</div>
                                            </div>
                                        </li>
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">Project title</div>
                                                <div className="time right">Jan 2016 - Mar 2016</div>
                                            </div>
                                            <div>
                                                <div className="mentor tab">Mentor name</div>
                                                <div className="link right">www.xyz.in</div>
                                            </div>
                                            <div>
                                                <div className="text">Graphical interface to share files over institute's network.</div>
                                            </div>
                                        </li>
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">Project title</div>
                                                <div className="time right">Feb 2016</div>
                                            </div>
                                            <div>
                                                <div className="link right">goo.gl/link</div>
                                            </div>
                                            <div>
                                                <div className="text">Graphical interface to share files over institute's network.</div>
                                            </div>
                                        </li>
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">Project title</div>
                                                <div className="time right">Nov 2015</div>
                                            </div>
                                            <div>
                                                <div className="mentor tab">Mentor name</div>
                                                <div className="link right">github.com/link</div>
                                            </div>
                                            <div>
                                                <div className="text">Graphical interface to share files over institute's network.</div>
                                            </div>
                                        </li>
                                        <li id="resume_li">
                                            <div>
                                                <div className="title">Project title</div>
                                                <div className="time right">Aug 2015 - Sep 2015</div>
                                            </div>
                                            <div>
                                                <div className="text">Graphical interface to share files over institute's network.</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="section" id="sectionSkills">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Technical skills</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul">
                                        <li id="resume_li">
                                            <strong><span className="skillCategory">Programming languages</span> :</strong>
                                            C++, Python, Java *
                  </li>
                                        <li id="resume_li">
                                            <strong><span className="skillCategory">Web technologies</span> :</strong>
                                            HTML, CSS, Javascript
                  </li>
                                        <li id="resume_li">
                                            <strong><span className="skillCategory">Database management</span> :</strong>
                                            mySQL
                  </li>
                                        <li id="resume_li">
                                            <strong><span className="skillCategory">Miscellaneous</span> :</strong>
                                            Android programming *
                  </li>
                                        <li id="resume_li">
                                            <strong><span className="skillCategory">Operating system</span> :</strong>
                                            Windows, Linux
                  </li>
                                        <div className="star"><i>*<span className="light"> Elementary proficiency</span></i></div>
                                    </ul>
                                </div>
                                <div className="section" id="sectionResponsibility">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Positions of Responsibility</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul">
                                        <li id="resume_li">XYZ Head, ABC 2016 (the annual XYZ of IIT Guwahati)</li>
                                        <li id="resume_li">City representative, New Delhi, ABC 2015</li>
                                    </ul>
                                </div>
                                <div className="section" id="sectionAchievements">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Achievements</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul">
                                        <li id="resume_li">
                                            <span className="title">ABC contest 2016 : </span>
                                            <span className="text">Secured 1st position in the National level contest.</span>
                                        </li>
                                        <li id="resume_li">
                                            <span className="title">Joint Entrance Examination 2014 : </span>
                                            <span className="text">Secured All India Rank 1 among 0.15 million candidates appearing for the test.</span>
                                        </li>
                                        <li id="resume_li">
                                            <span className="title">KVPY 2013-14 : </span>
                                            <span className="text">Obtained the National research fellowship scholarship by securing a position in top 1%.</span>
                                        </li>
                                        <li id="resume_li">
                                            <span className="title">ABC Olympiad 2014 : </span>
                                            <span className="text">Qualified for the international stage by securing top position in following stages :</span>
                                            <ul id="resume_ul" className="decimal">
                                                <li id="resume_li">Qualifiers stage : Bagged 20th position among 5000 candidates.</li>
                                                <li id="resume_li">National level : Bagged 7th position among 250 candidates.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="section" id="sectionCourses">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Key courses taken</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <li id="resume_li">Computer lab</li>
                                                <li id="resume_li">Process design</li>
                                                <li id="resume_li">Statistics *</li>
                                            </div>
                                            <div className="col-sm-6">
                                                <li id="resume_li">Advanced calculus</li>
                                                <li id="resume_li">XYZ architecture *</li>
                                                <li id="resume_li">ABC lab *</li>
                                            </div>
                                        </div>
                                        <div className="star"><i>*<span className="light"> To be completed in Nov 2016</span></i></div>
                                    </ul>
                                </div>
                                <div className="section" id="sectionCurricular">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Extracurriculars</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul">
                                        <li id="resume_li">
                                            <span className="title">ABC workshop : </span>
                                            <span className="text">Attended a 3-day workshop on Image sensing satellute development.</span>
                                        </li>
                                        <li id="resume_li">
                                            <span className="title">ABC contest 2016 : </span>
                                            <span className="text">Secured 1st position in the National level contest.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="section" id="sectionInterest">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h4><strong>Fields of interest (OR Research interests)</strong></h4>
                                        <hr className="hr-below" />
                                    </div>
                                    <ul id="resume_ul">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <li id="resume_li">Advanced XYZ</li>
                                                <li id="resume_li">ABC design</li>
                                            </div>
                                            <div className="col-sm-6">
                                                <li id="resume_li">XYZ processing</li>
                                                <li id="resume_li">Robotics</li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div className="section" id="sectionFooterMessage">
                                    <div className="section-title ruled rule-above">
                                        <hr className="hr-above" />
                                        <h6><strong>(References available on request)</strong></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="usageModal" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <h5><strong>Note : </strong>Use <strong>Google Chrome</strong>. Other browsers are unable to print properly and don't support some features.</h5>
                                <h4><strong>Editing content</strong></h4>
                                <ul id="resume_ul">
                                    <li id="resume_li">Edit the Resume content just like a normal document editor (cut,copy,undo etc).</li>
                                    <li id="resume_li">Entire sections can be added, reordered, removed just by cut,copy,pasting method. (Use "show/hide sections" button to hide but retain content)</li>
                                    <li id="resume_li">To remove a section/point/mentor/link etc, just delete it.</li>
                                    <li id="resume_li">For styled/formatted text, select the text portion and press <kbd>Ctrl+b</kbd> for bold, <kbd>Ctrl+i</kbd> for italics, <kbd>Ctrl+u</kbd> for underlined text.</li>
                                    <li id="resume_li">Use "Insert sub-list" button to insert sub-points in a point. (like as in achivements section)</li>
                                    <li id="resume_li">Change indentation and bullet style of the list where your cursor is placed.</li>
                                </ul>
                                <h4><strong>Editing template</strong></h4>
                                <ul id="resume_ul">
                                    <li id="resume_li">Use the options in the left panel to modify the template/look.</li>
                                    <li id="resume_li">In case you want to use a different template than the official IITG template, choose the corresponding button to see other setting options. (For on-campus purpose, you must use official IITG template)</li>
                                </ul>
                                <h4><strong>Saving</strong></h4>
                                <ul id="resume_ul">
                                    <li id="resume_li">Close any popup box (like this instructions popup	) if opened. Press <kbd>Ctrl+s</kbd></li>
                                    <li id="resume_li">This will save the webpage (a .html file and a folder will be saved. Keep them together)</li>
                                    <li id="resume_li">Open the .html file in browser from your PC.</li>
                                    <li id="resume_li">This way, you can maintain multiple saved copies for each profile/template on your PC.</li>
                                </ul>
                                <h4><strong>Print as PDF</strong></h4>
                                <ul id="resume_ul">
                                    <li id="resume_li">Adjust margin in the Chrome's print dialog box. You may need it if a section is getting split between two pages. Print each page separately with different margins if needed.</li>
                                    <li id="resume_li">If URLs or some stray text is being shown in print preview, disable the options "Include headers and footers","Include background graphics" etc in the print dialog box.</li>
                                </ul>
                                <h4><strong>Merge and compress PDFs</strong></h4>
                                <ul id="resume_ul">
                                    <li id="resume_li">If you can run python file on your machine, use the script provided on <a id="resume_a" className="blue" target="_blank" href="https://github.com/nitish6174/resume-generator">project's github</a></li>
                                    <li id="resume_li"><a id="resume_a" className="blue" target="_blank" href="http://www.pdfmerge.com/">pdfmerge.com/</a> is one of the best sites available for this task.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="sectionToggleModal" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultChecked="true" defaultValue="sectionEducation" />Education</label></div>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultChecked="true" defaultValue="sectionExperience" />Experience</label></div>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultChecked="true" defaultValue="sectionPublications" />Publications</label></div>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultChecked="true" defaultValue="sectionProjects" />Projects</label></div>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultChecked="true" defaultValue="sectionSkills" />Technical Skills</label></div>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultChecked="true" defaultValue="sectionResponsibility" />Positions of Responsibility</label></div>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultChecked="true" defaultValue="sectionAchievements" />Achievements</label></div>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultChecked="true" defaultValue="sectionCourses" />Key courses taken</label></div>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultChecked="true" defaultValue="sectionCurricular" />Extra curriculars</label></div>
                                <div className="checkbox"><label><input type="checkbox" name="sectionToggle" defaultValue="sectionFooterMessage" />References message</label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default template