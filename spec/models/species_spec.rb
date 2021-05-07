require 'rails_helper'

RSpec.describe Species, type: :model do
  it { is_expected.to have_and_belong_to_many(:people).of_type(People).as_inverse_of(:species) }
  it { is_expected.to have_and_belong_to_many(:films).of_type(Film).as_inverse_of(:species) }
  it { is_expected.to have_one(:homeworld).of_type(Planet) }
end
