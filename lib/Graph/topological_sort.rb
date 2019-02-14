require_relative 'graph'

# Kahn's
# O(|V| + |E|)

def topological_sort(vertices)
    in_edge_counts = {}
    queue = []
    sorted_vertices = []

    # Queue up all the vertices with no in_edges => O(V)
    vertices.each do |vertex|
        in_edge_counts[vertex] = vertex.in_edges.count
        queue << vertex if vertex.in_edges.empty?
    end

    # if the queue is empty, we remove all nodes from the graph, return the list
    until queue.empty?

        # identify the current vertex
        vertex = queue.shift 
        sorted_vertices << vertex

        # O(E)
        vertex.out_edges.each do |edge|
            to_vertex = edge.to_vertex
            in_edge_counts[to_vertex] -= 1
            
            # check if there is a new node with in-degree zero
            queue << to_vertex if in_edge_counts[to_vertex] == 0
        end
    end

    sorted_vertices
end


# Tarjans
# O(|V| + |E|)

def topological_sort(vertices)
    ordered = []
    explored = Set.new
    temp = Set.new
    cycle = false

    vertices.each do |vertex|
        cycle = dfs!(vertex, ordered, explored, temp, cycle) unless explored.include?(vertex)
        return [] if cycle
    end
  
    ordered
end

def dfs!(vertex, ordered, explored, temp, cycle)
    return true if temp.include?(vertex)

    temp.add(vertex)

    vertex.out_edges.each do |edge|
        next_vertex = edge.to_vertex
        cycle = dfs!(next_vertex, ordered, explored, temp, cycle) unless explored.include?(next_vertex)
        return true if cycle
    end

    explored.add(vertex)
    temp.delete(vertex)
    ordered.unshift(vertex)

    false
end
