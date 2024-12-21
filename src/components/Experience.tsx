import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Full-Stack Developer",
        company: "Tower Bersama Group.",
        logo: "/tbg_logo.jpeg",
        duration: "Oct 2023 - Present",
        description:
            "Responsible for designing and implementing scalable web solutions to support business processes. Led multiple high-impact projects, mentored junior developers, and ensured adherence to industry best practices in code quality and deployment.",
        link: "https://techinnovators.com",
        images: [],
    },
    {
        role: "Full-Stack Developer",
        company: "Business Intelligence Technologies (Bizintek).",
        logo: "/bizintek_logo.jpeg",
        duration: "Apr 2023 - Sep 2023",
        description:
            "Collaborated with cross-functional teams to develop responsive web applications tailored to client needs. Focused on performance optimization, clean code practices, and delivering high-quality user experiences.",
        link: "https://websolutions.com",
        images: [],
        // images: [
        //     "/devvault.png",
        //     "/devvault.png",
        // ],
    },
    {
        role: "Full-Stack Developer",
        company: "PT Aporisma Solusi Cipta Integrasi.",
        logo: "/asci_logo.jpeg",
        duration: "Sep 2020 - Feb 2023",
        description:
            "Contributed to the development of dynamic web applications while enhancing expertise in agile development and version control systems. Gained valuable experience working on diverse projects and improving team collaboration.",
        link: "https://startupventures.com",
        images: [],
    },    
]

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2">{j.description}</p>
                                {/* Job Images */}
                                <JobImages 
                                    role={j.role} 
                                    link={j.link}
                                    images={j.images} 
                                    duration={j.duration} 
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}