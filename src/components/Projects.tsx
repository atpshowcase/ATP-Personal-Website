import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Discord Clone",
        description: "A communication platform clone featuring text, voice, and video chat functionalities built with React, Node.js, and MongoDB.",
        tech: "React",
        link: "https://www.youtube.com/watch?v=TfEUSqFk-CM",
    },
    {
        title: "Building E-Commerce and Chat Apps",
        description: "A fan-made website showcasing One Piece content, featuring interactive design and built with React.",
        tech: "Flutter",
        link: "https://www.youtube.com/watch?v=rn3xNIulrWk",
    },
    // {
    //     title: "One Piece Website",
    //     description: "A fan-made website showcasing One Piece content, featuring interactive design and built with React.",
    //     tech: "React",
    //     link: "https://onepiece-eastblue.netlify.app/",
    // },
    {
        title: "Veterinary Clinic Administration Information System Website",
        description: "A web-based management system designed to streamline operations for veterinary clinics, developed using PHP.",
        tech: "PHP",
        link: "https://www.youtube.com/watch?v=3xcx3cp1rJ0",
    },
    {
        title: "Wild Animal Introduction Game",
        description: "An engaging educational game introducing players to wild animals, developed with Unity.",
        tech: "Unity",
        link: "https://www.youtube.com/watch?v=_ED37BTlFFI",
    },
    {
        title: "Web Based Pizza Delivery",
        description: "A web application for pizza ordering and delivery management powered by C#.",
        tech: "C#",
        link: "https://www.youtube.com/watch?v=8qNCO3yXbH0&feature=youtu.be",
    },
    {
        title: "Crud - Sending Email",
        description: "A CRUD application featuring email-sending capabilities, built with Golang.",
        tech: "Golang",
        link: "https://www.youtube.com/watch?v=8qNCO3yXbH0&feature=youtu.be",
    },
]

const techColors = {
    "React": "bg-blue-500",
    "React Native": "bg-green-500",
    "Vue.js": "bg-purple-500",
    "Python": "bg-yellow-500",
    "Unity": "bg-pink-500",
    "PHP": "bg-green-500",
    "Golang": "bg-red-500",
    "C#": "bg-purple-500",
    "Flutter": "bg-orange-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    target="_blank"
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}