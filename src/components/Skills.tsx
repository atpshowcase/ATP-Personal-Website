import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = ["C#", ".Net Framework", ".Net Core", "SQL", "Javascript", "React", "CSS", "Node.js", "jQuery", "Python", "PHP", "Laravel", "Codeigniter", "Next.js", "ExpressJS", "Mysql", "Golang", "Vue.js", "MongoDB", "PostgreSQL", "Git", "Docker", "React Native"]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}