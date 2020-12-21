export interface Metrics {
    repo_name: string,
    single_num_metrics: [
      {
        description: string,
        value: number
      }
    ] | [],
    graph_metrics: [
      {
        description: string,
        data: [
            {
                date: string,
                value: number
            }
        ] | []
      }
    ] | []
}
