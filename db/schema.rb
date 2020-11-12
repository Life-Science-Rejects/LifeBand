# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_10_215102) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "emergency_contacts", force: :cascade do |t|
    t.string "full_name"
    t.string "relationship"
    t.string "phone_number"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "personal_infos", force: :cascade do |t|
    t.string "full_name"
    t.string "gender"
    t.string "phone_number"
    t.text "allergy"
    t.text "medical_history"
    t.text "treatment_refusal"
    t.string "pregnancy_status"
    t.string "smoker"
    t.string "alcohol"
    t.string "recreational_drug"
    t.string "menstruation"
    t.string "code_status"
    t.string "medical_condition"
    t.string "diagnosis_date"
    t.string "medication"
    t.string "dosage"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.date "date_of_birth"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
