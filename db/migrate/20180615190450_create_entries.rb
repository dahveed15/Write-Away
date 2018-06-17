class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.integer :journal_id, null: false
      t.string :title
      t.string :body, null: false
      t.date :date, null: false
      t.string :image_url
      t.string :video_url

      t.timestamps
    end
    add_index :entries, :journal_id
  end
end
