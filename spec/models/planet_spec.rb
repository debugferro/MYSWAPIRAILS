require 'rails_helper'

RSpec.describe Planet, type: :model do
  it { is_expected.to have_many(:residents).of_type(People).as_inverse_of(:homeworld) }
  it { is_expected.to have_and_belong_to_many(:films).of_type(Film).as_inverse_of(:planets) }
end
