FactoryBot.define do
    factory :personal_info do
        full_name {"Bobby Hill"} 
        gender{"Male"} 
        phone_number{"555-678-9012"} 
        allergy{"apples} scallops} eggs"} 
        medical_history{"hospitalized every 2 months"} 
        pregnancy_status{"n/a"} 
        treatment_refusal{"none"} 
        smoker{"yes, frequently"} 
        alcohol{"yes, monthly"} 
        recreational_drug{"none"} 
        menstruation{"n/a"} 
        code_status{"full code"} 
        medical_condition{"hepatitis c, diabetes, renal failure, dialysis"} 
        diagnosis_date{"01/01/2020"} 
        medication{"Zolaf, Ibuprofen"} 
        dosage{"20mg, 600mg"}
    end
end