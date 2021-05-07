class Species
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :classification, type: String
  field :deisgnation, type: String
  field :average_height, type: String
  field :average_lifespan, type: String
  field :eye_colors, type: String
  field :hair_colors, type: String
  field :skin_colors, type: String
  field :language, type: String
  field :url, type: String

  validates :name, uniqueness: true
  validates :url, uniqueness: true

  has_and_belongs_to_many :people, class_name: 'People', inverse_of: :species
  has_and_belongs_to_many :films, class_name: 'Film', inverse_of: :species
  has_one :homeworld, class_name: 'Planet'
end
