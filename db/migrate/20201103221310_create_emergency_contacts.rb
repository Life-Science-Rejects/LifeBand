class CreateEmergencyContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :emergency_contacts do |t|
      t.string :full_name
      t.string :relationship
      t.string :phone_number
      t.integer :user_id

      t.timestamps
    end
  end
end
