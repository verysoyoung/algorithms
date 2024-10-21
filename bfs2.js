import { Queue } from './queue.js'

function BFS(graph, start, visited) {
  const queue = new Queue()
  queue.add(start)
  visited[start] = true
  while (queue.size()) {
    const v = queue.popleft()
    // console.log(v)
    console.log(graph[v])
    for (const node of graph[v]) {
      console.log(node)
      if (!visited[node]) {
        queue.add(node)
        visited[node] = true
      }
    }
  }
}

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]]
const visited = Array(graph.length).fill(false)

BFS(graph, 0, visited)
