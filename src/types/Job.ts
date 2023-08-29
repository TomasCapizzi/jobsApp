export type Job = {
    category: JobCategory,
    company: JobCompany,
    contract_type: string,
    description: string,
    id: string,
    location: JobLocation,
    title: string,
    salary_max: number,
    salary_min: number,

}

type JobLocation = {
    area: string[],
    display_name: string
}

type JobCategory = {
    label: string,
    tag: string
}

type JobCompany = {
    display_name: string,
}