import { getProjects } from "@/lib/projects";
import { ProjectSearch } from "./project-search";
import { ProjectList } from "./project-list";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main className="px-16 py-8">
      <h1 className="text-4xl font-bold">Projects</h1>
      <ProjectSearch projects={projects} />
    </main>
  );
}
