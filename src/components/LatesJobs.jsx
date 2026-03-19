import { HiLocationMarker } from "react-icons/hi";
import { BsClock } from "react-icons/bs";
import "./LatesJobs.css";

import notion from "../assets/notion.png";
import square from "../assets/square.png";
import github from "../assets/github.png";

const LatestJobs = () => {
  const jobs = [
    {
      logo: notion,
      title: "Sr. Software Engineer",
      company: "By Urger in [Tech]",
      location: "San Francisco, USA",
      salary: "$100 - 200 / month",
      type: "Full Time",
      daysLeft: "150 days left to apply"
    },
    {
      logo: square,
      title: "UI / UX Designer",
      company: "By CreativeHub",
      location: "Remote",
      salary: "$80 - 150 / month",
      type: "Part Time",
      daysLeft: "45 days left to apply"
    },
    {
      logo: github,
      title: "Frontend Developer",
      company: "By DevStudio",
      location: "New York, USA",
      salary: "$120 - 220 / month",
      type: "Full Time",
      daysLeft: "90 days left to apply"
    },
    {
      logo: notion,
      title: "Product Manager",
      company: "By TechCorp",
      location: "London, UK",
      salary: "$200 - 300 / month",
      type: "Part Time",
      daysLeft: "60 days left to apply"
    }
  ];

  return (
    <section className="latestJobsSection">
      <div className="latestJobsHeader">
        <h4>Latest Jobs</h4>
        <p>2026 Jobs live – 100 added today</p>
      </div>

      <div className="latestJobsContainer">
        {jobs.map((job, index) => (
          <div className="latestJobCard" key={index}>
            <div className="latestJobLogo">
              <img src={job.logo} alt="company logo" />
              <div>
                <span className="latestJobTitle">{job.title}</span>
                <span className="latestJobCompany">{job.company}</span>
              </div>
            </div>

            <div className="latestJobFilter">
              <div className="latestJobLocation">
                <HiLocationMarker />
                <span>{job.location}</span>
              </div>

              <div className="latestJobSalary">{job.salary}</div>
              <div
                className={`latestJobType ${
                  job.type.toLowerCase().includes("full") ? "full" : "part"
                }`}
              >
                {job.type}
              </div>
            </div>

            <div className="latestJobFooter">
              <BsClock />
              <span>{job.daysLeft}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestJobs;
