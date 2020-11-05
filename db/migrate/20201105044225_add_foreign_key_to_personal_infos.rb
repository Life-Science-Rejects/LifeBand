class AddForeignKeyToPersonalInfos < ActiveRecord::Migration[6.0]
  def change
    add_column :personal_infos, :user_id, :integer
  end
end
