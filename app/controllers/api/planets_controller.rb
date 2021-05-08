class Api::PlanetsController < ApplicationController

  def index
    planets = Planet.all
    return render json: Planet.map_data(planets), status: 200 if planets

    render json: { message: "Resource not found :(" }, status: 404
  end

  def show
    planet = Planet.where(id: params[:id]).last
    return render json: planet.map_info, status: 200 if planet

    render json: { message: "Resource not found :(" }, status: 404
  end
end
