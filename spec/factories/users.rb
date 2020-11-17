FactoryBot.define do
    factory :user do
        transient do
            secure_pass { Faker::Internet.password }
        end
        email { Faker::Internet.email }
        date_of_birth { Date.today }
        password { secure_pass }
        password_confirmation { secure_pass }
    end
end