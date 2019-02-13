#  *** Given an immage represented by NxN matrix, where each pixel in the image is 4 bytes, Write a method to rotate the image by 90 degrees. Can you do this in place?

def rotate_matrix(matrix)
    rotated_matrix = []

    matrix.transpose.each do |row|
        rotated_matrix << row.reverse
    end

    rotated_matrix
end