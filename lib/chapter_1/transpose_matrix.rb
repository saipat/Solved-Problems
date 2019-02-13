#  *** Write a program to transpose a given matrix.

def transpose_matrix(matrix)
    transposed_matrix = Array.new(matrix[0].length) {Array.new(matrix[0].length)}

    matrix.each_with_index do |row, row_idx|
        row.each_with_index do |el, col_idx|
            transposed_matrix[col_idx][row_idx] = el
        end
    end

    transposed_matrix.map! {|arr| arr.reject(&:nil?)}
end