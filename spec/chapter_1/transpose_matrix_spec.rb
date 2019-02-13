require 'chapter_1/transpose_matrix'

describe "Tranpose Matrix" do
    let(:matrix1){[['a','b','c'],
                ['d','e','f'],
                ['g','h','i']]}
    
    let(:rotated_matrix1){[['a','d','g'],
                        ['b','e','h'],
                        ['c','f','i']]}

    it "transpose the given matrix of equal rows and columns" do
        expect(transpose_matrix(matrix1)).to eq(rotated_matrix1)
    end

    let(:matrix2){[[1,2,3,4],
                  [5,6,7,8]]}
    
    let(:rotated_matrix2){[[1,5],
                          [2,6],
                          [3,7],
                          [4,8]]}
    it "transpose the given matrix of different rows and columns" do
        expect(transpose_matrix(matrix2)).to eq(rotated_matrix2)
    end
end

