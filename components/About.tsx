"use client";

import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function About() {
  const skillsData = {
    labels: ['Automation', 'API Testing', 'Mobile Testing', 'CI/CD', 'Test Planning', 'Problem Solving'],
    datasets: [{
      label: 'Skills',
      data: [90, 85, 80, 85, 88, 90],
      backgroundColor: 'rgba(66, 133, 244, 0.2)',
      borderColor: 'rgba(66, 133, 244, 1)',
      borderWidth: 2,
    }]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <section id="about" className="scroll-mt-16 ">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
            About
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-start text-muted-foreground lg:px-6">
            Software QA Engineer with 4 years of experience and a passion for continuous learning and helping others. Seeking a challenging role where I can leverage my skills to make a positive impact on both the team and the broader community. Highly motivated and a quick learner, with a strong interest in working with cutting-edge technologies.
          </p>
          <p className="text-start text-muted-foreground lg:px-6">
            Currently, I serve as an Automation QA Engineer at Ether Technologies, where I design and execute comprehensive end-to-end testing strategies for web, mobile, IoT, and AI-powered applications. I validate AI-driven workflows — including AI Agents, LLMs, and RAG systems — with a focus on response accuracy, hallucination detection, contextual integrity, and consistency. I automate regression and functional test suites using Playwright and Appium, contributing to 99.9% system uptime and operational reliability.
          </p>
          <p className="text-start text-muted-foreground lg:px-6">
            Previously at Navigator Technologies as Jr QA Engineer, I performed functional, integration, and system testing of fintech payment gateway integrations including SSLCommerz, BRAC Bank, Nagad, and bKash. I also tested CRM software modules covering visa processing, reservation management, digital marketing, sales workflows, and accounting — validating RBAC, reporting accuracy, audit logs, and cross-department data synchronization.
          </p>
          <p className="text-start text-muted-foreground lg:px-6">
            <span className="font-medium text-foreground">Education:</span> BSc in CSE, American International University-Bangladesh (2023)
            <br />
            <span className="font-medium text-foreground">Certifications:</span> Web Development & Testing – Ostad (2023) · Agile Software Development – LinkedIn (2023)
          </p>
        </div>
      </section>

      <div className="mt-12 max-w-md mx-auto bg-card p-6 rounded-lg border border-muted">
        <h3 className="text-2xl font-bold mb-6 text-center">Skills Overview</h3>
        <Radar
          data={skillsData}
          options={{
            scales: {
              r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  stepSize: 20
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                pointLabels: {
                  font: {
                    size: 12
                  }
                }
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }}
        />
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://mehedi213.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Resume
        </a>
      </div>
    </motion.div>
  );
}
