class Entry < ApplicationRecord
  validates :body, :journal_id, :date, presence: true
  validates :body, length: { maximum: 160 }

  belongs_to :journal
end
