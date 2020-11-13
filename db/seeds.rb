users = [
    {
        email: "test1@test.com",
        password: "123456",
        password_confirmation: "123456",
        date_of_birth: "01/02/2000"
    },
    {
        email: "test2@test.com",
        password: "123456",
        password_confirmation: "123456",
        date_of_birth: "03/04/1999"
    },
]

users.each do |attribute|
    User.create attribute
    puts "user: #{attribute}"
end

personal_infos = [
    {
        full_name: "Bobby Hill",
        gender: "Male",
        phone_number: "555-678-9012",
        allergy: "apples, scallops, eggs",
        medical_history: "hospitalized every 2 months",
        pregnancy_status: "n/a",
        treatment_refusal: "none",
        smoker: "yes, frequently",
        alcohol: "yes, monthly",
        recreational_drug: "none",
        menstruation: "n/a",
        code_status: "full code",
        medical_condition: "hepatitis c, diabetes, renal failure, dialysis",
        diagnosis_date: "01/01/2020",
        medication: "Zolaf, Ibuprofen",
        dosage: "20mg, 600mg",
        user_id: User.first.id
    },
    {
        full_name: "Jane Doe",
        gender: "Female",
        phone_number: "555-111-2233",
        allergy: "n/a",
        medical_history: "had 2 surgeries in the last month (11/2020)",
        treatment_refusal: "none",
        pregnancy_status: "n/a",
        smoker: "no",
        alcohol: "no",
        recreational_drug: "none",
        menstruation: "11/15/2020",
        code_status: "full code",
        medical_condition: "flat feet",
        diagnosis_date: "05/04/2020",
        medication: "Ibuprofen",
        dosage: "600mg",
        user_id: User.second.id
    }
]

personal_infos.each do |attribute|
    PersonalInfo.create attribute
    puts "personal info: #{attribute}"
end

emergency_contacts = [
    {
        full_name: "Naruto Uzumaki",
        relationship: "hokage",
        phone_number: "1234567890",
        user_id: 1
    },
    {
        full_name: "Gaara",
        relationship: "kazakage",
        phone_number: "1234567890",
        user_id: 1
    },
    {
        full_name: "Kakashi Hatake",
        relationship: "sensei",
        phone_number: "1234567890",
        user_id: 2
    },
    {
        full_name: "Shikamaru Nara",
        relationship: "proctor",
        phone_number: "1234567890",
        user_id: 2
    }
]

emergency_contacts.each do |attribute|
    EmergencyContact.create attribute
    puts "emergency contact: #{attribute}"
end