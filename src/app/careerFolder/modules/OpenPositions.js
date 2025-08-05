import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import OpenPosition from "../components/OpenPosition";
import ApplyForm from "../components/ApplyForm";
import MyContext from "../contextApi/MyContext";
import { getJobs } from "../resources/jobsApi";
import useScreenSize from "../hooks/useScreenSize";

const OpenPositions = () => {
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState(false);
  const [jobType, setJobType] = useState(1);
  const screenSize = useScreenSize();
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  const { jobsData, setJobsData } = useContext(MyContext);

  const applyToPosition = useCallback((jobId) => {
    setForm(jobId);
  }, []);

  const checkJobType = useCallback(
    (type = "") => {
      type = type.toLowerCase();
      if (type.includes("full")) return jobType === 1;
      if (type.includes("int")) return jobType === 2;
      if (type.includes("free")) return jobType === 3;
      return false;
    },
    [jobType]
  );

  useEffect(() => {
    if (!jobsData) {
      getJobs(setJobsData);
    }
  }, [jobsData, setJobsData]);

  const JobsArray = useMemo(() => {
    return (
      jobsData
        ?.filter(({ job_type }) => checkJobType(job_type))
        .sort((a, b) => {
          if (a.job_priority === null) return 1;
          if (b.job_priority === null) return -1;
          return a.job_priority - b.job_priority;
        }) || []
    );
  }, [jobsData, checkJobType]);

  return (
    <section id="positions" className={`positions ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
      <div className="container">
        <h2>Open Positions</h2>
        <div className="job_tabs">
          <span
            className={jobType === 1 ? "active" : ""}
            onClick={() => setJobType(1)}
          >
            Full time
          </span>
          <span
            className={jobType === 2 ? "active" : ""}
            onClick={() => setJobType(2)}
          >
            Internship
          </span>
          <span
            className={jobType === 3 ? "active" : ""}
            onClick={() => setJobType(3)}
          >
            Freelance
          </span>
        </div>
        {!jobsData ? (
          <div className="center_pad">Loading...</div>
        ) : (
          <>
            <div className="cards">
              {JobsArray.length ? (
                JobsArray.slice(0, showAll ? undefined : 60).map((position) => (
                  <OpenPosition
                    key={position.id}
                    data={position}
                    apply={() => applyToPosition(position.id)}
                  />
                ))
              ) : (
                <div className="no_jobs_text">
                  No jobs available in this section
                </div>
              )}
            </div>
            {/* {JobsArray.length > 6 && (
              <p>
                <button
                  onClick={() => setShowAll(!showAll)}
                  aria-label={`View ${showAll ? "less" : "all positions"}`}
                >
                  {showAll ? "View Less" : "View All Positions"}
                </button>
              </p>
            )} */}
          </>
        )}
      </div>
      {form && <ApplyForm jobId={form} closeSelf={() => setForm(false)} />}
    </section>
  );
};

export default OpenPositions;
