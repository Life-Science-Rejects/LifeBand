class CreatePersonalInfos < ActiveRecord::Migration[6.0]
  def change
    create_table :personal_infos do |t|
      t.string :full_name
      t.string :gender
      t.string :phone_number
      t.text :allergy
      t.text :medical_history
      t.text :treatment_refusal
      t.string :pregnancy_status
      t.string :smoker
      t.string :alcohol
      t.string :recreational_drug
      t.string :menstruation
      t.string :code_status
      t.string :medical_condition
      t.string :diagnosis_date
      t.string :medication
      t.string :dosage

      t.timestamps
    end
  end
end
