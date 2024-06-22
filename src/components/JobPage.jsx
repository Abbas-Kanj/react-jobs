import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  //   const [job, setJob] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     const fetchApi = async () => {
  //       try {
  //         const res = await fetch(`/api/jobs/${id}`);
  //         const data = await res.json();
  //         setJob(data);
  //       } catch (error) {
  //         console.log("Error Fetching Data: ", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchApi();
  //   }, []);

  return (
    <>
      <h1>{job.title}</h1>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = res.json();
  return data;
};

export { JobPage as default, jobLoader };
