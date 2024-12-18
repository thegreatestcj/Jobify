import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch.js';

export const loader = async ({param}) => {
    try {
        const {data} = await customFetch.get(`/jobs/${params.id}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.msg);
        return redirect('../dashboard/all-pages');
    }
}

export const action = async ({ params, request }) => {

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.patch(`/jobs/${params.id}`, data);
        toast.success('Page edited successfully');
        return redirect('../dashboard/all-jobs');
    } catch (error) {
        toast.error(error.response.data.msg);
        return error;
    }
}

const EditJob = () => {

    const { job } = useLoaderData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <Wrapper>
            <Form className="form" action='post'>
                <div className="form-title">
                    <h4>Edit Job</h4>
                </div>
                <div className="form-center">
                    <FormRow type='text' name='position' defaultValue={job.position}/>
                    <FormRow type='text' name='company' defaultValue={job.company}/>
                    <FormRow type='text' name='jobLocation' labelText='Job Location' defaultValue={job.location}/>
                    <FormRowSelect name='jobStatus' list={Object.values(JOB_STATUS)} labelText='Job Status' defaultValue={job.jobStatus}/>
                    <FormRowSelect name='jobType' list={Object.values(JOB_TYPE)} labelText='Job Type' defaultValue={job.jobType}/>
                    <button type="submit" className='btn btn-block form-btn' disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting' : 'Submit'}
                    </button>
                </div>
            </Form>
        </Wrapper>
    );
}

export default EditJob;