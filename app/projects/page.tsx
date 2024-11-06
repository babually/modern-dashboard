import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    status: 'In Progress',
    progress: 75,
    dueDate: '2024-04-15',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    status: 'Planning',
    progress: 25,
    dueDate: '2024-05-01',
  },
  {
    id: 3,
    name: 'Marketing Campaign',
    status: 'Review',
    progress: 90,
    dueDate: '2024-03-30',
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {project.name}
                  </CardTitle>
                  <Badge>{project.status}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Progress value={project.progress} />
                    <p className="text-xs text-muted-foreground">
                      Due: {project.dueDate}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}