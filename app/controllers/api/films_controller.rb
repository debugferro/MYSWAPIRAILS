class Api::FilmsController < ApplicationController

  def index
    films = Film.all
    return render json: Film.map_data(films), status: 200 if films

    render json: { message: "Failed to find resources." }, status: 404
  end

  def show
    film = Film.where(id: params[:id]).last
    return render json: film.map_info, status: 200 if film

    render json: { message: "Could not find resource." }, status: 404
  end
end
