require 'rails_helper'

RSpec.describe User, type: :model do

  it "is not valid without an email" do
    user = User.new(email: nil, password: "123456", password_confirmation: "123456", date_of_birth: nil)
    expect(user).to_not be_valid
  end
  it "is not valid without an password" do
    user = User.new(email: "test@test.com", password: nil, password_confirmation: nil, date_of_birth: "01/01/1994")
    expect(user).to_not be_valid
  end

  it "is not valid without an date of birth" do
    user = User.new(email: "test@test.com", password: "123456", password_confirmation: "123456", date_of_birth: nil)
    expect(user).to_not be_valid
  end
  it "is not valid without an date of birth" do
    user = User.new(email: "test@test.com", password: "123456", password_confirmation: "123456", date_of_birth: "not a date")
    expect(user).to_not be_valid
  end
end
