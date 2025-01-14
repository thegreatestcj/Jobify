import { redirect } from "react-router-dom";
import { toast } from "react-toastify"
import customFetch from "/Users/iamccccccj/Desktop/Jobify/client/src/utils/customFetch.js"

export const action = async ({ params }) => {
    try {
        await customFetch.delete(`/jobs/${params.id}`);
        toast.success('Job deleted successfully');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    }
    return redirect('/dashboard/all-jobs');
}