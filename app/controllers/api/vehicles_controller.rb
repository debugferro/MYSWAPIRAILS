class Api::VehiclesController < ApplicationController

  def index
    vehicles = Vehicle.all
    return render json: Vehicle.map_data(vehicles), status: 200 if vehicles

    render json: { message: "Resource not found :(" }, status: 404
  end

  def show
    vehicle = Vehicle.where(id: params[:id]).last
    return render json: vehicle.map_info, status: 200 if vehicle

    render json: { message: "Resource not found :(" }, status: 404
  end
end
