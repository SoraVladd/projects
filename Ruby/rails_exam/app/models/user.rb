class User < ActiveRecord::Base
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :first_name, :last_name,  presence: true
  validates :password, length: {minimum: 2}, on: :create
  has_secure_password
  before_save :downcase_email

  has_many :groups
  has_many :joins, dependent: :destroy 
  has_many :groups_joined, through: :joins, source: :group

  private
    def downcase_email
      self.email.downcase!
    end
end