require 'rails_helper'

RSpec.describe People, type: :model do
  it { is_expected.to be_mongoid_document }
  it { is_expected.to have_and_belong_to_many(:films).of_type(Film).as_inverse_of(:characters) }
  it { is_expected.to have_and_belong_to_many(:species).of_type(Species).as_inverse_of(:people) }
  it { is_expected.to have_and_belong_to_many(:starships).of_type(Starship).as_inverse_of(:pilots) }
  it { is_expected.to have_and_belong_to_many(:vehicles).of_type(Vehicle).as_inverse_of(:pilots) }
  it { is_expected.to belong_to(:homeworld).of_type(Planet).as_inverse_of(:residents).with_optional }
end
