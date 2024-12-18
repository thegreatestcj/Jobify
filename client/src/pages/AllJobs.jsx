import { createContext, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";

const AllJobsContext = createContext();

export const loader = ({ params }) => {
    try {
        const { data } = customFetch.get('/jobs');
        return { data };
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
}

const AllJobs = () => {
    const { data } = useLoaderData();
    return (
        <AllJobsContext.Provider value={{data}}>
            <SearchContainer />
            <JobsContainer />
        </AllJobsContext.Provider>
    );
}

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;