class Api::SpeciesController < ApplicationController

  def index
    species = Species.all
    return render json: Species.map_data(species), status: 200 if species

    render json: { message: "Resource not found :(" }, status: 404
  end

  def show
    species = Species.where(id: params[:id]).last
    return render json: species.map_info, status: 200 if species

    render json: { message: "Resource not found :(" }, status: 404
  end

end
