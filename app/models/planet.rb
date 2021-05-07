class Planet
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :diameter, type: String
  field :rotation_period, type: String
  field :gravity, type: String
  field :population, type: String
  field :climate, type: String
  field :terrain, type: String
  field :surface_water, type: String
  field :url, type: String

  validates :url, uniqueness: true
  validates :name, uniqueness: true

  has_many :residents, class_name: 'People', inverse_of: :homeworld
  has_and_belongs_to_many :films, class_name: 'Film', inverse_of: :planets
  # Residents = > People
  # Films
end
