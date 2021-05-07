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
  field :url, type: String

  validates :name, uniqueness: true
  validates :url, uniqueness: true

  has_and_belongs_to_many :films, class_name: 'Film', inverse_of: :characters
  has_and_belongs_to_many :species, class_name: 'Species', inverse_of: :people
  has_and_belongs_to_many :starships, class_name: 'Starship', inverse_of: :pilots
  has_and_belongs_to_many :vehicles, class_name: 'Vehicle', inverse_of: :pilots
  belongs_to :homeworld, class_name: 'Planet', inverse_of: :residents, optional: true
end
