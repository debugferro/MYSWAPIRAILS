class Api::StarshipsController < ApplicationController

  def index
    starships = Starship.all
    return render json: Starship.map_data(starships), status: 200 if starships

    render json: { message: "Resource not found :(" }, status: 404
  end

  def show
    starship = Starship.where(id: params[:id]).last
    return render json: starship.map_info, status: 200 if starship

    render json: { message: "Resource not found :(" }, status: 404
  end
end
