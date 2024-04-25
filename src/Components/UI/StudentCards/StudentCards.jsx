"use client"
import { fetchData } from '@/redux/features/StudentSlice/StudentSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const StudentCards = () => {
    const { students, isLoading, isError, error } = useSelector((state) => state.studentData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    console.log(students, isLoading)

    if (isLoading) {
        <h1>Loading</h1>
    }
    if (isError) {
        <h1>{error}</h1>
    }

    return (
        <div>
            {
                students?.map(student => (
                    <h1 key={student._id}> {student.name}</h1>
                ))
            }
        </div>
    );
};

export default StudentCards;