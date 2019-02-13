#  *** Write an algorithm such that if an element in MxM matrix is 0, its entire row and colum is set to zero.

def zero_matrix(matrix) 

    m = matrix.length
    n = matrix[0].length

    row_hash = {}
    col_hash = {}

    # Find all rows and columns containing 0
    m.times do |row|
        n.times do |col|
            if matrix[row][col] == 0
                row_hash[row] = true
                col_hash[col] = true
            end
        end
    end

    # set rows to 0
    row_hash.each {|k,_v| n.times { |idx| matrix[k][idx] = 0 }}

     # set cols to 0
    col_hash.each {|k,_v| m.times { |idx| matrix[idx][k] = 0 }}

    return matrix
end



# Does not work for 2 zeros in one matrix
#     zero = nil

#     matrix.length.times do |row|
#         if matrix[row].include?(0)
#             matrix[row].each_with_index do |el, idx|
#                 if el == 0
#                     zero = idx
#                 else
#                     matrix[row][idx] = 0
#                 end
#             end
#         end
#     end

#     matrix = matrix.transpose

#     matrix.length.times do |row|
#         if zero == row
#             matrix[row].each_with_index do |el, idx|
#                 matrix[row][idx] = 0
#             end
#         end
#     end

#     matrix = matrix.transpose
