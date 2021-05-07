class Film
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :episode_id, type: String
  field :opening_crawl, type: String
  field :director, type: String
  field :producer, type: String
  field :release_date, type: Date
  field :url, type: String

  validates :title, uniqueness: true
  validates :url, uniqueness: true

  has_and_belongs_to_many :characters, class_name: 'People', inverse_of: :films
  has_and_belongs_to_many :species, class_name: 'Species', inverse_of: :films
  has_and_belongs_to_many :starships, class_name: 'Starship', inverse_of: :films
  has_and_belongs_to_many :vehicles, class_name: 'Vehicle', inverse_of: :films
  has_and_belongs_to_many :planets, class_name: 'Planet', inverse_of: :films
end
