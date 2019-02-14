require_relative 'graph'

# Kahn's
# O(|V| + |E|).
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

# def topological_sort(vertices)
  
# end

# def dfs!(vertex, explored, ordering)
  
# end
