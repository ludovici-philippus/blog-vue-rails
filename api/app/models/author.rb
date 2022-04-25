class Author < ApplicationRecord
  has_many :posts

  has_secure_password

  validates :name, presence: true
  validates :password, presence: true, if: -> { new_record? || !password.nil }
end
