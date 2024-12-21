import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {/* Write 1-2 sentences about yourself */}
                    I am a software engineer with over 4 years of experience specializing in full-stack development. My passion lies in creating scalable, efficient, 
                    and user-friendly web applications that solve real-world problems. With expertise in both frontend and backend technologies, 
                    I have successfully contributed to diverse projects, ranging from responsive user interfaces to robust server-side architectures. 
                    I thrive in collaborative environments, continuously learning and implementing best practices to deliver high-quality software solutions.
                </p>
            </CardContent>
        </Card>
    )
}