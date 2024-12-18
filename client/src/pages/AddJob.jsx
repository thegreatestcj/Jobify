import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch.js';
import {FormRowSelect} from '../components';

const AddJob = () => {
    const { user } = useOutletContext();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>Add Job</h4>
                <div className='form-center'>
                    <FormRow type='text' name='position'/>
                    <FormRow type='text' name='company'/>
                    <FormRow type='text' name='jobLocation' labelText='Job Location'
                     defaultValue={user.location}/>
                    <FormRowSelect 
                    name="jobStatus" 
                    labelText="Job Status"
                    list={Object.values(JOB_STATUS)}
                    defaultValue={JOB_STATUS.PENDING}/>
                    <FormRowSelect 
                    name="jobType" 
                    labelText="Job Type"
                    list={Object.values(JOB_TYPE)}
                    defaultValue={JOB_TYPE.FULL_TIME}/>
                    <button type='submit' 
                    disabled={isSubmitting}
                    className='btn btn-block form-btn'>
                        { isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </Form>
        </Wrapper>
    );
}

export default AddJob;