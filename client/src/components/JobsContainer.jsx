import React from 'react'
import { useAllJobsContext } from '../pages/AllJobs'
import Wrapper from '../assets/wrappers/JobsContainer'
import Job from './Job'

const JobsContainer = () => {
  const data = useAllJobsContext();
  const { jobs } = data;

  if(!jobs || jobs.length===0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job) => {
          <Job key={job._id} {...job}/>
        })}
      </div>
    </Wrapper>
  );
}

export default JobsContainer
