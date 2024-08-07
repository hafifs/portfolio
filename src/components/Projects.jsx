const Projects = () => {
  return (
    <section
      id="projects"
      className="container px-4 py-10 mx-auto sm:px-6 lg:px-8"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          My Projects
        </h2>
      </div>
      <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <div
      className="relative border rounded-lg shadow-sm bg-card text-card-foreground"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <img
          src="/placeholder.jpg"
          width="550"
          height="310"
          alt="Project 1"
          className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-t-xl"
        />
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold">Project 1</h3>
        <p className="text-muted-foreground dark:text-muted">
          A modern web application built with React, TypeScript, and Tailwind
          CSS.
        </p>
        <div className="flex gap-2">
          <a
            className="inline-flex items-center justify-center h-8 px-4 text-sm font-medium text-white transition-colors bg-black rounded-md shadow hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Live Demo
          </a>
          <a
            className="inline-flex items-center justify-center h-8 px-4 text-sm font-medium text-black transition-colors bg-transparent border rounded-md shadow-sm border-input focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
        <span className="absolute px-10 py-1 text-xs text-white rotate-45 top-5 left-5 bg-slate-900">
          Development
        </span>
      </div>
    </div>
  );
};

export default Projects;
