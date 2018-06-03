class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :phone_number

      t.timestamps
    end
  end

  add_index :users, :email, unique: true
  add_index :users, :phone_number, unique: true
end
