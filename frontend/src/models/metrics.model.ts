export interface GraphData {
    date: string,
    value: number
}

export interface Metrics {
    repo_name: string,
    single_num_metrics: {
        description: string,
        value?: number
    }[],
    graph_metrics: {
        description: string,
        data?: GraphData[]
    }[]
}
