require_relative 'graph'

# Implement topological sort using Kahn's algorithm.
def topological_sort(vertices)
    in_edges_count = {}
    queue = []
    sorted = []

    vertices.each do |vertex|
        in_edges_count[vertex] = vertex.in_edges.count
        queue << vertex if vertex.in_edges.empty?
    end

    until queue.empty?
        vertex = queue.shift
        sorted << vertex

        vertex.out_edges.each do |edge|
            to_vertex = edge.to_vertex
            in_edges_count[to_vertex] -= 1

            queue << to_vertex if in_edges_count[to_vertex] == 0
        end
    end

    sorted
end


# Implement topological sort using Tarjan's algorithm.

def topological_sort(vertices)
  order = []
  explored = Set.new
  temp = Set.new
  cycle = false

  vertices.each do |vertex|
    cycle = dfs!(vertex, explored, temp, order, cycle)  unless explored.include?(vertex)
    return [] if cycle
  end

  order
end


def dfs!(vertex, explored, temp, order, cycle)
  return true if temp.include?(vertex)
  temp.add(vertex)

  vertex.out_edges.each do |edge|
    next_vertex = edge.to_vertex
    cycle = dfs!(next_vertex, explored, temp, order, cycle) unless explored.include?(next_vertex)
    return true if cycle
  end

  explored.add(vertex)
  temp.delete(vertex)
  order.unshift(vertex)
  false
end