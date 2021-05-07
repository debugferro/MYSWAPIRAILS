class People
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :birth_year, type: String
  field :eye_color, type: String
  field :gender, type: String
  field :hair_color, type: String
  field :height, type: String
  field :mass, type: String
  field :skin_color, type: String
  field :homeworld, type: String
  # field :species, type: String
  # field :starships, type: String
  # field :vehicles, type: String
  field :url, type: String

  has_and_belongs_to_many :films, class_name: 'Film', inverse_of: :characters

  validates :name, uniqueness: true
  validates :url, uniqueness: true
end
