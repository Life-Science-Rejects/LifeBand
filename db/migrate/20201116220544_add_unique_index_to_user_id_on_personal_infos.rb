class AddUniqueIndexToUserIdOnPersonalInfos < ActiveRecord::Migration[6.0]
  def change
    add_index :personal_infos, :user_id, unique: true
  end
end
