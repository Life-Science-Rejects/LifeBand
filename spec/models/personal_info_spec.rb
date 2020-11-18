require 'rails_helper'

describe PersonalInfo do
  describe "validation" do
    let!(:user) { create(:user) }
    let(:personal_info) { create(:personal_info, user: user) }
    context "when user does not have a personal info" do
      it "creates the personal info" do
        expect { personal_info }.not_to raise_error
      end
    end
    context "when user already has a personal info" do
      let!(:existing_personal_info) { create(:personal_info, user: user) }
      it "raises a validation error" do
        expect { personal_info }.to raise_error "Validation failed: User has already been taken"
      end
    end
  end
end
