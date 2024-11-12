
const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Project 1 description',
        image: '/project1.jpg',
        link: '#link'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Project 2 description',
        image: '/project2.jpg',
        link: '#link'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Project 3 description',
        image: '/project3.jpg',
        link: '#link'
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Project 4 description',
        image: '/project4.jpg',
        link: '#link'
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'Project 5 description',
        image: '/project5.jpg',
        link: '#link'
    },
    {
        id: 6,
        title: 'Project 6',
        description: 'Project 6 description',
        image: '/project5.jpg',
        link: '#link'
    }
]

export default function ProjectSection() {
    return (
        <div className="bg-black">
            <div className="container mx-auto p-5 ">
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-2">
                    {projects.map((project) => (
                        <div key={project.id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href={project.link}>
                                <img className="rounded-t-lg" src={project.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href={project.link}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                                </a>
                                <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {project.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}