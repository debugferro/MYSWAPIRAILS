class Vehicle
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :model, type: String
  field :vehicle_class, type: String
  field :manufacturer, type: String
  field :length, type: String
  field :cost_in_credits, type: String
  field :crew, type: String
  field :passengers, type: String
  field :max_atmosphering_speed, type: String
  field :cargo_capacity, type: String
  field :consumables, type: String
  field :url, type: String

  validates :name, uniqueness: true
  validates :url, uniqueness: true

  has_and_belongs_to_many :pilots, class_name: 'People', inverse_of: :vehicles
  has_and_belongs_to_many :films, class_name: 'Film', inverse_of: :vehicles

  def self.map_data(vehicles)
    vehicles.map(&:map_info)
  end

  def map_info
    {
      name: name,
      id: id.to_s,
      model: model,
      vehicle_class: vehicle_class,
      manufacturer: manufacturer,
      length: length,
      cost_in_credits: cost_in_credits,
      passengers: passengers,
      crew: crew,
      max_atmosphering_speed: max_atmosphering_speed,
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
