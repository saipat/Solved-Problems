require_relative 'graph'

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