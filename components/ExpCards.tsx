"use client";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const jobPositions = [
  {
    timeline: "Jan 2025 — Present",
    currentPosition: "Automation QA Engineer",
    place: "Ether Technologies",
    previousPositions: [""],
    description:
      "Designed and executed comprehensive end-to-end testing strategies for web, mobile, IoT, and AI-powered applications, contributing to 99.9% system uptime and operational reliability. Validated AI-driven workflows (AI Agents, LLMs, RAG systems) with a focus on response accuracy, hallucination detection, contextual integrity, and consistency. Automated regression and functional test suites using Playwright and Appium, reducing manual testing effort by 40%.",
    skills: [
      "Playwright",
      "Appium",
      "AI/LLM Testing",
      "RAG Validation",
      "E2E Testing",
      "WebRTC",
      "API Testing",
      "Regression Automation",
      "IoT Testing",
      "Agile/Scrum",
    ],
    recentProjects: [
      {
        title: "KTO (Kids Tracking & Observation System)",
        description:
          "Validated complex real-time communication architecture leveraging WebRTC for live screen monitoring, Pusher for event-driven synchronization, Firebase Cloud Messaging (FCM) for push notifications, and Google Geolocation services for GPS-based live tracking and geofencing. Ensured API reliability, data integrity, and seamless parent-child device synchronization under high concurrency.",
        technologies: ["WebRTC", "Pusher", "FCM", "Playwright"],
      },
    ],
  },
  {
    timeline: "Jan 2023 — Dec 2024",
    currentPosition: "Jr QA Engineer",
    place: "Navigator Technologies",
    previousPositions: [""],
    description:
      "Performed functional, integration, and system testing of fintech payment gateway integrations, including SSLCommerz, BRAC Bank payment systems, Nagad, and bKash, validating transaction flows across multiple payment channels and APIs. Tested CRM software modules covering visa processing, reservation management, digital marketing operations, sales workflows, and accounting functionalities.",
    skills: [
      "Functional Testing",
      "Integration Testing",
      "Payment Gateway Testing",
      "CRM Testing",
      "RBAC Validation",
      "Postman",
      "JMeter",
      "Jira",
      "ClickUp",
      "BDD",
    ],
  },
];

const ExpCards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="space-y-6">
        {jobPositions.map((job, index) => (
          <motion.div
            key={index}
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-card rounded-lg p-6 hover:shadow-lg transition-all border border-muted hover:border-primary"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{job.currentPosition}</h3>
                  <p className="text-primary">{job.place}</p>
                </div>
                <span className="text-sm text-muted-foreground">{job.timeline}</span>
              </div>

              <p className="text-muted-foreground">{job.description}</p>

              {job.recentProjects && job.recentProjects.length > 0 && (
                <div className="space-y-3">
                  <p className="font-medium">Recent Projects:</p>
                  {job.recentProjects.map((project, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">{project.title}</p>
                      <p>{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech, techIdx) => (
                          <Badge key={techIdx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="https://mehedi213.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
};

export default ExpCards;
