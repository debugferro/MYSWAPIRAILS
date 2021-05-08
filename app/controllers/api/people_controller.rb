class Api::PeopleController < ApplicationController

  def index
    people = People.all
    return render json: People.map_data(people), status: 200 if people

    render json: { message: "Resource not found :(" }, status: 404
  end

  def show
    people = People.where(id: params[:id]).last
    return render json: people.map_info, status: 200 if people

    render json: { message: "Resource not found :(" }, status: 404
  end
end
