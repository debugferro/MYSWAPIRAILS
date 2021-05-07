class Film
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :opening_crawl, type: String
  field :director, type: String
  field :producer, type: String
  field :release_date, type: Date
  field :url, type: String

  has_and_belongs_to_many :characters, class_name: 'People', inverse_of: :films

  validates :title, uniqueness: true
end
