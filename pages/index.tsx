import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import React from "react";

interface ResumeEntry {
  from: string;
  to: string;
  pos: string;
  com: string;
  loc?: string;
}

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  let arr: Array<ResumeEntry> = [
    { from: "2021", to: "present", pos: "Algorithm Engineer and Operations Research Expert", com: "MOIA", loc: "Hamburg, Germany" },
    { from: "2020", to: "2020", pos: "Developer", com: "AT&T", loc: "Los Angeles, USA" },
    { from: "2018", to: "present", pos: "Freelancer", com: "Toptal" },
    { from: "2018", to: "2019", pos: "Lead developer", com: "Chorefree", loc: "Vancouver, Canada" },
    { from: "2010", to: "2017", pos: "Researcher", com: "KU Leuven", loc: "Belgium" },
    {
      from: "2008",
      to: "2010",
      pos: "MSc Computer Science",
      com: "TU Delft",
      loc: "The Netherlands",
    },
    {
      from: "2004",
      to: "2009",
      pos: "Software engineer",
      com: "Floorplanner.com",
      loc: "The Netherlands",
    },
    {
      from: "2004",
      to: "2008",
      pos: "BSc Computer Science",
      com: "TU Delft",
      loc: "The Netherlands",
    },
  ];

  return (
    <div className=" flex justify-center">
      <Head>
        <title>Rinde van Lon, PhD</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div className=" flex  justify-top flex-col  max-w-4xl md:rounded overflow-hidden bg-gray-100 md:shadow-lg md:my-8">
        <div className="bg-indigo-700 bg-gradient-b-indigo-500 text-gray-100 w-full text-center px-2 md:px-12 pb-4 md:pb-10 pt-4 md:pt-10 flex flex-wrap flex-col flex-grow-0 tracking-wider">
          <div className="text-2xl sm:text-4xl md:text-6xl font-bold uppercase">
            Rinde van Lon, PhD
          </div>
          <div className="text-xs sm:text-sm md:text-xl uppercase flex flex-col tracking-widest">
            <div>Software Developer,</div>
            <div>AI, Optimization, Operations Research</div>
          </div>
        </div>
        <div className="flex flex-row flex-grow w-full justify-center text-gray-900">
          <div className="bg-indigo-300 w-1/3  p-1 md:p-2 flex flex-col text-xs md:text-base">
            <div className="w-24 sm:w-32 md:w-48 h-24 md:h-48 sm:h-32 rounded-full overflow-hidden self-center m-5 shadow-lg">
              <img className="object-contain" src="./rinde-headshot.jpg" />
            </div>
            <div className="md:mt-5">
              <div className="font-bold uppercase pb-2 text-sm md:text-base ml-1">
                Experience - highlights
              </div>

              <ul className="text-sm ml-1">
                {arr.map((entry) => {
                  return (
                    <li className="mb-3 whitespace-pre-wrap" key={entry.from + "-" + entry.to}>
                      <div className="flex flex-col space-x-2 md:space-x-5">
                        <span className="font-bold flex-shrink-0">
                          {entry.from} - {entry.to}
                        </span>
                        <div className="flex flex-row flex-wrap">
                          <span>{entry.pos}, </span>
                          <div>
                            <i>{entry.com}</i>
                            {entry.loc ? ", " : ""}
                          </div>
                          {/* </span> */}
                          {entry.loc ? (
                            <div>
                              <span>{entry.loc}</span>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-2/3 p-2 sm:p-4 md:p-8 bg-gray-100 text-sm">
            <div className="mb-5 tracking-wide italic">
              Rinde is an algorithm engineer and operations research specialist. He has robust software
              design and analytical skills, as demonstrated in his Ph.D. research on optimization
              and genetic programming.

              {/*Rinde is a full-stack developer specializing in reliable, high-quality applications.
              He has robust software design and analytical skills, as demonstrated in his Ph.D.
              research on optimization and genetic programming. In the past few years, Rinde's been
              passionate about developing serverless REST applications and mentoring other
              programmers.*/}
            </div>
            <div>
              <div className="uppercase text-lg font-bold divide-y-2 divide-gray-200 pb-2">
                Offerings
              </div>
              <hr className="border-black mb-4" />

              <div className="uppercase mt-5 text-indigo-600 text-base font-medium">
                Software consultancy / freelancing
              </div>
              <div className="text-sm">
                Are you in need of optimization expertise?
                Do you need someone to build a REST backend for you? Need help with your AWS setup?
                Would you like a Shopify store? Are you in need of a (React) web application?
                <p className="mt-2" />
                Experience includes:
                <ul className="list-circle list-outside pl-5">
                  <li>Languages: Rust, Java, TypeScript, JavaScript, Python, Dart, and R</li>
                  <li>AWS: DynamoDB, Lambda, API Gateway, Cognito, and CloudFront</li>
                  <li>Frameworks: Next.js, Tailwind CSS, and Flutter</li>
                </ul>
                <p className="mt-2" />
                <FontAwesomeIcon icon={faEnvelope} swapOpacity /> Contact Rinde now to{" "}
                <a
                  className="underline text-indigo-600"
                  target="_blank"
                  href="mailto:rindevanlon@gmail.com"
                >
                  discuss your needs
                </a>
                , or view his{" "}
                <a
                  className="underline text-indigo-600"
                  target="_blank"
                  href="https://www.toptal.com/resume/rinde-van-lon"
                >
                  Toptal profile
                </a>
                .
              </div>

              <p className="mt-2" />
              <div className="uppercase text-indigo-600 text-base font-medium">Code mentoring</div>
              <div className="">
                Are you looking for someone to help you grow as a software developer? You've found
                the right person! With over 19 years of programming experience and more than 6 years
                of experience with teaching and guiding students, Rinde is well qualified to guide
                you towards programming excellency.
                <p className="mt-2" />
                Services include:
                <ul className="list-circle list-outside pl-5">
                  <li>Code review</li>
                  <li>Pair programming</li>
                  <li>Debugging</li>
                  <li>Technology advice</li>
                  <li>
                    Theory (software design, algorithms, data structures, research methodology)
                  </li>
                  <li>
                    Advanced concepts (genetic programming, multi-agent systems, optimization)
                  </li>
                  <li>Scientific writing</li>
                </ul>
                <p className="mt-2" />
                <FontAwesomeIcon icon={faEnvelope} swapOpacity /> Contact Rinde now to{" "}
                <a
                  className="underline text-indigo-600"
                  target="_blank"
                  href="mailto:rindevanlon@gmail.com"
                >
                  schedule your first session
                </a>
                .
              </div>

            </div>

            <div className="uppercase text-lg font-bold divide-y-2 divide-gray-200 pt-4 pb-2">
              Contact
            </div>
            <hr className="border-black mb-4" />
            <div className="text-3xl flex justify-left space-x-5">
              <a href="mailto:rindevanlon@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelopeSquare} />
              </a>
              <a href="https://github.com/rinde" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com/in/rinde" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="http://stackoverflow.com/users/1554154/rinde" target="_blank">
                <FontAwesomeIcon icon={faStackOverflow} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
