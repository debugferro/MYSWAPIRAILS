class Species
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :classification, type: String
  field :designation, type: String
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

  def self.map_data(species)
    species.map(&:map_info)
  end

  def map_info
    {
      name: name,
      id: id.to_s,
      classification: classification,
      designation: designation,
      average_height: average_height,
      average_lifespan: average_lifespan,
      eye_colors: eye_colors,
      hair_colors: hair_colors,
      skin_colors: skin_colors,
      language: language,
      homeworld: homeworld&.slim_map_info,
      films: films.map(&:slim_map_info),
      people: people.map(&:slim_map_info),
    }
  end

  def slim_map_info
    {
      name: name,
      id: id.to_s
    }
  end
end
