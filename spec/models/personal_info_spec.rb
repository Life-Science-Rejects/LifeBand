require 'rails_helper'

RSpec.describe PersonalInfo, type: :model do
  it "will validate that a single personal info exists" do
    user = User.new(id: 1, email: "test@test.com", password: "123456", password_confirmation: "123456", date_of_birth: "01/01/1994")
    personal_info_1 = user.personal_infos.new(full_name: "Bobby Hill", gender: "Male", phone_number: "555-678-9012", allergy: "apples, scallops, eggs", medical_history: "hospitalized every 2 months", pregnancy_status: "n/a", treatment_refusal: "none", smoker: "yes, frequently", alcohol: "yes, monthly", recreational_drug: "none", menstruation: "n/a", code_status: "full code", medical_condition: "hepatitis c, diabetes, renal failure, dialysis", diagnosis_date: "01/01/2020", medication: "Zolaf, Ibuprofen", dosage: "20mg, 600mg")
    p personal_info_1
    expect(personal_info_1).to be_valid
  end
  it "will only allow a user to create a single personal info" do
    user = User.new(email: "test@test.com", password: "123456", password_confirmation: "123456", date_of_birth: "01/01/1994")
    personal_info_1 = user.personal_infos.new(id: 1, full_name: "Bobby Hill", gender: "Male", phone_number: "555-678-9012", allergy: "apples, scallops, eggs", medical_history: "hospitalized every 2 months", pregnancy_status: "n/a", treatment_refusal: "none", smoker: "yes, frequently", alcohol: "yes, monthly", recreational_drug: "none", menstruation: "n/a", code_status: "full code", medical_condition: "hepatitis c, diabetes, renal failure, dialysis", diagnosis_date: "01/01/2020", medication: "Zolaf, Ibuprofen", dosage: "20mg, 600mg", index_personal_infos_on_user_id: 1)
    personal_info_2 = user.personal_infos.new(id: 2, full_name: "Jane Doe", gender: "Female", phone_number: "555-111-2233", allergy: "n/a", medical_history: "had 2 surgeries in the last month (11/2020)", treatment_refusal: "none", pregnancy_status: "n/a", smoker: "no", alcohol: "no", recreational_drug: "none", menstruation: "11/15/2020", code_status: "full code", medical_condition: "flat feet", diagnosis_date: "05/04/2020", medication: "Ibuprofen", dosage: "600mg", index_personal_infos_on_user_id: 1)
    expect(personal_info_2).to_not be_valid
  end
end
