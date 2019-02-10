require "chapter_1/2_strings_permutation.rb"

describe "2 String Permutation" do

  it "returns true for 'abc' and random permutation" do
    str1 = 'abc'
    str2 = str1.split('').shuffle.join
    expect(permutation?(str1, str2)).to eq(true)
  end

  it "returns false for 'abc' and 'aabc'" do
    expect(permutation?('abc', 'aabc')).to eq(false)
  end

  it "returns false for 'abc' and 'aaa'" do
    expect(permutation?('abc', 'aaa')).to eq(false)
  end
  
end
