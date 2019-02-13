require "chapter_1/zero_matrix.rb"

describe "Zero Matrix" do
    let(:matrix){[[1,0,3],
                  [2,4,5],
                  [6,7,8]]}
    let(:zero){[[0,0,0],
                [2,0,5],
                [6,0,8]]} 

    it "it returns the zero matrix by replacing the rows and cols that the zero was in - MxM" do
        expect(zero_matrix(matrix)).to eq(zero)
    end

    let(:matrix){[[1,0,3],
                  [2,4,5]]}
    let(:zero){[[0,0,0],
                [2,0,5]]} 

    it "it returns the zero matrix by replacing the rows and cols that the zero was in - MxN" do
        expect(zero_matrix(matrix)).to eq(zero)
    end

    let(:matrix){[[1,0,3],
                  [2,4,5],
                  [0,7,8]]}
    let(:zero){[[0,0,0],
                [0,0,5],
                [0,0,0]]} 

    it "it returns the zero matrix if it has more than one zeros - MxM" do
        expect(zero_matrix(matrix)).to eq(zero)
    end
end