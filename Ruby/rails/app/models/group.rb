class Group < ActiveRecord::Base
  belongs_to :user
  validates :name, length: {minimum: 6}
  validates :description, length: {minimum: 15}
  has_many :joins, dependent: :destroy
  has_many :users_joined, through: :joins, source: :user
end
