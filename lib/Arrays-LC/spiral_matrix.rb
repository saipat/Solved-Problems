# Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

def spiral_matrix(matrix)
    return '[]' if matrix.empty?

    m = matrix.dup
    result = []

    until m.size < 1
        result << m.shift
        m = m.transpose.reverse
    end

    #  for working with larger matrices
    # until m.size < 1
    #     result << m.shift
    #     result << m.map(&:pop)
    #     result << (m.pop || []).reverse
    #     result << m.map(&:shift).reverse
    # end

    result.flatten
end

# testing

matrix = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

puts "spiral_matrix = #{spiral_matrix(matrix)}"

matrix = [[6,9,7]]

puts "spiral_matrix = #{spiral_matrix(matrix)}"