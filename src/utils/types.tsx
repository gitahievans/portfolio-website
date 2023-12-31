export type ProjectType = {
    name: string,
    description: string,
    image: string,
    tools: string[],
    github: string,
    live: string
}

export type ProjectCardType = {
    project: ProjectType[] | []
}

export type skill = {
    skill: string,
    image: string
}

export type project = {
    name: string,
    description: string,
    role: string,
    achievements: string[],
    link: string
}

export type projectPropsType = {
    project: project
}
