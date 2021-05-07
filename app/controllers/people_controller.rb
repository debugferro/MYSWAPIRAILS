class PeopleController < ApplicationController

  def index
    base = MYSWAPIGEM::People.new
    @result = [base.find(1)]
    debugger
    base.total_records
  end

  def show

  end
end
