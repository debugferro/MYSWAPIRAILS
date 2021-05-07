require 'rails_helper'

RSpec.describe Vehicle, type: :model do
  it { is_expected.to have_and_belong_to_many(:pilots).of_type(People).as_inverse_of(:vehicles) }
  it { is_expected.to have_and_belong_to_many(:films).of_type(Film).as_inverse_of(:vehicles) }
end
