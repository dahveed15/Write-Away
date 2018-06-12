class CreateJournals < ActiveRecord::Migration[5.1]
  def change
    create_table :journals do |t|
      t.string :title, null: false
      t.string :image_url
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :journals, :user_id
  end
end
