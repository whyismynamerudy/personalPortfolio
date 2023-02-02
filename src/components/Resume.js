import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p className='info2'>Relevent Coursework: </p>
                          {/* <span className='coursework'>{item.ReleventCoursework}</span> */}
                          <ul className="relevantCoursework">
                            {item.ReleventCoursework.map((item) => {
                              return(
                                <li className='relevantCourseworkList'>
                                {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}> */}
                                <em>{item.name}&nbsp;</em>
                                </li>
                              )
                              })
                            }
                          </ul> 
                          <p className='info2'>Achievements: </p>  
                          <ul className="uniAchievements">
                            {item.Achievements.map((item) => {
                              return(
                                <li>
                                  <em>{item.achievement}</em>
                                </li>
                              )
                            })}
                          </ul>                  
                          {/* <p>
                          {item.Achievements}
                          </p> */}
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          {/* <ul className="workAchievements">
                            {item.Achievements.map((item) => {
                              return(
                                <li>
                                  {item.Achievement}
                                </li>
                              )
                            })}
                          </ul> */}
                          <div className="achievementList">
                          {item.Achievements.map((item) => {
                            return (
                              <p >
                              {item.Achievement}
                              </p>
                            )
                          })}
                          </div>
                          
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.progDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.prog && resumeData.prog.map((item) => {
                    return(
                      <li className='skillsListItem'>
                      {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}> */}
                      <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

           <p>
               {resumeData.frameworkDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.framework && resumeData.framework.map((item) => {
                    return(
                      <li className='skillsListItem'>
                      {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}> */}
                      <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}