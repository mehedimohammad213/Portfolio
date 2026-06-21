"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

const jobProjects = [
  {
    imagePath: "/kto-banner.png",
    title: "KTO — Kids Tracking & Observation System",
    slug: "kto",
    description:
      "Validated complex real-time communication architecture leveraging WebRTC for live screen monitoring, Pusher for event-driven synchronization, Firebase Cloud Messaging (FCM) for push notifications, and Google Geolocation services for accurate GPS-based live tracking and geofencing. Ensured API reliability, data integrity, and seamless parent-child device synchronization under high concurrency.",
    skills: [
      "WebRTC",
      "Pusher",
      "FCM",
      "API Testing",
      "E2E Testing",
      "Geofencing",
      "Playwright",
    ],
    link: "#",
  },
  {
    imagePath: "/techcare.webp",
    title: "Playwright Practice with Docker and CI/CD",
    slug: "playwright-practice",
    description:
      "Open-source real-time testing scenario demonstrating Playwright automation integrated with Docker containers and GitHub Actions CI/CD pipelines. Covers test environment containerization, parallel test execution, and automated regression runs on every push.",
    skills: [
      "Playwright",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "TypeScript",
      "TDD",
    ],
    link: "https://github.com/mehedimohammad213",
  },
];

interface Project {
  imagePath: string;
  title: string;
  slug: string;
  description: string;
  skills: string[];
  link: string;
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(jobProjects);

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredProjects(jobProjects);
    } else {
      const filtered = jobProjects.filter(project =>
        project.skills.some(skill =>
          skill.toLowerCase().includes(selectedFilter.toLowerCase())
        )
      );
      setFilteredProjects(filtered);
    }
  }, [selectedFilter]);

  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-card rounded-lg overflow-hidden border border-muted hover:border-primary transition-colors"
            >
              <div className="flex flex-col">
                <div className="relative w-full h-[240px]">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        View Repository <MoveUpRight className="ml-1 h-4 w-4" />
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Case Study <MoveUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
