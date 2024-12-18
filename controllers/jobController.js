import { nanoid } from 'nanoid';

import Job from '../models/JobModel.js';

import { NotFoundError, UnauthenticatedError,
        UnauthorizedError, BadRequestError } from '../errors/customErrors.js';

import { StatusCodes } from "http-status-codes";

let jobs = [
    {id: nanoid(), company: 'apple', position: 'front-end'},
    {id: nanoid(), company: 'google', position: 'back-end'},
];

export const getAllJobs = async (req, res) => {
    console.log(req.user);
    const jobs = await Job.find({ createdBy: req.user.userId});
    res.status(200).json({jobs});
};

export const showStats = async (req, res) => {
    const defaultStats = {
    pending: 22,
    interview: 11,
    declined: 4,
    };

    let monthlyApplications = [
    {
        date: 'May 23',
        count: 12,
    },
    {
        date: 'Jun 23',
        count: 9,
    },
    {
        date: 'Jul 23',
        count: 3,
    },
    ];

    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
}

export const getJob = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
        throw new NotFoundError(`no job with id ${id}`);
    }
    res.status(200).json({ job });
};

export const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(201).json({ job });
};

export const updateJob = async (req, res) => {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if (!updatedJob) {
        throw new NotFoundError(`no job with id ${id}`);
    }
    res.status(200).json({ msg: 'job modified', job: updatedJob });

};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = Job.findByIdAndDelete(id);
    if (!removedJob) {
        throw new NotFoundError(`no job with id ${id}`);
    }
    res.status(200).json({ msg: 'job deleted' , job: removedJob});
};

