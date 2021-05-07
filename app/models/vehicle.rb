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
end
