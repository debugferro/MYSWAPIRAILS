class Starship
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :model, type: String
  field :startship_class, type: String
  field :manufacturer, type: String
  field :starship_class, type: String
  field :cost_in_credits, type: String
  field :length, type: String
  field :crew, type: String
  field :passengers, type: String
  field :max_atmosphering_speed, type: String
  field :hyperdrive_rating, type: String
  field :MGLT, type: String
  field :cargo_capacity, type: String
  field :consumables, type: String
  field :url, type: String

  validates :name, uniqueness: true
  validates :url, uniqueness: true

  has_and_belongs_to_many :pilots, class_name: 'People', inverse_of: :starships
  has_and_belongs_to_many :films, class_name: 'Film', inverse_of: :starships

  def self.map_data(starships)
    starships.map(&:map_info)
  end

  def map_info
    {
      name: name,
      id: id.to_s,
      starship_class: starship_class,
      manufacturer: manufacturer,
      cost_in_credits: cost_in_credits,
      length: length,
      crew: crew,
      passengers: passengers,
      max_atmosphering_speed: max_atmosphering_speed,
      hyperdrive_rating: hyperdrive_rating,
      MGLT: self.MGLT,
      consumables: consumables,
      cargo_capacity: cargo_capacity,
      films: films.map(&:slim_map_info),
      pilots: pilots.map(&:slim_map_info),
    }
  end

  def slim_map_info
    {
      name: name,
      id: id.to_s
    }
  end
end
