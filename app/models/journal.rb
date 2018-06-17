class Journal < ApplicationRecord
  validates :journal_id, :date, :body, presence: true

  belongs_to :user
  has_many :entries

end
