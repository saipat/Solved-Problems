require "chapter_1/rotate_matrix.rb"

describe "Rotate matrix 90 degree" do
    let(:matrix1){[['a','b','c'],
                ['d','e','f'],
                ['g','h','i']]}
    
    let(:rotated_matrix1){[['g','d','a'],
                        ['h','e','b'],
                        ['i','f','c']]}

    it "rotates the given matrix 90 degree of equal rows and columns" do
        expect(rotate_matrix(matrix1)).to eq(rotated_matrix1)
    end

    let(:matrix2){[[1,2,3,4],
                  [5,6,7,8]]}
    
    let(:rotated_matrix2){[[5,1],
                          [6,2],
                          [7,3],
                          [8,4]]}
    it "rotates the given matrix 90 degree of different rows and columns" do
        expect(rotate_matrix(matrix2)).to eq(rotated_matrix2)
    end

end