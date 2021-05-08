class Planet
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :diameter, type: String
  field :rotation_period, type: String
  field :orbital_period, type: String
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

  def self.map_data(people)
    people.map(&:map_info)
  end

  def map_info
    {
      name: name,
      id: id.to_s,
      diameter: diameter,
      rotation_period: rotation_period,
      orbital_period: orbital_period,
      gravity: gravity,
      population: population,
      climate: climate,
      terrain: terrain,
      surface_water: surface_water,
      residents: residents.map(&:slim_map_info),
      films: films.map(&:slim_map_info),
    }
  end

  def slim_map_info
    {
      name: name,
      id: id.to_s
    }
  end
end
