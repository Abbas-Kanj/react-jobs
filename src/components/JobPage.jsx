import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error Fetching Data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1>{job.title}</h1>
    </>
  );
};

export default JobPage;
