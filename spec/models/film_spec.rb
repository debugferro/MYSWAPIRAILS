require 'rails_helper'

RSpec.describe Film, type: :model do
  it { is_expected.to be_mongoid_document }
  it { is_expected.to have_and_belong_to_many(:characters).of_type(People).as_inverse_of(:films) }
  it { is_expected.to have_and_belong_to_many(:species).of_type(Species).as_inverse_of(:films) }
  it { is_expected.to have_and_belong_to_many(:starships).of_type(Starship).as_inverse_of(:films) }
  it { is_expected.to have_and_belong_to_many(:vehicles).of_type(Vehicle).as_inverse_of(:films) }
  it { is_expected.to have_and_belong_to_many(:planets).of_type(Planet).as_inverse_of(:films) }
end
